import { Injectable } from '@angular/core';

// Need Http module, since we need to make http get request.
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id:string;
  private client_secret:string;

  constructor(private _http: Http) {
    console.log("Gihub Service Is Ready!!!")
    this.username = 'github';
    this.client_id = '1e6fd1b6f83e6a1bd188';
    this.client_secret = 'dd1b8c32c8728e211a045de914479dc69ffe70ed';
  }

  getUser() {
    return this._http.get('https://api.github.com/users/' 
      + this.username 
      + '?client_id=' + this.client_id
      + '&client_secret=' + this.client_secret)
    .map(res => res.json());
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/' 
      + this.username 
      + '/repos?client_id=' + this.client_id
      + '&client_secret=' + this.client_secret)
    .map(res => res.json());
  }

  getRepoParent(repoUrl: string) {
    return this._http.get(repoUrl 
      + '?client_id=' + this.client_id
      + '&client_secret=' + this.client_secret)
    .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}