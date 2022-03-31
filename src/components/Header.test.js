import React from "react";
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Header from "./Header";
it('it works', () => {
    const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})