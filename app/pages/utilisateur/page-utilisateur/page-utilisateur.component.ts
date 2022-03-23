import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateursService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.scss']
})
export class PageUtilisateurComponent implements OnInit {
  userdata: any;

  constructor(
    private router: Router,
    private user:UtilisateursService
  ) { }

  ngOnInit(): void {
this.user.findAll().subscribe(e=>{
  this.userdata=e
})
  }

  nouvelUtilosateur(): void {
    this.router.navigate(['nouvelutilisateur']);
  }
  delete(id:number){
this.user.delete(id).toPromise();
//this.router.ref        navigate(['utilisateurs']);
location.reload();

  }
}
