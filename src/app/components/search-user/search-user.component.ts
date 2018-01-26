import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  showContinueBtn:boolean = false;

  @Output() newAppMessage: EventEmitter<any> = new EventEmitter();

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
      this.showContinueBtn = true;
      this.newAppMessage.emit({
        message: `We found user: ${user.login}`,
        error: false
      });
      this.gitHubService.saveUser(user);
      // this.newMessage = 'We found user';
      console.log(user);
    }, error =>{
      this.searchingUser = false;
      this.newAppMessage.emit({
        message: `User not found`,
        error: true
      });
    } )
  }

}
