class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }
        if (this.creator === username) {
            throw new Error('You can\'t like your own story!');
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        }
        this._likes = this._likes.filter(a => a != username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let comment = this._comments.find(a => a.id === id);
        if (id === undefined || comment === undefined) {
            comment = {
                id: this._comments.length + 1,
                username,
                content,
                replies: [],
            };
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        }

        let reply = {
            id: `${comment.id}.${comment.replies.length + 1}`,
            username,
            content,
        };
        comment.replies.push(reply);
        return 'You replied successfully';
    }

    toString(sortingType) {
        const sortings = {
            asc(a, b) { return Number(a.id) - Number(b.id); },
            desc(a, b) { return Number(b.id) - Number(a.id); },
            username(a, b) { return a.username.localeCompare(b.username); },
        };

        let output = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, 'Comments:'];

        let sorted = this._comments.sort(sortings[sortingType]);

        sorted.forEach(comment => {
            comment.replies = comment.replies.sort(sortings[sortingType]);
        });

        sorted.reduce((result, comment) => {
            result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
            comment.replies.forEach(reply => result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`));
            return result;
        }, output);

        return output.join('\n');
    }
}

let art = new Story('My Story', 'Anny');
art.like('John');
console.log(art.likes);
art.dislike('John');
console.log(art.likes);
art.comment('Sammy', 'Some Content');
console.log(art.comment('Ammy', 'New Content'));
console.log(art.comment('Zane', 'Reply', 1));
art.comment('Jessy', 'Nice :)');
console.log(art.comment('SAmmy', 'Reply@', 1));
console.log();
console.log(art.toString('username'));
console.log();
art.like('Zane');
console.log(art.toString('desc'));