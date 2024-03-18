import _asyncToGenerator from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/helpers/asyncToGenerator.js";
var _jsxFileName = "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/src/lib/table/table.spec.jsx",
  _this = this;
import _regeneratorRuntime from "/media/mohamed/Nouveau nom3/workspace/hello-jonzz/eskimoz/src/eskimoz-ui/node_modules/@babel/runtime/regenerator/index.js";
import "core-js/modules/es.array.for-each.js";
import "core-js/modules/es.object.assign.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/web.dom-collections.for-each.js";
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Table from './table';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
describe('Table component', function () {
  var columns = [{
    Header: 'Username',
    accessor: 'username',
    sorting: 'none',
    sortAction: jest.fn()
  }, {
    Header: 'Age',
    accessor: 'age',
    sorting: 'none',
    filterType: 'range',
    filterAction: jest.fn(),
    resetFilter: jest.fn()
  }, {
    Header: 'Profession',
    accessor: 'profession',
    sorting: 'none',
    sortAction: jest.fn()
  }, {
    Header: 'Likes',
    accessor: 'likes',
    filterType: 'tags',
    tagsOptions: [{
      label: 'Sport',
      value: 'sport'
    }, {
      label: 'Travel',
      value: 'travel'
    }],
    filterAction: jest.fn(),
    resetFilter: jest.fn()
  }];
  var data = [{
    username: 'John',
    age: 25,
    profession: 'Engineer',
    like: ['sport']
  }, {
    username: 'Alice',
    age: 30,
    profession: 'Designer',
    like: ['travel']
  }];
  var usePagination = true;
  var props = {
    data: data,
    columns: columns,
    usePagination: usePagination,
    total: 20,
    pageSize: 10,
    currentPage: 1,
    onChangePagination: jest.fn()
  };
  it('should render a table element with thead and tbody', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var _render, baseElement, getByTestId, getAllByRole, pagination;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _render = render( /*#__PURE__*/_jsxDEV(Table, Object.assign({}, props), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, _this)), baseElement = _render.baseElement, getByTestId = _render.getByTestId, getAllByRole = _render.getAllByRole;
          expect(baseElement).toBeTruthy();
          expect(getAllByRole('rowgroup')).toBeTruthy();
          expect(getAllByRole('row')).toBeTruthy();
          columns.forEach( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(column) {
              var sortingButton, dateFilter, rangeFilter, tagsFilter, th;
              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (column.sorting) {
                      sortingButton = getByTestId("sorting-button-" + column.accessor);
                      expect(sortingButton).toBeTruthy();
                    }
                    if (!(column.filterType === 'date')) {
                      _context.next = 9;
                      break;
                    }
                    dateFilter = getByTestId("open-" + column.accessor + "-date-filter");
                    expect(dateFilter).toBeTruthy();
                    fireEvent.click(dateFilter);
                    _context.next = 7;
                    return waitFor(function () {
                      return expect(getByTestId(column.accessor + "-date-filter")).toBeTruthy();
                    });
                  case 7:
                    _context.next = 23;
                    break;
                  case 9:
                    if (!(column.filterType === 'range')) {
                      _context.next = 17;
                      break;
                    }
                    rangeFilter = getByTestId("open-" + column.accessor + "-range-filter");
                    expect(rangeFilter).toBeTruthy();
                    fireEvent.click(rangeFilter);
                    _context.next = 15;
                    return waitFor(function () {
                      return expect(getByTestId(column.accessor + "-range-filter")).toBeTruthy();
                    });
                  case 15:
                    _context.next = 23;
                    break;
                  case 17:
                    if (!(column.filterType === 'tags')) {
                      _context.next = 23;
                      break;
                    }
                    tagsFilter = getByTestId("open-" + column.accessor + "-tags-filter");
                    expect(tagsFilter).toBeTruthy();
                    fireEvent.click(tagsFilter);
                    _context.next = 23;
                    return waitFor(function () {
                      return expect(getByTestId(column.accessor + "-tags-filter")).toBeTruthy();
                    });
                  case 23:
                    th = getByTestId("th-" + column.accessor);
                    expect(th).toBeTruthy();
                  case 25:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
          data.forEach(function (item, i) {
            var tr = getByTestId("tr-" + i);
            expect(tr).toBeTruthy();
            columns.forEach(function (column) {
              var td = getByTestId("td-" + column.accessor + "-" + i);
              expect(td).toBeTruthy();
            });
          });
          if (usePagination) {
            pagination = getByTestId('pagination-component');
            expect(pagination).toBeTruthy();
          }
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});