import App from '../app';

const app = new App();

describe('Simple Unit Test', () => {
    it('expects a simple average to be correct', () => {
        const average = app.average([1, 2, 3]);
        expect(average).toEqual(2);
    });
});
