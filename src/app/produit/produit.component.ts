import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AjoutproduitComponent} from '../ajoutproduit/ajoutproduit.component'
import {ProduitService} from "../produit.service";
import Produit from "../interface/Produit";
import {ActivatedRoute} from "@angular/router";
import { Router,ParamMap } from '@angular/router';


import html2canvas from "html2canvas";

import jsPDF from "jspdf";
import {MessageService} from "../message.service";
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(public messageService:MessageService,private router:Router,public dialog:MatDialog, public produitService:ProduitService,private route:ActivatedRoute) { }
  public listproduit:Produit[]=[];
  public pageSlice:Produit[]=[];
  public listId: number[]= [];
  ngOnInit(): void {

    this.produitService.getProduit$().subscribe(data=>{
      this.listproduit=data.message;
        this.pageSlice=this.listproduit.slice(0,1);
      console.log(data.message);
    })
    this.route.paramMap.subscribe(params=>{
      let id= params.get("id");
    console.log(id);
    })
  }
  updateProduit(){
    console.log(this.route.snapshot.paramMap.get("id"))
  }
  openDialog() {

    this.dialog.open(AjoutproduitComponent,{
      height: '80%',
      width:'50vw',
      autoFocus: false,
    });
  }

  supprimerProduit(idProduit:number){

    this.produitService.supprimerProduit$(+idProduit).subscribe(data=>{
      this.messageService.setMessage(""+JSON.stringify(data.message));;
      this.rechargeClick();
    })
  }
  supprimerListProduit(listAsupprimer:number[]){
    listAsupprimer.forEach(data=>{
      this.supprimerProduit(data);
    })
  }
  rechargeClick() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./produit'])
  }
  onChangeChange($event: any) {
    console.log($event)
    console.log($event.pageIndex)
    let startIndex=$event.pageIndex * $event.pageSize;
    let endIndex= startIndex + $event.pageSize;
    if(endIndex>this.listproduit.length){
      endIndex=this.listproduit.length;
    }
    this.pageSlice=this.listproduit.slice(startIndex, endIndex);
  }

  onChangeSelect(clientId:number, $event: any) {
    if($event.target.checked===true) {
      this.listId.push(clientId);
    } else {
      let index = this.listId.indexOf(clientId)
      console.log(index);
      if(index>-1) {
        this.listId.splice(index, 1);
      }
    }
    console.log(this.listId);

  }

  generatePDF() {
    var data = document.getElementById('tableProduit');
    if(data!==null){
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('newPDF.pdf');

    });
    }
  }
}
