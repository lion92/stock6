export default interface Vente {
  idVente: number;
  idClient: number;
  idProduit: number;
  quantite:number;
  prixTotal:number;
  idUser:number;
  taxe:number;
  dateAjout:string;
}
