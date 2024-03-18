var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/dropdown/dropdownActions.spec.jsx",
  _this = this;
import React from 'react';
import { render } from '@testing-library/react';
import { IconBell, IconLink } from '../icons';
import DropdownActions from './dropdownActions';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('DropdownActions', function () {
  it('renders without crashing', function () {
    var options = [{
      title: 'Option 1',
      icon: /*#__PURE__*/_jsxDEV(IconLink, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }, _this),
      action: jest.fn()
    }, {
      title: 'Option 2',
      icon: /*#__PURE__*/_jsxDEV(IconBell, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }, _this),
      action: jest.fn()
    }];
    var _render = render( /*#__PURE__*/_jsxDEV(DropdownActions, {
        options: options
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});