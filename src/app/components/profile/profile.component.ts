import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service'

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
})

export class ProfileComponent  {
  user: any;
  repos: any[];
  username: string;

  constructor(private _githubService: GithubService) {
    this.setUser();
    this.setRepos();
  }

  searchUser() {
    this._githubService.updateUser(this.username);
    this.setUser();
    this.setRepos();
  }

  setUser() {
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  setRepos() {
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
}
