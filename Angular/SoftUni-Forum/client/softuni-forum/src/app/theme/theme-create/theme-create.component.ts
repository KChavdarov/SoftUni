import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-create',
  templateUrl: './theme-create.component.html',
  styleUrls: ['./theme-create.component.css']
})
export class ThemeCreateComponent {

  constructor(private themeService: ThemeService, private router: Router) {}

  createTheme(form: NgForm) {
    const { themeName, postText } = form.value;
    this.themeService.createTheme({ themeName, postText }).subscribe(
      () => this.router.navigate(['/themes'])
    );
  }
}
