import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { delay, exhaustMap, take } from 'rxjs/internal/operators';
import bowlingTenRounds from 'src/app/model/bowlingTenRounds';
import { BowlingService } from 'src/app/services/bowling-service';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.css']
})
export class FrameListComponent implements OnInit {

  //boards: bowlingTenRounds;
  constructor(public bowling: BowlingService) { }

  ngOnInit(): void {

    this.bowling.subjectTriggerThrow
       .pipe(delay(8000))
      // .pipe(exhaustMap(ev => {
      //   console.timeEnd()
      //   return delay(2000);
      // }))
      .subscribe(result => {
     
        this.bowling.prsentTheResultOnBoard();
        this.bowling.subjectEndThrow.next();
      });
  }


}
