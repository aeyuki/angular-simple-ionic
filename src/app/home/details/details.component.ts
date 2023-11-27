import { Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from './housing/housing.service';
import { HousingLocation } from './housing/housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `

    <section class="listing">
     
      <h2 class="listing-heading">{{ housingLocation }}</h2>
      <br>
      <h1>{{childToFatcher}}</h1>
    </section>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() housingLocation: HousingLocation | undefined;
  @Input() childToFatcher: any;
  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
    console.log('housingLocationId父子传入值为：' + housingLocationId);
  }
}
