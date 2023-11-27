import { Injectable } from'@angular/core';
​
@Injectable({
  providedIn: 'root',
})
export class AppService { 
  homeTitile:String="我是服务,通过类中构造方式注入数据";
}