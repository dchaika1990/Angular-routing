import { Component, OnInit } from '@angular/core';

import { GithubDataService } from "../../services/github-data.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  userInfo: any;

  constructor(
    public gitHubService: GithubDataService
  ) { }

  ngOnInit() {
    this.userInfo = this.gitHubService.getUser();
  }

}
