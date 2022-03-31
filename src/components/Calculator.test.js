import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';

it('it works', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
// we stoped here
it('it works', async () => {
  render(<Calculator />);
  await userEvent.click(screen.getByText('9'));
  expect(screen.getByTestId('answer')).toHaveTextContent('9');
});
