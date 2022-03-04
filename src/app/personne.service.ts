import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import Personne from "./interface/Personne";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
url="http://localhost:8000/";
  public personneUrl:string="selectPersonnes";
  private personneByidUrl:string="selectPersonneParid"
  private updatePersonneService:string="updatePersonne"
  private updatePersonneImage:string="updatePersonneImage"
  private ajouterPersonne:string="registerPersonne"
  private deletePersonne:string="deletePersonne"
  constructor(private  http:HttpClient) { }
  getPersonnes$(): Observable<any> {
    let res: Observable<Personne[]> = this.http.get<any[]>(
      this.url + this.personneUrl,
      this.optionRequete
    );
    console.log(res);
    return res;
  }

  getPersonneById$(id:string): Observable<any> {
    let res: Observable<Personne[]> = this.http.get<any[]>(
      this.url + this.personneByidUrl + "/" + id,
      this.optionRequete
    );
    console.log(res);
    return res;
  }
  updatePersonneById$( nom:string, prenom:string, age:number, ville:string, numero:string, adresse:string, codePostale:string, email:string, idPersonne:number): Observable<any> {
    let res: Observable<Personne[]> = this.http.put<any[]>(
      this.url + this.updatePersonneService,
      {nom: nom, prenom:prenom, age:age, ville:ville, numero:numero, adresse:adresse, codePostale:codePostale, email:email, idPersonne:idPersonne},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  updatePersonneByIdImage$( image:string, idPersonne:number): Observable<any> {
    let res: Observable<Personne[]> = this.http.put<any[]>(
      this.url + this.updatePersonneImage,
      {image:image,idPersonne:idPersonne},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  ajoutPersonne$( nom:string, prenom:string, age:number, ville:string, numero:string, adresse:string, codePostale:string, email:string): Observable<any> {
    let res: Observable<Personne[]> = this.http.post<any[]>(
      this.url + this.ajouterPersonne,
      {nom: nom, prenom:prenom, age:age, ville:ville, numero:numero, adresse:adresse, codePostale:codePostale, email:email},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  supprimerPersonne$( idPersonne:number): Observable<any> {
    let res: Observable<Personne[]> = this.http.delete<any[]>(
      this.url + this.deletePersonne+"/"+idPersonne,
      this.optionRequete

    );
    console.log(res);
    return res;
  }
}
