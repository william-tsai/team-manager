import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { ListComponent } from './list/list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { AddTeamComponent } from './add-team/add-team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    ListComponent,
    AddPlayerComponent,
    PlayerStatusComponent,
    AddTeamComponent,
    DashboardComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
