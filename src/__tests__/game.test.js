import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from '../components/game';

describe('<Game />', () => {

  it('Renders without crashing', () => {
    shallow(<Game />);
  });
});
