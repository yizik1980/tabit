import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Input()
  name:string;
  @Output()
  start = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  startGame(){
    this.start.next(this.name)
  }
}
