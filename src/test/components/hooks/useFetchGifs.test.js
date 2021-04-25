import { useFetchGifs } from "../../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'
describe('Test useFetchGifs hook', () => {
    const category = 'Hunter X';
    test('should return initial state', async() => {
        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs( category ) );
        const { gifs, loading } = result.current;
        
        await waitForNextUpdate();

        expect( gifs ).toEqual( [] );
        expect( loading ).toBe( true );
    });
    
    test('should return a gif array and the loading var false value', async() => {
        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs( category ) );
        
        await waitForNextUpdate();
        const { gifs, loading } = result.current;
        
        expect( gifs.length ).toBe( 8 );
        expect( loading ).toBe( false );
    });
    
    
});
