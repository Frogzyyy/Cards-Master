import { PlayingCard } from './../../models/playing-card.model';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardTypeComponent } from '../card-type/card-type.component';
import { CardCapacitiesComponent } from '../card-capacities/card-capacities.component';
import { CardFooterComponent } from '../card-footer/card-footer.component';
import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [
    CardHeaderComponent,
    CardTypeComponent,
    CardCapacitiesComponent,
    CardFooterComponent,
    NgStyle
  ],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent {

  playingCard = input.required<PlayingCard>();
}
