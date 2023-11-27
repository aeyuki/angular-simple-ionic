import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-in-out',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class ChildComponent2 implements OnInit {
  @Input() in: any = ''; //从父组件传入参数进来
  @Output() out = new EventEmitter(); //从子组件传出参数到父组件（采用事件的方式，类似Vue的emit）
  ngOnInit(): void {}

  constructor() {}
}
