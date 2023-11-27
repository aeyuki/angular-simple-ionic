import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SearchPageComponent }]),
  ],
  declarations: [SearchPageComponent],
  exports: [SearchPageComponent],
})
export class SearchPageModule {}
