import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SortingButton from './sortingButton';

describe('SortingButton', () => {
  it('renders SortingButton component', async () => {
    const sortingAction = jest.fn();

    const { getByTestId, rerender } = render(
      <SortingButton
        sortingAction={sortingAction}
        sort="none"
        data-testid={`sorting-button-test`}
      />
    );
    const sortingButton = getByTestId('sorting-button-test');
    expect(sortingButton).toBeTruthy();

    await waitFor(() => expect(getByTestId('icon-sort-none')).toBeTruthy());

    rerender(<SortingButton sortingAction={sortingAction} sort="ASC" />);
    await waitFor(() => expect(getByTestId('icon-sort-asc')).toBeTruthy());

    rerender(<SortingButton sortingAction={sortingAction} sort="DESC" />);
    await waitFor(() => expect(getByTestId('icon-sort-desc')).toBeTruthy());
  });

  it('renders sorting button with ASC icon when sorting is ASC', async () => {
    const sortingAction = jest.fn();

    const { getByTestId } = render(
      <SortingButton
        sortingAction={sortingAction}
        sort="ASC"
        data-testid={`sorting-button-test`}
      />
    );
    const iconSortAsc = getByTestId('icon-sort-asc');
    expect(iconSortAsc).toBeTruthy();

    const sortingButton = getByTestId('sorting-button-test');
    fireEvent.click(sortingButton);
    expect(sortingAction).toHaveBeenCalled();
  });

  it('renders sorting button with DESC icon when sorting is DESC', async () => {
    const sortingAction = jest.fn();

    const { getByTestId } = render(
      <SortingButton
        sortingAction={sortingAction}
        sort="DESC"
        data-testid={`sorting-button-test`}
      />
    );
    const iconSortDesc = getByTestId('icon-sort-desc');
    expect(iconSortDesc).toBeTruthy();

    const sortingButton = getByTestId('sorting-button-test');
    fireEvent.click(sortingButton);
    expect(sortingAction).toHaveBeenCalled();
  });

  it('renders sorting button with none icon when sorting is none', async () => {
    const sortingAction = jest.fn();

    const { getByTestId } = render(
      <SortingButton
        sortingAction={sortingAction}
        sort="none"
        data-testid={`sorting-button-test`}
      />
    );
    const iconSortNone = getByTestId('icon-sort-none');
    expect(iconSortNone).toBeTruthy();

    const sortingButton = getByTestId('sorting-button-test');
    fireEvent.click(sortingButton);
    expect(sortingAction).toHaveBeenCalled();
  });
});
