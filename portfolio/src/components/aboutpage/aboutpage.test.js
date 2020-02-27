import React from 'react';
import { shallow } from 'enzyme';
import Aboutpage from './aboutpage';

describe('<Aboutpage />', () => {
  test('renders', () => {
    const wrapper = shallow(<Aboutpage />);
    expect(wrapper).toMatchSnapshot();
  });
});
