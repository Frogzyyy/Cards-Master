export class CardIdentity{
  public colors = [''];
  public gradientString !: string;

  constructor(
    public manaCost: string[],
  ){
    this.pickIdentityColors();
  }

  pickIdentityColors():void{
    let j = 0;
    for(let i = 0 ; i < this.manaCost.length ; i++){
      if(this.manaCost[i] === 'white'
        || this.manaCost[i] === 'green'
        || this.manaCost[i] === 'red'
        || this.manaCost[i] === 'blue'
        || this.manaCost[i] === 'black'){
        this.colors[j] = this.manaCost[i];
        j++;
      }
    }
    if(this.colors.length > 1){
      this.createIdentityGradientString();
    }else{
      this.gradientString = this.colors[0];
    }
  }

  createIdentityGradientString():void{
    this.gradientString = 'linear-gradient(0.25turn';
    for(let i = 0 ; i < this.colors.length ; i++){
        this.gradientString = this.gradientString+','+this.colors[i];
    }
    this.gradientString = this.gradientString + ')';
  }
}
