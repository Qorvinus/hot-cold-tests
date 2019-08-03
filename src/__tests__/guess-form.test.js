import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from '../components/guess-form';

describe('<GuessForm />', () => {
  const callback = jest.fn();

  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should call onMakeGuess when submitted', () => {
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = 7;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it('Should reset input when submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 7;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});
