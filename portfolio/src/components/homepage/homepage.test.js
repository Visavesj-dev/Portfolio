import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './homepage';

describe('<Homepage />', () => {
  test('renders', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper).toMatchSnapshot();
  });
});
