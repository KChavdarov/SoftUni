import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/shared/interfaces/theme';
import { UserService } from 'src/app/user/user.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css'],
})
export class ThemeListComponent implements OnInit {
  public themes!: Theme[];

  constructor(private themeService: ThemeService, private userService: UserService) {}

  get isLogged() {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.themeService.loadThemes().subscribe(data => this.themes = data);
  }
}
