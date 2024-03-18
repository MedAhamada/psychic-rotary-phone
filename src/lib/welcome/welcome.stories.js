import React from 'react';
import Welcome from './welcome';
var meta = {
  title: 'Welcome',
  component: Welcome,
  argTypes: {
    variant: {
      defaultValue: 'primary'
    },
    size: {
      defaultValue: 'large'
    }
  }
};
export default meta;
export var Primary = function Primary(args) {
  return /*#__PURE__*/React.createElement(Welcome, args);
};
Primary.args = {
  title: 'Primary'
};