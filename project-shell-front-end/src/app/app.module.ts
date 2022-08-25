import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabuleiroComponent } from './components/tabuleiro/tabuleiro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {environment} from "../environments/environment";

const config: SocketIoConfig = {
  url: environment.socketUrl, // socket server url;
  options: {
    transports: ['websocket']
  }
}
@NgModule({
  declarations: [AppComponent, TabuleiroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
