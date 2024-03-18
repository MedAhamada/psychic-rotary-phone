import React from 'react';
import { render } from '@testing-library/react';
import LanguageSelect from './languageSelect';
describe('LanguageSelect Component', function () {
  var defaultProps = {
    onSelect: jest.fn()
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(LanguageSelect, defaultProps)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});