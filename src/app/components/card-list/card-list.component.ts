import { PlayingCard } from './../../models/playing-card.model';
import { Component, model, computed, OnInit, inject, signal } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { PlayingCardComponent } from '../playing-card/playing-card.component';
import { PlayingCardService } from '../../services/playing-card.service';
import { CardIdentity } from '../../utils/playing-card.utils';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    SearchBarComponent,
    PlayingCardComponent
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {

  playingCardService = inject(PlayingCardService);

  playingCards = signal<PlayingCard[]>([]);

  search = model('');
  filteredCards = computed(() => {
    return this.playingCards().filter(playingCard => playingCard.cardName.includes(this.search()));
  })

  constructor(){
    this.playingCards.set(this.playingCardService.getPlayingCards());
  }
}
