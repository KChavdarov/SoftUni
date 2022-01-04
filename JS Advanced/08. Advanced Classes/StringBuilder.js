class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') { throw new TypeError('Argument must be а string'); };
    }

    toString() {
        return this._stringArray.join('');
    }
}

const { expect } = require('chai');

describe('test for StringBuilder class', () => {
    describe('constructor', () => {
        it('constructor empty', () => {
            const instance = new StringBuilder();
            expect(instance).to.haveOwnProperty('_stringArray');
            expect(instance._stringArray).to.deep.equal([]);
            expect(instance._stringArray).to.be.empty;
            const instance2 = new StringBuilder(undefined);
            expect(instance2._stringArray).to.deep.equal([]);
        });
        it('constructor string', () => {
            const instance = new StringBuilder('abc');
            expect(instance._stringArray).to.deep.equal(['a', 'b', 'c']);
            const instance2 = new StringBuilder('');
            expect(instance2._stringArray).to.deep.equal([]);
        });
        it('constructor other', () => {
            expect(() => { const instance = new StringBuilder(1); }).to.throw('Argument must be а string');
            expect(() => { const instance = new StringBuilder([]); }).to.throw('Argument must be а string');
            expect(() => { const instance = new StringBuilder({}); }).to.throw('Argument must be а string');
            expect(() => { const instance = new StringBuilder(true); }).to.throw('Argument must be а string');
        });
    });

    describe('Static verify params', () => {
        it('static', () => {
            expect(() => { StringBuilder._vrfyParam(1); }).to.throw('Argument must be а string');
            expect(() => { StringBuilder._vrfyParam(0); }).to.throw('Argument must be а string');
            expect(() => { StringBuilder._vrfyParam([]); }).to.throw('Argument must be а string');
            expect(() => { StringBuilder._vrfyParam(undefined); }).to.throw('Argument must be а string');
            expect(() => { StringBuilder._vrfyParam({ a: 1 }); }).to.throw('Argument must be а string');
            expect(() => { StringBuilder._vrfyParam(null); }).to.throw('Argument must be а string');
            expect(() => { StringBuilder._vrfyParam('a'); }).not.to.throw();
        });
    });

    describe('other methods', () => {
        let instance = null;
        beforeEach(() => {
            instance = new StringBuilder('test');
        });
        describe('append', () => {
            it('append correct', () => {
                instance.append('abc');
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 't', 'a', 'b', 'c']);
            });
            it('append correct', () => {
                instance.append('a');
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 't', 'a']);
            });
            it('append empty', () => {
                instance.append('');
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 't']);
            });
            it('append incorrect', () => {
                expect(() => { instance.append(1); }).to.throw('Argument must be а string');
            });
            it('append incorrect', () => {
                expect(() => { instance.append([]); }).to.throw('Argument must be а string');
            });
            it('append incorrect', () => {
                expect(() => { instance.append(undefined); }).to.throw('Argument must be а string');
            });
        });

        describe('prepend', () => {
            it('prepend correct', () => {
                instance.prepend('a');
                expect(instance._stringArray).to.deep.equal(['a', 't', 'e', 's', 't']);
            });
            it('prepend correct', () => {
                instance.prepend('abc');
                expect(instance._stringArray).to.deep.equal(['a', 'b', 'c', 't', 'e', 's', 't']);
            });
            it('prepend empty', () => {
                instance.prepend('');
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 't']);
            });
            it('prepend incorrect', () => {
                expect(() => { instance.prepend(1); }).to.throw('Argument must be а string');
            });
            it('prepend incorrect', () => {
                expect(() => { instance.prepend([]); }).to.throw('Argument must be а string');
            });
            it('prepend incorrect', () => {
                expect(() => { instance.prepend(undefined); }).to.throw('Argument must be а string');
            });
        });

        describe('insertAt', () => {
            it('insertAt correct', () => {
                instance.insertAt('a', 0);
                expect(instance._stringArray).to.deep.equal(['a', 't', 'e', 's', 't']);
            });
            it('insertAt correct', () => {
                instance.insertAt('ab', 0);
                expect(instance._stringArray).to.deep.equal(['a', 'b', 't', 'e', 's', 't']);
            });
            it('insertAt empty', () => {
                instance.insertAt('', 2);
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 't']);
            });
            it('insertAt negative index', () => {
                instance.insertAt('a', -1);
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 'a', 't']);
            });
            it('insertAt float index', () => {
                instance.insertAt('a', 3.5);
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 'a', 't']);
            });
            it('insertAt incorrect index', () => {
                instance.insertAt('a', 'a');
                expect(instance._stringArray).to.deep.equal(['a', 't', 'e', 's', 't']);
            });
            it('insertAt incorrect', () => {
                expect(() => { instance.insertAt(1); }).to.throw('Argument must be а string');
            });
            it('insertAt incorrect', () => {
                expect(() => { instance.insertAt(undefined); }).to.throw('Argument must be а string');
            });
        });

        describe('remove', () => {
            it('remove correct', () => {
                instance.remove(0, 2);
                expect(instance._stringArray).to.deep.equal(['s', 't']);
            });
            it('remove correct', () => {
                instance.remove(1, 3);
                expect(instance._stringArray).to.deep.equal(['t']);
            });
            it('remove empty', () => {
                instance.remove(0, 0);
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 't']);
            });
            it('remove negative index', () => {
                instance.remove(-1, 0);
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 't']);
            });
            it('remove negative index', () => {
                instance.remove(1.5, 1);
                expect(instance._stringArray).to.deep.equal(['t', 's', 't']);
            });
            it('remove negative length', () => {
                instance.remove(2, -1);
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 't']);
            });
            it('remove float length', () => {
                instance.remove(0, 1.5);
                expect(instance._stringArray).to.deep.equal(['e', 's', 't']);
            });
            it('remove incorrect index', () => {
                instance.remove('a', 'a');
                expect(instance._stringArray).to.deep.equal(['t', 'e', 's', 't']);
            });
        });

        describe('toString', () => {
            it('toString correct', () => {
                expect(instance.toString()).to.equal('test');
                instance._stringArray = [];
                expect(instance.toString()).to.equal('');
            });
        });
    });
});