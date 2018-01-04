import { Component } from '@angular/core';
import { EventService } from 'meepo-event';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public event: EventService
  ) {
    const now = new Date();
    const version = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()).getTime();
    this.event.checkVersion(version);
  }
}
