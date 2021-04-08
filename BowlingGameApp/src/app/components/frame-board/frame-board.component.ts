import { Component, OnInit, Input } from '@angular/core';
import bowlingFrame from 'src/app/model/bowlingFrame';

@Component({
  selector: 'app-frame-board',
  templateUrl: './frame-board.component.html',
  styleUrls: ['./frame-board.component.css']
})
export class FrameBoardComponent implements OnInit {
  @Input()
  board:bowlingFrame;
  
  constructor() { }

  ngOnInit(): void {
  }
 

}
