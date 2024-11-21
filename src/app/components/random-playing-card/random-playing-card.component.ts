import { Component, computed, inject, signal } from '@angular/core';
import { PlayingCardComponent } from "../playing-card/playing-card.component";
import { PlayingCardService } from '../../services/playing-card.service';
import { PlayingCard } from '../../models/playing-card.model';

@Component({
  selector: 'app-random-playing-card',
  standalone: true,
  imports: [
    PlayingCardComponent
  ],
  templateUrl: './random-playing-card.component.html',
  styleUrl: './random-playing-card.component.scss'
})
export class RandomPlayingCardComponent {

  playingCardService = inject(PlayingCardService);

  playingCards : PlayingCard[] =this.playingCardService.getPlayingCards();

  selectedCardIndex = signal(0);
  selectedCard = computed(() => {
    return this.playingCards[this.selectedCardIndex()];
  })

  toggleCard(){
    this.selectedCardIndex.set(Math.floor(Math.random()*this.playingCards.length));
  }

}
