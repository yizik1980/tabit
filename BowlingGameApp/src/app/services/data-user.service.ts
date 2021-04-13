import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import UserScore from '../model/UserScore';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {
  
  constructor(private http:HttpClient){ }
  getUser():Observable<UserScore[]>{
    return this.http.get<UserScore[]>(environment.url+'/bowling');
  }
  saveUserData(user:UserScore):Observable<any>{
    return this.http.post(environment.url+'/bowling',user);
  }
}
