import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model.js';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private characters = 250;
  @Input() article!: Article;
  @Input() articleDesc!: string;
  descToShow = '';
  articleDescLen = 0;
  showReadMoreBtn = true;
  showHideBtn = false;
  imageIsShown = false;
  imageButtonTitle = 'Show Image';



  readMore(): void {
    this.articleDescLen += this.characters;
    this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    if (this.articleDesc.length > this.articleDescLen) {
      console.log(this.articleDesc.length);
      console.log(this.articleDescLen);
      console.log(this.descToShow);
    } else {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    }
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }
  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageIsShown ? 'Hide Image' : 'Show Image'
  }
}
