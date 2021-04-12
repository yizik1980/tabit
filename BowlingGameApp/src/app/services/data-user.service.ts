import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UserScore from '../model/UserScore';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  constructor(private http:HttpClient) { }
  saveUserData(user:UserScore){
    this.http.post('/')
  }
}
