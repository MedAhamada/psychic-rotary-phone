import React from 'react';
import { render } from '@testing-library/react';

import { IconBell, IconLink } from '../icons';
import DropdownActions from './dropdownActions';

describe('DropdownActions', () => {
  it('renders without crashing', () => {
    const options = [
      {
        title: 'Option 1',
        icon: <IconLink />,
        action: jest.fn(),
      },
      {
        title: 'Option 2',
        icon: <IconBell />,
        action: jest.fn(),
      },
    ];

    const { baseElement } = render(<DropdownActions options={options} />);
    expect(baseElement).toBeTruthy();
  });
});
