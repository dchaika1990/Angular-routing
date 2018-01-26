import { Component, OnInit } from '@angular/core';

import { GithubDataService } from "../../services/github-data.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  user: Observable<any>;
  nickname: string;
  searchingUser: boolean = false;
  newMessage: string;

  constructor(
    public gitHubService: GithubDataService
  ) { }

  ngOnInit() {

  }

  onSearch({ valid, value }){

    this.searchingUser = true;

    this.gitHubService.searchUser(this.nickname).subscribe( user =>{
      this.user = user;
      this.searchingUser = false;
      this.newMessage = 'We found user';
      console.log(user);
    } )
  }

}
