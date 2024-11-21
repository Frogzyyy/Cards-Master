import { Extensions } from '../utils/extension.utils';
import { CardIdentity } from './../utils/playing-card.utils';
import { Capacity } from "./capacity.model";
import { PowerTought } from "./power-tought.model";

export class PlayingCard{

  id!: string;
  cardName!: string;
  manaCost!: string[];
  cardIdentity!: CardIdentity;
  artworkURL!: string;
  cardType!: string;
  extension!: Extensions;
  artistName!: string;
  capacities?: Capacity[];
  powerTought?: PowerTought;

  constructor(){
    this.id = crypto.randomUUID().substring(0,10);
  }

  copy():PlayingCard{
    return Object.assign(new PlayingCard , this);
  }
}
