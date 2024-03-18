import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './loader';
describe('Loader Component', function () {
  it('renders the default loader', function () {
    var _render = render( /*#__PURE__*/React.createElement(Loader, null)),
      getByTestId = _render.getByTestId;
    expect(getByTestId('default-loader')).toBeTruthy();
  });
  it('renders the border-top loader', function () {
    var _render2 = render( /*#__PURE__*/React.createElement(Loader, {
        variant: "border-top"
      })),
      getByTestId = _render2.getByTestId;
    expect(getByTestId('border-top-loader')).toBeTruthy();
  });
  it('renders the dots loader', function () {
    var _render3 = render( /*#__PURE__*/React.createElement(Loader, {
        variant: "dots"
      })),
      getByTestId = _render3.getByTestId;
    expect(getByTestId('dots-loader')).toBeTruthy();
    expect(getByTestId('dot1')).toBeTruthy();
    expect(getByTestId('dot2')).toBeTruthy();
    expect(getByTestId('dot3')).toBeTruthy();
  });
});