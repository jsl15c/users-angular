import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JokesService {

  constructor(private myHttpCaller: Http) { }

  getRandom() {
    return this.myHttpCaller.get('http://api.icndb.com/jokes/random')
      .map((res: Response) => res.json());
  }
}
