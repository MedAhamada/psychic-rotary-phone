import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Table from './table';

describe('Table component', () => {
  const columns = [
    {
      Header: 'Username',
      accessor: 'username',
      sorting: 'none',
      sortAction: jest.fn(),
    },
    {
      Header: 'Age',
      accessor: 'age',
      sorting: 'none',
      filterType: 'range',
      filterAction: jest.fn(),
      resetFilter: jest.fn(),
    },
    {
      Header: 'Profession',
      accessor: 'profession',
      sorting: 'none',
      sortAction: jest.fn(),
    },
    {
      Header: 'Likes',
      accessor: 'likes',
      filterType: 'tags',
      tagsOptions: [
        { label: 'Sport', value: 'sport' },
        { label: 'Travel', value: 'travel' },
      ],
      filterAction: jest.fn(),
      resetFilter: jest.fn(),
    },
  ];

  const data = [
    { username: 'John', age: 25, profession: 'Engineer', like: ['sport'] },
    { username: 'Alice', age: 30, profession: 'Designer', like: ['travel'] },
  ];

  const usePagination = true;

  const props = {
    data,
    columns,
    usePagination: usePagination,
    total: 20,
    pageSize: 10,
    currentPage: 1,
    onChangePagination: jest.fn(),
  };
  it('should render a table element with thead and tbody', async () => {
    const { baseElement, getByTestId, getAllByRole } = render(
      <Table {...props} />
    );

    expect(baseElement).toBeTruthy();
    expect(getAllByRole('rowgroup')).toBeTruthy();
    expect(getAllByRole('row')).toBeTruthy();

    columns.forEach(async (column) => {
      if (column.sorting) {
        const sortingButton = getByTestId(`sorting-button-${column.accessor}`);
        expect(sortingButton).toBeTruthy();
      }

      if (column.filterType === 'date') {
        const dateFilter = getByTestId(`open-${column.accessor}-date-filter`);
        expect(dateFilter).toBeTruthy();
        fireEvent.click(dateFilter);
        await waitFor(() =>
          expect(getByTestId(`${column.accessor}-date-filter`)).toBeTruthy()
        );
      } else if (column.filterType === 'range') {
        const rangeFilter = getByTestId(`open-${column.accessor}-range-filter`);
        expect(rangeFilter).toBeTruthy();
        fireEvent.click(rangeFilter);
        await waitFor(() =>
          expect(getByTestId(`${column.accessor}-range-filter`)).toBeTruthy()
        );
      } else if (column.filterType === 'tags') {
        const tagsFilter = getByTestId(`open-${column.accessor}-tags-filter`);
        expect(tagsFilter).toBeTruthy();
        fireEvent.click(tagsFilter);
        await waitFor(() =>
          expect(getByTestId(`${column.accessor}-tags-filter`)).toBeTruthy()
        );
      }

      const th = getByTestId(`th-${column.accessor}`);
      expect(th).toBeTruthy();
    });

    data.forEach((item, i) => {
      const tr = getByTestId(`tr-${i}`);
      expect(tr).toBeTruthy();
      columns.forEach((column) => {
        const td = getByTestId(`td-${column.accessor}-${i}`);
        expect(td).toBeTruthy();
      });
    });

    if (usePagination) {
      const pagination = getByTestId('pagination-component');
      expect(pagination).toBeTruthy();
    }
  });
});
