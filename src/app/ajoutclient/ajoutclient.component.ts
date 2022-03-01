import { Component, OnInit } from '@angular/core';
import Categorie from "../interface/Categorie";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../produit.service";
import {CategorieService} from "../categorie.service";
import Client from "../interface/Client";
import {ClientService} from "../client.service";
@Component({
  selector: 'app-ajoutclient',
  templateUrl: './ajoutclient.component.html',
  styleUrls: ['./ajoutclient.component.css']
})
export class AjoutclientComponent implements OnInit {
  public clientbyId:Client[]=[];
  private idPersonne: number=0;
  private societe: string="";
  private poste: string="";
  private idClient: number=0;
  constructor(private route:ActivatedRoute, private clientService:ClientService, private  produiService:ProduitService,private categorieService:CategorieService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    let id=this.route.snapshot.params['id'];
    console.log("//");
    console.log(id);
    if(id!=null&&id!=undefined){
      this.clientService.getclientById$(this.route.snapshot.params['id']).subscribe(data=>{
        this.clientbyId=data.message;
        console.log(data);
        this.idPersonne=this.clientbyId[0].idPersonne;
        this.societe=this.clientbyId[0].societe;
        this.poste=this.clientbyId[0].poste;
        this.idClient=this.clientbyId[0].idClient;
        console.log(this.clientbyId)
      })
    }

  }
  modifierProduit(){
    this.clientService.updateclientById$(this.idPersonne, this.idClient, this.societe, this.poste ).subscribe(data=>{
      console.log(data);
      this.rechargeClick();
    })



  }
  ajouterProduit(){
    this.clientService.ajoutclient$(this.idPersonne, this.societe, this.poste ).subscribe(data=>{
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
