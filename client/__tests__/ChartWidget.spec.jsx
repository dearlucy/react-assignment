import React from 'react';
import { shallow } from 'enzyme';
import ChartWidget from '../ChartWidget';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";


describe("ChartWidget component", () => {
  let wrapper = shallow(<ChartWidget />);
  it("Should render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("ChartWidget renders components", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<ChartWidget />)));

  it("renders title", () => {
    expect(wrapper.find("h3").length).toBe(1);
  });

  it("renders button", () => {
    expect(wrapper.find("button").length).toBe(1);
  });

  it("Renders LineChart", () => {
    expect(wrapper.find(LineChart).length).toBe(1);
  });

  it("Renders Line", () => {
    expect(wrapper.find(Line).length).toBe(1);
  });

  it("Renders CartesianGrid", () => {
    expect(wrapper.find(CartesianGrid).length).toBe(1);
  });

  it("Renders XAxis", () => {
    expect(wrapper.find(XAxis).length).toBe(1);
  });

  it("Renders YAxis", () => {
    expect(wrapper.find(YAxis).length).toBe(1);
  });

  it("Renders Tooltip", () => {
    expect(wrapper.find(Tooltip).length).toBe(1);
  });

});


const componentDidMountSpy = jest.spyOn(ChartWidget.prototype, 'componentDidMount');

describe("Lifecycle method", () => {
  let wrapper = shallow(<ChartWidget />, { lifecycleExperimental: true });
  it("componentDidMoun called only once", () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  })

  it("componentDidMoun not called twice", () => {
    expect(componentDidMountSpy).not.toHaveBeenCalledTimes(2);
  })
})