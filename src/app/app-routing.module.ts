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


const routes: Routes = [
  {
    path:"updateProduit",component:ProduitComponent
  },
  {
    path:"updatePersonne",component:PersonneComponent
  },
  {
    path:"updateProduit/:id",component:AjoutproduitComponent
  },
  {
    path:"updatePersonne/:id",component:AjoutpersonneComponent
  },
  {
    path:"produit",component:ProduitComponent
  },
  {
    path:"produit",component:ProduitComponent
  },
  {
    path:"vente",component:VenteComponent
  },  {
    path:"categorie",component:CategorieComponent
  },
  {
    path:"client",component:ClientComponent
  },
  {
    path:"graphique",component:ChartventeComponent
  },  {
    path:"ajoutproduit",component:AjoutproduitComponent
  },  {
    path:"ajoutvente",component:AjoutventeComponent
  },  {
    path:"ajoutclient",component:AjoutclientComponent
  },  {
    path:"ajoutcategorie",component:AjoutcategorieComponent
  }
  ,  {
    path:"ajoutpersonne",component:AjoutpersonneComponent
  }
  ,  {
    path:"personne",component:PersonneComponent
  },  {
    path:"login",component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
