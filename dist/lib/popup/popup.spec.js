var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/popup/popup.spec.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import { render } from '@testing-library/react';
import { IconWarning } from '../icons';
import PopupRed from './popup';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('PopupRed Component', function () {
  var defaultProps = {
    open: true,
    onClose: jest.fn(),
    title: 'Test Title',
    details: 'Test Details',
    icon: /*#__PURE__*/_jsxDEV(IconWarning, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }, _this),
    onConfirm: jest.fn(),
    onCancel: jest.fn()
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(PopupRed, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});