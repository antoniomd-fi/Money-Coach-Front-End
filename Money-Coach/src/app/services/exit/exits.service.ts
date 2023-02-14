import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExitsService {

  constructor() { }

  public exits = [
    {id:1, amount: "120.00",concept :"Water",  date: "2010-12-23T09:00:00" },
    {id:2, amount: "780.00",concept :"Sell",  date: "2010-12-23T09:00:00" },
    {id:3, amount: "2500.00",concept :"Web",  date: "2010-12-23T09:00:00" },
    {id:4, amount: "8000.00",concept :"Streaming",  date: "2010-12-23T09:00:00" }
  ]

  getExits (){
    return this.exits;
  }
}
