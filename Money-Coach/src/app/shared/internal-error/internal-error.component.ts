import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internal-error',
  templateUrl: './internal-error.component.html',
  styleUrls: ['./internal-error.component.css']
})
export class InternalErrorComponent {

  constructor(private router: Router){}
  
  returnButton(){
    this.router.navigate([''])
  }
}
