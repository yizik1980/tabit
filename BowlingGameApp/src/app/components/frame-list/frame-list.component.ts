import { Component, OnInit } from '@angular/core';
import bowlingTenRounds from 'src/app/model/bowlingTenRounds';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.css']
})
export class FrameListComponent implements OnInit {

  boards:bowlingTenRounds;
  constructor() { }

  ngOnInit(): void {
    this.boards = new bowlingTenRounds();
  }
  throwBall(){
    this.boards.throwBall();
  }

}
