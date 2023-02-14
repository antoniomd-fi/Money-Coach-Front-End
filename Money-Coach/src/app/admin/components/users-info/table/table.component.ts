import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  user={
    id:0,
    name:"",
    lastname: ""
  }

  users : any
  constructor (private usersServices: UsersService){}

  existRegisters(){
    return this.users.length > 0
  }

  delete(id:number){
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i].id == id){
        this.users.splice(i, 1)
        return
      }
    }
  }

  add (){
    if (this.user.id == 0){
      alert("You must type a code diferent to 0")
      return
    }
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i].id == this.user.id){
        alert('The database contains a item with the same code')
        return
      }
    }

    this.users.push({id:this.user.id, name: this.user.name, lastname: this.user.lastname})

    this.user.id = 0
    this.user.name =  ""
    this.user.lastname = ""

  }

  select(user: {id:number, name:string, lastname:string}){
    this.user.id = user.id
    this.user.name = user.name
    this.user.lastname = user.lastname
}

modify(){
  for (let i = 0 ; i < this.users.length; i++){
    if (this.users[i].id == this.user.id){
      this.users[i].name = this.user.name
      this.users[i].lastname = this.user.lastname

      return
    }
  }
  alert ("the typed user doesn't exist on database")
}

ngOnInit(){
  this.users = this.usersServices.getUsers()
}

}
