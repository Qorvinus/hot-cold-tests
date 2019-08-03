import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from '../components/status-section';

describe('<StatusSection />', () => {

  const guesses = [1, 2, 3, 4];

  it('Renders without crashing', () => {
    shallow(<StatusSection guesses={guesses} />);
  })
  it('Renders components', () => {
    const wrapper = shallow(<StatusSection guesses={guesses} />);
    expect(wrapper.find('section')).toHaveLength(1);
    expect(wrapper.find('*')).toHaveLength(4);
    //can save the above .find info into a variable to be manipulated.
    expect(wrapper)
  })
})
