import ballThrowingTurn from "./BallThrowingTurn"
import { BowlingResultType } from "./bowling-result-type.enum";

export default class bowlingFrame {
    firstShot = new ballThrowingTurn();
    secondShot = new ballThrowingTurn();
    thirdOptionalShot = new ballThrowingTurn();
    FrameType = BowlingResultType.plain;
    currentResult = 0;
    accumaltiveScore = 0;
    name = '';
    constructor() {
        // initiating the last optional shot 
        this.thirdOptionalShot.shot = 0;
    }
    throwBall(): number {
        if (!this.firstShot.isSet) {
            const result = Math.ceil(Math.random() * 11) - 1;
            this.firstShot.shot = result;
            this.currentResult += result;
            if (result === 10) {
                this.FrameType = BowlingResultType.strike
                this.secondShot.shot = 0;
                this.name = 'strike'
            }
            return result;
        }
        if (!this.secondShot.isSet) {
            const secondResult = Math.ceil(Math.random() * (11 - this.currentResult)) - 1;
            // console.log('%c' + secondResult, 'font-weight:900; color:#654; font-size:1rem');
            this.secondShot.shot = secondResult;
            this.currentResult += secondResult;
            if (this.currentResult === 10) {
                this.FrameType = BowlingResultType.spare;
                this.name = 'spare'
            }
            return secondResult;
        }
        if (!this.thirdOptionalShot.isSet) {
            console.log('%c Last Rewarding throw', 'font-size:2rem; color: red;');
            this.sumUpLastRewardingShot();
            return this.thirdOptionalShot.shot;
        }

        return 0;
    }
    appliedThirdThrow() {
        // switch on the last rewarding shot
        this.thirdOptionalShot.isSet = false;
    }
    sumUpLastRewardingShot() {
        const thirdResult = Math.ceil(Math.random() * (11 - this.currentResult)) - 1;
        this.thirdOptionalShot.shot = thirdResult;
        this.currentResult += thirdResult;
    }
    bonus(prevFrame: bowlingFrame):boolean {
        console.log('%c' + BowlingResultType[prevFrame.FrameType], 'font-size:30px');
        let inTitledToAddtionalThrow = false;
        switch (prevFrame.FrameType) {
            case BowlingResultType.strike: {
                //The bonus for that frame is the value of the next two balls rolled.
                this.accumaltiveScore += this.currentResult;
                inTitledToAddtionalThrow = true;
                break;
            }
            case BowlingResultType.spare: {
                // The bonus for that frame is the number of pins knocked down by the next roll.
                this.accumaltiveScore += this.firstShot.shot;
                inTitledToAddtionalThrow = true;
                break;
            }
        }
        return inTitledToAddtionalThrow;
    }
    sumStep(prevFrame: bowlingFrame) {
        const accumalate = prevFrame ? prevFrame.accumaltiveScore : 0;
        this.accumaltiveScore += this.currentResult + accumalate;
    }

    public get frameHasClosed(): boolean {
        return this.firstShot.isSet && this.secondShot.isSet && this.thirdOptionalShot.isSet;
    }


}