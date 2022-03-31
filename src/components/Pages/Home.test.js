import React from "react";
import { render } from "@testing-library/react";
// import renderer from 'react-test-renderer';
import Home from "./Home";
it('it works', () => {
    const tree = render(<Home />)
  expect(tree).toMatchSnapshot();
})