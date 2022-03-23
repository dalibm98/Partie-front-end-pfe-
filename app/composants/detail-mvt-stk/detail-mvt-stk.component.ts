import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MvtstkService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-detail-mvt-stk',
  templateUrl: './detail-mvt-stk.component.html',
  styleUrls: ['./detail-mvt-stk.component.scss']
})
export class DetailMvtStkComponent implements OnInit {
@Input() code:any;
@Output() quntiti=new EventEmitter;
  lisMvt:  Array<any> = [];
  quant: any=0 ;
  constructor(
    private mvtkservice:MvtstkService

  ) { }

  ngOnInit(): void {
 
 
    
     this.mvtkservice.mvtStkArticle(this.code).subscribe(stk=>{

      stk.forEach((rr,i)=>{

        this.quant+=rr.quantite;

       })

      console.log("in detail list",stk);
      this.lisMvt=stk;
    this.quntiti.emit(this.quant as number);

    })
    


  }

}
