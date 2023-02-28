import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonService } from 'src/app/services/login/button.service';
import { EntriesService } from 'src/app/services/entry/entries.service';
import { ExitsService } from 'src/app/services/exit/exits.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {



  constructor(private router: Router, private buttonService: ButtonService, private entryService:EntriesService, private exitService:ExitsService, private userService:UsersService) { }

  public isLoggedIn: boolean = false


  openLogin() {
    this.router.navigate(['login'])
  }

  logout() {
    localStorage.setItem('login', 'false')
    localStorage.setItem('admin', 'false')
    this.buttonService.$isLogged.emit(false)
    this.entryService.logout()
    this.exitService.logout()
    this.userService.logout()
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


