export default class UserScore{
    name:string;
    score:Array<Array<Number>>;
    date:Date;
    constructor(){
        this.date = new Date();
    }
}