import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  styleUrls: ['./detail-mvt-stk-article.component.scss']
})
export class DetailMvtStkArticleComponent implements OnInit {
  
 @Input() articleDto :any;
 @Input() qq :any;

  show: boolean=false;
  quant: any;
  constructor(
    private articleService: ArticleService

  ) { }

  ngOnInit(): void {
 
    
    // this.articleService.findAllArticles().subscribe(e=>{
    //   this.articleDto=e;
    //   console.log(e);
      

    // })

  }
  showStoc(){
    if(this.show==false){
      this.show=true;
    }else this.show=false;
  }
  getquantiti(e:any){
    this.quant=e
    console.log("last one",e);
    
  }
}
