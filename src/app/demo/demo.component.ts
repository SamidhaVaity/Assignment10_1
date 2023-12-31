import { Component } from '@angular/core';
import { CompFailureDirective } from '../comp-failure.directive';
import { CompSucessDirective } from '../comp-sucess.directive';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CompFailureDirective,CompSucessDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
