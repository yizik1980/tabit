import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FrameBoardComponent } from './components/frame-board/frame-board.component';
import { FrameListComponent } from './components/frame-list/frame-list.component';
import { PlayGroundComponent } from './components/play-ground/play-ground.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameBoardComponent,
    FrameListComponent,
    PlayGroundComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
