import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitService} from "../produit.service";
import Produit from "../interface/Produit";
import { Router,ParamMap } from '@angular/router';
import {MessageService} from "../message.service";
@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {
public produitbyId:Produit[]=[];
  public nom: any;
  public idCategorie: any;
  public Prix: any;
  public idProduit: any;
  public stock: any;
  constructor(public messageService: MessageService, private route:ActivatedRoute, private  produiService:ProduitService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    let id=this.route.snapshot.params['id'];
    console.log("//");
    console.log(id);
    if(id!=null&&id!=undefined){
      this.produiService.getProduitById$(this.route.snapshot.params['id']).subscribe(data=>{
        this.produitbyId=data.message;
        this.messageService.setMessage(""+JSON.stringify(data.message));;
        this.nom=this.produitbyId[0].nom;
        this.idCategorie=this.produitbyId[0].idCategorie;
        this.Prix=this.produitbyId[0].Prix;
        this.idProduit=this.produitbyId[0].idProduit;
        this.stock=this.produitbyId[0].stock;
        console.log(this.produitbyId)
      })
    }

  }
modifierProduit(){
    this.produiService.updateProduitById$((+this.idCategorie), (+this.Prix), (+this.stock), this.nom, + (+this.idProduit)).subscribe(data=>{
      this.messageService.setMessage(""+JSON.stringify(data.message));;
      this.rechargeClick();
    })



  }
  ajouterProduit(){
    this.produiService.ajoutProduit$((+this.idCategorie), (+this.Prix), (+this.stock), this.nom).subscribe(data=>{
      this.messageService.setMessage(""+JSON.stringify(data.message));
      this.rechargeClick();
    })
}


  rechargeClick() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./produit'])
  }

}
