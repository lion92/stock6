import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AjoutproduitComponent} from '../ajoutproduit/ajoutproduit.component'
import {ProduitService} from "../produit.service";
import Produit from "../interface/Produit";
import {ActivatedRoute} from "@angular/router";
import { Router,ParamMap } from '@angular/router';
import Personne from "../interface/Personne";
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private router:Router,public dialog:MatDialog, public produitService:ProduitService,private route:ActivatedRoute) { }
  public listproduit:Produit[]=[];
  public pageSlice:Produit[]=[];
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

  supprimerProduit(idProduit:string){

    this.produitService.supprimerProduit$(+idProduit).subscribe(data=>{
      console.log(data);
      this.rechargeClick();
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
}
