import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AjoutventeComponent} from '../ajoutvente/ajoutvente.component'
import Categorie from "../interface/Categorie";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../client.service";
import {CategorieService} from "../categorie.service";
import {ProduitService} from "../produit.service";
import Vente from "../interface/Vente";
import {VenteService} from "../vente.service";
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {

  public listVente:Vente[]=[];
  constructor(private dialog:MatDialog,private venteService:VenteService, private route:ActivatedRoute,private clientService:ClientService, private categoieService:CategorieService, private  produiService:ProduitService, private router:Router) { }

  ngOnInit(): void {
    this.venteService.getventes$().subscribe(data=>{
      this.listVente=data.message;

      console.log(data.message);
    })
    this.route.paramMap.subscribe(params=>{
      let id= params.get("id");
      console.log(id);
    })
  }
  openDialog() {
    this.dialog.open(AjoutventeComponent,{
      height: '80%',
      width:'50vw',
      autoFocus: false,
    });
  }
  supprimerVente(idClient:string){

    this.venteService.supprimervente$(+idClient).subscribe(data=>{
      console.log(data);
      this.rechargeClick();
    })
  }
  rechargeClick() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./vente'])
  }
}
