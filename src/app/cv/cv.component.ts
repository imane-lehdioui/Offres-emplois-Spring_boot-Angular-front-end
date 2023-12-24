import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cv } from '../cv';
import { CvService } from '../_services/cv.service'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cv: Cv[];

  constructor(private cvService: CvService,
    private router: Router) { }


  ngOnInit(): void {
    this.getCv();
  }

  private getCv(){
    this.cvService.getCv().subscribe(data => {
      this.cv = data;
    });
  }

}
