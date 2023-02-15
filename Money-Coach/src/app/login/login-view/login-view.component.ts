import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  constructor(private router: Router, private userService: UsersService) { }

  login(form: NgForm) {
    const username = form.value.username
    const password = form.value.password
    if (username == 'admin') {

    }
    switch (username) {
      case 'admin':
        if (password == 'admin') {
          localStorage.setItem('loggin', 'true')
          localStorage.setItem('admin', 'true')
          this.router.navigate(['admin'])
        }
        else { alert('wrong password') }
        break

      case 'amd':
        if (password == '1234') {
          localStorage.setItem('loggin', 'true')
          this.router.navigate(['user/1'])
        }
        else { alert('wrong password') }
        break;

      case 'test':
        if (password == '1234') {
          localStorage.setItem('loggin', 'true')
          this.router.navigate(['user/2'])
        }
        else { alert('wrong password') }
        break;

      default:
        alert('wrong username or password')
        break;
    }
    
  }

}
