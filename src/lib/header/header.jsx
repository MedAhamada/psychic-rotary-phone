import React from 'react';
import { Text } from '../text/text';

export const Header = ({ heading, button }) => {
  return (
    <div className={'header-container'}>
      <div className="">
        {typeof heading === 'string' || typeof heading === 'number' ? (
          <Text variant={'heading-1'}>{heading}</Text>
        ) : (
          heading
        )}
      </div>
      <div className="">{button}</div>
    </div>
  );
};
