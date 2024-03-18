import _asyncToGenerator from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/asyncToGenerator.js";
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/pagination/pagination.spec.jsx",
  _this = this;
import _regeneratorRuntime from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/regenerator/index.js";
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Pagination from './pagination';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Pagination Component', function () {
  it('renders correctly', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _render, baseElement, getByText;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _render = render( /*#__PURE__*/_jsxDEV(Pagination, {
            currentPage: 1,
            total: 100,
            pageSize: 10,
            onChange: jest.fn(),
            separatorText: 'of',
            resultText: 'results',
            entriesText: 'entries per page'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 7
          }, _this)), baseElement = _render.baseElement, getByText = _render.getByText;
          expect(baseElement).toBeTruthy();
          _context.next = 4;
          return waitFor(function () {
            return getByText('1-10 of 100 results');
          });
        case 4:
          expect(getByText('1-10 of 100 results')).toBeTruthy();
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('handles previous button click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var mockOnChange, _render2, baseElement, getByText, getByLabelText;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          mockOnChange = jest.fn();
          _render2 = render( /*#__PURE__*/_jsxDEV(Pagination, {
            currentPage: 2,
            total: 100,
            pageSize: 10,
            onChange: mockOnChange,
            separatorText: 'of',
            resultText: 'results',
            entriesText: 'entries per page'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }, _this)), baseElement = _render2.baseElement, getByText = _render2.getByText, getByLabelText = _render2.getByLabelText;
          expect(baseElement).toBeTruthy();
          _context2.next = 5;
          return waitFor(function () {
            return getByText('11-20 of 100 results');
          });
        case 5:
          expect(getByText('11-20 of 100 results')).toBeTruthy();
          _context2.next = 8;
          return waitFor(function () {
            return getByLabelText('pagination previous');
          });
        case 8:
          expect(getByLabelText('pagination previous')).toBeTruthy();
          fireEvent.click(getByLabelText('pagination previous'));
          expect(mockOnChange).toHaveBeenCalled();
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  it('handles previous button click on first page', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    var mockOnChange, _render3, baseElement, getByText, getByLabelText;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          mockOnChange = jest.fn();
          _render3 = render( /*#__PURE__*/_jsxDEV(Pagination, {
            currentPage: 1,
            total: 100,
            pageSize: 10,
            onChange: mockOnChange,
            separatorText: 'of',
            resultText: 'results',
            entriesText: 'entries per page'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, _this)), baseElement = _render3.baseElement, getByText = _render3.getByText, getByLabelText = _render3.getByLabelText;
          expect(baseElement).toBeTruthy();
          _context3.next = 5;
          return waitFor(function () {
            return getByLabelText('pagination previous');
          });
        case 5:
          expect(getByLabelText('pagination previous')).toBeTruthy();
          fireEvent.click(getByLabelText('pagination previous'));
          expect(mockOnChange).not.toHaveBeenCalled();
          _context3.next = 10;
          return waitFor(function () {
            return getByText('1-10 of 100 results');
          });
        case 10:
          expect(getByText('1-10 of 100 results')).toBeTruthy();
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  it('handles next button click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
    var mockOnChange, _render4, baseElement, getByText, getByLabelText;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          mockOnChange = jest.fn();
          _render4 = render( /*#__PURE__*/_jsxDEV(Pagination, {
            currentPage: 2,
            total: 100,
            pageSize: 10,
            onChange: mockOnChange,
            separatorText: 'of',
            resultText: 'results',
            entriesText: 'entries per page'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, _this)), baseElement = _render4.baseElement, getByText = _render4.getByText, getByLabelText = _render4.getByLabelText;
          expect(baseElement).toBeTruthy();
          _context4.next = 5;
          return waitFor(function () {
            return getByLabelText('pagination next');
          });
        case 5:
          expect(getByLabelText('pagination next')).toBeTruthy();
          fireEvent.click(getByLabelText('pagination next'));
          expect(mockOnChange).toHaveBeenCalled();
          _context4.next = 10;
          return waitFor(function () {
            return getByText('21-30 of 100 results');
          });
        case 10:
          expect(getByText('21-30 of 100 results')).toBeTruthy();
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  it('handles page number button click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
    var mockOnChange, _render5, baseElement, getByText;
    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          mockOnChange = jest.fn();
          _render5 = render( /*#__PURE__*/_jsxDEV(Pagination, {
            currentPage: 2,
            total: 100,
            pageSize: 10,
            onChange: mockOnChange,
            separatorText: 'of',
            resultText: 'results',
            entriesText: 'entries per page'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 7
          }, _this)), baseElement = _render5.baseElement, getByText = _render5.getByText;
          expect(baseElement).toBeTruthy();
          _context5.next = 5;
          return waitFor(function () {
            return getByText('3');
          });
        case 5:
          expect(getByText('3')).toBeTruthy();
          fireEvent.click(getByText('3'));
          expect(mockOnChange).toHaveBeenCalled();
          _context5.next = 10;
          return waitFor(function () {
            return getByText('21-30 of 100 results');
          });
        case 10:
          expect(getByText('21-30 of 100 results')).toBeTruthy();
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  it('handles page size change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
    var mockOnChange, _render6, baseElement, getByText, getByLabelText, getByTestId;
    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          mockOnChange = jest.fn();
          _render6 = render( /*#__PURE__*/_jsxDEV(Pagination, {
            currentPage: 1,
            total: 100,
            pageSize: 10,
            onChange: mockOnChange,
            separatorText: 'of',
            resultText: 'results',
            entriesText: 'entries per page',
            entriesPerPage: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 7
          }, _this)), baseElement = _render6.baseElement, getByText = _render6.getByText, getByLabelText = _render6.getByLabelText, getByTestId = _render6.getByTestId;
          expect(baseElement).toBeTruthy();
          _context6.next = 5;
          return waitFor(function () {
            return getByText('entries per page');
          });
        case 5:
          expect(getByText('entries per page')).toBeTruthy();
          _context6.next = 8;
          return waitFor(function () {
            return getByLabelText('btn dropdown button');
          });
        case 8:
          expect(getByLabelText('btn dropdown button')).toBeTruthy();
          fireEvent.click(getByLabelText('btn dropdown button'));
          _context6.next = 12;
          return waitFor(function () {
            return getByTestId('dropdown-item-20');
          });
        case 12:
          fireEvent.click(getByTestId('dropdown-item-20'));
          expect(mockOnChange).toHaveBeenCalled();
          _context6.next = 16;
          return waitFor(function () {
            return getByText('1-10 of 100 results');
          });
        case 16:
          expect(getByText('1-10 of 100 results')).toBeTruthy();
        case 17:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  it('renders correct page buttons based on maxVisiblePages', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
    var mockOnChange, _render7, baseElement, getByText, getAllByLabelText;
    return _regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          mockOnChange = jest.fn();
          _render7 = render( /*#__PURE__*/_jsxDEV(Pagination, {
            currentPage: 5,
            total: 100,
            pageSize: 10,
            onChange: mockOnChange,
            separatorText: 'of',
            resultText: 'results',
            entriesText: 'entries per page',
            entriesPerPage: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 7
          }, _this)), baseElement = _render7.baseElement, getByText = _render7.getByText, getAllByLabelText = _render7.getAllByLabelText;
          expect(baseElement).toBeTruthy();
          _context7.next = 5;
          return waitFor(function () {
            return getByText('1');
          });
        case 5:
          expect(getByText('1')).toBeTruthy();
          _context7.next = 8;
          return waitFor(function () {
            return getAllByLabelText('pagination threedots');
          });
        case 8:
          expect(getAllByLabelText('pagination threedots')).toBeTruthy();
          _context7.next = 11;
          return waitFor(function () {
            return getByText('3');
          });
        case 11:
          expect(getByText('3')).toBeTruthy();
          _context7.next = 14;
          return waitFor(function () {
            return getByText('4');
          });
        case 14:
          expect(getByText('4')).toBeTruthy();
          _context7.next = 17;
          return waitFor(function () {
            return getByText('5');
          });
        case 17:
          expect(getByText('5')).toBeTruthy();
          _context7.next = 20;
          return waitFor(function () {
            return getByText('6');
          });
        case 20:
          expect(getByText('6')).toBeTruthy();
          _context7.next = 23;
          return waitFor(function () {
            return getByText('7');
          });
        case 23:
          expect(getByText('7')).toBeTruthy();
          _context7.next = 26;
          return waitFor(function () {
            return getByText('41-50 of 100 results');
          });
        case 26:
          expect(getByText('41-50 of 100 results')).toBeTruthy();
        case 27:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
  it('renders correct number of entries in the middle of the page range', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
    var mockOnChange, _render8, baseElement, getByText;
    return _regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          mockOnChange = jest.fn();
          _render8 = render( /*#__PURE__*/_jsxDEV(Pagination, {
            currentPage: 6,
            total: 100,
            pageSize: 10,
            onChange: mockOnChange,
            separatorText: 'of',
            resultText: 'results',
            entriesText: 'entries per page',
            entriesPerPage: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 7
          }, _this)), baseElement = _render8.baseElement, getByText = _render8.getByText;
          expect(baseElement).toBeTruthy();
          _context8.next = 5;
          return waitFor(function () {
            return getByText('51-60 of 100 results');
          });
        case 5:
          expect(getByText('51-60 of 100 results')).toBeTruthy();
        case 6:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  })));
});