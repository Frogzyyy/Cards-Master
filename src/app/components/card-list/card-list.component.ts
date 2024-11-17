import { PlayingCard } from './../../models/playing-card.model';
import { Component, OnInit } from '@angular/core';
import { PlayingCardComponent } from '../playing-card/playing-card.component';
import { PlayingCardService } from '../../services/playing-card.service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    PlayingCardComponent
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit {

  playingCards !: PlayingCard[];

  constructor(
    public playingCardService : PlayingCardService
  ){}

  ngOnInit(): void {
    this.playingCards  = this.playingCardService.getPlayingCards();
  }

}
