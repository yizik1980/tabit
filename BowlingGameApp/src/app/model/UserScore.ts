export default class UserScore{
    name:string;
    scores:Array<Array<Number>>;
    finalScore:Number;
    date:Date;
    topScore:Number;
    constructor(name:string){
        this.name = name;
        this.scores = [[]];
        this.date = new Date();
    }
    addScore(score:Number){
      if(this.scores.length == 0) {  
        return this.scores.push([score]);;
      } 
      let last = this.scores[this.scores.length -1];
      if(last.length<=1){
        return last.push(score);
      }
      return this.scores.push([score]);
    }
}