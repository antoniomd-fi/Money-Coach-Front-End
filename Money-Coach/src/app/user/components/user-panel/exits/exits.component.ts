import { Component } from '@angular/core';
import { ExitsService } from 'src/app/services/exit/exits.service';

@Component({
  selector: 'app-exits',
  templateUrl: './exits.component.html',
  styleUrls: ['./exits.component.css']
})
export class ExitsComponent {
  exit={
    id:0,
    amount:0.0,
    concept: "",
    date: ""
  }

  exits : any
  constructor (private enxitsServices: ExitsService){}

  existRegisters(){
    return this.exits.length > 0
  }

  delete(id:number){
    for (let i = 0; i < this.exits.length; i++){
      if (this.exits[i].id == id){
        this.exits.splice(i, 1)
        return
      }
    }
  }

  add (){
    if (this.exit.id == 0){
      alert("You must type a code diferent to 0")
      return
    }
    for (let i = 0; i < this.exits.length; i++){
      if (this.exits[i].id == this.exit.id){
        alert('The database contains a item with the same code')
        return
      }
    }

    this.exits.push({id:this.exit.id, amount: this.exit.amount, concept: this.exit.concept})

    this.exit.id = 0
    this.exit.amount = 0.0
    this.exit.concept = ""
    this.exit.date = ""

  }

  select(exit: {id:number, amount:number, concept:string}){
    this.exit.id = exit.id
    this.exit.amount = exit.amount
    this.exit.concept = exit.concept
}

modify(){
  for (let i = 0 ; i < this.exits.length; i++){
    if (this.exits[i].id == this.exit.id){
      this.exits[i].amount = this.exit.amount
      this.exits[i].concept = this.exit.concept
      this.exits[i].date = this.exit.date

      return
    }
  }
  alert ("the typed entry doesn't exist on database")
}

ngOnInit(){
  this.exits = this.enxitsServices.getExits()
}
}
