var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/languageSelect/languageSelect.spec.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import { render } from '@testing-library/react';
import LanguageSelect from './languageSelect';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('LanguageSelect Component', function () {
  var defaultProps = {
    onSelect: jest.fn()
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(LanguageSelect, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});