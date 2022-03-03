import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AjoutclientComponent} from '../ajoutclient/ajoutclient.component'
import{
  trigger,
  state,
  style,
  animate,
  transition
}
from'@angular/animations'
import Personne from "../interface/Personne";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../produit.service";
import {ClientService} from "../client.service";
import Client from "../interface/Client";
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'300px',
        opacity:"0",
        backgroundColor:"green"
      })),
      state('closed',style({
          height:'100%',
        backgroundColor:"#828756"
      }))
    ,transition('open => closed',[
      animate('1s 1s ease-out')
    ]),transition('closed => open',[
        animate('0.5s')
      ])
  ])
]
})
export class ClientComponent implements OnInit {
  public isOpen: boolean=true;
  public listClient:Client[]=[];
  constructor(private dialog:MatDialog,private route:ActivatedRoute,private clientService:ClientService, private  produiService:ProduitService, private router:Router) { }

  ngOnInit(): void {
    this.clientService.getclients$().subscribe(data=>{
      this.listClient=data.message;

      console.log(data.message);
    })
    this.route.paramMap.subscribe(params=>{
      let id= params.get("id");
      console.log(id);
    })
  }
  openDialog() {
    this.dialog.open(AjoutclientComponent,{
      height: '80%',
      width:'50vw',
      autoFocus: false,

    });
  }

  supprimerClient(idClient:string){

    this.clientService.supprimerclient$(+idClient).subscribe(data=>{
      console.log(data);
      this.rechargeClick();
    })
  }

  toggle() {
    this.isOpen=!this.isOpen;
  }
  rechargeClick() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./vente'])
  }
}
