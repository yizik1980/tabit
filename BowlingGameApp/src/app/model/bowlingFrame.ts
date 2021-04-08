import ballThrowingTurn from "./BallThrowingTurn"
import { BowlingResultType } from "./bowling-result-type.enum";

export default class bowlingFrame {
    constructor() { }
    firstShot = new ballThrowingTurn();
    secondShot = new ballThrowingTurn();
    FrameType = BowlingResultType.plain;
    currentResult = 0;
    accumaltiveScore = 0;
    throwBall(): number {
        if (!this.firstShot.isSet) {
            const result = Math.ceil(Math.random() * 11) - 1;
            this.firstShot.shot = result;
            this.currentResult += result;
            if (result === 10) {
                this.FrameType = BowlingResultType.strike
                this.secondShot.shot = 0;
            }
            return result;
        }
        if (!this.secondShot.isSet) {
            const secondResult = Math.ceil(Math.random() * (11 - this.currentResult)) - 1;
            console.log('%c' + secondResult, 'font-weight:900; color:#654; font-size:1rem');
            this.secondShot.shot = secondResult;
            this.currentResult += secondResult;
            if (this.currentResult === 10) {
                this.FrameType = BowlingResultType.speare;
            }
            return secondResult;
        }
        return 0;
    }

    bonus(prevFrame: bowlingFrame): number {
        console.log('%c' + BowlingResultType[prevFrame.FrameType], 'font-size:30px');
        switch (prevFrame.FrameType) {
            case BowlingResultType.strike: {
                //The bonus for that frame is the value of the next two balls rolled.
                this.accumaltiveScore += this.currentResult;
                break;
            }
            case BowlingResultType.speare: {
                // The bonus for that frame is the number of pins knocked down by the next roll.
                this.accumaltiveScore += this.firstShot.shot;
                break;
            }
        }
        return this.accumaltiveScore;
    }
    sumStep(prevFrame: bowlingFrame) {
        const accumalate = prevFrame ? prevFrame.accumaltiveScore : 0;
        console.log('accumlative: ' + this.accumaltiveScore, accumalate)
        this.accumaltiveScore += this.currentResult + accumalate;
    }

    public get frameHasClosed(): boolean {
        return this.firstShot.isSet && this.secondShot.isSet;
    }


}