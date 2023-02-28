import { Component } from '@angular/core';
import { EntriesService } from 'src/app/services/entry/entries.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent {

  entry={
    id:0,
    amount:0,
    concept: "",
    date: ""
  }

  entries : any
  constructor (private entriesServices: EntriesService,private route: ActivatedRoute, private httpClient : HttpClient){}

  existRegisters(){
    return this.entries.length > 0
  }

  delete(id:number){
    let decision = confirm("Are you sure to delete this register?. The action cannot be revert")
    if (decision) {
      for (let i = 0; i < this.entries.length; i++) {
        if (this.entries[i].id == id) {
          this.entries.splice(i, 1)
          this.httpClient.delete(`${this.entriesServices.url}/deleteEntry/${id}`).subscribe(
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

  add (){

    let id: any
    id = this.route.snapshot.params


    if (this.entry.id == 0){
      alert("You must type a code diferent to 0")
      return
    }
    for (let i = 0; i < this.entries.length; i++){
      if (this.entries[i].id == this.entry.id){
        alert('The database contains a item with the same code')
        return
      }
    }

    this.entries.push({id:this.entry.id, amount: this.entry.amount, concept: this.entry.concept, date: this.entry.date})

    this.httpClient.post(this.entriesServices.url + '/addEntry', { id: this.entry.id, amount: this.entry.amount, concept: this.entry.concept, date: this.entry.date, person_id: id.id })
    .subscribe(
      res => {
        console.log(res)
      }, (error: any) => {
        console.log(error)
      }
    )

    this.entry.id = 0
    this.entry.amount = 0.0
    this.entry.concept = ""
    this.entry.date = ""

  }

  select(entry: {id:number, amount:number, concept:string, date:string}){
    this.entry.id = entry.id
    this.entry.amount = entry.amount
    this.entry.concept = entry.concept
    this.entry.date = entry.date
}

modify(){
  for (let i = 0 ; i < this.entries.length; i++){
    if (this.entries[i].id == this.entry.id){
      this.entries[i].amount = this.entry.amount
      this.entries[i].concept = this.entry.concept
      this.entries[i].date = this.entry.date

      return
    }
  }
  alert ("the typed entry doesn't exist on database")
}

ngOnInit(){
  let id:any
  id = this.route.snapshot.params
  
  this.entries = this.entriesServices.getEntries(id.id)
}
}
