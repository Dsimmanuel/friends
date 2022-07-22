import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}


  viewfriend=()=>{
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
  addfriend=(friend:any)=>{
    return this.http.post<any>("https://dummyapifriends.herokuapp.com/view",friend)
  }
}
