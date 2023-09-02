import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flora } from '../models/flora.model';
import { Page } from '../models/page.model';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class FloraService {
  constructor(
    private http: HttpClient,
    private oidcSecurityService: OidcSecurityService
  ) {}

  getFlora(
    pageNumber: number,
    pageSize: number,
    orederByGenus: boolean = false
  ): Observable<Page> {
    return this.http.get<Page>(
      environment.baseUrl +
        `Flora/Get/pageNumber=${pageNumber}&pageSize=${pageSize}&orderByGenus=${orederByGenus}`,
    );
  }
  getFloraByName(name: string): Observable<Flora> {
    return this.http.get<Flora>(environment.baseUrl + `Flora/Get/${name}`);
  }

  getFloraById(id: string): Observable<Flora> {
    return this.http.get<Flora>(environment.baseUrl + `Flora/${id}`);
  }

  postFlora(flora: any): Observable<Flora> {
    return this.http.post<Flora>(environment.baseUrl + 'flora', flora,{headers:{
      "Content-Type": "application/json, text/plain, */*"
    }});
  }
  approveFlora(id:string):Observable<boolean>{
    return this.http.put<boolean>(environment.baseUrl + `Flora/aprrove?floraID=${id}`,id);
  }
  getDisapprovePost():Observable<Flora[]>{
      return this.http.get<Flora[]>(environment.baseUrl + "Flora/disapproved")
  }

  deleteFlora(id:string):Observable<boolean>{
    return this.http.delete<boolean>(environment.baseUrl + `Flora/delete/${id}`);
  }
  getFloraByUser(userId:string):Observable<Flora[]>{
    return this.http.get<Flora[]>(environment.baseUrl + `Flora/get/byUser?userId=${userId}`)
  }

  getFloraByUserAuth():Observable<Flora[]>{
    return this.http.get<Flora[]>(environment.baseUrl + `Flora/get/byUser/auth`)
  }

  upadateFlora(updatedFlora:any,id:string):Observable<boolean>{
      return this.http.put<boolean>(environment.baseUrl + `Flora/update/${id}`,updatedFlora,{headers:{
        "Content-Type": "application/json, text/plain, */*"
      }});
  }
}
