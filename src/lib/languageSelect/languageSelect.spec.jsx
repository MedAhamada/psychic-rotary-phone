import React from 'react';
import { render } from '@testing-library/react';
import LanguageSelect from './languageSelect';

describe('LanguageSelect Component', () => {
  const defaultProps = {
    onSelect: jest.fn(),
  };

  it('renders successfully', () => {
    const { baseElement } = render(<LanguageSelect {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
