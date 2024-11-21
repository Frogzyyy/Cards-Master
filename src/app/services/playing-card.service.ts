import { Injectable } from "@angular/core";
import { PlayingCard } from "../models/playing-card.model";
import { Capacity } from "../models/capacity.model";
import { PowerTought } from "../models/power-tought.model";
import { CardIdentity } from "../utils/playing-card.utils";
import { Extensions } from "../utils/extension.utils";

@Injectable({
  providedIn : 'root'
})

export class PlayingCardService{

  private playingCards : PlayingCard[] = [];

  constructor(){
    this.load();
  }

  getPlayingCards():PlayingCard[]{
    return this.playingCards.map(playingCard => playingCard.copy())
  }

  getPlayingCardByID(id : string):PlayingCard | undefined{
    const  playingCard = this.playingCards.find(playingCard => playingCard.id === id);

    return playingCard ? playingCard.copy() : undefined;
  }

  addPlayingCard(playingCard : PlayingCard):PlayingCard{
    const playingCardCopy = playingCard.copy();

    this.playingCards.push(playingCardCopy);
    this.save();
    return playingCardCopy;
  }

  updatePlayingCard(playingCard : PlayingCard):PlayingCard{
    const playingCardCopy = playingCard.copy();
    const cardIndex = this.playingCards.findIndex(originalCard => originalCard.id === playingCard.id);
    if(cardIndex){
      this.playingCards[cardIndex] = playingCardCopy;
    }
    return playingCardCopy;
  }

  deleteCard(id : string){
    const cardIndex = this.playingCards.findIndex(originalCard => originalCard.id === id);
    if(cardIndex){
      this.playingCards.splice(cardIndex,1);
    }
    this.save();
  }

  private save(){
    localStorage.setItem('playingCards', JSON.stringify(this.playingCards))
  }

  private load(){
    const cardsData = localStorage.getItem('playingCards');

    if(cardsData){
      this.playingCards = JSON.parse(cardsData).map((cardJSON : any) => Object.assign(new PlayingCard,cardJSON));
    }else{
      this.init();
      this.save();
    }
  }

  private init(){
    const card1 = new PlayingCard();
    const card2 = new PlayingCard();
    const card3 = new PlayingCard();
    const card4 = new PlayingCard();
    const card5 = new PlayingCard();
    const card6 = new PlayingCard();

// SETTING UP CARD1

    card1.cardName = 'Behemot';
    card1.manaCost = ['5','green','red'];
    card1.cardIdentity = CardIdentity.GREENRED;
    card1.artworkURL = 'img/cards/behemot.png';
    card1.cardType = 'Creature : Behemot';
    card1.extension = Extensions.EIGHTH;
    card1.artistName = 'The Talented Artist';
    card1.capacities =
    [
      new Capacity(['green','tap'],'Kill everything'),
      new Capacity(['red','red','tap'],'Kill more everything')
    ];
    card1.powerTought = new PowerTought('5','6');

// SETTING UP CARD2

    card2.cardName = 'Tree';
    card2.manaCost = ['2','green','green'];
    card2.cardIdentity = CardIdentity.GREEN
    card2.artworkURL = 'img/cards/tree.png'
    card2.cardType = 'Creature : Tree';
    card2.extension = Extensions.LEGIONS;
    card2.artistName = 'Another talented artist';
    card2.capacities =
    [
      new Capacity(['tap'],'It\'s just a tree')
    ];
    card2.powerTought = new PowerTought('2','3');

// SETTING UP CARD3

    card3.cardName = 'Platinum Angel';
    card3.manaCost = ['7'];
    card3.cardIdentity = CardIdentity.COLORLESS;
    card3.artworkURL = 'img/cards/platinum-angel.png';
    card3.cardType = 'Artifact Creature - Angel';
    card3.extension = Extensions.MIRRODIN;
    card3.artistName = 'Brom';
    card3.capacities =
    [
      new Capacity([''],'Flying'),
      new Capacity([''],'You can\'t loose the game and your opponent can\'t win the game.')
    ];

// SETTING UP CARD4

    card4.cardName = 'Annoying blue thing';
    card4.manaCost = ['3','blue','blue'];
    card4.cardIdentity = CardIdentity.BLUE;
    card4.artworkURL = '';
    card4.cardType = 'Instant';
    card4.extension = Extensions.SHARDSALARA;
    card4.artistName = 'The Talented Artist Again';

// SETTING UP CARD5

    card5.cardName = 'Rainbow';
    card5.manaCost = ['X','white','blue','green','red','black'];
    card5.cardIdentity = CardIdentity.MULTICOLOR;
    card5.artworkURL = '';
    card5.cardType = 'Creature : Rainbow';
    card5.extension = Extensions.DARKSTEEL;
    card5.artistName = 'The Talented Artist';
    card5.powerTought = new PowerTought('X','X');

// SETTING UP CARD6

    card6.cardName = 'Please Work';
    card6.manaCost = ['X'];
    card6.cardIdentity = CardIdentity.COLORLESS;
    card6.artworkURL = '';
    card6.cardType = 'Creature : God of Code';
    card6.extension = Extensions.FITH;
    card6.artistName = 'The Talented Artist';
    card6.capacities =
    [
    new Capacity(['0'],'It works')
    ]
    card6.powerTought = new PowerTought('X','X');

  this.playingCards.push(card1);
  this.playingCards.push(card2);
  this.playingCards.push(card3);
  this.playingCards.push(card4);
  this.playingCards.push(card5);
  this.playingCards.push(card6);
  }
}
