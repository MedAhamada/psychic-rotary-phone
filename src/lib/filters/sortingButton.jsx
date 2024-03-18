import React, { useEffect, useState } from 'react';
import { IconSort, IconSortDown, IconSortUp } from '../icons';

const SortingButton = ({ sortingAction, sort, ...props }) => {
  const [sorting, setSorting] = useState(sort || 'none');

  useEffect(() => {
    setSorting(sort);
  }, [sort]);

  const handleChangeSort = () => {
    if (sorting === 'none') {
      sortingAction('ASC');
    } else if (sorting === 'ASC') {
      sortingAction('DESC');
    } else {
      sortingAction('none');
    }
  };
  return (
    <button className={'flex-center'} onClick={handleChangeSort} {...props}>
      {sorting === 'ASC' && (
        <IconSortUp size={24} data-testid={'icon-sort-asc'} />
      )}
      {sorting === 'DESC' && (
        <IconSortDown size={24} data-testid={'icon-sort-desc'} />
      )}
      {sorting === 'none' && (
        <IconSort size={24} data-testid={'icon-sort-none'} />
      )}
    </button>
  );
};

export default SortingButton;
