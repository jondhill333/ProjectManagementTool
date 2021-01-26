import Home from "./index";
import React from "react";
import { shallow, mount, render } from "enzyme";

describe("Home Page", function () {
  it("should render without throwing an error", function () {
    expect(shallow(<Home />).contains(<main></main>)).toBe(true);
  });

  // it('should be selectable by class "testDiv"', function () {
  //   expect(shallow(<Title />).is(".testDiv")).toBe(true);
  // });

  it.only("should mount in a full DOM", function () {
    expect(mount(<Home />).find("main").length).toBe(1);
  });

  it.only("should have the 3 sections", function () {
    expect(mount(<Home />).find("section").length).toBe(3);
  });

  it("should render to static HTML", function () {
    expect(render(<Home />).text()).toEqual("Hello");
  });
  //   test("shgouold have correct properties", function() {
  //       expect(receivedTasks).toHaveProperty('title')
  //   } )
});
