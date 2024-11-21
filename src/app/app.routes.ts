import { Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { RandomPlayingCardComponent } from './components/random-playing-card/random-playing-card.component';
import { SinglePlayingCardComponent } from './components/single-playing-card/single-playing-card.component';

export const routes: Routes = [
  { path : '' , redirectTo : 'card-list' , pathMatch : 'full'},
  { path : 'card-list' , component : CardListComponent },
  { path : 'random-card' , component : RandomPlayingCardComponent},
  { path : 'playing-card/:id' , component : SinglePlayingCardComponent}
];
