import { render } from '@testing-library/react';
import Button from './button';
describe('Button', function () {
  it('should render successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(Button, {
        text: "demo button"
      })),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});