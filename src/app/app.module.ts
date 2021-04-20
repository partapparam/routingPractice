import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    PlayerListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
