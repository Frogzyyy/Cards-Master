import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card-type',
  standalone: true,
  imports: [],
  templateUrl: './card-type.component.html',
  styleUrl: './card-type.component.scss'
})
export class CardTypeComponent {
  cardType = input.required<string>();
  cardExtension = input.required<string>();
}
