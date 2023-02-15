import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor() { }

  $isLogged = new EventEmitter<any>()
  
  private isLoggedIn: boolean = false

  getState(){
    return this.isLoggedIn
  }

  setState(newState: boolean){
    this.isLoggedIn = newState
  }
}
