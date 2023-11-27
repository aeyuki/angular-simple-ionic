import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RadioPageComponent } from './radio-page.component';
import { ParentComponent } from '../radio/parent/parent.component';
import { ChildComponent } from '../radio/child/child.component';
import { ChildComponent2 } from '../radio/child/child2.component';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    //ChildComponent2,
    RouterModule.forChild([{ path: '', component: RadioPageComponent }]),
  ],
  declarations: [
    RadioPageComponent,
    ParentComponent,
    ChildComponent,
    ChildComponent2,
  ],
  exports: [
    RadioPageComponent,
    ParentComponent,
    ChildComponent,
    ChildComponent2,
  ],
})
export class RadioPageModule {}
