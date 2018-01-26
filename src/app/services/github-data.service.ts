import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GithubDataService {

  user: any;

  constructor(
    public http: HttpClient
  ) { }

  searchUser( userName ){
    return this.http.get<Observable<any>>(`http://api.github.com/users/${userName}`)
  }

  saveUser(user) {
    this.user = user;
  }

  getUser(){
    return this.user;
  }

}
