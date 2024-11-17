import { Component, input, InputSignal } from '@angular/core';
import { Capacity } from '../../models/capacity.model';

@Component({
  selector: 'app-card-capacities',
  standalone: true,
  imports: [],
  templateUrl: './card-capacities.component.html',
  styleUrl: './card-capacities.component.scss'
})
export class CardCapacitiesComponent {
  capacities : InputSignal<Capacity[]> = input.required();
}
