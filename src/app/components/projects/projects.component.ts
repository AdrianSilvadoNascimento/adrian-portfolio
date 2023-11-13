import { Component, OnInit } from '@angular/core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  faArrowDown = faArrowDown

  constructor() { }

  ngOnInit(): void {
  }

}
