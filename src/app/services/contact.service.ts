import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { environment } from 'src/environments/environment'
import { FormModel } from '../models/formModel'
import { Observable, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly baseUrl: string = environment.base_url

  constructor(private http: HttpClient) {}

  createContact(contactBody: FormModel): Observable<any> {
    return this.http.post(this.baseUrl, contactBody, { headers: { 'Content-Type': 'application/json' }} )
      .pipe(tap(res => {
        console.log(res)
      }))
  }
}
