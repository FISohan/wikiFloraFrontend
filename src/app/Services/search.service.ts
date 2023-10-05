import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flora } from '../models/flora.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  search(query:string):Observable<Flora[]>{
    return this.http.get<Flora[]>(environment.baseUrl + `Flora/search/name=${query}`)
  }
}
