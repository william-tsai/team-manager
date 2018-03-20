webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-player/add-player.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-player/add-player.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink] = \"['/teams/' + teamId + '/players']\">Cancel</button>\n<form (submit) = \"submitToCreatePlayer()\">\n    <p>Name: <input type=\"text\" name=\"name\" [(ngModel)] = \"newPlayer.name\"></p>\n    <p>Position: <input type=\"text\" name=\"position\" [(ngModel)] = \"newPlayer.position\"></p>\n    <button type=\"submit\">Add Player</button>\n    <p *ngFor = \"let error of errors\">{{error}}</p>\n</form>"

/***/ }),

/***/ "./src/app/add-player/add-player.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var api_service_1 = __webpack_require__("./src/app/api.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AddPlayerComponent = /** @class */ (function () {
    function AddPlayerComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.newPlayer = { name: "", position: "" };
        this.errors = [];
    }
    AddPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.teamId = params.get("id");
        });
    };
    AddPlayerComponent.prototype.submitToCreatePlayer = function () {
        var _this = this;
        this.apiService.createPlayer(this.teamId, this.newPlayer)
            .subscribe(function (response) {
            if (response.errors) {
                _this.errors = [];
                for (var error in response.errors) {
                    console.log(response.errors[error].message);
                    _this.errors.push(response.errors[error].message);
                }
                ;
            }
            else {
                console.log(response.message);
                _this.router.navigate(['/teams/' + _this.teamId + '/players']);
            }
        });
    };
    AddPlayerComponent = __decorate([
        core_1.Component({
            selector: 'app-add-player',
            template: __webpack_require__("./src/app/add-player/add-player.component.html"),
            styles: [__webpack_require__("./src/app/add-player/add-player.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router, router_1.ActivatedRoute])
    ], AddPlayerComponent);
    return AddPlayerComponent;
}());
exports.AddPlayerComponent = AddPlayerComponent;


/***/ }),

/***/ "./src/app/add-team/add-team.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-team/add-team.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add A Team</h3>\n<form (submit) = \"submitToCreateTeamAndEmit()\">\n  <p>Team name: <input type=\"text\" name=\"name\" [(ngModel)]=\"newTeam.name\"></p>\n  <button type=\"submit\">Create</button>\n</form>"

/***/ }),

