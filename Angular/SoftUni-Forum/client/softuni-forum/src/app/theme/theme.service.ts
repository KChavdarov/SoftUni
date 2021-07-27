import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Theme } from '../shared/interfaces/theme';

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<Theme[]>(environment.apiUrl + '/api/themes');
  }
}
