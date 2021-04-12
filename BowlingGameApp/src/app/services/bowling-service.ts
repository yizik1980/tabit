import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {   Subject } from 'rxjs';
import bowlingFrame from '../model/bowlingFrame';


@Injectable({
  providedIn: 'root'
})
export class BowlingService {
  subjectTriggerThrow = new Subject<number>();
  subjectEndThrow = new Subject<{thrown:boolean, frameClosed:boolean }>();
  public rounds = new Array<bowlingFrame>(9);
  step = 0;
  sumResult = 0;
  last = 10;
  inTitledToAddtionalThrow = false;
  setThirdShotOnce = true;
  currentThrow: bowlingFrame;
  constructor() {
    this.last = 10;
  }


  public get gameOn(): boolean {
    return this.step < this.last;
  }

  throwBall(): number {
    var throwResult = 0;
    if (this.gameOn) {
      if (!this.rounds[this.step]) {
        this.rounds[this.step] = new bowlingFrame();
      }
      this.currentThrow = this.rounds[this.step];
     throwResult =  this.currentThrow.throwBall();
      this.subjectTriggerThrow.next(throwResult);
    }
    return throwResult;

  }
  prsentTheResultOnBoard() {
    // Allow additional step
    if (this.step === this.last - 1 && this.inTitledToAddtionalThrow && this.setThirdShotOnce) {
      this.setThirdShotOnce = false;
      this.currentThrow.appliedThirdThrow();
    }
    // frame was closed
    if (this.currentThrow.frameHasClosed) {
      // last step only
      if (this.step === this.last - 1 && this.inTitledToAddtionalThrow) {
        const previousThrow = this.rounds[this.step - 1];
        // sum up last result 
        this.currentThrow.sumStep(previousThrow);
        this.sumResult = this.currentThrow.accumaltiveScore;
        this.step++;
        return;
      }
      // go to the next frame
      /// elaps over first step and wether the frame have been close
      if (this.step > 0) {
        debugger;
        const previousThrow = this.rounds[this.step - 1];

        this.currentThrow.sumStep(previousThrow);
        // return the bonus score and if among all it previous shots were spear or strike atleast once
        const isInTitle = this.currentThrow.bonus(previousThrow);
        this.sumResult = this.currentThrow.accumaltiveScore;
        if (isInTitle) {
          this.inTitledToAddtionalThrow = true;
        }

      } else {
        // first step
        this.currentThrow.accumaltiveScore = this.currentThrow.currentResult;
        this.sumResult = this.currentThrow.currentResult;
      }

      this.step++;

    }
  }
  saveUserScore(){
    
  }
}
