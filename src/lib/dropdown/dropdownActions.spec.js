import React from 'react';
import { render } from '@testing-library/react';
import { IconBell, IconLink } from '../icons';
import DropdownActions from './dropdownActions';
describe('DropdownActions', function () {
  it('renders without crashing', function () {
    var options = [{
      title: 'Option 1',
      icon: /*#__PURE__*/React.createElement(IconLink, null),
      action: jest.fn()
    }, {
      title: 'Option 2',
      icon: /*#__PURE__*/React.createElement(IconBell, null),
      action: jest.fn()
    }];
    var _render = render( /*#__PURE__*/React.createElement(DropdownActions, {
        options: options
      })),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});