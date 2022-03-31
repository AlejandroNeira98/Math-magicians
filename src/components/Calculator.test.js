import React from "react";
import { render, screen , fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";


it('it works', () => {
    const tree = render(<Calculator />)
  expect(tree).toMatchSnapshot();
})
// we stoped here
// it('it works', () => {
//     render(<Calculator />)
    
//     fireEvent.click(screen.getByTestId('btn9'))
//     expect(screen.getByTestId('answer')).toContain(screen.getByTestId('btn9'))
// })