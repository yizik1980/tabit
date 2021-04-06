import ballThrowingTurn from "./BallThrowingTurn"
import { BowlingResultType } from "./bowling-result-type.enum";

export default class bowlingFrame {
    constructor() {

    }
    firstShot: ballThrowingTurn;
    secondShot: ballThrowingTurn;
    FrameType = BowlingResultType.plain;
    currentResult = 0;
    throwBall() {
        if (!this.firstShot) {
            const result = Math.ceil(Math.random() * 11) - 1;
            this.firstShot = new ballThrowingTurn(result);
            this.currentResult = result;
            if (result === 10) {
                this.FrameType = BowlingResultType.strike
                this.secondShot = new ballThrowingTurn(0);
            }
            return;
        }
        if (!this.secondShot) {
            const secondResult = Math.ceil(Math.random() * (11 - this.currentResult)) - 1;
            this.secondShot = new ballThrowingTurn(secondResult);
            this.currentResult += secondResult;
            if (this.currentResult === 10) {
                this.FrameType = BowlingResultType.speare;
            }
        }
    }
    sumStep(nextFrame:bowlingFrame){
        switch(this.FrameType){
            case BowlingResultType.strike:{
                //The bonus for that frame is the value of the next two balls rolled.
                this.currentResult += nextFrame.currentResult;
            }
            case BowlingResultType.speare:{
                // The bonus for that frame is the number of pins knocked down by the next roll.
                this.currentResult += nextFrame.firstShot.shot;
            }
            default:{

            }
        }
    }

}