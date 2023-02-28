import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent {

  constructor(private httpClient : HttpClient, private router:Router){}

  sendReport(){
    this.httpClient.get('http://localhost:3000/sendList')
    .subscribe(
      res => console.log(res)
    ), (error:any) =>{
      this.router.navigate(['error'])
      console.log(error)
    }

    alert('report sent')
  }
}

