var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/badge/badge.spec.jsx",
  _this = this;
import { render } from '@testing-library/react';
import Badge from './badge';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Badge', function () {
  it('should render successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(Badge, {
        variant: "green",
        text: "Title",
        size: "large"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});