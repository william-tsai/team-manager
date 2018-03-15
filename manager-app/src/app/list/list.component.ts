import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  teams: any[] = [];
  errors: string[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.displayTeams();
  }

  displayTeams() {
    this.apiService.getTeams()
    .subscribe((response: any) => {
      if (response.errors) {
        for (let error in response.errors) {
          console.log(response.errors[error].message);
          this.errors.push(response.errors[error].message);
        }
      } else {
        console.log(response.message);
        this.teams = response.user.teams;
      }
    })
  }

  deleteBtnClicked(teamId) {
    this.apiService.deleteTeam(teamId)
    .subscribe((response: any) => {
      if (response.errors) {
        for (let error in response.errors) {
          console.log(response.errors[error].message);
          this.errors.push(response.errors[error].message);
        }
      } else {
        this.displayTeams();
        console.log(response.message);
      }
    })
  }

}
