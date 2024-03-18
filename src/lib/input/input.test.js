var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/input/input.test.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import { render } from '@testing-library/react';
import Input from './input';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Input Component', function () {
  var defaultProps = {
    type: 'text',
    label: 'Username',
    required: true,
    error: 'This is an error message'
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(Input, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});