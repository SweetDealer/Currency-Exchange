import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
    it('should return proper value when good input', () => {
        expect(convertPLNToUSD(1)).toBe('$0.29');
        expect(convertPLNToUSD(2)).toBe('$0.57');
        expect(convertPLNToUSD(20)).toBe('$5.71');
        expect(convertPLNToUSD(12)).toBe('$3.43');
    });
    it('should return NaN when input is text', () => {
        expect(convertPLNToUSD('string')).ToBeNaN;
        expect(convertPLNToUSD('2')).ToBeNaN;
        expect(convertPLNToUSD('-20')).ToBeNaN;
    });
    it('should return NaN when input is empty', () => {
        expect(convertPLNToUSD()).ToBeNaN;
        expect(convertPLNToUSD(NaN)).ToBeNaN;
        expect(convertPLNToUSD(undefined)).ToBeNaN;
    });
    it('should return "Error" when input is different than number and string', () => {
        expect(convertPLNToUSD({})).ToBeNaN;
        expect(convertPLNToUSD([])).ToBeNaN;
        expect(convertPLNToUSD(null)).ToBeNaN;
        expect(convertPLNToUSD(function(){})).ToBeNaN;
    });
    it('should return zero when input is lower than zero', () => {
        expect(convertPLNToUSD(0)).toBe('$0.00');
        expect(convertPLNToUSD(-2)).toBe('$0.00');
        expect(convertPLNToUSD(-500)).toBe('$0.00');
    });
});