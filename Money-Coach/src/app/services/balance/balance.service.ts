import { Injectable } from '@angular/core';

interface Balance {
  name: string,
  value: number
}

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor() { }

  private data: Balance[]  =[
    {
      "name" : "Exits",
      "value": 1200.00
    },
    {
      "name" : "Entries",
      "value": 400.00
    }
  ]

  getBalance (){
    return this.data;
  }
}
