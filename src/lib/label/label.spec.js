var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/label/label.spec.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import { render } from '@testing-library/react';
import Label from './label';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Label Component', function () {
  var defaultProps = {
    label: 'Label Example',
    required: true
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(Label, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});