import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { ProduitComponent } from './produit/produit.component';
import { ClientComponent } from './client/client.component';
import { CategorieComponent } from './categorie/categorie.component';
import { VenteComponent } from './vente/vente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';
import { AjoutcategorieComponent } from './ajoutcategorie/ajoutcategorie.component';
import { AjoutclientComponent } from './ajoutclient/ajoutclient.component';
import { AjoutventeComponent } from './ajoutvente/ajoutvente.component';
import { ChartventeComponent } from './chartvente/chartvente.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonneComponent } from './personne/personne.component';
import { AjoutpersonneComponent } from './ajoutpersonne/ajoutpersonne.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    ProduitComponent,
    ClientComponent,
    CategorieComponent,
    VenteComponent,
    AjoutproduitComponent,
    AjoutcategorieComponent,
    AjoutclientComponent,
    AjoutventeComponent,
    ChartventeComponent,
    PersonneComponent,
    AjoutpersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,MatDialogModule, MatButtonModule, HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
