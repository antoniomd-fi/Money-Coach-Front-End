import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  public url = 'http://localhost:3000'
  

  constructor( private httpClient:HttpClient, private router:Router) { }

  public entries:any[] = [
    // {id:1, amount: "120.00",concept :"Payroll",  date: "2010-12-23T09:00:00" },
    // {id:2, amount: "780.00",concept :"Sell",  date: "2010-12-23T09:00:00" },
    // {id:3, amount: "2500.00",concept :"Web",  date: "2010-12-23T09:00:00" },
    // {id:4, amount: "8000.00",concept :"Payroll",  date: "2010-12-23T09:00:00" }
  ]

  private entries2:any

  getEntries (route:any){
    
    this.httpClient.get(`${this.url}/getEntriesByUser/${route}`).subscribe(
      res=> {
        this.entries2 = res
        for (let i = 0; i < this.entries2.length; i++){
          this.entries.push(this.entries2[i])
          //this.entries[i].amount = this.entries[i].amount.toString()
        }
      }, (error:any) => {
        this.router.navigate(['error'])
        console.log(error)
      }
     )     

    return this.entries;
  }


}
