import { Component } from '@angular/core';
import { AppService } from '../service/test.service';

@Component({
  selector: 'app-radio-page',
  templateUrl: './radio-page.component.html',
})
export class RadioPageComponent {
  userNameIonic: string = '';
  count: number = 0;
  viewFlag: boolean = true;
  radioTitle: String = '';

  todoList = ['开会', '上课', '培训', '吃饭'];

  constructor(private appService: AppService) {
    this.radioTitle = appService.homeTitile;
  }
  //通过游标指定删除数组
  doDelete(index) {
    this.todoList.splice(index, 1);
  }

  radioOnClick() {
    this.userNameIonic = '点击后生成新内容!';
    this.count = this.count + 1;
    this.dividend();
    console.log('Button clicked! and cout:' + this.count);
  }
  dividend() {
    if (this.count % 2) {
      this.clearData(false);
      console.log('余尽了:' + this.viewFlag);
    } else {
      this.clearData(true);
      console.log('没余尽了:' + this.viewFlag);
    }
  }
  clearData(flag: boolean) {
    this.viewFlag = flag;
  }
}
