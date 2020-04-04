import { render } from '@testing-library/react';
import React from 'react';

import App from 'App';

it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Logo/i);
  expect(element).toBeInTheDocument();
});
