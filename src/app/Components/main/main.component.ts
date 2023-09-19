import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  // properties
  trackName: string = 'MEARN Track';
  userName: string = 'Ahmed';
  userID: number = 2;
  // methods
  sayHello(): string {
    return `Hello ${this.trackName}`;
  }
}
