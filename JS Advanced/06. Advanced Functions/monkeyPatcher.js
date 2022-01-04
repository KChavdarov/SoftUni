function monkey(action) {
    let actions = {
        upvote,
        downvote,
        score,
    };

    return actions[action].call(this);

    function upvote() {
        this.upvotes += 1;
    }

    function downvote() {
        this.downvotes += 1;
    }

    function score() {
        let tally = this.upvotes - this.downvotes;
        let total = this.upvotes + this.downvotes;
        let rating = 'new';
        if (total < 10) {
            rating = 'new';
        } else if ((this.upvotes / total) > 0.66) {
            rating = 'hot';
        } else if (tally < 0) {
            rating = 'unpopular';
        } else if (this.upvotes > 100 || this.downvotes > 100) {
            rating = 'controversial';
        }
        let obfuscator = Math.ceil(Math.max(this.upvotes, this.downvotes)*0.25);
        let upvotes = this.upvotes;
        let downvotes = this.downvotes;
        if (total > 50) {
            upvotes += obfuscator;
            downvotes += obfuscator;
        }
        return [upvotes, downvotes, tally, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
monkey.call(post, 'upvote');
monkey.call(post, 'downvote');
let score = monkey.call(post, 'score');
console.log(score);
