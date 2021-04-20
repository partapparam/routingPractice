import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {TeamListComponent} from './components/team-list/team-list.component';
import {PlayerListComponent} from './components/player-list/player-list.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {DetailComponent} from './components/detail/detail.component';

const routes: Routes = [
  { path: 'teams', component: TeamListComponent },
  { path: 'teams/:team', component: PlayerListComponent, data: { animation: 'enterAnimation' },  children: [
      { path: 'detail/:name', component: DetailComponent }
    ] },
  { path: '', redirectTo: 'teams', pathMatch: 'full'},
  // add a wildcard route
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(
     routes, {
       enableTracing: false
     }
   )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
