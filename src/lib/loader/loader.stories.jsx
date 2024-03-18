import React from 'react';
import { Loader } from './loader';

const meta = {
  title: 'Loader',
  component: Loader,
};

export default meta;

export const DefaultCard = () => <Loader />;

export const BorderTopLoader = (args) => <Loader {...args} />;
BorderTopLoader.args = {
  variant: 'border-top',
};

export const DotsLoader = (args) => <Loader {...args} />;
DotsLoader.args = {
  variant: 'dots',
};
