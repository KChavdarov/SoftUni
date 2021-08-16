import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Theme } from 'src/app/shared/interfaces/theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css']
})
export class ThemeItemComponent implements OnInit {
  theme!: Theme;
  themeId!: string;

  constructor(private themeService: ThemeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.themeId = this.route.snapshot.params.themeId;
    this.themeService.getThemeById(this.themeId).subscribe(theme => {
      if (theme) { this.theme = theme; }
      else {
        this.router.navigate(['/404']);
      };
    }, err => { this.router.navigate(['/404']); });
  }

  createPost(form: NgForm) {
    const { postText } = form.value;
    this.themeService.createPost(this.themeId, { postText }).subscribe(
      () => {
        form.reset();
        this.themeService.getThemeById(this.themeId).subscribe(theme => { this.theme = theme; });
      }
    );
  }
}
