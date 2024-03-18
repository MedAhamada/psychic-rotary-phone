var _excluded = ["entriesPerPage", "data", "columns", "expandable", "usePagination", "checkableRows", "onCheckRowChange", "isLoading", "cta", "paginationSeparatorText", "paginationResultText", "paginationEntriesText"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    expandedRows = _useState2[0],
    setExpandedRows = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedRows = _useState4[0],
    setCheckedRows = _useState4[1];
  var handleRowClick = function handleRowClick(index) {
    setExpandedRows(function (prevRows) {
      return prevRows.includes(index) ? prevRows.filter(function (rowIndex) {
        return rowIndex !== index;
      }) : [].concat(_toConsumableArray(prevRows), [index]);
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
        updatedRows = [].concat(_toConsumableArray(checkedRows), [item]);
      }
      onCheckRowChange(updatedRows);
      return updatedRows;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles['table-container'])
  }, /*#__PURE__*/React.createElement("table", {
    className: "".concat(styles['table']),
    "data-testid": 'table-element'
  }, /*#__PURE__*/React.createElement("thead", {
    className: "".concat(styles['thead'])
  }, /*#__PURE__*/React.createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/React.createElement("th", {
      key: column.accessor,
      "data-testid": "th-".concat(column.accessor)
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-start relative gap-xs"
    }, /*#__PURE__*/React.createElement(Text, {
      variant: 'heading-5'
    }, column.Header), column.info && /*#__PURE__*/React.createElement(Popover, {
      content: column.info
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(IconInfo, null))), column.sorting && /*#__PURE__*/React.createElement(SortingButton, {
      sortingAction: column.sortAction,
      sort: column.sorting,
      "data-testid": "sorting-button-".concat(column.accessor)
    }), column.filterType === 'date' && /*#__PURE__*/React.createElement(DateFilter, {
      onFilter: column.filterAction,
      onReset: column.resetFilter,
      colAccessor: column.accessor
    }), column.filterType === 'range' && /*#__PURE__*/React.createElement(RangeFilter, {
      onFilter: column.filterAction,
      onReset: column.resetFilter,
      colAccessor: column.accessor
    }), column.filterType === 'tags' && /*#__PURE__*/React.createElement(TagsFilter, {
      options: column.tagsOptions,
      onFilter: column.filterAction,
      onReset: column.resetFilter,
      colAccessor: column.accessor
    })));
  }), checkableRows && /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", {
    className: "".concat(styles['tbody'])
  }, data && data.map(function (item, i) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("tr", {
      "data-testid": "tr-".concat(i),
      onClick: function onClick() {
        return handleRowClick(i);
      },
      className: expandable !== null && expandable !== void 0 && expandable.rowExpandable(item) && expandedRows.includes(i) || checkedRows.some(function (row) {
        return isEqual(row, item);
      }) ? styles['active-row'] : ''
    }, columns.map(function (column, index) {
      return /*#__PURE__*/React.createElement("td", {
        key: column.accessor,
        onClick: function onClick() {
          return column.onCellClick && column.onCellClick(item);
        },
        style: column.style,
        className: column.className,
        role: 'cell',
        "data-testid": "td-".concat(column.accessor, "-").concat(i)
      }, /*#__PURE__*/React.createElement("div", {
        className: 'w-full ' + (expandable === null || expandable === void 0 ? void 0 : expandable.rowExpandable(item)) ? 'flex-y-center gap-md' : ''
      }, index === 0 && (expandable === null || expandable === void 0 ? void 0 : expandable.rowExpandable(item)) && (expandedRows.includes(i) ? /*#__PURE__*/React.createElement(IconChevronDown, {
        style: {
          color: 'var(--gray-dark)'
        },
        size: 12
      }) : /*#__PURE__*/React.createElement(IconChevronRight, {
        style: {
          color: 'var(--gray-dark)'
        },
        size: 12
      })), column.render ? /*#__PURE__*/React.createElement("div", {
        className: 'w-full flex-wrap gap-sm'
      }, column.render(item)) : /*#__PURE__*/React.createElement(Text, {
        variant: 'paragraph-small'
      }, item[column.accessor])));
    }), checkableRows && /*#__PURE__*/React.createElement("td", {
      className: "".concat(checkedRows.some(function (row) {
        return isEqual(row, item);
      }) ? styles['checked-row'] : '')
    }, /*#__PURE__*/React.createElement(Checkbox, {
      onChange: function onChange() {
        return handleCheckRow(item);
      },
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      checked: checkedRows.some(function (row) {
        return isEqual(row, item);
      })
    }))), (expandable === null || expandable === void 0 ? void 0 : expandable.rowExpandable(item)) && expandedRows.includes(i) && expandable.renderExpandedRow(item));
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles['tfoot']
  }, isLoading && /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles['tfoot-row'], " flex-center")
  }, /*#__PURE__*/React.createElement(Loader, null)), cta && /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles['tfoot-row'])
  }, cta)), usePagination && /*#__PURE__*/React.createElement(Pagination, {
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
  }));
};
export default Table;