(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ 854:
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

var Gif16Icon = function Gif16Icon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" focusable=\"false\" role=\"presentation\"><path fill=\"#FFAB00\" fill-rule=\"evenodd\" d=\"M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm7.042 11.09H7.755a.162.162 0 0 1-.162-.161v-5.34c0-.09.072-.162.162-.162h1.287c.09 0 .163.072.163.163v5.339c0 .09-.073.162-.163.162m2.528 0h-1.288a.162.162 0 0 1-.162-.162v-5.34c0-.09.072-.162.162-.162h3.556c.089 0 .162.072.162.163v1.048c0 .09-.073.162-.162.162h-2.106v.947h1.898c.09 0 .162.073.162.162v1.013c0 .09-.072.162-.162.162h-1.898v1.845c0 .09-.074.162-.162.162m-7.045.097C2.944 11.188 2 10.207 2 8.562v-.641c0-1.597.968-2.588 2.528-2.588 1.544 0 2.291.978 2.349 1.948a.161.161 0 0 1-.162.172H5.463a.162.162 0 0 1-.16-.133c-.066-.367-.368-.595-.786-.595-.74 0-.894.657-.894 1.207v.626c0 .822.312 1.238.929 1.238.59 0 .8-.359.8-.667v-.06h-.77a.162.162 0 0 1-.161-.163v-.915c0-.09.072-.162.162-.162h2.144c.09 0 .162.072.162.162v1.036c0 .997-.62 2.161-2.364 2.161\"/></svg>"
  }, props, {
    size: "small"
  }));
};

Gif16Icon.displayName = 'Gif16Icon';
var _default = Gif16Icon;
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