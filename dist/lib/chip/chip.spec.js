var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/chip/chip.spec.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import { render } from '@testing-library/react';
import { MemberChip, WorkspaceChip } from './chip';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Member Chip Component', function () {
  var defaultProps = {
    imgSrc: 'https://placehold.co/100',
    name: 'John Doe',
    staff: 'Developer',
    status: 'active'
  };
  it('renders member chip successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(MemberChip, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
  it('renders workspace chip successfully', function () {
    var _render2 = render( /*#__PURE__*/_jsxDEV(WorkspaceChip, {
        title: "Workspace Title",
        subtitle: "Subtitle",
        img: "https://placehold.co/100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, _this)),
      baseElement = _render2.baseElement;
    expect(baseElement).toBeTruthy();
  });
});