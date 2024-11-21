export enum CardIdentity{
  WHITE = 'rgb(248,231,185)',
  BLUE = 'rgb(14,104,171)',
  GREEN = 'rgb(0,115,62)',
  RED = 'rgb(211,32,42)',
  BLACK = 'rgb(50,50,50)',
  COLORLESS = 'rgb(150,150,150)',
  MULTICOLOR = 'multicolor',

  WHITEBLUE = 'white-blue',
  WHITEGREEN = 'white-green',
  WHITERED = 'white-red',
  WHITEBLACK = 'white-black',

  BLUEGREEN = 'blue-green',
  BLUERED = 'blue-red',
  BLUEBLACK = 'blue-black',

  GREENRED = 'green-red',
  GREENBLACK = 'green-black',

  REDBLACK = 'red-black',

  COLORLESSWHITE = 'colorless-white',
  COLORLESSBLUE = 'colorless-blue',
  COLORLESSGREEN = 'colorless-green',
  COLORLESSRED = 'colorless-red',
  COLORLESSBLACK = 'colorless-black'
}

export interface IPlayingCardIdentity{
  color : string;
}

export const PlayingCardIdentity : {[key:string]:IPlayingCardIdentity} = {
  [CardIdentity.WHITE] : {color : 'linear-gradient(0.25turn,'+CardIdentity.WHITE+',rgb(249,250,244),'+CardIdentity.WHITE+')'},
  [CardIdentity.BLUE] : {color : 'linear-gradient(0.25turn,'+CardIdentity.BLUE+',rgb(179,206,234),'+CardIdentity.BLUE+')'},
  [CardIdentity.GREEN] : {color : 'linear-gradient(0.25turn,'+CardIdentity.GREEN+',rgb(196,211,202),'+CardIdentity.GREEN+')'},
  [CardIdentity.RED] : {color : 'linear-gradient(0.25turn,'+CardIdentity.RED+',rgb(235,159,130),'+CardIdentity.RED+')'},
  [CardIdentity.BLACK] : {color : 'linear-gradient(0.25turn,'+CardIdentity.BLACK+',rgb(166,159,157),'+CardIdentity.BLACK+')'},
  [CardIdentity.COLORLESS] : {color : 'linear-gradient(0.25turn,'+CardIdentity.COLORLESS+',white,'+CardIdentity.COLORLESS+')'},
  [CardIdentity.MULTICOLOR] : {color : 'linear-gradient(0.25turn,rgb(170,127,46),white,rgb(170,127,46))'},

  [CardIdentity.WHITEBLUE] : {color : 'linear-gradient(0.25turn,'+CardIdentity.WHITE+','+CardIdentity.BLUE+')'},
  [CardIdentity.WHITEGREEN] : {color : 'linear-gradient(0.25turn,'+CardIdentity.WHITE+','+CardIdentity.GREEN+')'},
  [CardIdentity.WHITERED] : {color : 'linear-gradient(0.25turn,'+CardIdentity.WHITE+','+CardIdentity.RED+')'},
  [CardIdentity.WHITEBLACK] : {color : 'linear-gradient(0.25turn,'+CardIdentity.WHITE+','+CardIdentity.BLACK+')'},

  [CardIdentity.BLUEGREEN] : {color : 'linear-gradient(0.25turn,'+CardIdentity.BLUE+','+CardIdentity.GREEN+')'},
  [CardIdentity.BLUERED] : {color : 'linear-gradient(0.25turn,'+CardIdentity.BLUE+','+CardIdentity.RED+')'},
  [CardIdentity.BLUEBLACK] : {color : 'linear-gradient(0.25turn,'+CardIdentity.BLUE+','+CardIdentity.BLACK+')'},

  [CardIdentity.GREENRED] : {color : 'linear-gradient(0.25turn,'+CardIdentity.GREEN+','+CardIdentity.RED+')'},
  [CardIdentity.GREENBLACK] : {color : 'linear-gradient(0.25turn,'+CardIdentity.GREEN+','+CardIdentity.BLACK+')'},

  [CardIdentity.REDBLACK] : {color : 'linear-gradient(0.25turn,'+CardIdentity.RED+','+CardIdentity.BLACK+')'},

  [CardIdentity.COLORLESSWHITE] : {color : 'linear-gradient(0.25turn,'+CardIdentity.COLORLESS+','+CardIdentity.WHITE+')'},
  [CardIdentity.COLORLESSBLUE] : {color : 'linear-gradient(0.25turn,'+CardIdentity.COLORLESS+','+CardIdentity.BLUE+')'},
  [CardIdentity.COLORLESSGREEN] : {color : 'linear-gradient(0.25turn,'+CardIdentity.COLORLESS+','+CardIdentity.GREEN+')'},
  [CardIdentity.COLORLESSRED] : {color : 'linear-gradient(0.25turn,'+CardIdentity.COLORLESS+','+CardIdentity.RED+')'},
  [CardIdentity.COLORLESSBLACK] : {color : 'linear-gradient(0.25turn,'+CardIdentity.COLORLESS+','+CardIdentity.BLACK+')'}
}
