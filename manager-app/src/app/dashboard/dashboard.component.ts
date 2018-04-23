import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isListVisible: boolean;
  isAddFormVisible: boolean;
  isLoggedIn: boolean = true;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.isListVisible = true;
    this.isAddFormVisible = false;
  }

  showList() {
    this.isListVisible = true;
    this.isAddFormVisible = false;
  }

  showAddTeam() {
    this.isListVisible = false;
    this.isAddFormVisible = true;
  }

  receiveChildData($event) {
    this.apiService.populatePlayers($event.id, $event)
    .subscribe((response: any) => {
      if (response.errors) {
        console.log(response.errors);
      } else {
        this.isListVisible = true;
        this.isAddFormVisible = false;
        console.log(response.message);
      }
    })
  }

  logoutBtnClicked() {
    this.apiService.logUserOut()
    .subscribe((response: any) => {
      if (response.errors) {
        console.log(response.errors);       
      } else {
        console.log(response.message);
        this.router.navigate(['/']);
      }
    })
  }
}
