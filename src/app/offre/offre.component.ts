import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../offre';
import { OffreService } from '../_services/offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

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


    deleteOffre(id: number){
      this.offreService.deleteOffre(id).subscribe( data => {
        console.log(data);
        this.getOffre();
      })
    }

}
