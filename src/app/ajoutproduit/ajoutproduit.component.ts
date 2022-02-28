import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitService} from "../produit.service";
import Produit from "../interface/Produit";

@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {
public produitbyId:Produit[]=[];
  constructor(private route:ActivatedRoute, private  produiService:ProduitService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    let id=this.route.snapshot.params['id'];
    console.log("//");
    console.log(id);
    if(id!=null&&id!=undefined){
      this.produiService.getProduitById$(this.route.snapshot.params['id']).subscribe(data=>{
        this.produitbyId=data.message;
        console.log(data);
        console.log(this.produitbyId)
      })
    }
  }

}
