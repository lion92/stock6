import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitComponent} from "./produit/produit.component";
import {AjoutproduitComponent} from "./ajoutproduit/ajoutproduit.component";
import {VenteComponent} from "./vente/vente.component";
import {CategorieComponent} from "./categorie/categorie.component";
import {ClientComponent} from "./client/client.component";
import {ChartventeComponent} from "./chartvente/chartvente.component";
import {AjoutventeComponent} from "./ajoutvente/ajoutvente.component";
import {AjoutclientComponent} from "./ajoutclient/ajoutclient.component";
import {AjoutcategorieComponent} from "./ajoutcategorie/ajoutcategorie.component";
import {AjoutpersonneComponent} from "./ajoutpersonne/ajoutpersonne.component";
import {PersonneComponent} from "./personne/personne.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import{
  GuardlinkService
} from "./guardlink.service";

const routes: Routes = [
  {
    path:"updateProduit",component:ProduitComponent,canActivate:[GuardlinkService]
  },
  {
    path:"updatePersonne",component:PersonneComponent,canActivate:[GuardlinkService]
  },{
    path:"updatePersonne/:id",component:AjoutpersonneComponent,canActivate:[GuardlinkService]
  },
  {
    path:"updateClient",component:ClientComponent,canActivate:[GuardlinkService]
  },{
    path:"updateClient/:id",component:AjoutclientComponent,canActivate:[GuardlinkService]
  },
  {
    path:"updateCategorie",component:CategorieComponent,canActivate:[GuardlinkService]
  },{
    path:"updateCategorie/:id",component:AjoutcategorieComponent,canActivate:[GuardlinkService]
  },
  {
    path:"updateVente",component:VenteComponent,canActivate:[GuardlinkService]
  },{
    path:"updateVente/:id",component:AjoutventeComponent,canActivate:[GuardlinkService]
  },
  {
    path:"updateProduit/:id",component:AjoutproduitComponent,canActivate:[GuardlinkService]
  },

  {
    path:"produit",component:ProduitComponent,canActivate:[GuardlinkService]
  },
  {
    path:"vente",component:VenteComponent,canActivate:[GuardlinkService]
  },  {
    path:"categorie",component:CategorieComponent,canActivate:[GuardlinkService]
  },
  {
    path:"client",component:ClientComponent,canActivate:[GuardlinkService]
  },
  {
    path:"graphique",component:ChartventeComponent,canActivate:[GuardlinkService]
  },  {
    path:"ajoutproduit",component:AjoutproduitComponent,canActivate:[GuardlinkService]
  },  {
    path:"ajoutvente",component:AjoutventeComponent,canActivate:[GuardlinkService]
  },  {
    path:"ajoutclient",component:AjoutclientComponent,canActivate:[GuardlinkService]
  },  {
    path:"ajoutcategorie",component:AjoutcategorieComponent,canActivate:[GuardlinkService]
  }, {
    path:"register",component:RegisterComponent
  }
  ,  {
    path:"ajoutpersonne",component:AjoutpersonneComponent,canActivate:[GuardlinkService]
  }
  ,  {
    path:"personne",component:PersonneComponent,canActivate:[GuardlinkService]
  },  {
    path:"login",component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
