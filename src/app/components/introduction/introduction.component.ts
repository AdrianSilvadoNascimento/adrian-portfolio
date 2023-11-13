import { Component, OnInit } from '@angular/core'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  faArrowDown = faArrowDown

  constructor() { }

  ngOnInit(): void {
  }

}
