import { Component, OnInit } from '@angular/core';
import { ArticleData } from '../data/data';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = []
  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }

  createArticleHandler(article: Article) {
    const articleData = new ArticleData();
    articleData.createArticle(article)
    this.articles = articleData.getData();
  }
}
