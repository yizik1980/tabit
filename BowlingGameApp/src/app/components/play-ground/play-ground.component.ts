import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/internal/operators';
import bowlingFrame from 'src/app/model/bowlingFrame';
import { DialogData } from 'src/app/model/dialog-data';
import UserScore from 'src/app/model/UserScore';
import { BowlingService } from 'src/app/services/bowling-service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit, OnDestroy {
  pinHasFall = 0;
  thrown = false;
  subscriptionEnd = new Subscription();
  subscriptionGameEnd = new Subscription();
  isNewFrame = true;
  dialogInfo: DialogData;
  @Output()
  emitFrame = new EventEmitter<bowlingFrame>()
  
  constructor(private bowling: BowlingService, private dialog: DialogService) { }
  ngOnDestroy(): void {
    this.subscriptionEnd.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionEnd =
      this.bowling.subjectEndThrow
        .pipe(tap(() => {
          this.pinHasFall = this.bowling.currentThrow.currentResult;
        }
        ))
        .pipe(delay(500))
        .pipe(tap(() => {
          this.pinHasFall = this.bowling.currentThrow.frameHasClosed ? 0 : this.pinHasFall;
        }
        ))
        .subscribe(res => {
          this.thrown = false;
        });

    this.dialogInfo = new DialogData({ title: 'Enter your name:', placeHolder: 'here', componentName: 'start' });
    this.dialogInfo.callBackDialog = ($event) => {
      if ($event && $event.length > 2) {
        this.dialogInfo.close();
        this.bowling.currentUser = new UserScore($event);
      } else {
        this.dialogInfo.title = 'Without A name No game! two letter at least';
      }
    };
    
    // this.bowling.EndGame.subscribe(res => {
    //   this.dialogInfo = new DialogData({ title: 'List of Records', componentName: 'end', text: this.bowling.sumResult });
    //   this.dialog.subjectType.next(this.dialogInfo);
    // });


    /// show first popup
    this.dialog.subjectType.next(this.dialogInfo);
  }
  throwBall() {
    this.pinHasFall += this.bowling.throwBall();

    this.thrown = true;
  }
  
}
