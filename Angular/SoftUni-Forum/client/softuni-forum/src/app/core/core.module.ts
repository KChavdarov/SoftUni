import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostService } from '../post.service';
import { RouterModule } from '@angular/router';
import { SessionStorage } from './injection-tokens';
import { AuthActivate } from './guards/auth.activate';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    PostService,
    AuthActivate,
    {
      provide: SessionStorage,
      useFactory: (platformId: Object) => {
        if (isPlatformBrowser(platformId)) {
          return window.sessionStorage;
        }
        if (isPlatformServer(platformId)) {
          return class implements Storage {
            private data: Record<string, string> = {};
            length = 0;

            clear(): void {
              this.data = {};
            }
            getItem(key: string): string | null {
              return this.data[key];
            }
            key(index: number): string | null {
              throw new Error('Method not implemented.');
            }
            removeItem(key: string): void {
              const { [key]: removedItem, ...others } = this.data;
              this.data = others;
            }
            setItem(key: string, value: string): void {
              this.data[key] = value;
            }
          };
        }
        throw new Error('Not implemented.');
      },
      deps: [PLATFORM_ID]
    },
  ]
})
export class CoreModule {}