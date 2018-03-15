import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { ListComponent } from './list/list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: LoginRegComponent},
  { path: "dashboard", component: DashboardComponent},
  { path: "add-team", component: AddTeamComponent},
  { path: "teams/:id/players", component: PlayerListComponent},
  { path: "teams/:id/add-player", component: AddPlayerComponent},
  { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
