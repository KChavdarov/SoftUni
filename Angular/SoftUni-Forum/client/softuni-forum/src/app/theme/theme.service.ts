import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../shared/interfaces/theme';

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) {}

  loadThemes() {
    return this.http.get<Theme[]>('/api/themes');
  }

  getThemeById(id: string) {
    return this.http.get<Theme>('/api/themes/' + id);
  }

  createTheme(data: { themeName: string, postText: string; }) {
    return this.http.post<Theme>('/api/themes/', data);
  }

  createPost(id: string, data: { postText: string; }) {
    return this.http.post<Theme>('/api/themes/' + id, data);
  }
}
