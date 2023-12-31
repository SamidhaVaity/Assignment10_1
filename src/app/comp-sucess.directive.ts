import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSucess]',
  standalone: true
})
export class CompSucessDirective {

  constructor(private obj: ElementRef) 
  {}
  @HostListener('mouseenter') onmouseentre()
  {
    this.obj.nativeElement.style.background = 'green';
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.background = 'black';
  }

}
