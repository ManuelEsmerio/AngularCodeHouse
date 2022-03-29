import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../interfaces/message';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() props!: Message;

  constructor() {
  }

  ngOnInit(): void {
  }

}
