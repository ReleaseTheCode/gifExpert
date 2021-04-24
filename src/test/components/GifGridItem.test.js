import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test GifGridItem component',() => {
    let GifGridItemProp = {
        title:'placeholder image',
        url:'https://via.placeholder.com/150',
    }
    let wrapper = shallow(
        <GifGridItem { ...GifGridItemProp }/>
    );


    test('should render GifGridItem component like the snapshot', () => {
       expect( wrapper ).toMatchSnapshot();
    });

    test('should have a parraf with the title param', () => {
        const p = wrapper.find('p');
        expect( p.text() ).toBe( GifGridItemProp.title )
    })
    
    test('should have an image with the url and alt property from props', () => {
        const img = wrapper.find('img');
        //console.log(img.props().src);
        expect( img.props().src ).toBe( GifGridItemProp.url );
        expect( img.props().alt ).toBe( GifGridItemProp.title );
    })

    test('should have "animate__fadeIn" css class', () => {
        const div = wrapper.find('div');
        //console.log(div.props());
        expect( div.props().className.includes('animate__fadeIn') ).toBe( true ) 
    })
    
    
})