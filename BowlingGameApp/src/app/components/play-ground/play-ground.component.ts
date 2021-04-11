import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/internal/operators';
import bowlingFrame from 'src/app/model/bowlingFrame';
import { BowlingService } from 'src/app/services/bowling-service';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit, OnDestroy {
  pinHasFall = 0;
  thrown = false;
  subscriptionEnd = new Subscription();
  isNewFrame = true;
  @Output()
  emitFrame = new EventEmitter<bowlingFrame>()
  constructor(private bowling: BowlingService) { }
  ngOnDestroy(): void {
    this.subscriptionEnd.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionEnd = this.bowling.subjectEndThrow
      .pipe(tap(() => {
        this.pinHasFall = this.bowling.currentThrow.currentResult;
      }
      ))
      .pipe(delay(5000))
      .pipe(tap(() => {
        this.pinHasFall = this.bowling.currentThrow.frameHasClosed ? 0 : this.pinHasFall;
      }
      ))
      .subscribe(res => {
        this.thrown = false;
      });
  }
  throwBall() {
    this.pinHasFall += this.bowling.throwBall();
    
    this.thrown = true;
  }

}
