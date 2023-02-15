import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Money-Coach';

  ngOnInit(){
    localStorage.setItem('login', 'false')
    localStorage.setItem('admin', 'false')
  }
}
