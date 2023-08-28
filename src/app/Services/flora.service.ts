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
    let token;
    // this.oidcSecurityService.checkAuth().subscribe((l: LoginResponse) => {
    //   token = l.accessToken;
    //   console.log(l);
      
    // });

    return this.http.get<Page>(
      environment.baseUrl +
        `Flora/Get/pageNumber=${pageNumber}&pageSize=${pageSize}&orderByGenus=${orederByGenus}`,
    );
  }
  getFloraByName(name?: string): Observable<Flora> {
    return this.http.get<Flora>(environment.baseUrl + `Flora/Get/${name}`);
  }
  postFlora(flora: any): Observable<Flora> {
    return this.http.post<Flora>(environment.baseUrl + 'flora', flora);
  }
}
