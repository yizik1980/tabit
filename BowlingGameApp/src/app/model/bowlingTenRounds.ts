import { BowlingResultType } from "./bowling-result-type.enum";
import bowlingFrame from "./bowlingFrame";

export default class bowlingTenRounds {
    rounds: Array<bowlingFrame>;
    step = 0;
    sumResult = 0;
    constructor() {
        this.rounds = new Array<bowlingFrame>(9);
        // for (let index = 0; index < 9; index++) {
        //   this.rounds[index] = new bowlingFrame();
        // });
    }


    public get gameOn(): boolean {
        return this.rounds.length < 10;
    }

    throwBall() {
        if (this.gameOn) {
            if (!this.rounds[this.step]) {
                this.rounds[this.step] = new bowlingFrame();
            }
            const currentThrow = this.rounds[this.step];
            currentThrow.throwBall();

            /// elaps over first step and wether the frame have been close
           
            var previousThrow;
            if (currentThrow.frameHasClosed) {
                // go to the next frame
                
                if(this.step > 0){
                    const previousThrow = this.rounds[this.step - 1];
                   
                    currentThrow.sumStep(previousThrow);
                    
                    this.sumResult =  currentThrow.bonus(previousThrow);
                    
                }else{
                    currentThrow.accumaltiveScore = currentThrow.currentResult;
                    this.sumResult = currentThrow.currentResult;
                }
                
                console.log(this.sumResult);
                this.step++;
                
            }
       
            
        }


    }



}