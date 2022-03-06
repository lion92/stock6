import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AjoutventeComponent} from '../ajoutvente/ajoutvente.component'
import Categorie from "../interface/Categorie";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../client.service";
import {CategorieService} from "../categorie.service";
import {ProduitService} from "../produit.service";
import Vente from "../interface/Vente";
import {VenteService} from "../vente.service";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {MessageService} from "../message.service";
import {FactureComponent} from "../facture/facture.component";

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit, OnChanges {
  public listFactureVente: Vente[] = []
  public listVente: Vente[] = [];
  public pageSlice: Vente[] = [];
  public listId: number[] = [];
  message: string = "";

  constructor(public messageService: MessageService, private dialog: MatDialog, public venteService: VenteService, private route: ActivatedRoute, private clientService: ClientService, private categoieService: CategorieService, private produiService: ProduitService, private router: Router) {
  }

  ngOnInit(): void {
    this.venteService.getventes$().subscribe(data => {
      this.listVente = data.message;
      this.pageSlice = this.listVente.slice(0, 1);
      console.log("Ventttttttttttttttttte")
      console.log(data.message);
    })
    this.route.paramMap.subscribe(params => {
      let id = params.get("id");
      console.log(id);
    })
  }

  openDialog() {
    this.dialog.open(AjoutventeComponent, {
      height: '80%',
      width: '50vw',
      autoFocus: false,
    });
  }

  openDialogFacture() {
    this.dialog.open(FactureComponent, {
      height: '80%',
      width: '50vw',
      autoFocus: false,
    });
  }

  supprimerVente(idClient: number) {

    this.venteService.supprimervente$(+idClient).subscribe(data => {
      this.messageService.setMessage("" + JSON.stringify(data.message));
      ;
      this.rechargeClick();
    })
  }

  supprimerListVente(listAsupprimer: number[]) {
    listAsupprimer.forEach(data => {
      this.supprimerVente(data);
    })
  }

  rechargeClick() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./vente'])
  }

  onChangeChange($event: any) {
    console.log($event)
    console.log($event.pageIndex)
    let startIndex = $event.pageIndex * $event.pageSize;
    let endIndex = startIndex + $event.pageSize;
    if (endIndex > this.listVente.length) {
      endIndex = this.listVente.length;
    }
    this.pageSlice = this.listVente.slice(startIndex, endIndex);
  }

  onChangeSelect(clientId: number, $event: any) {
    if ($event.target.checked === true) {
      this.listId.push(clientId);
    } else {
      let index = this.listId.indexOf(clientId)
      console.log(index);
      if (index > -1) {
        this.listId.splice(index, 1);
      }
    }
    console.log(this.listId);
    this.listVenteFacture();


  }

  listVenteFacture() {
    this.listFactureVente = []
    this.listId.forEach(idvente => {
      this.venteService.getventeById$(idvente).subscribe(data => {
        console.log("dataaaaaaaaaaaaaaaaa")

        this.listFactureVente.push(data.message[0])

        console.log(this.listFactureVente);
      })
    })

  }

  generatePDF() {
    var data = document.getElementById('tableVente');
    if (data !== null) {
      html2canvas(data).then(canvas => {
        var imgWidth = 208;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jsPDF('p', 'mm', 'a4');
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('newPDF.pdf');

      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


}
