import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import categorie from "../app/interface/Categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  url="http://localhost:8000/";
  public cartegorieUrl:string="selectCategories";
  private categorieByidUrl:string="selectCategorieParId"
  private updateCategorieService:string="updateCategorie"
  private ajouterCategorie:string="ajoutCategorie"
  private deletecategorie:string="deleteCategorie"
  constructor(private  http:HttpClient) { }
  getcategories$(): Observable<any> {
    let res: Observable<categorie[]> = this.http.get<any[]>(
      this.url + this.cartegorieUrl,
      this.optionRequete
    );
    console.log(res);
    return res;
  }

  getcategorieById$(id:string): Observable<any> {
    let res: Observable<categorie[]> = this.http.get<any[]>(
      this.url + this.categorieByidUrl + "/" + id,
      this.optionRequete
    );
    console.log(res);
    return res;
  }
  updatecategorieById$( nom:string, type:string,idCategorie:number): Observable<any> {
    let res: Observable<categorie[]> = this.http.put<any[]>(
      this.url + this.updateCategorieService,
      {nom: nom, type:type, idCategorie:idCategorie},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  ajoutcategorie$(nom:string, type:string): Observable<any> {
    let res: Observable<categorie[]> = this.http.post<any[]>(
      this.url + this.ajouterCategorie,
      {nom: nom, type:type},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  supprimercategorie$( idcategorie:number): Observable<any> {
    let res: Observable<categorie[]> = this.http.delete<any[]>(
      this.url + this.deletecategorie+"/"+idcategorie,
      this.optionRequete

    );
    console.log(res);
    return res;
  }
}
