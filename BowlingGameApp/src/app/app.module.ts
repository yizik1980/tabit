import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FrameBoardComponent } from './components/frame-board/frame-board.component';
import { FrameListComponent } from './components/frame-list/frame-list.component';
import { PlayGroundComponent } from './components/play-ground/play-ground.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StartComponent } from './components/start/start.component';
import { EndComponent } from './components/end/end.component';
import { UserGridComponent } from './components/user-grid/user-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameBoardComponent,
    FrameListComponent,
    PlayGroundComponent,
    DialogComponent,
    StartComponent,
    EndComponent,
    UserGridComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
