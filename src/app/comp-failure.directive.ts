import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective 
{

  constructor(private obj: ElementRef)
  {}
  @HostListener('mouseenter') onmouseentre()
  {
    this.obj.nativeElement.style.background = 'red';
  }
  @HostListener('mouseleave') onmouseleave(): void
  {
    this.obj.nativeElement.style.background = 'black';
  }

}
