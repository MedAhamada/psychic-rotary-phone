import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import DateFilter from './date';
import dayjs from 'dayjs';

describe('DateFilter Component', () => {
  it('renders the component and interacts with it', async () => {
    const mockOnFilter = jest.fn();
    const mockOnReset = jest.fn();

    render(
      <DateFilter
        onFilter={mockOnFilter}
        onReset={mockOnReset}
        colAccessor={'test'}
      />
    );

    fireEvent.click(screen.getByTestId('open-test-date-filter'));

    await waitFor(() =>
      expect(screen.getByTestId('test-date-filter')).toBeTruthy()
    );

    fireEvent.change(screen.getByTestId('test-filter-input-date-from'), {
      target: { value: dayjs('2022-01-01').format('DD-MM-YYYY') },
    });

    fireEvent.change(screen.getByTestId('test-filter-input-date-to'), {
      target: { value: dayjs('2022-01-10').format('DD-MM-YYYY') },
    });

    fireEvent.click(screen.getByTestId('apply-test-date-filter'));
    // expect(mockOnFilter).toHaveBeenCalled();

    // fireEvent.click(screen.getByTestId('reset-test-date-filter'));
    // expect(mockOnReset).toHaveBeenCalled();
  });

  it('displays an error message for empty dates', () => {
    render(
      <DateFilter
        onFilter={() => jest.fn()}
        onReset={() => jest.fn()}
        colAccessor={'test'}
      />
    );

    fireEvent.click(screen.getByTestId('open-test-date-filter'));
    fireEvent.click(screen.getByTestId('apply-test-date-filter'));

    expect(screen.getByTestId('test-date-filter-error-inputs')).toBeTruthy();
  });
});
