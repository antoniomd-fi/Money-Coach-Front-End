import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Balance {
  name: string,
  value: number
}

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  public url = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  private data: any[]  =[
    {
      "name" : "Exits",
      "value": 0
    },
    {
      "name" : "Entries",
      "value": 0
    }
  ]

  private values: any[]= []
  private entries:any
  private exits:any
  private balance:any



   getTotal(route:number){
    return this.httpClient.get<any>(`${this.url}/getEntriesAndExits/${route}`)
  }
    
}

