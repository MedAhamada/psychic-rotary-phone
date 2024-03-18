import { render } from '@testing-library/react';
import FinanceOverview from './FinanceOverview';

describe('FinanceOverview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FinanceOverview
        title={''}
        invoicesRecap={{
          total: 152012,
          overdue: 45210,
          upcomingPayment: 106802,
        }}
        expired={945210}
        notDue={106802}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
