import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/shared/interfaces/theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css'],
  providers: [ThemeService],
})
export class ThemeListComponent implements OnInit {
  public themes!: Theme[];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.loadThemes().subscribe(data => this.themes = data);
  }
}
