// jokes.component.ts
import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl:'jokes.component.html',
  providers: [JokesService]
})
export class JokesComponent implements OnInit {

  joke: any;
  constructor(private myJokeService: JokesService) { }

  ngOnInit() {}

  getRandomJoke() {
    this.myJokeService.getRandom()
      .subscribe((joke) => this.joke = joke.value.joke);
  }
}
