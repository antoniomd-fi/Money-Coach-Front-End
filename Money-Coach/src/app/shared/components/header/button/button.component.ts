import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonService } from 'src/app/services/login/button.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {



  constructor(private router: Router, private buttonService: ButtonService) { }

  public isLoggedIn: boolean = false


  openLogin() {
    this.router.navigate(['login'])
  }

  logout() {
    localStorage.setItem('login', 'false')
    localStorage.setItem('admin', 'false')
    this.buttonService.$isLogged.emit(false)
    this.router.navigate(['login'])
  }

  ngOnInit() {
    this.buttonService.$isLogged.subscribe(
      res => {
        this.isLoggedIn = res
      }
    )
  }
}


