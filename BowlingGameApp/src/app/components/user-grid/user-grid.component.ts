import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import UserScore from 'src/app/model/UserScore';
import { DataUserService } from 'src/app/services/data-user.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {

  usersData$: Observable<UserScore[]>;
  constructor(private userDataInfo:DataUserService) {
   
   }
  ngOnInit(): void {
    this.usersData$ = this.userDataInfo.getUser();
  }

}
