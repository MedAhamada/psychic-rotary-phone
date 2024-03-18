var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/filters/range.spec.jsx",
  _this = this;
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Range from './range';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Range component', function () {
  var onFilter = jest.fn();
  var onReset = jest.fn();
  beforeEach(function () {
    render( /*#__PURE__*/_jsxDEV(Range, {
      onFilter: onFilter,
      onReset: onReset,
      colAccessor: 'test'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this));
  });
  it('should open and close the filter when the button is clicked', function () {
    var button = screen.getByTestId('open-test-range-filter');
    expect(button).toBeTruthy();
    fireEvent.click(button);
    var filterContainer = screen.getByTestId('test-range-filter');
    expect(filterContainer).toBeTruthy();
    fireEvent.click(button);
  });
  it('should enter and clear the min and max values in the input fields', function () {
    var button = screen.getByTestId('open-test-range-filter');
    fireEvent.click(button);
    var minInput = screen.getByTestId('test-filter-min-input');
    var maxInput = screen.getByTestId('test-filter-max-input');
    fireEvent.change(minInput, {
      target: {
        value: '100'
      }
    });
    fireEvent.change(maxInput, {
      target: {
        value: '200'
      }
    });
    var resetButton = screen.getByTestId('reset-test-range-filter');
    fireEvent.click(resetButton);
  });
  it('should apply the filter when the apply button is clicked', function () {
    var button = screen.getByTestId('open-test-range-filter');
    fireEvent.click(button);
    var minInput = screen.getByTestId('test-filter-min-input');
    var maxInput = screen.getByTestId('test-filter-max-input');
    fireEvent.change(minInput, {
      target: {
        value: '100'
      }
    });
    fireEvent.change(maxInput, {
      target: {
        value: '200'
      }
    });
    var applyButton = screen.getByTestId('apply-test-range-filter');
    fireEvent.click(applyButton);
    expect(onFilter).toHaveBeenCalledWith('100', '200');
  });
});