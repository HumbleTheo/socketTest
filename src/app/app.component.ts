import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private socket: Socket) {
    socket.on('message', (sms: string) => {
      this.title = sms;
    });
  }
  title = 'socketTest';
}
