import React from "react";
import { render } from "@testing-library/react";
// import renderer from 'react-test-renderer';
const retrieveSymbol = (symbol) => {
    const calcObj = calculate({ total, next, operation }, symbol);
    setTotal(calcObj.total);
    setNext(calcObj.next);
    setOperation(calcObj.operation);

    if (!calcObj.next && !calcObj.total && !calcObj.operation) { setDisplay('0'); }
    if (calcObj.next && !calcObj.total && !calcObj.operation) { setDisplay(calcObj.next); }
    if (!calcObj.next && calcObj.total && calcObj.operation) { setDisplay('0'); }
    if (calcObj.next && calcObj.total && calcObj.operation) { setDisplay(calcObj.next); }
    if (!calcObj.next && calcObj.total && !calcObj.operation) { setDisplay(calcObj.total); }
  };

import Key from "./InputCalc";
it('it works', () => {
    const tree = render(<Key symbol="7" retrieveSymbol={retrieveSymbol} />)
  expect(tree).toMatchSnapshot();
})