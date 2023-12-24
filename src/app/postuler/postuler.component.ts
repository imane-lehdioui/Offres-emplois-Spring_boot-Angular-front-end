import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {

  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  afficherMessage(){
    return "Votre condudature a été bien envoyee !!!"
  }

  goAlert(){
    this.router.navigate(['/alert']);
  }


  
 
}
