import React, { Fragment, useState } from 'react';
import { DateFilter, RangeFilter, SortingButton, TagsFilter } from '../filters';
import Pagination from '../pagination/pagination';
import Text from '../text/text';

import styles from './table.module.css';
import { Loader } from '../loader/loader';
import { Checkbox, Popover } from 'antd';
import { IconChevronDown, IconChevronRight, IconInfo } from '../icons';

/**
 * Table Component - A reusable table component with sorting, filtering, and pagination.
 *
 * @component
 * @param expandable
 * @param isLoading
 * @param cta
 * @param separatorText
 * @param resultText
 * @param entriesText
 * @param {Object} props - The properties passed to the component.
 * @param {Array<Object>} props.data - The array of data to be displayed in the table.
 * @param {Array<Object>} props.columns - The array of column configurations for the table.
 * @param {boolean} props.usePagination - Whether to render the Pagination Component or not.
 * @param {number} props.totalItems - The total number of items for pagination.
 * @param {number} props.pageSize - The number of items per page for pagination.
 * @param {number} props.pageNumber - The current page number for pagination.
 * @param {Function} props.onChangePagination - The function to handle page change in pagination.
 * @param {boolean} props.checkableRows - Whether to make rows chackables
 * @param {Function} props.onCheckRowChange - The function to handle row checking: return checked items
 * @param {Function} props.expandable.rowExpandable - Condition to determine whether a row can be expandable: Callback must return a boolean
 * @param {Function} props.expandable.renderExpandedRow - Render of the expender row
 * @returns {JSX.Element} The Table component.
 * @example
 * <Table
 *   columns={columns}
 *   data={data}
 *   usePagination={true}
 *   totalItems={100}
 *   pageSize={10}
 *   pageNumber={1}
 *   onChangePagination={(page, pageSize) => console.log(page, pageSize)}
 *   checkableRows={true}
 *   onCheckRowChange={(items) => console.log(items)}
 *   expandable={{
 *     rowExpandable: (item) => !!item.isActive,
 *     renderExpandedRow: (item) => (
 *       <tr>
 *         <td colSpan={columns.length}>Content</td>
 *       </tr>
 *     ),
 *   }}
 * />;
 */
export const Table = ({
  entriesPerPage = true,
  data,
  columns,
  expandable,
  usePagination,
  checkableRows,
  onCheckRowChange,
  isLoading,
  cta,
  paginationSeparatorText,
  paginationResultText,
  paginationEntriesText,
  ...props
}) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [checkedRows, setCheckedRows] = useState([]);

  const handleRowClick = (index) => {
    setExpandedRows((prevRows) =>
      prevRows.includes(index)
        ? prevRows.filter((rowIndex) => rowIndex !== index)
        : [...prevRows, index]
    );
  };

  const isEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

  const handleCheckRow = (item) => {
    setCheckedRows((prev) => {
      let updatedRows;
      if (prev.some((row) => isEqual(row, item))) {
        updatedRows = prev.filter((row) => !isEqual(row, item));
      } else {
        updatedRows = [...checkedRows, item];
      }
      onCheckRowChange(updatedRows);
      return updatedRows;
    });
  };

  return (
    <div className={`${styles['table-container']}`}>
      <table className={`${styles['table']}`} data-testid={'table-element'}>
        <thead className={`${styles['thead']}`}>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} data-testid={`th-${column.accessor}`}>
                <div className="flex-start relative gap-xs">
                  <Text variant={'heading-5'}>{column.Header}</Text>
                  {column.info && (
                    <Popover content={column.info}>
                      <span>
                        <IconInfo />
                      </span>
                    </Popover>
                  )}
                  {column.sorting && (
                    <SortingButton
                      sortingAction={column.sortAction}
                      sort={column.sorting}
                      data-testid={`sorting-button-${column.accessor}`}
                    />
                  )}
                  {column.filterType === 'date' && (
                    <DateFilter
                      onFilter={column.filterAction}
                      onReset={column.resetFilter}
                      colAccessor={column.accessor}
                    />
                  )}
                  {column.filterType === 'range' && (
                    <RangeFilter
                      onFilter={column.filterAction}
                      onReset={column.resetFilter}
                      colAccessor={column.accessor}
                    />
                  )}
                  {column.filterType === 'tags' && (
                    <TagsFilter
                      options={column.tagsOptions}
                      onFilter={column.filterAction}
                      onReset={column.resetFilter}
                      colAccessor={column.accessor}
                    />
                  )}
                </div>
              </th>
            ))}
            {checkableRows && <th></th>}
          </tr>
        </thead>

        <tbody className={`${styles['tbody']}`}>
          {data &&
            data.map((item, i) => (
              <Fragment key={i}>
                <tr
                  data-testid={`tr-${i}`}
                  onClick={() => handleRowClick(i)}
                  className={
                    (expandable?.rowExpandable(item) &&
                      expandedRows.includes(i)) ||
                    checkedRows.some((row) => isEqual(row, item))
                      ? styles['active-row']
                      : ''
                  }
                >
                  {columns.map((column, index) => (
                    <td
                      key={column.accessor}
                      onClick={() =>
                        column.onCellClick && column.onCellClick(item)
                      }
                      style={column.style}
                      className={column.className}
                      role={'cell'}
                      data-testid={`td-${column.accessor}-${i}`}
                    >
                      <div
                        className={
                          'w-full ' + expandable?.rowExpandable(item)
                            ? 'flex-y-center gap-md'
                            : ''
                        }
                      >
                        {index === 0 &&
                          expandable?.rowExpandable(item) &&
                          (expandedRows.includes(i) ? (
                            <IconChevronDown
                              style={{ color: 'var(--gray-dark)' }}
                              size={12}
                            />
                          ) : (
                            <IconChevronRight
                              style={{ color: 'var(--gray-dark)' }}
                              size={12}
                            />
                          ))}

                        {column.render ? (
                          <div className={'w-full flex-wrap gap-sm'}>
                            {column.render(item)}
                          </div>
                        ) : (
                          <Text variant={'paragraph-small'}>
                            {item[column.accessor]}
                          </Text>
                        )}
                      </div>
                    </td>
                  ))}
                  {checkableRows && (
                    <td
                      className={`${
                        checkedRows.some((row) => isEqual(row, item))
                          ? styles['checked-row']
                          : ''
                      }`}
                    >
                      <Checkbox
                        onChange={() => handleCheckRow(item)}
                        onClick={(e) => e.stopPropagation()}
                        checked={checkedRows.some((row) => isEqual(row, item))}
                      />
                    </td>
                  )}
                </tr>
                {expandable?.rowExpandable(item) &&
                  expandedRows.includes(i) &&
                  expandable.renderExpandedRow(item)}
              </Fragment>
            ))}
        </tbody>
      </table>

      <div className={styles['tfoot']}>
        {isLoading && (
          <div className={`${styles['tfoot-row']} flex-center`}>
            <Loader />
          </div>
        )}
        {cta && <div className={`${styles['tfoot-row']}`}>{cta}</div>}
      </div>

      {usePagination && (
        <Pagination
          total={props.total}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onChange={(page, pageSize) =>
            props.onChangePagination(page, pageSize)
          }
          separatorText={paginationSeparatorText}
          resultText={paginationResultText}
          entriesPerPage={entriesPerPage}
          entriesText={paginationEntriesText}
        />
      )}
    </div>
  );
};

export default Table;
