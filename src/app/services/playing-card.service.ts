import { Injectable } from "@angular/core";
import { PlayingCard } from "../models/playing-card.model";
import { CardIdentity } from "../models/card-identity.model";
import { Capacity } from "../models/capacity.model";
import { PowerTought } from "../models/power-tought.model";

@Injectable({
  providedIn : 'root'
})

export class PlayingCardService{

  private playingCards : PlayingCard[] = [
    new PlayingCard(
      'Behemoth',
      new CardIdentity(['5','green','red','blue']),
      '',
      'Creature : Behemot',
      'darksteel',
      [new Capacity(['green','tap'],'Kill everything'),
      new Capacity(['red','red','tap'],'Kill more everything')],
      'The Talented Artist',
      1998,
      new PowerTought('5','6')),
    new PlayingCard(
      'Tree',
      new CardIdentity(['2','green']),
      '',
      'Creature : Tree',
      'legion',
      [new Capacity(['tap'],'It\'s just a tree')],
      'Another talented artist',
      2004,
      new PowerTought('1','2')),
    new PlayingCard(      'Just an object',
      new CardIdentity(['4']),
      '',
      'Artifact',
      'eighth',
      [new Capacity(['tap'],'Not so much')],
      'Another talented artist',
      2004,
      new PowerTought('',''))
  ];


  getPlayingCards():PlayingCard[]{
    return this.playingCards;
  }
}
