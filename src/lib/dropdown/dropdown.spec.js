import React from 'react';
import { render } from '@testing-library/react';
import CheckboxDropdown, { Dropdown, DropdownSearch, RadioDropdown } from './dropdown';
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
    var _render = render( /*#__PURE__*/React.createElement(RadioDropdown, defaultProps)),
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
    var _render2 = render( /*#__PURE__*/React.createElement(CheckboxDropdown, defaultProps)),
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
    var _render3 = render( /*#__PURE__*/React.createElement(Dropdown, defaultProps)),
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
    var _render4 = render( /*#__PURE__*/React.createElement(DropdownSearch, defaultProps)),
      baseElement = _render4.baseElement;
    expect(baseElement).toBeTruthy();
  });
});