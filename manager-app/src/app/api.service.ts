import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  createUser(newUserObj) {
    return this.http.post("/api/register", newUserObj);
  }

  logUserIn(userObj) {
    return this.http.post("/api/login", userObj);
  }

  createTeam(teamObj) {
    return this.http.post("/api/teams", teamObj);
  }

  getTeams() {
    return this.http.get("/api/teams");
  }
  
  deleteTeam(teamId) {
    return this.http.delete(`/api/teams/${teamId}`);
  }

  getPlayers(teamId) {
    return this.http.get(`/api/teams/${teamId}/players`);
  }

  populatePlayers(teamSRId, teamSRData) {
    return this.http.post(`/api/teams/${teamSRId}/sportrader/players`, teamSRData);
  }

  createPlayer(teamId, newPlayerObj) {
    return this.http.post(`/api/teams/${teamId}/user/players`, newPlayerObj);
  }

  logUserOut() {
    return this.http.get("/api/logout");
  }

  changeStatus(playerId, statusObj) {
    return this.http.put(`/api/players/${playerId}`, statusObj);
  }

  getGameInfo(year, month, day) {
    return this.http.get(`https://api.sportradar.us/nba/trial/v4/en/games/${year}/${month}/${day}/schedule.json?api_key=9zdg687da5jth395xawqragk`);
  }
}
