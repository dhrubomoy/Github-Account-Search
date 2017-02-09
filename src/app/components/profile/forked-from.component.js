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
var github_service_1 = require('../../services/github.service');
var ForkedFromComponent = (function () {
    function ForkedFromComponent(_githubService) {
        this._githubService = _githubService;
    }
    Object.defineProperty(ForkedFromComponent.prototype, "repoUrl", {
        get: function () {
            return this._repoUrl;
        },
        set: function (repoUrl) {
            var _this = this;
            this._repoUrl = repoUrl;
            console.log(repoUrl);
            this._githubService.getRepoParent(repoUrl).subscribe(function (repo) {
                _this.repoParentFullName = repo.parent.full_name;
                _this.repoParentHtmlUrl = repo.parent.html_url;
                console.log(_this.repoParentFullName + ": " + _this.repoParentHtmlUrl);
            });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], ForkedFromComponent.prototype, "repoUrl", null);
    ForkedFromComponent = __decorate([
        core_1.Component({
            selector: 'forked-from',
            template: "\n    <div style=\"font-size: .9em; color:#8C8989;\">\n      Forked from <a href=\"{{ repoParentHtmlUrl }}\" target=\"_blank\">{{ repoParentFullName }}</a>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [github_service_1.GithubService])
    ], ForkedFromComponent);
    return ForkedFromComponent;
}());
exports.ForkedFromComponent = ForkedFromComponent;
//# sourceMappingURL=forked-from.component.js.map