import { expect } from 'chai';
import { randomStringThing } from './random.js';


describe('Test the Random Thing Function', function () {
    // Test if the function returns a string with only alphanumeric characters
    it('returns a string with only alphanumeric characters', function () {
        const result = randomStringThing();
        const regex = /^[a-z0-9]+$/i;
        expect(regex.test(result)).to.be.true;
        console.log("Generated String:", result);
    });

    // Test if calling the function twice returns two different strings
    it('returns two different strings when called twice', function () {
        const result1 = randomStringThing();
        const result2 = randomStringThing();
        expect(result1).to.not.equal(result2);
        console.log("Generated String result 1:", result1);
        console.log("Generated String result 2:", result2);
    });

    // Test if the function returns a string of expected maximum length
    it('returns a string of expected maximum length', function () {
        const result = randomStringThing();
        const maxLength = 11; // Max typical length observed from the function
        expect(result.length).to.be.at.most(maxLength);
        console.log("Generated String:", result.length);
    });

});
