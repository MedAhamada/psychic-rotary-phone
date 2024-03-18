import _asyncToGenerator from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/asyncToGenerator.js";
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/alert/alert.spec.jsx",
  _this = this;
import _regeneratorRuntime from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/regenerator/index.js";
import { fireEvent, render, waitFor } from '@testing-library/react';
import Alert from './alert';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Alert', function () {
  it('should render with success type and icon', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var onCloseMock, _render, baseElement, getByTestId, getByLabelText, getByText;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          onCloseMock = jest.fn();
          _render = render( /*#__PURE__*/_jsxDEV(Alert, {
            type: "success",
            title: 'Success Alert',
            details: 'This is a success message',
            show: true,
            onClose: onCloseMock,
            position: 'fixed'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 7
          }, _this)), baseElement = _render.baseElement, getByTestId = _render.getByTestId, getByLabelText = _render.getByLabelText, getByText = _render.getByText;
          expect(baseElement).toBeTruthy();
          _context.next = 5;
          return waitFor(function () {
            return getByTestId('checkmark-icon');
          });
        case 5:
          expect(getByText('This is a success message')).toBeTruthy();
          expect(getByText('Success Alert')).toBeTruthy();
          expect(getByLabelText('alert close button')).toBeTruthy();
          fireEvent.click(getByLabelText('alert close button'));
          expect(onCloseMock).toHaveBeenCalledTimes(1);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('should render with warning type and icon', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var onCloseMock, _render2, baseElement, getByTestId, getByLabelText, getByText;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          onCloseMock = jest.fn();
          _render2 = render( /*#__PURE__*/_jsxDEV(Alert, {
            type: "warning",
            title: 'Warning Alert',
            details: 'This is a warning message',
            show: true,
            onClose: onCloseMock,
            position: 'fixed'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, _this)), baseElement = _render2.baseElement, getByTestId = _render2.getByTestId, getByLabelText = _render2.getByLabelText, getByText = _render2.getByText;
          expect(baseElement).toBeTruthy();
          _context2.next = 5;
          return waitFor(function () {
            return getByTestId('info-icon');
          });
        case 5:
          expect(getByText('This is a warning message')).toBeTruthy();
          expect(getByText('Warning Alert')).toBeTruthy();
          expect(getByLabelText('alert close button')).toBeTruthy();
          fireEvent.click(getByLabelText('alert close button'));
          expect(onCloseMock).toHaveBeenCalledTimes(1);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  it('should render with danger type and icon', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    var onCloseMock, _render3, baseElement, getByTestId, getByLabelText, getByText;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          onCloseMock = jest.fn();
          _render3 = render( /*#__PURE__*/_jsxDEV(Alert, {
            type: "danger",
            title: 'Danger Alert',
            details: 'This is a danger message',
            show: true,
            onClose: onCloseMock,
            position: 'fixed'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, _this)), baseElement = _render3.baseElement, getByTestId = _render3.getByTestId, getByLabelText = _render3.getByLabelText, getByText = _render3.getByText;
          expect(baseElement).toBeTruthy();
          _context3.next = 5;
          return waitFor(function () {
            return getByTestId('warning-icon');
          });
        case 5:
          expect(getByText('This is a danger message')).toBeTruthy();
          expect(getByText('Danger Alert')).toBeTruthy();
          expect(getByLabelText('alert close button')).toBeTruthy();
          fireEvent.click(getByLabelText('alert close button'));
          expect(onCloseMock).toHaveBeenCalledTimes(1);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
});