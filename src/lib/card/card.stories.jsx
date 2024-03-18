import React from 'react';
import Card from './card';

const meta = {
  title: 'Card',
  component: Card,
};

export default meta;

export const DefaultCard = (args) => <Card {...args} />;
DefaultCard.args = {
  type: 'default',
  title: 'Project management',
  date: '3 centuries ago',
  pinned: true,
};

export const TemplateCard = (args) => <Card {...args} />;
TemplateCard.args = {
  type: 'template',
  title: 'Project management',
};

export const EmptyCard = (args) => <Card {...args} />;
EmptyCard.args = {
  type: 'empty',
};
