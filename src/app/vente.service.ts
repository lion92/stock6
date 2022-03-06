import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import Vente from "../app/interface/Vente";

@Injectable({
  providedIn: 'root'
})
export class VenteService {


  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  url="http://localhost:8000/";
  public venteUrl:string="selectVentes";
  private venteByidUrl:string="selectventeParid"
  private updateventeService:string="updateVente"
  private ajoutervente:string="ajoutVente"
  private deletevente:string="deleteVente"
  private lisfacture: Vente[]=[];
  constructor(private  http:HttpClient) { }
  getventes$(): Observable<any> {
    let res: Observable<Vente[]> = this.http.get<any[]>(
      this.url + this.venteUrl,
      this.optionRequete
    );
    console.log(res);
    return res;
  }
  setlistfacture(listFacture:Vente[]){
    this.lisfacture=listFacture;

  }
  getlistfacture(){
    return this.lisfacture;
  }

  getventeById$(id:number): Observable<any> {
    let res: Observable<Vente[]> = this.http.get<any[]>(
      this.url + this.venteByidUrl + "/" + id,
      this.optionRequete
    );
    console.log(res);
    return res;
  }
  updateventeById$( idClient:number, idProduit:number, quantite: number, prixToltal:number, idUser:number, taxe:number, idvente:number): Observable<any> {
    let res: Observable<Vente[]> = this.http.put<any[]>(
      this.url + this.updateventeService,
      {idClient:idClient, idProduit:idProduit, quantite: quantite, PrixTotal:prixToltal, idUser:idUser, taxe:taxe, idvente:idvente},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  ajoutvente$( idClient:number, idProduit:number, quantite: number, prixToltal:number, idUser:number, taxe:number): Observable<any> {
    let res: Observable<Vente[]> = this.http.post<any[]>(
      this.url + this.ajoutervente,
      {idClient:idClient, idProduit:idProduit, quantite: quantite, PrixTotal:prixToltal, idUser:idUser, taxe:taxe},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  supprimervente$( idvente:number): Observable<any> {
    let res: Observable<Vente[]> = this.http.delete<any[]>(
      this.url + this.deletevente+"/"+idvente,
      this.optionRequete

    );
    console.log(res);
    return res;
  }
}
