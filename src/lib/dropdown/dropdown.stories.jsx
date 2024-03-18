import React from 'react';
import { CheckboxDropdown, RadioDropdown } from './dropdown';

const meta = {
  title: 'Dropdown',
  component: RadioDropdown,
};

export default meta;

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
  { label: 'Option 5', value: 'option-5' },
];

export const radioDropdown = (args) => <RadioDropdown {...args} />;
radioDropdown.args = {
  label: 'Open options',
  options: options,
  onChange: (e) => console.log(e.target.value),
};

export const checkboxDropdown = (args) => <CheckboxDropdown {...args} />;
checkboxDropdown.args = {
  label: 'Open options',
  options: options,
  onChange: (e) => {
    console.log(e);
  },
};
