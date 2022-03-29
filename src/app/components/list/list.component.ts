import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../interfaces/message';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list!: Message[];

  constructor() { }

  ngOnInit(): void {
  }

}
