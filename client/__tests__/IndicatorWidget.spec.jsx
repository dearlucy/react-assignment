import React from 'react';
import { shallow } from 'enzyme';
import IndicatorWidget from '../IndicatorWidget';

describe('<IndicatorWidget />', () => {
  it('has implement note', () => {
    expect(shallow(<IndicatorWidget />).text()).toBe('Implement me!');
  });
});
