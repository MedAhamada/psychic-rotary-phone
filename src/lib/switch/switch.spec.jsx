import React from 'react';
import { render } from '@testing-library/react';
import Switch from './switch';

describe('Switch Component', () => {
  const defaultProps = {
    checked: false,
    onChange: jest.fn(),
  };

  it('renders successfully', () => {
    const { baseElement } = render(<Switch {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
