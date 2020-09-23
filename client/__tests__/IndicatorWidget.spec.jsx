import React from "react";
import { shallow } from "enzyme";
import IndicatorWidget from "../IndicatorWidget";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

describe("IndicatorWidget component", () => {
  let wrapper = shallow(<IndicatorWidget />);
  it("Should render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("IndicatorWidget renders components", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<IndicatorWidget />)));

  it("renders title", () => {
    expect(wrapper.find("h3").length).toBe(1);
  });

  it("Renders BarChart", () => {
    expect(wrapper.find(BarChart).length).toBe(1);
  });

  it("Renders Bar", () => {
    expect(wrapper.find(Bar).length).toBe(1);
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


const componentDidMountSpy = jest.spyOn(IndicatorWidget.prototype, 'componentDidMount');

describe("Lifecycle method", () => {
  let wrapper = shallow(<IndicatorWidget />, { lifecycleExperimental: true });
  it("componentDidMoun called only once", () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  })

  it("componentDidMoun not called twice", () => {
    expect(componentDidMountSpy).not.toHaveBeenCalledTimes(2);
  })
})