import { Component, OnDestroy, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { delay, exhaustMap, take } from 'rxjs/internal/operators';
import bowlingTenRounds from 'src/app/model/bowlingTenRounds';
import { DialogData } from 'src/app/model/dialog-data';
import { BowlingService } from 'src/app/services/bowling-service';
import { DataUserService } from 'src/app/services/data-user.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.css']
})
export class FrameListComponent implements OnInit, OnDestroy {

  //boards: bowlingTenRounds;
  throwSub = new Subscription();
  constructor(public bowling: BowlingService,
     private userService:DataUserService,
     private dialog:DialogService) { }
  ngOnDestroy(): void {
    this.throwSub.unsubscribe();
  }

  ngOnInit(): void {

    this.bowling.subjectTriggerThrow
       .pipe(delay(8000))
      .subscribe(result => {
        this.bowling.prsentTheResultOnBoard();
        this.bowling.subjectEndThrow.next();
      });
      this.bowling.EndGame.subscribe(user=>{

        this.userService.saveUserData(user)
        .subscribe(result=>{
          console.log(result);
         const dialogInfo =  new DialogData({ title: 'List of Records', componentName: 'end', text: this.bowling.sumResult });
         this.dialog.subjectType.next(dialogInfo);
          // const dialog = new DialogData();
          // this.dialog.subjectType.next(dialog);
        },
        err=>{
          console.log(err)
        }
        );
      })
  }


}
