import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AjoutventeComponent} from '../ajoutvente/ajoutvente.component'
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AjoutventeComponent,{
      height: '80%',
      width:'50vw',
      autoFocus: false,
    });
  }
}
