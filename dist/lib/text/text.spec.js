var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/text/text.spec.jsx",
  _this = this;
import React from 'react';
import { render } from '@testing-library/react';
import Text from './text';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Text Component', function () {
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(Text, {
        variant: "paragraph-medium",
        children: "Hello"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});