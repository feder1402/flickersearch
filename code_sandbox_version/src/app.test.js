import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

describe("App", () => {
  const component = renderer.create(<App />);

  test("Renders page", () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
