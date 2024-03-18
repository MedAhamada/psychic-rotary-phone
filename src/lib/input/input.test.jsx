import React from 'react';
import { render } from '@testing-library/react';
import Input from './input';

describe('Input Component', () => {
  const defaultProps = {
    type: 'text',
    label: 'Username',
    required: true,
    error: 'This is an error message',
  };

  it('renders successfully', () => {
    const { baseElement } = render(<Input {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
