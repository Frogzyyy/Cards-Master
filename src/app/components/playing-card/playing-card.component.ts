import { PlayingCard } from './../../models/playing-card.model';
import { PlayingCardIdentity } from '../../utils/playing-card.utils';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardTypeComponent } from '../card-type/card-type.component';
import { CardCapacitiesComponent } from '../card-capacities/card-capacities.component';
import { CardFooterComponent } from '../card-footer/card-footer.component';
import { Component, input, computed } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CardExtension } from '../../utils/extension.utils';

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
export class PlayingCardComponent{

  playingCard = input.required<PlayingCard>();

  background = computed(() => {
    return PlayingCardIdentity[this.playingCard().cardIdentity].color;
  });

  extensionIconURL = computed(() => {
    return CardExtension[this.playingCard().extension].iconURL;
  });

  year = computed(() => {
    return CardExtension[this.playingCard().extension].year;
  });






}
