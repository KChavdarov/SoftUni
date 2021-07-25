import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/User.js';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user!: User

  constructor() { }

  ngOnInit(): void {
  }
}
