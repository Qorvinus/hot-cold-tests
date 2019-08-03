import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessCount from '../components/guess-count';

describe('<GuessCount />', () => {

  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Renders the amount of guesses', () => {
    const guessCount = 11;
    const wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`);
  });
});
