import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url = 'http://localhost:3000'

  constructor( private httpClient:HttpClient) { }

  public users:any[] = [
  //   {id:1, name :"Antonio", lastname: "Martin", username: "amd" },
  //   {id:2, name :"Javier", lastname: "Montes",username: "jm" },
  //   {id:3, name :"Juan", lastname: "García",username: "jc" },
  //   {id:4, name :"Pedro", lastname: "Navajas",username: "pedNav" },
  ]

  private users2:any

  

  getUsers (){
     this.httpClient.get(this.url+'/allUsers').subscribe(
      res=> {
        this.users2 = res
        for (let i = 0; i < this.users2.length; i++){
          this.users.push(this.users2[i])
        }
      }, (error:any) => {
        console.log(error)
      }
     )     
    return this.users;
  }


}
