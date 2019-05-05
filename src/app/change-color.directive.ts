import { Directive, AfterViewInit, ElementRef } from '@angular/core';

/* marks a class as an Angular Directive (指示 / 命令) to attach custom behavior to elements in the DOM */
@Directive({
  /* applied on DOM elements where Directive will be implemented */
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  /* ElementRef: a wrapper around a native DOM element in a View */
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    /* 当前 Directive 通过 ElementRef 改变其绑定到的 DOM 元素的表现形式 */
    this.elementRef.nativeElement.style.color = 'purple';
  }

  change(changedColor: string) {
    this.elementRef.nativeElement.style.color = changedColor;
  }
}
