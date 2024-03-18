import _objectWithoutPropertiesLoose from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js";
var _excluded = ["sortingAction", "sort"];
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/filters/sortingButton.jsx",
  _this = this;
import "core-js/modules/es.array.sort.js";
import "core-js/modules/es.object.assign.js";
import React, { useEffect, useState } from 'react';
import { IconSort, IconSortDown, IconSortUp } from '../icons';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var SortingButton = function SortingButton(_ref) {
  var sortingAction = _ref.sortingAction,
    sort = _ref.sort,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useState = useState(sort || 'none'),
    sorting = _useState[0],
    setSorting = _useState[1];
  useEffect(function () {
    setSorting(sort);
  }, [sort]);
  var handleChangeSort = function handleChangeSort() {
    if (sorting === 'none') {
      sortingAction('ASC');
    } else if (sorting === 'ASC') {
      sortingAction('DESC');
    } else {
      sortingAction('none');
    }
  };
  return /*#__PURE__*/_jsxDEV("button", Object.assign({
    className: 'flex-center',
    onClick: handleChangeSort
  }, props, {
    children: [sorting === 'ASC' && /*#__PURE__*/_jsxDEV(IconSortUp, {
      size: 24,
      "data-testid": 'icon-sort-asc'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, _this), sorting === 'DESC' && /*#__PURE__*/_jsxDEV(IconSortDown, {
      size: 24,
      "data-testid": 'icon-sort-desc'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this), sorting === 'none' && /*#__PURE__*/_jsxDEV(IconSort, {
      size: 24,
      "data-testid": 'icon-sort-none'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};
export default SortingButton;