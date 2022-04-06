import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  public jumpSource = new BehaviorSubject(false);
  currentjump = this.jumpSource.asObservable();

  constructor() { }

  changeMessage(message: number ,jump:boolean) {
    this.messageSource.next(message )
    this.jumpSource.next(jump);
  }

}
