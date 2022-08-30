import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabuleiroComponent } from './components/tabuleiro/tabuleiro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {environment} from "../environments/environment";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ModalRoomComponent } from './components/modal-room/modal-room.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

const config: SocketIoConfig = {
  url: environment.socketUrl, // socket server url;
  options: {
    transports: ['websocket']
  }
}
@NgModule({
  declarations: [AppComponent, TabuleiroComponent, ModalRoomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    MatTooltipModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
