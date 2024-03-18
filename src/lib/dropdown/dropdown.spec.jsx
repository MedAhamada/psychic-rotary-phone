import React from 'react';
import { render } from '@testing-library/react';
import CheckboxDropdown, {
  Dropdown,
  DropdownSearch,
  RadioDropdown,
} from './dropdown';

describe('RadioDropdown Component', () => {
  const defaultProps = {
    name: 'radioDropdown',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
    label: 'Radio Dropdown',
    onChange: jest.fn(),
    width: '400px',
  };

  it('renders successfully', () => {
    const { baseElement } = render(<RadioDropdown {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});

describe('CheckboxDropdown Component', () => {
  const defaultProps = {
    name: 'checkboxDropdown',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
    label: 'Checkbox Dropdown',
    onChange: jest.fn(),
    value: ['option1'],
    width: '400px',
  };

  it('renders successfully', () => {
    const { baseElement } = render(<CheckboxDropdown {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});

describe('Dropdown Component', () => {
  const defaultProps = {
    name: 'dropdown',
    items: [
      { label: 'Item 1', key: 'item1' },
      { label: 'Item 2', key: 'item2' },
    ],
    label: 'Dropdown',
    onChange: jest.fn(),
    value: 'item1',
    width: '200px',
  };

  it('renders successfully', () => {
    const { baseElement } = render(<Dropdown {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});

describe('DropdownSearch Component', () => {
  const defaultProps = {
    name: 'dropdownSearch',
    items: [
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' },
    ],
    label: 'Dropdown Search',
    onChange: jest.fn(),
    value: 'item1',
    width: '400px',
  };

  it('renders successfully', () => {
    const { baseElement } = render(<DropdownSearch {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
