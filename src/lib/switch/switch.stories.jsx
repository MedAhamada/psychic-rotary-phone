import React from 'react';
import Switch from './switch';

const meta = {
  title: 'Switch',
  component: Switch,
};

export default meta;

export const SwitchToggle = (args) => <Switch {...args} />;
SwitchToggle.args = {};
