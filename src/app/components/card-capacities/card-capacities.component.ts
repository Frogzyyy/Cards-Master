import { Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Capacity } from '../../models/capacity.model';

@Component({
  selector: 'app-card-capacities',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-capacities.component.html',
  styleUrl: './card-capacities.component.scss'
})
export class CardCapacitiesComponent {
  capacities : InputSignal<Capacity[]|undefined> = input.required();
}
