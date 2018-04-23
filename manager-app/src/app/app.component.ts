import { Component, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'; 

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
    $(document).ready(function(){
      $('.background').height($(window).height());
     });
  }

  public onActivate(event: any) {
    console.log(event);
    console.log("login?:", event.isLoggedIn);
    if (event.isLoggedIn == true) {
      console.log("isLoggedIn is true");
      this.document.getElementsByClassName("background")[0].setAttribute("class", "no-background");
      this.document.getElementsByClassName("overlay")[0].setAttribute("class", "no-overlay");
    } else if (event.isLoggedIn == false) {
      console.log("isLoggedIn is false");
      this.document.getElementsByClassName("no-background")[0].setAttribute("class", "background");
      this.document.getElementsByClassName("no-overlay")[0].setAttribute("class", "overlay");
    } else {
      console.log("Other components");
    }
  }
}
