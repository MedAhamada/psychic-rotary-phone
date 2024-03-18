import React from 'react';
import LanguageSelect from '../languageSelect/languageSelect';

const meta = {
  title: 'LanguageSelect',
  component: LanguageSelect,
};

export default meta;

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
  { label: 'Option 5', value: 'option-5' },
];

export const languageDropdown = (args) => <LanguageSelect {...args} />;
languageDropdown.args = {
  onSelect: (items) => {
    console.log(items);
  },
};
