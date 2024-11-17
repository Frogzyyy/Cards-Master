import { CardIdentity } from './../../models/card-identity.model';
import { Component, input, Input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-card-header',
  standalone: true,
  imports: [],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {
  cardName : InputSignal<string> = input.required();
  cardIdentity : InputSignal<CardIdentity> = input.required();
}
