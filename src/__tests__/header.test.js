import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from '../components/header';

describe('<Header />', () => {

  it('Renders without crashing', () => {
    shallow(<Header />);
  })
})
