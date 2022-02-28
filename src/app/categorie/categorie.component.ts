import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { AjoutcategorieComponent } from '../ajoutcategorie/ajoutcategorie.component';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AjoutcategorieComponent,{
      height: '80%',
      width:'50vw',
      autoFocus: false,
    });
  }
}
