webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ext_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ext-link */ \"./src/components/ext-link.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jamesbedford/Documents/GitHub/jamees-site/src/components/header.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar navItems = [{\n  label: 'Journal',\n  page: '/blog'\n}, {\n  label: 'About',\n  page: '/'\n}];\nvar ogImageUrl = 'https://notion-blog.now.sh/og-image.png';\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? '' : _ref$title,\n      _ref$children = _ref.children,\n      children = _ref$children === void 0 ? null : _ref$children;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])(),\n      pathname = _useRouter.pathname;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, title || 'Jamees'), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"James\\u2019 thoughts\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"og:title\",\n    content: \"Shu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  })), __jsx(\"header\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, children), __jsx(\"nav\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, children ? __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: pathname.split('/').slice(0, -1).join('/'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"Back\"))) : navItems.map(function (_ref2) {\n    var label = _ref2.label,\n        page = _ref2.page,\n        link = _ref2.link;\n    return __jsx(\"div\", {\n      key: label,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }\n    }, page ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: page,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      className: pathname === page ? 'active' : undefined,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }\n    }, label)) : __jsx(_ext_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      href: link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    }, label));\n  }))));\n}, \"QpP2vYJstxsDz0K+Qwttl8PPVoY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHN4PzA0ZGMiXSwibmFtZXMiOlsibmF2SXRlbXMiLCJsYWJlbCIsInBhZ2UiLCJvZ0ltYWdlVXJsIiwidGl0bGUiLCJjaGlsZHJlbiIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJtYXAiLCJsaW5rIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUEyRCxHQUFHLENBQ2xFO0FBQUVDLE9BQUssRUFBRSxTQUFUO0FBQW9CQyxNQUFJLEVBQUU7QUFBMUIsQ0FEa0UsRUFFbEU7QUFBRUQsT0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUksRUFBRTtBQUF4QixDQUZrRSxDQUFwRTtBQUtBLElBQU1DLFVBQVUsR0FBRyx5Q0FBbkI7QUFFZSxrRkFBcUM7QUFBQTs7QUFBQSx3QkFBbENDLEtBQWtDO0FBQUEsTUFBbENBLEtBQWtDLDJCQUExQixFQUEwQjtBQUFBLDJCQUF0QkMsUUFBc0I7QUFBQSxNQUF0QkEsUUFBc0IsOEJBQVgsSUFBVzs7QUFBQSxtQkFDN0JDLDZEQUFTLEVBRG9CO0FBQUEsTUFDMUNDLFFBRDBDLGNBQzFDQSxRQUQwQzs7QUFHbEQsU0FBTyxtRUFDTCxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFILEtBQUssSUFBSSxRQUFqQixDQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsYUFEUDtBQUVFLFdBQU8sRUFBQyxzQkFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFNRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FESyxFQVNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1DLFFBQU4sQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsUUFBUSxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDVixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFRSxRQUFRLENBQUNDLEtBQVQsQ0FBZSxHQUFmLEVBQW9CQyxLQUFwQixDQUEwQixDQUExQixFQUE2QixDQUFDLENBQTlCLEVBQWlDQyxJQUFqQyxDQUFzQyxHQUF0QyxDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FEVSxDQUFILEdBTUFWLFFBQVEsQ0FBQ1csR0FBVCxDQUFhO0FBQUEsUUFBR1YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsUUFBVUMsSUFBVixTQUFVQSxJQUFWO0FBQUEsUUFBZ0JVLElBQWhCLFNBQWdCQSxJQUFoQjtBQUFBLFdBQ3BCO0FBQUssU0FBRyxFQUFFWCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0MsSUFBSSxHQUNILE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFFSyxRQUFRLEtBQUtMLElBQWIsR0FBb0IsUUFBcEIsR0FBK0JXLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1osS0FESCxDQURGLENBREcsR0FPSCxNQUFDLGlEQUFEO0FBQVMsVUFBSSxFQUFFVyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0JYLEtBQXRCLENBUkosQ0FEb0I7QUFBQSxHQUFiLENBUFgsQ0FGRixDQVRLLENBQVA7QUFrQ0QsQ0FyQ0Q7QUFBQSxVQUN1QksscURBRHZCO0FBQUEiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEV4dExpbmsgZnJvbSAnLi9leHQtbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBuYXZJdGVtczogeyBsYWJlbDogc3RyaW5nOyBwYWdlPzogc3RyaW5nOyBsaW5rPzogc3RyaW5nIH1bXSA9IFtcbiAgeyBsYWJlbDogJ0pvdXJuYWwnLCBwYWdlOiAnL2Jsb2cnIH0sXG4gIHsgbGFiZWw6ICdBYm91dCcsIHBhZ2U6ICcvJyB9XG5dXG5cbmNvbnN0IG9nSW1hZ2VVcmwgPSAnaHR0cHM6Ly9ub3Rpb24tYmxvZy5ub3cuc2gvb2ctaW1hZ2UucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0aXRsZSA9ICcnLCBjaGlsZHJlbiA9IG51bGwgfSkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxuXG4gIHJldHVybiA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZSB8fCAnSmFtZWVzJ308L3RpdGxlPlxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgY29udGVudD1cIkphbWVz4oCZIHRob3VnaHRzXCJcbiAgICAgIC8+XG4gICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PVwiU2h1XCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPG5hdj5cbiAgICAgICAge2NoaWxkcmVuID8gPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPXtwYXRobmFtZS5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5qb2luKCcvJyl9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PiA6IG5hdkl0ZW1zLm1hcCgoeyBsYWJlbCwgcGFnZSwgbGluayB9KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2xhYmVsfT5cbiAgICAgICAgICAgIHtwYWdlID8gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwYWdlfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBwYWdlID8gJ2FjdGl2ZScgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEV4dExpbmsgaHJlZj17bGlua30+e2xhYmVsfTwvRXh0TGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gIDwvPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header.tsx\n");

/***/ })

})