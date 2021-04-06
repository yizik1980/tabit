import { BowlingResultType } from "./bowling-result-type.enum";
import bowlingFrame from "./bowlingFrame";

export default class bowlingTenRounds{
    rounds:Array<bowlingFrame>;
    step = 0;
    sumResult = 0;
    constructor(){
        this.rounds = bowlingFrame[9];
        this.next();
    }
    next(){
        this.rounds[this.step] = new bowlingFrame();
        this.step++;
    }
    throwBall(){
        const currentThrow = this.rounds[this.step];
        currentThrow.throwBall();
        this.sumResult += currentThrow.currentResult;
        currentThrow.sumStep(null);
        /// elaps over first step
        if(this.step>0){
            const previousThrow = this.rounds[this.step-1]
            previousThrow.sumStep(currentThrow)
           

        }

    }


    
}