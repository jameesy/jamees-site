exports.ids = [9];
exports.modules = {

/***/ "HY/B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  initialValue
}) => {
  const {
    0: clicks,
    1: setClicks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  return __jsx("div", {
    style: {
      margin: '10px 0 20px'
    }
  }, __jsx("p", null, "Count: ", clicks), __jsx("button", {
    onClick: () => setClicks(clicks + 1)
  }, "increase count"), __jsx("button", {
    onClick: () => setClicks(clicks - 1)
  }, "decrease count"));
});

/***/ })

};;