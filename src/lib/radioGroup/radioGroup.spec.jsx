import React from 'react';
import { render } from '@testing-library/react';
import RadioGroup from './radioGroup';

describe('RadioGroup Component', () => {
  const defaultProps = {
    name: 'testRadioGroup',
    defaultValue: 'default',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    onChange: jest.fn(),
  };

  it('renders successfully', () => {
    const { baseElement } = render(<RadioGroup {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
