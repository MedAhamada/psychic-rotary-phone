import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Range from './range';

describe('Range component', () => {
  const onFilter = jest.fn();
  const onReset = jest.fn();

  beforeEach(() => {
    render(
      <Range onFilter={onFilter} onReset={onReset} colAccessor={'test'} />
    );
  });

  it('should open and close the filter when the button is clicked', () => {
    const button = screen.getByTestId('open-test-range-filter');
    expect(button).toBeTruthy();
    fireEvent.click(button);

    const filterContainer = screen.getByTestId('test-range-filter');
    expect(filterContainer).toBeTruthy();
    fireEvent.click(button);
  });

  it('should enter and clear the min and max values in the input fields', () => {
    const button = screen.getByTestId('open-test-range-filter');
    fireEvent.click(button);

    const minInput = screen.getByTestId('test-filter-min-input');
    const maxInput = screen.getByTestId('test-filter-max-input');

    fireEvent.change(minInput, { target: { value: '100' } });
    fireEvent.change(maxInput, { target: { value: '200' } });

    const resetButton = screen.getByTestId('reset-test-range-filter');
    fireEvent.click(resetButton);
  });

  it('should apply the filter when the apply button is clicked', () => {
    const button = screen.getByTestId('open-test-range-filter');
    fireEvent.click(button);

    const minInput = screen.getByTestId('test-filter-min-input');
    const maxInput = screen.getByTestId('test-filter-max-input');

    fireEvent.change(minInput, { target: { value: '100' } });
    fireEvent.change(maxInput, { target: { value: '200' } });

    const applyButton = screen.getByTestId('apply-test-range-filter');
    fireEvent.click(applyButton);
    expect(onFilter).toHaveBeenCalledWith('100', '200');
  });
});
