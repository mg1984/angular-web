import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Direktiven-Demo';
  showDetails = true;
  topics = ['*ngIf (Strukturdirektive)', '*ngFor (Strukturdirektive)', 'appHighlight (Attributdirektive)'];

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
