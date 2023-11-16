import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false
  isToggleMenu!: boolean
  faBars = faBars

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.utilsService.$toggleMenu.subscribe(res => {
      this.isToggleMenu = res
    })
  }

  toggleMenu(): void {
    this.isToggleMenu = !this.isToggleMenu

    this.utilsService.toggle(this.isToggleMenu)
  }
}
