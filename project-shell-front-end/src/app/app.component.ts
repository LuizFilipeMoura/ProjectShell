import {Component, OnInit} from '@angular/core';
import {SocketService} from "./services/socket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private socketService: SocketService) {
  }
  ngOnInit() {
    this.socketService.conectar()
  }

  title = 'project-shell-front-end';
}
