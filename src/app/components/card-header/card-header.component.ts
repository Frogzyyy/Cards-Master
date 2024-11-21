import { Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {
  cardName : InputSignal<string> = input.required();
  manaCost : InputSignal<string[]> = input.required();
}
