var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/radioGroup/radioGroup.spec.jsx",
  _this = this;
import "core-js/modules/es.object.assign.js";
import React from 'react';
import { render } from '@testing-library/react';
import RadioGroup from './radioGroup';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('RadioGroup Component', function () {
  var defaultProps = {
    name: 'testRadioGroup',
    defaultValue: 'default',
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }],
    onChange: jest.fn()
  };
  it('renders successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(RadioGroup, Object.assign({}, defaultProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 36
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});