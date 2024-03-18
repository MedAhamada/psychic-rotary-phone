import React, { useEffect, useState } from 'react';
import Text from '../text/text';
import { IconChevronLeft, IconChevronRight } from '../icons';
import { Dropdown } from '../dropdown/dropdown';

import styles from './pagination.module.css';

/**
 * A pagination component that displays the current page, total pages, and page size options.
 * It also allows the user to navigate to the previous, next, or any specific page, and change the page size.
 * It calls the onChange function with the new page and page size whenever they change.
 * @param {Object} props The props of the component
 * @param {number} props.currentPage The current page number, default: 1
 * @param {number} props.total The total number of items
 * @param {number} props.pageSize The number of items per page
 * @param {function} props.onChange The function to be called when the page or page size changes
 * @return {JSX.Element} The pagination component
 * @example
 * <Pagination
 *   currentPage={1}
 *   total={100}
 *   pageSize={10}
 *   onChange={(page, pageSize) => console.log(page, pageSize)}
 * />
 */
export const Pagination = ({
  entriesPerPage,
  currentPage = 1,
  total,
  pageSize,
  onChange,
  separatorText,
  resultText,
  entriesText,
}) => {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const handlePrev = () => {
    setPage((prevPage) => {
      const newPage = Math.max(prevPage - 1, 1);
      if (newPage !== prevPage) {
        onChange(newPage, pageSize);
      }
      return newPage;
    });
  };

  const handleNext = () => {
    setPage((prevPage) => {
      const newPage = Math.min(prevPage + 1, Math.ceil(total / pageSize));
      if (newPage !== prevPage) {
        onChange(newPage, pageSize);
      }
      return newPage;
    });
  };

  const handleChange = (toPage) => {
    if (toPage !== page) {
      setPage(toPage);
      onChange(toPage, pageSize);
    }
  };

  const handlePageSizeChange = (selectedPageSize) => {
    const totalPages = Math.ceil(total / selectedPageSize);
    const newPage = Math.min(page, totalPages);

    if (newPage !== page || selectedPageSize !== pageSize) {
      setPage(newPage);
      onChange(newPage, selectedPageSize);
    }
  };

  const renderPageButtons = () => {
    const totalPages = Math.ceil(total / pageSize);
    const pageButtons = [];
    const maxVisiblePages = 5;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - Math.floor(maxVisiblePages / 2) &&
          i <= page + Math.floor(maxVisiblePages / 2))
      ) {
        pageButtons.push(
          <button
            key={i}
            className={`${styles['number']} ${page === i && styles['active']}`}
            onClick={() => handleChange(i)}
          >
            <Text variant={'paragraph-small'}>{i}</Text>
          </button>
        );
      } else if (
        (i === page - Math.floor(maxVisiblePages / 2) - 1 &&
          page - Math.floor(maxVisiblePages / 2) > 2) ||
        (i === page + Math.floor(maxVisiblePages / 2) + 1 &&
          page + Math.floor(maxVisiblePages / 2) < totalPages - 1)
      ) {
        if (i !== 1 && i !== totalPages) {
          pageButtons.push(
            <span
              key={i}
              className={`${styles['threedots']}`}
              aria-label="pagination threedots"
            >
              ...
            </span>
          );
        }
      }
    }

    return pageButtons;
  };

  const renderResultsRange = () => {
    const startResult = (page - 1) * pageSize + 1;
    const endResult = Math.min(page * pageSize, total);

    return `${startResult}-${endResult} ${separatorText} ${total} ${resultText}`;
  };

  const _PagesSizes = [
    {
      label: '10',
      key: '10',
    },
    {
      label: '20',
      key: '20',
    },
    {
      label: '50',
      key: '50',
    },
    {
      label: '100',
      key: '100',
    },
  ];

  return (
    <div
      className={`flex-between-center ${styles['pagination-container']}`}
      data-testid={'pagination-component'}
    >
      <div className="flex-y-center gap-sm">
        {entriesPerPage && (
          <>
            <Dropdown
              items={_PagesSizes}
              value={pageSize}
              data-testid={'entries-per-page'}
              onChange={(selectedPageSize) =>
                handlePageSizeChange(selectedPageSize)
              }
            />
            <Text variant={'paragraph-small'}>{entriesText}</Text>
          </>
        )}
      </div>

      <div className="flex-y-center gap-xs">
        <Text
          variant={'paragraph-small'}
          className={`${styles['results-number']}`}
        >
          {renderResultsRange()}
        </Text>

        <button
          className={`${styles['number']}`}
          onClick={handlePrev}
          aria-label="pagination previous"
        >
          <IconChevronLeft size={10} />
        </button>

        {renderPageButtons()}

        <button
          className={`${styles['number']}`}
          onClick={handleNext}
          aria-label="pagination next"
        >
          <IconChevronRight size={10} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
