import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { AjoutcategorieComponent } from '../ajoutcategorie/ajoutcategorie.component';
import Client from "../interface/Client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProduitService} from "../produit.service";
import {CategorieService} from "../categorie.service";
import Categorie from "../interface/Categorie";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {MessageService} from "../message.service";
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public listCategorie:Categorie[]=[];
  public pageSlice: Categorie[]=[];
  public listId: number[]= [];
  constructor(public messageService:MessageService,private dialog:MatDialog,private route:ActivatedRoute,private clientService:ClientService, private categoieService:CategorieService, private  produiService:ProduitService, private router:Router) { }

  ngOnInit(): void {
    this.categoieService.getcategories$().subscribe(data=>{
      this.listCategorie=data.message;
      this.pageSlice=this.listCategorie.slice(0,1);
      console.log(data.message);
    })
    this.route.paramMap.subscribe(params=>{
      let id= params.get("id");
      console.log(id);
    })
  }
  openDialog() {
    this.dialog.open(AjoutcategorieComponent,{
      height: '80%',
      width:'50vw',
      autoFocus: false,
    });
  }

  supprimerCategorie(idClient:number){

    this.categoieService.supprimercategorie$(+idClient).subscribe(data=>{
      this.messageService.setMessage(""+JSON.stringify(data.message));;
      this.rechargeClick();
    })
  }



  supprimerListCategorie(listAsupprimer:number[]){
    listAsupprimer.forEach(data=>{
      this.supprimerCategorie(data);
    })
  }

  rechargeClick() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./categorie'])
  }
  onChangeChange($event: any) {
    console.log($event)
    console.log($event.pageIndex)
    let startIndex=$event.pageIndex * $event.pageSize;
    let endIndex= startIndex + $event.pageSize;
    if(endIndex>this.listCategorie.length){
      endIndex=this.listCategorie.length;
    }
    this.pageSlice=this.listCategorie.slice(startIndex, endIndex);
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
    var data = document.getElementById('tableCategorie');
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
