(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(934));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Generic16Icon = function Generic16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#5E6C84\" fill-rule=\"evenodd\" d=\"M8 3H5.333C4.597 3 4 3.617 4 4.378v7.244C4 12.382 4.597 13 5.333 13h5.334c.736 0 1.333-.617 1.333-1.378V8h-1.333v3.622H5.333V4.378H8v1.414c0 .736.597 1.333 1.333 1.333h2.334c.184 0 .333-.15.333-.333v-.903a.333.333 0 0 0-.093-.231l-2.164-2.25A1.333 1.333 0 0 0 8.782 3H8zM0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0 1 14.006 16H1.994A1.995 1.995 0 0 1 0 14.006V1.994z\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Generic16Icon.displayName = 'Generic16Icon';
var _default = Generic16Icon;
exports.default = _default;

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(563);

var _interopRequireDefault = __webpack_require__(394);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.size = exports.default = exports.IconWrapper = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(6));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(21));

var _createClass2 = _interopRequireDefault(__webpack_require__(22));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(23));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(20));

var _inherits2 = _interopRequireDefault(__webpack_require__(24));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _styledComponents = _interopRequireDefault(__webpack_require__(3));

var _theme = __webpack_require__(2);

var sizes = {
  small: {
    height: '16px',
    width: '16px'
  },
  medium: {
    height: '24px',
    width: '24px'
  },
  xlarge: {
    height: '64px',
    width: '48px'
  }
};

var getSize = function getSize(props) {
  if (props.size) {
    return "height: ".concat(sizes[props.size].height, "; width: ").concat(sizes[props.size].width, ";");
  }

  return null;
};

var IconWrapper = _styledComponents.default.span.withConfig({
  displayName: "Icon__IconWrapper",
  componentId: "sc-1wxtf9c-0"
})(["\n  ", " color: ", ";\n  display: inline-block;\n  fill: ", ";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    ", " max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n  /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n"], getSize, function (p) {
  return p.primaryColor || 'currentColor';
}, function (p) {
  return p.secondaryColor || _theme.colors.background;
}, getSize);

exports.IconWrapper = IconWrapper;

var Icon =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck2.default)(this, Icon);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
  }

  (0, _createClass2.default)(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dangerouslySetGlyph = _this$props.dangerouslySetGlyph,
          size = _this$props.size;
      return _react.default.createElement(IconWrapper, {
        size: size,
        "aria-label": this.props.label,
        dangerouslySetInnerHTML: {
          __html: dangerouslySetGlyph
        }
      });
    }
  }]);
  return Icon;
}(_react.Component);

exports.default = Icon;
var size = Object.keys(sizes).reduce(function (p, c) {
  return Object.assign(p, (0, _defineProperty2.default)({}, c, c));
}, {});
exports.size = size;

/***/ })

}]);