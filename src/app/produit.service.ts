import {Injectable, Input} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import Produit from "./interface/Produit";
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }
  public listProduit:Produit[]=[];
  public url="http://localhost:8000/";
  public produitUrl:string="selectProduits";
private produitByidUrl:string="selectProduitParid"

  getProduit$(): Observable<any> {
    let res: Observable<Produit[]> = this.http.get<any[]>(
      this.url + this.produitUrl,
      this.optionRequete
    );
    console.log(res);
    return res;
  }

  getProduitById$(id:string): Observable<any> {
    let res: Observable<Produit[]> = this.http.get<any[]>(
      this.url + this.produitByidUrl+"/"+id,
      this.optionRequete
    );
    console.log(res);
    return res;
  }
}
