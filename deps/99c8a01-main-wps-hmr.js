webpackHotUpdatebaysan_custom_components("main",{

/***/ "./src/lib/components/BaysanChart.react.js":
/*!*************************************************!*\
  !*** ./src/lib/components/BaysanChart.react.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_plots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/plots */ "./node_modules/@ant-design/plots/es/index.js");



/**
 * BaysanChart is an example of using Ant Design Charts component.
 * It takes a JSON data
 * to visualize.
 */

var BaysanChart = function BaysanChart(props) {
  var config = {
    data: props.data,
    xField: props.xField,
    yField: props.yField,
    seriesField: props.yField,
    legend: {
      position: props.legendPosition
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_plots__WEBPACK_IMPORTED_MODULE_2__["Bar"], config);
};

BaysanChart.defaultProps = {
  legendPosition: 'top-left'
};
BaysanChart.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The data used to visualize
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * The xField to use on the x-axis
   */
  xField: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The yField to use on the y-axis
   */
  yField: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The legendPosition to set the position of the chart legend
   */
  legendPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (BaysanChart);

/***/ })

})
//# sourceMappingURL=99c8a01-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI5OWM4YTAxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==