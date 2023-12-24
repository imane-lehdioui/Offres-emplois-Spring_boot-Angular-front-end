import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../offre';
import { User } from '../user';
import { OffreService } from '../_services/offre.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-listoffrepostuler',
  templateUrl: './listoffrepostuler.component.html',
  styleUrls: ['./listoffrepostuler.component.css']
})
export class ListoffrepostulerComponent implements OnInit {
  user: User[];
offre: Offre[];
  constructor(private offreService: OffreService,
    private router: Router) { }

  
    ngOnInit(): void {
      this.getOffre();
    }

    private getOffre(){
      this.offreService.getOffre().subscribe(data => {
        this.offre = data;
      });
      
    }


    goPostuler(){
      this.router.navigate(['/upload-files']);
    }

  
 
   


 

   
  
    

   

}
