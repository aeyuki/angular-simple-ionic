import { Component, inject } from '@angular/core';
import { AppService } from '../service/test.service';

import { HousingService } from './details/housing/housing.service';
import { HousingLocation } from './details/housing/housinglocation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  userNameIonic = '默认值!';
  homeTitile: String = '';
  action1: string = '';
  action2: string = '';

  //父组件往子组件传递数据
  dataFromFatcher: string = '父组件往子组件传递数据';

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.homeTitile = appService.homeTitile;
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  goToPage() {
    console.log('页面跳转！:' + this.action1);
  }
}
