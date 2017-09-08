import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { STUFFS } from './mock-stuff'
import { Stuff } from "./stuff";



@Injectable()
export class StuffService {
    private heroesUrl = 'api/stuff';  // URL to web api

    constructor(
        private http: Http
    ){}

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    getStuffs() : Stuff[] {
       return STUFFS;
    }

   /* getStuff(id: number) : Promise<Stuff> {
        // todo
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Stuff)
            .catch(this.handleError);
    }*/
}