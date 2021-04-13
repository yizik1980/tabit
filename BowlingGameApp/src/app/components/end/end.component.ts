import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
  @Input()
  finalScore;
  constructor() { }

  ngOnInit(): void {
  }
  restart(){
    location.reload();
  }

}
