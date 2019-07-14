(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VidPlayIcon = function VidPlayIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M8.595 19.522C7.162 20.364 6 19.702 6 18.04V5.963C6 4.3 7.158 3.635 8.595 4.479l11.083 6.51c.951.559.958 1.46 0 2.023l-11.083 6.51z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

VidPlayIcon.displayName = 'VidPlayIcon';
var _default = VidPlayIcon;
exports.default = _default;

/***/ }),

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shortcut; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var keyCodes = {
    space: 32,
    m: 77,
};
var Shortcut = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Shortcut, _super);
    function Shortcut() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keyHandler = function (e) {
            var _a = _this.props, keyCode = _a.keyCode, handler = _a.handler;
            if (e.keyCode === keyCode) {
                handler();
            }
        };
        _this.init = function () {
            document.addEventListener('keydown', _this.keyHandler);
        };
        _this.release = function () {
            document.removeEventListener('keydown', _this.keyHandler);
        };
        return _this;
    }
    Shortcut.prototype.componentDidMount = function () {
        this.init();
    };
    Shortcut.prototype.componentWillUnmount = function () {
        this.release();
    };
    Shortcut.prototype.render = function () {
        return null;
    };
    return Shortcut;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=shortcut.js.map

/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AudioIcon = function AudioIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M19 6.673V15.2a2.8 2.8 0 0 1-2.8 2.8h-.4a2.8 2.8 0 0 1-2.8-2.8v-.4a2.8 2.8 0 0 1 2.8-2.8h.4c.278 0 .547.04.8.116V8.242l-6 .621V16.2A2.8 2.8 0 0 1 8.2 19h-.4A2.8 2.8 0 0 1 5 16.2v-.4A2.8 2.8 0 0 1 7.8 13h.4c.278 0 .547.04.8.116V6.654c0-.38.31-.721.72-.764l8.56-.886c.398-.041.72.235.72.615v1.054z\" fill=\"currentColor\"/></svg>"
  }, props));
};

AudioIcon.displayName = 'AudioIcon';
var _default = AudioIcon;
exports.default = _default;

/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DocumentIcon = function DocumentIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M17 10.005V19H7V5h5.99v2.49a1.5 1.5 0 0 0 1.5 1.5h4.5v-.522c0-.297-.132-.578-.359-.768l-5.074-4.236c-.36-.3-.813-.464-1.282-.464H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8.995h-2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

DocumentIcon.displayName = 'DocumentIcon';
var _default = DocumentIcon;
exports.default = _default;

/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PageIcon = function PageIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><rect x=\"8\" y=\"6\" width=\"8\" height=\"2\" rx=\"1\"/><rect x=\"8\" y=\"9\" width=\"8\" height=\"2\" rx=\"1\"/><rect x=\"8\" y=\"12\" width=\"4\" height=\"2\" rx=\"1\"/><path d=\"M7 4v16h10V4H7zm-2-.01C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 0 1 5 20.01V3.99z\" fill-rule=\"nonzero\"/></g></svg>"
  }, props));
};

PageIcon.displayName = 'PageIcon';
var _default = PageIcon;
exports.default = _default;

/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MoreIcon = function MoreIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><circle cx=\"5\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"19\" cy=\"12\" r=\"2\"/></g></svg>"
  }, props));
};

MoreIcon.displayName = 'MoreIcon';
var _default = MoreIcon;
exports.default = _default;

/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = bytes;
module.exports.format = format;
module.exports.parse = parse;

/**
 * Module variables.
 * @private
 */

var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;

var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

var map = {
  b:  1,
  kb: 1 << 10,
  mb: 1 << 20,
  gb: 1 << 30,
  tb: ((1 << 30) * 1024)
};

// TODO: use is-finite module?
var numberIsFinite = Number.isFinite || function (v) { return typeof v === 'number' && isFinite(v); };

var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;

/**
 * Convert the given value in bytes into a string or parse to string to an integer in bytes.
 *
 * @param {string|number} value
 * @param {{
 *  case: [string],
 *  decimalPlaces: [number]
 *  fixedDecimals: [boolean]
 *  thousandsSeparator: [string]
 *  unitSeparator: [string]
 *  }} [options] bytes options.
 *
 * @returns {string|number|null}
 */

function bytes(value, options) {
  if (typeof value === 'string') {
    return parse(value);
  }

  if (typeof value === 'number') {
    return format(value, options);
  }

  return null;
}

/**
 * Format the given value in bytes into a string.
 *
 * If the value is negative, it is kept as such. If it is a float,
 * it is rounded.
 *
 * @param {number} value
 * @param {object} [options]
 * @param {number} [options.decimalPlaces=2]
 * @param {number} [options.fixedDecimals=false]
 * @param {string} [options.thousandsSeparator=]
 * @param {string} [options.unit=]
 * @param {string} [options.unitSeparator=]
 *
 * @returns {string|null}
 * @public
 */

function format(value, options) {
  if (!numberIsFinite(value)) {
    return null;
  }

  var mag = Math.abs(value);
  var thousandsSeparator = (options && options.thousandsSeparator) || '';
  var unitSeparator = (options && options.unitSeparator) || '';
  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;
  var fixedDecimals = Boolean(options && options.fixedDecimals);
  var unit = (options && options.unit) || '';

  if (!unit || !map[unit.toLowerCase()]) {
    if (mag >= map.tb) {
      unit = 'TB';
    } else if (mag >= map.gb) {
      unit = 'GB';
    } else if (mag >= map.mb) {
      unit = 'MB';
    } else if (mag >= map.kb) {
      unit = 'kB';
    } else {
      unit = 'B';
    }
  }

  var val = value / map[unit.toLowerCase()];
  var str = val.toFixed(decimalPlaces);

  if (!fixedDecimals) {
    str = str.replace(formatDecimalsRegExp, '$1');
  }

  if (thousandsSeparator) {
    str = str.replace(formatThousandsRegExp, thousandsSeparator);
  }

  return str + unitSeparator + unit;
}

/**
 * Parse the string value into an integer in bytes.
 *
 * If no unit is given, it is assumed the value is in bytes.
 *
 * @param {number|string} val
 *
 * @returns {number|null}
 * @public
 */

function parse(val) {
  if (typeof val === 'number' && !isNaN(val)) {
    return val;
  }

  if (typeof val !== 'string') {
    return null;
  }

  // Test if the string passed is valid
  var results = parseRegExp.exec(val);
  var floatValue;
  var unit = 'b';

  if (!results) {
    // Nothing could be extracted from the given string
    floatValue = parseInt(val, 10);
    unit = 'b'
  } else {
    // Retrieve the value and the unit
    floatValue = parseFloat(results[1]);
    unit = results[4].toLowerCase();
  }

  return Math.floor(map[unit] * floatValue);
}


/***/ }),

/***/ 1077:
/***/ (function(module) {

module.exports = {"a":"@atlaskit/media-card","b":"63.3.1"};

/***/ }),

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atlaskit_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(829);
/* harmony import */ var _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




var buttonTheme = {
    toolbar: {
        background: {
            default: { light: 'transparent' },
            hover: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].DN60 },
            active: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].B75 },
        },
        boxShadowColor: {
            focus: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].B75 },
        },
        color: {
            default: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].DN400 },
            hover: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].DN400 },
            active: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].B400 },
            disabled: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].DN100 },
        },
    },
    primary: {
        background: {
            default: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].B100 },
            hover: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].B75 },
            active: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].B200 },
            disabled: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].DN70 },
        },
        boxShadowColor: {
            focus: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].B75 },
        },
        color: {
            default: { light: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].DN30 },
        },
    },
};
function extract(newTheme, _a) {
    var appearance = _a.appearance, state = _a.state, mode = _a.mode;
    if (!newTheme[appearance]) {
        return;
    }
    var root = newTheme[appearance];
    return Object.keys(root).reduce(function (acc, val) {
        var node = root;
        [val, state, mode].forEach(function (item) {
            if (!node[item]) {
                return;
            }
            if (typeof node[item] !== 'object') {
                acc[val] = node[item];
                return;
            }
            node = node[item];
            return;
        });
        return acc;
    }, {});
}
/* harmony default export */ __webpack_exports__["a"] = (function (props) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_atlaskit_button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["buttonStyles"]);
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ buttonStyles: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, buttonStyles, extract(buttonTheme, themeProps)) }, rest);
    } }))); });
//# sourceMappingURL=MediaButton.js.map

/***/ }),

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VidHdCircleIcon = function VidHdCircleIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><circle fill=\"currentColor\" cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M11.359 15V9.004h-1.5v2.352H7.504V9.004H6V15h1.504v-2.418h2.355V15h1.5zm1.393-6v6h2.483C17.013 15 18 13.911 18 11.942 18 10.068 16.996 9 15.235 9h-2.483zm1.503 1.226h.71c.946 0 1.503.627 1.503 1.745 0 1.188-.529 1.803-1.504 1.803h-.709v-3.548z\" fill=\"inherit\"/></g></svg>"
  }, props));
};

VidHdCircleIcon.displayName = 'VidHdCircleIcon';
var _default = VidHdCircleIcon;
exports.default = _default;

/***/ }),

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HipchatOutgoingSoundIcon = function HipchatOutgoingSoundIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M17.229 7.652c.04.048.124.16.238.33.198.294.398.631.584 1.006 1.138 2.288 1.243 4.648-.316 6.864a7.86 7.86 0 0 1-.377.492 1 1 0 0 0 .156 1.43 1.062 1.062 0 0 0 1.467-.152 9.55 9.55 0 0 0 .475-.62c2.045-2.907 1.907-6.017.472-8.901-.392-.788-.788-1.376-1.07-1.72a1.062 1.062 0 0 0-1.466-.158 1 1 0 0 0-.163 1.429z\" fill-rule=\"nonzero\"/><path d=\"M14.214 9.619c.079.101.225.33.376.658.608 1.318.608 2.72-.404 4.141-.32.45-.217 1.074.23 1.395a.992.992 0 0 0 1.389-.231c1.476-2.073 1.476-4.226.591-6.146a5.494 5.494 0 0 0-.619-1.055.992.992 0 0 0-1.398-.166c-.431.341-.506.97-.165 1.404z\" fill-rule=\"nonzero\"/><path d=\"M7 15V9l4.74-3.892c.57-.323 1.26.116 1.26.8v12.184c0 .684-.69 1.123-1.26.8L7 15zM4 9h2v6H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z\"/></g></svg>"
  }, props));
};

HipchatOutgoingSoundIcon.displayName = 'HipchatOutgoingSoundIcon';
var _default = HipchatOutgoingSoundIcon;
exports.default = _default;

/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VidFullScreenOffIcon = function VidFullScreenOffIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M9 15.003v2.995a1 1 0 1 0 2 0v-3.896C11 13.494 10.507 13 9.9 13H6a1 1 0 0 0 0 2.003h3z\" fill-rule=\"nonzero\"/><path d=\"M3.74 20.294a.997.997 0 0 0 1.407.005l5.152-5.152a1 1 0 0 0-.005-1.407l-.034-.034a.997.997 0 0 0-1.407-.005l-5.152 5.152a1 1 0 0 0 .005 1.407l.034.034z\" fill-rule=\"nonzero\"/><path d=\"M19.067 3.321L13.32 9.066a1.115 1.115 0 0 0 .005 1.57l.036.037a1.112 1.112 0 0 0 1.571.005l5.747-5.744a1.116 1.116 0 0 0-.006-1.57l-.037-.037a1.117 1.117 0 0 0-1.57-.006z\"/><path d=\"M13 6.002v3.896c0 .608.493 1.102 1.1 1.102H18a1 1 0 0 0 0-2.003h-3V6.002a1 1 0 1 0-2 0z\"/></g></svg>"
  }, props));
};

VidFullScreenOffIcon.displayName = 'VidFullScreenOffIcon';
var _default = VidFullScreenOffIcon;
exports.default = _default;

/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VidFullScreenOnIcon = function VidFullScreenOnIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M6 18h3a1 1 0 0 1 0 2H6a2 2 0 0 1-2-2v-3a1 1 0 0 1 2 0v3zm12 2h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2zM6 4h3a1 1 0 1 1 0 2H6v3a1 1 0 1 1-2 0V6a2 2 0 0 1 2-2zm12 2h-3a1 1 0 0 1 0-2h3a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0V6z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

VidFullScreenOnIcon.displayName = 'VidFullScreenOnIcon';
var _default = VidFullScreenOnIcon;
exports.default = _default;

/***/ }),

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VidPauseIcon = function VidPauseIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M6 4h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm10 0h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

VidPauseIcon.displayName = 'VidPauseIcon';
var _default = VidPauseIcon;
exports.default = _default;

/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/types.js
var ImageType;
(function (ImageType) {
    ImageType["JPEG"] = "image/jpeg";
    ImageType["PNG"] = "image/png";
})(ImageType || (ImageType = {}));
var SupportedImageMetaTag;
(function (SupportedImageMetaTag) {
    SupportedImageMetaTag["XResolution"] = "XResolution";
    SupportedImageMetaTag["YResolution"] = "YResolution";
    SupportedImageMetaTag["Orientation"] = "Orientation";
})(SupportedImageMetaTag || (SupportedImageMetaTag = {}));
// http://sylvana.net/jpegcrop/exif_orientation.html
var ExifOrientation = {
    'top-left': 1,
    'top-right': 2,
    'bottom-right': 3,
    'bottom-left': 4,
    'left-top': 5,
    'right-top': 6,
    'right-bottom': 7,
    'left-bottom': 8,
};
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/parseJPEG.js


var XResolution = SupportedImageMetaTag.XResolution, YResolution = SupportedImageMetaTag.YResolution;
var loadImage;
function readJPEGExifMetaData(file) {
    var _this = this;
    return new Promise(function (resolve, reject) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
        var module_1;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!loadImage) return [3 /*break*/, 2];
                    return [4 /*yield*/, __webpack_require__.e(/* import() */ 33).then(__webpack_require__.t.bind(null, 1190, 7))];
                case 1:
                    module_1 = _a.sent();
                    loadImage = module_1.default || module_1;
                    _a.label = 2;
                case 2:
                    loadImage.parseMetaData(file, function (data) {
                        try {
                            var tags_1 = data && data.exif ? data.exif.getAll() : {};
                            Object.keys(tags_1).forEach(function (key) {
                                var value = tags_1[key];
                                if (typeof value === 'object' &&
                                    (key === XResolution || key === YResolution) &&
                                    'numerator' in value) {
                                    // some test images had this structure, so just take the numerator value to simplify returned value
                                    tags_1[key] = value.numerator;
                                }
                                if (typeof tags_1[key] === 'number') {
                                    // in case numbers types were auto-converted, keep everything the same between jpeg & png we keep as strings
                                    tags_1[key] = "" + tags_1[key];
                                }
                            });
                            resolve(tags_1);
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    }); });
}
//# sourceMappingURL=parseJPEG.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/util.js
var util = __webpack_require__(953);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/parsePNG.js


var pngChunksExtract;
function readPNGXMPMetaData(file) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var module_1, buffer, chunks;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!pngChunksExtract) return [3 /*break*/, 2];
                    return [4 /*yield*/, __webpack_require__.e(/* import() */ 46).then(__webpack_require__.t.bind(null, 1189, 7))];
                case 1:
                    module_1 = _a.sent();
                    pngChunksExtract = module_1.default || module_1;
                    _a.label = 2;
                case 2: return [4 /*yield*/, Object(util["a" /* fileToArrayBuffer */])(file)];
                case 3:
                    buffer = _a.sent();
                    chunks = pngChunksExtract(buffer);
                    return [4 /*yield*/, parsePNGChunks(chunks)];
                case 4: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function parsePNGChunks(chunks) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var iTXt, pHYs, i, chunk, dv, unitSpecifier, PixelPerUnitX, PixelPerUnitY;
        return tslib_es6["__generator"](this, function (_a) {
            iTXt = '';
            pHYs = {};
            /**
             * http://www.libpng.org/pub/png/spec/1.2/PNG-Chunks.html#C.Summary-of-standard-chunks
             * Order of every chunk is not guaranteed.
             * And both iTXt and pHYs are Ancillary chunks.
             */
            for (i = 0; i < chunks.length; ++i) {
                chunk = chunks[i];
                // Must be last
                if (chunk.name === 'IEND') {
                    break;
                }
                /**
                 * http://www.libpng.org/pub/png/spec/1.2/PNG-Chunks.html#C.Anc-text
                 * iTXt contains the useful XMP/XML string data of meta tags
                 */
                if (chunk.name === 'iTXt') {
                    iTXt = String.fromCharCode.apply(null, chunk.data);
                }
                /**
                 * http://www.libpng.org/pub/png/spec/1.2/PNG-Chunks.html#C.pHYs
                 * Pixels per unit, X axis: 4 bytes (unsigned integer)
                 * Pixels per unit, Y axis: 4 bytes (unsigned integer)
                 * Unit specifier:          1 byte  (0: unit is unknown 1: unit is the meter)
                 */
                if (chunk.name === 'pHYs') {
                    dv = new DataView(chunk.data.buffer);
                    unitSpecifier = dv.getUint8(8);
                    // meter
                    if (unitSpecifier === 1) {
                        PixelPerUnitX = dv.getUint32(0);
                        PixelPerUnitY = dv.getUint32(4);
                        pHYs = { PixelPerUnitX: PixelPerUnitX, PixelPerUnitY: PixelPerUnitY };
                    }
                }
            }
            return [2 /*return*/, { iTXt: iTXt, pHYs: pHYs }];
        });
    });
}
//# sourceMappingURL=parsePNG.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/parsePNGXMP.js
function parseXMPMetaData(xmpMetaData) {
    var metadata = {};
    var tags = xmpMetaData.match(/<(tiff|exif):.+>/gi);
    if (tags) {
        tags.forEach(function (tag) {
            var match = tag.match(/<(tiff|exif):([^>]+)>([^<]+)/i);
            if (match) {
                var name_1 = match[2];
                metadata[name_1] = match[3];
            }
        });
    }
    return metadata;
}
//# sourceMappingURL=parsePNGXMP.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/metatags.js





function readImageMetaTags(file) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var type, _a, iTXt, pHYs, xmpMetaData, e_1;
        return tslib_es6["__generator"](this, function (_b) {
            switch (_b.label) {
                case 0:
                    type = file.type;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    if (!(type === ImageType.PNG)) return [3 /*break*/, 3];
                    return [4 /*yield*/, readPNGXMPMetaData(file)];
                case 2:
                    _a = _b.sent(), iTXt = _a.iTXt, pHYs = _a.pHYs;
                    xmpMetaData = tslib_es6["__assign"]({}, parseXMPMetaData(iTXt), pHYs);
                    return [2 /*return*/, xmpMetaData];
                case 3:
                    if (!(file.type === ImageType.JPEG)) return [3 /*break*/, 5];
                    return [4 /*yield*/, readJPEGExifMetaData(file)];
                case 4: return [2 /*return*/, _b.sent()];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, null];
            }
        });
    });
}
//# sourceMappingURL=metatags.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/imageOrientationUtil.js
var imageOrientationUtil = __webpack_require__(944);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getImageInfo; });
/* unused harmony export getScaleFactor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getOrientation; });
/* unused harmony export getMetaTagNumericValue */
/* unused harmony export getScaleFactorFromFile */
/* unused harmony export readImageMetaData */
/* unused concated harmony import ExifOrientation */
/* unused concated harmony import isRotated */
/* unused concated harmony import getCssFromImageOrientation */





var Orientation = SupportedImageMetaTag.Orientation, imageMetaData_XResolution = SupportedImageMetaTag.XResolution;
// http://bonfx.com/why-is-the-web-72-dpi-and-print-300-dpi/
var DPI_WEB_BASELINE = 72;

function getImageInfo(fileInfo) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var metadata, width, height, tags, scaleFactor;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readImageMetaData(fileInfo)];
                case 1:
                    metadata = _a.sent();
                    if (!metadata) {
                        return [2 /*return*/, null];
                    }
                    width = metadata.width, height = metadata.height, tags = metadata.tags;
                    scaleFactor = getScaleFactor(fileInfo.file, tags);
                    return [2 /*return*/, {
                            scaleFactor: scaleFactor,
                            width: width,
                            height: height,
                        }];
            }
        });
    });
}
function getScaleFactor(file, tags) {
    var scaleFactorFromFilename = getScaleFactorFromFile(file);
    if (scaleFactorFromFilename !== null) {
        return scaleFactorFromFilename;
    }
    else if (tags) {
        /**
         * Scale Factor is actually a 2D thing, but in practice X & Y are same in 99% cases.
         * So we are only relying on X axis.
         */
        if (typeof tags['PixelPerUnitX'] === 'number') {
            // 1 inch = 0.0254 meters
            return (Math.round(tags['PixelPerUnitX'] * 0.0254) /
                DPI_WEB_BASELINE);
        }
        else {
            return (getMetaTagNumericValue(tags, imageMetaData_XResolution, DPI_WEB_BASELINE) /
                DPI_WEB_BASELINE);
        }
    }
    else {
        return 1;
    }
}
var getOrientationFromTags = function (tags) {
    if (tags && tags[Orientation]) {
        var tagValue = tags[Orientation];
        if (tagValue) {
            var numericValue = parseInt(tagValue, 10);
            if (isNaN(numericValue)) {
                return ExifOrientation[tagValue];
            }
            return numericValue;
        }
    }
    return 1;
};
function getOrientation(file) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var tags;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readImageMetaTags(file)];
                case 1:
                    tags = _a.sent();
                    return [2 /*return*/, getOrientationFromTags(tags)];
            }
        });
    });
}
function getMetaTagNumericValue(tags, key, defaultValue) {
    try {
        var num = parseFloat("" + tags[key]);
        if (!isNaN(num)) {
            return num;
        }
    }
    catch (e) {
        //
    }
    return defaultValue;
}
function getScaleFactorFromFile(file) {
    try {
        // filenames with scale ratio in name take precedence - eg. filename@2x.png
        var match = file.name.trim().match(/@([0-9\.]+)x\.[a-z]{3}$/);
        if (match) {
            return parseFloat(match[1]);
        }
    }
    catch (e) {
        // parse problem, return null
    }
    return null;
}
function readImageMetaData(fileInfo) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var file, src, type, width, height, tags, img, e_1, naturalWidth, naturalHeight, orientation, isImageRotated, data;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = fileInfo.file, src = fileInfo.src;
                    type = file.type;
                    width = 0;
                    height = 0;
                    return [4 /*yield*/, readImageMetaTags(file)];
                case 1:
                    tags = _a.sent();
                    // since we're reading metadata anyway, try to get dimensions from there...
                    if (tags && tags.PixelXDimension) {
                        width = getMetaTagNumericValue(tags, 'PixelXDimension', 0);
                    }
                    if (tags && tags.PixelXDimension) {
                        height = getMetaTagNumericValue(tags, 'PixelYDimension', 0);
                    }
                    if (!(width === 0 && height === 0)) return [3 /*break*/, 6];
                    img = void 0;
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Object(util["c" /* loadImage */])(src)];
                case 3:
                    img = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    return [2 /*return*/, null];
                case 5:
                    naturalWidth = img.naturalWidth, naturalHeight = img.naturalHeight;
                    width = naturalWidth;
                    height = naturalHeight;
                    _a.label = 6;
                case 6:
                    orientation = getOrientationFromTags(tags);
                    isImageRotated = Object(imageOrientationUtil["b" /* isRotated */])(orientation);
                    data = {
                        type: type,
                        width: isImageRotated ? height : width,
                        height: isImageRotated ? width : height,
                        tags: tags,
                    };
                    return [2 /*return*/, data];
            }
        });
    });
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toHumanReadableMediaSize; });
/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1076);
/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bytes__WEBPACK_IMPORTED_MODULE_0__);

