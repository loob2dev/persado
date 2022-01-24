import { Component, OnInit } from '@angular/core';
import {
  IPlayer,
  ITournament,
  MockDataService,
} from 'src/app/service/mock-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  playersByScore: IPlayer[] = [];
  tournaments: ITournament[] = [];
  max_players: number = 0;

  constructor(private mockData: MockDataService) {
    this.initialize();
  }

  ngOnInit(): void {}

  initialize(): void {
    Promise.all([
      this.mockData.fetchPlayers(),
      this.mockData.fetchTournaments(),
    ])
      .then((results) => {
        this.playersByScore = results[0];
        this.tournaments = results[1];

        let max = 0;
        this.playersByScore.forEach(({ players }) => {
          if (max < players) {
            max = players;
          }
        });
        this.max_players = max;
      })
      .catch((error) => {});
  }
}
