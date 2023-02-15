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
    {
      "name": "Exits",
      "value": 0
    },
    {
      "name": "Entries",
      "value": 0
    }
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

    ngOnInit (){
    let id:any
    
    id = this.route.snapshot.params
    this.httpClient.get<number>(`${this.balanceService.url}/getTotalEntriesByUser/${id.id}`)
    .subscribe(res =>{
      this.entries = res
      this.single[0].value = this.entries
    }),
    (error: any) => {
      console.error(error)
    }

   
    //this.single = this.balanceService.getTotal(id.id)
    console.log(this.entries)
    
    console.log(this.single)
 
  }


}
