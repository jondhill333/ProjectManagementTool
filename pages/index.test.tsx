import LandingPage from "./index";
import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttribute } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props) => {
  const setupProps = { ...props };
  return shallow(<LandingPage {...setupProps} />);
};

describe("displays correctly", () => {
  test("renders without error", () => {
    const wrapper = setup({});
    const container = findByTestAttribute(wrapper, "container");
    expect(container.length).toBe(1);
  });

  test("renders without error", () => {
    const wrapper = setup({});
    const loginButton = findByTestAttribute(wrapper, "loginButton");
    expect(loginButton.length).toBe(1);
  });

    test("renders without error", () => {
    const wrapper = setup({});
    const signUpButton = findByTestAttribute(wrapper, "signUpButton");
    expect(signUpButton.length).toBe(1);
  });


});
