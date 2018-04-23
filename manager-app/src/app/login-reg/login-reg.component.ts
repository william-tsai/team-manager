import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  newUser: any = {firstName: "", lastName: "", email: "", password: "", pwConfirm: ""};
  user: any = {email: "", password: ""}
  regErrors: string[] = [];
  logErrors: string;
  showRegSuccess: boolean = false;
  public isLoggedIn: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  register() {
    this.apiService.createUser(this.newUser)
    .subscribe((response: any) => {
      if (response.errors) {
        this.regErrors = [];
        for (let error in response.errors) { 
          console.log(response.errors[error].message);
          this.regErrors.push(response.errors[error].message);
        }
      } else {
        this.newUser = {firstName: "", lastName: "", email: "", password: "", pwConfirm: ""};
        this.regErrors = [];
        console.log(response.message);
        this.showRegSuccess = true;
      }
    })
  }

  login() {
    this.apiService.logUserIn(this.user)
    .subscribe((response: any) => {
      if (response.errors) {
        this.logErrors = response.errors.message;
      } else {
        console.log(response.message);
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
      }
    })

  }

}
