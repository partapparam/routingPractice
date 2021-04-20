import { Component, OnInit } from '@angular/core';
import teams from '../../../teamList.json';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teamList: {name: string, api: string}[] = teams;
  constructor() { }

  ngOnInit(): void {
  }

}
