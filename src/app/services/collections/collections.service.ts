import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Collection} from '../../models/collection/collection';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private apiUrl = `${environment.apiUrl}/api/collections`;

  constructor(private http: HttpClient) {
  }

  getallcollections$(): Observable<Collection>{
    return this.http.get<any>(this.apiUrl);
  }

}
