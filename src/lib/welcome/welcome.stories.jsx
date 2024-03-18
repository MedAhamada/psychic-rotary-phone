import React from 'react';
import Welcome from './welcome';

const meta = {
  title: 'Welcome',
  component: Welcome,
  argTypes: {
    variant: {
      defaultValue: 'primary',
    },
    size: {
      defaultValue: 'large',
    },
  },
};

export default meta;

export const Primary = (args) => <Welcome {...args} />;
Primary.args = {
  title: 'Primary',
};
