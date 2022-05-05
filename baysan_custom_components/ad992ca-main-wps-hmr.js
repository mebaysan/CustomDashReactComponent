webpackHotUpdatebaysan_custom_components("main",{

/***/ "./src/lib/components/BaysanMap.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/BaysanMap.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/maps */ "./node_modules/@ant-design/maps/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 * BaysanMap is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var BaysanMap = function BaysanMap(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    type: 'FeatureCollection',
    features: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1]; // useEffect(() => {
  //     asyncFetch();
  // }, []);
  // const asyncFetch = () => {
  //     fetch(
  //         'https://gw.alipayobjects.com/os/basement_prod/d36ad90e-3902-4742-b8a2-d93f7e5dafa2.json'
  //     )
  //         .then((response) => response.json())
  //         .then((json) => setData(json))
  //         .catch((error) => {
  //             console.log('fetch data failed', error);
  //         });
  // };
  // const color = [
  //     'rgb(255,255,217)',
  //     'rgb(237,248,177)',
  //     'rgb(199,233,180)',
  //     'rgb(127,205,187)',
  //     'rgb(65,182,196)',
  //     'rgb(29,145,192)',
  //     'rgb(34,94,168)',
  //     'rgb(12,44,132)',
  // ];
  // const config = {
  //     map: {
  //         type: 'mapbox',
  //         style: 'blank',
  //         center: [120.19382669582967, 30.258134],
  //         zoom: 3,
  //         pitch: 0,
  //     },
  //     source: {
  //         data: data,
  //         parser: {
  //             type: 'geojson',
  //         },
  //     },
  //     autoFit: true,
  //     color: {
  //         field: 'density',
  //         value: color,
  //         scale: {
  //             type: 'quantile',
  //         },
  //     },
  //     style: {
  //         opacity: 1,
  //         stroke: 'rgb(93,112,146)',
  //         lineType: 'dash',
  //         lineDash: [2, 2],
  //         lineWidth: 0.6,
  //         lineOpacity: 1,
  //     },
  //     state: {
  //         active: true,
  //         select: true,
  //     },
  //     tooltip: {
  //         items: ['name', 'density'],
  //     },
  //     zoom: {
  //         position: 'bottomright',
  //     },
  //     legend: {
  //         position: 'bottomleft',
  //     },
  // };


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "DEM");
}; // BaysanMap.defaultProps = {
//     label: 'Default Label with defaultProps',
// };
// BaysanMap.propTypes = {
//     /**
//      * The ID used to identify this component in Dash callbacks.
//      */
//     id: PropTypes.string,
//     /**
//      * The label used to show above of the input
//      */
//     label: PropTypes.string,
//     /**
//      * The value used to set the default value for the input
//      */
//     value: PropTypes.string,
// };


/* harmony default export */ __webpack_exports__["default"] = (BaysanMap);

/***/ })

})
//# sourceMappingURL=ad992ca-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZDk5MmNhLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==