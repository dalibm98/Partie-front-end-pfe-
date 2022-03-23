import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { MvtStk, MvtStkDto } from 'src/gs-api/src/models';
import { MvtstkService } from 'src/gs-api/src/services';
import {ClientDto} from '../../../gs-api/src/models/client-dto';
import {LigneCommandeClient} from 'src/gs-api/src/models/ligne-commande-client'
import { CmdcltfrsService } from 'src/app/services/cmdcltfrs/cmdcltfrs.service';

@Component({
  selector: 'app-detail-cmd-clt-frs',
  templateUrl: './detail-cmd-clt-frs.component.html',
  styleUrls: ['./detail-cmd-clt-frs.component.scss']
})
export class DetailCmdCltFrsComponent implements OnInit {
@Input() ligneCommande :  LigneCommandeClient={}
  @Input()
  origin = '';
  @Input()

  commande: any = {};
  cltFrs: ClientDto | undefined = {};
  nvstok:MvtStkDto | undefined = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private mvtstk : MvtstkService,
    private cmdCltFrsService: CmdcltfrsService
  ) { }

  ngOnInit(): void {
    this.extractClientFournisseur();
  }

  modifierClick(): void {
  }

  extractClientFournisseur(): void {
    if (this.origin === 'client') {
      this.cltFrs = this.commande?.client;
    } else if (this.origin === 'fournisseur') {
      this.cltFrs = this.commande.fournisseur;
    }
  };
  updateEta(){
    
    console.log(this.commande );
    // this.nvstok={}
    // this.nvstok.dateMvt=new Date
    // this.nvstok.quantite=this.ligneCommande.quantite;
    // this.nvstok.article=this.ligneCommande.article;
    // this.nvstok.idEntreprise =  this.ligneCommande.idEntreprise;
    this.commande.etatCommande = "VALIDEE"; 
    if(this.origin === 'client'){

      this.cmdCltFrsService.enregistrerCommandeClient(this.commande).subscribe(c=>{
        console.log("new command",c);
        
      })

    }else if(this.origin === 'fournisseur'){
 
   
      this.cmdCltFrsService.enregistrerCommandeFournisseur(this.commande).subscribe(c=>{
        console.log("new command",c);})
    }
    
//this.mvtstk.
  }
}
