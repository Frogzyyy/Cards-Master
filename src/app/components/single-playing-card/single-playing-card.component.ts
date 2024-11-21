import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayingCardComponent } from '../playing-card/playing-card.component';
import { Subscription } from 'rxjs';
import { PlayingCard } from '../../models/playing-card.model';
import { PlayingCardService } from '../../services/playing-card.service';


@Component({
  selector: 'app-single-playing-card',
  standalone: true,
  imports: [
    PlayingCardComponent
],
  templateUrl: './single-playing-card.component.html',
  styleUrl: './single-playing-card.component.scss'
})
export class SinglePlayingCardComponent implements OnInit, OnDestroy {

  playingCard !: PlayingCard;

  private playingCardService = inject(PlayingCardService);

  private route = inject(ActivatedRoute);
  playingCardID = signal<string|undefined>(undefined);
  routeSubscription : Subscription | null = null;

ngOnInit(): void {
  this.routeSubscription = this.route.params.subscribe(params => {this.playingCardID.set(params['id'] ? params['id'] : undefined)});
}

ngOnDestroy(): void {
  this.routeSubscription?.unsubscribe();
}

}
