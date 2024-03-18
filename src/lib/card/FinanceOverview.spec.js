import { render } from '@testing-library/react';
import FinanceOverview from './FinanceOverview';
describe('FinanceOverview', function () {
  it('should render successfully', function () {
    var _render = render( /*#__PURE__*/React.createElement(FinanceOverview, {
        title: '',
        invoicesRecap: {
          total: 152012,
          overdue: 45210,
          upcomingPayment: 106802
        },
        expired: 945210,
        notDue: 106802
      })),
      baseElement = _render.baseElement;
    expect(baseElement).toBeTruthy();
  });
});