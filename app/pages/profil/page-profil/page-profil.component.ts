import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent implements OnInit {
  userdd: any;

  constructor(
    private router: Router,
    private user:UserService
  ) { }

  ngOnInit(): void {
     this.userdd= this.user.getConnectedUser();
  }

  modifierMotDePasse(): void {
    this.router.navigate(['changermotdepasse']);
  }
}
