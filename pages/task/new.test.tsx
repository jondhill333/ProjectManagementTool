import NewTask from "./new";
import React from "react";
import { shallow, mount, render } from "enzyme";

describe("NewTask component", () => {
  it("renders correctly", () => {
    const wrapper = mount(<NewTask />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should display proper text value", () => {
    const wrapper = shallow(<CustomTextInput textInputValue={"test"} />);

    expect(wrapper.find("input").props().value).toEqual("test");
  });

  it.only("should call onSubmit prop for valid form submission", () => {
    const testObject = {
      title: "test desc",
      description: "test description",
      estimatedDueDate: "20-12-2022",
    };

    const onSubmitSpy = jest.fn();

    const wrapper = shallow(
      <NewTask testObject={testObject} onSubmit={onSubmitSpy} />
    );
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    // expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      title: testObject.title,
      description: testObject.description,
      estimatedDueDate: testObject.estimatedDueDate,
    });
  });
});
