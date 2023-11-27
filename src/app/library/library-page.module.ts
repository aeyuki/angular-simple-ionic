import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LibraryPageComponent } from './library-page.component';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LibraryPageComponent }]),
  ],
  declarations: [LibraryPageComponent],
  exports: [LibraryPageComponent],
})
export class LibraryPageModule {}
