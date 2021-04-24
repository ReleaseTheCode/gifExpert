import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');

const category = 'Hunter x';
describe('Test GifGrid component', () => {
    test('should render correctly', () => {
        useFetchGifs.mockReturnValue({ loading:true, gifs:[] });

        const wrapper = shallow(< GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(true);
    });
    
    test('should show items when pass category to useFetchGifs()', () => {
        const gifs = [
            { id:'asd', title:'placeholder image', url:'https://via.placeholder.com/150' },
            { id:'qwe', title:'placeholder image', url:'https://via.placeholder.com/150' }
        ];
        useFetchGifs.mockReturnValue({
            loading:false,
            gifs
        });

        const wrapper = shallow(< GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
        //parraf "Loading..." disappear
        expect( wrapper.find('p').exists() ).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length );
    })
    
})
