import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ImgStyle]',
})
export class ImgStyleDirective implements OnChanges {
  // property decorator
  @Input() property1: string = '60px';
// @Input() color1:string = 'blue';
  @Input('ImgStyle') property2: string = '10px';
  // document.getElement
  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.border='3px solid red';
    // this.elementRef.nativeElement.style.borderRadius = `${this.property2}`;
  }
  ngOnChanges(): void {
    this.elementRef.nativeElement.style.borderRadius = `${this.property2}`;

  }

  // method decorator
  @HostListener('mouseover') func1() {
    // this.elementRef.nativeElement.style.border='4px dashed blue';
    this.elementRef.nativeElement.style.borderRadius = `${this.property1}`;
    // this.elementRef.nativeElement.style.border = `3px dotted ${this.color1}`;
    this.elementRef.nativeElement.style.opacity ='.8'
  }
  @HostListener('mouseout') func2() {
    // this.elementRef.nativeElement.style.border='3px solid red';
    this.elementRef.nativeElement.style.borderRadius = `${this.property2}`;
    // this.elementRef.nativeElement.style.border='3px solid red';

    this.elementRef.nativeElement.style.opacity ='1'

  }
}
