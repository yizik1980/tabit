import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrameBoardComponent } from './components/frame-board/frame-board.component';
import { FrameListComponent } from './components/frame-list/frame-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameBoardComponent,
    FrameListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
