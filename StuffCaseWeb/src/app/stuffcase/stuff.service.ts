import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Stuff } from "./stuff";



@Injectable()
export class StuffService {
    private stuffsUrl = 'http://localhost:5000/api/stuff';  // URL to web api

    constructor(
        private http: Http
    ){}

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    getStuffs() : Promise<Stuff[]> {      
        return this.http.get(this.stuffsUrl)
        .toPromise()
        .then(response => response.json() as Stuff[])
        .catch(this.handleError);
    }

    getStuff(id: number) : Promise<Stuff> {
        const url = `${this.stuffsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Stuff)
            .catch(this.handleError);
    }
}