// eslint-disable-next-line no-bitwise
var ONE_MEGABYTE_IN_BYTES = 1 << 20;
/**
 * Takes a media (file) size in bytes and returns a human readable string
 */
function toHumanReadableMediaSize(size) {
    // [MS-967]: Api issue might return string for size
    var parsedSize = parseInt("" + size, 10);
    var decimalPlaces = parsedSize < ONE_MEGABYTE_IN_BYTES ? 0 : 1;
    return bytes__WEBPACK_IMPORTED_MODULE_0__["format"](parsedSize, {
        unitSeparator: ' ',
        decimalPlaces: decimalPlaces,
    })
        .toUpperCase();
}
//# sourceMappingURL=humanReadableSize.js.map

/***/ }),

/***/ 1194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/identifier.js
var media_client_identifier = __webpack_require__(832);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/models/file-state.js
var file_state = __webpack_require__(565);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/models/media.js
var media = __webpack_require__(839);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/download.js
var download = __webpack_require__(976);
var download_default = /*#__PURE__*/__webpack_require__.n(download);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/AnalyticsContext.js
var AnalyticsContext = __webpack_require__(495);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var theme = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/modalSpinner.js
var modalSpinner = __webpack_require__(926);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/components/media-viewer-loader.js




var media_viewer_loader_AsyncMediaViewer = /** @class */ (function (_super) {
    tslib_es6["__extends"](AsyncMediaViewer, _super);
    function AsyncMediaViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            // Set state value to equal to current static value of this class.
            MediaViewer: AsyncMediaViewer.MediaViewer,
        };
        return _this;
    }
    AsyncMediaViewer.prototype.componentWillMount = function () {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var _a, mediaClient, mediaViewerModule, MediaViewerWithClient;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.state.MediaViewer) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all([
                                __webpack_require__.e(/* import() | @atlaskit-media-client */ 20).then(__webpack_require__.bind(null, 113)),
                                __webpack_require__.e(/* import() | @atlaskit-internal_media-viewer */ 29).then(__webpack_require__.bind(null, 1196)),
                            ])];
                    case 1:
                        _a = tslib_es6["__read"].apply(void 0, [_b.sent(), 2]), mediaClient = _a[0], mediaViewerModule = _a[1];
                        MediaViewerWithClient = mediaClient.withMediaClient(mediaViewerModule.MediaViewer);
                        AsyncMediaViewer.MediaViewer = MediaViewerWithClient;
                        this.setState({ MediaViewer: MediaViewerWithClient });
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AsyncMediaViewer.prototype.render = function () {
        if (!this.state.MediaViewer) {
            return (react["createElement"](modalSpinner["a" /* default */], { blankedColor: theme["colors"].DN30, invertSpinnerColor: true }));
        }
        return react["createElement"](this.state.MediaViewer, tslib_es6["__assign"]({}, this.props));
    };
    AsyncMediaViewer.displayName = 'AsyncMediaViewer';
    return AsyncMediaViewer;
}(react["PureComponent"]));
/* harmony default export */ var media_viewer_loader = (media_viewer_loader_AsyncMediaViewer);
//# sourceMappingURL=media-viewer-loader.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/createAndFireEvent.js
var createAndFireEvent = __webpack_require__(905);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsEvents.js
var withAnalyticsEvents = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/messages.js
var messages = __webpack_require__(938);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/imageOrientationUtil.js
var imageOrientationUtil = __webpack_require__(944);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/mediaImage/styled.js


