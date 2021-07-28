import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'src/app/shared/interfaces/theme';
import { ThemeService } from '../theme.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css']
})
export class ThemeItemComponent implements OnInit {
  theme!: Theme;

  constructor(private themeService: ThemeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const themeId = this.route.snapshot.params.themeId;

    this.themeService.getThemeById(themeId).subscribe(theme => { this.theme = theme; }, err => { this.router.navigate(['/404']); });

  }
}
