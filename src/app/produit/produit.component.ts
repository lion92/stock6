import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AjoutproduitComponent} from '../ajoutproduit/ajoutproduit.component'
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AjoutproduitComponent,{
      height: '80%',
      width:'50vw',
      autoFocus: false,
    });
  }
}
