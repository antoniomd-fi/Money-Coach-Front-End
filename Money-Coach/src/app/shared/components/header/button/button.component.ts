import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  
  constructor(private router:Router){}

  openLogin(){
    this.router.navigate(['login'])
  }

}
