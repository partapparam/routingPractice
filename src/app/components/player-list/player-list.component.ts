import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Route} from '@angular/router';
import {slideInAnimation} from '../../animations';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  animations: [slideInAnimation]
})
export class PlayerListComponent implements OnInit, OnDestroy {
  players$: Observable<any>;
  coaches$: Observable<any>;
  team$: Observable<any>;
  team: string;
  subscription: Subscription;
  detailData;
  show = false;

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
        this.team$ = data.sports_content.roster.team;
        console.log(this.team$, this.players$, this.coaches$);
      });
  }

  ngOnDestroy(): void {
    this.show = false;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showDetail(data): void {
    this.detailData = data;
  }

}
