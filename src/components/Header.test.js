import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// import renderer from 'react-test-renderer';
import Header from "./Header";
it('it works', () => {
    const tree = render(
    <Router>
      <Header />
    </Router>)
  expect(tree).toMatchSnapshot();
})