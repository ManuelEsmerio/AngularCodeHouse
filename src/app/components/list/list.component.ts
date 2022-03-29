import { Component, OnInit } from '@angular/core';
import { Message } from '../../interfaces/message';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Message[] = [
    {
      img: 'https://www.freeiconspng.com/thumbs/error-icon/sign-red-error-icon-1.png',
      type:0,
      class: ['alert', 'alert-danger'],
      alt: 'Error',
      message: 'A simple danger alert—check it out!'
    },
    {
      img: 'https://www.freeiconspng.com/thumbs/warning-icon-png/sign-warning-icon-png-7.png',
      type:1,
      class: ['alert', 'alert-warning'],
      alt: 'Warning',
      message: 'A simple warning alert—check it out!'
    },
    {
      img: 'https://www.freeiconspng.com/uploads/fichier-info-icon-002-svg---wikip-dia-28.png',
      type:2,
      class: ['alert', 'alert-info'],
      alt: 'Info',
      message: 'A simple info alert—check it out!'
    },
    {
      img: 'https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png',
      type:3,
      class: ['alert', 'alert-success'],
      alt: 'Success',
      message: 'A simple success alert—check it out!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
