import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AjoutproduitComponent} from '../ajoutproduit/ajoutproduit.component'
import {ProduitService} from "../produit.service";
import Produit from "../interface/Produit";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(public dialog:MatDialog, public produitService:ProduitService,private route:ActivatedRoute) { }
  public listproduit:Produit[]=[];
  ngOnInit(): void {

    this.produitService.getProduit$().subscribe(data=>{
      this.listproduit=data.message;

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
}
