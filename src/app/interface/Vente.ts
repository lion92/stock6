export default interface Vente {
  idvente: number;
  idClient: number;
  idProduit: number;
  quantite:number;
  PrixTotal:number;
  idUser:number;
  taxe:number;
  dateVente:string;
  nom:string;
}
