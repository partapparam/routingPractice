import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  players$: Observable<any>;
  coaches$: Observable<any>;
  team: string;
  subscription: Subscription;

  constructor(
    private ps: PlayersService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.team = this.activatedRoute.snapshot.paramMap.get('team');
    this.getPlayers(this.team);
  }

  getPlayers(team): void {
    this.subscription = this.ps.getPlayers(team)
      .subscribe(data => {
        this.players$ = data.sports_content.roster.players.player;
        this.coaches$ = data.sports_content.roster.coaches.coach;
        console.log(this.players$, this.coaches$);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
