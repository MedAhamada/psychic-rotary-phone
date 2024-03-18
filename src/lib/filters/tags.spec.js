import _asyncToGenerator from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/asyncToGenerator.js";
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/filters/tags.spec.jsx",
  _this = this;
import _regeneratorRuntime from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/regenerator/index.js";
import "core-js/modules/es.array.for-each.js";
import "core-js/modules/es.object.assign.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/web.dom-collections.for-each.js";
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Tags from './tags';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Tags Component', function () {
  var options = [{
    label: 'Tag 1',
    value: 'tag1'
  }, {
    label: 'Tag 2',
    value: 'tag2'
  }, {
    label: 'Tag 3',
    value: 'tag3'
  }];
  var defaultProps = {
    options: options,
    onFilter: jest.fn(),
    onReset: jest.fn(),
    colAccessor: 'test'
  };
  it('applies tags filters', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _render, baseElement, getByText, getByTestId, getAllByRole, checkboxes;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _render = render( /*#__PURE__*/_jsxDEV(Tags, Object.assign({}, defaultProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, _this)), baseElement = _render.baseElement, getByText = _render.getByText, getByTestId = _render.getByTestId, getAllByRole = _render.getAllByRole;
          expect(baseElement).toBeTruthy();
          _context.next = 4;
          return waitFor(function () {
            return getByTestId('open-test-tags-filter');
          });
        case 4:
          expect(getByTestId('open-test-tags-filter')).toBeTruthy();
          fireEvent.click(getByTestId('open-test-tags-filter'));
          _context.next = 8;
          return waitFor(function () {
            return expect(getByTestId('test-tags-filter')).toBeTruthy();
          });
        case 8:
          expect(getByText('Tag 2')).toBeTruthy();
          checkboxes = getAllByRole('checkbox');
          checkboxes.forEach(function (checkbox) {
            fireEvent.click(checkbox);
          });
          expect(getByTestId('reset-test-tags-filter')).toBeTruthy();
          expect(getByTestId('apply-test-tags-filter')).toBeTruthy();
          fireEvent.click(getByTestId('apply-test-tags-filter'));
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('resets tags filters', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var _render2, baseElement, getByText, getByTestId, getAllByRole, checkboxes;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _render2 = render( /*#__PURE__*/_jsxDEV(Tags, Object.assign({}, defaultProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, _this)), baseElement = _render2.baseElement, getByText = _render2.getByText, getByTestId = _render2.getByTestId, getAllByRole = _render2.getAllByRole;
          expect(baseElement).toBeTruthy();
          _context2.next = 4;
          return waitFor(function () {
            return getByTestId('open-test-tags-filter');
          });
        case 4:
          expect(getByTestId('open-test-tags-filter')).toBeTruthy();
          fireEvent.click(getByTestId('open-test-tags-filter'));
          _context2.next = 8;
          return waitFor(function () {
            return expect(getByTestId('test-tags-filter')).toBeTruthy();
          });
        case 8:
          expect(getByText('Tag 2')).toBeTruthy();
          checkboxes = getAllByRole('checkbox');
          checkboxes.forEach(function (checkbox) {
            fireEvent.click(checkbox);
          });
          expect(getByTestId('apply-test-tags-filter')).toBeTruthy();
          expect(getByTestId('reset-test-tags-filter')).toBeTruthy();
          fireEvent.click(getByTestId('reset-test-tags-filter'));
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});