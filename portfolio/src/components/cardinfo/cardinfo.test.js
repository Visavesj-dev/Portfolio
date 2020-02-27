import React from 'react';
import { shallow } from 'enzyme';
import Cardinfo from './cardinfo';

describe('<Cardinfo />', () => {
  test('renders', () => {
    const wrapper = shallow(<Cardinfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
