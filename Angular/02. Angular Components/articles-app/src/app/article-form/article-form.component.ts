import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {
  @Output() createNewArticle = new EventEmitter<Article>()

  createArticle(
    title: HTMLInputElement,
    description: HTMLInputElement,
    author: HTMLInputElement,
    imageUrl: HTMLInputElement
  ) {

    const articleData = {
      title: title.value,
      description: description.value,
      author: author.value,
      imageUrl: imageUrl.value,
    }

    const article = new Article(articleData);
    this.createNewArticle.emit(article);
    title.value = '';
    description.value = '';
    author.value = '';
    imageUrl.value = '';
  } 
}
