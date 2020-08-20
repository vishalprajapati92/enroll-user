import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EnrollUserService {

  constructor(private _httpRequest : HttpClient) { 
  }
  
  getUserInfo() {
    return this._httpRequest.get('http://localhost:8080/enrollees');
  }

  getEnrollesUserDetails(data) {
    return this._httpRequest.get(`http://localhost:8080/enrollees/${data}`);
  }

  updateEnrollUserInfo(id, formData) {
    console.log("data",id);
    return this._httpRequest.put(`http://localhost:8080/enrollees/${id}`, formData);
  }

}
