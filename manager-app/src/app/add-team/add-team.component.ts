import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  newTeam: any = {name: ""};
  errors: string[] = [];
  // addedTeam: boolean = true;

  @Output() addEvent = new EventEmitter();

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.newTeam = {name: ""};
  }

  submitToCreateTeamAndEmit() {
    this.apiService.createTeam(this.newTeam)
    .subscribe((response: any) => {
      if (response.errors) {
        this.errors = [];
        for (let error in response.errors) {
          console.log(response.errors[error].message);
          this.errors.push(response.errors[error].message);
        }
      } else {
        this.newTeam = response.team;
        this.addEvent.emit(this.newTeam);
      }
    })
  }

}
