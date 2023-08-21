import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }
  
  upload(file:File):Observable<string>{
    let formData = new FormData(); 
    formData.append('file',file);
    return this.http.post<string>(environment.baseUrl + "file",formData);
  }
}
