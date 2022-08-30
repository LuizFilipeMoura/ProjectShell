import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-room',
  templateUrl: './modal-room.component.html',
  styleUrls: ['./modal-room.component.css'],
})
export class ModalRoomComponent implements OnInit {
  room: string;

  constructor(
    public dialogRef: MatDialogRef<ModalRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('aqui?')
  }
}
