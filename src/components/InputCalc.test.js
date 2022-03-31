import React from "react";
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Key from "./InputCalc";
it('it works', () => {
    const tree = renderer
    .create(<Key />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})