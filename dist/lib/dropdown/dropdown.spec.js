var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/dropdown/dropdown.spec.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import { render } from '@testing-library/react';
import CheckboxDropdown, { Dropdown, DropdownSearch, RadioDropdown } from './dropdown';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('RadioDropdown Component', function () {
  var defaultProps = {
    name: 'radioDropdown',
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }],
    label: 'Radio Dropdown',
    onChange: jest.fn(),
    width: '400px'
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(RadioDropdown, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});
describe('CheckboxDropdown Component', function () {
  var defaultProps = {
    name: 'checkboxDropdown',
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }],
    label: 'Checkbox Dropdown',
    onChange: jest.fn(),
    value: ['option1'],
    width: '400px'
  };
  it('renders successfully', function () {
    var _render2 = render( /*#__PURE__*/_jsxDEV(CheckboxDropdown, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 36
      }, _this)),
      baseElement = _render2.baseElement;
    expect(baseElement).toBeTruthy();
  });
});
describe('Dropdown Component', function () {
  var defaultProps = {
    name: 'dropdown',
    items: [{
      label: 'Item 1',
      key: 'item1'
    }, {
      label: 'Item 2',
      key: 'item2'
    }],
    label: 'Dropdown',
    onChange: jest.fn(),
    value: 'item1',
    width: '200px'
  };
  it('renders successfully', function () {
    var _render3 = render( /*#__PURE__*/_jsxDEV(Dropdown, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 36
      }, _this)),
      baseElement = _render3.baseElement;
    expect(baseElement).toBeTruthy();
  });
});
describe('DropdownSearch Component', function () {
  var defaultProps = {
    name: 'dropdownSearch',
    items: [{
      label: 'Item 1',
      value: 'item1'
    }, {
      label: 'Item 2',
      value: 'item2'
    }],
    label: 'Dropdown Search',
    onChange: jest.fn(),
    value: 'item1',
    width: '400px'
  };
  it('renders successfully', function () {
    var _render4 = render( /*#__PURE__*/_jsxDEV(DropdownSearch, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 36
      }, _this)),
      baseElement = _render4.baseElement;
    expect(baseElement).toBeTruthy();
  });
});