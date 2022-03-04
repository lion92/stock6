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
  productTab: Produit[] = [];
  public url="http://localhost:8000/";
  public produitUrl:string="selectProduits";
private produitByidUrl:string="selectProduitParid"
private updateProduitService:string="updateProduit"
  private ajouterProduit:string="ajoutProduit"
  private deleteProduit:string="deleteProduit"
  private product$ = new Subject<Produit[]>();
  getProduit$(): Observable<any> {
    let res: Observable<Produit[]> = this.http.get<any[]>(
      this.url + this.produitUrl,
      this.optionRequete
    );
    console.log(res);
    return res;
  }

  getProduitById$(id:number): Observable<any> {
    let res: Observable<Produit[]> = this.http.get<any[]>(
      this.url + this.produitByidUrl+"/"+id,
      this.optionRequete
    );
    console.log(res);
    return res;
  }

  getProduct$() {
    this.product$.next(this.productTab);
  }
  updateProduitById$( idCategorie:number, prix:number, stock:number, nom:string, idProduit:number): Observable<any> {
    let res: Observable<Produit[]> = this.http.put<any[]>(
      this.url + this.updateProduitService,
      {idCategorie: idCategorie, idProduit:idProduit, prix:prix, nom:nom, stock:stock},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  ajoutProduit$( idCategorie:number, prix:number, stock:number, nom:string): Observable<any> {
    let res: Observable<Produit[]> = this.http.post<any[]>(
      this.url + this.ajouterProduit,
      {idCategorie: idCategorie, prix:prix, nom:nom, stock:stock},
      this.optionRequete

    );
    console.log(res);
    return res;
  }

  supprimerProduit$( idProduit:number): Observable<any> {
    let res: Observable<Produit[]> = this.http.delete<any[]>(
      this.url + this.deleteProduit+"/"+idProduit,
      this.optionRequete

    );
    console.log(res);
    return res;
  }
}
