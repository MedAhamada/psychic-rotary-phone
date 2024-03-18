import { render } from '@testing-library/react';
import ContactUs from './ContactUs';
describe('ContactUs', function () {
  it('should render successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(ContactUs, null)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});