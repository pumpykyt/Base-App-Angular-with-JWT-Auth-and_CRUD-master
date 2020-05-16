import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { id_ID } from 'ng-zorro-antd/i18n/public-api';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

baseUrl = 'api/usermanager';
constructor(private http: HttpClient) { }

getAllUsers(){
  return this.http.get(this.baseUrl);
}

removeUser(id: string){
  return this.http.post(this.baseUrl + '/removeuser/' + id, id);
}

}
