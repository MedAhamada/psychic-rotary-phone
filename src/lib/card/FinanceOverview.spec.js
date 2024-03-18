var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/card/FinanceOverview.spec.jsx",
  _this = this;
import { render } from '@testing-library/react';
import FinanceOverview from './FinanceOverview';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('FinanceOverview', function () {
  it('should render successfully', function () {
    var _render = render( /*#__PURE__*/_jsxDEV(FinanceOverview, {
        title: '',
        invoicesRecap: {
          total: 152012,
          overdue: 45210,
          upcomingPayment: 106802
        },
        expired: 945210,
        notDue: 106802
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }, _this)),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});