import React from 'react';
import { render } from '@testing-library/react';
import Card from './card';

describe('Card Component', () => {
  const defaultProps = {
    type: 'default',
    title: 'Sample Title',
    pinned: false,
    editLink: jest.fn(),
    copyLink: jest.fn(),
    redirectToLink: jest.fn(),
    linkIcon: <div data-testid="mock-icon" />,
    deleteConfirmation: jest.fn(),
  };

  it('renders default card', () => {
    const { baseElement } = render(<Card {...defaultProps} />);

    expect(baseElement).toBeTruthy();
  });
});
