import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Fundamentals';
  public isActive: boolean = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
