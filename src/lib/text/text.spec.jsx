import React from 'react';
import { render } from '@testing-library/react';
import Text from './text';

describe('Text Component', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <Text variant="paragraph-medium">Hello</Text>
    );
    expect(baseElement).toBeTruthy();
  });
});
