import React from 'react';
import { render } from '@testing-library/react';
import Text from './text';
describe('Text Component', function () {
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(Text, {
        variant: "paragraph-medium"
      }, "Hello")),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});