import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExitsService {

  public url = 'http://localhost:3000'

  constructor(private httpClient:HttpClient, private router:Router) { }

  public exits: any[] = [
    // {id:1, amount: "120.00",concept :"Water",  date: "2010-12-23T09:00:00" },
    // {id:2, amount: "780.00",concept :"Sell",  date: "2010-12-23T09:00:00" },
    // {id:3, amount: "2500.00",concept :"Web",  date: "2010-12-23T09:00:00" },
    // {id:4, amount: "8000.00",concept :"Streaming",  date: "2010-12-23T09:00:00" }
  ]

  private exits2:any

  getExits (route:any){
    this.httpClient.get(`${this.url}/getExitsByUser/${route}`).subscribe(
      res=> {
        this.exits2 = res
        for (let i = 0; i < this.exits2.length; i++){
          this.exits.push(this.exits2[i])
          //this.exits[i].amount = this.exits[i].amount.toString()
        }
      }, (error:any) => {
        this.router.navigate(['error'])
        console.log(error)
      }
     )     

    return this.exits;
  }

  logout (){
    this.exits = []
  }
}
