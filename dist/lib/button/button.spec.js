var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/button/button.spec.jsx",
  _this = this;
import { render } from '@testing-library/react';
import Button from './button';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Button', function () {
  it('should render successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(Button, {
        text: "demo button"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});