import React from 'react';
import { shallow } from 'enzyme';
import ChartWidget from '../ChartWidget';

describe('<ChartWidget />', () => {
  it('has implement note', () => {
    expect(shallow(<ChartWidget />).text()).toBe('Implement me!');
  });
});
