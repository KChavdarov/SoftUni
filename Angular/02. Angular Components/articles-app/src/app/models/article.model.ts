export class Article {
    public title: string
    public description: string
    public author: string
    public imageUrl: string

    constructor(data: {
        title: string,
        description: string,
        author: string,
        imageUrl: string
    }) {
        this.title = data.title;
        this.description = data.description;
        this.author = data.author;
        this.imageUrl = data.imageUrl;
    }
}