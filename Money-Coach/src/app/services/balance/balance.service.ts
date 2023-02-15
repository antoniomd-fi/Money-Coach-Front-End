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

   async getEntries(route:number){
   
     const res = await this.httpClient.get(`${this.url}/getTotalEntriesByUser/${route}`)
     .toPromise()
      return res
  }

   async getExits(route:number){
    const res = await this.httpClient.get(`${this.url}/getTotalExitsByUser/${route}`)
     .toPromise()
    return res
  }

   getTotal(route:number){
    this.httpClient.get(`${this.url}/getTotalEntriesByUser/${route}`)
    .subscribe(res =>{
      this.entries = res
      this.data.push({"name" : "Entries",
      "value": this.entries})
    }),
    (error: any) => {
      console.error(error)
    }

    this.httpClient.get(`${this.url}/getTotalExitsByUser/${route}`)
    .subscribe(res =>{
      this.exits = res
      this.data.push({"name" : "Exits",
      "value": this.exits})
    }),
    (error: any) => {
      console.error(error)
    }
  
    return this.data
  }
    
}

