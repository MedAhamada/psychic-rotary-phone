import _asyncToGenerator from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/asyncToGenerator.js";
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/filters/sortingButton.spec.jsx",
  _this = this;
import _regeneratorRuntime from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/regenerator/index.js";
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SortingButton from './sortingButton';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('SortingButton', function () {
  it('renders SortingButton component', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var sortingAction, _render, getByTestId, rerender, sortingButton;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          sortingAction = jest.fn();
          _render = render( /*#__PURE__*/_jsxDEV(SortingButton, {
            sortingAction: sortingAction,
            sort: "none",
            "data-testid": "sorting-button-test"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 7
          }, _this)), getByTestId = _render.getByTestId, rerender = _render.rerender;
          sortingButton = getByTestId('sorting-button-test');
          expect(sortingButton).toBeTruthy();
          _context.next = 6;
          return waitFor(function () {
            return expect(getByTestId('icon-sort-none')).toBeTruthy();
          });
        case 6:
          rerender( /*#__PURE__*/_jsxDEV(SortingButton, {
            sortingAction: sortingAction,
            sort: "ASC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 14
          }, _this));
          _context.next = 9;
          return waitFor(function () {
            return expect(getByTestId('icon-sort-asc')).toBeTruthy();
          });
        case 9:
          rerender( /*#__PURE__*/_jsxDEV(SortingButton, {
            sortingAction: sortingAction,
            sort: "DESC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 14
          }, _this));
          _context.next = 12;
          return waitFor(function () {
            return expect(getByTestId('icon-sort-desc')).toBeTruthy();
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('renders sorting button with ASC icon when sorting is ASC', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var sortingAction, _render2, getByTestId, iconSortAsc, sortingButton;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          sortingAction = jest.fn();
          _render2 = render( /*#__PURE__*/_jsxDEV(SortingButton, {
            sortingAction: sortingAction,
            sort: "ASC",
            "data-testid": "sorting-button-test"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, _this)), getByTestId = _render2.getByTestId;
          iconSortAsc = getByTestId('icon-sort-asc');
          expect(iconSortAsc).toBeTruthy();
          sortingButton = getByTestId('sorting-button-test');
          fireEvent.click(sortingButton);
          expect(sortingAction).toHaveBeenCalled();
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  it('renders sorting button with DESC icon when sorting is DESC', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    var sortingAction, _render3, getByTestId, iconSortDesc, sortingButton;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          sortingAction = jest.fn();
          _render3 = render( /*#__PURE__*/_jsxDEV(SortingButton, {
            sortingAction: sortingAction,
            sort: "DESC",
            "data-testid": "sorting-button-test"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, _this)), getByTestId = _render3.getByTestId;
          iconSortDesc = getByTestId('icon-sort-desc');
          expect(iconSortDesc).toBeTruthy();
          sortingButton = getByTestId('sorting-button-test');
          fireEvent.click(sortingButton);
          expect(sortingAction).toHaveBeenCalled();
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  it('renders sorting button with none icon when sorting is none', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
    var sortingAction, _render4, getByTestId, iconSortNone, sortingButton;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          sortingAction = jest.fn();
          _render4 = render( /*#__PURE__*/_jsxDEV(SortingButton, {
            sortingAction: sortingAction,
            sort: "none",
            "data-testid": "sorting-button-test"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 7
          }, _this)), getByTestId = _render4.getByTestId;
          iconSortNone = getByTestId('icon-sort-none');
          expect(iconSortNone).toBeTruthy();
          sortingButton = getByTestId('sorting-button-test');
          fireEvent.click(sortingButton);
          expect(sortingAction).toHaveBeenCalled();
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
});