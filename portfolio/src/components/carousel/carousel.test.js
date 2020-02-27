import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './carousel';

describe('<Carousel />', () => {
  test('renders', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toMatchSnapshot();
  });
});
