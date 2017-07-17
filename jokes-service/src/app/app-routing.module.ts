import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { BothCountersComponent } from './both-counters/both-counters.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: 'counters',
    component: BothCountersComponent
  },
  {
    path:'jokes',
    component:JokesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
