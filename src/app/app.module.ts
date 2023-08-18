import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { SiltFlowLibModule } from 'silt-flow-lib';
import { ConnectionsModule } from '@silt-flow/connections';
import { TasksModule } from '@silt-flow/tasks';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConnectionsModule,
    TasksModule
    // SiltFlowLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
