import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  constructor(private http: HttpClient) {}

  getRepos(): Observable<any> {
    return this.http.get('https://api.github.com/users/AdrianSilvadoNascimento/repos')
      .pipe(tap(res => {
        console.log(res)
      }))
  }
}
