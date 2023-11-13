import { Component, OnInit } from '@angular/core'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { GithubReposService } from 'src/app/services/github-repos.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  faArrowDown = faArrowDown
  repos: any[] = []

  constructor(private github: GithubReposService) { }

  ngOnInit(): void {
    this.github.getRepos().subscribe(res => {
      this.repos = res
    })
  }
}
