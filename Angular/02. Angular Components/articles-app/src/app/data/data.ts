import { Article } from '../models/article.model';
import { data } from './seed';

export class ArticleData {
    public data = data;
    getData() {
        return data.map(a => new Article(a))
    }
    createArticle(article: Article){
        console.log(data);
        data.push(article);
        console.log(data);
    }
}