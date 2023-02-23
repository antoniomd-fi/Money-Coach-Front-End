import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent {

  constructor(private router: Router){}
  
 returnButton(){
  this.router.navigate([''])
 }
}
