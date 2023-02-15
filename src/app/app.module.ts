import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule } from 'ngx-socket-io';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot({
      url: 'http://localhost:3190',
      options: {
        transports: ['websocket'],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
