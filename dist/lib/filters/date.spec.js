import _asyncToGenerator from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/asyncToGenerator.js";
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/filters/date.spec.jsx",
  _this = this;
import _regeneratorRuntime from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/regenerator/index.js";
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import DateFilter from './date';
import dayjs from 'dayjs';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('DateFilter Component', function () {
  it('renders the component and interacts with it', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var mockOnFilter, mockOnReset;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          mockOnFilter = jest.fn();
          mockOnReset = jest.fn();
          render( /*#__PURE__*/_jsxDEV(DateFilter, {
            onFilter: mockOnFilter,
            onReset: mockOnReset,
            colAccessor: 'test'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 7
          }, _this));
          fireEvent.click(screen.getByTestId('open-test-date-filter'));
          _context.next = 6;
          return waitFor(function () {
            return expect(screen.getByTestId('test-date-filter')).toBeTruthy();
          });
        case 6:
          fireEvent.change(screen.getByTestId('test-filter-input-date-from'), {
            target: {
              value: dayjs('2022-01-01').format('DD-MM-YYYY')
            }
          });
          fireEvent.change(screen.getByTestId('test-filter-input-date-to'), {
            target: {
              value: dayjs('2022-01-10').format('DD-MM-YYYY')
            }
          });
          fireEvent.click(screen.getByTestId('apply-test-date-filter'));
          // expect(mockOnFilter).toHaveBeenCalled();

          // fireEvent.click(screen.getByTestId('reset-test-date-filter'));
          // expect(mockOnReset).toHaveBeenCalled();
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('displays an error message for empty dates', function () {
    render( /*#__PURE__*/_jsxDEV(DateFilter, {
      onFilter: function onFilter() {
        return jest.fn();
      },
      onReset: function onReset() {
        return jest.fn();
      },
      colAccessor: 'test'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this));
    fireEvent.click(screen.getByTestId('open-test-date-filter'));
    fireEvent.click(screen.getByTestId('apply-test-date-filter'));
    expect(screen.getByTestId('test-date-filter-error-inputs')).toBeTruthy();
  });
});