import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["entriesPerPage", "data", "columns", "expandable", "usePagination", "checkableRows", "onCheckRowChange", "isLoading", "cta", "paginationSeparatorText", "paginationResultText", "paginationEntriesText"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/table/table.jsx",
  _this = this;
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.some.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.string.includes.js";
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export var Table = function Table(_ref) {
  var _ref$entriesPerPage = _ref.entriesPerPage,
    entriesPerPage = _ref$entriesPerPage === void 0 ? true : _ref$entriesPerPage,
    data = _ref.data,
    columns = _ref.columns,
    expandable = _ref.expandable,
    usePagination = _ref.usePagination,
    checkableRows = _ref.checkableRows,
    onCheckRowChange = _ref.onCheckRowChange,
    isLoading = _ref.isLoading,
    cta = _ref.cta,
    paginationSeparatorText = _ref.paginationSeparatorText,
    paginationResultText = _ref.paginationResultText,
    paginationEntriesText = _ref.paginationEntriesText,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useState = useState([]),
    expandedRows = _useState[0],
    setExpandedRows = _useState[1];
  var _useState2 = useState([]),
    checkedRows = _useState2[0],
    setCheckedRows = _useState2[1];
  var handleRowClick = function handleRowClick(index) {
    setExpandedRows(function (prevRows) {
      return prevRows.includes(index) ? prevRows.filter(function (rowIndex) {
        return rowIndex !== index;
      }) : [].concat(prevRows, [index]);
    });
  };
  var isEqual = function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };
  var handleCheckRow = function handleCheckRow(item) {
    setCheckedRows(function (prev) {
      var updatedRows;
      if (prev.some(function (row) {
        return isEqual(row, item);
      })) {
        updatedRows = prev.filter(function (row) {
          return !isEqual(row, item);
        });
      } else {
        updatedRows = [].concat(checkedRows, [item]);
      }
      onCheckRowChange(updatedRows);
      return updatedRows;
    });
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: "" + styles['table-container'],
    children: [/*#__PURE__*/_jsxDEV("table", {
      className: "" + styles['table'],
      "data-testid": 'table-element',
      children: [/*#__PURE__*/_jsxDEV("thead", {
        className: "" + styles['thead'],
        children: /*#__PURE__*/_jsxDEV("tr", {
          children: [columns.map(function (column) {
            return /*#__PURE__*/_jsxDEV("th", {
              "data-testid": "th-" + column.accessor,
              children: /*#__PURE__*/_jsxDEV("div", {
                className: "flex-start relative gap-xs",
                children: [/*#__PURE__*/_jsxDEV(Text, {
                  variant: 'heading-5',
                  children: column.Header
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, _this), column.info && /*#__PURE__*/_jsxDEV(Popover, {
                  content: column.info,
                  children: /*#__PURE__*/_jsxDEV("span", {
                    children: /*#__PURE__*/_jsxDEV(IconInfo, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 21
                }, _this), column.sorting && /*#__PURE__*/_jsxDEV(SortingButton, {
                  sortingAction: column.sortAction,
                  sort: column.sorting,
                  "data-testid": "sorting-button-" + column.accessor
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 21
                }, _this), column.filterType === 'date' && /*#__PURE__*/_jsxDEV(DateFilter, {
                  onFilter: column.filterAction,
                  onReset: column.resetFilter,
                  colAccessor: column.accessor
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 21
                }, _this), column.filterType === 'range' && /*#__PURE__*/_jsxDEV(RangeFilter, {
                  onFilter: column.filterAction,
                  onReset: column.resetFilter,
                  colAccessor: column.accessor
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 21
                }, _this), column.filterType === 'tags' && /*#__PURE__*/_jsxDEV(TagsFilter, {
                  options: column.tagsOptions,
                  onFilter: column.filterAction,
                  onReset: column.resetFilter,
                  colAccessor: column.accessor
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this)
            }, column.accessor, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this);
          }), checkableRows && /*#__PURE__*/_jsxDEV("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 31
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("tbody", {
        className: "" + styles['tbody'],
        children: data && data.map(function (item, i) {
          return /*#__PURE__*/_jsxDEV(Fragment, {
            children: [/*#__PURE__*/_jsxDEV("tr", {
              "data-testid": "tr-" + i,
              onClick: function onClick() {
                return handleRowClick(i);
              },
              className: expandable != null && expandable.rowExpandable(item) && expandedRows.includes(i) || checkedRows.some(function (row) {
                return isEqual(row, item);
              }) ? styles['active-row'] : '',
              children: [columns.map(function (column, index) {
                return /*#__PURE__*/_jsxDEV("td", {
                  onClick: function onClick() {
                    return column.onCellClick && column.onCellClick(item);
                  },
                  style: column.style,
                  className: column.className,
                  role: 'cell',
                  "data-testid": "td-" + column.accessor + "-" + i,
                  children: /*#__PURE__*/_jsxDEV("div", {
                    className: 'w-full ' + (expandable == null ? void 0 : expandable.rowExpandable(item)) ? 'flex-y-center gap-md' : '',
                    children: [index === 0 && (expandable == null ? void 0 : expandable.rowExpandable(item)) && (expandedRows.includes(i) ? /*#__PURE__*/_jsxDEV(IconChevronDown, {
                      style: {
                        color: 'var(--gray-dark)'
                      },
                      size: 12
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 29
                    }, _this) : /*#__PURE__*/_jsxDEV(IconChevronRight, {
                      style: {
                        color: 'var(--gray-dark)'
                      },
                      size: 12
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 29
                    }, _this)), column.render ? /*#__PURE__*/_jsxDEV("div", {
                      className: 'w-full flex-wrap gap-sm',
                      children: column.render(item)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 27
                    }, _this) : /*#__PURE__*/_jsxDEV(Text, {
                      variant: 'paragraph-small',
                      children: item[column.accessor]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 23
                  }, _this)
                }, column.accessor, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 21
                }, _this);
              }), checkableRows && /*#__PURE__*/_jsxDEV("td", {
                className: "" + (checkedRows.some(function (row) {
                  return isEqual(row, item);
                }) ? styles['checked-row'] : ''),
                children: /*#__PURE__*/_jsxDEV(Checkbox, {
                  onChange: function onChange() {
                    return handleCheckRow(item);
                  },
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  },
                  checked: checkedRows.some(function (row) {
                    return isEqual(row, item);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }, _this), (expandable == null ? void 0 : expandable.rowExpandable(item)) && expandedRows.includes(i) && expandable.renderExpandedRow(item)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: styles['tfoot'],
      children: [isLoading && /*#__PURE__*/_jsxDEV("div", {
        className: styles['tfoot-row'] + " flex-center",
        children: /*#__PURE__*/_jsxDEV(Loader, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 11
      }, _this), cta && /*#__PURE__*/_jsxDEV("div", {
        className: "" + styles['tfoot-row'],
        children: cta
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, _this), usePagination && /*#__PURE__*/_jsxDEV(Pagination, {
      total: props.total,
      pageSize: props.pageSize,
      currentPage: props.currentPage,
      onChange: function onChange(page, pageSize) {
        return props.onChangePagination(page, pageSize);
      },
      separatorText: paginationSeparatorText,
      resultText: paginationResultText,
      entriesPerPage: entriesPerPage,
      entriesText: paginationEntriesText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, _this);
};
export default Table;