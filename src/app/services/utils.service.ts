import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private toggleMenu = new BehaviorSubject<boolean>(false)
  $toggleMenu = this.toggleMenu.asObservable()

  constructor() { }

  toggle(toggle: boolean) {
    this.toggleMenu.next(toggle)
  }
}
