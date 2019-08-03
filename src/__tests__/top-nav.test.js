import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from '../components/top-nav';

describe('<TopNav />', () => {
  const callback = jest.fn();

  it('Renders without crashing', () => {
    shallow(<TopNav />);
  })

  it('Should call onNewGame when + New Game is clicked', () => {
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const newGame = wrapper.find('.new');
    newGame.simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  })
})
