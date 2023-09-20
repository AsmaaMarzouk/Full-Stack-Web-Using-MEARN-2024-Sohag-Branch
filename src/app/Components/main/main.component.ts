import { Component } from '@angular/core';
import { TrackData } from 'src/app/Models/track-data';
import { TrackInfo } from 'src/app/Models/track-info';

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

  // Day2
trackdata:TrackData=new TrackData("MEARN Track",44,["JS","Node js","Angular","React","Bootstrap"]);

// trac2:TrackData=new TrackData("MEARN Track",)
// trac3:TrackData=new TrackData("MEARN Track",)

// interface
// x:TrackInfo[]=[{},{}]
trackinfo:TrackInfo={trackName:"Frontend Track",trackHours:400,trackImage:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png",courses:["Flutter","Advanced JS","RWD"]}
}

