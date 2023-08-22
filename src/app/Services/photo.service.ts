import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhotoUploadRes } from '../models/photoUploadRes.model';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }
  
  upload(file:File):Observable<PhotoUploadRes>{
    let formData = new FormData(); 
    formData.append('file',file);
    return this.http.post<PhotoUploadRes>(environment.baseUrl + "file",formData);
  }
 _getPhotoName(path:string){
  let f1 = path.split('/');
  return f1[f1.length - 1];
 }
  remove(path:string):Observable<PhotoUploadRes>{
    console.log(this._getPhotoName(path));
    path = this._getPhotoName(path);
    return this.http.delete<PhotoUploadRes>(environment.baseUrl+`File/remove?fileName=${path}`)
  }
}
