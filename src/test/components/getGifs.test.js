import { getGif } from '../../helpers/getGifs';

describe('Test getGifs Fetch function', () => {
    test('should get 8 gifs from api', async() => {
        const gifs = await getGif('Hunter x');
        expect(gifs.length).toBe(8);
    });

    test('should get 0 gifs from api if prop category is "" ', async() => {
        const { length:gifsLength } = await getGif('');
        expect(gifsLength).toBe(0);
    });
});
