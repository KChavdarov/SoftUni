import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from './shared/interfaces/theme';

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<Theme[]>('http://localhost:3000/api/themes');
  }
}
