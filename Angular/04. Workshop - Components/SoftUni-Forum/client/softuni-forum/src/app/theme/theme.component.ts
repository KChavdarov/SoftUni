import { Component, OnInit } from '@angular/core';
import { Theme } from '../shared/interfaces/theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
  providers: [ThemeService],
})
export class ThemeComponent implements OnInit {

  public themes!: Theme[]

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadThemes().subscribe(data => this.themes = data);
  }
}
