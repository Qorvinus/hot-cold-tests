import React from 'react';
import {shallow, mount} from 'enzyme';
import AuralStatus from '../components/aural-status';

describe('<AuralStatus />', () => {

  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  })
})
