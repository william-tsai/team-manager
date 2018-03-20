import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  newPlayer: any = {name: "", position: ""};
  teamId: string;
  errors: string[] = [];

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.teamId = params.get("id");
    })
  }

  submitToCreatePlayer() {
    this.apiService.createPlayer(this.teamId, this.newPlayer)
    .subscribe((response: any) => {
      if (response.errors) {
        this.errors = [];
        for (let error in response.errors) {
          console.log(response.errors[error].message);
          this.errors.push(response.errors[error].message);
        };
      } else {
        console.log(response.message);
        this.router.navigate(['/teams/' + this.teamId + '/players']);
      }
    })
  }
}
