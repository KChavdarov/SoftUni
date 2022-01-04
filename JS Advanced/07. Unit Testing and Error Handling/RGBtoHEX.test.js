const rgbToHexColor = require('./RGBtoHEX');
const { expect } = require('chai');

describe('RGB to HEX color converter tests', () => {
    it('return black in hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('return white in hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('return red in hex', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });
    it('return green in hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });
    it('return blue in hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });
    it('out of range inputs (above)', () => {
        expect(rgbToHexColor(260, 260, 260)).to.be.undefined;
    });
    it('out of range inputs (below)', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });
    it('incorrect input types', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined;
    });
    it('one invalid parameter', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
    });
});