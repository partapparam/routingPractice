import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  url(team): string {
    return `http://data.nba.net/json/cms/noseason/team/${team}/roster.json`;
  }

  constructor(
    private http: HttpClient
  ) { }

  getPlayers(team): Observable<any> {
    // const request = this.url(team);
    return this.http.get<any>(this.url(team));
  }
}
