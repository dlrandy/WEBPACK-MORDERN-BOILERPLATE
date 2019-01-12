import React from 'react';
import { render } from 'react-testing-library';

import App from '../src/App.js';

test('calling render on App Component', () => {
  const { getByText } = render(<App />);
  const paragraphNode = getByText('React here!');
  expect(paragraphNode.tagName.toLowerCase()).toBe('p');
});
