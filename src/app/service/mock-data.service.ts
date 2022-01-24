import { Injectable } from '@angular/core';
import mockApi from 'src/api/mockApi';

export interface IPlayer {
  score: number;
  players: number;
  id: string;
}

export interface ITournament {
  prizeData: number[];
  currency: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor() {}

  async fetchPlayers(): Promise<IPlayer[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await mockApi.get('/PlayersByScore');
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  async fetchTournaments(): Promise<ITournament[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await mockApi.get('/tournaments');
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  }
}
