import React from 'react';
import { render } from '@testing-library/react';
import Card from './card';
describe('Card Component', function () {
  var defaultProps = {
    type: 'default',
    title: 'Sample Title',
    pinned: false,
    editLink: jest.fn(),
    copyLink: jest.fn(),
    redirectToLink: jest.fn(),
    linkIcon: /*#__PURE__*/React.createElement("div", {
      "data-testid": "mock-icon"
    }),
    deleteConfirmation: jest.fn()
  };
  it('renders default card', function () {
    var _render = render( /*#__PURE__*/React.createElement(Card, defaultProps)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});