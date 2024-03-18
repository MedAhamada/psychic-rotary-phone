import React from 'react';
import { render } from '@testing-library/react';
import Label from './label';
describe('Label Component', function () {
  var defaultProps = {
    label: 'Label Example',
    required: true
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(Label, defaultProps)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});