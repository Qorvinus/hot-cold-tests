import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from '../components/guess-list';

describe('<GuessList />', () => {
  const guesses = [1, 2, 3, 4];

  it('Renders without crashing', () => {
    shallow(<GuessList guesses={guesses} />);
  })

  it('Renders a list of guesses', () => {
    const wrapper = shallow(<GuessList guesses={guesses} />);
    const list = wrapper.find('li');
    expect(list.length).toEqual(guesses.length);
  })
})
