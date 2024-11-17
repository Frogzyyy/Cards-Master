import { Capacity } from "./capacity.model";
import { CardIdentity } from "./card-identity.model";
import { PowerTought } from "./power-tought.model";

export class PlayingCard{

  id : string;

  constructor(
    public cardName: string,
    public cardIdentity: CardIdentity,
    public artworkURL: string,
    public cardType: string,
    public extension: string,
    public capacities: Capacity[],
    public artistName: string,
    public year: number,
    public powerTought: PowerTought
  ){
    this.id = crypto.randomUUID().substring(0,10);
  }
}
