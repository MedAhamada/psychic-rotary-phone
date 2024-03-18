var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/loader/loader.spec.jsx",
  _this = this;
import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './loader';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Loader Component', function () {
  it('renders the default loader', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(Loader, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 36
      }, _this)),
      getByTestId = _render.getByTestId;
    expect(getByTestId('default-loader')).toBeTruthy();
  });
  it('renders the border-top loader', function () {
    var _render2 = render( /*#__PURE__*/_jsxDEV(Loader, {
        variant: "border-top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 36
      }, _this)),
      getByTestId = _render2.getByTestId;
    expect(getByTestId('border-top-loader')).toBeTruthy();
  });
  it('renders the dots loader', function () {
    var _render3 = render( /*#__PURE__*/_jsxDEV(Loader, {
        variant: "dots"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 36
      }, _this)),
      getByTestId = _render3.getByTestId;
    expect(getByTestId('dots-loader')).toBeTruthy();
    expect(getByTestId('dot1')).toBeTruthy();
    expect(getByTestId('dot2')).toBeTruthy();
    expect(getByTestId('dot3')).toBeTruthy();
  });
});