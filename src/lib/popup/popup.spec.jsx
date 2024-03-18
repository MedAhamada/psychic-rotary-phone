import React from 'react';
import { render } from '@testing-library/react';
import { IconWarning } from '../icons';
import PopupRed from './popup';

describe('PopupRed Component', () => {
  const defaultProps = {
    open: true,
    onClose: jest.fn(),
    title: 'Test Title',
    details: 'Test Details',
    icon: <IconWarning />,
    onConfirm: jest.fn(),
    onCancel: jest.fn(),
  };

  it('renders successfully', () => {
    const { baseElement } = render(<PopupRed {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
