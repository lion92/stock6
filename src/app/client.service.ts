import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import Client from "../app/interface/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  url="http://localhost:8000/";
  public clientUrl:string="selectClients";
  private clientByidUrl:string="selectClientParId"
  private updateclientService:string="updateclient"
  private ajouterclient:string="ajoutClient"
  private deleteclient:string="deleteClient"
  constructor(private  http:HttpClient) { }
  getclients$(): Observable<any> {
    let res: Observable<Client[]> = this.http.get<any[]>(
      this.url + this.clientUrl,
      this.optionRequete
    );
    console.log(res);
    return res;
  }

  getclientById$(id:string): Observable<any> {
    let res: Observable<Client[]> = this.http.get<any[]>(
      this.url + this.clientByidUrl + "/" + id,
      this.optionRequete
    );
    console.log(res);
    return res;
  }
  updateclientById$(idPersonne:number, idClient:number, societe:string, poste:string): Observable<any> {
    let res: Observable<Client[]> = this.http.put<any[]>(
      this.url + this.updateclientService,
      {idPersonneClient:idPersonne, idClient:idClient, societe:societe, poste:poste},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  ajoutclient$( idPersonne:number, societe:string, poste:string): Observable<any> {
    let res: Observable<Client[]> = this.http.post<any[]>(
      this.url + this.ajouterclient,
      {idPersonneClient:idPersonne, societe:societe, poste:poste},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  supprimerclient$( idclient:number): Observable<any> {
    let res: Observable<Client[]> = this.http.delete<any[]>(
      this.url + this.deleteclient+"/"+idclient,
      this.optionRequete

    );
    console.log(res);
    return res;
  }
}