/***/ "./src/app/add-team/add-team.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var api_service_1 = __webpack_require__("./src/app/api.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AddTeamComponent = /** @class */ (function () {
    function AddTeamComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.newTeam = { name: "" };
        this.errors = [];
        // addedTeam: boolean = true;
        this.addEvent = new core_1.EventEmitter();
    }
    AddTeamComponent.prototype.ngOnInit = function () {
        this.newTeam = { name: "" };
    };
    AddTeamComponent.prototype.submitToCreateTeamAndEmit = function () {
        var _this = this;
        this.apiService.createTeam(this.newTeam)
            .subscribe(function (response) {
            if (response.errors) {
                _this.errors = [];
                for (var error in response.errors) {
                    console.log(response.errors[error].message);
                    _this.errors.push(response.errors[error].message);
                }
            }
            else {
                _this.newTeam = response.team;
                _this.addEvent.emit(_this.newTeam);
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddTeamComponent.prototype, "addEvent", void 0);
    AddTeamComponent = __decorate([
        core_1.Component({
            selector: 'app-add-team',
            template: __webpack_require__("./src/app/add-team/add-team.component.html"),
            styles: [__webpack_require__("./src/app/add-team/add-team.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], AddTeamComponent);
    return AddTeamComponent;
}());
exports.AddTeamComponent = AddTeamComponent;


/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.createUser = function (newUserObj) {
        return this.http.post("/api/register", newUserObj);
    };
    ApiService.prototype.logUserIn = function (userObj) {
        return this.http.post("/api/login", userObj);
    };
    ApiService.prototype.createTeam = function (teamObj) {
        return this.http.post("/api/teams", teamObj);
    };
    ApiService.prototype.getTeams = function () {
        return this.http.get("/api/teams");
    };
    ApiService.prototype.deleteTeam = function (teamId) {
        return this.http.delete("/api/teams/" + teamId);
    };
    ApiService.prototype.getPlayers = function (teamId) {
        return this.http.get("/api/teams/" + teamId + "/players");
    };
    ApiService.prototype.populatePlayers = function (teamSRId, teamSRData) {
        return this.http.post("/api/teams/" + teamSRId + "/sportrader/players", teamSRData);
    };
    ApiService.prototype.createPlayer = function (teamId, newPlayerObj) {
        return this.http.post("/api/teams/" + teamId + "/user/players", newPlayerObj);
    };
    ApiService.prototype.logUserOut = function () {
        return this.http.get("/api/logout");
    };
    ApiService.prototype.changeStatus = function (playerId, statusObj) {
        return this.http.put("/api/players/" + playerId, statusObj);
    };
    ApiService.prototype.getGameInfo = function (year, month, day) {
        return this.http.get("https://api.sportradar.us/nba/trial/v4/en/games/" + year + "/" + month + "/" + day + "/schedule.json?api_key=9zdg687da5jth395xawqragk");
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_reg_component_1 = __webpack_require__("./src/app/login-reg/login-reg.component.ts");
var add_player_component_1 = __webpack_require__("./src/app/add-player/add-player.component.ts");
var add_team_component_1 = __webpack_require__("./src/app/add-team/add-team.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var player_list_component_1 = __webpack_require__("./src/app/player-list/player-list.component.ts");
var routes = [
    { path: "", pathMatch: "full", component: login_reg_component_1.LoginRegComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "add-team", component: add_team_component_1.AddTeamComponent },
    { path: "teams/:id/players", component: player_list_component_1.PlayerListComponent },
    { path: "teams/:id/add-player", component: add_player_component_1.AddPlayerComponent },
    { path: "**", redirectTo: "" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Team Manger</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var login_reg_component_1 = __webpack_require__("./src/app/login-reg/login-reg.component.ts");
var list_component_1 = __webpack_require__("./src/app/list/list.component.ts");
var add_player_component_1 = __webpack_require__("./src/app/add-player/add-player.component.ts");
var player_status_component_1 = __webpack_require__("./src/app/player-status/player-status.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var api_service_1 = __webpack_require__("./src/app/api.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var add_team_component_1 = __webpack_require__("./src/app/add-team/add-team.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var player_list_component_1 = __webpack_require__("./src/app/player-list/player-list.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_reg_component_1.LoginRegComponent,
                list_component_1.ListComponent,
                add_player_component_1.AddPlayerComponent,
                player_status_component_1.PlayerStatusComponent,
                add_team_component_1.AddTeamComponent,
                dashboard_component_1.DashboardComponent,
                player_list_component_1.PlayerListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [api_service_1.ApiService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click) = \"logoutBtnClicked()\">Logout</button>\n<button (click) = \"showList()\">List</button> | <button (click) = \"showAddTeam()\">Add Team</button>\n<app-list *ngIf = \"isListVisible == true\"></app-list>\n<app-add-team *ngIf = \"isAddFormVisible == true\" (addEvent) = \"receiveChildData($event)\"></app-add-team>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var api_service_1 = __webpack_require__("./src/app/api.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.isListVisible = true;
        this.isAddFormVisible = false;
    };
    DashboardComponent.prototype.showList = function () {
        this.isListVisible = true;
        this.isAddFormVisible = false;
    };
    DashboardComponent.prototype.showAddTeam = function () {
        this.isListVisible = false;
        this.isAddFormVisible = true;
    };
    DashboardComponent.prototype.receiveChildData = function ($event) {
        var _this = this;
        this.apiService.populatePlayers($event.id, $event)
            .subscribe(function (response) {
            if (response.errors) {
                console.log(response.errors);
            }
            else {
                _this.isListVisible = true;
                _this.isAddFormVisible = false;
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.logoutBtnClicked = function () {
        var _this = this;
        this.apiService.logUserOut()
            .subscribe(function (response) {
            if (response.errors) {
                console.log(response.errors);
            }
            else {
                console.log(response.message);
                _this.router.navigate(['/']);
            }
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/list/list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <th>Team Name</th>\n    <th>Number of Players</th>\n    <th>Actions</th>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let team of teams\">\n      <td><a [routerLink] = \"['/teams/' + team._id + '/players']\">{{team.name}}</a></td>\n      <td>{{team.players.length}}</td>\n      <td>\n        <button (click) = \"deleteBtnClicked(team._id)\">Delete</button>\n        <button [routerLink] = \"['/teams/' + team._id + '/add-player']\">Add Player</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var api_service_1 = __webpack_require__("./src/app/api.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ListComponent = /** @class */ (function () {
    function ListComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.teams = [];
        this.errors = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.displayTeams();
    };
    ListComponent.prototype.displayTeams = function () {
        var _this = this;
        this.apiService.getTeams()
            .subscribe(function (response) {
            if (response.errors) {
                for (var error in response.errors) {
                    console.log(response.errors[error].message);
                    _this.errors.push(response.errors[error].message);
                }
            }
            else {
                console.log(response.message);
                _this.teams = response.user.teams;
            }
        });
    };
    ListComponent.prototype.deleteBtnClicked = function (teamId) {
        var _this = this;
        this.apiService.deleteTeam(teamId)
            .subscribe(function (response) {
            if (response.errors) {
                for (var error in response.errors) {
                    console.log(response.errors[error].message);
                    _this.errors.push(response.errors[error].message);
                }
            }
            else {
                _this.displayTeams();
                console.log(response.message);
            }
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            template: __webpack_require__("./src/app/list/list.component.html"),
            styles: [__webpack_require__("./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/login-reg/login-reg.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-reg/login-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\">\n  <h2>Log In</h2>\n  <form (submit) = \"login()\">\n    <p>Email: <input type=\"email\" name=\"email\" [(ngModel)] = \"user.email\"></p>\n    <p>Password: <input type=\"password\" name=\"password\" [(ngModel)] = \"user.password\"></p>\n    <button type=\"submit\">Login</button>\n    <p>{{logErrors}}</p>\n  </form>\n</div>\n<div id=\"reg\">\n  <h2>Register</h2>\n  <form (submit) = \"register()\">\n      <p>First Name: <input type=\"text\" name=\"firstName\" [(ngModel)] = \"newUser.firstName\"></p>\n      <p>Last Name: <input type=\"text\" name=\"lastName\" [(ngModel)] = \"newUser.lastName\"></p>\n      <p>Email: <input type=\"email\" name=\"email\" [(ngModel)] = \"newUser.email\"></p>\n      <p>Password: <input type=\"password\" name=\"password\" [(ngModel)] = \"newUser.password\"></p>\n      <p>Confirm Password: <input type=\"password\" name=\"pwConfirm\" [(ngModel)] = \"newUser.pwConfirm\"></p>\n      <button type=\"submit\">Register</button>\n      <p *ngIf = \"showRegSuccess == true\">Success! Feel free to log in!</p>\n      <p>{{regErrors}}</p>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login-reg/login-reg.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var api_service_1 = __webpack_require__("./src/app/api.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LoginRegComponent = /** @class */ (function () {
    function LoginRegComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.newUser = { firstName: "", lastName: "", email: "", password: "", pwConfirm: "" };
        this.user = { email: "", password: "" };
        this.regErrors = [];
        this.showRegSuccess = false;
    }
    LoginRegComponent.prototype.ngOnInit = function () {
    };
    LoginRegComponent.prototype.register = function () {
        var _this = this;
        this.apiService.createUser(this.newUser)
            .subscribe(function (response) {
            if (response.errors) {
                _this.regErrors = [];
                for (var error in response.errors) {
                    console.log(response.errors[error].message);
                    _this.regErrors.push(response.errors[error].message);
                }
            }
            else {
                _this.newUser = { firstName: "", lastName: "", email: "", password: "", pwConfirm: "" };
                _this.regErrors = [];
                console.log(response.message);
                _this.showRegSuccess = true;
            }
        });
    };
    LoginRegComponent.prototype.login = function () {
        var _this = this;
        this.apiService.logUserIn(this.user)
            .subscribe(function (response) {
            if (response.errors) {
                _this.logErrors = response.errors.message;
            }
            else {
                console.log(response.message);
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginRegComponent = __decorate([
        core_1.Component({
            selector: 'app-login-reg',
            template: __webpack_require__("./src/app/login-reg/login-reg.component.html"),
            styles: [__webpack_require__("./src/app/login-reg/login-reg.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], LoginRegComponent);
    return LoginRegComponent;
}());
exports.LoginRegComponent = LoginRegComponent;


/***/ }),

/***/ "./src/app/player-list/player-list.component.css":
/***/ (function(module, exports) {

module.exports = ".playing-on {\n    background-color: green;\n}\n\n.not-playing-on {\n    background-color: red;\n}\n\n.undecided-on {\n    background-color: yellow;\n}"

/***/ }),

/***/ "./src/app/player-list/player-list.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink] = \"['/dashboard']\">Back to Team List</button>\n<button [routerLink] = \"['/teams/' + teamId + '/add-player']\">Add a Player</button>\n<h2>{{teamName}}</h2>\n<h3>Game scheduled for {{date}}:</h3>\n<div *ngIf = \"noGame == false\">\n  <p>Opponent: {{opponent}}</p>\n  <p>Arena: {{venue.name}}</p>\n  <p>Location: {{venue.city}}, {{venue.state}}</p>\n</div>\n<div *ngIf = \"noGame == true\">\n  <p>No game scheduled</p>\n</div>\n<h3>Roster:</h3>\n<table>\n  <thead>\n    <th>Name</th>\n    <th>Position</th>\n    <th>Status</th>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let player of players\">\n      <td>{{player.name}}</td>\n      <td>{{player.position}}</td>\n      <td>\n        <button [ngClass] = \"{ 'playing-on': player.isPlaying }\" (click) = \"submitStatus(player._id, 'playing')\">Playing</button>\n        <button [ngClass] = \"{ 'not-playing-on': player.isNotPlaying }\" (click) = \"submitStatus(player._id, 'not playing')\">Not Playing</button>\n        <button [ngClass] = \"{ 'undecided-on': player.isUndecided }\" (click) = \"submitStatus(player._id, 'undecided')\">Undecided</button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/player-list/player-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var api_service_1 = __webpack_require__("./src/app/api.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.players = [];
        this.teamName = "";
        this.date = "";
        this.opponent = "";
        this.venue = {};
        this.noGame = true;
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.teamId = params.get("id");
            _this.displayPlayers();
            _this.displayGameInfo();
        });
    };
    PlayerListComponent.prototype.displayPlayers = function () {
        var _this = this;
        this.players = [];
        this.apiService.getPlayers(this.teamId)
            .subscribe(function (response) {
            if (response.errors) {
                console.log(response.errors);
            }
            else {
                console.log(response.message);
                _this.players = response.team.players;
                _this.teamName = response.team.name;
            }
        });
    };
    PlayerListComponent.prototype.displayGameInfo = function () {
        var _this = this;
        var dateNow = new Date();
        var currentYear = dateNow.getFullYear();
        var currentMonth = dateNow.getMonth() + 1;
        var currentDate = dateNow.getDate();
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var formattedDate = dateNow.toLocaleDateString('en-US', options);
        this.date = formattedDate;
        this.apiService.getGameInfo(currentYear, currentMonth, currentDate)
            .subscribe(function (response) {
            console.log(response);
            for (var _i = 0, _a = response.games; _i < _a.length; _i++) {
                var game = _a[_i];
                if (game.home.name.includes(_this.teamName)) {
                    _this.opponent = game.away.name;
                    _this.venue = game.venue;
                    _this.noGame = false;
                }
                else if (game.away.name.includes(_this.teamName)) {
                    _this.opponent = game.home.name;
                    _this.venue = game.venue;
                    _this.noGame = false;
                }
            }
        });
    };
    PlayerListComponent.prototype.submitStatus = function (playerId, statusStr) {
        var _this = this;
        var statusObj;
        if (statusStr == "playing") {
            statusObj = { isPlaying: true, isNotPlaying: false, isUndecided: false };
        }
        else if (statusStr == "not playing") {
            statusObj = { isPlaying: false, isNotPlaying: true, isUndecided: false };
        }
        else if (statusStr == "undecided") {
            statusObj = { isPlaying: false, isNotPlaying: false, isUndecided: true };
        }
        this.apiService.changeStatus(playerId, statusObj)
            .subscribe(function (response) {
            if (response.errors) {
                console.log(response.errors);
            }
            else {
                console.log(response.message);
                _this.displayPlayers();
            }
        });
    };
    PlayerListComponent = __decorate([
        core_1.Component({
            selector: 'app-player-list',
            template: __webpack_require__("./src/app/player-list/player-list.component.html"),
            styles: [__webpack_require__("./src/app/player-list/player-list.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router, router_1.ActivatedRoute])
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;


/***/ }),

/***/ "./src/app/player-status/player-status.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player-status/player-status.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  player-status works!\n</p>\n"

/***/ }),

/***/ "./src/app/player-status/player-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PlayerStatusComponent = /** @class */ (function () {
    function PlayerStatusComponent() {
    }
    PlayerStatusComponent.prototype.ngOnInit = function () {
    };
    PlayerStatusComponent = __decorate([
        core_1.Component({
            selector: 'app-player-status',
            template: __webpack_require__("./src/app/player-status/player-status.component.html"),
            styles: [__webpack_require__("./src/app/player-status/player-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerStatusComponent);
    return PlayerStatusComponent;
}());
exports.PlayerStatusComponent = PlayerStatusComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map