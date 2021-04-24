import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Test AddCategory component' , () => {
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} />);
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />);
    });
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should trigger input onChange', () => {
        const input = wrapper.find('input');
        const value = 'hola'
        input.simulate('change', { target: { value } } )
    });

    test('should not trigger submit funcs setCategories,setInputValue', () => {
        const form = wrapper.find('form').simulate( 'submit', { preventDefault(){} } )
        
        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('should call setCategories and clear input', () => {
        const value = 'Hunter x'
        wrapper.find('input').simulate('change', { target: { value } } );
        wrapper.find('form').simulate( 'submit', { preventDefault(){} } );
        
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    
});
