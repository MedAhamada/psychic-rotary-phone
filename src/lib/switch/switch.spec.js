import React from 'react';
import { render } from '@testing-library/react';
import Switch from './switch';
describe('Switch Component', function () {
  var defaultProps = {
    checked: false,
    onChange: jest.fn()
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(Switch, defaultProps)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});