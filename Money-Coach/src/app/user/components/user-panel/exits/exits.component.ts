import { Component } from '@angular/core';
import { ExitsService } from 'src/app/services/exit/exits.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-exits',
  templateUrl: './exits.component.html',
  styleUrls: ['./exits.component.css']
})
export class ExitsComponent {
  exit = {
    id: 0,
    amount: 0.0,
    concept: "",
    date: ""
  }

  exits: any
  constructor(private enxitsServices: ExitsService, private route: ActivatedRoute, private httpClient: HttpClient) { }

  existRegisters() {
    return this.exits.length > 0
  }

  delete(id: number) {
    let decision = confirm("Are you sure to delete this register?. The action cannot be revert")
    if (decision) {
      for (let i = 0; i < this.exits.length; i++) {
        if (this.exits[i].id == id) {
          this.exits.splice(i, 1)
          this.httpClient.delete(`${this.enxitsServices.url}/deleteExit/${id}`).subscribe(
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

    let id: any
    id = this.route.snapshot.params

    if (this.exit.id == 0) {
      alert("You must type a code diferent to 0")
      return
    }
    for (let i = 0; i < this.exits.length; i++) {
      if (this.exits[i].id == this.exit.id) {
        alert('The database contains a item with the same code')
        return
      }
    }

    this.exits.push({ id: this.exit.id, amount: this.exit.amount, concept: this.exit.concept, date: this.exit.date })

    this.httpClient.post(this.enxitsServices.url + '/addExit', { id: this.exit.id, amount: this.exit.amount, concept: this.exit.concept, date: this.exit.date, personId: id.id })
      .subscribe(
        res => {
          console.log(res)
        }, (error: any) => {
          console.log(error)
        }
      )

    this.exit.id = 0
    this.exit.amount = 0.0
    this.exit.concept = ""
    this.exit.date = ""

  }

  select(exit: { id: number, amount: number, concept: string, date: string }) {
    this.exit.id = exit.id
    this.exit.amount = exit.amount
    this.exit.concept = exit.concept
    this.exit.date = exit.date
  }

  modify() {
    for (let i = 0; i < this.exits.length; i++) {
      if (this.exits[i].id == this.exit.id) {
        this.exits[i].amount = this.exit.amount
        this.exits[i].concept = this.exit.concept
        this.exits[i].date = this.exit.date

        return
      }
    }
    alert("the typed entry doesn't exist on database")
  }

  ngOnInit() {
    let id: any
    id = this.route.snapshot.params
    this.exits = this.enxitsServices.getExits(id.id)
  }
}
