import React from 'react';
import Button from './button';
import { IconBin, IconPlus } from '../icons';

const meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  text: 'Primary',
  icon: <IconPlus size={14} />,
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  text: 'Secondary',
  variant: 'secondary',
  icon: <IconPlus size={14} />,
};

export const Danger = (args) => <Button {...args} />;
Danger.args = {
  text: 'Danger',
  variant: 'danger',
  icon: <IconPlus size={14} />,
};

export const Icon = (args) => <Button {...args} />;
Icon.args = {
  icon: <IconPlus size={14} />,
  variant: 'icon',
};

export const Link = (args) => <Button {...args} />;
Link.args = {
  text: 'Supprimer',
  variant: 'link',
  icon: <IconBin size={14} />,
};
