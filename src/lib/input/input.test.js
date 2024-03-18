import React from 'react';
import { render } from '@testing-library/react';
import Input from './input';
describe('Input Component', function () {
  var defaultProps = {
    type: 'text',
    label: 'Username',
    required: true,
    error: 'This is an error message'
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(Input, defaultProps)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});