import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: any = [];
  teamName: string = "";
  teamId: string;
  date: string = "";
  opponent: string = "";
  venue: any = {};
  noGame: boolean = false;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {    
      this.teamId = params.get("id");
      this.displayPlayers();
      this.displayGameInfo();
    })
  }
  
  displayPlayers() {
    this.players = [];
    this.apiService.getPlayers(this.teamId)
    .subscribe((response: any) => {
      if (response.errors) {
        console.log(response.errors);
      } else {
        console.log(response.message);
        this.players = response.team.players;
        this.teamName = response.team.name;
      }
    })
  }
  
  displayGameInfo() {
    var dateNow = new Date();
    var currentYear = dateNow.getFullYear();
    var currentMonth = dateNow.getMonth() + 1;
    var currentDate = dateNow.getDate();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = dateNow.toLocaleDateString('en-US', options);
    this.date = formattedDate;
    this.apiService.getGameInfo(currentYear, currentMonth, currentDate)
    .subscribe((response: any) => {
      console.log(response);
      if (response.games.length == 0) {
        console.log("games length == 0 hit");
        this.noGame = true;
      } else {
        for (let game of response.games) {
          if (game.home.name.includes(this.teamName)) {
            this.opponent = game.away.name;
            this.venue = game.venue;
          } else if (game.away.name.includes(this.teamName)) {
            console.log("away:", game.away.name.includes(this.teamName));
            console.log(game.home.name);
            this.opponent = game.home.name;
            console.log("Opponent:", this.opponent);
            this.venue = game.venue;
          } else {
            console.log("No game for the team");
            this.noGame = true;
          }
        }
      }
    })
  }

  submitStatus(playerId, statusStr) {
    var statusObj: object;
    if (statusStr == "playing") {
      statusObj = {isPlaying: true, isNotPlaying: false, isUndecided: false};
    } else if (statusStr == "not playing") {
      statusObj = {isPlaying: false, isNotPlaying: true, isUndecided: false};
    } else if (statusStr == "undecided") {
      statusObj = {isPlaying: false, isNotPlaying: false, isUndecided: true};
    }
    this.apiService.changeStatus(playerId, statusObj)
    .subscribe((response: any) => {
      if (response.errors) {
        console.log(response.errors);
      } else {
        console.log(response.message);
        this.displayPlayers();
      } 
    })
  }

}
