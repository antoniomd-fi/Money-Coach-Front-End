import { Component, ViewChild } from '@angular/core';
import { BalanceService } from 'src/app/services/balance/balance.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BalanceComponent } from './balance/balance.component';



@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {

  balance:any

  @ViewChild('graph')
  balanceComponent!: BalanceComponent;

  constructor(private balanceService : BalanceService, private route : ActivatedRoute, private httpClient : HttpClient){}
  
  updateBalance(){
    let id: any
    id = this.route.snapshot.params
    this.httpClient.get(`${this.balanceService.url}/getBalance/${id.id}`)
    .subscribe(res =>{
      this.balance = res
    }),
    (error: any) => {
      console.error(error)
    }
    this.balanceComponent.updateGraph();
  }

  ngOnInit(){
    let id: any
    id = this.route.snapshot.params
    this.httpClient.get(`${this.balanceService.url}/getBalance/${id.id}`)
    .subscribe(res =>{
      this.balance = res
    }),
    (error: any) => {
      console.error(error)
    }
  }
}
