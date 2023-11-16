import { Component } from '@angular/core'
import { UtilsService } from './services/utils.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portifolio'
  toggleSideNav: boolean = false

  constructor(private utilService: UtilsService) {}

  ngOnInit(): void {
    this.utilService.$toggleMenu.subscribe(res => {
      setTimeout(() => {
        this.toggleSideNav = res
      })
    })
  }
}
