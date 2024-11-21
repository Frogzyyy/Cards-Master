import { Component, input, Input, InputSignal, OnInit } from '@angular/core';
import { PowerTought } from '../../models/power-tought.model';

@Component({
  selector: 'app-card-footer',
  standalone: true,
  imports: [],
  templateUrl: './card-footer.component.html',
  styleUrl: './card-footer.component.scss'
})
export class CardFooterComponent{

  cardYear : InputSignal<number> = input.required();
  artistName : InputSignal<string> = input.required();
  powerTought : InputSignal<PowerTought|undefined> = input();
}
