import { NgModule } from '@angular/core';
import { SiltFlowLibComponent } from './silt-flow-lib.component';
import { ConnectionsComponent } from './connections/connections.component';



@NgModule({
  declarations: [
    SiltFlowLibComponent,
    ConnectionsComponent
  ],
  imports: [
  ],
  exports: [
    SiltFlowLibComponent
  ]
})
export class SiltFlowLibModule { }
