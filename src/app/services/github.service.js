"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Need Http module, since we need to make http get request.
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var GithubService = (function () {
    function GithubService(_http) {
        this._http = _http;
        console.log("Gihub Service Is Ready!!!");
        this.username = 'github';
        this.client_id = '1e6fd1b6f83e6a1bd188';
        this.client_secret = 'dd1b8c32c8728e211a045de914479dc69ffe70ed';
    }
    GithubService.prototype.getUser = function () {
        return this._http.get('https://api.github.com/users/'
            + this.username
            + '?client_id=' + this.client_id
            + '&client_secret=' + this.client_secret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getRepos = function () {
        return this._http.get('https://api.github.com/users/'
            + this.username
            + '/repos?client_id=' + this.client_id
            + '&client_secret=' + this.client_secret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getRepoParent = function (repoUrl) {
        return this._http.get(repoUrl
            + '?client_id=' + this.client_id
            + '&client_secret=' + this.client_secret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.updateUser = function (username) {
        this.username = username;
    };
    GithubService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GithubService);
    return GithubService;
}());
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map