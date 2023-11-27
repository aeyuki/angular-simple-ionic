import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  VarFathceName: string = '定义一个父类信息给子类使用';

  constructor() {}
  ngOnInit(): void {}
  tt() {
    console.log('tt');
  }

  out($event: any) {
    alert($event);

    console.log('prinltToParentComponent:' + $event);
  }
}
