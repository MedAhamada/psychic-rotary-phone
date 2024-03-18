var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/welcome/welcome.spec.jsx",
  _this = this;
import { render } from '@testing-library/react';
import Welcome from './welcome';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Welcome', function () {
  it('should render successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(Welcome, {
        title: "delo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});