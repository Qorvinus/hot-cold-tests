import React from 'react';
import {shallow, mount} from 'enzyme';
import Feedback from '../components/feedback';

describe('<Feedback />', () => {

  it('Renders without crashing', () => {
    shallow(<Feedback />);
  })

  it('Renders the feedback', () => {
    const feedback = "Hot";
    const wrapper = shallow(<Feedback feedback={feedback} />)
    expect(wrapper.contains(feedback)).toEqual(true);
  })
})
