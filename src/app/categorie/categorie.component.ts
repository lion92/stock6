import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { AjoutcategorieComponent } from '../ajoutcategorie/ajoutcategorie.component';
import Client from "../interface/Client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProduitService} from "../produit.service";
import {CategorieService} from "../categorie.service";
import Categorie from "../interface/Categorie";
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public listCategorie:Categorie[]=[];
  constructor(private dialog:MatDialog,private route:ActivatedRoute,private clientService:ClientService, private categoieService:CategorieService, private  produiService:ProduitService, private router:Router) { }

  ngOnInit(): void {
    this.categoieService.getcategories$().subscribe(data=>{
      this.listCategorie=data.message;

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

  supprimerVente(idClient:string){

    this.categoieService.supprimercategorie$(+idClient).subscribe(data=>{
      console.log(data);
      this.rechargeClick();
    })
  }
  rechargeClick() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./categorie'])
  }
}
