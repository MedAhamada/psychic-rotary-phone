var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/pagination/pagination.jsx",
  _this = this;
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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { Fragment as _Fragment } from "react/jsx-dev-runtime";
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
    page = _useState[0],
    setPage = _useState[1];
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
        pageButtons.push( /*#__PURE__*/_jsxDEV("button", {
          className: styles['number'] + " " + (page === i && styles['active']),
          onClick: function onClick() {
            return handleChange(i);
          },
          children: /*#__PURE__*/_jsxDEV(Text, {
            variant: 'paragraph-small',
            children: i
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this));
      } else if (i === page - Math.floor(maxVisiblePages / 2) - 1 && page - Math.floor(maxVisiblePages / 2) > 2 || i === page + Math.floor(maxVisiblePages / 2) + 1 && page + Math.floor(maxVisiblePages / 2) < totalPages - 1) {
        if (i !== 1 && i !== totalPages) {
          pageButtons.push( /*#__PURE__*/_jsxDEV("span", {
            className: "" + styles['threedots'],
            "aria-label": "pagination threedots",
            children: "..."
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this));
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
    return startResult + "-" + endResult + " " + separatorText + " " + total + " " + resultText;
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
  return /*#__PURE__*/_jsxDEV("div", {
    className: "flex-between-center " + styles['pagination-container'],
    "data-testid": 'pagination-component',
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex-y-center gap-sm",
      children: entriesPerPage && /*#__PURE__*/_jsxDEV(_Fragment, {
        children: [/*#__PURE__*/_jsxDEV(Dropdown, {
          items: _PagesSizes,
          value: pageSize,
          "data-testid": 'entries-per-page',
          onChange: function onChange(selectedPageSize) {
            return handlePageSizeChange(selectedPageSize);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }, _this), /*#__PURE__*/_jsxDEV(Text, {
          variant: 'paragraph-small',
          children: entriesText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, _this), /*#__PURE__*/_jsxDEV("div", {
      className: "flex-y-center gap-xs",
      children: [/*#__PURE__*/_jsxDEV(Text, {
        variant: 'paragraph-small',
        className: "" + styles['results-number'],
        children: renderResultsRange()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, _this), /*#__PURE__*/_jsxDEV("button", {
        className: "" + styles['number'],
        onClick: handlePrev,
        "aria-label": "pagination previous",
        children: /*#__PURE__*/_jsxDEV(IconChevronLeft, {
          size: 10
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, _this), renderPageButtons(), /*#__PURE__*/_jsxDEV("button", {
        className: "" + styles['number'],
        onClick: handleNext,
        "aria-label": "pagination next",
        children: /*#__PURE__*/_jsxDEV(IconChevronRight, {
          size: 10
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 5
  }, _this);
};
export default Pagination;