function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            const rating = this.likes - this.dislikes;
            return `${super.toString()}\nRating: ${rating}${this.comments.length > 0 ? `\nComments:\n${this.comments.map(a => ' * ' + a).join('\n')}` : ''}`;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            return `${super.toString()}\nViews: ${this.views}`;
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}