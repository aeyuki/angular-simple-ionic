import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,

    RouterModule.forChild([
      { path: '', component: HomePageComponent },
      { path: 'details', component: DetailsComponent }, //这是tab中有多个子页面绑定在这里
      // { path: 'details/:id', component: DetailsComponent }, //这是tab中有多个子页面绑定在这里
    ]),
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}
