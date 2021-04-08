import { BowlingResultType } from "./bowling-result-type.enum";
import bowlingFrame from "./bowlingFrame";

export default class bowlingTenRounds {
    rounds: Array<bowlingFrame>;
    step = 0;
    sumResult = 0;
    last:number;
    inTitledToAddtionalThrow = false;
    setThirdShotOnce = true;
    constructor(rounds: number) {
        this.rounds = new Array<bowlingFrame>(rounds - 1);
        this.last = rounds;
    }


    public get gameOn(): boolean {
        return this.step < this.last;
    }

    throwBall() {
        if (this.gameOn) {
            if (!this.rounds[this.step]) {
                this.rounds[this.step] = new bowlingFrame();
            }
            const currentThrow = this.rounds[this.step];
            currentThrow.throwBall();

            // Allow additional step
            if(this.step === this.last - 1 && this.inTitledToAddtionalThrow && this.setThirdShotOnce){
                this.setThirdShotOnce = false;
                currentThrow.appliedThirdThrow();
            }
            // frame was closed
            if (currentThrow.frameHasClosed) {
                // last step only
                if(this.step === this.last - 1 && this.inTitledToAddtionalThrow){
                    const previousThrow = this.rounds[this.step - 1];
                   // sum up last result 
                    currentThrow.sumStep(previousThrow);
                    this.sumResult = currentThrow.accumaltiveScore;
                    this.step++;
                    return;
                }
                // go to the next frame
                /// elaps over first step and wether the frame have been close
                if (this.step > 0) {
                    const previousThrow = this.rounds[this.step - 1];

                    currentThrow.sumStep(previousThrow);
                    // return the bonus score and if among all it previous shots were spear or strike atleast once
                     const isInTitle = currentThrow.bonus(previousThrow);
                     this.sumResult = currentThrow.accumaltiveScore;
                     if(isInTitle){
                        this.inTitledToAddtionalThrow = true;
                     }

                } else {
                    // first step
                    currentThrow.accumaltiveScore = currentThrow.currentResult;
                    this.sumResult = currentThrow.currentResult;
                }

                this.step++;

            }


        }


    }



}