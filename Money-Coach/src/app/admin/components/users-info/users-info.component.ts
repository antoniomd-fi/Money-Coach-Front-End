import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent {

  constructor(private httpClient : HttpClient){}

  sendReport(){
    this.httpClient.get('http://localhost:3000/sendList')
    .subscribe(
      res => console.log(res)
    ), (error:any) =>{
      console.log(error)
    }
  }
}

