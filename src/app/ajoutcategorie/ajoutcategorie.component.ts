import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../produit.service";
import {CategorieService} from "../categorie.service";
import Categorie from "../interface/Categorie";
@Component({
  selector: 'app-ajoutcategorie',
  templateUrl: './ajoutcategorie.component.html',
  styleUrls: ['./ajoutcategorie.component.css']
})
export class AjoutcategorieComponent implements OnInit {
  public nom: string="";
  public idCategorie: number=0;
  public categoriebyId:Categorie[]=[];
public type: string="";
  constructor(private route:ActivatedRoute, private  produiService:ProduitService,private categorieService:CategorieService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    let id=this.route.snapshot.params['id'];
    console.log("//");
    console.log(id);
    if(id!=null&&id!=undefined){
      this.categorieService.getcategorieById$(this.route.snapshot.params['id']).subscribe(data=>{
        this.categoriebyId=data.message;
        console.log(data);
        this.idCategorie=this.categoriebyId[0].idCategorie;
        this.nom=this.categoriebyId[0].nom;
        this.type=this.categoriebyId[0].type;
        console.log(this.categoriebyId)
      })
    }

  }
  modifierCategorie(){
    this.categorieService.updatecategorieById$(this.nom, this.type, this.idCategorie).subscribe(data=>{
      console.log(data);
      this.rechargeClick();
    })



  }
  ajouterCategorie(){
    this.categorieService.ajoutcategorie$(this.nom, this.type).subscribe(data=>{
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
