import React from 'react';
import { PopupRed } from './popup';
import { IconWarning } from '../icons';

const meta = {
  title: 'PopupRed',
  component: PopupRed,
};

export default meta;

export const RedPopup = (args) => <PopupRed {...args} />;
RedPopup.args = {
  title: 'Are you sure?',
  details:
    'By clicking on the `confirm` button, you will lose the information entered in the input fields.',
  icon: <IconWarning size={32} />,
  onCancel: () => {
    alert('canceled :(');
  },
  onConfirm: () => {
    alert('confirmed :D');
  },
};
