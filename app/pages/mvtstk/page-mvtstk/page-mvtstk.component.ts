import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import { ArticleService } from 'src/app/services/article/article.service';
import { CmdcltfrsService } from 'src/app/services/cmdcltfrs/cmdcltfrs.service';
import { ArticleDto } from 'src/gs-api/src/models';
import { MvtstkService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-page-mvtstk',
  templateUrl: './page-mvtstk.component.html',
  styleUrls: ['./page-mvtstk.component.scss']
})
export class PageMvtstkComponent implements OnInit {
  data: any;
  articleDto: any;
  command:any;
  cmdclient : Array<any> = [];
  cmdfourn: Array<any> = [];
  show: boolean=false;
  showf: boolean=false;
  listArttice:  Array<any> = [];
  quant: any;
  liste: any;
  listerecherche: Array<any> = [];
  errorMsg: any;
  constructor(
    private cmdCltFrsService: CmdcltfrsService,
    private articleService: ArticleService,
    private mvtkservice:MvtstkService

  ) { }

  ngOnInit(): void {
    if(
      this.listerecherche&&   !this.listerecherche[0]){
    
    
  
    this.articleService.findAllArticles().subscribe(e=>{
     this.liste=[]
      e.forEach((art,i )=>{
        this.quant=0;
        this.mvtkservice.mvtStkArticle(art.id).subscribe(stk=>{
          //this.liste=stk;
        if(stk.length==0){
            this.show=true;
            e.splice(i,1);
            console.log( this.articleDto)
           }
       stk.forEach((rr,i)=>{
         this.liste.push(rr)
         this.quant+=rr.quantite;
        })
      e[i].quant=this.quant;
       
        })

      });

      console.log("tttt",this.quant);
      this.articleDto=e;
    })
  }
  else
  {
    this.articleDto=this.listerecherche;
  }
  }

  getdata(event:any){
this.data=event
console.log("data===",this.data);

  }
 recherche(t:any){
   if(t){
    this.articleService.findArticleByCode(t).subscribe(e=>{
      
      this.listerecherche.push(e);
      this.ngOnInit();
      this.errorMsg=null;

    }, error => {
      this.errorMsg = error.error.message;
    }

    
    )

   }

 }
}
