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

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AjoutclientComponent,{
      height: '80%',
      width:'50vw',
      autoFocus: false,

    });
  }

  toggle() {
    this.isOpen=!this.isOpen;
  }
}
