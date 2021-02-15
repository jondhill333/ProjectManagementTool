import TaskDisplay from "./TaskDisplay";
import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttribute, checkProps } from "../../test/testUtils";
// import { ITask } from "../../models/Task";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const defaultProps = {
  task: { title: 22 },
  // title: 22,
  // description: "can you hear me",
  // taskNumber: 1,
  // test: "wagwan",
};

const setup = (props) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TaskDisplay {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(TaskDisplay, defaultProps);
  // console.log(test.debug());
});

describe("component appearance is correct", () => {
  test("should render without throwing an eror", () => {
    const wrapper = setup({});
    const container = findByTestAttribute(wrapper, "container");
    expect(container.length).toBe(1);
  });

  test("should render the node for the project title", () => {
    const wrapper = setup({});
    const projectTitle = findByTestAttribute(wrapper, "projectTitle");
    expect(projectTitle.length).toBe(1);
  });

  test("should render the node for the project task number", () => {
    const wrapper = setup({});
    const projectTaskNumber = findByTestAttribute(wrapper, "projectTaskNumber");
    expect(projectTaskNumber.length).toBe(1);
  });

  test("should render the node for the task title", () => {
    const wrapper = setup({});
    const taskTitle = findByTestAttribute(wrapper, "taskTitle");
    expect(taskTitle.length).toBe(1);
  });
});

// describe("render the props correctly", () => {
//   let wrapper;

//   const testProject = {
//     title: "project one",
//     description: "project one",
//   };

//   beforeEach(() => {
//     wrapper = setup({ testProject });
//   });

//   test("should render without throwing an error", () => {
//     const container = findByTestAttribute(wrapper, "container");
//     expect(container.length).toBe(1);
//   });
//   test("project title node is not empty", () => {
//     const projectTitle = findByTestAttribute(wrapper, "projectTitle");
//     expect(projectTitle.text().length).not.toBe(0);
//   });

//   test("project Task Number node is not empty", () => {
//     const projectTaskNumber = findByTestAttribute(wrapper, "projectTaskNumber");
//     expect(projectTaskNumber.text().length).not.toBe(0);
//   });

//   test("task title node is not empty", () => {
//     const taskTitle = findByTestAttribute(wrapper, "taskTitle");
//     expect(taskTitle.text().length).not.toBe(0);
//   });
// });
