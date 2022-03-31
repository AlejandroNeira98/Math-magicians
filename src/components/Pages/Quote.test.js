import React from "react";
import { render } from "@testing-library/react";
// import renderer from 'react-test-renderer';
import Quote from "./Quote";
it('it works', () => {
    const tree = render(<Quote />)
  expect(tree).toMatchSnapshot();
})