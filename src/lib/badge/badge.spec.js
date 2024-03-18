import { render } from '@testing-library/react';
import Badge from './badge';
describe('Badge', function () {
  it('should render successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(Badge, {
        variant: "green",
        text: "Title",
        size: "large"
      })),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});