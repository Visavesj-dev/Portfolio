import React from 'react';
import { shallow } from 'enzyme';
import Contactpage from './contactpage';

describe('<Contactpage />', () => {
  test('renders', () => {
    const wrapper = shallow(<Contactpage />);
    expect(wrapper).toMatchSnapshot();
  });
});
