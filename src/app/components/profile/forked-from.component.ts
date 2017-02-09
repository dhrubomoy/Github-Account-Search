import { Component, Input } from '@angular/core';
import { GithubService } from '../../services/github.service'

@Component({
  selector: 'forked-from',
  template: `
    <div style="font-size: .9em; color:#8C8989;">
      Forked from <a href="{{ repoParentHtmlUrl }}" target="_blank">{{ repoParentFullName }}</a>
    </div>
  `

})

export class ForkedFromComponent {
  private _repoUrl: string;
  private repoParentFullName: string;
  private repoParentHtmlUrl: string;

  constructor(private _githubService: GithubService) {

  }
  
  @Input()
  set repoUrl(repoUrl: string) {
    this._repoUrl = repoUrl;
    console.log(repoUrl);
    this._githubService.getRepoParent(repoUrl).subscribe(repo => {
      this.repoParentFullName = repo.parent.full_name;
      this.repoParentHtmlUrl = repo.parent.html_url;
      console.log(this.repoParentFullName + ": " + this.repoParentHtmlUrl);
    });
  }

  get repoUrl(): string {
    return this._repoUrl;
  }
}