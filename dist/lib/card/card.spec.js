var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/card/card.spec.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import { render } from '@testing-library/react';
import Card from './card';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Card Component', function () {
  var defaultProps = {
    type: 'default',
    title: 'Sample Title',
    pinned: false,
    editLink: jest.fn(),
    copyLink: jest.fn(),
    redirectToLink: jest.fn(),
    linkIcon: /*#__PURE__*/_jsxDEV("div", {
      "data-testid": "mock-icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }, _this),
    deleteConfirmation: jest.fn()
  };
  it('renders default card', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(Card, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});