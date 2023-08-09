import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flora } from '../models/flora.model';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class FloraService {

  constructor(private http:HttpClient) { }

  getFlora(pageNumber:number,pageSize:number,orederByGenus:boolean = false):Observable<Page>{
    return this.http.get<Page>
          (environment.baseUrl + `Flora/Get/pageNumber=${pageNumber}&pageSize=${pageSize}&orderByGenus=${orederByGenus}`);
  }
  getFloraByName(name?:string):Observable<Flora>{
    return this.http.get<Flora>(environment.baseUrl + `Flora/Get/${name}`);
  }
}
