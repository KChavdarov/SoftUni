const { expect } = require('chai');
const ChristmasMovies = require('./02. Christmas Movies_Resources');

describe('test for XmasMovies class', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = new ChristmasMovies();
    });
    describe('class instantiation', () => {
        it('movieCollection', () => {
            expect(instance).haveOwnProperty('movieCollection');
            expect(instance.movieCollection).to.deep.equal([]);
        });
        it('actors', () => {
            expect(instance).haveOwnProperty('actors');
            expect(instance.actors).to.deep.equal([]);
        });
        it('watched', () => {
            expect(instance).haveOwnProperty('watched');
            expect(instance.watched).to.deep.equal({});
        });
    });
    describe('buyMovie', () => {
        it('happy flow', () => {
            expect(instance.buyMovie('testMovie', ['testActor1', 'testActor2', 'testActor3'])).equal('You just got testMovie to your collection in which testActor1, testActor2, testActor3 are taking part!');
        });
        it('repeating actors', () => {
            expect(instance.buyMovie('testMovie', ['testActor1', 'testActor1', 'testActor1'])).equal('You just got testMovie to your collection in which testActor1 are taking part!');
        });
        it('repeatingMovie', () => {
            expect(() => {
                instance.buyMovie('testMovie', ['testActor1', 'testActor2', 'testActor3']);
                instance.buyMovie('testMovie', ['testActor1', 'testActor2', 'testActor3']);
            }).throw('You already own testMovie in your collection!');
        });
    });
    describe('discardMovie', () => {
        it('happy flow', () => {
            instance.buyMovie('testMovie', ['testActor1', 'testActor2', 'testActor3']);
            instance.watchMovie('testMovie');
            expect(instance.discardMovie('testMovie')).equal('You just threw away testMovie!');
        });
        it('not watched', () => {
            instance.buyMovie('testMovie', ['testActor1', 'testActor2', 'testActor3']);
            expect(() => { instance.discardMovie('testMovie'); }).throw('testMovie is not watched!');
        });
        it('not bought', () => {
            expect(() => { instance.discardMovie('testMovie'); }).throw('testMovie is not at your collection!');
        });
    });
    describe('watchMovie', () => {
        it('happy flow', () => {
            instance.buyMovie('testMovie', ['testActor1', 'testActor2', 'testActor3']);
            expect(() => { instance.watchMovie('testMovie'); }).not.throw();
            expect(instance.watched.testMovie).equal(1);
            instance.watchMovie('testMovie');
            expect(instance.watched.testMovie).equal(2);
        });
        it('empty collection', () => {
            expect(() => { instance.watchMovie('testMovie'); }).throw('No such movie in your collection!');
            expect(() => { instance.watchMovie(); }).throw('No such movie in your collection!');
        });
    });
    describe('favouriteMovie', () => {
        it('empty watchlist', () => {
            expect(() => {
                instance.favouriteMovie();
            }).throw('You have not watched a movie yet this year!');
        });
        it('happy flow', () => {
            instance.buyMovie('testMovie', ['testActor1', 'testActor2', 'testActor3']);
            instance.watchMovie('testMovie');
            expect(instance.favouriteMovie()).equal('Your favourite movie is testMovie and you have watched it 1 times!');
            instance.buyMovie('testMovie2', ['testActor3', 'testActor4', 'testActor5']);
            instance.watchMovie('testMovie2');
            expect(instance.favouriteMovie()).equal('Your favourite movie is testMovie and you have watched it 1 times!');
            instance.watchMovie('testMovie2');
            expect(instance.favouriteMovie()).equal('Your favourite movie is testMovie2 and you have watched it 2 times!');
        });
    });
    describe('mostStarredActor', () => {
        it('happy flow', () => {
            instance.buyMovie('testMovie', ['testActor1', 'testActor2', 'testActor3']);
            instance.buyMovie('testMovie2', ['testActor4', 'testActor5', 'testActor6']);
            expect(instance.mostStarredActor()).equal('The most starred actor is testActor1 and starred in 1 movies!');
            instance.buyMovie('testMovie3', ['testActor1', 'testActor7', 'testActor8']);
            expect(instance.mostStarredActor()).equal('The most starred actor is testActor1 and starred in 2 movies!');
        });
        it('empty collection', () => {
            expect(() => {
                instance.mostStarredActor();
            }).throw('You have not watched a movie yet this year!');
        });
    });
});