import Title from "./title";
import React from "react";
import { shallow, mount, render } from "enzyme";

describe("A suite", function () {
  it.only("should render without throwing an error", function () {
    expect(
      shallow(<Title />).contains(<div className="testDiv">testDiv</div>)
    ).toBe(true);
  });

  it('should be selectable by class "testDiv"', function () {
    expect(shallow(<Title />).is(".testDiv")).toBe(true);
  });

  it("should mount in a full DOM", function () {
    expect(mount(<Title />).find("div").length).toBe(1);
  });

  it("should render to static HTML", function () {
    expect(render(<Title />).text()).toEqual("testDiv");
  });
});