var ImageComponent = styled_components_browser_esm["default"].img(templateObject_1 || (templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n"], ["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n"])));
var templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/mediaImage/index.js






var mediaImage_MediaImage = /** @class */ (function (_super) {
    tslib_es6["__extends"](MediaImage, _super);
    function MediaImage(props) {
        var _this = _super.call(this, props) || this;
        _this.onImageLoad = function (e) {
            if (!_this.imageRef || !_this.imageRef.current) {
                return;
            }
            var onImageLoad = _this.props.onImageLoad;
            _this.setState({
                isImageLoaded: true,
                imgWidth: _this.imageRef.current.naturalWidth,
                imgHeight: _this.imageRef.current.naturalHeight,
            });
            if (onImageLoad) {
                onImageLoad(e.currentTarget);
            }
        };
        _this.imageRef = react["createRef"]();
        _this.state = {
            isImageLoaded: false,
            imgWidth: 0,
            imgHeight: 0,
            parentWidth: Infinity,
            parentHeight: Infinity,
        };
        return _this;
    }
    // TODO FIL-4060 we need to check whether the dataURI changes in componentWillReceiveProps()
    // and if it does recalculate the image height and width
    MediaImage.prototype.componentDidMount = function () {
        var parent = react_dom["findDOMNode"](this).parentElement;
        if (!parent) {
            return;
        }
        var _a = parent.getBoundingClientRect(), width = _a.width, height = _a.height;
        this.setState({
            parentWidth: width,
            parentHeight: height,
        });
    };
    MediaImage.prototype.render = function () {
        var _a = this.props, crop = _a.crop, stretch = _a.stretch, dataURI = _a.dataURI, previewOrientation = _a.previewOrientation, crossOrigin = _a.crossOrigin, onImageError = _a.onImageError;
        var _b = this.state, parentWidth = _b.parentWidth, parentHeight = _b.parentHeight, imgWidth = _b.imgWidth, imgHeight = _b.imgHeight, isImageLoaded = _b.isImageLoaded;
        var parentRatio = parentWidth / parentHeight;
        var imgRatio = imgWidth / imgHeight;
        var percentSize = '100%';
        /*
          Cover strategy means we want to full entire screen with an image. Here is an example:
    
             Image           Container   Result (░ - is what cropped out)
         ┌──────────────┐    ┌──────┐    ┌───┬──────┬───┐
         │▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    │      │    │░░░│▓▓▓▓▓▓│░░░│
         │▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ -> │      │ => │░░░│▓▓▓▓▓▓│░░░│
         │▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    │      │    │░░░│▓▓▓▓▓▓│░░░│
         │▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    └──────┘    └───┴──────┴───┘
         └──────────────┘
        */
        var isCoverStrategy = crop;
        /*
          Fit strategy means image is fully inside container even if there is empty space left.
          Here is an example:
    
                 Image            Container     Result
         ┌────────────────────┐    ┌──────┐    ┌──────┐
         │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    │      │    ├──────┤
         │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ -> │      │ => │▓▓▓▓▓▓│
         │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    │      │    │▓▓▓▓▓▓│
         │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    │      │    ├──────┤
         └────────────────────┘    └──────┘    └──────┘
         */
        var isFitStrategy = !crop;
        var isImageRotated = Object(imageOrientationUtil["b" /* isRotated */])(previewOrientation || 1);
        /*
          When photo has orientation of 90deg or 270deg (stored in EXIF meta data)
          things get very tricky. Let me go through an two examples to explain how we deal with that:
    
          Example #1:
    
          Image comes in as    ________    But it needs to be     ┌──────┐
          horizontal picture  |        |   displayed as 750x1000  │      │
          of 1000x750         |        |   because orientation    │      │
                              |________|   say it must be rotated │      │
                                           90 degrees             │      │
                                                                  └──────┘
    
          Container is smaller, and has dimensions of 100x200.
          So, input parameters are:
            parentWidth: 100
            parentHeight: 200
            imgWidth: 1000
            imgHeight: 750
            crop: true (means we want to cover)
            stretch: true
            previewOrientation: 6
    
          To see what true value of isImageMoreLandscapyThanContainer is we need to flip imgRatio.
          Since initial value is 1000/750 = 1.33 we can just do 1/1.3333 = 0.75.
    
          In this situation final values will be:
            imgRatio: 0.75
            parentRatio: 0.5
            isCoverStrategy: true
            isFitStrategy: false
            isImageRotated: true
            isImageMoreLandscapyThanContainer: true
            isStretchingAllowed: true
    
          According to this variables state css will become:
            height: 100%;
    
          Now here is what going to happened.
          FIRST, Browser will put an image with 1000x750 (NB! Not yet rotated) into the box 100x200
          and apply height: 100%.
    
          ┌────┬──────┬────┐  This will scale an image according to rules of proportions:
          │░░░░│▓▓▓▓▓▓│░░░░│  (https://en.wikipedia.org/wiki/Cross-multiplication#Rule_of_Three)
          │░░░░│▓▓▓▓▓▓│░░░░│  (orig img height) -> (scaled down img height)
          │░░░░│▓▓▓▓▓▓│░░░░│  750px             -> 200px  (is === container height, since `height: 100%`)
          └────┴──────┴────┘  (orig img width)  -> (scaled down img width)
                  ↑           1000px            -> (200 x 1000) / 750 = 266.66px
           266x200 image in
           100x200 container.
    
          And only NOW browser will apply rotate: 90deg and turn image around.
          And we end up with this:
    
          ┌──────────┐   Where 200x266 image
          │░░░░░░░░░░│   in the 100x200 container.
          │░┌──────┐░│
          │░│▓▓▓▓▓▓│░│
          │░│▓▓▓▓▓▓│░│
          │░│▓▓▓▓▓▓│░│
          │░└──────┘░│
          │░░░░░░░░░░│
          └──────────┘
    
          To combat this we will not make height: 100% but use ratio of an image.
          In this case imgRatio is now 0.75 (after flipping)
          
          New math will look like this:
          (orig img height) -> (scaled down img height)
          750px             -> (0.75 x 200px) = 150px (since `height: 75%`)
          (orig img width)  -> (scaled down img width)
          1000px            -> (150 x 1000) / 750 = 200px
    
          ┌─┬──────┬─┐  Now 150x200 image
          │░│▓▓▓▓▓▓│░│  is in 100x200 container.
          │░│▓▓▓▓▓▓│░│
          │░│▓▓▓▓▓▓│░│
          │░│▓▓▓▓▓▓│░│
          └─┴──────┴─┘
    
          Unfortunately this is not over yet.
    
    
    
          Example #2:
    
          Input parameters:
            parentWidth: 100
            parentHeight: 200
            imgWidth: 1000
            imgHeight: 750
            crop: false (means we want to fit)  <-- This is only changed parameter
            stretch: true
            previewOrientation: 6
    
          Final variable values will be:
            imgRatio: 0.75
            parentRatio: 0.5
            isCoverStrategy: false
            isFitStrategy: true
            isImageRotated: true
            isImageMoreLandscapyThanContainer: true
            isStretchingAllowed: true
    
           According to this variables state css will become:
            width: 100%;
    
          FIRST, Browser will put an image with 1000x750 (NB! Not yet rotated) into the box 100x200
          and apply width: 100%.
    
          ┌────────┐  This will scale an image according to rules of proportions:
          │░░░░░░░░│  (https://en.wikipedia.org/wiki/Cross-multiplication#Rule_of_Three)
          ├────────┤  (orig img width)  -> (scaled down img width)
          │▓▓▓▓▓▓▓▓│  1000px            -> 100px (is === container width, since `width: 100%`)
          │▓▓▓▓▓▓▓▓│  (orig img height) -> (scaled down img height)
          ├────────┤  750px             -> (750x100) / 1000 = 75px
          │░░░░░░░░│
          └────────┘
              ↑
           100x75 image in
           100x200 container.
    
          Now browser will turn image 90degrees and we und up with:
          ┌──────────┐
          │          │  75x100 image in
          │ ┌──────┐ │  100x200 container
          │ │▓▓▓▓▓▓│ │
          │ │▓▓▓▓▓▓│ │
          │ │▓▓▓▓▓▓│ │
          │ └──────┘ │
          │          │
          └──────────┘
    
          This looks familiar, and you might want to try what we did before and apply 75% not 100%.
          Unfortunately this will make it even worse. If you do calculation you will find out that
          final result will be 75x56 image in 100x200 container. For this and one more specific
          variables state we need to use original imgRatio for percent size. In this case it's 1.333, so
          134%
    
          New math will look like this:
          (orig img width)  -> (scaled down img width)
          1000px            -> (100px * 1.34) = 134px (since `width: 134%`)
          (orig img height) -> (scaled down img height)
          750px             -> (750x134) / 1000 = 100px
    
          So, 100x134 image in 100x200 container.
         */
        if (isImageRotated) {
            imgRatio = 1 / imgRatio;
            percentSize = Math.ceil(imgRatio * 100) + "%";
        }
        /*
          Here is an example of when isImageMoreLandscapyThanContainer is true:
    
            Image      Container   OR   Image      Container
           ________      _____          ____           __
          |        | -> |     |        |    |   ->    |  |
          |________|    |_____|        |    |         |  |
                                       |    |         |  |
                                       |    |         |  |
                                       |____|         |__|
    
          For false just swap "Image" and "Container" in the example above.
         */
        var isImageMoreLandscapyThanContainer = imgRatio > parentRatio;
        /*
        This is two cases we need to cover as described in Example #2 above.
         */
        var needToFlipRatioBack = isImageRotated &&
            ((isFitStrategy && isImageMoreLandscapyThanContainer) ||
                (isCoverStrategy && !isImageMoreLandscapyThanContainer));
        if (needToFlipRatioBack) {
            percentSize = Math.ceil((1 / imgRatio) * 100) + "%";
        }
        /*
          When isStretchingAllowed is false image is as big as it is, but as small as container
          (according to strategy - cover or fit).
          isStretchingAllowed is true if image is bigger then container.
         */
        var isStretchingAllowed = stretch;
        /*
          We do not want to show image until we finish deciding on sizing strategy.
          Though if it is a "fit" strategy (and image hasn't been rotated) we can display it right away,
          since it doesn't depend on isImageMoreLandscapyThanContainer nor it will change when isStretchingAllowed
          changes it's value after imgRatio and parentRatio get defined.
          The reason for exclude isImageRotated is that we need to calculate percentSize variable
          and we can do that only when image is loaded (and we have image size)
         */
        var showImage = isImageLoaded || (isFitStrategy && !isImageRotated);
        var style = {
            transform: 'translate(-50%, -50%)',
        };
        if (isStretchingAllowed) {
            if (isFitStrategy && isImageMoreLandscapyThanContainer) {
                /*
                  Image matches its width to container's and height scales accordingly.
        
                    Image       Container       Result
                               ┌─────────┐    ┌─────────┐
                   ┌──────┐    │         │    ├─────────┤
                   │▓▓▓▓▓▓│ -> │         │ => │▓▓▓▓▓▓▓▓▓│
                   │▓▓▓▓▓▓│    │         │    │▓▓▓▓▓▓▓▓▓│
                   └──────┘    │         │    ├─────────┤
                               └─────────┘    └─────────┘
                 */
                style.width = percentSize;
            }
            else if (isFitStrategy && !isImageMoreLandscapyThanContainer) {
                /*
                  Image matches its height to container's and width scales accordingly.
                 */
                style.height = percentSize;
            }
            else if (isCoverStrategy && isImageMoreLandscapyThanContainer) {
                /*
                  In order to cover whole container guaranteed (even in expense of stretching)
                  image matches its height to container's. Width scales accordingly and crops out sides.
        
                     Image       Container    Result (░ - is what cropped out)
                               ┌─────────┐    ┌──┬──────┬──┐
                   ┌──────┐    │         │    │░░│▓▓▓▓▓▓│░░│
                   │▓▓▓▓▓▓│ -> │         │ => │░░│▓▓▓▓▓▓│░░│
                   │▓▓▓▓▓▓│    │         │    │░░│▓▓▓▓▓▓│░░│
                   └──────┘    │         │    │░░│▓▓▓▓▓▓│░░│
                               └─────────┘    └──┴──────┴──┘
                 */
                style.height = percentSize;
            }
            else if (isCoverStrategy && !isImageMoreLandscapyThanContainer) {
                style.width = percentSize;
            }
        }
        else {
            if (isFitStrategy) {
                /*
                  We want image to be as wide and as height as container but not bigger then it's own size.
        
                    Image       Container       Result
                   ┌───────────┐    ┌─────────┐    ┌─────────┐
                   │▓▓▓▓▓▓▓▓▓▓▓│    │         │    ├─────────┤
                   │▓▓▓▓▓▓▓▓▓▓▓│    │         │    │▓▓▓▓▓▓▓▓▓│
                   │▓▓▓▓▓▓▓▓▓▓▓│->  │         │ => │▓▓▓▓▓▓▓▓▓│
                   └───────────┘    │         │    │▓▓▓▓▓▓▓▓▓│
                                    │         │    ├─────────┤
                                    └─────────┘    └─────────┘
        
                 And if image is smaller it doesn't change its size
        
                    Image       Container       Result
                               ┌──────────┐    ┌──────────┐
                               │          │    │          │
                   ┌──────┐    │          │    │ ┌──────┐ │
                   │▓▓▓▓▓▓│ -> │          │ => │ │▓▓▓▓▓▓│ │
                   │▓▓▓▓▓▓│    │          │    │ │▓▓▓▓▓▓│ │
                   └──────┘    │          │    │ └──────┘ │
                               │          │    │          │
                               └──────────┘    └──────────┘
                 */
                style.maxWidth = percentSize;
                style.maxHeight = percentSize;
            }
            else if (isCoverStrategy && isImageMoreLandscapyThanContainer) {
                /*
                  We want to fill container but we can't stretch an image if it's smaller then container.
        
                    Image            Container       Result
                   ┌────────────┐    ┌───────┐    ┌──┬───────┬──┐
                   │▓▓▓▓▓▓▓▓▓▓▓▓│    │       │    │░░│▓▓▓▓▓▓▓│░░│
                   │▓▓▓▓▓▓▓▓▓▓▓▓│    │       │    │░░│▓▓▓▓▓▓▓│░░│
                   │▓▓▓▓▓▓▓▓▓▓▓▓│->  │       │ => │░░│▓▓▓▓▓▓▓│░░│
                   │▓▓▓▓▓▓▓▓▓▓▓▓│    └───────┘    └──┴───────┴──┘
                   └────────────┘
        
                 */
                style.maxHeight = percentSize;
            }
            else if (isCoverStrategy && !isImageMoreLandscapyThanContainer) {
                style.maxWidth = percentSize;
            }
        }
        if (!showImage) {
            style.display = 'none';
        }
        if (previewOrientation && previewOrientation > 1) {
            var transform = Object(imageOrientationUtil["a" /* getCssFromImageOrientation */])(previewOrientation);
            style.transform += " " + transform;
        }
        return (react["createElement"](ImageComponent, { draggable: false, style: style, onLoad: this.onImageLoad, onError: onImageError, innerRef: this.imageRef, src: dataURI, crossOrigin: crossOrigin }));
    };
    MediaImage.defaultProps = {
        crop: true,
        stretch: false,
    };
    return MediaImage;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/ellipsify.js
var ellipsify = __webpack_require__(992);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/vid-play.js
var vid_play = __webpack_require__(1000);
var vid_play_default = /*#__PURE__*/__webpack_require__.n(vid_play);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(64);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/check.js
var check = __webpack_require__(975);
var check_default = /*#__PURE__*/__webpack_require__.n(check);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/image.js
var glyph_image = __webpack_require__(967);
var image_default = /*#__PURE__*/__webpack_require__.n(glyph_image);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/audio.js
var audio = __webpack_require__(1072);
var audio_default = /*#__PURE__*/__webpack_require__.n(audio);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/video.js
var video = __webpack_require__(961);
var video_default = /*#__PURE__*/__webpack_require__.n(video);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/document.js
var glyph_document = __webpack_require__(1073);
var document_default = /*#__PURE__*/__webpack_require__.n(glyph_document);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/page.js
var page = __webpack_require__(1074);
var page_default = /*#__PURE__*/__webpack_require__.n(page);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/mediaTypeIcon/styled.js



var typeToColorMap = {
    image: theme["colors"].Y200,
    audio: theme["colors"].P200,
    video: '#ff7143',
    doc: theme["colors"].B300,
    unknown: '#3dc7dc',
};
var IconWrapper = styled_components_browser_esm["default"].div(styled_templateObject_1 || (styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: inline-flex;\n  color: ", ";\n"], ["\n  display: inline-flex;\n  color: ",
    ";\n"])), function (_a) {
    var type = _a.type;
    return typeToColorMap[type] || typeToColorMap.unknown;
});
var styled_templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/mediaTypeIcon/index.js








var icons = {
    image: image_default.a,
    audio: audio_default.a,
    video: video_default.a,
    doc: document_default.a,
    unknown: page_default.a,
};
var mediaTypeIcon_MediaTypeIcon = /** @class */ (function (_super) {
    tslib_es6["__extends"](MediaTypeIcon, _super);
    function MediaTypeIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaTypeIcon.prototype.render = function () {
        var _a = this.props, type = _a.type, _b = _a.size, size = _b === void 0 ? 'small' : _b, className = _a.className;
        var Icon = (type && icons[type]) || icons.unknown;
        return (react["createElement"](IconWrapper, { type: type || 'unknown' },
            react["createElement"](Icon, { label: "media-type", size: size, className: className })));
    };
    return MediaTypeIcon;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/mixins.js
var mixins = __webpack_require__(395);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/fileIcon/styled.js



var FileTypeIcon = styled_components_browser_esm["default"].div(fileIcon_styled_templateObject_1 || (fileIcon_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  float: left;\n  margin-right: 6px;\n  position: relative;\n  top: 1px;\n  img {\n    ", ";\n  }\n"], ["\n  float: left;\n  margin-right: 6px;\n  position: relative;\n  top: 1px;\n  img {\n    ", ";\n  }\n"])), Object(mixins["g" /* size */])('12px !important'));
var fileIcon_styled_templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/fileIcon/index.js





var fileTypeIconClass = 'file-type-icon';
var fileIcon_FileIcon = /** @class */ (function (_super) {
    tslib_es6["__extends"](FileIcon, _super);
    function FileIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileIcon.prototype.render = function () {
        var _a = this.props, mediaType = _a.mediaType, iconUrl = _a.iconUrl, style = _a.style;
        var type = mediaType || 'unknown';
        var defaultIcon = (react["createElement"](mediaTypeIcon_MediaTypeIcon, { type: mediaType, size: "small", className: fileTypeIconClass }));
        var icon = iconUrl ? (react["createElement"]("img", { src: iconUrl, className: "custom-icon", alt: type })) : (defaultIcon);
        return (react["createElement"](FileTypeIcon, { style: style, className: fileTypeIconClass }, icon));
    };
    return FileIcon;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-card/utils/errorIcon/index.js + 1 modules
var errorIcon = __webpack_require__(408);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/constants.js
var constants = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/styles/config.js
var defaultTransitionDuration = '.3s';
//# sourceMappingURL=config.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/styles/mixins.js


var centerX = "\n  display: flex;\n  justify-content: center;\n";
var antialiased = "\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n";
var centerSelfY = "\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n";
var centerSelfX = "\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n";
var centerSelf = "\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n";
var borderRadiusLeft = "\n  border-top-left-radius: " + Object(constants["f" /* borderRadius */])() + ";\n  border-bottom-left-radius: " + Object(constants["f" /* borderRadius */])() + ";\n";
var spaceAround = "\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n";
var transition = function (propertyName) {
    if (propertyName === void 0) { propertyName = 'all'; }
    return "\n  transition: " + propertyName + " " + defaultTransitionDuration + ";\n";
};
var hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16)
        : null;
};
var rgba = function (hex, opacity) {
    return "rgba(" + hexToRgb(hex) + ", " + opacity + ")";
};
var capitalize = "\n  &::first-letter {\n    text-transform: uppercase;\n  }\n";
var withAppearance = function (styleMap) { return function (_a) {
    var appearance = _a.appearance;
    return (appearance && styleMap[appearance]) || '';
}; };
//# sourceMappingURL=mixins.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/styles/easing.js
var easeOutCubic = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
var easeOutExpo = 'cubic-bezier(0.19, 1, 0.22, 1)';
//# sourceMappingURL=easing.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/styles/animations.js


var spin = Object(styled_components_browser_esm["keyframes"])(animations_templateObject_1 || (animations_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  to { transform: rotate(360deg); }\n"], ["\n  to { transform: rotate(360deg); }\n"])));
var animations_templateObject_1;
//# sourceMappingURL=animations.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/styles/index.js








var Root = styled_components_browser_esm["default"].div(styles_templateObject_1 || (styles_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  box-sizing: border-box;\n  font-family: ", ";\n\n  * {\n    box-sizing: border-box;\n  }\n"], ["\n  box-sizing: border-box;\n  font-family: ", ";\n\n  * {\n    box-sizing: border-box;\n  }\n"])), Object(constants["i" /* fontFamily */])());
var cardShadow = "\n  box-shadow: 0 1px 1px rgba(9, 30, 66, 0.2), 0 0 1px 0 rgba(9, 30, 66, 0.24);\n";
var FadeinImage = styled_components_browser_esm["default"].div(templateObject_2 || (templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  ", ";\n"], ["\n  ", ";\n"])), mixins["f" /* fadeIn */]);
/* harmony default export */ var styles = (Root);
var styles_templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/cardActions/styled.js





var Wrapper = Object(styled_components_browser_esm["default"])(Root)(cardActions_styled_templateObject_1 || (cardActions_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  position: relative;\n  line-height: 0;\n"], ["\n  display: flex;\n  position: relative;\n  line-height: 0;\n"])));
var CardActionButton = styled_components_browser_esm["default"].div(styled_templateObject_2 || (styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  ", " ", " ", " color: ", ";\n\n  &:hover {\n    cursor: pointer;\n    background-color: rgba(9, 30, 66, 0.06);\n  }\n"], ["\n  ", " ", " ", " color: ", ";\n\n  &:hover {\n    cursor: pointer;\n    background-color: rgba(9, 30, 66, 0.06);\n  }\n"])), mixins["d" /* center */], mixins["b" /* borderRadius */], Object(mixins["g" /* size */])(26), theme["colors"].N500);
var cardActions_styled_templateObject_1, styled_templateObject_2;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/cardActions/cardActionIconButton.js




var cardActionIconButton_CardActionIconButton = /** @class */ (function (_super) {
    tslib_es6["__extends"](CardActionIconButton, _super);
    function CardActionIconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActionIconButton.prototype.render = function () {
        var _a = this.props, icon = _a.icon, triggerColor = _a.triggerColor, onClick = _a.onClick;
        return (react["createElement"](CardActionButton, { onClick: onClick, style: { color: triggerColor } }, icon));
    };
    return CardActionIconButton;
}(react["Component"]));

//# sourceMappingURL=cardActionIconButton.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/more.js
var more = __webpack_require__(1075);
var more_default = /*#__PURE__*/__webpack_require__.n(more);

// EXTERNAL MODULE: ./node_modules/@atlaskit/dropdown-menu/components/DropdownMenu.js + 13 modules
var DropdownMenu = __webpack_require__(928);

// EXTERNAL MODULE: ./node_modules/@atlaskit/dropdown-menu/components/group/DropdownItemGroup.js
var DropdownItemGroup = __webpack_require__(911);

// EXTERNAL MODULE: ./node_modules/@atlaskit/dropdown-menu/components/item/DropdownItem.js + 5 modules
var DropdownItem = __webpack_require__(929);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/cardActions/cardActionsDropdownMenu.js






var cardActionsDropdownMenu_CardActionsDropdownMenu = /** @class */ (function (_super) {
    tslib_es6["__extends"](CardActionsDropdownMenu, _super);
    function CardActionsDropdownMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActionsDropdownMenu.prototype.render = function () {
        var _a = this.props, actions = _a.actions, triggerColor = _a.triggerColor, onOpenChange = _a.onOpenChange;
        if (actions.length > 0) {
            return (react["createElement"](DropdownMenu["a" /* default */], { onOpenChange: onOpenChange, trigger: react["createElement"](CardActionButton, { style: { color: triggerColor } },
                    react["createElement"](more_default.a, { label: "more" })) },
                react["createElement"](DropdownItemGroup["a" /* default */], null, actions.map(function (_a, index) {
                    var label = _a.label, handler = _a.handler;
                    return (react["createElement"](DropdownItem["a" /* default */], { key: index, onClick: handler }, label));
                }))));
        }
        else {
            return null;
        }
    };
    return CardActionsDropdownMenu;
}(react["Component"]));

//# sourceMappingURL=cardActionsDropdownMenu.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/preventClickThrough/preventClickThrough.js

function PreventClickThrough(_a) {
    var children = _a.children;
    return (react["createElement"]("span", { onClick: function (event) {
            event.stopPropagation();
            event.preventDefault();
        } }, children));
}
//# sourceMappingURL=preventClickThrough.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/preventClickThrough/index.js

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/cardActions/cardActionsView.js







var cardActionsView_CardActionsView = /** @class */ (function (_super) {
    tslib_es6["__extends"](CardActionsView, _super);
    function CardActionsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActionsView.prototype.render = function () {
        var actions = this.props.actions;
        if (!actions.length) {
            return null;
        }
        var primaryAction = actions.find(actionWithIcon);
        var otherActions = actions.filter(actionNotEqualTo(primaryAction));
        return (react["createElement"](PreventClickThrough, null,
            react["createElement"](Wrapper, null,
                primaryAction ? this.renderActionIconButton(primaryAction) : null,
                this.renderOtherActionButtons(otherActions))));
    };
    CardActionsView.prototype.renderActionIconButton = function (action) {
        var triggerColor = this.props.triggerColor;
        var icon = action.icon, handler = action.handler;
        return (react["createElement"](cardActionIconButton_CardActionIconButton, { icon: icon, triggerColor: triggerColor, onClick: function () { return handler(); } }));
    };
    CardActionsView.prototype.renderOtherActionButtons = function (actions) {
        if (actions.length === 0) {
            return null;
        }
        else {
            var _a = this.props, triggerColor = _a.triggerColor, onToggle = _a.onToggle;
            var firstActionWithIcon = actions.find(actionWithIcon);
            var otherActions = actions.filter(actionNotEqualTo(firstActionWithIcon));
            if (firstActionWithIcon && otherActions.length === 0) {
                return this.renderActionIconButton(firstActionWithIcon);
            }
            else {
                return (react["createElement"](cardActionsDropdownMenu_CardActionsDropdownMenu, { actions: actions, triggerColor: triggerColor, onOpenChange: onToggle }));
            }
        }
    };
    return CardActionsView;
}(react["Component"]));

function actionWithIcon(action) {
    return !!action.icon;
}
function actionNotEqualTo(otherAction) {
    return function (action) { return action !== otherAction; };
}
//# sourceMappingURL=cardActionsView.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/cardActions/index.js



//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/utils/themed.js
var themed = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/files/cardImageView/cardOverlay/styled.js
/**
 * Everything about this file change is just wrong.
 * Mostly because we do bad things with classes.
 * This is all wrong and hopefully will be removed from existence with card v3,
 * so please don’t be too sad about all this!
 */





var TickBox = styled_components_browser_esm["default"].div(cardOverlay_styled_templateObject_1 || (cardOverlay_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  ", " ", " background-color: ", ";\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  border-radius: 20px;\n  color: #798599; /* TODO FIL-3884: Align color with new design */\n  display: flex;\n  opacity: 0;\n\n  &.selected {\n    opacity: 1;\n    color: white;\n    background-color: #0052cc; /* TODO FIL-3884: Align with tickbox icons */\n  }\n\n  /* Enforce dimensions of \"tick\" icon */\n  svg {\n    width: 14px;\n  }\n"], ["\n  ", " ", " background-color: ", ";\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  border-radius: 20px;\n  color: #798599; /* TODO FIL-3884: Align color with new design */\n  display: flex;\n  opacity: 0;\n\n  &.selected {\n    opacity: 1;\n    color: white;\n    background-color: #0052cc; /* TODO FIL-3884: Align with tickbox icons */\n  }\n\n  /* Enforce dimensions of \"tick\" icon */\n  svg {\n    width: 14px;\n  }\n"])), Object(mixins["g" /* size */])(14), transition(), rgba('#ffffff', 0.5));
var Overlay = styled_components_browser_esm["default"].div(cardOverlay_styled_templateObject_2 || (cardOverlay_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  ", " ", " ", " display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  background: transparent;\n  transition: 0.3s background ", ", 0.3s border-color;\n  padding: 16px;\n\n  ", " &:not(.persistent):hover, &.active {\n    .top-row {\n      .title {\n        color: ", ";\n      }\n    }\n\n    .bottom-row {\n      .delete-btn {\n        display: flex;\n      }\n    }\n  }\n\n  &.noHover:hover {\n   .top-row {\n     .title {\n        color: ", ";\n     }\n   }\n  }\n\n  .file-type-icon {\n    display: block;\n  }\n\n  &:not(.persistent) {\n    &:not(.error, .noHover):hover {\n      background-color: ", ";\n    }\n\n    &.selectable {\n      &.selected {\n        background-color: ", ";\n\n        &:hover {\n          /* TODO FIL-3884 add new overlay with rgba(colors.N900, 0.16) */\n        }\n\n        .title,\n        .bottom-row,\n        .file-size,\n        .more-btn {\n          color: ", ";\n        }\n      }\n    }\n  }\n\n  &.persistent {\n    &:not(.active) {\n      overflow: hidden;\n    }\n\n    .top-row {\n      .title {\n        transition: opacity 0.3s;\n        opacity: 0;\n        color: white;\n        visibility: hidden;\n      }\n    }\n\n    .bottom-row {\n      opacity: 0;\n      transition: transform 0.2s, opacity 0.5s;\n      /* This is the height of the overlay footer, needs to be present now since the parent uses flex and 100% doesn't look right anymore */\n      transform: translateY(35px);\n\n      .file-type-icon {\n        display: none;\n      }\n\n      .file-size {\n        color: white;\n        display: none;\n      }\n\n      .more-btn {\n        color: ", ";\n        display: none;\n\n        &:hover {\n          background-color: rgba(9, 30, 66, 0.2);\n        }\n      }\n\n      .delete-btn {\n        display: none;\n\n        &:hover {\n          background-color: rgba(9, 30, 66, 0.2);\n        }\n      }\n    }\n\n    &:hover,\n    &.active {\n      background-color: ", ";\n\n      .title {\n        opacity: 1;\n        visibility: visible;\n      }\n\n      .file-type-icon,\n      .file-size {\n        display: block;\n      }\n\n      .more-btn {\n        ", " color: ", ";\n      }\n\n      .delete-btn {\n        display: flex;\n      }\n\n      .bottom-row {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    /* Selectable */\n    &.selectable {\n      &:hover {\n        .tickbox {\n          opacity: 1;\n        }\n      }\n\n      &.selected {\n        .tickbox {\n          background-color: ", " !important;\n          border-color: ", " !important;\n          color: white;\n        }\n      }\n    }\n  }\n\n  &.error {\n    .top-row {\n      overflow: visible;\n    }\n    &:hover,\n    &.active {\n      .top-row {\n        .title {\n          color: ", ";\n        }\n      }\n    }\n  }\n"], ["\n  ", " ", " ", " display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  background: transparent;\n  transition: 0.3s background ", ", 0.3s border-color;\n  padding: 16px;\n\n  ",
    " &:not(.persistent):hover, &.active {\n    .top-row {\n      .title {\n        color: ", ";\n      }\n    }\n\n    .bottom-row {\n      .delete-btn {\n        display: flex;\n      }\n    }\n  }\n\n  &.noHover:hover {\n   .top-row {\n     .title {\n        color: ", ";\n     }\n   }\n  }\n\n  .file-type-icon {\n    display: block;\n  }\n\n  &:not(.persistent) {\n    &:not(.error, .noHover):hover {\n      background-color: ", ";\n    }\n\n    &.selectable {\n      &.selected {\n        background-color: ", ";\n\n        &:hover {\n          /* TODO FIL-3884 add new overlay with rgba(colors.N900, 0.16) */\n        }\n\n        .title,\n        .bottom-row,\n        .file-size,\n        .more-btn {\n          color: ", ";\n        }\n      }\n    }\n  }\n\n  &.persistent {\n    &:not(.active) {\n      overflow: hidden;\n    }\n\n    .top-row {\n      .title {\n        transition: opacity 0.3s;\n        opacity: 0;\n        color: white;\n        visibility: hidden;\n      }\n    }\n\n    .bottom-row {\n      opacity: 0;\n      transition: transform 0.2s, opacity 0.5s;\n      /* This is the height of the overlay footer, needs to be present now since the parent uses flex and 100% doesn't look right anymore */\n      transform: translateY(35px);\n\n      .file-type-icon {\n        display: none;\n      }\n\n      .file-size {\n        color: white;\n        display: none;\n      }\n\n      .more-btn {\n        color: ", ";\n        display: none;\n\n        &:hover {\n          background-color: rgba(9, 30, 66, 0.2);\n        }\n      }\n\n      .delete-btn {\n        display: none;\n\n        &:hover {\n          background-color: rgba(9, 30, 66, 0.2);\n        }\n      }\n    }\n\n    &:hover,\n    &.active {\n      background-color: ", ";\n\n      .title {\n        opacity: 1;\n        visibility: visible;\n      }\n\n      .file-type-icon,\n      .file-size {\n        display: block;\n      }\n\n      .more-btn {\n        ", " color: ", ";\n      }\n\n      .delete-btn {\n        display: flex;\n      }\n\n      .bottom-row {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    /* Selectable */\n    &.selectable {\n      &:hover {\n        .tickbox {\n          opacity: 1;\n        }\n      }\n\n      &.selected {\n        .tickbox {\n          background-color: ", " !important;\n          border-color: ", " !important;\n          color: white;\n        }\n      }\n    }\n  }\n\n  &.error {\n    .top-row {\n      overflow: visible;\n    }\n    &:hover,\n    &.active {\n      .top-row {\n        .title {\n          color: ", ";\n        }\n      }\n    }\n  }\n"])), Object(mixins["g" /* size */])(), Object(mixins["a" /* absolute */])(), mixins["b" /* borderRadius */], easeOutCubic, function (_a) {
    var hasError = _a.hasError, noHover = _a.noHover;
    if (hasError || noHover) {
        return "\n        cursor: default;\n\n        &:hover {\n          background: transparent;\n        }\n      ";
    }
    return '';
}, theme["colors"].B400, theme["colors"].N800, rgba(theme["colors"].N900, 0.06), theme["colors"].B200, theme["colors"].N0, theme["colors"].N0, rgba(theme["colors"].N900, 0.5), centerX, theme["colors"].N0, theme["colors"].B200, theme["colors"].B200, theme["colors"].N800);
var ErrorLine = styled_components_browser_esm["default"].div(templateObject_3 || (templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  height: 24px;\n  display: flex;\n  align-items: center;\n"], ["\n  height: 24px;\n  display: flex;\n  align-items: center;\n"])));
var LeftColumn = styled_components_browser_esm["default"].div(templateObject_4 || (templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  width: 100%;\n  position: relative;\n  box-sizing: border-box;\n  vertical-align: middle;\n"], ["\n  width: 100%;\n  position: relative;\n  box-sizing: border-box;\n  vertical-align: middle;\n"])));
var TopRow = styled_components_browser_esm["default"].div(templateObject_5 || (templateObject_5 = tslib_es6["__makeTemplateObject"]([""], [""])));
var BottomRow = styled_components_browser_esm["default"].div(templateObject_6 || (templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  z-index: 1;\n  height: 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  z-index: 1;\n  height: 16px;\n"])));
var RightColumn = styled_components_browser_esm["default"].div(templateObject_7 || (templateObject_7 = tslib_es6["__makeTemplateObject"]([""], [""])));
var ErrorMessage = styled_components_browser_esm["default"].div(templateObject_8 || (templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  ", " display: inline-block;\n  vertical-align: middle;\n  font-weight: bold;\n  color: ", ";\n  font-size: 12px;\n  line-height: 15px;\n  overflow: hidden;\n  max-width: ~'calc(100% - 24px)';\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  ", " display: inline-block;\n  vertical-align: middle;\n  font-weight: bold;\n  color: ", ";\n  font-size: 12px;\n  line-height: 15px;\n  overflow: hidden;\n  max-width: ~'calc(100% - 24px)';\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), antialiased, theme["colors"].N70);
var Retry = styled_components_browser_esm["default"].div(templateObject_9 || (templateObject_9 = tslib_es6["__makeTemplateObject"](["\n  ", " box-sizing: border-box;\n  margin-left: 5px;\n  font-weight: bold;\n  color: ", ";\n  font-size: 12px;\n\n  &:hover {\n    cursor: pointer;\n    text-decoration: underline;\n    color: ", ";\n  }\n"], ["\n  ", " box-sizing: border-box;\n  margin-left: 5px;\n  font-weight: bold;\n  color: ", ";\n  font-size: 12px;\n\n  &:hover {\n    cursor: pointer;\n    text-decoration: underline;\n    color: ", ";\n  }\n"])), antialiased, theme["colors"].B400, theme["colors"].B300);
var ErrorWrapper = styled_components_browser_esm["default"].div(templateObject_10 || (templateObject_10 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var TitleWrapper = styled_components_browser_esm["default"].div(templateObject_11 || (templateObject_11 = tslib_es6["__makeTemplateObject"](["\n  box-sizing: border-box;\n  word-wrap: break-word;\n  color: ", ";\n  font-size: 12px;\n  line-height: 18px;\n"], ["\n  box-sizing: border-box;\n  word-wrap: break-word;\n  color: ", ";\n  font-size: 12px;\n  line-height: 18px;\n"])), Object(themed["a" /* default */])({ light: theme["colors"].N800, dark: theme["colors"].DN900 }));
var Subtitle = styled_components_browser_esm["default"].div(templateObject_12 || (templateObject_12 = tslib_es6["__makeTemplateObject"](["\n  ", " font-size: 12px;\n  color: #5e6c84;\n"], ["\n  ", " font-size: 12px;\n  color: #5e6c84;\n"])), Object(mixins["e" /* ellipsis */])('100px'));
var Metadata = styled_components_browser_esm["default"].div(templateObject_13 || (templateObject_13 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var cardOverlay_styled_templateObject_1, cardOverlay_styled_templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/files/cardImageView/cardOverlay/index.js








// We dont require things directly from "utils" to avoid circular dependencies




var cardOverlay_CardOverlay = /** @class */ (function (_super) {
    tslib_es6["__extends"](CardOverlay, _super);
    function CardOverlay(props) {
        var _this = _super.call(this, props) || this;
        _this.onMenuToggle = function (attrs) {
            _this.setState({ isMenuExpanded: attrs.isOpen });
        };
        _this.state = {
            isMenuExpanded: false,
        };
        return _this;
    }
    Object.defineProperty(CardOverlay.prototype, "wrapperClassNames", {
        get: function () {
            var _a = this.props, error = _a.error, noHover = _a.noHover, selectable = _a.selectable, selected = _a.selected, mediaType = _a.mediaType, persistent = _a.persistent;
            var isMenuExpanded = this.state.isMenuExpanded;
            return error
                ? classnames_default()('overlay', { error: error, active: isMenuExpanded })
                : classnames_default()('overlay', mediaType, {
                    active: isMenuExpanded,
                    selectable: selectable,
                    selected: selected,
                    // Yes, you right. We put "persistent" class when it is NOT persistent. 🤦
                    persistent: !persistent,
                    noHover: noHover,
                });
        },
        enumerable: true,
        configurable: true
    });
    CardOverlay.prototype.render = function () {
        var _a = this.props, error = _a.error, noHover = _a.noHover, mediaName = _a.mediaName, persistent = _a.persistent, actions = _a.actions;
        var titleText = error || !mediaName ? '' : mediaName;
        var menuTriggerColor = !persistent ? 'white' : undefined;
        return (react["createElement"](Overlay, { hasError: !!error, noHover: noHover, className: this.wrapperClassNames },
            react["createElement"](TopRow, { className: 'top-row' },
                this.errorLine(),
                react["createElement"](TitleWrapper, { className: 'title' },
                    react["createElement"](ellipsify["a" /* Ellipsify */], { text: titleText, lines: 2 })),
                this.tickBox()),
            react["createElement"](BottomRow, { className: 'bottom-row' },
                react["createElement"](LeftColumn, null, this.bottomLeftColumn()),
                react["createElement"](RightColumn, null, actions ? (react["createElement"](cardActionsView_CardActionsView, { actions: actions, onToggle: this.onMenuToggle, triggerColor: menuTriggerColor })) : null))));
    };
    CardOverlay.prototype.errorLine = function () {
        var error = this.props.error;
        return (error && (react["createElement"](ErrorLine, null,
            react["createElement"](ErrorMessage, null, this.props.error))));
    };
    CardOverlay.prototype.tickBox = function () {
        var _a = this.props, selected = _a.selected, selectable = _a.selectable;
        var tick = react["createElement"](check_default.a, { label: "tick" });
        var className = classnames_default()('tickbox', { selected: selected });
        return selectable && react["createElement"](TickBox, { className: className },
            " ",
            tick,
            " ");
    };
    CardOverlay.prototype.bottomLeftColumn = function () {
        var _a = this.props, error = _a.error, onRetry = _a.onRetry;
        if (error) {
            if (!onRetry) {
                return react["createElement"](errorIcon["a" /* ErrorIcon */], null);
            }
            return (react["createElement"](ErrorWrapper, null,
                react["createElement"](errorIcon["a" /* ErrorIcon */], null),
                react["createElement"](Retry, { onClick: onRetry },
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].retry)))));
        }
        else {
            var _b = this.props, mediaType = _b.mediaType, subtitle = _b.subtitle, icon = _b.icon;
            var classNames_1 = classnames_default()('metadata');
            var fileIcon = mediaType || icon ? (react["createElement"](fileIcon_FileIcon, { mediaType: mediaType, iconUrl: icon })) : null;
            var subtitleEl = subtitle ? (react["createElement"](Subtitle, { className: "file-size" }, subtitle)) : null;
            return (react["createElement"]("div", null,
                react["createElement"](Metadata, { className: classNames_1 },
                    fileIcon,
                    subtitleEl)));
        }
    };
    CardOverlay.prototype.removeBtnClick = function (handler) {
        return function (e) {
            e.preventDefault();
            e.stopPropagation();
            handler();
        };
    };
    CardOverlay.defaultProps = {
        actions: [],
        mediaName: '',
    };
    return CardOverlay;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/styles/getSelectedBorderStyle.js


/*
 * Used to display the blue border around a selected card without
 * shrinking the image OR growing the card size
 */
var getSelectedBorderStyle = function (_a) {
    var selected = _a.selected;
    var border = "border: 2px solid " + (selected ? theme["colors"].B200 : 'transparent') + ";";
    return "\n    &::after {\n      content: '';\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      box-sizing: border-box;\n      pointer-events: none;\n      " + mixins["b" /* borderRadius */] + " \n      " + border + ";\n    }\n  ";
};
//# sourceMappingURL=getSelectedBorderStyle.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/files/cardImageView/styled.js






var getShadowAttribute = function (props) {
    var disableOverlay = props.disableOverlay;
    return disableOverlay ? '' : cardShadow;
};
var getBackgroundColor = function (props) {
    var mediaType = props.mediaType;
    return "background: " + (mediaType === 'image'
        ? 'transparent'
        : Object(themed["a" /* default */])({ light: theme["colors"].N20, dark: theme["colors"].DN50 })(props)) + ";";
};
var styled_Wrapper = Object(styled_components_browser_esm["default"])(Root)(cardImageView_styled_templateObject_1 || (cardImageView_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  ", "\n  ", "\n  ", "\n\n  line-height: normal;\n  position: relative;\n\n  ", "\n\n  ", " .wrapper {\n    ", ";\n    display: block;\n    height: inherit;\n    position: relative;\n\n    .img-wrapper {\n      position: relative;\n      width: inherit;\n      height: inherit;\n      display: block;\n      overflow: hidden;\n      ", "\n    }\n  }\n"], ["\n  ", "\n  ", "\n  ", "\n\n  line-height: normal;\n  position: relative;\n\n  ", "\n\n  ", " .wrapper {\n    ", ";\n    display: block;\n    height: inherit;\n    position: relative;\n\n    .img-wrapper {\n      position: relative;\n      width: inherit;\n      height: inherit;\n      display: block;\n      overflow: hidden;\n      ", "\n    }\n  }\n"])), getShadowAttribute, mixins["b" /* borderRadius */], getBackgroundColor, getSelectedBorderStyle, Object(mixins["g" /* size */])(), mixins["b" /* borderRadius */], mixins["b" /* borderRadius */]);
var PlayIconWrapper = styled_components_browser_esm["default"].div(cardImageView_styled_templateObject_2 || (cardImageView_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n\n  /* we want to override default icon size and hover state */\n  &:hover > * {\n    width: 64px;\n    height: 64px;\n  }\n\n  > * {\n    background: rgba(23, 43, 77, 0.7);\n    width: 56px;\n    height: 56px;\n    border-radius: 100%;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.1s;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n\n  /* we want to override default icon size and hover state */\n  &:hover > * {\n    width: 64px;\n    height: 64px;\n  }\n\n  > * {\n    background: rgba(23, 43, 77, 0.7);\n    width: 56px;\n    height: 56px;\n    border-radius: 100%;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.1s;\n  }\n"])));
var bodyHeight = 26;
var ProgressBarWrapper = styled_components_browser_esm["default"].div(styled_templateObject_3 || (styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  position: relative;\n  height: inherit;\n"], ["\n  position: relative;\n  height: inherit;\n"])));
var styled_Overlay = styled_components_browser_esm["default"].div(styled_templateObject_4 || (styled_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  ", " ", " border-radius: inherit;\n  background-color: rgba(9, 30, 66, 0.5);\n"], ["\n  ", " ", " border-radius: inherit;\n  background-color: rgba(9, 30, 66, 0.5);\n"])), Object(mixins["a" /* absolute */])(), Object(mixins["g" /* size */])());
var Title = styled_components_browser_esm["default"].div(styled_templateObject_5 || (styled_templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  ", " width: 100%;\n  padding: 8px;\n  color: ", ";\n  font-size: 12px;\n  line-height: 18px;\n  word-wrap: break-word;\n"], ["\n  ", " width: 100%;\n  padding: 8px;\n  color: ", ";\n  font-size: 12px;\n  line-height: 18px;\n  word-wrap: break-word;\n"])), Object(mixins["a" /* absolute */])(), theme["colors"].N0);
var Body = styled_components_browser_esm["default"].div(styled_templateObject_6 || (styled_templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 8px;\n  color: ", ";\n"], ["\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 8px;\n  color: ", ";\n"])), theme["colors"].N0);
var ProgressWrapper = styled_components_browser_esm["default"].div(styled_templateObject_7 || (styled_templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  flex-grow: 1;\n\n  /*\n    force the height to always be 20px (the height of the cancel icon),\n    so that the height of the progress bar doesn't jump when cards with\n    and without a cancel icon are rendered side-by-side.\n  */\n  height: ", "px;\n\n  /*\n    vertically center the progress bar within the 20px, keeping the progress bar full width\n  */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  flex-grow: 1;\n\n  /*\n    force the height to always be 20px (the height of the cancel icon),\n    so that the height of the progress bar doesn't jump when cards with\n    and without a cancel icon are rendered side-by-side.\n  */\n  height: ", "px;\n\n  /*\n    vertically center the progress bar within the 20px, keeping the progress bar full width\n  */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])), bodyHeight);
var CardActionsWrapper = styled_components_browser_esm["default"].div(styled_templateObject_8 || (styled_templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  margin-left: 4px;\n  /*\n    button must appear above overlay\n   */\n  z-index: 2;\n"], ["\n  margin-left: 4px;\n  /*\n    button must appear above overlay\n   */\n  z-index: 2;\n"])));
var cardImageView_styled_templateObject_1, cardImageView_styled_templateObject_2, styled_templateObject_3, styled_templateObject_4, styled_templateObject_5, styled_templateObject_6, styled_templateObject_7, styled_templateObject_8;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/isLoadingImage.js
var isLoadingImage = function (mediaType, dataURI) {
    return mediaType === 'image' && !dataURI;
};
//# sourceMappingURL=isLoadingImage.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-card/utils/lightCards/cardLoading.js
var cardLoading = __webpack_require__(405);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/shouldDisplayImageThumbnail.js
var shouldDisplayImageThumbnail = function (dataURI, mediaType) {
    return !!(mediaType !== 'doc' && dataURI);
};
//# sourceMappingURL=shouldDisplayImageThumbnail.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/progressBar/styled.js



var styled_ProgressWrapper = styled_components_browser_esm["default"].div(progressBar_styled_templateObject_1 || (progressBar_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  ", " z-index: 30;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.3);\n\n  .progressBar {\n    width: 0%;\n    height: 3px;\n    background-color: white;\n  }\n"], ["\n  ", " z-index: 30;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.3);\n\n  .progressBar {\n    width: 0%;\n    height: 3px;\n    background-color: white;\n  }\n"])), mixins["b" /* borderRadius */]);
var progressBar_styled_templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/progressBar/index.js




var progressBar_ProgressBar = /** @class */ (function (_super) {
    tslib_es6["__extends"](ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        if (typeof this.props.progress !== 'number') {
            return null;
        }
        var progress = Math.min(1, Math.max(0, this.props.progress));
        var progressBarStyle = { width: progress * 100 + "%" };
        return (react["createElement"](styled_ProgressWrapper, null,
            react["createElement"]("div", { className: 'progressBar', style: progressBarStyle })));
    };
    return ProgressBar;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/files/cardImageView/index.js












var cardImageView_FileCardImageView = /** @class */ (function (_super) {
    tslib_es6["__extends"](FileCardImageView, _super);
    function FileCardImageView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderCardContents = function () {
            var status = _this.props.status;
            if (status === 'error') {
                return _this.renderErrorContents();
            }
            else if (status === 'failed-processing') {
                return _this.renderFailedContents();
            }
            if (_this.isImageNotReadyForDisplay) {
                return _this.renderLoadingContents();
            }
            return _this.renderSuccessCardContents();
        };
        _this.renderLoadingContents = function () {
            return (react["createElement"]("div", { className: "wrapper" },
                react["createElement"]("div", { className: "img-wrapper" },
                    react["createElement"](cardLoading["a" /* CardLoading */], null))));
        };
        _this.renderErrorContents = function () {
            var _a = _this.props, error = _a.error, mediaName = _a.mediaName, mediaType = _a.mediaType, onRetry = _a.onRetry, actions = _a.actions, fileSize = _a.fileSize;
            return (react["createElement"](react["Fragment"], null,
                react["createElement"]("div", { className: "wrapper" }),
                react["createElement"](cardOverlay_CardOverlay, { persistent: true, mediaName: mediaName, mediaType: mediaType, error: error, onRetry: onRetry, actions: actions, subtitle: fileSize })));
        };
        _this.renderFailedContents = function () {
            var _a = _this.props, mediaName = _a.mediaName, mediaType = _a.mediaType, actions = _a.actions, fileSize = _a.fileSize;
            return (react["createElement"](react["Fragment"], null,
                react["createElement"]("div", { className: "wrapper" }),
                react["createElement"](cardOverlay_CardOverlay, { noHover: true, persistent: true, mediaName: mediaName, mediaType: mediaType, actions: actions, subtitle: fileSize })));
        };
        _this.renderUploadingCardOverlay = function () {
            var _a = _this.props, mediaType = _a.mediaType, dataURI = _a.dataURI, selectable = _a.selectable, selected = _a.selected;
            var isPersistent = mediaType === 'doc' || !dataURI;
            return (react["createElement"](cardOverlay_CardOverlay, { persistent: isPersistent, selectable: selectable, selected: selected }));
        };
        _this.renderPlayButton = function () {
            var mediaType = _this.props.mediaType;
            if (mediaType !== 'video') {
                return null;
            }
            return (react["createElement"](PlayIconWrapper, null,
                react["createElement"](vid_play_default.a, { label: "play", size: "large" })));
        };
        _this.renderMediaImage = function () {
            var _a = _this.props, dataURI = _a.dataURI, mediaType = _a.mediaType, previewOrientation = _a.previewOrientation;
            if (shouldDisplayImageThumbnail(dataURI, mediaType)) {
                return (react["createElement"](mediaImage_MediaImage, { dataURI: dataURI, crop: _this.isCropped, stretch: _this.isStretched, previewOrientation: previewOrientation }));
            }
            return null;
        };
        _this.renderProgressBar = function () {
            var _a = _this.props, mediaName = _a.mediaName, progress = _a.progress, actions = _a.actions, status = _a.status;
            if (status !== 'uploading') {
                return null;
            }
            return (react["createElement"](ProgressBarWrapper, null,
                react["createElement"](styled_Overlay, null,
                    react["createElement"](Title, null,
                        react["createElement"](ellipsify["a" /* Ellipsify */], { text: mediaName || '', lines: 2 })),
                    react["createElement"](Body, null,
                        react["createElement"](ProgressWrapper, null,
                            react["createElement"](progressBar_ProgressBar, { progress: progress })),
                        react["createElement"](CardActionsWrapper, null, actions ? (react["createElement"](cardActionsView_CardActionsView, { actions: actions, triggerColor: "white" })) : null)))));
        };
        _this.renderSuccessCardContents = function () {
            var _a = _this.props, disableOverlay = _a.disableOverlay, selectable = _a.selectable, status = _a.status;
            var overlay = null;
            if (!disableOverlay) {
                if (status === 'uploading') {
                    if (selectable) {
                        overlay = _this.renderUploadingCardOverlay();
                    }
                }
                else {
                    overlay = _this.renderSuccessCardOverlay();
                }
            }
            return (react["createElement"]("div", { className: "wrapper" },
                react["createElement"]("div", { className: "img-wrapper" },
                    _this.renderMediaImage(),
                    _this.renderProgressBar(),
                    _this.renderPlayButton()),
                overlay));
        };
        _this.renderSuccessCardOverlay = function () {
            var _a = _this.props, mediaName = _a.mediaName, mediaType = _a.mediaType, fileSize = _a.fileSize, dataURI = _a.dataURI, selectable = _a.selectable, selected = _a.selected, actions = _a.actions;
            var isPersistent = mediaType === 'doc' || !dataURI;
            return (react["createElement"](cardOverlay_CardOverlay, { persistent: isPersistent, selectable: selectable, selected: selected, mediaName: mediaName, mediaType: mediaType, subtitle: fileSize, actions: actions }));
        };
        return _this;
    }
    FileCardImageView.prototype.render = function () {
        var _a = this.props, disableOverlay = _a.disableOverlay, selectable = _a.selectable, selected = _a.selected, mediaType = _a.mediaType;
        return (react["createElement"](styled_Wrapper, { disableOverlay: disableOverlay, selectable: selectable, selected: selected, mediaType: mediaType }, this.renderCardContents()));
    };
    Object.defineProperty(FileCardImageView.prototype, "isImageNotReadyForDisplay", {
        get: function () {
            var _a = this.props, status = _a.status, dataURI = _a.dataURI, mediaType = _a.mediaType;
            if (dataURI) {
                return false;
            }
            return (status === 'loading' ||
                status === 'processing' ||
                isLoadingImage(mediaType, dataURI));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileCardImageView.prototype, "isCropped", {
        get: function () {
            var resizeMode = this.props.resizeMode;
            return resizeMode === 'crop';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileCardImageView.prototype, "isStretched", {
        get: function () {
            var resizeMode = this.props.resizeMode;
            return resizeMode === 'stretchy-fit';
        },
        enumerable: true,
        configurable: true
    });
    FileCardImageView.defaultProps = {
        resizeMode: 'crop',
        disableOverlay: false,
    };
    return FileCardImageView;
}(react["Component"]));

/* harmony default export */ var cardImageView = (cardImageView_FileCardImageView);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/isRetina.js
function isRetina() {
    var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';
    return (window.devicePixelRatio > 1 ||
        (window.matchMedia && window.matchMedia(mediaQuery).matches));
}
//# sourceMappingURL=isRetina.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-card/utils/cardDimensions.js
var cardDimensions = __webpack_require__(397);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/breakpoint.js

var breakpoint_breakpointSize = function (width, sizes) {
    if (sizes === void 0) { sizes = cardBreakpointSizes; }
    var value = parseInt("" + width, 10); // Normalize value
    var keys = Object.keys(sizes);
    var defaultValue = keys[0];
    var breakpoint;
    keys.forEach(function (label) {
        if (value < sizes[label] && !breakpoint) {
            breakpoint = label;
        }
    });
    return breakpoint || defaultValue;
};
var cardBreakpointSizes = {
    small: 173,
    medium: 225,
    large: 300,
    xlarge: Infinity,
};
var breakpointStyles = function (_a) {
    var breakpointSize = _a.breakpointSize;
    switch (breakpointSize) {
        case 'small':
            return "\n        .title {\n          font-size: 12px;\n        }\n        .file-type-icon span {\n          // We need to use important here since we can't use the dimensions provided by the Icon component\n          " + Object(mixins["g" /* size */])('14px !important') + "\n        }\n      ";
        case 'medium':
            return "\n        .title {\n          font-size: 14px;\n        }\n        .file-type-icon span {\n          " + Object(mixins["g" /* size */])('16px !important') + "\n        }\n      ";
        case 'large':
            return "\n        .overlay {\n          padding: 24px;\n        }\n        .title {\n          font-size: 14px;\n        }\n        .file-size {\n          font-size: 14px;\n        }\n        .file-type-icon span {\n          " + Object(mixins["g" /* size */])('18px !important') + "\n        }\n      ";
        case 'xlarge':
            return "\n        border-radius: 2px;\n\n        .title {\n          font-size: 16px;\n        }\n\n        .file-size {\n          font-size: 14px;\n        }\n        \n        .wrapper, .img-wrapper {\n          border-radius: 2px;\n        }\n\n        .overlay {\n          padding: 24px;\n        }\n\n        .file-type-icon span {\n          " + Object(mixins["g" /* size */])('18px !important') + "\n        }\n      ";
    }
};
//# sourceMappingURL=breakpoint.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/isValidPercentageUnit.js
// Utility used to know if the integrator is using percentage values
var isValidPercentageUnit = function (value) {
    var valueString = "" + value;
    return (valueString[valueString.length - 1] === '%' &&
        !isNaN(+valueString.slice(0, -1)));
};
//# sourceMappingURL=isValidPercentageUnit.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/getElementDimension.js

var getElementDimension = function (component, dimension) {
    var element = react_dom["findDOMNode"](component);
    var dimensionValue = element.getBoundingClientRect()[dimension];
    return Math.round(dimensionValue);
};
//# sourceMappingURL=getElementDimension.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/containsPixelUnit.js
var containsPixelUnit = function (value) {
    return value.substr(-2) === 'px' && !isNaN(+value.slice(0, -2));
};
//# sourceMappingURL=containsPixelUnit.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/humanReadableSize.js
var humanReadableSize = __webpack_require__(1185);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/index.js










//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/files/card/index.js







var card_FileCard = /** @class */ (function (_super) {
    tslib_es6["__extends"](FileCard, _super);
    function FileCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileCard.prototype.render = function () {
        return this.renderFile();
    };
    FileCard.prototype.renderFile = function () {
        var _a = this.props, status = _a.status, dimensions = _a.dimensions, selectable = _a.selectable, selected = _a.selected, details = _a.details, dataURI = _a.dataURI, progress = _a.progress, resizeMode = _a.resizeMode, onRetry = _a.onRetry, disableOverlay = _a.disableOverlay, mediaItemType = _a.mediaItemType, previewOrientation = _a.previewOrientation;
        var defaultDetails = {
            id: '',
            name: undefined,
            mediaType: undefined,
            size: undefined,
        };
        var _b = details || defaultDetails, name = _b.name, mediaType = _b.mediaType, size = _b.size;
        var errorMessage = this.isError && (react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].failed_to_load)));
        var fileSize = mediaItemType === 'external-image'
            ? ''
            : Object(humanReadableSize["a" /* toHumanReadableMediaSize */])(size || 0);
        return (react["createElement"](cardImageView_FileCardImageView, { error: errorMessage, dimensions: dimensions, selectable: selectable, selected: selected, dataURI: dataURI, mediaName: name, mediaType: mediaType, fileSize: fileSize, status: status, progress: progress, resizeMode: resizeMode, onRetry: onRetry, actions: this._getActions(), disableOverlay: disableOverlay, previewOrientation: previewOrientation }));
    };
    FileCard.prototype._getActions = function () {
        var _a = this.props, details = _a.details, _b = _a.actions, actions = _b === void 0 ? [] : _b;
        if (!details) {
            return [];
        }
        return actions.map(function (action) { return (tslib_es6["__assign"]({}, action, { handler: function () {
                action.handler({ type: 'file', details: details });
            } })); });
    };
    Object.defineProperty(FileCard.prototype, "isError", {
        get: function () {
            var status = this.props.status;
            return status === 'error';
        },
        enumerable: true,
        configurable: true
    });
    FileCard.defaultProps = {
        actions: [],
    };
    return FileCard;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/files/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/getCSSUnitValue.js
function getCSSUnitValue(value) {
    return typeof value === 'string' ? value : value + "px";
}
//# sourceMappingURL=getCSSUnitValue.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/root/styled.js






var getWrapperHeight = function (dimensions) {
    return dimensions && dimensions.height
        ? "height: " + getCSSUnitValue(dimensions.height) + "; max-height: 100%;"
        : '';
};
var getWrapperWidth = function (dimensions) {
    return dimensions && dimensions.width
        ? "width: " + getCSSUnitValue(dimensions.width) + "; max-width: 100%;"
        : '';
};
var root_styled_Wrapper = styled_components_browser_esm["default"].div(root_styled_templateObject_1 || (root_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (_a) {
    var dimensions = _a.dimensions, _b = _a.breakpointSize, breakpointSize = _b === void 0 ? 'medium' : _b, shouldUsePointerCursor = _a.shouldUsePointerCursor;
    return "\n      " + breakpointStyles({ breakpointSize: breakpointSize }) + "\n      " + getWrapperHeight(dimensions) + "\n      " + getWrapperWidth(dimensions) + "\n      cursor: " + (shouldUsePointerCursor ? 'pointer' : 'default') + ";\n    ";
});
root_styled_Wrapper.displayName = 'CardViewWrapper';
var InlinePlayerWrapper = styled_components_browser_esm["default"].div(root_styled_templateObject_2 || (root_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  overflow: hidden;\n  border-radius: ", ";\n  position: relative;\n\n  max-width: 100%;\n  max-height: 100%;\n\n  ", "\n\n  video {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  overflow: hidden;\n  border-radius: ", ";\n  position: relative;\n\n  max-width: 100%;\n  max-height: 100%;\n\n  ", "\n\n  video {\n    width: 100%;\n    height: 100%;\n  }\n"])), Object(constants["f" /* borderRadius */])(), getSelectedBorderStyle);
InlinePlayerWrapper.displayName = 'InlinePlayerWrapper';
var root_styled_templateObject_1, root_styled_templateObject_2;
//# sourceMappingURL=styled.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-card/version.json
var version = __webpack_require__(1077);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/analyticsUtils.js

var getBaseAnalyticsContext = function (componentName, actionSubjectId) { return ({
    packageVersion: version["b" /* version */],
    packageName: version["a" /* name */],
    componentName: componentName,
    actionSubject: 'MediaCard',
    actionSubjectId: actionSubjectId,
}); };
//# sourceMappingURL=analyticsUtils.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/root/withCardViewAnalyticsContext.js





var mapStatusToAnalyticsLoadStatus = function (status) {
    if (status === 'error' || status === 'failed-processing') {
        return 'fail';
    }
    else if (status === 'loading' || status === 'processing') {
        return 'loading_metadata';
    }
    else {
        return status;
    }
};
var withCardViewAnalyticsContext_WithCardViewAnalyticsContext = /** @class */ (function (_super) {
    tslib_es6["__extends"](WithCardViewAnalyticsContext, _super);
    function WithCardViewAnalyticsContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithCardViewAnalyticsContext.prototype.getBaseAnalyticsContext = function () {
        var mediaItemType = this.props.mediaItemType;
        var _a = this.props, status = _a.status, appearance = _a.appearance, actions = _a.actions;
        var loadStatus = mapStatusToAnalyticsLoadStatus(status);
        var hasActionMenuItems = !!(actions && actions.length > 0);
        return tslib_es6["__assign"]({}, getBaseAnalyticsContext('CardView', null), { type: mediaItemType, loadStatus: loadStatus, viewAttributes: {
                viewPreview: false,
                viewSize: appearance,
                viewActionmenu: hasActionMenuItems,
            } });
    };
    WithCardViewAnalyticsContext.prototype.getFileCardAnalyticsContext = function (metadata) {
        var dataURI = this.props.dataURI;
        var analyticsContext = this.getBaseAnalyticsContext();
        analyticsContext.actionSubjectId = metadata.id;
        analyticsContext.viewAttributes.viewPreview = shouldDisplayImageThumbnail(dataURI, metadata.mediaType);
        var fileAttributes = {
            fileMediatype: metadata.mediaType,
            fileSize: metadata.size,
            fileStatus: metadata.processingStatus,
            fileMimetype: metadata.mimeType,
        };
        return tslib_es6["__assign"]({}, analyticsContext, { fileAttributes: fileAttributes });
    };
    Object.defineProperty(WithCardViewAnalyticsContext.prototype, "analyticsContext", {
        get: function () {
            if (this.props.metadata) {
                var metadata = this.props.metadata;
                return this.getFileCardAnalyticsContext(metadata);
            }
            else {
                return this.getBaseAnalyticsContext();
            }
        },
        enumerable: true,
        configurable: true
    });
    WithCardViewAnalyticsContext.prototype.render = function () {
        return (react["createElement"](AnalyticsContext["a" /* default */], { data: this.analyticsContext }, this.props.children));
    };
    return WithCardViewAnalyticsContext;
}(react["Component"]));

//# sourceMappingURL=withCardViewAnalyticsContext.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/root/cardView.js











/**
 * This is classic vanilla CardView class. To create an instance of class one would need to supply
 * `createAnalyticsEvent` prop to satisfy it's Analytics Events needs.
 */
var cardView_CardViewBase = /** @class */ (function (_super) {
    tslib_es6["__extends"](CardViewBase, _super);
    function CardViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.fireOnSelectChangeToConsumer = function (newSelectedState) {
            var _a = _this.props, metadata = _a.metadata, selectable = _a.selectable, onSelectChange = _a.onSelectChange;
            if (selectable && onSelectChange) {
                onSelectChange({
                    selected: newSelectedState,
                    mediaItemDetails: metadata,
                });
            }
        };
        _this.renderFile = function () {
            var _a = _this.props, status = _a.status, metadata = _a.metadata, dataURI = _a.dataURI, progress = _a.progress, onRetry = _a.onRetry, resizeMode = _a.resizeMode, appearance = _a.appearance, dimensions = _a.dimensions, actions = _a.actions, selectable = _a.selectable, selected = _a.selected, disableOverlay = _a.disableOverlay, mediaItemType = _a.mediaItemType, previewOrientation = _a.previewOrientation;
            return (react["createElement"](card_FileCard, { status: status, details: metadata, dataURI: dataURI, progress: progress, onRetry: onRetry, resizeMode: resizeMode, appearance: appearance, dimensions: dimensions, actions: actions, selectable: selectable, selected: selected, disableOverlay: disableOverlay, mediaItemType: mediaItemType, previewOrientation: previewOrientation }));
        };
        _this.onClick = function (event) {
            var _a = _this.props, onClick = _a.onClick, mediaItemDetails = _a.metadata;
            if (onClick) {
                onClick({ event: event, mediaItemDetails: mediaItemDetails });
            }
        };
        _this.onMouseEnter = function (event) {
            var _a = _this.props, onMouseEnter = _a.onMouseEnter, mediaItemDetails = _a.metadata;
            if (onMouseEnter) {
                onMouseEnter({ event: event, mediaItemDetails: mediaItemDetails });
            }
        };
        return _this;
    }
    CardViewBase.prototype.componentDidMount = function () {
        this.saveElementWidth();
    };
    CardViewBase.prototype.componentWillReceiveProps = function (nextProps) {
        var currSelected = this.props.selected;
        var nextSelectable = nextProps.selectable, nextSelected = nextProps.selected;
        // need to coerce to booleans as both "undefined" and "false" are considered NOT selected
        var cs = !!currSelected;
        var ns = !!nextSelected;
        if (nextSelectable && cs !== ns) {
            this.fireOnSelectChangeToConsumer(ns);
        }
    };
    Object.defineProperty(CardViewBase.prototype, "width", {
        // This width is only used to calculate breakpoints, dimensions are passed down as
        // integrator pass it to the root component
        get: function () {
            var elementWidth = this.state.elementWidth;
            if (elementWidth) {
                return elementWidth;
            }
            var width = (this.props.dimensions || { width: undefined }).width;
            if (!width) {
                return cardDimensions["a" /* defaultImageCardDimensions */].width;
            }
            return getCSSUnitValue(width);
        },
        enumerable: true,
        configurable: true
    });
    // If the dimensions.width is a percentage, we need to transform it
    // into a pixel value in order to get the right breakpoints applied.
    CardViewBase.prototype.saveElementWidth = function () {
        var dimensions = this.props.dimensions;
        if (!dimensions) {
            return;
        }
        var width = dimensions.width;
        if (width && isValidPercentageUnit(width)) {
            var elementWidth = getElementDimension(this, 'width');
            this.setState({ elementWidth: elementWidth });
        }
    };
    CardViewBase.prototype.render = function () {
        var _a = this, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter;
        var _b = this.props, dimensions = _b.dimensions, appearance = _b.appearance, mediaItemType = _b.mediaItemType;
        var shouldUsePointerCursor = mediaItemType === 'file';
        var wrapperDimensions = dimensions
            ? dimensions
            : Object(cardDimensions["b" /* getDefaultCardDimensions */])(appearance);
        return (react["createElement"](root_styled_Wrapper, { shouldUsePointerCursor: shouldUsePointerCursor, breakpointSize: breakpoint_breakpointSize(this.width), appearance: appearance, dimensions: wrapperDimensions, onClick: onClick, onMouseEnter: onMouseEnter }, this.renderFile()));
    };
    return CardViewBase;
}(react["Component"]));

var createAndFireEventOnMedia = Object(createAndFireEvent["a" /* default */])('media');
/**
 * With this CardView class constructor version `createAnalyticsEvent` props is supplied for you, so
 * when creating instance of that class you don't need to worry about it.
 */
var CardViewWithAnalyticsEvents = Object(withAnalyticsEvents["a" /* default */])({
    onClick: createAndFireEventOnMedia({ action: 'clicked' }),
})(cardView_CardViewBase);
/**
 * This if final version of CardView that is exported to the consumer. This version wraps everything
 * with Analytics Context information so that all the Analytics Events created anywhere inside CardView
 * will have it automatically.
 */
var cardView_CardView = /** @class */ (function (_super) {
    tslib_es6["__extends"](CardView, _super);
    function CardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardView.prototype, "mediaItemType", {
        get: function () {
            return 'file';
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype.render = function () {
        var mediaItemType = this.mediaItemType;
        return (react["createElement"](withCardViewAnalyticsContext_WithCardViewAnalyticsContext, tslib_es6["__assign"]({}, this.props, { mediaItemType: mediaItemType }),
            react["createElement"](CardViewWithAnalyticsEvents, tslib_es6["__assign"]({}, this.props, { mediaItemType: mediaItemType }))));
    };
    CardView.defaultProps = {
        appearance: 'auto',
    };
    return CardView;
}(react["Component"]));

//# sourceMappingURL=cardView.js.map
// EXTERNAL MODULE: ./node_modules/react-lazily-render/dist/esnext/index.js + 6 modules
var esnext = __webpack_require__(984);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/lazyContent/styled.js

// @ts-ignore: unused variable
// prettier-ignore

// @ts-ignore: unused variable
// prettier-ignore


// We need to override the element provided by the library
// in order to make it get the parent dimensions.
var lazyContent_styled_Wrapper = Object(styled_components_browser_esm["default"])(esnext["a" /* default */])(lazyContent_styled_templateObject_1 || (lazyContent_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  ", ";\n"], ["\n  ", ";\n"])), Object(mixins["g" /* size */])());
var lazyContent_styled_templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/lazyContent/index.js



var lazyContent_LazyContent = /** @class */ (function (_super) {
    tslib_es6["__extends"](LazyContent, _super);
    function LazyContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LazyContent.prototype.render = function () {
        var _a = this.props, children = _a.children, placeholder = _a.placeholder, onRender = _a.onRender;
        return (react["createElement"](lazyContent_styled_Wrapper, { offset: 300, onRender: onRender, placeholder: placeholder, content: children }));
    };
    return LazyContent;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/getDataURIDimension.js





var getDataURIDimension = function (dimension, options) {
    var retinaFactor = isRetina() ? 2 : 1;
    var dimensionValue = (options.dimensions && options.dimensions[dimension]) || '';
    if (isValidPercentageUnit(dimensionValue)) {
        return getElementDimension(options.component, dimension) * retinaFactor;
    }
    if (typeof dimensionValue === 'number') {
        return dimensionValue * retinaFactor;
    }
    if (containsPixelUnit("" + dimensionValue)) {
        return parseInt("" + dimensionValue, 10) * retinaFactor;
    }
    return cardDimensions["a" /* defaultImageCardDimensions */][dimension] * retinaFactor;
};
//# sourceMappingURL=getDataURIDimension.js.map
// EXTERNAL MODULE: ./node_modules/video-snapshot/dist/index.js
var dist = __webpack_require__(970);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/utils/getMediaTypeFromMimeType.js
var getMediaTypeFromMimeType = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/index.js + 5 modules
var imageMetaData = __webpack_require__(1174);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/getDataURIFromFileState.js
var getDataURIFromFileState_this = undefined;




var getDataURIFromFileState = function (state) { return tslib_es6["__awaiter"](getDataURIFromFileState_this, void 0, void 0, function () {
    var value, type, mediaType, orientation_1, src, snapshoter, src;
    return tslib_es6["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (state.status === 'error' ||
                    state.status === 'failed-processing' ||
                    !state.preview) {
                    return [2 /*return*/, {}];
                }
                return [4 /*yield*/, state.preview];
            case 1:
                value = (_a.sent()).value;
                if (!(value instanceof Blob)) return [3 /*break*/, 6];
                type = value.type;
                mediaType = Object(getMediaTypeFromMimeType["a" /* getMediaTypeFromMimeType */])(type);
                if (!(mediaType === 'image')) return [3 /*break*/, 3];
                return [4 /*yield*/, Object(imageMetaData["b" /* getOrientation */])(value)];
            case 2:
                orientation_1 = _a.sent();
                src = URL.createObjectURL(value);
                return [2 /*return*/, {
                        src: src,
                        orientation: orientation_1,
                    }];
            case 3:
                if (!(mediaType === 'video')) return [3 /*break*/, 5];
                snapshoter = new dist_default.a(value);
                return [4 /*yield*/, snapshoter.takeSnapshot()];
            case 4:
                src = _a.sent();
                snapshoter.end();
                return [2 /*return*/, {
                        src: src,
                    }];
            case 5: return [3 /*break*/, 7];
            case 6: return [2 /*return*/, {
                    src: value,
                    orientation: 1,
                }];
            case 7: return [2 /*return*/, {}];
        }
    });
}); };
//# sourceMappingURL=getDataURIFromFileState.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/metadata.js
var extendMetadata = function (state, metadata) {
    var id = state.id;
    var currentMediaType = metadata && metadata.mediaType;
    if (state.status !== 'error') {
        return {
            id: id,
            name: state.name,
            size: state.size,
            mimeType: state.mimeType,
            mediaType: currentMediaType && currentMediaType !== 'unknown'
                ? currentMediaType
                : state.mediaType,
        };
    }
    else {
        return {
            id: id,
        };
    }
};
//# sourceMappingURL=metadata.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/utils/dimensionComparer.js


var canCompareDimension = function (current, next) {
    if (!current || !next) {
        return false;
    }
    if (isValidPercentageUnit(current) && isValidPercentageUnit(next)) {
        return true;
    }
    if (containsPixelUnit("" + current) && containsPixelUnit("" + next)) {
        return true;
    }
    if (typeof current === 'number' && typeof next === 'number') {
        return true;
    }
    return false;
};
var isBigger = function (current, next) {
    if (canCompareDimension(current.width, next.width) &&
        canCompareDimension(current.height, next.height)) {
        var nextIsHigher = parseInt("" + current.width, 10) < parseInt("" + next.width, 10);
        var nextIsWider = parseInt("" + current.height, 10) < parseInt("" + next.height, 10);
        return nextIsHigher || nextIsWider;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=dimensionComparer.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/root/card/getCardStatus.js
// we don't want to show complete status for empty files, ideally there should be no such file on the media api,
// but there are some edge cases when using id upfront that can result on that.
var getCardStatus = function (state, props) {
    var status = state.status, metadata = state.metadata, dataURI = state.dataURI;
    var identifier = props.identifier, disableOverlay = props.disableOverlay;
    if (identifier.mediaItemType !== 'file') {
        return status;
    }
    if (metadata) {
        var _a = metadata, size = _a.size, mediaType = _a.mediaType, name_1 = _a.name;
        if (mediaType === 'image' || mediaType === 'video') {
            if (status === 'complete' && !dataURI) {
                return 'processing';
            }
        }
        else if (name_1 && size && !disableOverlay && status === 'processing') {
            // If we have enough metadata for non images, we show it
            return 'complete';
        }
        else if (status === 'complete' && !size) {
            return 'processing';
        }
    }
    return status;
};
//# sourceMappingURL=getCardStatus.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/customMediaPlayer/index.js + 9 modules
var customMediaPlayer = __webpack_require__(1200);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-card/index.js + 2 modules
var media_card = __webpack_require__(149);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/root/inlinePlayer.js







var getPreferredVideoArtifact = function (fileState) {
    if (fileState.status === 'processed' || fileState.status === 'processing') {
        var artifacts = fileState.artifacts;
        if (!artifacts) {
            return undefined;
        }
        return artifacts['video_1280.mp4']
            ? 'video_1280.mp4'
            : artifacts['video_640.mp4']
                ? 'video_640.mp4'
                : undefined;
    }
    return undefined;
};
var inlinePlayer_InlinePlayer = /** @class */ (function (_super) {
    tslib_es6["__extends"](InlinePlayer, _super);
    function InlinePlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.setFileSrc = function (fileSrc) {
            _this.setState({ fileSrc: fileSrc });
            window.setTimeout(_this.unsubscribe, 0);
        };
        // Tries to use the binary artifact to provide something to play while the video is still processing
        _this.setBinaryURL = function () { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var _a, mediaClient, identifier, onError, id, collectionName, resolvedId, fileSrc, error_1;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier, onError = _a.onError;
                        id = identifier.id, collectionName = identifier.collectionName;
                        return [4 /*yield*/, id];
                    case 1:
                        resolvedId = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, mediaClient.file.getFileBinaryURL(resolvedId, collectionName)];
                    case 3:
                        fileSrc = _b.sent();
                        this.setFileSrc(fileSrc);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        if (onError) {
                            onError(error_1);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.unsubscribe = function () {
            if (_this.subscription) {
                _this.subscription.unsubscribe();
            }
        };
        _this.revoke = function () {
            var fileSrc = _this.state.fileSrc;
            if (fileSrc) {
                URL.revokeObjectURL(fileSrc);
            }
        };
        _this.getStyle = function () {
            var dimensions = _this.props.dimensions;
            // We are given dimensions. But we can’t just blindly apply them as width and height.
            // Because editor is giving us “maximum” dimensions (equal to what it can go to if resized to 100%
            // of available width). And the same time we don’t want to ignore these dimensions completely,
            // because if consumer do not constraint width/height of container we still want to stick to given dimensions.
            // Here we put width as a style. In combination with max-width: 100%; and max-height: 100%;
            // it would give us required effect.
            return {
                width: dimensions.width,
            };
        };
        _this.onDownloadClick = function () { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var _a, mediaClient, identifier, id, collectionName, _b, _c;
            return tslib_es6["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier;
                        id = identifier.id, collectionName = identifier.collectionName;
                        _c = (_b = mediaClient.file).downloadBinary;
                        return [4 /*yield*/, id];
                    case 1:
                        _c.apply(_b, [_d.sent(), undefined, collectionName]);
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    InlinePlayer.prototype.componentDidMount = function () {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var _a, mediaClient, identifier, id, collectionName, _b, _c, _d;
            var _this = this;
            return tslib_es6["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier;
                        id = identifier.id, collectionName = identifier.collectionName;
                        this.revoke();
                        this.unsubscribe();
                        _b = this;
                        _d = (_c = mediaClient.file).getFileState;
                        return [4 /*yield*/, id];
                    case 1:
                        _b.subscription = _d.apply(_c, [_e.sent(), { collectionName: collectionName }])
                            .subscribe({
                            next: function (state) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
                                var value, fileSrc, artifactName, artifacts, fileSrc, error_2, onError;
                                return tslib_es6["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(state.status !== 'error' && state.preview)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, state.preview];
                                        case 1:
                                            value = (_a.sent()).value;
                                            if (value instanceof Blob && value.type.indexOf('video/') === 0) {
                                                fileSrc = URL.createObjectURL(value);
                                                this.setFileSrc(fileSrc);
                                                return [2 /*return*/];
                                            }
                                            _a.label = 2;
                                        case 2:
                                            if (!(state.status === 'processed' || state.status === 'processing')) return [3 /*break*/, 6];
                                            artifactName = getPreferredVideoArtifact(state);
                                            artifacts = state.artifacts;
                                            if (!artifactName || !artifacts) {
                                                this.setBinaryURL();
                                                return [2 /*return*/];
                                            }
                                            _a.label = 3;
                                        case 3:
                                            _a.trys.push([3, 5, , 6]);
                                            return [4 /*yield*/, mediaClient.file.getArtifactURL(artifacts, artifactName, collectionName)];
                                        case 4:
                                            fileSrc = _a.sent();
                                            this.setFileSrc(fileSrc);
                                            return [3 /*break*/, 6];
                                        case 5:
                                            error_2 = _a.sent();
                                            onError = this.props.onError;
                                            if (onError) {
                                                onError(error_2);
                                            }
                                            return [3 /*break*/, 6];
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InlinePlayer.prototype.componentWillUnmount = function () {
        this.unsubscribe();
        this.revoke();
    };
    InlinePlayer.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, dimensions = _a.dimensions, selected = _a.selected;
        var fileSrc = this.state.fileSrc;
        if (!fileSrc) {
            return react["createElement"](cardLoading["a" /* CardLoading */], { dimensions: dimensions });
        }
        return (react["createElement"](InlinePlayerWrapper, { style: this.getStyle(), selected: selected, onClick: onClick },
            react["createElement"](customMediaPlayer["a" /* default */], { type: "video", src: fileSrc, isAutoPlay: true, isHDAvailable: false, onDownloadClick: this.onDownloadClick })));
    };
    InlinePlayer.defaultProps = {
        dimensions: media_card["c" /* defaultImageCardDimensions */],
    };
    return InlinePlayer;
}(react["Component"]));

//# sourceMappingURL=inlinePlayer.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-card/root/card/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return card_Card; });


















var card_Card = /** @class */ (function (_super) {
    tslib_es6["__extends"](Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasBeenMounted = false;
        _this.state = {
            status: 'loading',
            isCardVisible: !_this.props.isLazy,
            previewOrientation: 1,
            isPlayingFile: false,
        };
        _this.shouldRefetchImage = function (current, next) {
            if (!current || !next) {
                return false;
            }
            return isBigger(current, next);
        };
        _this.releaseDataURI = function () {
            var dataURI = _this.state.dataURI;
            if (dataURI) {
                URL.revokeObjectURL(dataURI);
            }
        };
        _this.onLoadingChangeCallback = function () {
            var onLoadingChange = _this.props.onLoadingChange;
            if (onLoadingChange) {
                var _a = _this.state, status_1 = _a.status, error = _a.error, metadata = _a.metadata;
                var state = {
                    type: status_1,
                    payload: error || metadata,
                };
                onLoadingChange(state);
            }
        };
        _this.notifyStateChange = function (state) {
            if (_this.hasBeenMounted) {
                _this.setState(state, _this.onLoadingChangeCallback);
            }
        };
        _this.unsubscribe = function () {
            if (_this.subscription) {
                _this.subscription.unsubscribe();
            }
            if (_this.hasBeenMounted) {
                _this.setState({ dataURI: undefined });
            }
        };
        // This method is called when card fails and user press 'Retry'
        _this.onRetry = function () {
            var _a = _this.props, identifier = _a.identifier, mediaClient = _a.mediaClient;
            _this.subscribe(identifier, mediaClient);
        };
        _this.onClick = function (result, analyticsEvent) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var _a, identifier, onClick, useInlinePlayer, shouldOpenMediaViewer, mediaItemDetails, isVideo, mediaViewerSelectedItem, _b;
            return tslib_es6["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, identifier = _a.identifier, onClick = _a.onClick, useInlinePlayer = _a.useInlinePlayer, shouldOpenMediaViewer = _a.shouldOpenMediaViewer;
                        mediaItemDetails = result.mediaItemDetails;
                        this.onClickPayload = {
                            result: result,
                            analyticsEvent: analyticsEvent,
                        };
                        if (onClick) {
                            onClick(result, analyticsEvent);
                        }
                        if (!mediaItemDetails) {
                            return [2 /*return*/];
                        }
                        isVideo = mediaItemDetails &&
                            mediaItemDetails.mediaType === 'video';
                        if (!(useInlinePlayer && isVideo)) return [3 /*break*/, 1];
                        this.setState({
                            isPlayingFile: true,
                        });
                        return [3 /*break*/, 5];
                    case 1:
                        if (!shouldOpenMediaViewer) return [3 /*break*/, 5];
                        mediaViewerSelectedItem = void 0;
                        if (!Object(media_client_identifier["c" /* isFileIdentifier */])(identifier)) return [3 /*break*/, 3];
                        _b = {};
                        return [4 /*yield*/, identifier.id];
                    case 2:
                        mediaViewerSelectedItem = (_b.id = _c.sent(),
                            _b.mediaItemType = 'file',
                            _b.collectionName = identifier.collectionName,
                            _b.occurrenceKey = identifier.occurrenceKey,
                            _b);
                        return [3 /*break*/, 4];
                    case 3:
                        mediaViewerSelectedItem = {
                            mediaItemType: 'external-image',
                            dataURI: identifier.dataURI,
                            name: identifier.name,
                        };
                        _c.label = 4;
                    case 4:
                        this.setState({
                            mediaViewerSelectedItem: mediaViewerSelectedItem,
                        });
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.onInlinePlayerError = function () {
            _this.setState({
                isPlayingFile: false,
            });
        };
        _this.onInlinePlayerClick = function () {
            var onClick = _this.props.onClick;
            if (onClick && _this.onClickPayload) {
                onClick(_this.onClickPayload.result, _this.onClickPayload.analyticsEvent);
            }
        };
        _this.renderInlinePlayer = function () {
            var _a = _this.props, identifier = _a.identifier, mediaClient = _a.mediaClient, dimensions = _a.dimensions, selected = _a.selected;
            return (react["createElement"](inlinePlayer_InlinePlayer, { mediaClient: mediaClient, dimensions: dimensions, identifier: identifier, onError: _this.onInlinePlayerError, onClick: _this.onInlinePlayerClick, selected: selected }));
        };
        _this.onMediaViewerClose = function () {
            _this.setState({
                mediaViewerSelectedItem: undefined,
            });
        };
        _this.renderMediaViewer = function () {
            var mediaViewerSelectedItem = _this.state.mediaViewerSelectedItem;
            var _a = _this.props, mediaClient = _a.mediaClient, identifier = _a.identifier, mediaViewerDataSource = _a.mediaViewerDataSource;
            if (!mediaViewerSelectedItem) {
                return;
            }
            var collectionName = Object(media_client_identifier["c" /* isFileIdentifier */])(identifier)
                ? identifier.collectionName || ''
                : '';
            var dataSource = mediaViewerDataSource || {
                list: [],
            };
            return react_dom["createPortal"](react["createElement"](media_viewer_loader, { collectionName: collectionName, dataSource: dataSource, context: mediaClient, selectedItem: mediaViewerSelectedItem, onClose: _this.onMediaViewerClose }), document.body);
        };
        _this.renderCard = function () {
            var _a = _this.props, isLazy = _a.isLazy, appearance = _a.appearance, resizeMode = _a.resizeMode, dimensions = _a.dimensions, selectable = _a.selectable, selected = _a.selected, onMouseEnter = _a.onMouseEnter, onSelectChange = _a.onSelectChange, disableOverlay = _a.disableOverlay, identifier = _a.identifier;
            var _b = _this.state, progress = _b.progress, metadata = _b.metadata, dataURI = _b.dataURI, previewOrientation = _b.previewOrientation;
            var _c = _this, analyticsContext = _c.analyticsContext, onRetry = _c.onRetry, onClick = _c.onClick, actions = _c.actions;
            var status = getCardStatus(_this.state, _this.props);
            var card = (react["createElement"](AnalyticsContext["a" /* default */], { data: analyticsContext },
                react["createElement"](cardView_CardView, { status: status, metadata: metadata, dataURI: dataURI, mediaItemType: identifier.mediaItemType, appearance: appearance, resizeMode: resizeMode, dimensions: dimensions, actions: actions, selectable: selectable, selected: selected, onClick: onClick, onMouseEnter: onMouseEnter, onSelectChange: onSelectChange, disableOverlay: disableOverlay, progress: progress, onRetry: onRetry, previewOrientation: previewOrientation })));
            return isLazy ? (react["createElement"](lazyContent_LazyContent, { placeholder: card, onRender: _this.onCardInViewport }, card)) : (card);
        };
        _this.onCardInViewport = function () {
            _this.setState({ isCardVisible: true }, function () {
                var _a = _this.props, identifier = _a.identifier, mediaClient = _a.mediaClient;
                _this.subscribe(identifier, mediaClient);
            });
        };
        return _this;
    }
    Card.prototype.componentDidMount = function () {
        var _a = this.props, identifier = _a.identifier, mediaClient = _a.mediaClient;
        this.hasBeenMounted = true;
        this.subscribe(identifier, mediaClient);
    };
    Card.prototype.componentWillReceiveProps = function (nextProps) {
        var _a = this.props, currentMediaClient = _a.mediaClient, currentIdentifier = _a.identifier, currentDimensions = _a.dimensions;
        var nextMediaClient = nextProps.mediaClient, nextIdenfifier = nextProps.identifier, nextDimensions = nextProps.dimensions;
        var isDifferent = Object(media_client_identifier["a" /* isDifferentIdentifier */])(currentIdentifier, nextIdenfifier);
        if (currentMediaClient !== nextMediaClient ||
            isDifferent ||
            this.shouldRefetchImage(currentDimensions, nextDimensions)) {
            this.subscribe(nextIdenfifier, nextMediaClient);
        }
    };
    Card.prototype.componentWillUnmount = function () {
        this.hasBeenMounted = false;
        this.unsubscribe();
        this.releaseDataURI();
    };
    Card.prototype.subscribe = function (identifier, mediaClient) {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var isCardVisible, dataURI, name_1, id, collectionName, occurrenceKey, resolvedId, _a;
            var _this = this;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        isCardVisible = this.state.isCardVisible;
                        if (!isCardVisible) {
                            return [2 /*return*/];
                        }
                        if (identifier.mediaItemType === 'external-image') {
                            dataURI = identifier.dataURI, name_1 = identifier.name;
                            this.setState({
                                status: 'complete',
                                dataURI: dataURI,
                                metadata: {
                                    id: dataURI,
                                    name: name_1 || dataURI,
                                    mediaType: 'image',
                                },
                            });
                            return [2 /*return*/];
                        }
                        id = identifier.id, collectionName = identifier.collectionName, occurrenceKey = identifier.occurrenceKey;
                        if (!(typeof id === 'string')) return [3 /*break*/, 1];
                        _a = id;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, id];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        resolvedId = _a;
                        this.unsubscribe();
                        this.subscription = mediaClient.file
                            .getFileState(resolvedId, { collectionName: collectionName, occurrenceKey: occurrenceKey })
                            .subscribe({
                            next: function (fileState) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
                                var _a, status, progress, dataURI, _b, previewOrientation, metadata, _c, src, orientation_1, shouldFetchRemotePreview, _d, appearance, dimensions, resizeMode, options, width, height, mode, blob, e_1;
                                return tslib_es6["__generator"](this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            _a = this.state, status = _a.status, progress = _a.progress, dataURI = _a.dataURI, _b = _a.previewOrientation, previewOrientation = _b === void 0 ? 1 : _b;
                                            metadata = extendMetadata(fileState, this.state.metadata);
                                            if (!!dataURI) return [3 /*break*/, 2];
                                            return [4 /*yield*/, getDataURIFromFileState(fileState)];
                                        case 1:
                                            _c = _e.sent(), src = _c.src, orientation_1 = _c.orientation;
                                            previewOrientation = orientation_1 || 1;
                                            dataURI = src;
                                            _e.label = 2;
                                        case 2:
                                            switch (fileState.status) {
                                                case 'uploading':
                                                    progress = fileState.progress;
                                                    status = 'uploading';
                                                    break;
                                                case 'processing':
                                                    if (dataURI) {
                                                        status = 'complete';
                                                        progress = 1;
                                                    }
                                                    else {
                                                        status = 'processing';
                                                    }
                                                    break;
                                                case 'processed':
                                                    status = 'complete';
                                                    break;
                                                case 'failed-processing':
                                                    status = 'failed-processing';
                                                    break;
                                                case 'error':
                                                    status = 'error';
                                            }
                                            shouldFetchRemotePreview = !dataURI &&
                                                Object(file_state["b" /* isImageRepresentationReady */])(fileState) &&
                                                metadata.mediaType &&
                                                Object(media["a" /* isPreviewableType */])(metadata.mediaType);
                                            if (!shouldFetchRemotePreview) return [3 /*break*/, 6];
                                            _d = this.props, appearance = _d.appearance, dimensions = _d.dimensions, resizeMode = _d.resizeMode;
                                            options = {
                                                appearance: appearance,
                                                dimensions: dimensions,
                                                component: this,
                                            };
                                            width = getDataURIDimension('width', options);
                                            height = getDataURIDimension('height', options);
                                            _e.label = 3;
                                        case 3:
                                            _e.trys.push([3, 5, , 6]);
                                            mode = resizeMode === 'stretchy-fit' ? 'full-fit' : resizeMode;
                                            return [4 /*yield*/, mediaClient.getImage(resolvedId, {
                                                    collection: collectionName,
                                                    mode: mode,
                                                    height: height,
                                                    width: width,
                                                    allowAnimated: true,
                                                })];
                                        case 4:
                                            blob = _e.sent();
                                            dataURI = URL.createObjectURL(blob);
                                            this.releaseDataURI();
                                            return [3 /*break*/, 6];
                                        case 5:
                                            e_1 = _e.sent();
                                            return [3 /*break*/, 6];
                                        case 6:
                                            this.notifyStateChange({
                                                metadata: metadata,
                                                status: status,
                                                progress: progress,
                                                dataURI: dataURI,
                                                previewOrientation: previewOrientation,
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                            error: function (error) {
                                _this.notifyStateChange({ error: error, status: 'error' });
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Card.prototype, "analyticsContext", {
        get: function () {
            var identifier = this.props.identifier;
            var id = Object(media_client_identifier["b" /* isExternalImageIdentifier */])(identifier)
                ? 'external-image'
                : identifier.id;
            return getBaseAnalyticsContext('Card', id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "actions", {
        get: function () {
            var _this = this;
            var _a = this.props, _b = _a.actions, actions = _b === void 0 ? [] : _b, identifier = _a.identifier;
            var _c = this.state, status = _c.status, metadata = _c.metadata;
            if (Object(media_client_identifier["c" /* isFileIdentifier */])(identifier) && status === 'failed-processing') {
                actions.unshift({
                    label: 'Download',
                    icon: react["createElement"](download_default.a, { label: "Download" }),
                    handler: function () { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
                        var _a, _b;
                        return tslib_es6["__generator"](this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = this.props.mediaClient.file).downloadBinary;
                                    return [4 /*yield*/, identifier.id];
                                case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                        metadata.name,
                                        identifier.collectionName])];
                            }
                        });
                    }); },
                });
            }
            return actions;
        },
        enumerable: true,
        configurable: true
    });
    Card.prototype.render = function () {
        var _a = this.state, isPlayingFile = _a.isPlayingFile, mediaViewerSelectedItem = _a.mediaViewerSelectedItem;
        var content = isPlayingFile
            ? this.renderInlinePlayer()
            : this.renderCard();
        return this.context.intl ? (content) : (react["createElement"](index_es["c" /* IntlProvider */], { locale: "en" },
            react["createElement"](react["Fragment"], null,
                content,
                mediaViewerSelectedItem ? this.renderMediaViewer() : null)));
    };
    Card.defaultProps = {
        appearance: 'auto',
        resizeMode: 'crop',
        isLazy: true,
        disableOverlay: false,
    };
    return Card;
}(react["Component"]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/vid-play.js
var vid_play = __webpack_require__(1000);
var vid_play_default = /*#__PURE__*/__webpack_require__.n(vid_play);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/vid-pause.js
var vid_pause = __webpack_require__(1083);
var vid_pause_default = /*#__PURE__*/__webpack_require__.n(vid_pause);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/vid-full-screen-on.js
var vid_full_screen_on = __webpack_require__(1082);
var vid_full_screen_on_default = /*#__PURE__*/__webpack_require__.n(vid_full_screen_on);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/vid-full-screen-off.js
var vid_full_screen_off = __webpack_require__(1081);
var vid_full_screen_off_default = /*#__PURE__*/__webpack_require__.n(vid_full_screen_off);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/hipchat/outgoing-sound.js
var outgoing_sound = __webpack_require__(1080);
var outgoing_sound_default = /*#__PURE__*/__webpack_require__.n(outgoing_sound);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/vid-hd-circle.js
var vid_hd_circle = __webpack_require__(1079);
var vid_hd_circle_default = /*#__PURE__*/__webpack_require__.n(vid_hd_circle);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/download.js
var download = __webpack_require__(976);
var download_default = /*#__PURE__*/__webpack_require__.n(download);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/MediaButton.js
var MediaButton = __webpack_require__(1078);

// EXTERNAL MODULE: ./node_modules/@atlaskit/spinner/Spinner/index.js + 3 modules
var Spinner = __webpack_require__(830);

// CONCATENATED MODULE: ./node_modules/react-video-renderer/dist/es2015/utils.js
var requestFullScreen = function (element) {
    var methods = ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen'];
    var methodName = methods.find(function (name) { return element[name]; });
    element[methodName]();
};

// CONCATENATED MODULE: ./node_modules/react-video-renderer/dist/es2015/video.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var getVolumeFromVideo = function (video) {
    var volume = video.volume;
    var isMuted = volume === 0;
    return {
        volume: volume,
        isMuted: isMuted
    };
};
var isSafari = typeof navigator !== 'undefined' ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : false;
var video_Video = (function (_super) {
    __extends(Video, _super);
    function Video() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.previousVolume = 1;
        _this.mediaRef = react["createRef"]();
        _this.state = {
            isLoading: true,
            buffered: 0,
            currentTime: 0,
            volume: 1,
            status: 'paused',
            duration: 0,
            isMuted: false
        };
        _this.onVolumeChange = function (event) {
            var video = event.target;
            var _a = getVolumeFromVideo(video), volume = _a.volume, isMuted = _a.isMuted;
            _this.setState({
                volume: volume,
                isMuted: isMuted
            });
        };
        _this.onTimeUpdate = function (event) {
            var video = event.target;
            _this.setState({
                currentTime: video.currentTime
            });
            if (video.buffered.length) {
                var buffered = video.buffered.end(video.buffered.length - 1);
                _this.setState({ buffered: buffered });
            }
        };
        _this.onCanPlay = function (event) {
            var onCanPlay = _this.props.onCanPlay;
            var video = event.target;
            var _a = getVolumeFromVideo(video), volume = _a.volume, isMuted = _a.isMuted;
            _this.setState({
                volume: volume,
                isMuted: isMuted,
                isLoading: false,
                currentTime: video.currentTime,
                duration: video.duration
            });
            onCanPlay && onCanPlay(event);
        };
        _this.onPlay = function () {
            _this.setState({
                status: 'playing'
            });
        };
        _this.onPause = function () {
            _this.setState({
                status: 'paused'
            });
        };
        _this.play = function () {
            _this.mediaRef.current && _this.mediaRef.current.play();
        };
        _this.pause = function () {
            _this.mediaRef.current && _this.mediaRef.current.pause();
        };
        _this.navigate = function (time) {
            _this.setState({ currentTime: time });
            _this.mediaRef.current && (_this.mediaRef.current.currentTime = time);
        };
        _this.setVolume = function (volume) {
            _this.setState({ volume: volume });
            _this.mediaRef.current && (_this.mediaRef.current.volume = volume);
        };
        _this.requestFullscreen = function () {
            var sourceType = _this.props.sourceType;
            if (sourceType === 'video') {
                requestFullScreen(_this.mediaRef.current);
            }
        };
        _this.mute = function () {
            var volume = _this.state.volume;
            _this.previousVolume = volume;
            _this.setVolume(0);
        };
        _this.unmute = function () {
            _this.setVolume(_this.previousVolume);
        };
        _this.toggleMute = function () {
            var volume = _this.videoState.volume;
            if (volume > 0) {
                _this.mute();
            }
            else {
                _this.unmute();
            }
        };
        _this.onDurationChange = function (event) {
            var video = event.target;
            _this.setState({
                duration: video.duration
            });
        };
        _this.onError = function (event) {
            var onError = _this.props.onError;
            var video = event.target;
            _this.setState({
                isLoading: false,
                status: 'errored',
                error: video.error
            });
            onError && onError(event);
        };
        _this.onWaiting = function () {
            _this.setState({ isLoading: true });
        };
        return _this;
    }
    Video.prototype.componentDidUpdate = function (prevProps) {
        var src = this.props.src;
        var _a = this.state, currentTime = _a.currentTime, status = _a.status;
        var hasSrcChanged = prevProps.src !== src;
        if (hasSrcChanged) {
            if (status === 'playing') {
                this.play();
            }
            this.navigate(currentTime);
        }
    };
    Object.defineProperty(Video.prototype, "videoState", {
        get: function () {
            var _a = this.state, currentTime = _a.currentTime, volume = _a.volume, status = _a.status, duration = _a.duration, buffered = _a.buffered, isMuted = _a.isMuted, isLoading = _a.isLoading, error = _a.error;
            return {
                currentTime: currentTime,
                volume: volume,
                status: status,
                duration: duration,
                buffered: buffered,
                isMuted: isMuted,
                isLoading: isLoading,
                error: error
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "actions", {
        get: function () {
            var _a = this, play = _a.play, pause = _a.pause, navigate = _a.navigate, setVolume = _a.setVolume, requestFullscreen = _a.requestFullscreen, mute = _a.mute, unmute = _a.unmute, toggleMute = _a.toggleMute;
            return {
                play: play,
                pause: pause,
                navigate: navigate,
                setVolume: setVolume,
                requestFullscreen: requestFullscreen,
                mute: mute,
                unmute: unmute,
                toggleMute: toggleMute
            };
        },
        enumerable: true,
        configurable: true
    });
    Video.prototype.render = function () {
        var _a = this, videoState = _a.videoState, actions = _a.actions;
        var _b = this.props, sourceType = _b.sourceType, poster = _b.poster, src = _b.src, children = _b.children, autoPlay = _b.autoPlay, controls = _b.controls, preload = _b.preload, crossOrigin = _b.crossOrigin;
        var TagName = sourceType || 'video';
        return children(react["createElement"](TagName, { ref: this.mediaRef, poster: poster, src: src, preload: preload, controls: controls, autoPlay: autoPlay, onPlay: this.onPlay, onPause: this.onPause, onVolumeChange: this.onVolumeChange, onTimeUpdate: this.onTimeUpdate, onCanPlay: this.onCanPlay, onDurationChange: this.onDurationChange, onError: this.onError, onWaiting: this.onWaiting, crossOrigin: crossOrigin }), videoState, actions, this.mediaRef);
    };
    Video.defaultProps = {
        sourceType: 'video',
        autoPlay: false,
        controls: false,
        preload: isSafari ? 'auto' : 'metadata'
    };
    return Video;
}(react["Component"]));


// CONCATENATED MODULE: ./node_modules/react-video-renderer/dist/es2015/index.js



// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var theme = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/customMediaPlayer/styled.js



var CustomVideoWrapper = styled_components_browser_esm["default"].div(templateObject_1 || (templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  width: 100%;\n  height: 100%;\n  user-select: none;\n"], ["\n  width: 100%;\n  height: 100%;\n  user-select: none;\n"])));
var VideoWrapper = styled_components_browser_esm["default"].div(templateObject_2 || (templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var TimebarWrapper = styled_components_browser_esm["default"].div(templateObject_3 || (templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  position: absolute;\n  width: 100%;\n  bottom: 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  position: absolute;\n  width: 100%;\n  bottom: 10px;\n"])));
var VolumeWrapper = styled_components_browser_esm["default"].div(templateObject_4 || (templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  width: 35px;\n  overflow: hidden;\n  transition: width 0.3s;\n  align-items: center;\n  position: absolute;\n  bottom: 0px;\n  left: 43px;\n\n  &:hover,\n  &:active {\n    width: 155px;\n    transition: width 0.3s ease-out;\n  }\n"], ["\n  display: flex;\n  width: 35px;\n  overflow: hidden;\n  transition: width 0.3s;\n  align-items: center;\n  position: absolute;\n  bottom: 0px;\n  left: 43px;\n\n  &:hover,\n  &:active {\n    width: 155px;\n    transition: width 0.3s ease-out;\n  }\n"])));
var TimeWrapper = styled_components_browser_esm["default"].div(templateObject_5 || (templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  margin: 0 20px 10px 20px;\n  margin-bottom: 44px;\n"], ["\n  margin: 0 20px 10px 20px;\n  margin-bottom: 44px;\n"])));
var CurrentTime = styled_components_browser_esm["default"].div(templateObject_6 || (templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  color: #a4b4cb;\n  user-select: none;\n  margin-right: 10px;\n"], ["\n  color: #a4b4cb;\n  user-select: none;\n  margin-right: 10px;\n"])));
var TimeLine = styled_components_browser_esm["default"].div(templateObject_7 || (templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  width: 100%;\n  height: 2px;\n  transition-delay: 1s;\n  transition: all 0.1s;\n  background-color: #5d646f;\n  border-radius: 5px;\n  position: relative;\n"], ["\n  width: 100%;\n  height: 2px;\n  transition-delay: 1s;\n  transition: all 0.1s;\n  background-color: #5d646f;\n  border-radius: 5px;\n  position: relative;\n"])));
var CurrentTimeLine = styled_components_browser_esm["default"].div(templateObject_8 || (templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  background-color: #3383ff;\n  border-radius: inherit;\n  height: inherit;\n  position: absolute;\n  top: 0;\n  max-width: 100%;\n"], ["\n  background-color: #3383ff;\n  border-radius: inherit;\n  height: inherit;\n  position: absolute;\n  top: 0;\n  max-width: 100%;\n"])));
var Thumb = styled_components_browser_esm["default"].div(templateObject_9 || (templateObject_9 = tslib_es6["__makeTemplateObject"](["\n  pointer-events: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 100%;\n  background-color: white;\n  border: 1px solid #666;\n  position: absolute;\n  right: 0;\n  top: 50%;\n\n  transform: translate(7px, -50%) scale(0);\n  transition: all 0.1s;\n  transition-delay: 1s;\n\n  &:hover .current-time-tooltip {\n    opacity: 1;\n  }\n"], ["\n  pointer-events: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 100%;\n  background-color: white;\n  border: 1px solid #666;\n  position: absolute;\n  right: 0;\n  top: 50%;\n\n  transform: translate(7px, -50%) scale(0);\n  transition: all 0.1s;\n  transition-delay: 1s;\n\n  &:hover .current-time-tooltip {\n    opacity: 1;\n  }\n"])));
var BufferedTime = styled_components_browser_esm["default"].div(templateObject_10 || (templateObject_10 = tslib_es6["__makeTemplateObject"](["\n  background-color: #aeb1b7;\n  height: inherit;\n  border-radius: inherit;\n  width: 0;\n"], ["\n  background-color: #aeb1b7;\n  height: inherit;\n  border-radius: inherit;\n  width: 0;\n"])));
var LeftControls = styled_components_browser_esm["default"].div(templateObject_11 || (templateObject_11 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  margin-left: 10px;\n"], ["\n  display: flex;\n  margin-left: 10px;\n"])));
var RightControls = styled_components_browser_esm["default"].div(templateObject_12 || (templateObject_12 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n"])));
var ControlsWrapper = styled_components_browser_esm["default"].div(templateObject_13 || (templateObject_13 = tslib_es6["__makeTemplateObject"](["\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  background: linear-gradient(to top, #0e1624, rgba(14, 22, 36, 0));\n  position: absolute;\n"], ["\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  background: linear-gradient(to top, #0e1624, rgba(14, 22, 36, 0));\n  position: absolute;\n"])));
var VolumeToggleWrapper = styled_components_browser_esm["default"].div(templateObject_14 || (templateObject_14 = tslib_es6["__makeTemplateObject"](["\n  position: relative;\n  margin-right: 13px;\n\n  button {\n    width: 36px;\n    color: ", ";\n  }\n"], ["\n  position: relative;\n  margin-right: 13px;\n\n  button {\n    width: 36px;\n    color: ",
    ";\n  }\n"])), function (_a) {
    var isMuted = _a.isMuted;
    return isMuted ? theme["colors"].R300 + " !important;" : '';
});
var VolumeTimeRangeWrapper = styled_components_browser_esm["default"].div(templateObject_15 || (templateObject_15 = tslib_es6["__makeTemplateObject"](["\n  width: 100%;\n  margin-right: 20px;\n"], ["\n  width: 100%;\n  margin-right: 20px;\n"])));
var MutedIndicator = styled_components_browser_esm["default"].div(templateObject_16 || (templateObject_16 = tslib_es6["__makeTemplateObject"](["\n  width: 29px;\n  height: 2px;\n  position: absolute;\n  top: 5px;\n  left: 9px;\n  background: ", ";\n  transform: rotate(32deg) translateY(10px);\n  opacity: 0;\n  pointer-events: none;\n\n  ", ";\n"], ["\n  width: 29px;\n  height: 2px;\n  position: absolute;\n  top: 5px;\n  left: 9px;\n  background: ", ";\n  transform: rotate(32deg) translateY(10px);\n  opacity: 0;\n  pointer-events: none;\n\n  ",
    ";\n"])), theme["colors"].R300, function (props) {
    return props.isMuted
        ? "\n    opacity: 1;\n  "
        : '';
});
var CurrentTimeTooltip = styled_components_browser_esm["default"].div(templateObject_17 || (templateObject_17 = tslib_es6["__makeTemplateObject"](["\n  position: absolute;\n  user-select: none;\n  top: -28px;\n  background-color: #182c4c;\n  color: #eff1f3;\n  font-size: 12px;\n  padding: 3px 7px;\n  border-radius: 3px;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: ", ";\n  transition: opacity 0.3s;\n  word-break: keep-all;\n"], ["\n  position: absolute;\n  user-select: none;\n  top: -28px;\n  background-color: #182c4c;\n  color: #eff1f3;\n  font-size: 12px;\n  padding: 3px 7px;\n  border-radius: 3px;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: ",
    ";\n  transition: opacity 0.3s;\n  word-break: keep-all;\n"])), function (props) {
    return props.isDragging ? '1' : '0';
});
var TimeRangeWrapper = styled_components_browser_esm["default"].div(templateObject_18 || (templateObject_18 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  height: 22px;\n\n  cursor: pointer;\n  width: 100%;\n\n  &:hover ", " {\n    height: 4px;\n    transition: all 0.1s;\n  }\n\n  &:hover ", " {\n    transition: all 0.1s;\n    transform: translate(7px, -50%) scale(1);\n  }\n\n  ", " {\n    transition-delay: 1s;\n    ", "\n  }\n  ", " {\n    ", "\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  height: 22px;\n\n  cursor: pointer;\n  width: 100%;\n\n  &:hover ", " {\n    height: 4px;\n    transition: all 0.1s;\n  }\n\n  &:hover ", " {\n    transition: all 0.1s;\n    transform: translate(7px, -50%) scale(1);\n  }\n\n  ", " {\n    transition-delay: 1s;\n    ",
    "\n  }\n  ", " {\n    ",
    "\n  }\n"])), TimeLine, Thumb, TimeLine, function (_a) {
    var showAsActive = _a.showAsActive;
    return showAsActive ? 'height: 4px;' : '';
}, Thumb, function (_a) {
    var showAsActive = _a.showAsActive;
    return showAsActive ? 'transform: translate(7px, -50%) scale(1);' : '';
});
var SpinnerWrapper = styled_components_browser_esm["default"].div(templateObject_19 || (templateObject_19 = tslib_es6["__makeTemplateObject"](["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/formatDuration.js
var pad = function (n) {
    return n < 10 ? "0" + n : n;
};
var isInvalidInput = function (seconds) {
    return isNaN(seconds) || seconds === Infinity || seconds < 0;
};
var formatDuration = function (seconds) {
    if (isInvalidInput(seconds)) {
        return '0:00';
    }
    var totalSeconds = parseInt("" + seconds, 10);
    var hours = Math.floor(totalSeconds / 3600);
    var remainingSeconds = totalSeconds % 3600;
    var minutes = Math.floor(remainingSeconds / 60);
    remainingSeconds %= 60;
    var prettyHoursWithSeparator = hours > 0 ? hours + ':' : '';
    var prettyMinutes = prettyHoursWithSeparator ? pad(minutes) : minutes;
    return "" + prettyHoursWithSeparator + prettyMinutes + ":" + pad(remainingSeconds);
};
//# sourceMappingURL=formatDuration.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/customMediaPlayer/timeRange.js





var timeRange_TimeRange = /** @class */ (function (_super) {
    tslib_es6["__extends"](TimeRange, _super);
    function TimeRange() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapperElementWidth = 0;
        _this.state = {
            isDragging: false,
            dragStartClientX: 0,
        };
        _this.setWrapperWidth = function () {
            if (!_this.wrapperElement) {
                return;
            }
            _this.wrapperElementWidth = _this.wrapperElement.getBoundingClientRect().width;
        };
        _this.onMouseMove = function (e) {
            var _a = _this.state, isDragging = _a.isDragging, dragStartClientX = _a.dragStartClientX;
            if (!isDragging) {
                return;
            }
            e.stopPropagation();
            var _b = _this.props, onChange = _b.onChange, duration = _b.duration, currentTime = _b.currentTime;
            var clientX = e.clientX;
            var absolutePosition = clientX - dragStartClientX;
            var isOutsideToRight = absolutePosition > _this.wrapperElementWidth;
            var isOutsideToLeft = absolutePosition < 0;
            // Next to conditions take care of situation where user moves mouse very quickly out to the side
            // left or right. It's very easy to leave thumb not at the end/beginning of a timeline.
            // This will guarantee that in this case thumb will move to appropriate extreme.
            if (isOutsideToRight) {
                absolutePosition = _this.wrapperElementWidth;
            }
            if (isOutsideToLeft) {
                absolutePosition = 0;
            }
            var newTimeWithBoundaries = (absolutePosition * duration) / _this.wrapperElementWidth;
            if (currentTime !== newTimeWithBoundaries) {
                // If value hasn't changed we don't want to call "change"
                onChange(newTimeWithBoundaries);
            }
        };
        _this.onMouseUp = function () {
            // As soon as user finished dragging, we should clean up events.
            document.removeEventListener('mouseup', _this.onMouseUp);
            document.removeEventListener('mousemove', _this.onMouseMove);
            _this.setState({
                isDragging: false,
            });
        };
        _this.onThumbMouseDown = function (e) {
            // We need to recalculate every time, because width can change (thanks, editor ;-)
            _this.setWrapperWidth();
            // We are implementing drag and drop here. There is no reason to start listening for mouseUp or move
            // before that. Also if we start listening for mouseup before that we could pick up someone else's event
            // For example editors resizing of a inline video player.
            document.addEventListener('mouseup', _this.onMouseUp);
            document.addEventListener('mousemove', _this.onMouseMove);
            var _a = _this.props, duration = _a.duration, onChange = _a.onChange;
            var event = e.nativeEvent;
            var x = event.offsetX;
            var currentTime = (x * duration) / _this.wrapperElementWidth;
            _this.setState({
                isDragging: true,
                dragStartClientX: event.clientX - x,
            });
            // As soon as user clicks timeline we want to move thumb over to that place.
            onChange(currentTime);
        };
        _this.saveWrapperElement = function (el) {
            if (el) {
                _this.wrapperElement = el;
                _this.setWrapperWidth();
            }
        };
        _this.saveThumbElement = function (el) {
            if (el) {
                _this.thumbElement = el;
            }
        };
        return _this;
    }
    TimeRange.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.setWrapperWidth);
    };
    TimeRange.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('resize', this.setWrapperWidth);
    };
    TimeRange.prototype.render = function () {
        var isDragging = this.state.isDragging;
        var _a = this.props, currentTime = _a.currentTime, duration = _a.duration, bufferedTime = _a.bufferedTime, disableThumbTooltip = _a.disableThumbTooltip, isAlwaysActive = _a.isAlwaysActive;
        var currentPosition = (currentTime * 100) / duration;
        var bufferedTimePercentage = (bufferedTime * 100) / duration;
        return (react["createElement"](TimeRangeWrapper, { showAsActive: isAlwaysActive, onMouseDown: this.onThumbMouseDown },
            react["createElement"](TimeLine, { innerRef: this.saveWrapperElement },
                react["createElement"](BufferedTime, { style: { width: bufferedTimePercentage + "%" } }),
                react["createElement"](CurrentTimeLine, { style: { width: currentPosition + "%" } },
                    react["createElement"](Thumb, { innerRef: this.saveThumbElement }, disableThumbTooltip ? null : (react["createElement"](CurrentTimeTooltip, { draggable: false, isDragging: isDragging, className: "current-time-tooltip" }, formatDuration(currentTime))))))));
    };
    TimeRange.defaultProps = {
        disableThumbTooltip: false,
        isAlwaysActive: false,
    };
    return TimeRange;
}(react["Component"]));

//# sourceMappingURL=timeRange.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/classNames.js
var hideControlsClassName = 'mvng-hide-controls';
//# sourceMappingURL=classNames.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/shortcut.js
var shortcut = __webpack_require__(1001);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/customMediaPlayer/fullscreen.js
var capitalize = function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
var vendorify = function (propName, capitalizeText) {
    if (capitalizeText === void 0) { capitalizeText = true; }
    var prefix = '';
    if (HTMLElement.prototype.webkitRequestFullscreen) {
        prefix = 'webkit';
    }
    else if (HTMLElement.prototype['mozRequestFullScreen']) {
        prefix = 'moz';
    }
    else if (HTMLElement.prototype['msRequestFullScreen']) {
        prefix = 'ms';
    }
    var capitalizeProp = capitalizeText !== undefined ? capitalizeText : !!prefix;
    return "" + prefix + (capitalizeProp ? capitalize(propName) : propName);
};
var requestFullscreen = function (element) {
    var methodName = vendorify('requestFullScreen');
    if (methodName && element[methodName]) {
        element[methodName]();
    }
};
var exitFullscreen = function () {
    var methodName = vendorify('exitFullscreen');
    if (methodName && document[methodName]) {
        document[methodName]();
    }
};
var getFullscreenElement = function () {
    var propertyName = vendorify('fullscreenElement');
    return propertyName && document[propertyName];
};
var toggleFullscreen = function (element) {
    if (getFullscreenElement()) {
        exitFullscreen();
    }
    else if (element) {
        requestFullscreen(element);
    }
};
//# sourceMappingURL=fullscreen.js.map
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/messages.js
var messages = __webpack_require__(938);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/customMediaPlayer/simultaneousPlayManager.js
var players = [];
var addPlayer = function (player) { return players.push(player); };
var removePlayer = function (player) {
    var playerIndex = players.indexOf(player);
    if (playerIndex > -1) {
        players.splice(playerIndex, 1);
    }
};
/* harmony default export */ var simultaneousPlayManager = ({
    pauseOthers: function (player) {
        players.forEach(function (otherPlayer) {
            if (otherPlayer !== player) {
                otherPlayer.pause();
            }
        });
    },
    subscribe: function (player) {
        if (players.indexOf(player) === -1) {
            addPlayer(player);
        }
    },
    unsubscribe: function (player) {
        removePlayer(player);
    },
});
//# sourceMappingURL=simultaneousPlayManager.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/customMediaPlayer/index.js
/* unused harmony export CustomMediaPlayer */























var toolbar = 'toolbar';
var customMediaPlayer_CustomMediaPlayer = /** @class */ (function (_super) {
    tslib_es6["__extends"](CustomMediaPlayer, _super);
    function CustomMediaPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isFullScreenEnabled: false,
        };
        _this.onFullScreenChange = function () {
            var currentFullScreenMode = _this.state.isFullScreenEnabled;
            var isFullScreenEnabled = getFullscreenElement() ? true : false;
            if (currentFullScreenMode !== isFullScreenEnabled) {
                _this.setState({
                    isFullScreenEnabled: isFullScreenEnabled,
                });
            }
        };
        _this.onTimeChange = function (navigate) { return function (value) {
            navigate(value);
        }; };
        _this.onVolumeChange = function (setVolume) { return function (value) {
            return setVolume(value);
        }; };
        _this.shortcutHandler = function (toggleButtonAction) { return function () {
            var showControls = _this.props.showControls;
            toggleButtonAction();
            if (showControls) {
                showControls();
            }
        }; };
        _this.renderHDButton = function () {
            var _a = _this.props, type = _a.type, isHDAvailable = _a.isHDAvailable, isHDActive = _a.isHDActive, onHDToggleClick = _a.onHDToggleClick;
            if (type === 'audio' || !isHDAvailable) {
                return;
            }
            var primaryColor = isHDActive ? theme["colors"].B200 : theme["colors"].DN400;
            var secondaryColor = isHDActive ? theme["colors"].white : theme["colors"].DN60;
            return (react["createElement"](MediaButton["a" /* default */], { appearance: toolbar, onClick: onHDToggleClick, iconBefore: react["createElement"](vid_hd_circle_default.a, { primaryColor: primaryColor, secondaryColor: secondaryColor, label: "hd" }) }));
        };
        _this.renderVolume = function (_a, actions) {
            var isMuted = _a.isMuted, volume = _a.volume;
            return (react["createElement"](VolumeWrapper, null,
                react["createElement"](VolumeToggleWrapper, { isMuted: isMuted },
                    react["createElement"](MutedIndicator, { isMuted: isMuted }),
                    react["createElement"](MediaButton["a" /* default */], { appearance: toolbar, onClick: actions.toggleMute, iconBefore: react["createElement"](outgoing_sound_default.a, { label: "volume" }) })),
                react["createElement"](VolumeTimeRangeWrapper, null,
                    react["createElement"](timeRange_TimeRange, { onChange: _this.onVolumeChange(actions.setVolume), duration: 1, currentTime: volume, bufferedTime: volume, disableThumbTooltip: true, isAlwaysActive: true }))));
        };
        _this.onFullScreenClick = function () { return toggleFullscreen(_this.videoWrapperRef); };
        _this.saveVideoWrapperRef = function (el) { return (_this.videoWrapperRef = el); };
        _this.renderFullScreenButton = function () {
            var _a = _this.props, formatMessage = _a.intl.formatMessage, type = _a.type;
            if (type === 'audio') {
                return;
            }
            var isFullScreenEnabled = _this.state.isFullScreenEnabled;
            var icon = isFullScreenEnabled ? (react["createElement"](vid_full_screen_off_default.a, { label: formatMessage(messages["a" /* messages */].disable_fullscreen) })) : (react["createElement"](vid_full_screen_on_default.a, { label: formatMessage(messages["a" /* messages */].enable_fullscreen) }));
            return (react["createElement"](MediaButton["a" /* default */], { appearance: toolbar, onClick: _this.onFullScreenClick, iconBefore: icon }));
        };
        _this.renderDownloadButton = function () {
            var onDownloadClick = _this.props.onDownloadClick;
            if (!onDownloadClick) {
                return;
            }
            return (react["createElement"](MediaButton["a" /* default */], { appearance: toolbar, onClick: onDownloadClick, iconBefore: react["createElement"](download_default.a, { label: "download" }) }));
        };
        _this.renderSpinner = function () { return (react["createElement"](SpinnerWrapper, null,
            react["createElement"](Spinner["a" /* default */], { invertColor: true, size: "large" }))); };
        _this.pause = function () {
            if (_this.actions) {
                _this.actions.pause();
            }
        };
        _this.play = function () {
            if (_this.actions) {
                _this.actions.play();
            }
            simultaneousPlayManager.pauseOthers(_this);
        };
        return _this;
    }
    CustomMediaPlayer.prototype.componentDidMount = function () {
        document.addEventListener(vendorify('fullscreenchange', false), this.onFullScreenChange);
        simultaneousPlayManager.subscribe(this);
        if (this.props.isAutoPlay) {
            simultaneousPlayManager.pauseOthers(this);
        }
    };
    CustomMediaPlayer.prototype.componentWillUnmount = function () {
        document.removeEventListener(vendorify('fullscreenchange', false), this.onFullScreenChange);
        simultaneousPlayManager.unsubscribe(this);
    };
    CustomMediaPlayer.prototype.setActions = function (actions) {
        // Actions are being sent constantly while the video is playing,
        // though play and pause functions are always the same objects
        if (!this.actions) {
            var play = actions.play, pause = actions.pause;
            this.actions = { play: play, pause: pause };
        }
    };
    CustomMediaPlayer.prototype.render = function () {
        var _this = this;
        var _a = this.props, type = _a.type, src = _a.src, isAutoPlay = _a.isAutoPlay, isShortcutEnabled = _a.isShortcutEnabled, formatMessage = _a.intl.formatMessage, onCanPlay = _a.onCanPlay, onError = _a.onError;
        return (react["createElement"](CustomVideoWrapper, { innerRef: this.saveVideoWrapperRef },
            react["createElement"](video_Video, { sourceType: type, src: src, autoPlay: isAutoPlay, onCanPlay: onCanPlay, onError: onError }, function (video, videoState, actions) {
                _this.setActions(actions);
                var status = videoState.status, currentTime = videoState.currentTime, buffered = videoState.buffered, duration = videoState.duration, isLoading = videoState.isLoading;
                var isPlaying = status === 'playing';
                var toggleButtonIcon = isPlaying ? (react["createElement"](vid_pause_default.a, { label: formatMessage(messages["a" /* messages */].play) })) : (react["createElement"](vid_play_default.a, { label: formatMessage(messages["a" /* messages */].pause) }));
                var toggleButtonAction = isPlaying ? _this.pause : _this.play;
                var button = (react["createElement"](MediaButton["a" /* default */], { appearance: toolbar, iconBefore: toggleButtonIcon, onClick: toggleButtonAction }));
                var shortcuts = isShortcutEnabled && [
                    react["createElement"](shortcut["a" /* Shortcut */], { key: "space-shortcut", keyCode: shortcut["b" /* keyCodes */].space, handler: _this.shortcutHandler(toggleButtonAction) }),
                    react["createElement"](shortcut["a" /* Shortcut */], { key: "m-shortcut", keyCode: shortcut["b" /* keyCodes */].m, handler: _this.shortcutHandler(actions.toggleMute) }),
                ];
                return (react["createElement"](VideoWrapper, null,
                    video,
                    isLoading && _this.renderSpinner(),
                    shortcuts,
                    react["createElement"](ControlsWrapper, { className: hideControlsClassName },
                        react["createElement"](TimeWrapper, null,
                            react["createElement"](timeRange_TimeRange, { currentTime: currentTime, bufferedTime: buffered, duration: duration, onChange: _this.onTimeChange(actions.navigate) })),
                        react["createElement"](TimebarWrapper, null,
                            react["createElement"](LeftControls, null,
                                button,
                                _this.renderVolume(videoState, actions)),
                            react["createElement"](RightControls, null,
                                react["createElement"](CurrentTime, { draggable: false },
                                    formatDuration(currentTime),
                                    " /",
                                    ' ',
                                    formatDuration(duration)),
                                _this.renderHDButton(),
                                _this.renderFullScreenButton(),
                                _this.renderDownloadButton())))));
            })));
    };
    return CustomMediaPlayer;
}(react["Component"]));

/* harmony default export */ var customMediaPlayer = __webpack_exports__["a"] = (Object(index_es["e" /* injectIntl */])(customMediaPlayer_CustomMediaPlayer));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messages; });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[/* defineMessages */ "d"])({
    retry: {
        id: 'fabric.media.retry',
        defaultMessage: 'Retry',
        description: 'Allows user to perform an action again',
    },
    failed_to_load: {
        id: 'fabric.media.failed_to_load',
        defaultMessage: 'Failed to load',
        description: 'We show this message when we have an error loading a file',
    },
    recent_uploads: {
        id: 'fabric.media.recent_uploads',
        defaultMessage: 'Recent uploads',
        description: 'Title of a section where we show the user recent uploaded files',
    },
    upload_file: {
        id: 'fabric.media.upload_file',
        defaultMessage: 'Upload a file',
        description: 'Call to action that initiates the upload of a file',
    },
    drag_and_drop_your_files: {
        id: 'fabric.media.drag_and_drop_your_files',
        defaultMessage: 'Drag and drop your files anywhere or',
        description: 'Used to describe the area where the user can drag and drop files to upload',
    },
    drop_your_files: {
        id: 'fabric.media.drop_your_files',
        defaultMessage: 'Drop your files to upload',
        description: 'Indicates that the files will be uploaded when the user drops them in the drag and drop area',
    },
    upload: {
        id: 'fabric.media.upload',
        defaultMessage: 'Upload',
        description: 'upload',
    },
    cancel: {
        id: 'fabric.media.cancel',
        defaultMessage: 'Cancel',
        description: 'cancel',
    },
    search_all_gifs: {
        id: 'fabric.media.search_all_gifs',
        defaultMessage: 'Search all the GIFs!',
        description: 'Used as input placeholder to let the user know that they can search for GIF image files',
    },
    cant_retrieve_gifs: {
        id: 'fabric.media.cant_retrieve_gifs',
        defaultMessage: 'Ouch! We could not retrieve any GIFs',
        description: 'Error message when we can not find any GIF images for that text',
    },
    check_your_network: {
        id: 'fabric.media.check_your_network',
        defaultMessage: 'Check your network connection',
        description: 'Error message when network does not work',
    },
    try_again: {
        id: 'fabric.media.try_again',
        defaultMessage: 'Try again',
        description: 'Allow the user to try an action again',
    },
    try_another_account: {
        id: 'fabric.media.try_another_account',
        defaultMessage: 'Try another account',
        description: 'Allows the user to try an action again with a different account',
    },
    no_gifs_found: {
        id: 'fabric.media.no_gifs_found',
        defaultMessage: "Hello? Was it me you're looking for?",
        description: 'Not expected error that happens when searching for GIF images',
    },
    no_gifs_found_suggestion: {
        id: 'fabric.media.no_gifs_found_suggestion',
        defaultMessage: 'We couldn\'t find anything for "{query}"',
        description: 'There are no results for GIFs matching that query',
    },
    load_more_gifs: {
        id: 'fabric.media.load_more_gifs',
        defaultMessage: 'Load more GIFs',
        description: 'Used to load next page of GIF images',
    },
    add_account: {
        id: 'fabric.media.add_account',
        defaultMessage: 'Add account',
        description: 'Allows to add a new account',
    },
    unlink_account: {
        id: 'fabric.media.unlink_account',
        defaultMessage: 'Unlink Account',
        description: 'Allows to remove a connected account from the user',
    },
    upload_file_from: {
        id: 'fabric.media.upload_file_from',
        defaultMessage: 'Upload a file from {name}',
        description: 'Allows to upload a file from different sources',
    },
    connect_to: {
        id: 'fabric.media.connect_to',
        defaultMessage: 'Connect to {name}',
        description: 'Allows the user to connect with different types of external services',
    },
    connect_account_description: {
        id: 'fabric.media.connect_account_description',
        defaultMessage: "We'll open a new page to help you connect your {name} account",
        description: 'Explains what will happen when the users connects to a new account',
    },
    connect_link_account: {
        id: 'fabric.media.connect_link_account',
        defaultMessage: 'Connect your account to preview links',
        description: 'Shown when a user does not have access to a link, but can connect their external account to view the link.',
    },
    invalid_permissions: {
        id: 'fabric.media.invalid_permissions',
        defaultMessage: "You don't have permissions to view",
        description: 'Message shown when a user does not have permissions to view an item',
    },
    upload_an_avatar: {
        id: 'fabric.media.upload_an_avatar',
        defaultMessage: 'Upload an avatar',
        description: 'Indicates that the user can upload a new avatar',
    },
    loading: {
        id: 'fabric.media.loading',
        defaultMessage: 'Loading...',
        description: 'Indicates an element on a page is loading.',
    },
    save: {
        id: 'fabric.media.save',
        defaultMessage: 'Save',
        description: 'Just the "save" word',
    },
    or: {
        id: 'fabric.media.or',
        defaultMessage: 'or',
        description: 'Just the "or" word',
    },
    upload_photo: {
        id: 'fabric.media.upload_photo',
        defaultMessage: 'Upload a photo',
        description: 'Call to action for the user to upload a new photo',
    },
    default_avatars: {
        id: 'fabric.media.default_avatars',
        defaultMessage: 'Default avatars',
        description: 'Showed above the default avatar list',
    },
    drag_and_drop_images_here: {
        id: 'fabric.media.drag_and_drop_images_here',
        defaultMessage: 'Drag and drop your images here',
        description: 'Indicates that the user can drag and drop images in that area',
    },
    upload_image: {
        id: 'fabric.media.upload_image',
        defaultMessage: 'Upload image',
        description: 'Call to action for the user to upload a new image',
    },
    image_url_invalid_error: {
        id: 'fabric.media.image_url_invalid_error',
        defaultMessage: 'Could not load image, the url is invalid.',
        description: 'There was an error parsing the image url',
    },
    image_format_invalid_error: {
        id: 'fabric.media.image_format_invalid_error',
        defaultMessage: 'Could not load image, the format is invalid.',
        description: 'The provided image format is not valid',
    },
    image_size_too_large_error: {
        id: 'fabric.media.image_size_too_large_error',
        defaultMessage: 'Image is too large, must be no larger than {MAX_SIZE_MB}Mb',
        description: 'The provided image size is too big',
    },
    something_went_wrong: {
        id: 'fabric.media.something_went_wrong',
        defaultMessage: 'Something went wrong.',
        description: 'Showed when an error happen but we dont have more info about it',
    },
    might_be_a_hiccup: {
        id: 'fabric.media.might_be_a_hiccup',
        defaultMessage: 'It might just be a hiccup.',
        description: 'Used when an unknow error happens, just in a funny way of saying that we dont have more info about it',
    },
    couldnt_generate_preview: {
        id: 'fabric.media.couldnt_generate_preview',
        defaultMessage: "We couldn't generate a preview for this file.",
        description: 'Error case for when the backend cant generate a preview for that file',
    },
    cant_preview_file_type: {
        id: 'fabric.media.cant_preview_file_type',
        defaultMessage: "We can't preview this file type.",
        description: 'Error case for when we have no available preview for that file',
    },
    item_not_found_in_list: {
        id: 'fabric.media.item_not_found_in_list',
        defaultMessage: 'The selected item was not found on the list.',
        description: 'Error case for when a provided item is not found within the list of items',
    },
    no_pdf_artifacts: {
        id: 'fabric.media.no_pdf_artifacts',
        defaultMessage: 'No PDF artifacts found for this file.',
        description: 'Error case for when we cant preview a PDF file',
    },
    give_feedback: {
        id: 'fabric.media.give_feedback',
        defaultMessage: 'Give feedback',
        description: 'Call to action that opens a popup to get feedback from the users',
    },
    try_downloading_file: {
        id: 'fabric.media.try_downloading_file',
        defaultMessage: 'Try downloading the file to view it.',
        description: 'We show this message to allow users to download a file',
    },
    webgl_warning_description: {
        id: 'fabric.media.webgl_warning_description',
        defaultMessage: 'Your browser does not support WebGL. Use a WebGL enabled browser to annotate images.',
        description: 'We show this error message when the browser doesnt support this feature',
    },
    unable_to_annotate_image: {
        id: 'fabric.media.unable_to_annotate_image',
        defaultMessage: "You're unable to annotate this image",
        description: 'If there is an error trying to annotate an image we show this',
    },
    learn_more: {
        id: 'fabric.media.learn_more',
        defaultMessage: 'Learn More',
        description: '',
    },
    accounts: {
        id: 'fabric.media.accounts',
        defaultMessage: 'Accounts',
        description: '',
    },
    actions: {
        id: 'fabric.media.actions',
        defaultMessage: 'Actions',
        description: '',
    },
    error_hint_retry: {
        id: 'fabric.media.error_hint_retry',
        defaultMessage: "Try again and we'll give it another shot.",
        description: 'Generic message that we show if an action failed',
    },
    error_hint_critical: {
        id: 'fabric.media.error_hint_critical',
        defaultMessage: 'If the problem keeps happening contact support.',
        description: 'We show this error message if we cant recover from the action',
    },
    close: {
        id: 'fabric.media.close',
        defaultMessage: 'Close',
        description: '',
    },
    could_not_load_editor: {
        id: 'fabric.media.could_not_load_editor',
        defaultMessage: 'Ouch! We could not load the editor',
        description: 'Error message to communicate that we cant load the editor',
    },
    could_not_save_image: {
        id: 'fabric.media.could_not_save_image',
        defaultMessage: 'Ouch! We could not save the image',
        description: 'Error message to communicate that we cant save an image',
    },
    annotate: {
        id: 'fabric.media.annotate',
        defaultMessage: 'Annotate',
        description: '',
    },
    annotate_tool_arrow: {
        id: 'fabric.media.annotate.tool.arrow',
        defaultMessage: 'Arrow',
        description: '',
    },
    annotate_tool_text: {
        id: 'fabric.media.annotate.tool.text',
        defaultMessage: 'Text',
        description: '',
    },
    annotate_tool_shape: {
        id: 'fabric.media.annotate.tool.shape',
        defaultMessage: 'Shape',
        description: '',
    },
    annotate_tool_brush: {
        id: 'fabric.media.annotate.tool.brush',
        defaultMessage: 'Brush',
        description: '',
    },
    annotate_tool_blur: {
        id: 'fabric.media.annotate.tool.blur',
        defaultMessage: 'Blur',
        description: '',
    },
    annotate_tool_line_thickness: {
        id: 'fabric.media.annotate.tool.line.thickness',
        defaultMessage: 'Line thickness',
        description: '',
    },
    annotate_tool_color: {
        id: 'fabric.media.annotate.tool.color',
        defaultMessage: 'Color',
        description: '',
    },
    annotate_confirmation_close_anyway: {
        id: 'fabric.media.annotate.confirmation.close.anyway',
        defaultMessage: 'Close anyway',
        description: '',
    },
    annotate_confirmation_heading: {
        id: 'fabric.media.annotate.confirmation.heading',
        defaultMessage: 'Unsaved changes',
        description: '',
    },
    annotate_confirmation_content: {
        id: 'fabric.media.annotate.confirmation.content',
        defaultMessage: 'You have some unsaved changes. Are you sure you want to leave?',
        description: '',
    },
    drop_your_files_here: {
        id: 'fabric.media.drop_your_files_here',
        defaultMessage: 'Drop your files here',
        description: 'Info message that we show to indicate that the user can drag and drop files',
    },
    share_files_instantly: {
        id: 'fabric.media.share_files_instantly',
        defaultMessage: "We'll share them instantly",
        description: 'It means that we will upload the files you drag and drop automatically',
    },
    insert_files: {
        id: 'fabric.media.insert_files',
        defaultMessage: 'Insert {0, plural, one {a file} other {{0} files}}',
        description: 'Showed when the user selects 1 or more files to insert',
    },
    zoom_out: {
        id: 'fabric.media.zoom_out',
        defaultMessage: 'zoom out',
        description: 'Indicates the user can zoom out a file',
    },
    zoom_in: {
        id: 'fabric.media.zoom_in',
        defaultMessage: 'zoom in',
        description: 'Indicates the user can zoom in a file',
    },
    remove_image: {
        id: 'fabric.media.remove_image',
        defaultMessage: 'Remove image',
        description: 'Allows the user to remove a file',
    },
    play: {
        id: 'fabric.media.play',
        defaultMessage: 'play',
        description: '',
    },
    pause: {
        id: 'fabric.media.pause',
        defaultMessage: 'pause',
        description: '',
    },
    disable_fullscreen: {
        id: 'fabric.media.disable_fullscreen',
        defaultMessage: 'disable fullscreen',
        description: 'Hint to let the user know they can disable the fullscreen mode',
    },
    enable_fullscreen: {
        id: 'fabric.media.enable_fullscreen',
        defaultMessage: 'enable fullscreen',
        description: 'Hint to let the user know they can enable the fullscreen mode',
    },
    error_loading_file: {
        id: 'fabric.media.error_loading_file',
        defaultMessage: 'Error loading file',
        description: 'Message showed when we had an error trying to load the file',
    },
    error_generating_preview: {
        id: 'fabric.media.error_generating_preview',
        defaultMessage: 'Error generating preview',
        description: 'Message showed when we had an error trying generate a preview for a file',
    },
    download: {
        id: 'fabric.media.download',
        defaultMessage: 'Download',
        description: '',
    },
    unknown: {
        id: 'fabric.media.unknown',
        defaultMessage: 'unknown',
        description: '',
    },
    document: {
        id: 'fabric.media.document',
        defaultMessage: 'document',
        description: '',
    },
    audio: {
        id: 'fabric.media.audio',
        defaultMessage: 'audio',
        description: '',
    },
    video: {
        id: 'fabric.media.video',
        defaultMessage: 'video',
        description: '',
    },
    image: {
        id: 'fabric.media.image',
        defaultMessage: 'image',
        description: '',
    },
});
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isRotated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCssFromImageOrientation; });
var ORIENT_TRANSFORMS = {
    1: 'none',
    2: 'rotateY(180deg)',
    3: 'rotate(180deg)',
    4: 'rotate(180deg) rotateY(180deg)',
    5: 'rotate(270deg) rotateY(180deg)',
    6: 'rotate(90deg)',
    7: 'rotate(90deg) rotateY(180deg)',
    8: 'rotate(270deg)',
};
/**
 * Returns true if image rotated 90 or 270 degrees (on it's side)
 */
var isRotated = function (orientation) { return orientation >= 5; };
var getCssFromImageOrientation = function (orientation) {
    return ORIENT_TRANSFORMS[orientation];
};
//# sourceMappingURL=imageOrientationUtil.js.map

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dataURItoFile */
/* unused harmony export fileToDataURI */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFileInfo; });
/* unused harmony export getFileInfoFromSrc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fileToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadImage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function dataURItoFile(dataURI, filename) {
    if (filename === void 0) { filename = 'untitled'; }
    if (dataURI.length === 0) {
        throw new Error('dataURI not found');
    }
    // convert base64/URLEncoded data component to raw binary data held in a string
    var dataURIParts = dataURI.split(',');
    var byteString = dataURIParts[0].indexOf('base64') >= 0
        ? atob(dataURIParts[1])
        : decodeURIComponent(dataURIParts[1]);
    // separate out the mime component
    var mimeString;
    try {
        mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
    }
    catch (e) {
        // https://stackoverflow.com/questions/1176022/unknown-file-type-mime
        mimeString = 'application/octet-stream';
    }
    // write the bytes of the string to a typed array
    var intArray = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        intArray[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([intArray], { type: mimeString });
    try {
        return new File([blob], filename, { type: mimeString });
    }
    catch (e) {
        // IE11 does not allow the File constructor (yay!)
        // we get around this by decorating the blob instance with File properties
        // effectively casting up from Blob to File.
        var ie11File = blob;
        var date = new Date();
        ie11File.lastModified = date.getTime();
        ie11File.lastModifiedDate = date;
        ie11File.name = filename;
        ie11File.webkitRelativePath = '';
        return ie11File;
    }
}
function fileToDataURI(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            var result = reader.result;
            if (typeof result === 'string') {
                resolve(result);
            }
            else if (result === null) {
                reject();
            }
        });
        reader.addEventListener('error', reject);
        reader.readAsDataURL(blob);
    });
}
function getFileInfo(file, src) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var _a, _b;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = {
                        file: file
                    };
                    _b = src;
                    if (_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, fileToDataURI(file)];
                case 1:
                    _b = (_c.sent());
                    _c.label = 2;
                case 2: return [2 /*return*/, (_a.src = _b,
                        _a)];
            }
        });
    });
}
function getFileInfoFromSrc(src, file) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var _a, _b;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = {};
                    _b = file;
                    if (_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, dataURItoFile(src)];
                case 1:
                    _b = (_c.sent());
                    _c.label = 2;
                case 2: return [2 /*return*/, (_a.file = _b,
                        _a.src = src,
                        _a)];
            }
        });
    });
}
function fileToArrayBuffer(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            var array = new Uint8Array(reader.result);
            resolve(array);
        });
        reader.addEventListener('error', reject);
        reader.readAsArrayBuffer(file);
    });
}
function loadImage(src) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = src;
        img.onload = function () {
            resolve(img);
        };
        img.onerror = reject;
    });
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MediaServicesVideoIcon = function MediaServicesVideoIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><rect fill=\"currentColor\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M16.37 14.954L14 13.807v-3.613l2.37-1.148c.285-.138.63.05.63.343v5.222c0 .293-.345.481-.63.343\" fill=\"inherit\"/><rect fill=\"inherit\" x=\"7\" y=\"9\" width=\"6\" height=\"6\" rx=\"1\"/></g></svg>"
  }, props));
};

MediaServicesVideoIcon.displayName = 'MediaServicesVideoIcon';
var _default = MediaServicesVideoIcon;
exports.default = _default;

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ImageIcon = function ImageIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995zM10.5 16.5L9 15l-3 3h12v-2.7L15 12l-4.5 4.5zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

ImageIcon.displayName = 'ImageIcon';
var _default = ImageIcon;
exports.default = _default;

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  var regex = /(auto|scroll)/;

  var parents = function (node, ps) {
    if (node.parentNode === null) { return ps; }

    return parents(node.parentNode, ps.concat([node]));
  };

  var style = function (node, prop) {
    return getComputedStyle(node, null).getPropertyValue(prop);
  };

  var overflow = function (node) {
    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
  };

  var scroll = function (node) {
   return regex.test(overflow(node));
  };

  var scrollParent = function (node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return ;
    }

    var ps = parents(node.parentNode, []);

    for (var i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  };

  return scrollParent;
}));


/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var isSafari = typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var VideoSnapshot = (function () {
    function VideoSnapshot(blob) {
        var _this = this;
        this.loadVideo = function (time) {
            if (time === void 0) { time = 0; }
            return new Promise(function (resolve) {
                var video = document.createElement('video');
                video.preload = 'metadata';
                video.src = _this.videoUrl;
                video.muted = true;
                if (time === 0) {
                    video.play();
                }
                else {
                    if (typeof time === 'number') {
                        video.currentTime = time;
                    }
                    else if (typeof time === 'string') {
                        var duration = video.duration;
                        video.currentTime = _this.getSmartTime(time, duration);
                    }
                    if (isSafari) {
                        video.play();
                    }
                }
                video.addEventListener('timeupdate', function timeupdateHandler() {
                    video.removeEventListener('timeupdate', timeupdateHandler);
                    video.pause();
                    resolve(video);
                });
            });
        };
        this.getDimensions = function () { return __awaiter(_this, void 0, void 0, function () {
            var video;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.loadVideo()];
                    case 1:
                        video = _a.sent();
                        return [2, {
                                width: video.videoWidth,
                                height: video.videoHeight
                            }];
                }
            });
        }); };
        var url = URL.createObjectURL(blob);
        this.videoUrl = url;
    }
    VideoSnapshot.prototype.takeSnapshot = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            var video, canvas, context, dataURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.loadVideo(time)];
                    case 1:
                        video = _a.sent();
                        canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        context = canvas.getContext('2d');
                        if (!context) {
                            throw new Error('error creating canvas context');
                        }
                        context.drawImage(video, 0, 0, canvas.width, canvas.height);
                        dataURL = canvas.toDataURL();
                        return [2, dataURL];
                }
            });
        });
    };
    VideoSnapshot.prototype.end = function () {
        this.revoke();
    };
    VideoSnapshot.prototype.revoke = function () {
        URL.revokeObjectURL(this.videoUrl);
    };
    VideoSnapshot.prototype.getSmartTime = function (time, duration) {
        if (duration === void 0) { duration = 0; }
        var smartTimes = {
            start: 0,
            middle: duration / 2,
            end: duration,
        };
        return smartTimes[time];
    };
    return VideoSnapshot;
}());
exports.default = VideoSnapshot;


/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CheckIcon = function CheckIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M6.735 12.322a1 1 0 0 0-1.47 1.356l3.612 3.919c.537.526 1.337.526 1.834.03l.364-.359a2335.638 2335.638 0 0 0 3.939-3.883l.04-.04a492.598 492.598 0 0 0 3.658-3.643 1 1 0 0 0-1.424-1.404 518.42 518.42 0 0 1-3.64 3.625l-.04.04a2049.114 2049.114 0 0 1-3.775 3.722l-3.098-3.363z\" fill=\"currentColor\"/></svg>"
  }, props));
};

CheckIcon.displayName = 'CheckIcon';
var _default = CheckIcon;
exports.default = _default;

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DownloadIcon = function DownloadIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M10.687 17.292a.983.983 0 0 0-1.397 0 1 1 0 0 0 0 1.407l1.964 1.98a1.082 1.082 0 0 0 1.538 0l1.919-1.933a1 1 0 0 0 0-1.408.983.983 0 0 0-1.398 0l-1.29 1.3-1.336-1.346z\" fill-rule=\"nonzero\"/><path d=\"M13.001 19.993L13 10.006C13 9.451 12.552 9 12 9s-1 .45-1 1.007l.001 9.987c0 .555.448 1.006 1 1.006s1-.45 1-1.007z\" fill-rule=\"nonzero\"/><path d=\"M7.938 5.48a4.8 4.8 0 0 0-.777-.062C4.356 5.418 2 7.62 2 10.498 2 13.409 4.385 16 7.1 16h2.881v-1.993H7.1c-1.657 0-3.115-1.663-3.115-3.508 0-1.778 1.469-3.087 3.104-3.087h.012c.389 0 .686.05.97.15l.17.063c.605.248.875-.246.875-.246l.15-.267c.73-1.347 2.201-2.096 3.716-2.12a4.14 4.14 0 0 1 4.069 3.645l.046.34s.071.525.665.525c.013 0 .012.005.023.005h.254c1.136 0 1.976.959 1.976 2.158 0 1.207-.987 2.342-2.07 2.342h-3.964V16h3.964C20.105 16 22 13.955 22 11.665c0-2-1.312-3.663-3.138-4.074-.707-2.707-3.053-4.552-5.886-4.591-1.975.02-3.901.9-5.038 2.48z\"/></g></svg>"
  }, props));
};

DownloadIcon.displayName = 'DownloadIcon';
var _default = DownloadIcon;
exports.default = _default;

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/scrollparent/scrollparent.js
var scrollparent = __webpack_require__(968);
var scrollparent_default = /*#__PURE__*/__webpack_require__.n(scrollparent);

// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/getElementBounds.js
function getElementBounds_getElementBounds(element) {
  if (!element) {
    return undefined;
  }

  var rect = element.getBoundingClientRect();
  return {
    left: window.pageXOffset + rect.left,
    right: window.pageXOffset + rect.left + rect.width,
    top: window.pageYOffset + rect.top,
    bottom: window.pageYOffset + rect.top + rect.height
  };
}
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/getViewportBounds.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var utils_getViewportBounds = (function (container) {
  if (!container) {
    return undefined;
  }

  if (container === window) {
    return {
      top: window.pageYOffset,
      left: window.pageXOffset,
      bottom: window.pageYOffset + window.innerHeight,
      right: window.pageXOffset + window.innerWidth
    };
  } else {
    var bounds = getElementBounds_getElementBounds(container);

    if (bounds) {
      return _objectSpread({}, bounds, {
        bottom: bounds.top + container.offsetHeight,
        right: bounds.left + container.offsetWidth
      });
    } else {
      return undefined;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/convertOffsetToBounds.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ var convertOffsetToBounds = (function (offset) {
  if (!offset) {
    return undefined;
  }

  var offsetTop;
  var offsetRight;
  var offsetBottom;
  var offsetLeft;

  if (_typeof(offset) === 'object') {
    offsetTop = offset.top || 0;
    offsetRight = offset.right || 0;
    offsetBottom = offset.bottom || 0;
    offsetLeft = offset.left || 0;
  } else {
    offsetTop = offset || 0;
    offsetRight = offset || 0;
    offsetBottom = offset || 0;
    offsetLeft = offset || 0;
  }

  return {
    top: offsetTop,
    right: offsetRight,
    bottom: offsetBottom,
    left: offsetLeft
  };
});
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/isElementInViewport.js
/* harmony default export */ var isElementInViewport = (function (elementBounds, viewportBounds, offset) {
  var offsetTop = offset && offset.top || 0;
  var offsetRight = offset && offset.right || 0;
  var offsetBottom = offset && offset.bottom || 0;
  var offsetLeft = offset && offset.left || 0;
  return elementBounds.bottom + offsetBottom >= viewportBounds.top && elementBounds.top - offsetTop <= viewportBounds.bottom && elementBounds.right + offsetRight >= viewportBounds.left && elementBounds.left - offsetLeft <= viewportBounds.right;
});
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/isBackCompatMode.js
/* harmony default export */ var isBackCompatMode = (function () {
  return document.compatMode === "BackCompat";
});
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/eventListenerOptions.js
var isPassiveListenerSupported = function isPassiveListenerSupported() {
  var supported = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supported = true;
      }
    });
    window.addEventListener('test', null, opts);
    window.removeEventListener('test', null, opts);
  } catch (e) {}

  return supported;
};

/* harmony default export */ var eventListenerOptions = (isPassiveListenerSupported() ? {
  passive: true
} : undefined);
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return esnext_LazilyRender; });
function esnext_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { esnext_typeof = function _typeof(obj) { return typeof obj; }; } else { esnext_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return esnext_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (esnext_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function esnext_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var esnext_LazilyRender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LazilyRender, _React$Component);

  function LazilyRender() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LazilyRender);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LazilyRender)).call.apply(_getPrototypeOf2, [this].concat(args)));

    esnext_defineProperty(_assertThisInitialized(_this), "raf", void 0);

    esnext_defineProperty(_assertThisInitialized(_this), "element", void 0);

    esnext_defineProperty(_assertThisInitialized(_this), "container", void 0);

    esnext_defineProperty(_assertThisInitialized(_this), "state", {
      hasBeenScrolledIntoView: false
    });

    esnext_defineProperty(_assertThisInitialized(_this), "update", function () {
      cancelAnimationFrame(_this.raf);
      _this.raf = requestAnimationFrame(function () {
        var elementBounds = _this.getElementBounds();

        var viewportBounds = _this.getViewportBounds();

        var offsetBounds = _this.getOffsetBounds();

        if (!elementBounds || !viewportBounds) {
          return;
        }

        if (isElementInViewport(elementBounds, viewportBounds, offsetBounds)) {
          _this.stopListening(_this.container);

          _this.setState({
            hasBeenScrolledIntoView: true
          }, function () {
            var onRender = _this.props.onRender;

            if (onRender) {
              onRender();
            }
          });
        }
      });
    });

    esnext_defineProperty(_assertThisInitialized(_this), "handleMount", function (element) {
      var scrollContainer = _this.props.scrollContainer;
      _this.element = element;
      _this.container = _this.getContainer(scrollContainer);
    });

    return _this;
  }

  _createClass(LazilyRender, [{
    key: "getContainer",
    value: function getContainer(scrollContainer) {
      if (scrollContainer) {
        return scrollContainer;
      } else {
        if (this.element) {
          var container = scrollparent_default()(this.element);

          if (container === document.scrollingElement || container === document.documentElement || !isBackCompatMode() && container == document.body) {
            return window;
          } else {
            return container;
          }
        } else {
          return undefined;
        }
      }
    }
  }, {
    key: "getViewportBounds",
    value: function getViewportBounds() {
      return utils_getViewportBounds(this.container);
    }
  }, {
    key: "getElementBounds",
    value: function getElementBounds() {
      return getElementBounds_getElementBounds(this.element);
    }
  }, {
    key: "getOffsetBounds",
    value: function getOffsetBounds() {
      var offset = this.props.offset;
      return convertOffsetToBounds(offset);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var prevContainer = prevProps.scrollContainer;
      var nextContainer = this.props.scrollContainer; // If a scroll container was defined before, do some cleanup
      // and bootstrap the next scroll container.

      if (prevContainer !== nextContainer) {
        // If the previous container was already utilised, no cleanup
        // is required - already done in LazilyRender.update().
        if (!prevState.hasBeenScrolledIntoView) {
          this.stopListening(prevContainer);
        } // Set a new listener if the scrollContainer is defined, and update 
        // the container property accordingly. Note: this should only be done
        // when the next container is different.


        this.container = this.getContainer(nextContainer);
        this.startListening(this.container); // Signal that the element has not been scrolled into view and 
        // recompute its position. This will essentially 'reset' the node's
        // current status back to a placeholder item if need be.

        this.setState({
          hasBeenScrolledIntoView: false
        }, function () {
          _this2.update();
        });
      }
    }
  }, {
    key: "startListening",
    value: function startListening(container) {
      if (container) container.addEventListener('scroll', this.update, eventListenerOptions);
      window.addEventListener('resize', this.update);
    }
  }, {
    key: "stopListening",
    value: function stopListening(container) {
      if (container) container.removeEventListener('scroll', this.update, eventListenerOptions);
      window.removeEventListener('resize', this.update);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update();
      this.startListening(this.container);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.container);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          content = _this$props.content,
          children = _this$props.children;
      var hasBeenScrolledIntoView = this.state.hasBeenScrolledIntoView;

      if (!hasBeenScrolledIntoView && placeholder) {
        return placeholder;
      }

      if (hasBeenScrolledIntoView && content) {
        return content;
      }

      if (children) {
        return children(hasBeenScrolledIntoView);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          component = _this$props2.component;
      return react["createElement"](component || 'div', {
        ref: this.handleMount,
        className: className,
        children: this.renderChildren()
      });
    }
  }]);

  return LazilyRender;
}(react["Component"]);



/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ellipsify; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(163);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_3__);




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var inline = _a.inline;
    return (inline && 'display: inline;') || '';
});
Wrapper.displayName = 'Ellipsify';
var Ellipsify = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Wrapper, { className: "ellipsed-text", innerRef: setEllipsis(props), "aria-label": props.text, inline: props.inline }, props.text));
};
var setEllipsis = function (props) { return function (element) {
    if (!element) {
        return;
    }
    var maximumLines = props.lines;
    var height = element.getBoundingClientRect().height;
    var text = element.textContent;
    element.textContent = 'a';
    var lineHeight = element.getBoundingClientRect().height;
    var lineCount = height / lineHeight;
    var maximumHeight = lineHeight * maximumLines;
    if (lineCount <= maximumLines) {
        element.textContent = text;
        return;
    }
    var textContent = text;
    var endLength = typeof props.endLength === 'number' && props.endLength >= 0
        ? props.endLength
        : 8;
    var beginningText = text.substr(0, (text.length * maximumLines) / lineCount - endLength);
    var endText = text.substr(text.length - endLength, endLength);
    element.textContent = textContent = beginningText + "..." + endText;
    var finalHeight = element.getBoundingClientRect().height;
    if (finalHeight > maximumHeight) {
        var adjustedBeginningText = beginningText.substr(0, beginningText.length - (beginningText.length / maximumLines) * 0.25);
        textContent = adjustedBeginningText + "..." + endText;
    }
    delayRun(function () { return (element.textContent = textContent); });
}; };
var timeout = function (fn) { return setTimeout(fn, 1); };
var delayRun = exenv__WEBPACK_IMPORTED_MODULE_3__["canUseDOM"] && window.requestAnimationFrame
    ? window.requestAnimationFrame
    : timeout;
/* unused harmony default export */ var _unused_webpack_default_export = (Ellipsify);
var templateObject_1;
//# sourceMappingURL=ellipsify.js.map

/***/ })

}]);