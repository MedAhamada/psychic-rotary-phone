function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
export var Pagination = function Pagination(_ref) {
  var entriesPerPage = _ref.entriesPerPage,
    _ref$currentPage = _ref.currentPage,
    currentPage = _ref$currentPage === void 0 ? 1 : _ref$currentPage,
    total = _ref.total,
    pageSize = _ref.pageSize,
    onChange = _ref.onChange,
    separatorText = _ref.separatorText,
    resultText = _ref.resultText,
    entriesText = _ref.entriesText;
  var _useState = useState(currentPage),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  useEffect(function () {
    setPage(currentPage);
  }, [currentPage]);
  var handlePrev = function handlePrev() {
    setPage(function (prevPage) {
      var newPage = Math.max(prevPage - 1, 1);
      if (newPage !== prevPage) {
        onChange(newPage, pageSize);
      }
      return newPage;
    });
  };
  var handleNext = function handleNext() {
    setPage(function (prevPage) {
      var newPage = Math.min(prevPage + 1, Math.ceil(total / pageSize));
      if (newPage !== prevPage) {
        onChange(newPage, pageSize);
      }
      return newPage;
    });
  };
  var handleChange = function handleChange(toPage) {
    if (toPage !== page) {
      setPage(toPage);
      onChange(toPage, pageSize);
    }
  };
  var handlePageSizeChange = function handlePageSizeChange(selectedPageSize) {
    var totalPages = Math.ceil(total / selectedPageSize);
    var newPage = Math.min(page, totalPages);
    if (newPage !== page || selectedPageSize !== pageSize) {
      setPage(newPage);
      onChange(newPage, selectedPageSize);
    }
  };
  var renderPageButtons = function renderPageButtons() {
    var totalPages = Math.ceil(total / pageSize);
    var pageButtons = [];
    var maxVisiblePages = 5;
    var _loop = function _loop(i) {
      if (i === 1 || i === totalPages || i >= page - Math.floor(maxVisiblePages / 2) && i <= page + Math.floor(maxVisiblePages / 2)) {
        pageButtons.push( /*#__PURE__*/React.createElement("button", {
          key: i,
          className: "".concat(styles['number'], " ").concat(page === i && styles['active']),
          onClick: function onClick() {
            return handleChange(i);
          }
        }, /*#__PURE__*/React.createElement(Text, {
          variant: 'paragraph-small'
        }, i)));
      } else if (i === page - Math.floor(maxVisiblePages / 2) - 1 && page - Math.floor(maxVisiblePages / 2) > 2 || i === page + Math.floor(maxVisiblePages / 2) + 1 && page + Math.floor(maxVisiblePages / 2) < totalPages - 1) {
        if (i !== 1 && i !== totalPages) {
          pageButtons.push( /*#__PURE__*/React.createElement("span", {
            key: i,
            className: "".concat(styles['threedots']),
            "aria-label": "pagination threedots"
          }, "..."));
        }
      }
    };
    for (var i = 1; i <= totalPages; i++) {
      _loop(i);
    }
    return pageButtons;
  };
  var renderResultsRange = function renderResultsRange() {
    var startResult = (page - 1) * pageSize + 1;
    var endResult = Math.min(page * pageSize, total);
    return "".concat(startResult, "-").concat(endResult, " ").concat(separatorText, " ").concat(total, " ").concat(resultText);
  };
  var _PagesSizes = [{
    label: '10',
    key: '10'
  }, {
    label: '20',
    key: '20'
  }, {
    label: '50',
    key: '50'
  }, {
    label: '100',
    key: '100'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-between-center ".concat(styles['pagination-container']),
    "data-testid": 'pagination-component'
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-y-center gap-sm"
  }, entriesPerPage && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dropdown, {
    items: _PagesSizes,
    value: pageSize,
    "data-testid": 'entries-per-page',
    onChange: function onChange(selectedPageSize) {
      return handlePageSizeChange(selectedPageSize);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small'
  }, entriesText))), /*#__PURE__*/React.createElement("div", {
    className: "flex-y-center gap-xs"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: 'paragraph-small',
    className: "".concat(styles['results-number'])
  }, renderResultsRange()), /*#__PURE__*/React.createElement("button", {
    className: "".concat(styles['number']),
    onClick: handlePrev,
    "aria-label": "pagination previous"
  }, /*#__PURE__*/React.createElement(IconChevronLeft, {
    size: 10
  })), renderPageButtons(), /*#__PURE__*/React.createElement("button", {
    className: "".concat(styles['number']),
    onClick: handleNext,
    "aria-label": "pagination next"
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    size: 10
  }))));
};
export default Pagination;