import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor() { }

  public balance =[
    {
      "name" : "Entries",
      "value": 1200.00
    },
    {
      "name" : "Entries",
      "value": 800.00
    },
    {
      "name" : "Entries",
      "value": 400.00
    }
  ]

  getBalance (){
    return this.balance;
  }
}
