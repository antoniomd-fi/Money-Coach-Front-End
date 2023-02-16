import { Component } from '@angular/core';
import { BalanceService } from 'src/app/services/balance/balance.service';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {


  
  view: [number,number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };

  entries:any
  exits:any

  single:any[] = [
   /* {
      "name": "Exits",
      "value": 1200

    },
    {
      "name": "Entries",
      "value": 0
    }*/
  ]

  
  
  constructor(private balanceService: BalanceService, private route : ActivatedRoute, private httpClient : HttpClient) {
    
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  updateGraph(){
    let id:any
    
    id = this.route.snapshot.params
    this.balanceService.getTotal(id.id).subscribe(
      data => {
        this.single = data
      }
    ),
    (error: any) => {
      console.error(error)
    }
  }

    ngOnInit (){
    let id:any
    
    id = this.route.snapshot.params
    this.balanceService.getTotal(id.id).subscribe(
      data => {
        this.single = data
      }
    ),
    (error: any) => {
      console.error(error)
    }

 
  }


}
