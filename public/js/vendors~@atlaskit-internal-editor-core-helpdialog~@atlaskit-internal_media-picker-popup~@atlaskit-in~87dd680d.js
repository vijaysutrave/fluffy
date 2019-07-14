(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTransitionConsumer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _a = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
    isOpen: true,
    onExited: function () { },
}), Consumer = _a.Consumer, Provider = _a.Provider;
// checks if children exist and are truthy
var hasChildren = function (children) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(children) > 0 &&
        react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, function (child) { return !!child; }).filter(Boolean).length > 0;
};
var Transition = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Transition, _super);
    function Transition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentChildren: undefined,
        };
        _this.onExited = function () {
            _this.setState({
                currentChildren: _this.props.children,
            });
        };
        return _this;
    }
    Transition.getDerivedStateFromProps = function (props, state) {
        var previousChildren = state.currentChildren;
        var exiting = hasChildren(previousChildren) && !hasChildren(props.children);
        return {
            currentChildren: exiting ? previousChildren : props.children,
        };
    };
    Transition.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Provider, { value: {
                onExited: this.onExited,
                isOpen: hasChildren(this.props.children),
            } }, this.state.currentChildren));
    };
    return Transition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
var ModalTransitionConsumer = Consumer;
/* harmony default export */ __webpack_exports__["b"] = (Transition);
//# sourceMappingURL=ModalTransition.js.map

/***/ }),

/***/ 1055:
/***/ (function(module) {

module.exports = {"a":"@atlaskit/blanket","b":"10.0.2"};

/***/ }),

/***/ 1056:
/***/ (function(module) {

module.exports = {"a":"@atlaskit/modal-dialog","b":"10.0.7"};

/***/ }),

/***/ 1195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var constants_namespaceObject = {};
__webpack_require__.r(constants_namespaceObject);
__webpack_require__.d(constants_namespaceObject, "FOCUS_GROUP", function() { return FOCUS_GROUP; });
__webpack_require__.d(constants_namespaceObject, "FOCUS_DISABLED", function() { return FOCUS_DISABLED; });
__webpack_require__.d(constants_namespaceObject, "FOCUS_ALLOW", function() { return FOCUS_ALLOW; });
__webpack_require__.d(constants_namespaceObject, "FOCUS_AUTO", function() { return FOCUS_AUTO; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/constants.js
var constants = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@atlaskit/portal/components/Portal.js
var Portal = __webpack_require__(907);

// EXTERNAL MODULE: ./node_modules/@atlaskit/modal-dialog/components/ModalTransition.js
var ModalTransition = __webpack_require__(1054);

// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/components/StackConsumer.js


// This is the source of truth for open modals
var stackConsumers = [];
// This component provides the position of a modal dialog in the list of all open dialogs.
// The key behaviours are:
// - When a modal renders for the first time it takes the first stack position
// - When a modal mounts, all other modals have to adjust their position
// - When a modal unmounts, all other modals have to adjust their position
var StackConsumer_StackConsumer = /** @class */ (function (_super) {
    tslib_es6["__extends"](StackConsumer, _super);
    function StackConsumer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            stackIndex: 0,
        };
        _this.update = function () {
            var stackIndex = stackConsumers.indexOf(_this.update);
            if (_this.state.stackIndex !== stackIndex) {
                _this.setState({ stackIndex: stackIndex });
            }
        };
        return _this;
    }
    StackConsumer.prototype.componentDidMount = function () {
        stackConsumers.forEach(function (updateFn) { return updateFn(); });
    };
    StackConsumer.prototype.componentWillUnmount = function () {
        var _this = this;
        // This check will pass if the <Transition><Modal/></Transition> pattern has not been
        // implemented correctly. In this case, will still need to make sure we remove ourselves
        // from the stack list.
        if (stackConsumers.indexOf(this.update) !== -1) {
            stackConsumers = stackConsumers.filter(function (stack) { return stack !== _this.update; });
            stackConsumers.forEach(function (updateFn) { return updateFn(); });
        }
    };
    StackConsumer.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.isOpen && !this.props.isOpen) {
            stackConsumers = stackConsumers.filter(function (stack) { return stack !== _this.update; });
            stackConsumers.forEach(function (updateFn) { return updateFn(); });
        }
    };
    StackConsumer.prototype.render = function () {
        if (stackConsumers.indexOf(this.update) === -1) {
            // add this instance to stack consumer list
            stackConsumers = tslib_es6["__spread"]([this.update], stackConsumers);
        }
        return this.props.children(this.state.stackIndex);
    };
    return StackConsumer;
}(react_default.a.Component));
/* harmony default export */ var components_StackConsumer = (StackConsumer_StackConsumer);
//# sourceMappingURL=StackConsumer.js.map
// EXTERNAL MODULE: ./node_modules/exenv/index.js
var exenv = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/createAndFireEvent.js
var createAndFireEvent = __webpack_require__(905);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsContext.js
var withAnalyticsContext = __webpack_require__(909);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsEvents.js
var withAnalyticsEvents = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/@atlaskit/blanket/version.json
var version = __webpack_require__(1055);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/utils/themed.js
var themed = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var _atlaskit_theme = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@atlaskit/blanket/styled.js



