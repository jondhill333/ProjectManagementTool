import TaskDisplay from "./TaskDisplay.tsx";
import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<TaskDisplay />);

export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

describe("component appearance is correct", () => {
  test("should render without throwing an eror", () => {
    const wrapper = setup();
    const container = findByTestAttribute(wrapper, "container");
    expect(container.length).toBe(1);
  });

  test("should render the div for the project title", () => {
    const wrapper = setup();
    const projectTitle = findByTestAttribute(wrapper, "projectTitle");
    expect(projectTitle.length).toBe(1);
  });

  test("should render the span for the project task number", () => {
    const wrapper = setup();
    const projectTaskNumber = findByTestAttribute(wrapper, "projectTaskNumber");
    expect(projectTaskNumber.length).toBe(1);
  });

  test("should render the div for the task title", () => {
    const wrapper = setup();
    const taskTitle = findByTestAttribute(wrapper, "taskTitle");
    expect(taskTitle.length).toBe(1);
  });
});
