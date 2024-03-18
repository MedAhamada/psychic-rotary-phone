import React from 'react';
import { render } from '@testing-library/react';
import Label from './label';

describe('Label Component', () => {
  const defaultProps = {
    label: 'Label Example',
    required: true,
  };

  it('renders successfully', () => {
    const { baseElement } = render(<Label {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
