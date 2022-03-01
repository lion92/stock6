import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../produit.service";
import Personne from "../interface/Personne";
import {PersonneService} from "../personne.service";

@Component({
  selector: 'app-ajoutpersonne',
  templateUrl: './ajoutpersonne.component.html',
  styleUrls: ['./ajoutpersonne.component.css']
})
export class AjoutpersonneComponent implements OnInit {
  public personnebyId:Personne[]=[];
  public nom: any;
  public prenom: any;
  public age: any;
  public ville: any;
  public numero: any;
  public adresse: string="";
  public codePostale: string="";
  public email: any;
  public idPersonne: number=0;
  dateAjout: any;


  constructor(private route:ActivatedRoute, private  produiService:ProduitService, private router:Router, private personneService:PersonneService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    let id=this.route.snapshot.params['id'];
    console.log("//");
    console.log(id);
    if(id!=null&&id!=undefined){
      this.personneService.getPersonneById$(this.route.snapshot.params['id']).subscribe(data=>{
        this.personnebyId=data.message;
        console.log(data);
        this.nom=this.personnebyId[0].nom;
        this.prenom=this.personnebyId[0].prenom;
        this.age=this.personnebyId[0].age;
        this.ville=this.personnebyId[0].ville;
        this.numero=this.personnebyId[0].numeroTelephone;
        this.adresse=this.personnebyId[0].adresse;
        this.codePostale=this.personnebyId[0].codePostale;
        this.email=this.personnebyId[0].email;
        this.idPersonne=this.personnebyId[0].idPersonne;
        this.dateAjout=this.personnebyId[0].ajoutDate;

        console.log(this.personnebyId)
      })
    }
  }
  modifierPersonne(){
    this.personneService.updatePersonneById$( this.nom, this.prenom, this.age, this.ville, this.numero, this.adresse, this.codePostale, this.email, this.idPersonne).subscribe(data=>{
      console.log(data);
      this.rechargeClick();
    })



  }
  ajouterPersonne(){
    this.personneService.ajoutPersonne$( this.nom, this.prenom, this.age, this.ville, this.numero, this.adresse, this.codePostale, this.email).subscribe(data=>{
      console.log(data);
      this.rechargeClick();
    })
  }


  rechargeClick() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./personne'])
  }

}
