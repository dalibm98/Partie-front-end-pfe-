import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AdresseDto, RolesDto, UtilisateurDto } from 'src/gs-api/src/models';
import { PhotosService, UtilisateursService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.scss']
})
export class NouvelUtilisateurComponent implements OnInit {
  utilisateurDto: UtilisateurDto={}; 
  adresse: AdresseDto={}; 
  errorMsg: Array<string> = [];
  role:RolesDto={}; 
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private utilisateur:UtilisateursService,
    private photoService: PhotosService
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['utilisateurs']);
  }
  enregistrer() {
    this.utilisateurDto
    this.utilisateurDto.adresse=this.adresse;
    this.utilisateurDto.idEntreprise=1;
    //this.utilisateurDto.roles[0].roleName=this.role.roleName;
    console.log(this.utilisateurDto);
    
     this.userService.enregistrerUtilisateur(this.utilisateurDto).subscribe(e=>{
      e.roles= [{id:55 , roleName: this.role.roleName}];
      console.log(e);
      
     }, error =>{
      this.errorMsg = error.error.errors;
      console.log(error);
      
     }
     )
     
  }
}
