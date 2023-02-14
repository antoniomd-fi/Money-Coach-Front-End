import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public users = [
    {id:1, name :"Antonio", lastname: "Martin" },
    {id:2, name :"Javier", lastname: "Montes" },
    {id:3, name :"Juan", lastname: "García" },
    {id:4, name :"Pedro", lastname: "Navajas" },
  ]

  getUsers (){
    return this.users;
  }
}
