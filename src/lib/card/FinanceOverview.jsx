import React from 'react';
import Text from '../text/text';

const FinanceOverview = ({ title, invoicesRecap, expired, notDue }) => {
  const PERCENTAGE = (invoicesRecap.overdue / invoicesRecap.total) * 100;
  const currencyFormat = (num) =>
    num.toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    });

  return (
    <div className={'w-full  rounded-md in-progress-client'}>
      {title && <Text variant={'heading-4'}>{title}</Text>}
      <div className="" style={{ margin: '16px 97px 0' }}>
        <Text variant={'heading-1'} align={'center'} className={'large-text'}>
          {currencyFormat(invoicesRecap.total)}
        </Text>
        <div className={'progress'}>
          <div className={'bar'} style={{ width: `${PERCENTAGE}%` }}></div>
        </div>
        <div className="flex-around-center">
          <div className={'flex-y-center gap-sm'}>
            <span className={'expired-circle'}></span>
            <Text variant={'paragraph-small'}>{expired}</Text>
            <Text variant={'paragraph-small'} className={'font-600'}>
              {currencyFormat(invoicesRecap.overdue)}
            </Text>
          </div>
          <div className={'flex-y-center gap-sm'}>
            <span className={'not-expired-circle'}></span>
            <Text variant={'paragraph-small'}>{notDue}</Text>
            <Text variant={'paragraph-small'} className={'font-600'}>
              {currencyFormat(invoicesRecap.upcomingPayment)}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceOverview;
