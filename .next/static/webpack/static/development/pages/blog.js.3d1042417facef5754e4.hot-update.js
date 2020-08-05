webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/pages/blog/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/blog/index.tsx ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header */ \"./src/components/header.tsx\");\n/* harmony import */ var _lib_blog_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/blog-helpers */ \"./src/lib/blog-helpers.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jamesbedford/Documents/GitHub/jamees-site/src/pages/blog/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var _ref$posts = _ref.posts,\n      posts = _ref$posts === void 0 ? [] : _ref$posts;\n  return __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Thoughts\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"post-list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, posts.map(function (post) {\n    return __jsx(\"p\", {\n      className: \"post-item\",\n      key: post.Slug,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/blog/[slug]\",\n      as: Object(_lib_blog_helpers__WEBPACK_IMPORTED_MODULE_3__[\"getBlogLink\"])(post.Slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }, post.Page)), __jsx(\"time\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }\n    }, Object(_lib_blog_helpers__WEBPACK_IMPORTED_MODULE_3__[\"getDateStr\"])(post.Date)));\n  })));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYmxvZy9pbmRleC50c3g/YjYxMyJdLCJuYW1lcyI6WyJwb3N0cyIsIm1hcCIsInBvc3QiLCJTbHVnIiwiZ2V0QmxvZ0xpbmsiLCJQYWdlIiwiZ2V0RGF0ZVN0ciIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBcUNlLCtFQUFvQjtBQUFBLHdCQUFqQkEsS0FBaUI7QUFBQSxNQUFqQkEsS0FBaUIsMkJBQVQsRUFBUztBQUNqQyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUFDLElBQUksRUFBSTtBQUNqQixXQUNFO0FBQUcsZUFBUyxFQUFDLFdBQWI7QUFBeUIsU0FBRyxFQUFFQSxJQUFJLENBQUNDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGNBQVg7QUFBMEIsUUFBRSxFQUFFQyxxRUFBVyxDQUFDRixJQUFJLENBQUNDLElBQU4sQ0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUQsSUFBSSxDQUFDRyxJQUFULENBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0Msb0VBQVUsQ0FBQ0osSUFBSSxDQUFDSyxJQUFOLENBQWpCLENBSkYsQ0FERjtBQVFELEdBVEEsQ0FESCxDQUZGLENBREY7QUFpQkQsQ0FsQkQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuXG5pbXBvcnQgeyBnZXRCbG9nTGluaywgZ2V0RGF0ZVN0ciwgcG9zdElzUmVhZHkgfSBmcm9tICcuLi8uLi9saWIvYmxvZy1oZWxwZXJzJ1xuaW1wb3J0IHsgdGV4dEJsb2NrIH0gZnJvbSAnLi4vLi4vbGliL25vdGlvbi9yZW5kZXJlcnMnXG5pbXBvcnQgZ2V0Tm90aW9uVXNlcnMgZnJvbSAnLi4vLi4vbGliL25vdGlvbi9nZXROb3Rpb25Vc2VycydcbmltcG9ydCBnZXRCbG9nSW5kZXggZnJvbSAnLi4vLi4vbGliL25vdGlvbi9nZXRCbG9nSW5kZXgnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHNUYWJsZSA9IGF3YWl0IGdldEJsb2dJbmRleCgpXG5cbiAgY29uc3QgYXV0aG9yc1RvR2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKVxuICBjb25zdCBwb3N0czogYW55W10gPSBPYmplY3Qua2V5cyhwb3N0c1RhYmxlKVxuICAgIC5tYXAoc2x1ZyA9PiB7XG4gICAgICBjb25zdCBwb3N0ID0gcG9zdHNUYWJsZVtzbHVnXVxuICAgICAgLy8gcmVtb3ZlIGRyYWZ0IHBvc3RzIGluIHByb2R1Y3Rpb25cbiAgICAgIGlmICghcG9zdElzUmVhZHkocG9zdCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIHBvc3QuQXV0aG9ycyA9IHBvc3QuQXV0aG9ycyB8fCBbXVxuICAgICAgZm9yIChjb25zdCBhdXRob3Igb2YgcG9zdC5BdXRob3JzKSB7XG4gICAgICAgIGF1dGhvcnNUb0dldC5hZGQoYXV0aG9yKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHBvc3RcbiAgICB9KVxuICAgIC5maWx0ZXIoQm9vbGVhbilcblxuICBjb25zdCB7IHVzZXJzIH0gPSBhd2FpdCBnZXROb3Rpb25Vc2VycyhbLi4uYXV0aG9yc1RvR2V0XSlcblxuICBwb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgcG9zdC5BdXRob3JzID0gcG9zdC5BdXRob3JzLm1hcChpZCA9PiB1c2Vyc1tpZF0uZnVsbF9uYW1lKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgcG9zdHMgPSBbXSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8SGVhZGVyIHRpdGxlPVwiVGhvdWdodHNcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWxpc3RcIj5cbiAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1pdGVtXCIga2V5PXtwb3N0LlNsdWd9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2cvW3NsdWddXCIgYXM9e2dldEJsb2dMaW5rKHBvc3QuU2x1Zyl9PlxuICAgICAgICAgICAgICAgIDxhPntwb3N0LlBhZ2V9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDx0aW1lPntnZXREYXRlU3RyKHBvc3QuRGF0ZSl9PC90aW1lPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog/index.tsx\n");

/***/ })

})