var backgroundColor = Object(themed["a" /* default */])({ light: _atlaskit_theme["colors"].N100A, dark: _atlaskit_theme["colors"].DN90A });
var opacity = function (p) { return (p.isTinted ? 1 : 0); };
var pointerEvents = function (p) {
    return p.canClickThrough ? 'none' : 'initial';
};
/* harmony default export */ var styled = (styled_components_browser_esm["default"].div(templateObject_1 || (templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  background: ", ";\n  bottom: 0;\n  left: 0;\n  opacity: ", ";\n  pointer-events: ", ";\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 220ms;\n  z-index: ", ";\n"], ["\n  background: ", ";\n  bottom: 0;\n  left: 0;\n  opacity: ", ";\n  pointer-events: ", ";\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 220ms;\n  z-index: ", ";\n"])), backgroundColor, opacity, pointerEvents, constants["m" /* layers */].blanket));
var templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/blanket/Blanket.js





var Blanket_Blanket = /** @class */ (function (_super) {
    tslib_es6["__extends"](Blanket, _super);
    function Blanket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blanket.prototype.render = function () {
        var _a = this.props, canClickThrough = _a.canClickThrough, isTinted = _a.isTinted, onBlanketClicked = _a.onBlanketClicked;
        var onClick = canClickThrough ? null : onBlanketClicked;
        var containerProps = { canClickThrough: canClickThrough, isTinted: isTinted, onClick: onClick };
        return react["createElement"](styled, tslib_es6["__assign"]({}, containerProps));
    };
    Blanket.defaultProps = {
        canClickThrough: false,
        isTinted: false,
        onBlanketClicked: function () { },
    };
    return Blanket;
}(react["Component"]));

var createAndFireEventOnAtlaskit = Object(createAndFireEvent["a" /* default */])('atlaskit');
/* harmony default export */ var blanket_Blanket = (Object(withAnalyticsContext["a" /* default */])({
    componentName: 'blanket',
    packageName: version["a" /* name */],
    packageVersion: version["b" /* version */],
})(Object(withAnalyticsEvents["a" /* default */])({
    onBlanketClicked: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'blanket',
        attributes: {
            componentName: 'blanket',
            packageName: version["a" /* name */],
            packageVersion: version["b" /* version */],
        },
    }),
})(Blanket_Blanket)));
//# sourceMappingURL=Blanket.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/modal-dialog/version.json
var modal_dialog_version = __webpack_require__(1056);

// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/shared-variables.js
// eslint-disable-next-line import/prefer-default-export
var WIDTH_ENUM = {
    values: ['small', 'medium', 'large', 'x-large'],
    widths: {
        small: 400,
        medium: 600,
        large: 800,
        'x-large': 968,
    },
    defaultValue: 'medium',
};
var gutter = 60;
//# sourceMappingURL=shared-variables.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(35);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_browser_esm = (memoize);

// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ var is_prop_valid_browser_esm = (index);

// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 5 modules
var core_browser_esm = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
var utils_browser_esm = __webpack_require__(205);

// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js + 3 modules
var serialize_browser_esm = __webpack_require__(171);

// CONCATENATED MODULE: ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js







var testOmitPropsOnStringTag = is_prop_valid_browser_esm;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

var styled_base_browser_esm_createStyled = function createStyled(tag, options) {
  if (false) {}

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        styles.push(args[i], args[0][i]);
      }
    }

    var Styled = Object(core_browser_esm["d" /* withEmotionCache */])(function (props, context, ref) {
      return Object(react["createElement"])(core_browser_esm["a" /* ThemeContext */].Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className += Object(utils_browser_esm["a" /* getRegisteredStyles */])(context.registered, classInterpolations, props.className);
        }

        var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = Object(utils_browser_esm["b" /* insertStyles */])(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if (false) {}

        var ele = Object(react["createElement"])(finalTag, newProps);

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? extends_default()({}, options || {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ var styled_base_browser_esm = (styled_base_browser_esm_createStyled);

// CONCATENATED MODULE: ./node_modules/@emotion/styled/dist/styled.browser.esm.js


var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = styled_base_browser_esm.bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

/* harmony default export */ var styled_browser_esm = (newStyled);

// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/utils/flex-max-height-ie-fix.js
/* Used to adjust flex parent height to account for the subtraction in children below */
var IEMaxHeightCalcPx = 1;
/* A bug exists in IE where flex column children overflow the height of their parents.
 * The workaround is to set a pixel max-height on the flex children.
 * For more information see https://github.com/philipwalton/flexbugs/issues/216
 */
var flexMaxHeightIEFix = "\n  max-height: 100%;\n  @media only screen and (-ms-high-contrast:active), (-ms-high-contrast:none) {\n    max-height: calc(100% - " + IEMaxHeightCalcPx + "px);\n  }\n";
//# sourceMappingURL=flex-max-height-ie-fix.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/styled/Modal.js





var boxShadow = function (_a) {
    var isChromeless = _a.isChromeless;
    return isChromeless
        ? 'none'
        : "\n      0 0 0 1px " + _atlaskit_theme["colors"].N30A + ", 0 2px 1px " + _atlaskit_theme["colors"].N30A + ",\n      0 0 20px -6px " + _atlaskit_theme["colors"].N60A + "\n    ";
};
var dialogBgColor = function (_a) {
    var isChromeless = _a.isChromeless;
    return isChromeless
        ? 'transparent'
        : Object(themed["a" /* default */])({ light: _atlaskit_theme["colors"].N0, dark: _atlaskit_theme["colors"].DN50 })();
};
var maxDimensions = "calc(100% - " + gutter * 2 + "px)";
var maxHeightDimensions = "calc(100% - " + (gutter * 2 - IEMaxHeightCalcPx) + "px)";
var dialogWidth = function (_a) {
    var widthName = _a.widthName, widthValue = _a.widthValue;
    if (typeof widthValue === 'number') {
        return widthValue + "px";
    }
    return widthName ? WIDTH_ENUM.widths[widthName] + "px" : widthValue || 'auto';
};
var dialogHeight = function (_a) {
    var heightValue = _a.heightValue;
    if (typeof heightValue === 'number') {
        return heightValue + "px";
    }
    return heightValue || 'auto';
};
var FillScreen = styled_browser_esm.div(Modal_templateObject_1 || (Modal_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  height: 100vh;\n  left: 0;\n  overflow-y: auto;\n  position: absolute;\n  top: ", "px;\n  width: 100%;\n  z-index: ", ";\n  -webkit-overflow-scrolling: touch;\n"], ["\n  height: 100vh;\n  left: 0;\n  overflow-y: auto;\n  position: absolute;\n  top: ", "px;\n  width: 100%;\n  z-index: ", ";\n  -webkit-overflow-scrolling: touch;\n"])), function (props) { return props.scrollDistance; }, constants["m" /* layers */].modal);
var PositionerAbsolute = styled_browser_esm.div(templateObject_2 || (templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  left: 0;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ", ";\n  position: absolute;\n  right: 0;\n  top: ", "px;\n  width: ", ";\n  z-index: ", ";\n  pointer-events: none;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  left: 0;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ", ";\n  position: absolute;\n  right: 0;\n  top: ", "px;\n  width: ", ";\n  z-index: ", ";\n  pointer-events: none;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n"])), maxHeightDimensions, maxDimensions, gutter, dialogWidth, constants["m" /* layers */].modal);
var PositionerRelative = styled_browser_esm.div(templateObject_3 || (templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  margin: ", "px auto;\n  position: relative;\n  width: ", ";\n  z-index: ", ";\n  pointer-events: none;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    margin: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n"], ["\n  margin: ", "px auto;\n  position: relative;\n  width: ", ";\n  z-index: ", ";\n  pointer-events: none;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    margin: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n"])), gutter, dialogWidth, constants["m" /* layers */].modal);
var Dialog = styled_browser_esm.div(templateObject_4 || (templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  ", "\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  ", ";\n  outline: 0;\n  pointer-events: auto;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    max-height: 100%;\n    border-radius: 0;\n  }\n"], ["\n  ",
    "\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: ",
    ";\n  ", ";\n  outline: 0;\n  pointer-events: auto;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    max-height: 100%;\n    border-radius: 0;\n  }\n"])), function (props) {
    return props.isChromeless
        ? null
        : "\n          background-color: " + dialogBgColor(props) + ";\n          border-radius: " + Object(constants["f" /* borderRadius */])() + "px;\n          box-shadow: " + boxShadow(props) + ";\n        ";
}, _atlaskit_theme["colors"].text, function (props) {
    return dialogHeight({ heightValue: props.heightValue });
}, flexMaxHeightIEFix);
PositionerAbsolute.displayName = 'PositionerAbsolute';
Dialog.displayName = 'Dialog';
FillScreen.displayName = 'FillScreen';
PositionerRelative.displayName = 'PositionerRelative';
var Modal_templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Modal.js.map
// EXTERNAL MODULE: ./node_modules/react-transition-group/index.js
var react_transition_group = __webpack_require__(244);

// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/components/Animation.js



var duration = 500;
var easing = 'cubic-bezier(0.23, 1, 0.32, 1)'; // easeOutQuint
var verticalOffset = 16;
var Animation = function (_a) {
    var hasEntered = _a.in, _b = _a.stackIndex, stackIndex = _b === void 0 ? 0 : _b, onExited = _a.onExited, onEntered = _a.onEntered, children = _a.children;
    return (react_default.a.createElement(react_transition_group["Transition"], { in: hasEntered, timeout: { enter: 0, exit: duration }, onExited: onExited, onEntered: onEntered, appear: true }, function (unadjustedStatus) {
        // when we first render, we want to finish the 'entering' state render
        // then jump to the 'entered' state as quick as possible.
        var adjustedStatus = hasEntered && unadjustedStatus === 'exited'
            ? 'entering'
            : unadjustedStatus;
        // Fade styles
        var fadeBaseStyles = {
            transition: "opacity " + duration / 2 + "ms",
            opacity: 1,
        };
        var fadeTransitionStyles = {
            entering: {
                opacity: 0,
            },
            entered: {},
            exiting: {
                opacity: 0,
            },
            exited: {},
        };
        // Slide styles
        var slideBaseStyles = {
            transition: "transform " + duration + "ms " + easing,
            transform: "translate3d(0, " + verticalOffset * 2 + "px, 0)",
        };
        var slideTransitionStyles = {
            entering: {},
            entered: {
                transform: stackIndex > 0
                    ? "translate3d(0, " + stackIndex * (verticalOffset / 2) + "px, 0)"
                    : null,
            },
            exiting: {
                transform: "translate3d(0, -" + verticalOffset * 2 + "px, 0)",
            },
            exited: {},
        };
        return children({
            fade: tslib_es6["__assign"]({}, fadeBaseStyles, fadeTransitionStyles[adjustedStatus]),
            slide: tslib_es6["__assign"]({}, slideBaseStyles, slideTransitionStyles[adjustedStatus]),
        });
    }));
};
//# sourceMappingURL=Animation.js.map
// EXTERNAL MODULE: ./node_modules/raf-schd/esm/index.js
var esm = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/react-scrolllock/dist/index.js
var dist = __webpack_require__(453);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/@atlaskit/button/components/Button.js + 4 modules
var Button = __webpack_require__(829);

// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/styled/Content.js





// Constants
// ==============================
var innerGutter = 16;
var outerGutter = 20;
var keylineColor = Object(themed["a" /* default */])({ light: _atlaskit_theme["colors"].N30, dark: _atlaskit_theme["colors"].DN30 });
var keylineHeight = 2;
// Wrapper
// ==============================
var wrapperStyles = Object(core_browser_esm["b" /* css */])(Content_templateObject_1 || (Content_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  ", ";\n"])), flexMaxHeightIEFix);
var Header = styled_browser_esm.header(Content_templateObject_2 || (Content_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n  transition: box-shadow 200ms;\n  z-index: 1;\n  padding: ", "px ", "px ", "px;\n  box-shadow: ", ";\n"], ["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n  transition: box-shadow 200ms;\n  z-index: 1;\n  padding: ", "px ", "px ", "px;\n  box-shadow: ",
    ";\n"])), outerGutter, outerGutter, innerGutter - keylineHeight, function (props) {
    return props.showKeyline
        ? "0 " + keylineHeight + "px 0 0 " + keylineColor(props)
        : 'none';
});
var Title = styled_browser_esm.h4(Content_templateObject_3 || (Content_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  align-items: center;\n  display: flex;\n  font-size: 20px;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1;\n  margin: 0;\n  min-width: 0;\n"], ["\n  align-items: center;\n  display: flex;\n  font-size: 20px;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1;\n  margin: 0;\n  min-width: 0;\n"])));
var TitleText = styled_browser_esm.span(Content_templateObject_4 || (Content_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  flex: 1 1 auto;\n  min-width: 0;\n  word-wrap: break-word;\n  width: 100%;\n  ", ";\n"], ["\n  flex: 1 1 auto;\n  min-width: 0;\n  word-wrap: break-word;\n  width: 100%;\n  ",
    ";\n"])), function (props) {
    return !props.isHeadingMultiline &&
        "\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    ";
});
var iconColor = {
    danger: _atlaskit_theme["colors"].R400,
    warning: _atlaskit_theme["colors"].Y400,
};
var titleIconWrapperStyles = function (appearance) { return Object(core_browser_esm["b" /* css */])(templateObject_5 || (templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  margin-right: ", "px;\n  flex: 0 0 auto;\n"], ["\n  color: ", ";\n  margin-right: ", "px;\n  flex: 0 0 auto;\n"])), iconColor[appearance], Object(constants["l" /* gridSize */])()); };
// Body
// ==============================
/**
  Adding the padding here avoids cropping box shadow on first/last
  children. The combined vertical spacing is maintained by subtracting the
  keyline height from header and footer.
*/
var bodyStyles = function (shouldScroll) { return Object(core_browser_esm["b" /* css */])(templateObject_6 || (templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  flex: 1 1 auto;\n  ", "\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    overflow-y: auto;\n    height: 100%;\n  }\n"], ["\n  flex: 1 1 auto;\n  ",
    "\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    overflow-y: auto;\n    height: 100%;\n  }\n"])), shouldScroll
    ? "\n        overflow-y: auto;\n        overflow-x: hidden;\n        padding: " + keylineHeight + "px " + outerGutter + "px;\n      "
    : "\n        padding: 0 " + outerGutter + "px;\n      "); };
var Content_Body = styled_browser_esm.div(templateObject_7 || (templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  ", "\n"], ["\n  ", "\n"])), function (props) { return bodyStyles(props.shouldScroll); });
var Footer = styled_browser_esm.footer(templateObject_8 || (templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n  transition: box-shadow 200ms;\n  z-index: 1;\n  padding: ", "px ", "px ", "px;\n  box-shadow: ", ";\n"], ["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n  transition: box-shadow 200ms;\n  z-index: 1;\n  padding: ", "px ", "px ", "px;\n  box-shadow: ",
    ";\n"])), innerGutter - keylineHeight, outerGutter, outerGutter, function (props) {
    return props.showKeyline
        ? "0 -" + keylineHeight + "px 0 0 " + keylineColor(props)
        : 'none';
});
var Actions = styled_browser_esm.div(templateObject_9 || (templateObject_9 = tslib_es6["__makeTemplateObject"](["\n  display: inline-flex;\n  margin: 0 -", "px;\n"], ["\n  display: inline-flex;\n  margin: 0 -", "px;\n"])), _atlaskit_theme["math"].divide(constants["l" /* gridSize */], 2));
var ActionItem = styled_browser_esm.div(templateObject_10 || (templateObject_10 = tslib_es6["__makeTemplateObject"](["\n  flex: 1 0 auto;\n  margin: 0 ", "px;\n"], ["\n  flex: 1 0 auto;\n  margin: 0 ", "px;\n"])), _atlaskit_theme["math"].divide(constants["l" /* gridSize */], 2));
var Content_templateObject_1, Content_templateObject_2, Content_templateObject_3, Content_templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=Content.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/components/Footer.js




var JustifyShim = function (props) { return react_default.a.createElement("span", tslib_es6["__assign"]({}, props)); };
var Footer_ModalFooter = /** @class */ (function (_super) {
    tslib_es6["__extends"](ModalFooter, _super);
    function ModalFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFooter.prototype.render = function () {
        var _a = this.props, actions = _a.actions, appearance = _a.appearance, component = _a.component, onClose = _a.onClose, showKeyline = _a.showKeyline;
        var warning = 'You can provide `component` OR `actions`, not both.';
        if (!component && !actions)
            return null;
        if (component && actions) {
            console.warn(warning); // eslint-disable-line no-console
            return null;
        }
        if (component) {
            return react_default.a.createElement(component, {
                appearance: appearance,
                onClose: onClose,
                showKeyline: showKeyline,
            });
        }
        return (react_default.a.createElement(Footer, { showKeyline: showKeyline },
            react_default.a.createElement(JustifyShim, null),
            react_default.a.createElement(Actions, null, actions
                ? actions.map(function (_a, idx) {
                    var text = _a.text, rest = tslib_es6["__rest"](_a, ["text"]);
                    var variant = idx ? 'subtle' : appearance || 'primary';
                    return (react_default.a.createElement(ActionItem, { key: text || idx },
                        react_default.a.createElement(Button["a" /* default */], tslib_es6["__assign"]({ appearance: variant }, rest), text)));
                })
                : null)));
    };
    return ModalFooter;
}(react_default.a.Component));
/* harmony default export */ var components_Footer = (Footer_ModalFooter);
//# sourceMappingURL=Footer.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/error.js
var error = __webpack_require__(947);
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/warning.js
var glyph_warning = __webpack_require__(415);
var warning_default = /*#__PURE__*/__webpack_require__.n(glyph_warning);

// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/components/Header.js

/** @jsx jsx */





var TitleIcon = function (_a) {
    var appearance = _a.appearance;
    if (!appearance)
        return null;
    var Icon = appearance === 'danger' ? error_default.a : warning_default.a;
    return (Object(core_browser_esm["c" /* jsx */])("span", { css: titleIconWrapperStyles(appearance) },
        Object(core_browser_esm["c" /* jsx */])(Icon, { label: appearance + " icon" })));
};
var Header_ModalHeader = /** @class */ (function (_super) {
    tslib_es6["__extends"](ModalHeader, _super);
    function ModalHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalHeader.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, component = _a.component, heading = _a.heading, onClose = _a.onClose, showKeyline = _a.showKeyline, isHeadingMultiline = _a.isHeadingMultiline;
        var warning = 'You can provide `component` OR `heading`, not both.';
        if (!component && !heading)
            return null;
        if (component && heading) {
            console.warn(warning); // eslint-disable-line no-console
            return null;
        }
        if (component) {
            return react_default.a.createElement(component, {
                appearance: appearance,
                onClose: onClose,
                showKeyline: showKeyline,
                isHeadingMultiline: isHeadingMultiline,
            });
        }
        return (Object(core_browser_esm["c" /* jsx */])(Header, { showKeyline: showKeyline },
            Object(core_browser_esm["c" /* jsx */])(Title, null,
                Object(core_browser_esm["c" /* jsx */])(TitleIcon, { appearance: appearance }),
                Object(core_browser_esm["c" /* jsx */])(TitleText, { isHeadingMultiline: isHeadingMultiline }, heading))));
    };
    ModalHeader.defaultProps = {
        isHeadingMultiline: true,
    };
    return ModalHeader;
}(react_default.a.Component));
/* harmony default export */ var components_Header = (Header_ModalHeader);
//# sourceMappingURL=Header.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/components/Content.js

/** @jsx jsx */







function getInitialState() {
    return {
        showFooterKeyline: false,
        showHeaderKeyline: false,
        tabbableElements: [],
    };
}
var Content_Content = /** @class */ (function (_super) {
    tslib_es6["__extends"](Content, _super);
    function Content() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.escapeIsHeldDown = false;
        _this._isMounted = false;
        _this.scrollContainer = null;
        _this.state = getInitialState();
        _this.determineKeylines = Object(esm["a" /* default */])(function () {
            if (!_this.scrollContainer)
                return;
            var _a = _this.scrollContainer, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
            var scrollableDistance = scrollHeight - clientHeight;
            var showHeaderKeyline = scrollTop > keylineHeight;
            var showFooterKeyline = scrollTop <= scrollableDistance - keylineHeight;
            _this.setState({ showHeaderKeyline: showHeaderKeyline, showFooterKeyline: showFooterKeyline });
        });
        _this.getScrollContainer = function (ref) {
            if (!ref)
                return;
            _this.scrollContainer = ref;
        };
        _this.handleKeyUp = function () {
            _this.escapeIsHeldDown = false;
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, onClose = _a.onClose, shouldCloseOnEscapePress = _a.shouldCloseOnEscapePress, _b = _a.stackIndex, stackIndex = _b === void 0 ? 0 : _b;
            // avoid consumers accidently closing multiple modals if they hold escape.
            if (_this.escapeIsHeldDown)
                return;
            if (event.key === 'Escape')
                _this.escapeIsHeldDown = true;
            // only the foremost modal should be interactive.
            if (!_this._isMounted || stackIndex > 0)
                return;
            switch (event.key) {
                case 'Escape':
                    if (shouldCloseOnEscapePress)
                        onClose(event);
                    break;
                default:
            }
        };
        _this.handleStackChange = function (stackIndex) {
            var onStackChange = _this.props.onStackChange;
            if (onStackChange)
                onStackChange(stackIndex);
        };
        return _this;
    }
    Content.prototype.componentDidMount = function () {
        this._isMounted = true;
        document.addEventListener('keydown', this.handleKeyDown, false);
        document.addEventListener('keyup', this.handleKeyUp, false);
        if (this.scrollContainer) {
            var capturedScrollContainer = this.scrollContainer;
            window.addEventListener('resize', this.determineKeylines, false);
            capturedScrollContainer.addEventListener('scroll', this.determineKeylines, false);
            this.determineKeylines();
        }
        /* eslint-disable no-console */
        // Check for deprecated props
        if (this.props.header)
            console.warn("@atlaskit/modal-dialog: Deprecation warning - Use of the header prop in ModalDialog is deprecated. Please compose your ModalDialog using the 'components' prop instead");
        if (this.props.footer)
            console.warn("@atlaskit/modal-dialog: Deprecation warning - Use of the footer prop in ModalDialog is deprecated. Please compose your ModalDialog using the 'components' prop instead");
        if (this.props.body)
            console.warn("@atlaskit/modal-dialog: Deprecation warning - Use of the body prop in ModalDialog is deprecated. Please compose your ModalDialog using the 'components' prop instead");
        // Check that custom body components have used ForwardRef to attach to a DOM element
        if (this.props.components.Body) {
            if (!(this.scrollContainer instanceof HTMLElement)) {
                console.warn('@atlaskit/modal-dialog: Warning - Ref must attach to a DOM element; check you are using forwardRef and attaching the ref to an appropriate element. Check the examples for more details.');
            }
        }
        /* eslint-enable no-console */
    };
    Content.prototype.componentWillReceiveProps = function (nextProps) {
        var stackIndex = this.props.stackIndex;
        // update focus scope and let consumer know when stack index has changed
        if (nextProps.stackIndex && nextProps.stackIndex !== stackIndex) {
            this.handleStackChange(nextProps.stackIndex);
        }
    };
    Content.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        document.removeEventListener('keydown', this.handleKeyDown, false);
        document.removeEventListener('keyup', this.handleKeyUp, false);
        if (this.scrollContainer) {
            var capturedScrollContainer = this.scrollContainer;
            window.removeEventListener('resize', this.determineKeylines, false);
            capturedScrollContainer.removeEventListener('scroll', this.determineKeylines, false);
        }
    };
    Content.prototype.render = function () {
        var _a = this.props, actions = _a.actions, appearance = _a.appearance, DeprecatedBody = _a.body, children = _a.children, components = _a.components, footer = _a.footer, header = _a.header, heading = _a.heading, isChromeless = _a.isChromeless, isHeadingMultiline = _a.isHeadingMultiline, onClose = _a.onClose, shouldScroll = _a.shouldScroll;
        var _b = this.state, showFooterKeyline = _b.showFooterKeyline, showHeaderKeyline = _b.showHeaderKeyline;
        var _c = components.Container, Container = _c === void 0 ? 'div' : _c, CustomBody = components.Body;
        var Body = CustomBody || DeprecatedBody || Content_Body;
        return (Object(core_browser_esm["c" /* jsx */])(Container, { css: wrapperStyles },
            isChromeless ? (children) : (Object(core_browser_esm["c" /* jsx */])(react_default.a.Fragment, null,
                Object(core_browser_esm["c" /* jsx */])(components_Header, { appearance: appearance, component: components.Header ? components.Header : header, heading: heading, onClose: onClose, isHeadingMultiline: isHeadingMultiline, showKeyline: showHeaderKeyline }),
                Object(core_browser_esm["c" /* jsx */])(Body, tslib_es6["__assign"]({ css: bodyStyles(shouldScroll) }, (!Body.hasOwnProperty('styledComponentId')
                    ? { ref: this.getScrollContainer }
                    : { innerRef: this.getScrollContainer })), children),
                Object(core_browser_esm["c" /* jsx */])(components_Footer, { actions: actions, appearance: appearance, component: components.Footer ? components.Footer : footer, onClose: onClose, showKeyline: showFooterKeyline }))),
            Object(core_browser_esm["c" /* jsx */])(dist_default.a, null)));
    };
    Content.defaultProps = {
        autoFocus: false,
        components: {},
        isChromeless: false,
        stackIndex: 0,
        isHeadingMultiline: true,
    };
    return Content;
}(react_default.a.Component));
/* harmony default export */ var components_Content = (Content_Content);
//# sourceMappingURL=Content.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(414);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/utils/array.js
var toArray = function toArray(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};

var arrayFind = function arrayFind(array, search) {
  return array.filter(function (a) {
    return a === search;
  })[0];
};

var asArray = function asArray(a) {
  return Array.isArray(a) ? a : [a];
};
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/utils/tabOrder.js


var tabSort = function tabSort(a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;

  if (tabDiff) {
    if (!a.tabIndex) return 1;
    if (!b.tabIndex) return -1;
  }

  return tabDiff || indexDiff;
};

var tabOrder_orderByTabIndex = function orderByTabIndex(nodes, filterNegative, keepGuards) {
  return toArray(nodes).map(function (node, index) {
    return {
      node: node,
      index: index,
      tabIndex: keepGuards && node.tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : node.tabIndex
    };
  }).filter(function (data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/utils/tabbables.js
/* harmony default export */ var tabbables = (['button:enabled:not([readonly])', 'select:enabled:not([readonly])', 'textarea:enabled:not([readonly])', 'input:enabled:not([readonly])', 'a[href]', 'area[href]', 'iframe', 'object', 'embed', '[tabindex]', '[contenteditable]', '[autofocus]']);
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/constants.js
var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/utils/tabUtils.js




var queryTabbables = tabbables.join(',');
var queryGuardTabbables = queryTabbables + ', [data-focus-guard]';

var tabUtils_getFocusables = function getFocusables(parents, withGuards) {
  return parents.reduce(function (acc, parent) {
    return acc.concat(
    // add all tabbables inside
    toArray(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)),
    // add if node is tabble itself
    parent.parentNode ? toArray(parent.parentNode.querySelectorAll(tabbables.join(','))).filter(function (node) {
      return node === parent;
    }) : []);
  }, []);
};

var tabUtils_getParentAutofocusables = function getParentAutofocusables(parent) {
  var parentFocus = parent.querySelectorAll('[' + FOCUS_AUTO + ']');
  return toArray(parentFocus).map(function (node) {
    return tabUtils_getFocusables([node]);
  }).reduce(function (acc, nodes) {
    return acc.concat(nodes);
  }, []);
};
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/utils/DOMutils.js




var isElementHidden = function isElementHidden(computedStyle) {
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden';
};

var isVisible = function isVisible(node) {
  return !node || node === document || !isElementHidden(window.getComputedStyle(node, null)) && isVisible(node.parentNode);
};

var notHiddenInput = function notHiddenInput(node) {
  return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};

var getParents = function getParents(node) {
  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  parents.push(node);
  if (node.parentNode) {
    getParents(node.parentNode, parents);
  }
  return parents;
};

var getCommonParent = function getCommonParent(nodea, nodeb) {
  var parentsA = getParents(nodea);
  var parentsB = getParents(nodeb);

  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};

var DOMutils_filterFocusable = function filterFocusable(nodes) {
  return toArray(nodes).filter(function (node) {
    return isVisible(node);
  }).filter(function (node) {
    return notHiddenInput(node);
  });
};

var DOMutils_getTabbableNodes = function getTabbableNodes(topNodes, withGuards) {
  return tabOrder_orderByTabIndex(DOMutils_filterFocusable(tabUtils_getFocusables(topNodes, withGuards)), true, withGuards);
};

var DOMutils_getAllTabbableNodes = function getAllTabbableNodes(topNodes) {
  return tabOrder_orderByTabIndex(DOMutils_filterFocusable(tabUtils_getFocusables(topNodes)), false);
};

var DOMutils_parentAutofocusables = function parentAutofocusables(topNode) {
  return DOMutils_filterFocusable(tabUtils_getParentAutofocusables(topNode));
};
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/utils/firstFocus.js
var isRadio = function isRadio(node) {
  return node.tagName === 'INPUT' && node.type === 'radio';
};

var findSelectedRadio = function findSelectedRadio(node, nodes) {
  return nodes.filter(isRadio).filter(function (el) {
    return el.name === node.name;
  }).filter(function (el) {
    return el.checked;
  })[0] || node;
};

var pickFirstFocus = function pickFirstFocus(nodes) {
  if (nodes[0] && nodes.length > 1) {
    if (isRadio(nodes[0]) && nodes[0].name) {
      return findSelectedRadio(nodes[0], nodes);
    }
  }
  return nodes[0];
};

/* harmony default export */ var utils_firstFocus = (pickFirstFocus);
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/utils/all-affected.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var filterNested = function filterNested(nodes) {
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    var _loop = function _loop(j) {
      if (i !== j) {
        if (nodes[i].contains(nodes[j])) {
          return {
            v: filterNested(nodes.filter(function (x) {
              return x !== nodes[j];
            }))
          };
        }
      }
    };

    for (var j = 0; j < l; j += 1) {
      var _ret = _loop(j);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  }
  return nodes;
};

var getTopParent = function getTopParent(node) {
  return node.parentNode ? getTopParent(node.parentNode) : node;
};

var all_affected_getAllAffectedNodes = function getAllAffectedNodes(node) {
  var nodes = asArray(node);
  return nodes.filter(Boolean).reduce(function (acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll('[' + FOCUS_GROUP + '="' + group + '"]:not([' + FOCUS_DISABLED + '="disabled"])'))) : [currentNode]);
    return acc;
  }, []);
};

/* harmony default export */ var all_affected = (all_affected_getAllAffectedNodes);
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/focusMerge.js





var findAutoFocused = function findAutoFocused(autoFocusables) {
  return function (node) {
    return !!node.autofocus || node.dataset && !!node.dataset.autofocus || autoFocusables.indexOf(node) >= 0;
  };
};

var isGuard = function isGuard(node) {
  return node.dataset && node.dataset.focusGuard;
};
var notAGuard = function notAGuard(node) {
  return !isGuard(node);
};

var focusMerge_newFocus = function newFocus(innerNodes, outerNodes, activeElement, lastNode, autoFocused) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];

  // focus is inside
  if (innerNodes.indexOf(activeElement) >= 0) {
    return undefined;
  }

  var activeIndex = outerNodes.indexOf(activeElement);
  var lastIndex = outerNodes.indexOf(lastNode || activeIndex);
  var lastNodeInside = innerNodes.indexOf(lastNode);
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);

  // new focus
  if (activeIndex === -1 || lastNodeInside === -1) {
    return innerNodes.indexOf(autoFocused.length ? utils_firstFocus(autoFocused) : utils_firstFocus(innerNodes));
  }
  // old focus
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  // first element
  if (activeIndex <= firstNodeIndex && isGuard(activeElement) && Math.abs(indexDiff) > 1) {
    return 0;
  }
  // jump out
  if (indexDiff && Math.abs(indexDiff) > 1) {
    return lastNodeInside;
  }
  // focus above lock
  if (activeIndex <= firstNodeIndex) {
    return cnt - 1;
  }
  // focus below lock
  if (activeIndex > lastNodeIndex) {
    return 0;
  }
  // index is inside tab order, but outside Lock
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  // do nothing
  return undefined;
};

var focusMerge_getTopCommonParent = function getTopCommonParent(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = null;
  leftEntries.filter(Boolean).forEach(function (entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function (subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || common.contains(topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};

var focusMerge_allParentAutofocusables = function allParentAutofocusables(entries) {
  return entries.reduce(function (acc, node) {
    return acc.concat(DOMutils_parentAutofocusables(node));
  }, []);
};

var reorderNodes = function reorderNodes(srcNodes, dstNodes) {
  var remap = new Map();
  // no Set(dstNodes) for IE11 :(
  dstNodes.forEach(function (entity) {
    return remap.set(entity.node, entity);
  });
  // remap to dstNodes
  return srcNodes.map(function (node) {
    return remap.get(node);
  }).filter(Boolean);
};

var focusMerge_getFocusabledIn = function getFocusabledIn(topNode) {
  var entries = all_affected(topNode).filter(notAGuard);
  var commonParent = focusMerge_getTopCommonParent(topNode, topNode, entries);
  var outerNodes = DOMutils_getTabbableNodes([commonParent], true);
  var innerElements = DOMutils_getTabbableNodes(entries).filter(function (_ref) {
    var node = _ref.node;
    return notAGuard(node);
  }).map(function (_ref2) {
    var node = _ref2.node;
    return node;
  });

  return outerNodes.map(function (_ref3) {
    var node = _ref3.node,
        index = _ref3.index;
    return {
      node: node,
      index: index,
      lockItem: innerElements.indexOf(node) >= 0,
      guard: isGuard(node)
    };
  });
};

var focusMerge_getFocusMerge = function getFocusMerge(topNode, lastNode) {
  var activeElement = document && document.activeElement;
  var entries = all_affected(topNode).filter(notAGuard);

  var commonParent = focusMerge_getTopCommonParent(activeElement || topNode, topNode, entries);

  var innerElements = DOMutils_getTabbableNodes(entries).filter(function (_ref4) {
    var node = _ref4.node;
    return notAGuard(node);
  });

  if (!innerElements[0]) {
    innerElements = DOMutils_getAllTabbableNodes(entries).filter(function (_ref5) {
      var node = _ref5.node;
      return notAGuard(node);
    });
    if (!innerElements[0]) {
      return undefined;
    }
  }

  var outerNodes = DOMutils_getTabbableNodes([commonParent]).map(function (_ref6) {
    var node = _ref6.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function (_ref7) {
    var node = _ref7.node;
    return node;
  });

  var newId = focusMerge_newFocus(innerNodes, outerNodes, activeElement, lastNode, innerNodes.filter(findAutoFocused(focusMerge_allParentAutofocusables(entries))));

  if (newId === undefined) {
    return newId;
  }
  return orderedInnerElements[newId];
};

/* harmony default export */ var focusMerge = (focusMerge_getFocusMerge);
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/setFocus.js


var focusOn = function focusOn(target) {
  target.focus();
  if (target.contentWindow) {
    target.contentWindow.focus();
  }
};

var guardCount = 0;
var lockDisabled = false;

/* harmony default export */ var setFocus = (function (topNode, lastNode) {
  var focusable = focusMerge(topNode, lastNode);

  if (lockDisabled) {
    return;
  }

  if (focusable) {
    if (guardCount > 2) {
      // eslint-disable-next-line no-console
      console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' + 'See https://github.com/theKashey/focus-lock/#focus-fighting');
      lockDisabled = true;
      setTimeout(function () {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node);
    guardCount--;
  }
});
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/index.js










/* harmony default export */ var es2015 = (setFocus);
// CONCATENATED MODULE: ./node_modules/react-clientside-effect/lib/index.es.js




function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (false) {}

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (false) {}

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect =
    /*#__PURE__*/
    function (_PureComponent) {
      inheritsLoose_default()(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return react_default.a.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(react["PureComponent"]);

    defineProperty_default()(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

/* harmony default export */ var index_es = (withSideEffect);

// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/focusIsHidden.js



var focusIsHidden_focusIsHidden = function focusIsHidden() {
  return document && toArray(document.querySelectorAll('[' + FOCUS_ALLOW + ']')).some(function (node) {
    return node.contains(document.activeElement);
  });
};

/* harmony default export */ var es2015_focusIsHidden = (focusIsHidden_focusIsHidden);
// CONCATENATED MODULE: ./node_modules/focus-lock/dist/es2015/focusInside.js



var focusInFrame = function focusInFrame(frame) {
  return frame === document.activeElement;
};

var focusInside_focusInsideIframe = function focusInsideIframe(topNode) {
  return !!arrayFind(toArray(topNode.querySelectorAll('iframe')), focusInFrame);
};

var focusInside_focusInside = function focusInside(topNode) {
  var activeElement = document && document.activeElement;

  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return all_affected(topNode).reduce(function (result, node) {
    return result || node.contains(activeElement) || focusInside_focusInsideIframe(node);
  }, false);
};

/* harmony default export */ var es2015_focusInside = (focusInside_focusInside);
// CONCATENATED MODULE: ./node_modules/react-focus-lock/dist/es2015/util.js
function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var setImmediate = window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}
var inlineProp = function inlineProp(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};
// CONCATENATED MODULE: ./node_modules/react-focus-lock/dist/es2015/Trap.js






var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var Trap_isFreeFocus = function isFreeFocus() {
  return focusOnBody() || es2015_focusIsHidden();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var Trap_activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutsideWindow || !Trap_isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(es2015_focusInside(workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              activeElement.blur();
              document.body.focus();
            } else {
              result = es2015(workingArea, lastActiveFocus);
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = focusMerge_getFocusabledIn(workingArea);
        var focusedItem = allNodes.find(function (_ref) {
          var node = _ref.node;
          return node === newActiveElement;
        });

        if (focusedItem) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          var focusedIndex = allNodes.indexOf(focusedItem);
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (Trap_activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var Trap_onBlur = function onBlur() {
  return deferAction(Trap_activateTrap);
};
var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

var Trap_FocusTrap = function FocusTrap(_ref4) {
  var children = _ref4.children;
  return react_default.a.createElement("div", {
    onBlur: Trap_onBlur,
    onFocus: onFocus
  }, children);
};

Trap_FocusTrap.propTypes =  false ? undefined : {};

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = true;
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', Trap_onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', Trap_onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function Trap_reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  }).slice(-1)[0];
}

function Trap_handleStateChangeOnClient(trap) {
  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.onActivation === lastTrap.onActivation;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation();
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    Trap_activateTrap(true);
    deferAction(Trap_activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
}

/* harmony default export */ var Trap = (index_es(Trap_reducePropsToState, Trap_handleStateChangeOnClient)(FocusWatcher));
// CONCATENATED MODULE: ./node_modules/react-focus-lock/dist/es2015/FocusGuard.js


var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};

var FocusGuard_InFocusGuard = function InFocusGuard(_ref) {
  var children = _ref.children;
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && react_default.a.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};

FocusGuard_InFocusGuard.propTypes =  false ? undefined : {};
FocusGuard_InFocusGuard.defaultProps = {
  children: null
};
/* harmony default export */ var FocusGuard = (FocusGuard_InFocusGuard);
// CONCATENATED MODULE: ./node_modules/react-focus-lock/dist/es2015/Lock.js










var Lock_RenderChildren = function RenderChildren(_ref) {
  var children = _ref.children;
  return react_default.a.createElement("div", null, children);
};

Lock_RenderChildren.propTypes =  false ? undefined : {};
var Fragment = react_default.a.Fragment ? react_default.a.Fragment : Lock_RenderChildren;
var emptyArray = [];

var Lock_FocusLock =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(FocusLock, _Component);

  function FocusLock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      observed: undefined
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onActivation", function () {
      _this.originalFocusedElement = _this.originalFocusedElement || document && document.activeElement;

      if (_this.state.observed && _this.props.onActivation) {
        _this.props.onActivation(_this.state.observed);
      }

      _this.isActive = true;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onDeactivation", function () {
      _this.isActive = false;

      if (_this.props.returnFocus && _this.originalFocusedElement && _this.originalFocusedElement.focus) {
        _this.originalFocusedElement.focus();

        _this.originalFocusedElement = null;
      }

      if (_this.props.onDeactivation) {
        _this.props.onDeactivation(_this.state.observed);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onFocus", function (event) {
      if (_this.isActive) {
        onFocus(event);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onBlur", Trap_onBlur);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setObserveNode", function (observed) {
      if (_this.state.observed !== observed) {
        _this.setState({
          observed: observed
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "isActive", false);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "originalFocusedElement", null);

    return _this;
  }

  var _proto = FocusLock.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        children = _this$props.children,
        disabled = _this$props.disabled,
        noFocusGuards = _this$props.noFocusGuards,
        persistentFocus = _this$props.persistentFocus,
        autoFocus = _this$props.autoFocus,
        allowTextSelection = _this$props.allowTextSelection,
        group = _this$props.group,
        className = _this$props.className,
        whiteList = _this$props.whiteList,
        _this$props$shards = _this$props.shards,
        shards = _this$props$shards === void 0 ? emptyArray : _this$props$shards,
        _this$props$as = _this$props.as,
        Container = _this$props$as === void 0 ? 'div' : _this$props$as,
        _this$props$lockProps = _this$props.lockProps,
        containerProps = _this$props$lockProps === void 0 ? {} : _this$props$lockProps;
    var observed = this.state.observed;

    if (false) {}

    var lockProps = extends_default()((_extends2 = {}, _extends2[constants_namespaceObject.FOCUS_DISABLED] = disabled && 'disabled', _extends2[constants_namespaceObject.FOCUS_GROUP] = group, _extends2), containerProps);

    var hasLeadingGuards = noFocusGuards !== true;
    var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
    return react_default.a.createElement(Fragment, null, hasLeadingGuards && [react_default.a.createElement("div", {
      key: "guard-first",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 0,
      style: hiddenGuard
    }), // nearest focus guard
    react_default.a.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 1,
      style: hiddenGuard
    })], react_default.a.createElement(Container, extends_default()({
      ref: this.setObserveNode
    }, lockProps, {
      className: className,
      onBlur: this.onBlur,
      onFocus: this.onFocus
    }), react_default.a.createElement(Trap, {
      observed: observed,
      disabled: disabled,
      persistentFocus: persistentFocus,
      autoFocus: autoFocus,
      whiteList: whiteList,
      shards: shards,
      onActivation: this.onActivation,
      onDeactivation: this.onDeactivation
    }), children), hasTailingGuards && react_default.a.createElement("div", {
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 0,
      style: hiddenGuard
    }));
  };

  return FocusLock;
}(react["Component"]);

Lock_FocusLock.propTypes =  false ? undefined : {};
Lock_FocusLock.defaultProps = {
  disabled: false,
  returnFocus: false,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};
/* harmony default export */ var Lock = (Lock_FocusLock);
// CONCATENATED MODULE: ./node_modules/react-focus-lock/dist/es2015/index.js






/* harmony default export */ var dist_es2015 = (Lock);
// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/components/FocusLock.js




// Thin wrapper over react-focus-lock. This wrapper only exists to ensure API compatibility.
// This component should be deleted during https://ecosystem.atlassian.net/browse/AK-5658
var FocusLock_FocusLock = /** @class */ (function (_super) {
    tslib_es6["__extends"](FocusLock, _super);
    function FocusLock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FocusLock.prototype.componentDidMount = function () {
        var _a = this.props, isEnabled = _a.isEnabled, autoFocus = _a.autoFocus;
        if (false) {}
        if (typeof autoFocus === 'function' && isEnabled) {
            var elem = autoFocus();
            if (elem && elem.focus) {
                elem.focus();
            }
        }
    };
    FocusLock.prototype.render = function () {
        var _a = this.props, isEnabled = _a.isEnabled, autoFocus = _a.autoFocus, shouldReturnFocus = _a.shouldReturnFocus;
        return (react_default.a.createElement(dist_es2015, { disabled: !isEnabled, autoFocus: !!autoFocus, returnFocus: shouldReturnFocus }, this.props.children));
    };
    FocusLock.defaultProps = {
        autoFocus: true,
        isEnabled: true,
        shouldReturnFocus: true,
    };
    return FocusLock;
}(react_default.a.Component));
/* harmony default export */ var components_FocusLock = (FocusLock_FocusLock);
//# sourceMappingURL=FocusLock.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/components/Modal.js











function Positioner(_a) {
    var scrollBehavior = _a.scrollBehavior, props = tslib_es6["__rest"](_a, ["scrollBehavior"]);
    var PositionComponent = scrollBehavior === 'inside' ? PositionerAbsolute : PositionerRelative;
    return react_default.a.createElement(PositionComponent, tslib_es6["__assign"]({}, props));
}
function getScrollDistance() {
    return (window.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop) ||
        0);
}
var Modal_Modal = /** @class */ (function (_super) {
    tslib_es6["__extends"](Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dialogNode: null,
            scrollDistance: exenv["canUseDOM"] ? getScrollDistance() : 0,
            isExiting: false,
        };
        /* Prevent window from being scrolled programatically so that the modal is positioned correctly
         * and to prevent scrollIntoView from scrolling the window.
         */
        _this.handleWindowScroll = function () {
            if (getScrollDistance() !== _this.state.scrollDistance) {
                window.scrollTo(window.pageXOffset, _this.state.scrollDistance);
            }
        };
        _this.handleOverlayClick = function (e) {
            if (_this.props.shouldCloseOnOverlayClick) {
                _this.props.onClose(e);
            }
        };
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        var scrollDistance = getScrollDistance();
        if (getScrollDistance() !== this.state.scrollDistance) {
            // eslint-disable-next-line react/no-did-mount-set-state
            this.setState({ scrollDistance: scrollDistance });
        }
        window.addEventListener('scroll', this.handleWindowScroll);
    };
    Modal.prototype.componentWillUnmount = function () {
        window.removeEventListener('scroll', this.handleWindowScroll);
    };
    Modal.prototype.render = function () {
        var _this = this;
        var _a = this.props, actions = _a.actions, appearance = _a.appearance, autoFocus = _a.autoFocus, body = _a.body, children = _a.children, components = _a.components, footer = _a.footer, header = _a.header, height = _a.height, isChromeless = _a.isChromeless, isHeadingMultiline = _a.isHeadingMultiline, isOpen = _a.isOpen, onClose = _a.onClose, onCloseComplete = _a.onCloseComplete, onOpenComplete = _a.onOpenComplete, onStackChange = _a.onStackChange, shouldCloseOnEscapePress = _a.shouldCloseOnEscapePress, stackIndex = _a.stackIndex, heading = _a.heading, width = _a.width, scrollBehavior = _a.scrollBehavior;
        var scrollDistance = this.state.scrollDistance;
        var isBackground = stackIndex != null && stackIndex > 0;
        // If a custom width (number or percentage) is supplied, set inline style
        // otherwise allow styled component to consume as named prop
        var widthName = width
            ? WIDTH_ENUM.values.indexOf(width.toString()) !== -1
                ? width
                : undefined
            : undefined;
        var widthValue = widthName ? undefined : width;
        return (react_default.a.createElement(Animation, { in: isOpen, onExited: onCloseComplete, onEntered: onOpenComplete, stackIndex: stackIndex }, function (_a) {
            var fade = _a.fade, slide = _a.slide;
            return (react_default.a.createElement(FillScreen, { style: fade, "aria-hidden": isBackground, scrollDistance: scrollDistance },
                react_default.a.createElement(components_FocusLock, { isEnabled: stackIndex === 0 && isOpen, autoFocus: autoFocus },
                    react_default.a.createElement(blanket_Blanket, { isTinted: true, onBlanketClicked: _this.handleOverlayClick }),
                    react_default.a.createElement(Positioner, { style: slide, scrollBehavior: scrollBehavior, widthName: widthName, widthValue: widthValue },
                        react_default.a.createElement(Dialog, { heightValue: height, isChromeless: isChromeless, role: "dialog", tabIndex: -1 },
                            react_default.a.createElement(components_Content, { actions: actions, appearance: appearance, components: components, footer: footer, heading: heading, isHeadingMultiline: isHeadingMultiline, header: header, onClose: onClose, shouldScroll: scrollBehavior === 'inside', shouldCloseOnEscapePress: shouldCloseOnEscapePress, onStackChange: onStackChange, isChromeless: isChromeless, stackIndex: stackIndex, body: body }, children))))));
        }));
    };
    Modal.defaultProps = {
        autoFocus: true,
        scrollBehavior: 'inside',
        shouldCloseOnEscapePress: true,
        shouldCloseOnOverlayClick: true,
        isChromeless: false,
        isOpen: true,
        stackIndex: 0,
        width: 'medium',
        isHeadingMultiline: true,
        onClose: function () { },
    };
    return Modal;
}(react_default.a.Component));
var Modal_createAndFireEventOnAtlaskit = Object(createAndFireEvent["a" /* default */])('atlaskit');
var ModalDialogWithoutAnalytics = Modal_Modal;
/* harmony default export */ var components_Modal = (Object(withAnalyticsContext["a" /* default */])({
    componentName: 'modalDialog',
    packageName: modal_dialog_version["a" /* name */],
    packageVersion: modal_dialog_version["b" /* version */],
})(Object(withAnalyticsEvents["a" /* default */])({
    onClose: Modal_createAndFireEventOnAtlaskit({
        action: 'closed',
        actionSubject: 'modalDialog',
        attributes: {
            componentName: 'modalDialog',
            packageName: modal_dialog_version["a" /* name */],
            packageVersion: modal_dialog_version["b" /* version */],
        },
    }),
})(Modal_Modal)));
//# sourceMappingURL=Modal.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/modal-dialog/components/ModalWrapper.js







var ModalWrapper_ModalWrapper = /** @class */ (function (_super) {
    tslib_es6["__extends"](ModalWrapper, _super);
    function ModalWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onModalClosed = function (onExited) { return function (e) {
            if (onExited) {
                onExited();
            }
            if (_this.props.onCloseComplete) {
                _this.props.onCloseComplete(e);
            }
        }; };
        return _this;
    }
    ModalWrapper.prototype.render = function () {
        var _this = this;
        return (react_default.a.createElement(ModalTransition["a" /* ModalTransitionConsumer */], null, function (_a) {
            var isOpen = _a.isOpen, onExited = _a.onExited;
            return (react_default.a.createElement(Portal["a" /* default */], { zIndex: constants["m" /* layers */].modal() },
                react_default.a.createElement(components_StackConsumer, { isOpen: isOpen }, function (naturalStackIndex) { return (react_default.a.createElement(components_Modal, tslib_es6["__assign"]({}, _this.props, { isOpen: isOpen, stackIndex: _this.props.stackIndex || naturalStackIndex, onCloseComplete: _this.onModalClosed(onExited) }), _this.props.children)); })));
        }));
    };
    ModalWrapper.defaultProps = {
        autoFocus: true,
        scrollBehavior: 'inside',
        shouldCloseOnEscapePress: true,
        shouldCloseOnOverlayClick: true,
        isChromeless: false,
        width: 'medium',
        isHeadingMultiline: true,
        onClose: function () { },
    };
    return ModalWrapper;
}(react_default.a.Component));
/* harmony default export */ var components_ModalWrapper = __webpack_exports__["a"] = (ModalWrapper_ModalWrapper);
//# sourceMappingURL=ModalWrapper.js.map

/***/ }),

/***/ 947:
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

var ErrorIcon = function ErrorIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><path d=\"M13.416 4.417a2.002 2.002 0 0 0-2.832 0l-6.168 6.167a2.002 2.002 0 0 0 0 2.833l6.168 6.167a2.002 2.002 0 0 0 2.832 0l6.168-6.167a2.002 2.002 0 0 0 0-2.833l-6.168-6.167z\" fill=\"currentColor\"/><path d=\"M12 14a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m0 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2\" fill=\"inherit\"/></g></svg>"
  }, props));
};

ErrorIcon.displayName = 'ErrorIcon';
var _default = ErrorIcon;
exports.default = _default;

/***/ })

}]);