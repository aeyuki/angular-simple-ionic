import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example.component';
import { MissionControlComponent } from './service/missioncontrol.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from '../app/home/details/details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    IonicModule.forRoot(),
  ],
  declarations: [AppComponent, MissionControlComponent, ExampleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
