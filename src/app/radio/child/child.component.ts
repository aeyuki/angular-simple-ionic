import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() sendChild: string;
  @Input('age') myAge: string;
  @Input() sendFn: any;
  childNames: string = 'myIsChild';
  userName: string = '定义用户名字';

  constructor() {}
  ngOnInit(): void {
    console.log('ngOnInit----------');
    console.log('sendChild: ' + this.sendChild);
    console.log('myAge:' + this.myAge);
    console.log('sendFn:' + this.sendFn);
  }

  tongBeiEvent($event: any) {
    alert($event);
    console.log('prinltToChildAComponent:' + $event);
  }
}
