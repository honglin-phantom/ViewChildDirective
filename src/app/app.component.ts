import { Component, ViewChild } from '@angular/core';
import { ChangeColorDirective } from './change-color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* 通过 @ViewChild 创建 ChangeColorDirective 实例并访问其公共方法和域 */
  @ViewChild(ChangeColorDirective)
  private changeColorDirective: ChangeColorDirective;

  title = 'View Chil Ddirective';

  changeColorClick() {
    this.changeColorDirective.change('green');
  }
}
