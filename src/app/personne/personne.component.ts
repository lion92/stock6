import { Component, OnInit } from '@angular/core';
import {PersonneService} from "../personne.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ProduitService} from "../produit.service";
import Personne from "../interface/Personne"
import {AjoutproduitComponent} from "../ajoutproduit/ajoutproduit.component";
import {AjoutpersonneComponent} from "../ajoutpersonne/ajoutpersonne.component";
@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  public listpersonne:Personne[]=[];

  constructor(private personneService:PersonneService,private router:Router,public dialog:MatDialog, public produitService:ProduitService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.personneService.getPersonnes$().subscribe(data=>{
      this.listpersonne=data.message;

      console.log(data.message);
    })
    this.route.paramMap.subscribe(params=>{
      let id= params.get("id");
      console.log(id);
    })
  }

  openDialog() {

    this.dialog.open(AjoutpersonneComponent,{
      height: '80%',
      width:'50vw',
      autoFocus: false,
    });
  }
  supprimerPersonne(idPersonne:string){

    this.personneService.supprimerPersonne$(+idPersonne).subscribe(data=>{
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
