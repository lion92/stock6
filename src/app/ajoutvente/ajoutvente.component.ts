import { Component, OnInit } from '@angular/core';
import Client from "../interface/Client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../client.service";
import {ProduitService} from "../produit.service";
import {CategorieService} from "../categorie.service";
import {VenteService} from "../vente.service";
import Vente from '../interface/Vente'
@Component({
  selector: 'app-ajoutvente',
  templateUrl: './ajoutvente.component.html',
  styleUrls: ['./ajoutvente.component.css']
})
export class AjoutventeComponent implements OnInit {

  public ventebyId:Vente[]=[];
  public idPersonne: number=0;
  public societe: string="";
  public poste: string="";
  public idClient: number=0;
  public idProduit: number=0;
  public quantite: number=0;
  public prixTotal: number=0;
  public idUser: number=0;
  public taxe: number=0;
  public idVente: number=0;
  constructor(private route:ActivatedRoute,private venteService:VenteService, private clientService:ClientService, private  produiService:ProduitService,private categorieService:CategorieService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    let id=this.route.snapshot.params['id'];
    console.log("//");
    console.log(id);
    if(id!=null&&id!=undefined){
      this.venteService.getventeById$(this.route.snapshot.params['id']).subscribe(data=>{
        this.ventebyId=data.message;
        console.log(data);
        this.idClient=this.ventebyId[0].idClient;
        this.idProduit=this.ventebyId[0].idProduit;
        this.quantite=this.ventebyId[0].quantite;
        this.prixTotal=this.ventebyId[0].PrixTotal;
        this.idUser=this.ventebyId[0].idUser;
        this.taxe=this.ventebyId[0].taxe;
        this.idVente=this.ventebyId[0].idvente
        console.log(this.ventebyId)
      })
    }

  }
  modifierVente(){
    this.venteService.updateventeById$(+this.idClient, +this.idProduit, +this.quantite, +this.prixTotal,+this.idUser, +this.taxe, +this.idVente).subscribe(data=>{
      console.log(data);
      this.rechargeClick();
    })



  }
  ajouterVente(){
    this.venteService.ajoutvente$(this.idClient, this.idProduit, this.quantite, this.prixTotal,this.idUser, this.taxe ).subscribe(data=>{
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
