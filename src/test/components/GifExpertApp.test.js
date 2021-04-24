import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/react'
import { GifExpertApp } from '../../components/GifExpertApp'

describe('Test GifExpertApp component', () => {
    
    test('should render correctly', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('should render correctly', () => {
        const defaultCategories = ['Hunter X','Simpson'];
        const wrapper = shallow(<GifExpertApp defaultCategories={defaultCategories}/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( defaultCategories.length );
    });
    
});
