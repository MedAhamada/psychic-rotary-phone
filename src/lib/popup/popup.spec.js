import React from 'react';
import { render } from '@testing-library/react';
import { IconWarning } from '../icons';
import PopupRed from './popup';
describe('PopupRed Component', function () {
  var defaultProps = {
    open: true,
    onClose: jest.fn(),
    title: 'Test Title',
    details: 'Test Details',
    icon: /*#__PURE__*/React.createElement(IconWarning, null),
    onConfirm: jest.fn(),
    onCancel: jest.fn()
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(PopupRed, defaultProps)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});