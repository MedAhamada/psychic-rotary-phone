import { render } from '@testing-library/react';
import Welcome from './welcome';
describe('Welcome', function () {
  it('should render successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(Welcome, {
        title: "delo"
      })),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});