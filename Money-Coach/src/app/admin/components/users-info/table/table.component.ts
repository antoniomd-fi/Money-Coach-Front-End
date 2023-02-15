import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  user = {
    id: 0,
    name: "",
    lastname: "",
    username: ""
  }

  users: any
  constructor(private usersServices: UsersService, private httpClient: HttpClient) { }

  existRegisters() {
    return this.users.length > 0
  }

  delete(id: number) {

    let decision = confirm("Are you sure to delete this register?. The action cannot be revert")
    if (decision) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == id) {
          this.users.splice(i, 1)
          this.httpClient.delete(`${this.usersServices.url}/deleteUser/${id}`).subscribe(
            res => {
              console.log(res)
            }, (error: any) => {
              console.log(error);
            }
          )

          return
        }
      }
    }

    alert("Operation canceled")
  }

  add() {
    if (this.user.id == 0) {
      alert("You must type a code diferent to 0")
      return
    }
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == this.user.id) {
        alert('The database contains a item with the same code')
        return
      }
    }

    this.users.push({ id: this.user.id, name: this.user.name, lastname: this.user.lastname, username: this.user.username })

    this.httpClient.post(this.usersServices.url + '/addUser', { id: this.user.id, name: this.user.name, lastname: this.user.lastname, username: this.user.username })
      .subscribe(
        res => {
          console.log(res)
        }, (error: any) => {
          console.log(error)
        }
      )

    this.user.id = 0
    this.user.name = ""
    this.user.lastname = ""
    this.user.username = ""
  }

  select(user: { id: number, name: string, lastname: string, username: string }) {
    this.user.id = user.id
    this.user.name = user.name
    this.user.lastname = user.lastname
    this.user.username = user.username
  }

  modify() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == this.user.id) {
        this.users[i].name = this.user.name
        this.users[i].lastname = this.user.lastname
        this.users[i].username = this.user.username
        return
      }
    }
    alert("the typed user doesn't exist on database")
  }

  ngOnInit() {
    this.users = this.usersServices.getUsers()
  }

}
