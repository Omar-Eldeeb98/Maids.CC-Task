import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersapiService {
  constructor(private _HttpClient: HttpClient) {}

  //& get all users data
  getAllUsers(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      ` https://reqres.in/api/users?page=${pageNumber}`
    );
  }

  //& get user details
  getUserDetails(id: string): Observable<any> {
    return this._HttpClient.get(` https://reqres.in/api/users/${id}`);
  }
}
