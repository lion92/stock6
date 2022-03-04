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
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {MessageService} from "../message.service";
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
  public pageSlice: Client[]=[];
  public listId: number[]= [];
  constructor(public messageService:MessageService,private dialog:MatDialog,private route:ActivatedRoute,private clientService:ClientService, private  produiService:ProduitService, private router:Router) { }

  ngOnInit(): void {
    this.clientService.getclients$().subscribe(data=>{
      this.listClient=data.message;
      this.pageSlice=this.listClient.slice(0,1);
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

  supprimerClient(idClient:number){

    this.clientService.supprimerclient$(+idClient).subscribe(data=>{
      this.messageService.setMessage(""+JSON.stringify(data.message));;
      this.rechargeClick();
    })
  }

  supprimerListClient(listAsupprimer:number[]){
    listAsupprimer.forEach(data=>{
      this.supprimerClient(data);
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
  onChangeChange($event: any) {
    console.log($event)
    console.log($event.pageIndex)
    let startIndex=$event.pageIndex * $event.pageSize;
    let endIndex= startIndex + $event.pageSize;
    if(endIndex>this.listClient.length){
      endIndex=this.listClient.length;
    }
    this.pageSlice=this.listClient.slice(startIndex, endIndex);
  }

  onChangeSelect(clientId:number, $event: any) {
    if($event.target.checked===true) {
      this.listId.push(clientId);
    } else {
      let index = this.listId.indexOf(clientId)
      console.log(index);
      if(index>-1) {
        this.listId.splice(index, 1);
      }
    }
    console.log(this.listId);

  }
  generatePDF() {
    var data = document.getElementById('tableClient');
    if(data!==null){
      html2canvas(data).then(canvas => {
        var imgWidth = 208;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jsPDF('p', 'mm', 'a4');
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('newPDF.pdf');

      });
    }
  }
}
