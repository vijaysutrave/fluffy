(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mediaFileCommencedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mediaFileLoadSucceededEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mediaFileLoadFailedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mediaPreviewFailedEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(936);


var mediaFileCommencedEvent = function (id) {
    return {
        eventType: 'operational',
        action: 'commenced',
        actionSubject: 'mediaFile',
        actionSubjectId: id,
        attributes: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ fileId: id }, _index__WEBPACK_IMPORTED_MODULE_1__[/* packageAttributes */ "c"]),
    };
};
var mediaFileLoadSucceededEvent = function (file) {
    return {
        eventType: 'operational',
        actionSubject: 'mediaFile',
        action: 'loadSucceeded',
        actionSubjectId: file.id,
        attributes: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ status: 'success' }, Object(_index__WEBPACK_IMPORTED_MODULE_1__[/* fileStateToFileGasPayload */ "b"])(file), _index__WEBPACK_IMPORTED_MODULE_1__[/* packageAttributes */ "c"]),
    };
};
var mediaFileLoadFailedEvent = function (id, failReason, file) {
    var fileAttributes = file
        ? Object(_index__WEBPACK_IMPORTED_MODULE_1__[/* fileStateToFileGasPayload */ "b"])(file)
        : {
            fileId: id,
        };
    return {
        eventType: 'operational',
        actionSubject: 'mediaFile',
        action: 'loadFailed',
        actionSubjectId: id,
        attributes: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ status: 'fail' }, fileAttributes, { failReason: failReason }, _index__WEBPACK_IMPORTED_MODULE_1__[/* packageAttributes */ "c"]),
    };
};
var mediaPreviewFailedEvent = function (failReason, id, file) {
    var fileAttributes = file
        ? Object(_index__WEBPACK_IMPORTED_MODULE_1__[/* fileStateToFileGasPayload */ "b"])(file)
        : {
            fileId: id,
        };
    return {
        eventType: 'operational',
        actionSubject: 'mediaFile',
        action: 'previewFailed',
        actionSubjectId: id,
        attributes: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ status: 'fail' }, fileAttributes, { failReason: failReason }, _index__WEBPACK_IMPORTED_MODULE_1__[/* packageAttributes */ "c"]),
    };
};
//# sourceMappingURL=item-viewer.js.map

/***/ }),

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomLevel; });
var BASE_ZOOM_LEVELS = [0.06, 0.12, 0.24, 0.48, 1, 1.5, 2, 4, 6, 8];
var sortNumbers = function (nums) { return nums.sort(function (a, b) { return a - b; }); }; // default sorting is alphabetically
var deduplicated = function (nums) {
    return sortNumbers(nums).filter(function (num, pos) { return pos === 0 || num !== nums[pos - 1]; });
};
var ZoomLevel = /** @class */ (function () {
    function ZoomLevel(initialValue, selectedValue) {
        this.initialValue = initialValue;
        if (!selectedValue) {
            selectedValue = initialValue;
        }
        if (selectedValue < this.min) {
            this.value = this.min;
        }
        else if (selectedValue > this.max) {
            this.value = this.max;
        }
        else {
            this.value = selectedValue;
        }
    }
    Object.defineProperty(ZoomLevel.prototype, "zoomLevels", {
        get: function () {
            var _this = this;
            return deduplicated(sortNumbers(BASE_ZOOM_LEVELS.map(function (zoomLevel) { return zoomLevel * _this.initialValue; }).concat(1))); // and that all levels are ordered
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomLevel.prototype, "min", {
        get: function () {
            return this.zoomLevels[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomLevel.prototype, "max", {
        get: function () {
            return this.zoomLevels.slice(-1)[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomLevel.prototype, "asPercentage", {
        get: function () {
            return Math.round(this.value * 100) + " %";
        },
        enumerable: true,
        configurable: true
    });
    ZoomLevel.prototype.zoomIn = function () {
        var index = this.zoomLevels.indexOf(this.value);
        var nextValue = this.zoomLevels[index + 1];
        return nextValue ? new ZoomLevel(this.initialValue, nextValue) : this;
    };
    ZoomLevel.prototype.zoomOut = function () {
        var index = this.zoomLevels.indexOf(this.value);
        var nextValue = this.zoomLevels[index - 1];
        return nextValue ? new ZoomLevel(this.initialValue, nextValue) : this;
    };
    ZoomLevel.prototype.fullyZoomIn = function () {
        return new ZoomLevel(this.initialValue, this.max);
    };
    ZoomLevel.prototype.fullyZoomOut = function () {
        return new ZoomLevel(this.initialValue, this.min);
    };
    Object.defineProperty(ZoomLevel.prototype, "canZoomIn", {
        get: function () {
            return this.value < this.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomLevel.prototype, "canZoomOut", {
        get: function () {
            return this.value > this.min;
        },
        enumerable: true,
        configurable: true
    });
    return ZoomLevel;
}());

//# sourceMappingURL=zoomLevel.js.map

/***/ }),

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/MediaButton.js
var MediaButton = __webpack_require__(1078);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/zoom-out.js
var zoom_out = __webpack_require__(1163);
var zoom_out_default = /*#__PURE__*/__webpack_require__.n(zoom_out);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/zoom-in.js
var zoom_in = __webpack_require__(1164);
var zoom_in_default = /*#__PURE__*/__webpack_require__.n(zoom_in);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/styled.js
var styled = __webpack_require__(937);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsEvents.js
var withAnalyticsEvents = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/analytics/index.js
var analytics = __webpack_require__(936);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/analytics/zoom.js


function createZoomEvent(zoomType, zoomScale) {
    return {
        eventType: 'ui',
        action: 'clicked',
        actionSubject: 'button',
        actionSubjectId: zoomType,
        attributes: tslib_es6["__assign"]({ zoomScale: zoomScale }, analytics["c" /* packageAttributes */]),
    };
}
//# sourceMappingURL=zoom.js.map
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/messages.js
var messages = __webpack_require__(938);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/zoomControls.js
/* unused harmony export ZoomControlsBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomControls; });












var zoomControls_ZoomControlsBase = /** @class */ (function (_super) {
    tslib_es6["__extends"](ZoomControlsBase, _super);
    function ZoomControlsBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zoomIn = function () {
            var _a = _this.props, onChange = _a.onChange, zoomLevel = _a.zoomLevel;
            if (zoomLevel.canZoomIn) {
                var zoom = zoomLevel.zoomIn();
                _this.fireAnalytics(createZoomEvent('zoomIn', zoom.value));
                onChange(zoom);
            }
        };
        _this.zoomOut = function () {
            var _a = _this.props, onChange = _a.onChange, zoomLevel = _a.zoomLevel;
            if (zoomLevel.canZoomOut) {
                var zoom = zoomLevel.zoomOut();
                _this.fireAnalytics(createZoomEvent('zoomOut', zoom.value));
                onChange(zoom);
            }
        };
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(analytics["a" /* channel */]);
            }
        };
        return _this;
    }
    ZoomControlsBase.prototype.render = function () {
        var _a = this.props, zoomLevel = _a.zoomLevel, formatMessage = _a.intl.formatMessage;
        return (react["createElement"](styled["I" /* ZoomWrapper */], { className: styled["K" /* hideControlsClassName */] },
            react["createElement"](styled["G" /* ZoomControlsWrapper */], null,
                react["createElement"](MediaButton["a" /* default */], { appearance: 'toolbar', isDisabled: !zoomLevel.canZoomOut, onClick: this.zoomOut, iconBefore: react["createElement"](zoom_out_default.a, { label: formatMessage(messages["a" /* messages */].zoom_out) }) }),
                react["createElement"](MediaButton["a" /* default */], { appearance: 'toolbar', isDisabled: !zoomLevel.canZoomIn, onClick: this.zoomIn, iconBefore: react["createElement"](zoom_in_default.a, { label: formatMessage(messages["a" /* messages */].zoom_in) }) })),
            react["createElement"](styled["H" /* ZoomLevelIndicator */], null, zoomLevel.asPercentage)));
    };
    return ZoomControlsBase;
}(react["Component"]));

var ZoomControls = Object(withAnalyticsEvents["a" /* default */])({})(Object(index_es["e" /* injectIntl */])(zoomControls_ZoomControlsBase));
//# sourceMappingURL=zoomControls.js.map

/***/ }),

/***/ 1162:
/***/ (function(module) {

module.exports = {"a":"@atlaskit/media-viewer","b":"43.1.3"};

/***/ }),

/***/ 1163:
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

var MediaServicesZoomOutIcon = function MediaServicesZoomOutIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM13.5 11.5h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

MediaServicesZoomOutIcon.displayName = 'MediaServicesZoomOutIcon';
var _default = MediaServicesZoomOutIcon;
exports.default = _default;

/***/ }),

/***/ 1164:
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

var MediaServicesZoomInIcon = function MediaServicesZoomInIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM13.5 11.5a1 1 0 0 0 0-2h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

MediaServicesZoomInIcon.displayName = 'MediaServicesZoomInIcon';
var _default = MediaServicesZoomInIcon;
exports.default = _default;

/***/ }),

/***/ 1165:
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

var ChevronLeftCircleIcon = function ChevronLeftCircleIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><circle fill=\"currentColor\" cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M13.706 9.698a.988.988 0 0 0 0-1.407 1.01 1.01 0 0 0-1.419 0l-2.965 2.94a1.09 1.09 0 0 0 0 1.548l2.955 2.93a1.01 1.01 0 0 0 1.42 0 .988.988 0 0 0 0-1.407l-2.318-2.297 2.327-2.307z\" fill=\"inherit\"/></g></svg>"
  }, props));
};

ChevronLeftCircleIcon.displayName = 'ChevronLeftCircleIcon';
var _default = ChevronLeftCircleIcon;
exports.default = _default;

/***/ }),

/***/ 1166:
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

var ChevronRightCircleIcon = function ChevronRightCircleIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><circle fill=\"currentColor\" cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M10.294 9.698a.988.988 0 0 1 0-1.407 1.01 1.01 0 0 1 1.419 0l2.965 2.94a1.09 1.09 0 0 1 0 1.548l-2.955 2.93a1.01 1.01 0 0 1-1.42 0 .988.988 0 0 1 0-1.407l2.318-2.297-2.327-2.307z\" fill=\"inherit\"/></g></svg>"
  }, props));
};

ChevronRightCircleIcon.displayName = 'ChevronRightCircleIcon';
var _default = ChevronRightCircleIcon;
exports.default = _default;

/***/ }),

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Outcome; });
var Outcome = /** @class */ (function () {
    function Outcome(state) {
        this.state = state;
    }
    Outcome.successful = function (data) {
        return new Outcome({ status: 'SUCCESSFUL', data: data });
    };
    Outcome.pending = function () {
        return new Outcome({ status: 'PENDING' });
    };
    Outcome.failed = function (err) {
        return new Outcome({ status: 'FAILED', err: err });
    };
    Object.defineProperty(Outcome.prototype, "status", {
        get: function () {
            return this.state.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Outcome.prototype, "data", {
        get: function () {
            if (this.state.status === 'SUCCESSFUL') {
                return this.state.data;
            }
            else {
                return;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Outcome.prototype, "err", {
        get: function () {
            if (this.state.status === 'FAILED') {
                return this.state.err;
            }
            else {
                return;
            }
        },
        enumerable: true,
        configurable: true
    });
    Outcome.prototype.whenSuccessful = function (successful) {
        if (this.state.status === 'SUCCESSFUL') {
            successful(this.state.data);
        }
    };
    Outcome.prototype.whenPending = function (pending) {
        if (this.state.status === 'PENDING') {
            pending();
        }
    };
    Outcome.prototype.whenFailed = function (failed) {
        if (this.state.status === 'FAILED') {
            failed(this.state.err);
        }
    };
    Outcome.prototype.match = function (_a) {
        var successful = _a.successful, pending = _a.pending, failed = _a.failed;
        switch (this.state.status) {
            case 'SUCCESSFUL':
                return successful(this.state.data);
            case 'PENDING':
                return pending();
            case 'FAILED':
                return failed(this.state.err);
        }
    };
    Outcome.prototype.mapSuccessful = function (map) {
        if (this.state.status === 'SUCCESSFUL') {
            return Outcome.successful(map(this.state.data));
        }
        else {
            return new Outcome(this.state);
        }
    };
    Outcome.prototype.mapFailed = function (map) {
        if (this.state.status === 'FAILED') {
            return Outcome.failed(map(this.state.err));
        }
        else {
            return new Outcome(this.state);
        }
    };
    return Outcome;
}());

//# sourceMappingURL=outcome.js.map

/***/ }),

/***/ 1196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/identifier.js
var media_client_identifier = __webpack_require__(832);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/shortcut.js
var shortcut = __webpack_require__(1001);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsEvents.js
var withAnalyticsEvents = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/analytics/index.js
var analytics = __webpack_require__(936);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/analytics/media-viewer.js


var mediaViewerModalEvent = function () {
    return {
        eventType: 'screen',
        name: 'mediaViewerModal',
        attributes: tslib_es6["__assign"]({}, analytics["c" /* packageAttributes */]),
    };
};
//# sourceMappingURL=media-viewer.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/analytics/closed.js



function closedEvent(input) {
    return {
        eventType: 'ui',
        action: 'closed',
        actionSubject: 'mediaViewer',
        actionSubjectId: undefined,
        attributes: tslib_es6["__assign"]({}, analytics["c" /* packageAttributes */], { sessionDurationMs: media_viewer_MediaViewerComponent.timerElapsed(), input: input }),
    };
}
//# sourceMappingURL=closed.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/messages.js
var messages = __webpack_require__(938);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/domain/outcome.js
var outcome = __webpack_require__(1191);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/models/file-state.js
var file_state = __webpack_require__(565);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/index.js + 5 modules
var imageMetaData = __webpack_require__(1174);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/error.js + 1 modules
var error = __webpack_require__(940);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/camera.js

var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.add = function (_a) {
        var thatX = _a.x, thatY = _a.y;
        var _b = this, thisX = _b.x, thisY = _b.y;
        return new Vector2(thisX + thatX, thisY + thatY);
    };
    Vector2.prototype.sub = function (_a) {
        var thatX = _a.x, thatY = _a.y;
        var _b = this, thisX = _b.x, thisY = _b.y;
        return new Vector2(thisX - thatX, thisY - thatY);
    };
    Vector2.prototype.scaled = function (scalar) {
        var _a = this, x = _a.x, y = _a.y;
        return new Vector2(x * scalar, y * scalar);
    };
    Vector2.prototype.map = function (fn) {
        return new Vector2(fn(this.x), fn(this.y));
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.rounded = function () {
        return new Vector2(Math.round(this.x), Math.round(this.y));
    };
    Vector2.prototype.toString = function () {
        return "[" + this.x + ", " + this.y + "]";
    };
    return Vector2;
}());

var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Rectangle.prototype, "aspectRatio", {
        get: function () {
            return this.width / this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "center", {
        get: function () {
            return new Vector2(this.width / 2, this.height / 2);
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.scaled = function (scale) {
        return new Rectangle(this.width * scale, this.height * scale);
    };
    Rectangle.prototype.resized = function (width, height) {
        return new Rectangle(width, height);
    };
    Rectangle.prototype.flipped = function () {
        return new Rectangle(this.height, this.width);
    };
    // Computes the scaling factor that needs to be applied to this
    // Rectangle so that it
    // - is fully visible inside of the containing Rectangle
    // - is the LARGEST possible size
    // - maintains the original aspect ratio (no distortion)
    Rectangle.prototype.scaleToFit = function (containing) {
        var widthRatio = containing.width / this.width;
        var heightRatio = containing.height / this.height;
        if (widthRatio <= heightRatio) {
            return widthRatio;
        }
        else {
            return heightRatio;
        }
    };
    Rectangle.prototype.scaleToFitLargestSide = function (containing) {
        return this.scaleToFit(containing);
    };
    // Computes the scaling factor that needs to be applied to this
    // Rectangle so that it
    // - is fully visible inside of the containing Rectangle
    // - is the SMALLEST possible size
    // - maintains the original aspect ratio (no distortion)
    Rectangle.prototype.scaleToFitSmallestSide = function (containing) {
        var widthRatio = containing.width / this.width;
        var heightRatio = containing.height / this.height;
        if (widthRatio >= heightRatio) {
            return widthRatio;
        }
        else {
            return heightRatio;
        }
    };
    Rectangle.prototype.clone = function () {
        return new Rectangle(this.width, this.height);
    };
    return Rectangle;
}());

var camera_Bounds = /** @class */ (function (_super) {
    tslib_es6["__extends"](Bounds, _super);
    function Bounds(x, y, width, height) {
        var _this = _super.call(this, width, height) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(Bounds.prototype, "origin", {
        get: function () {
            return new Vector2(this.x, this.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "corner", {
        get: function () {
            return new Vector2(this.x + this.width, this.y + this.height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "center", {
        get: function () {
            return new Vector2(this.x + this.width * 0.5, this.y + this.height * 0.5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "rect", {
        get: function () {
            return new Rectangle(this.width, this.height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "left", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "top", {
        get: function () {
            return this.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "right", {
        get: function () {
            return this.x + this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "bottom", {
        get: function () {
            return this.y + this.height;
        },
        enumerable: true,
        configurable: true
    });
    Bounds.prototype.flipped = function () {
        var rect = this.rect.flipped();
        return new Bounds(this.x, this.y, rect.width, rect.height);
    };
    Bounds.prototype.scaled = function (scale) {
        return new Bounds(this.x * scale, this.y * scale, this.width * scale, this.height * scale);
    };
    Bounds.prototype.relativeTo = function (bounds) {
        return new Bounds(this.x - bounds.x, this.y - bounds.y, this.width, this.height);
    };
    Bounds.prototype.clone = function () {
        return new Bounds(this.x, this.y, this.width, this.height);
    };
    Bounds.prototype.map = function (fn) {
        return new Bounds(fn(this.x), fn(this.y), fn(this.width), fn(this.height));
    };
    Bounds.prototype.hFlipWithin = function (containerBounds) {
        var hGap = containerBounds.right - this.right;
        return new Bounds(containerBounds.left + hGap, this.top, this.width, this.height);
    };
    Bounds.prototype.vFlipWithin = function (containerBounds) {
        var vGap = this.top - containerBounds.top;
        return new Bounds(this.left, containerBounds.bottom - vGap - this.height, this.width, this.height);
    };
    Bounds.prototype.rotate90DegWithin = function (containerBounds) {
        var hGap = containerBounds.right - this.right;
        var vGap = this.top - containerBounds.top;
        return new Bounds(containerBounds.left + vGap, containerBounds.top + hGap, this.height, this.width);
    };
    Bounds.prototype.translated = function (xDelta, yDelta) {
        return new Bounds(this.x + xDelta, this.y + yDelta, this.width, this.height);
    };
    Bounds.prototype.equals = function (bounds) {
        return (this.x === bounds.x &&
            this.y === bounds.y &&
            this.width === bounds.width &&
            this.height === bounds.height);
    };
    return Bounds;
}(Rectangle));

var Camera = /** @class */ (function () {
    function Camera(viewport, originalImg) {
        this.viewport = viewport;
        this.originalImg = originalImg;
    }
    Camera.prototype.resizedViewport = function (newViewport) {
        return new Camera(newViewport, this.originalImg);
    };
    Object.defineProperty(Camera.prototype, "scaleToFit", {
        get: function () {
            return this.originalImg.scaleToFitLargestSide(this.viewport);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "scaleDownToFit", {
        // If the image is smaller than or equal to the viewport, it won't be scaled.
        // If the image is larger than the viewport, it will be scaled down to fit.
        get: function () {
            return Math.min(1, this.scaleToFit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "fittedImg", {
        get: function () {
            return this.originalImg.scaled(this.scaleDownToFit);
        },
        enumerable: true,
        configurable: true
    });
    Camera.prototype.scaledImg = function (newScale) {
        return this.originalImg.scaled(newScale);
    };
    Camera.prototype.scaledOffset = function (prevOffset, prevScale, newScale) {
        var viewport = this.viewport;
        return prevOffset
            .add(viewport.center)
            .scaled(newScale / prevScale)
            .sub(viewport.center);
    };
    return Camera;
}());

//# sourceMappingURL=camera.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/imageOrientationUtil.js
var imageOrientationUtil = __webpack_require__(944);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/styled.js
var styled = __webpack_require__(937);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/domain/zoomLevel.js
var domain_zoomLevel = __webpack_require__(1020);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/utils/closeOnDirectClick.js
var closeOnDirectClick = __webpack_require__(983);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/zoomControls.js + 1 modules
var zoomControls = __webpack_require__(1026);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/viewers/image/interactive-img.js











function zoomLevelAfterResize(newCamera, oldCamera, oldZoomLevel) {
    var isImgScaledToFit = oldZoomLevel.value === oldCamera.scaleDownToFit;
    var zoomLevelToRefit = new domain_zoomLevel["a" /* ZoomLevel */](newCamera.scaleDownToFit);
    return isImgScaledToFit ? zoomLevelToRefit : oldZoomLevel;
}
var clientRectangle = function (el) {
    var clientWidth = el.clientWidth, clientHeight = el.clientHeight;
    return new Rectangle(clientWidth, clientHeight);
};
var naturalSizeRectangle = function (el) {
    var naturalWidth = el.naturalWidth, naturalHeight = el.naturalHeight;
    return new Rectangle(naturalWidth, naturalHeight);
};
var initialState = {
    zoomLevel: new domain_zoomLevel["a" /* ZoomLevel */](1),
    camera: outcome["a" /* Outcome */].pending(),
    isDragging: false,
    cursorPos: new Vector2(0, 0),
};
var interactive_img_InteractiveImgComponent = /** @class */ (function (_super) {
    tslib_es6["__extends"](InteractiveImgComponent, _super);
    function InteractiveImgComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.saveWrapperRef = function (ref) { return (_this.wrapper = ref); };
        _this.onImageClicked = function (e) {
            var _a = _this.props, onClose = _a.onClose, onBlanketClicked = _a.onBlanketClicked;
            if (e.target === e.currentTarget && onBlanketClicked) {
                onBlanketClicked();
            }
            Object(closeOnDirectClick["a" /* closeOnDirectClick */])(onClose)(e);
        };
        _this.onImgLoad = function (ev) {
            if (_this.wrapper) {
                var onLoad = _this.props.onLoad;
                var viewport = clientRectangle(_this.wrapper);
                var originalImg = naturalSizeRectangle(ev.currentTarget);
                var camera = new Camera(viewport, originalImg);
                _this.setState({
                    camera: outcome["a" /* Outcome */].successful(camera),
                    zoomLevel: new domain_zoomLevel["a" /* ZoomLevel */](camera.scaleDownToFit),
                });
                if (onLoad) {
                    onLoad();
                }
            }
        };
        _this.onResize = function () {
            _this.state.camera.whenSuccessful(function (oldCamera) {
                if (!_this.wrapper) {
                    return;
                }
                var oldZoomLevel = _this.state.zoomLevel;
                var newViewport = clientRectangle(_this.wrapper);
                var newCamera = oldCamera.resizedViewport(newViewport);
                var newZoomLevel = zoomLevelAfterResize(newCamera, oldCamera, oldZoomLevel);
                _this.setState({
                    camera: outcome["a" /* Outcome */].successful(newCamera),
                    zoomLevel: newZoomLevel,
                });
            });
        };
        _this.onZoomChange = function (nextZoomLevel) {
            _this.state.camera.whenSuccessful(function (camera) {
                var wrapper = _this.wrapper;
                if (!wrapper) {
                    return;
                }
                var scrollLeft = wrapper.scrollLeft, scrollTop = wrapper.scrollTop;
                var prevOffset = new Vector2(scrollLeft, scrollTop);
                var prevZoomLevel = _this.state.zoomLevel;
                _this.setState({ zoomLevel: nextZoomLevel }, function () {
                    var _a = camera.scaledOffset(prevOffset, prevZoomLevel.value, nextZoomLevel.value), x = _a.x, y = _a.y;
                    wrapper.scrollLeft = x;
                    wrapper.scrollTop = y;
                });
            });
        };
        _this.startDragging = function (ev) {
            ev.preventDefault();
            _this.setState({
                isDragging: true,
                cursorPos: new Vector2(ev.screenX, ev.screenY),
            });
        };
        _this.stopDragging = function (ev) {
            ev.preventDefault();
            _this.setState({ isDragging: false });
        };
        _this.panImage = function (ev) {
            if (_this.state.isDragging && _this.wrapper) {
                var cursorPos = new Vector2(ev.screenX, ev.screenY);
                var delta = _this.state.cursorPos.sub(cursorPos);
                _this.setState({ cursorPos: cursorPos });
                _this.wrapper.scrollLeft += delta.x;
                _this.wrapper.scrollTop += delta.y;
            }
        };
        return _this;
    }
    InteractiveImgComponent.prototype.componentDidMount = function () {
        this.state = initialState;
        window.addEventListener('resize', this.onResize);
        document.addEventListener('mousemove', this.panImage);
        document.addEventListener('mouseup', this.stopDragging);
    };
    InteractiveImgComponent.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onResize);
        document.removeEventListener('mousemove', this.panImage);
        document.removeEventListener('mouseup', this.stopDragging);
    };
    InteractiveImgComponent.prototype.render = function () {
        var _a = this.props, src = _a.src, orientation = _a.orientation, onError = _a.onError;
        var _b = this.state, zoomLevel = _b.zoomLevel, camera = _b.camera, isDragging = _b.isDragging;
        var canDrag = camera.match({
            successful: function (camera) { return zoomLevel.value > camera.scaleToFit; },
            pending: function () { return false; },
            failed: function () { return false; },
        });
        // We use style attr instead of SC prop for perf reasons
        var imgStyle = camera.match({
            successful: function (camera) { return camera.scaledImg(zoomLevel.value); },
            pending: function () { return ({}); },
            failed: function () { return ({}); },
        });
        if (orientation) {
            var transform = Object(imageOrientationUtil["a" /* getCssFromImageOrientation */])(orientation);
            imgStyle.transform = transform;
        }
        return (react["createElement"](styled["s" /* ImageWrapper */], { onClick: this.onImageClicked, innerRef: this.saveWrapperRef },
            react["createElement"](styled["t" /* Img */], { canDrag: canDrag, isDragging: isDragging, src: src, style: imgStyle, onLoad: this.onImgLoad, onError: onError, onMouseDown: this.startDragging, shouldPixelate: zoomLevel.value > 1 }),
            react["createElement"](styled["f" /* BaselineExtend */], null),
            react["createElement"](zoomControls["a" /* ZoomControls */], { zoomLevel: zoomLevel, onChange: this.onZoomChange })));
    };
    return InteractiveImgComponent;
}(react["Component"]));

var InteractiveImg = Object(withAnalyticsEvents["a" /* default */])({
    onBlanketClicked: function (createAnalyticsEvent) {
        var event = createAnalyticsEvent(closedEvent('blanket'));
        event.fire(analytics["a" /* channel */]);
    },
})(interactive_img_InteractiveImgComponent);
//# sourceMappingURL=interactive-img.js.map
// EXTERNAL MODULE: ./node_modules/deep-equal/index.js
var deep_equal = __webpack_require__(406);
var deep_equal_default = /*#__PURE__*/__webpack_require__.n(deep_equal);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/loading.js
var loading = __webpack_require__(956);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/MediaButton.js
var MediaButton = __webpack_require__(1078);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/analytics/download.js


var getBasePayload = function (actionSubjectId) { return ({
    eventType: 'ui',
    action: 'clicked',
    actionSubject: 'button',
    actionSubjectId: actionSubjectId,
}); };
var getBaseAttributes = function (fileState) { return (tslib_es6["__assign"]({}, Object(analytics["b" /* fileStateToFileGasPayload */])(fileState), { fileProcessingStatus: fileState.status }, analytics["c" /* packageAttributes */])); };
var download_downloadEvent = function (fileState, actionSubjectId, failReason) {
    var basePayload = getBasePayload(actionSubjectId);
    var baseAttributes = failReason
        ? tslib_es6["__assign"]({}, getBaseAttributes(fileState), { failReason: failReason }) : getBaseAttributes(fileState);
    switch (fileState.status) {
        case 'processed':
        case 'uploading':
        case 'processing':
        case 'failed-processing':
            return tslib_es6["__assign"]({}, basePayload, { attributes: tslib_es6["__assign"]({}, baseAttributes, { fileSupported: fileState.mediaType !== 'unknown' }) });
        case 'error':
            return tslib_es6["__assign"]({}, basePayload, { attributes: tslib_es6["__assign"]({}, baseAttributes) });
    }
};
function downloadErrorButtonEvent(state, err) {
    return download_downloadEvent(state, 'failedPreviewDownloadButton', err.errorName);
}
function downloadButtonEvent(state) {
    return download_downloadEvent(state, 'downloadButton');
}
//# sourceMappingURL=download.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/download.js
var download = __webpack_require__(976);
var download_default = /*#__PURE__*/__webpack_require__.n(download);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/download.js











var downloadIcon = react["createElement"](download_default.a, { label: "Download" });
// TODO: MS-1556
var DownloadButton = Object(withAnalyticsEvents["a" /* default */])({
    onClick: function (createEvent, props) {
        var ev = createEvent(props.analyticsPayload);
        ev.fire(analytics["a" /* channel */]);
    },
})(MediaButton["a" /* default */]);
var createItemDownloader = function (file, mediaClient, collectionName) { return function () {
    var id = file.id;
    var name = !Object(file_state["a" /* isErrorFileState */])(file) ? file.name : undefined;
    return mediaClient.file.downloadBinary(id, name, collectionName);
}; };
var ErrorViewDownloadButton = function (props) {
    var downloadEvent = downloadErrorButtonEvent(props.state, props.err);
    return (react["createElement"](styled["m" /* DownloadButtonWrapper */], null,
        react["createElement"](DownloadButton, { analyticsPayload: downloadEvent, appearance: "primary", onClick: createItemDownloader(props.state, props.mediaClient, props.collectionName) },
            react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].download)))));
};
var ToolbarDownloadButton = function (props) {
    var state = props.state, mediaClient = props.mediaClient, identifier = props.identifier;
    var downloadEvent = downloadButtonEvent(state);
    // TODO [MS-1731]: make it work for external files as well
    if (Object(media_client_identifier["b" /* isExternalImageIdentifier */])(identifier)) {
        return null;
    }
    return (react["createElement"](DownloadButton, { analyticsPayload: downloadEvent, appearance: 'toolbar', onClick: createItemDownloader(state, mediaClient, identifier.collectionName), iconBefore: downloadIcon }));
};
var DisabledToolbarDownloadButton = (react["createElement"](MediaButton["a" /* default */], { appearance: 'toolbar', isDisabled: true, iconBefore: downloadIcon }));
//# sourceMappingURL=download.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/viewers/base-viewer.js








var base_viewer_BaseViewer = /** @class */ (function (_super) {
    tslib_es6["__extends"](BaseViewer, _super);
    function BaseViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = _this.getInitialState();
        return _this;
    }
    BaseViewer.prototype.componentDidMount = function () {
        this.init();
    };
    BaseViewer.prototype.componentWillUnmount = function () {
        this.release();
    };
    // NOTE: We've moved parts of the logic to reset a component into this method
    // to optimise the performance. Resetting the state before the `componentDidUpdate`
    // lifecycle event allows us avoid one additional render cycle.
    // However, this lifecycle method might eventually be deprecated, so be careful
    // when working with it.
    BaseViewer.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.needsReset(nextProps, this.props)) {
            this.release();
            this.setState(this.initialState);
        }
    };
    BaseViewer.prototype.componentDidUpdate = function (prevProps) {
        if (this.needsReset(prevProps, this.props)) {
            this.init();
        }
    };
    BaseViewer.prototype.render = function () {
        var _this = this;
        return this.state.content.match({
            pending: function () { return react["createElement"](loading["a" /* Spinner */], null); },
            successful: function (content) { return _this.renderSuccessful(content); },
            failed: function (err) { return (react["createElement"](error["b" /* default */], { error: err },
                react["createElement"]("p", null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].try_downloading_file))),
                _this.renderDownloadButton(err))); },
        });
    };
    // Accessing abstract getters in a constructor is not allowed
    BaseViewer.prototype.getInitialState = function () {
        return this.initialState;
    };
    BaseViewer.prototype.renderDownloadButton = function (err) {
        var _a = this.props, item = _a.item, mediaClient = _a.mediaClient, collectionName = _a.collectionName;
        return (react["createElement"](ErrorViewDownloadButton, { state: item, mediaClient: mediaClient, err: err, collectionName: collectionName }));
    };
    BaseViewer.prototype.needsReset = function (propsA, propsB) {
        return (!deep_equal_default()(propsA.item, propsB.item) ||
            propsA.mediaClient !== propsB.mediaClient ||
            propsA.collectionName !== propsB.collectionName);
    };
    return BaseViewer;
}(react["Component"]));

//# sourceMappingURL=base-viewer.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/viewers/image/index.js








var REQUEST_CANCELLED = 'request_cancelled';
function processedFileStateToMediaItem(file) {
    return {
        type: 'file',
        details: {
            id: file.id,
        },
    };
}
var image_ImageViewer = /** @class */ (function (_super) {
    tslib_es6["__extends"](ImageViewer, _super);
    function ImageViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onLoad = function () {
            _this.props.onLoad({ status: 'success' });
        };
        _this.onError = function () {
            _this.props.onLoad({
                status: 'error',
                errorMessage: 'Interactive-img render failed',
            });
        };
        return _this;
    }
    Object.defineProperty(ImageViewer.prototype, "initialState", {
        get: function () {
            return { content: outcome["a" /* Outcome */].pending() };
        },
        enumerable: true,
        configurable: true
    });
    // This method is spied on by some test cases, so don't rename or remove it.
    ImageViewer.prototype.preventRaceCondition = function () {
        // Calling setState might introduce a race condition, because the app has
        // already transitioned to a different state. To avoid this we're not doing
        // anything.
    };
    ImageViewer.prototype.init = function () {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var _a, file, mediaClient, collectionName, orientation_1, objectUrl, item, controller_1, response, _b, _c, preview, value, err_1;
            return tslib_es6["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.props, file = _a.item, mediaClient = _a.mediaClient, collectionName = _a.collectionName;
                        if (file.status === 'error') {
                            return [2 /*return*/];
                        }
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 10, , 11]);
                        orientation_1 = 1;
                        objectUrl = void 0;
                        if (!Object(file_state["b" /* isImageRepresentationReady */])(file)) return [3 /*break*/, 3];
                        item = processedFileStateToMediaItem(file);
                        controller_1 = typeof AbortController !== 'undefined'
                            ? new AbortController()
                            : undefined;
                        response = mediaClient.getImage(item.details.id, {
                            width: 1920,
                            height: 1080,
                            mode: 'fit',
                            allowAnimated: true,
                            collection: collectionName,
                        }, controller_1);
                        this.cancelImageFetch = function () { return controller_1 && controller_1.abort(); };
                        _c = (_b = URL).createObjectURL;
                        return [4 /*yield*/, response];
                    case 2:
                        objectUrl = _c.apply(_b, [_d.sent()]);
                        return [3 /*break*/, 9];
                    case 3:
                        preview = file.preview;
                        if (!preview) return [3 /*break*/, 8];
                        return [4 /*yield*/, preview];
                    case 4:
                        value = (_d.sent()).value;
                        if (!(value instanceof Blob)) return [3 /*break*/, 6];
                        return [4 /*yield*/, Object(imageMetaData["b" /* getOrientation */])(value)];
                    case 5:
                        orientation_1 = _d.sent();
                        objectUrl = URL.createObjectURL(value);
                        return [3 /*break*/, 7];
                    case 6:
                        objectUrl = value;
                        _d.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.setState({
                            content: outcome["a" /* Outcome */].pending(),
                        });
                        return [2 /*return*/];
                    case 9:
                        this.setState({
                            content: outcome["a" /* Outcome */].successful({ objectUrl: objectUrl, orientation: orientation_1 }),
                        });
                        return [3 /*break*/, 11];
                    case 10:
                        err_1 = _d.sent();
                        if (err_1.message === REQUEST_CANCELLED) {
                            this.preventRaceCondition();
                        }
                        else {
                            this.setState({
                                content: outcome["a" /* Outcome */].failed(Object(error["a" /* createError */])('previewFailed', err_1, file)),
                            });
                            this.props.onLoad({ status: 'error', errorMessage: err_1.message });
                        }
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ImageViewer.prototype.release = function () {
        var _this = this;
        if (this.cancelImageFetch) {
            this.cancelImageFetch();
        }
        this.state.content.whenSuccessful(function (_a) {
            var objectUrl = _a.objectUrl;
            _this.revokeObjectUrl(objectUrl);
        });
    };
    // This method is spied on by some test cases, so don't rename or remove it.
    ImageViewer.prototype.revokeObjectUrl = function (objectUrl) {
        URL.revokeObjectURL(objectUrl);
    };
    ImageViewer.prototype.renderSuccessful = function (content) {
        var onClose = this.props.onClose;
        return (react["createElement"](InteractiveImg, { onLoad: this.onLoad, onError: this.onError, src: content.objectUrl, orientation: content.orientation, onClose: onClose }));
    };
    return ImageViewer;
}(base_viewer_BaseViewer));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/models/artifacts.js
var artifacts = __webpack_require__(579);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/customMediaPlayer/index.js + 9 modules
var customMediaPlayer = __webpack_require__(1200);

// EXTERNAL MODULE: ./node_modules/query-string/index.js
var query_string = __webpack_require__(373);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-core/index.js + 3 modules
var media_core = __webpack_require__(135);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/utils/index.js




// We want to remove constructAuthTokenUrl and use mediaStore instead
// https://product-fabric.atlassian.net/browse/MSW-869
function constructAuthTokenUrl(url, mediaClient, collectionName) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var auth;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mediaClient.config.authProvider({ collectionName: collectionName })];
                case 1:
                    auth = _a.sent();
                    if (Object(media_core["isClientBasedAuth"])(auth)) {
                        return [2 /*return*/, buildClientBasedUrl(auth.baseUrl, url, auth.token, auth.clientId, collectionName)];
                    }
                    else {
                        return [2 /*return*/, buildIssuerBasedUrl(auth.baseUrl, url, auth.token, auth.asapIssuer, collectionName)];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function buildClientBasedUrl(host, url, token, client, collection) {
    return buildUrl(host, url, { client: client, collection: collection, token: token });
}
function buildIssuerBasedUrl(host, url, token, issuer, collection) {
    return buildUrl(host, url, { issuer: issuer, collection: collection, token: token });
}
function buildUrl(host, url, query) {
    var separator = url.indexOf('?') > -1 ? '&' : '?';
    return "" + host + url + separator + Object(query_string["stringify"])(query);
}
var toIdentifier = function (item, collectionName) {
    return {
        id: item.id,
        mediaItemType: 'file',
        occurrenceKey: item.occurrenceKey,
        collectionName: collectionName,
    };
};
// TODO MS-1752 - current implementation makes viewer navigation to misbehave
// if passed a file with the same id (with different occurrenceKeys) or with the same dataURI twice
var getSelectedIndex = function (items, selectedItem) {
    return items.findIndex(function (item) {
        if (Object(media_client_identifier["c" /* isFileIdentifier */])(item) && Object(media_client_identifier["c" /* isFileIdentifier */])(selectedItem)) {
            return item.id === selectedItem.id;
        }
        if (!Object(media_client_identifier["c" /* isFileIdentifier */])(item) && !Object(media_client_identifier["c" /* isFileIdentifier */])(selectedItem)) {
            return item.dataURI === selectedItem.dataURI;
        }
        return false;
    });
};
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/utils/isIE.js
var isIE = function (navigator) {
    if (navigator === void 0) { navigator = window.navigator; }
    return (navigator.userAgent.indexOf('MSIE') !== -1 ||
        navigator.appVersion.indexOf('Trident/') > 0);
};
//# sourceMappingURL=isIE.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/utils/getObjectUrlFromFileState.js
var getObjectUrlFromFileState_this = undefined;

var getObjectUrlFromFileState = function (state) { return tslib_es6["__awaiter"](getObjectUrlFromFileState_this, void 0, void 0, function () {
    var preview, _a, _b;
    return tslib_es6["__generator"](this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!(state.status !== 'error')) return [3 /*break*/, 2];
                preview = state.preview;
                if (!preview) return [3 /*break*/, 2];
                _b = (_a = URL).createObjectURL;
                return [4 /*yield*/, preview];
            case 1: return [2 /*return*/, _b.apply(_a, [(_c.sent()).value])];
            case 2: return [2 /*return*/, undefined];
        }
    });
}); };
//# sourceMappingURL=getObjectUrlFromFileState.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/viewers/video.js











var sdArtifact = 'video_640.mp4';
var hdArtifact = 'video_1280.mp4';
var localStorageKeyName = 'mv_video_player_quality';
var video_VideoViewer = /** @class */ (function (_super) {
    tslib_es6["__extends"](VideoViewer, _super);
    function VideoViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onHDChange = function () {
            var isHDActive = !_this.state.isHDActive;
            var preferredQuality = isHDActive ? 'hd' : 'sd';
            localStorage.setItem(localStorageKeyName, preferredQuality);
            _this.setState({ isHDActive: isHDActive });
            _this.init(isHDActive);
        };
        return _this;
    }
    Object.defineProperty(VideoViewer.prototype, "initialState", {
        get: function () {
            var item = this.props.item;
            var preferredQuality = localStorage.getItem(localStorageKeyName);
            return {
                content: outcome["a" /* Outcome */].pending(),
                isHDActive: isHDAvailable(item) && preferredQuality !== 'sd',
            };
        },
        enumerable: true,
        configurable: true
    });
    VideoViewer.prototype.renderSuccessful = function (content) {
        var isHDActive = this.state.isHDActive;
        var _a = this.props, item = _a.item, showControls = _a.showControls, previewCount = _a.previewCount, onCanPlay = _a.onCanPlay, onError = _a.onError;
        var useCustomVideoPlayer = !isIE();
        var isAutoPlay = previewCount === 0;
        return useCustomVideoPlayer ? (react["createElement"](styled["k" /* CustomVideoPlayerWrapper */], null,
            react["createElement"](customMediaPlayer["a" /* default */], { type: "video", isAutoPlay: isAutoPlay, onHDToggleClick: this.onHDChange, showControls: showControls, src: content, isHDActive: isHDActive, isHDAvailable: isHDAvailable(item), isShortcutEnabled: true, onCanPlay: onCanPlay, onError: onError }))) : (react["createElement"](styled["F" /* Video */], { autoPlay: isAutoPlay, controls: true, src: content }));
    };
    VideoViewer.prototype.init = function (isHDActive) {
        if (isHDActive === void 0) { isHDActive = this.state.isHDActive; }
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var _a, mediaClient, item, collectionName, contentUrl, preferHd, artifactUrl, err_1;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, item = _a.item, collectionName = _a.collectionName;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        contentUrl = void 0;
                        if (!(item.status === 'processed')) return [3 /*break*/, 3];
                        preferHd = isHDActive && isHDAvailable(item);
                        artifactUrl = getVideoArtifactUrl(item, preferHd);
                        if (!artifactUrl) {
                            throw new Error("No video artifacts found");
                        }
                        return [4 /*yield*/, constructAuthTokenUrl(artifactUrl, mediaClient, collectionName)];
                    case 2:
                        contentUrl = _b.sent();
                        if (!contentUrl) {
                            throw new Error("No video artifacts found");
                        }
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, getObjectUrlFromFileState(item)];
                    case 4:
                        contentUrl = _b.sent();
                        if (!contentUrl) {
                            this.setState({
                                content: outcome["a" /* Outcome */].pending(),
                            });
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5:
                        this.setState({
                            content: outcome["a" /* Outcome */].successful(contentUrl),
                        });
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _b.sent();
                        this.setState({
                            content: outcome["a" /* Outcome */].failed(Object(error["a" /* createError */])('previewFailed', err_1, item)),
                        });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    VideoViewer.prototype.release = function () { };
    return VideoViewer;
}(base_viewer_BaseViewer));

function isHDAvailable(file) {
    if (file.status !== 'processed') {
        return false;
    }
    return !!Object(artifacts["a" /* getArtifactUrl */])(file.artifacts, hdArtifact);
}
function getVideoArtifactUrl(file, preferHd) {
    var artifactName = preferHd ? hdArtifact : sdArtifact;
    return Object(artifacts["a" /* getArtifactUrl */])(file.artifacts, artifactName);
}
//# sourceMappingURL=video.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/viewers/doc/index.js









var moduleLoader = function () {
    return Promise.all(/* import() | @atlaskit-internal_media-viewer-pdf-viewer */[__webpack_require__.e(30), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, 1192));
};
var componentLoader = function () {
    return moduleLoader().then(function (module) { return module.PDFRenderer; });
};
var doc_DocViewer = /** @class */ (function (_super) {
    tslib_es6["__extends"](DocViewer, _super);
    function DocViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DocViewer.prototype, "initialState", {
        get: function () {
            return {
                content: outcome["a" /* Outcome */].pending(),
            };
        },
        enumerable: true,
        configurable: true
    });
    DocViewer.prototype.init = function () {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var _a, item, mediaClient, collectionName, pdfArtifactUrl, src, err_1, src;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!DocViewer.PDFComponent) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadDocViewer()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _a = this.props, item = _a.item, mediaClient = _a.mediaClient, collectionName = _a.collectionName;
                        if (!(item.status === 'processed')) return [3 /*break*/, 7];
                        pdfArtifactUrl = Object(artifacts["a" /* getArtifactUrl */])(item.artifacts, 'document.pdf');
                        if (!pdfArtifactUrl) {
                            this.setState({
                                content: outcome["a" /* Outcome */].failed(Object(error["a" /* createError */])('noPDFArtifactsFound', undefined, item)),
                            });
                            return [2 /*return*/];
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, constructAuthTokenUrl(pdfArtifactUrl, mediaClient, collectionName)];
                    case 4:
                        src = _b.sent();
                        this.setState({
                            content: outcome["a" /* Outcome */].successful(src),
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _b.sent();
                        this.setState({
                            content: outcome["a" /* Outcome */].failed(Object(error["a" /* createError */])('previewFailed', err_1, item)),
                        });
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, getObjectUrlFromFileState(item)];
                    case 8:
                        src = _b.sent();
                        if (!src) {
                            this.setState({
                                content: outcome["a" /* Outcome */].pending(),
                            });
                            return [2 /*return*/];
                        }
                        this.setState({
                            content: outcome["a" /* Outcome */].successful(src),
                        });
                        _b.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    DocViewer.prototype.loadDocViewer = function () {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = DocViewer;
                        return [4 /*yield*/, componentLoader()];
                    case 1:
                        _a.PDFComponent = _b.sent();
                        this.forceUpdate();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocViewer.prototype.release = function () {
        var content = this.state.content;
        if (!content.data) {
            return;
        }
        URL.revokeObjectURL(content.data);
    };
    DocViewer.prototype.renderSuccessful = function (content) {
        var onClose = this.props.onClose;
        var PDFComponent = DocViewer.PDFComponent;
        if (!PDFComponent) {
            return react["createElement"](loading["a" /* Spinner */], null);
        }
        return react["createElement"](PDFComponent, { src: content, onClose: onClose });
    };
    return DocViewer;
}(base_viewer_BaseViewer));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/analytics/item-viewer.js
var item_viewer = __webpack_require__(1019);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/audio.js
var audio = __webpack_require__(962);
var audio_default = /*#__PURE__*/__webpack_require__.n(audio);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/viewers/audio.js












var defaultCover = (react["createElement"](styled["l" /* DefaultCoverWrapper */], null,
    react["createElement"](audio_default.a, { label: "cover", size: "xlarge", primaryColor: styled["J" /* blanketColor */] })));
var getCoverUrl = function (item, context, collectionName) {
    return constructAuthTokenUrl("/file/" + item.id + "/image", context, collectionName);
};
var audio_AudioViewer = /** @class */ (function (_super) {
    tslib_es6["__extends"](AudioViewer, _super);
    function AudioViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderCover = function () {
            var item = _this.props.item;
            var coverUrl = _this.state.coverUrl;
            if (coverUrl && item.status !== 'error') {
                return react["createElement"](styled["d" /* AudioCover */], { src: coverUrl, alt: item.name });
            }
            else {
                return defaultCover;
            }
        };
        _this.saveAudioElement = function (audioElement) {
            if (!audioElement) {
                return;
            }
            audioElement.setAttribute('controlsList', 'nodownload');
        };
        _this.loadCover = function (coverUrl) {
            return new Promise(function (resolve, reject) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
                var img;
                return tslib_es6["__generator"](this, function (_a) {
                    img = new Image();
                    img.src = coverUrl;
                    img.onload = resolve;
                    img.onerror = reject;
                    return [2 /*return*/];
                });
            }); });
        };
        _this.setCoverUrl = function () { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var _a, mediaClient, item, collectionName, coverUrl, e_1;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, item = _a.item, collectionName = _a.collectionName;
                        if (item.status !== 'processed') {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, getCoverUrl(item, mediaClient, collectionName)];
                    case 1:
                        coverUrl = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.loadCover(coverUrl)];
                    case 3:
                        _b.sent();
                        this.setState({ coverUrl: coverUrl });
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Object.defineProperty(AudioViewer.prototype, "initialState", {
        get: function () {
            return {
                content: outcome["a" /* Outcome */].pending(),
            };
        },
        enumerable: true,
        configurable: true
    });
    AudioViewer.prototype.renderSuccessful = function (src) {
        var _a = this.props, showControls = _a.showControls, previewCount = _a.previewCount, onCanPlay = _a.onCanPlay, onError = _a.onError;
        var useCustomAudioPlayer = !isIE();
        var isAutoPlay = previewCount === 0;
        return useCustomAudioPlayer ? (react["createElement"](styled["e" /* AudioPlayer */], null,
            this.renderCover(),
            react["createElement"](styled["j" /* CustomAudioPlayerWrapper */], null,
                react["createElement"](customMediaPlayer["a" /* default */], { type: "audio", isAutoPlay: isAutoPlay, src: src, isShortcutEnabled: true, showControls: showControls, onCanPlay: onCanPlay, onError: onError })))) : (react["createElement"](styled["e" /* AudioPlayer */], null,
            this.renderCover(),
            react["createElement"](styled["j" /* CustomAudioPlayerWrapper */], null,
                react["createElement"](styled["c" /* Audio */], { autoPlay: isAutoPlay, controls: true, innerRef: this.saveAudioElement, src: src, preload: "metadata" }))));
    };
    AudioViewer.prototype.init = function () {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var _a, mediaClient, item, collectionName, audioUrl, artifactUrl, err_1;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, item = _a.item, collectionName = _a.collectionName;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        audioUrl = void 0;
                        if (!(item.status === 'processed')) return [3 /*break*/, 3];
                        artifactUrl = Object(artifacts["a" /* getArtifactUrl */])(item.artifacts, 'audio.mp3');
                        if (!artifactUrl) {
                            throw new Error('No audio artifacts found');
                        }
                        return [4 /*yield*/, constructAuthTokenUrl(artifactUrl, mediaClient, collectionName)];
                    case 2:
                        audioUrl = _b.sent();
                        if (!audioUrl) {
                            throw new Error('No audio artifacts found');
                        }
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, getObjectUrlFromFileState(item)];
                    case 4:
                        audioUrl = _b.sent();
                        if (!audioUrl) {
                            this.setState({
                                content: outcome["a" /* Outcome */].pending(),
                            });
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5:
                        this.setCoverUrl();
                        this.setState({
                            content: outcome["a" /* Outcome */].successful(audioUrl),
                        });
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _b.sent();
                        this.setState({
                            content: outcome["a" /* Outcome */].failed(Object(error["a" /* createError */])('previewFailed', err_1, item)),
                        });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AudioViewer.prototype.release = function () {
        var content = this.state.content;
        if (!content.data) {
            return;
        }
        URL.revokeObjectURL(content.data);
    };
    return AudioViewer;
}(base_viewer_BaseViewer));

//# sourceMappingURL=audio.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/item-viewer.js


















var item_viewer_initialState = {
    item: outcome["a" /* Outcome */].pending(),
};
var item_viewer_ItemViewerBase = /** @class */ (function (_super) {
    tslib_es6["__extends"](ItemViewerBase, _super);
    function ItemViewerBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = item_viewer_initialState;
        _this.onViewerLoaded = function (payload) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var item;
            var _this = this;
            return tslib_es6["__generator"](this, function (_a) {
                item = this.state.item;
                // the item.whenFailed case is handled in the "init" method
                item.whenSuccessful(function (file) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
                    var identifier, id, _a;
                    return tslib_es6["__generator"](this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(file.status === 'processed')) return [3 /*break*/, 5];
                                identifier = this.props.identifier;
                                if (!(payload.status === 'success')) return [3 /*break*/, 1];
                                this.fireAnalytics(Object(item_viewer["c" /* mediaFileLoadSucceededEvent */])(file));
                                return [3 /*break*/, 5];
                            case 1:
                                if (!(payload.status === 'error' && Object(media_client_identifier["c" /* isFileIdentifier */])(identifier))) return [3 /*break*/, 5];
                                if (!(typeof identifier.id === 'string')) return [3 /*break*/, 2];
                                _a = identifier.id;
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, identifier.id];
                            case 3:
                                _a = _b.sent();
                                _b.label = 4;
                            case 4:
                                id = _a;
                                this.fireAnalytics(Object(item_viewer["b" /* mediaFileLoadFailedEvent */])(id, payload.errorMessage || 'Viewer error', file));
                                _b.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); };
        _this.onCanPlay = function (fileState) { return function () {
            if (fileState.status === 'processed') {
                _this.fireAnalytics(Object(item_viewer["c" /* mediaFileLoadSucceededEvent */])(fileState));
            }
        }; };
        _this.onError = function (fileState) { return function () {
            if (fileState.status === 'processed') {
                _this.fireAnalytics(Object(item_viewer["b" /* mediaFileLoadFailedEvent */])(fileState.id, 'Playback failed', fileState));
            }
        }; };
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(analytics["a" /* channel */]);
            }
        };
        return _this;
    }
    ItemViewerBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.needsReset(this.props, nextProps)) {
            this.release();
            this.setState(item_viewer_initialState);
        }
    };
    ItemViewerBase.prototype.componentDidUpdate = function (oldProps) {
        if (this.needsReset(oldProps, this.props)) {
            this.init(this.props);
        }
    };
    ItemViewerBase.prototype.componentWillUnmount = function () {
        this.release();
    };
    ItemViewerBase.prototype.componentDidMount = function () {
        this.init(this.props);
    };
    ItemViewerBase.prototype.renderFileState = function (item) {
        if (item.status === 'error') {
            return this.renderError('previewFailed', item);
        }
        var _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier, showControls = _a.showControls, onClose = _a.onClose, previewCount = _a.previewCount;
        var collectionName = Object(media_client_identifier["c" /* isFileIdentifier */])(identifier)
            ? identifier.collectionName
            : undefined;
        var viewerProps = {
            mediaClient: mediaClient,
            item: item,
            collectionName: collectionName,
            onClose: onClose,
            previewCount: previewCount,
        };
        switch (item.mediaType) {
            case 'image':
                return react["createElement"](image_ImageViewer, tslib_es6["__assign"]({ onLoad: this.onViewerLoaded }, viewerProps));
            case 'audio':
                return (react["createElement"](audio_AudioViewer, tslib_es6["__assign"]({ showControls: showControls, onCanPlay: this.onCanPlay(item), onError: this.onError(item) }, viewerProps)));
            case 'video':
                return (react["createElement"](video_VideoViewer, tslib_es6["__assign"]({ showControls: showControls, onCanPlay: this.onCanPlay(item), onError: this.onError(item) }, viewerProps)));
            case 'doc':
                return react["createElement"](doc_DocViewer, tslib_es6["__assign"]({}, viewerProps));
            default:
                return this.renderError('unsupported', item);
        }
    };
    ItemViewerBase.prototype.renderError = function (errorName, file) {
        if (file) {
            var err = Object(error["a" /* createError */])(errorName, undefined, file);
            return (react["createElement"](error["b" /* default */], { error: err },
                react["createElement"]("p", null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].try_downloading_file))),
                this.renderDownloadButton(file, err)));
        }
        else {
            return react["createElement"](error["b" /* default */], { error: Object(error["a" /* createError */])(errorName) });
        }
    };
    ItemViewerBase.prototype.render = function () {
        var _this = this;
        var identifier = this.props.identifier;
        var item = this.state.item;
        if (Object(media_client_identifier["b" /* isExternalImageIdentifier */])(identifier)) {
            var dataURI = identifier.dataURI;
            return react["createElement"](InteractiveImg, { src: dataURI });
        }
        return item.match({
            successful: function (item) {
                switch (item.status) {
                    case 'processed':
                    case 'uploading':
                    case 'processing':
                        return _this.renderFileState(item);
                    case 'failed-processing':
                    case 'error':
                        return _this.renderError('previewFailed', item);
                    default:
                        return react["createElement"](loading["a" /* Spinner */], null);
                }
            },
            pending: function () { return react["createElement"](loading["a" /* Spinner */], null); },
            failed: function (err) { return _this.renderError(err.errorName, item.data); },
        });
    };
    ItemViewerBase.prototype.renderDownloadButton = function (state, err) {
        var _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier;
        var collectionName = Object(media_client_identifier["c" /* isFileIdentifier */])(identifier)
            ? identifier.collectionName
            : undefined;
        return (react["createElement"](ErrorViewDownloadButton, { state: state, mediaClient: mediaClient, err: err, collectionName: collectionName }));
    };
    ItemViewerBase.prototype.init = function (props) {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var mediaClient, identifier, id, _a;
            var _this = this;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mediaClient = props.mediaClient, identifier = props.identifier;
                        if (Object(media_client_identifier["b" /* isExternalImageIdentifier */])(identifier)) {
                            return [2 /*return*/];
                        }
                        if (!(typeof identifier.id === 'string')) return [3 /*break*/, 1];
                        _a = identifier.id;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, identifier.id];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        id = _a;
                        this.fireAnalytics(Object(item_viewer["a" /* mediaFileCommencedEvent */])(id));
                        this.subscription = mediaClient.file
                            .getFileState(id, {
                            collectionName: identifier.collectionName,
                        })
                            .subscribe({
                            next: function (file) {
                                _this.setState({
                                    item: outcome["a" /* Outcome */].successful(file),
                                });
                            },
                            error: function (err) {
                                _this.setState({
                                    item: outcome["a" /* Outcome */].failed(Object(error["a" /* createError */])('metadataFailed', err)),
                                });
                                _this.fireAnalytics(Object(item_viewer["b" /* mediaFileLoadFailedEvent */])(id, 'Metadata fetching failed'));
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // It's possible that a different identifier or mediaClient was passed.
    // We therefore need to reset Media Viewer.
    ItemViewerBase.prototype.needsReset = function (propsA, propsB) {
        return (!deep_equal_default()(propsA.identifier, propsB.identifier) ||
            propsA.mediaClient !== propsB.mediaClient);
    };
    ItemViewerBase.prototype.release = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return ItemViewerBase;
}(react["Component"]));

var ItemViewer = Object(withAnalyticsEvents["a" /* default */])()(item_viewer_ItemViewerBase);
//# sourceMappingURL=item-viewer.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/chevron-left-circle.js
var chevron_left_circle = __webpack_require__(1165);
var chevron_left_circle_default = /*#__PURE__*/__webpack_require__.n(chevron_left_circle);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/chevron-right-circle.js
var chevron_right_circle = __webpack_require__(1166);
var chevron_right_circle_default = /*#__PURE__*/__webpack_require__.n(chevron_right_circle);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var theme = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/analytics/navigation.js



function actionFromDirection(direction) {
    switch (direction) {
        case 'next':
            return 'next';
        case 'prev':
            return 'previous';
    }
}
function inputFromSource(source) {
    switch (source) {
        case 'mouse':
            return 'button';
        case 'keyboard':
            return 'keys';
    }
}
var fileDetailsFromIdentifier = function (identifier) { return ({
    fileId: Object(media_client_identifier["c" /* isFileIdentifier */])(identifier) && typeof identifier.id === 'string'
        ? identifier.id
        : '',
}); };
function createNavigationEvent(direction, source, newItem) {
    return {
        eventType: 'ui',
        action: 'navigated',
        actionSubject: 'file',
        actionSubjectId: actionFromDirection(direction),
        attributes: tslib_es6["__assign"]({}, analytics["c" /* packageAttributes */], fileDetailsFromIdentifier(newItem), { input: inputFromSource(source) }),
    };
}
//# sourceMappingURL=navigation.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/navigation.js













var navigation_NavigationBase = /** @class */ (function (_super) {
    tslib_es6["__extends"](NavigationBase, _super);
    function NavigationBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(analytics["a" /* channel */]);
            }
        };
        return _this;
    }
    NavigationBase.prototype.navigate = function (direction, source) {
        var _this = this;
        return function () {
            var _a = _this.props, onChange = _a.onChange, items = _a.items;
            var selectedIndex = _this.selectedIndex;
            var newItem = direction === 'next'
                ? items[selectedIndex + 1]
                : items[selectedIndex - 1];
            if (newItem) {
                _this.fireAnalytics(createNavigationEvent(direction, source, newItem));
                onChange(newItem);
            }
        };
    };
    Object.defineProperty(NavigationBase.prototype, "selectedIndex", {
        get: function () {
            var _a = this.props, items = _a.items, selectedItem = _a.selectedItem;
            return getSelectedIndex(items, selectedItem);
        },
        enumerable: true,
        configurable: true
    });
    NavigationBase.prototype.render = function () {
        var _this = this;
        var items = this.props.items;
        var selectedIndex = this.selectedIndex;
        if (selectedIndex === -1) {
            return null;
        }
        var isLeftVisible = selectedIndex > 0;
        var isRightVisible = selectedIndex < items.length - 1;
        var prev = function (source) { return _this.navigate('prev', source); };
        var next = function (source) { return _this.navigate('next', source); };
        return (react["createElement"](styled["b" /* ArrowsWrapper */], null,
            react["createElement"](styled["v" /* LeftWrapper */], null, isLeftVisible ? (react["createElement"](styled["a" /* Arrow */], { className: styled["K" /* hideControlsClassName */] },
                react["createElement"](shortcut["a" /* Shortcut */], { keyCode: 37, handler: prev('keyboard') }),
                react["createElement"](MediaButton["a" /* default */], { onClick: prev('mouse'), iconBefore: react["createElement"](chevron_left_circle_default.a, { primaryColor: theme["colors"].N800, size: "xlarge", label: "Previous" }) }))) : null),
            react["createElement"](styled["E" /* RightWrapper */], null, isRightVisible ? (react["createElement"](styled["a" /* Arrow */], { className: styled["K" /* hideControlsClassName */] },
                react["createElement"](shortcut["a" /* Shortcut */], { keyCode: 39, handler: next('keyboard') }),
                react["createElement"](MediaButton["a" /* default */], { onClick: next('mouse'), iconBefore: react["createElement"](chevron_right_circle_default.a, { primaryColor: theme["colors"].N800, size: "xlarge", label: "Next" }) }))) : null)));
    };
    return NavigationBase;
}(react["Component"]));

var Navigation = Object(withAnalyticsEvents["a" /* default */])({})(navigation_NavigationBase);
//# sourceMappingURL=navigation.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/humanReadableSize.js
var humanReadableSize = __webpack_require__(1185);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/image.js
var media_services_image = __webpack_require__(972);
var image_default = /*#__PURE__*/__webpack_require__.n(media_services_image);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/video.js
var video = __webpack_require__(961);
var video_default = /*#__PURE__*/__webpack_require__.n(video);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/document.js
var media_services_document = __webpack_require__(973);
var document_default = /*#__PURE__*/__webpack_require__.n(media_services_document);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/unknown.js
var unknown = __webpack_require__(974);
var unknown_default = /*#__PURE__*/__webpack_require__.n(unknown);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/media-type-icon.js








var icons = {
    image: image_default.a,
    audio: audio_default.a,
    video: video_default.a,
    doc: document_default.a,
    unknown: unknown_default.a,
};
var defaultType = 'unknown';
var media_type_icon_MediaTypeIcon = /** @class */ (function (_super) {
    tslib_es6["__extends"](MediaTypeIcon, _super);
    function MediaTypeIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaTypeIcon.prototype.render = function () {
        var type = this.props.type;
        var typeWithDefault = type || defaultType;
        var Icon = icons[typeWithDefault] || icons[defaultType];
        return (react["createElement"](styled["r" /* IconWrapper */], { type: typeWithDefault },
            react["createElement"](Icon, { label: "media-type", size: "large" })));
    };
    MediaTypeIcon.defaultProps = {
        type: defaultType,
    };
    return MediaTypeIcon;
}(react["Component"]));

//# sourceMappingURL=media-type-icon.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/header.js











var header_initialState = {
    item: outcome["a" /* Outcome */].pending(),
};
var header_Header = /** @class */ (function (_super) {
    tslib_es6["__extends"](Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = header_initialState;
        _this.renderDownload = function () {
            var item = _this.state.item;
            var _a = _this.props, identifier = _a.identifier, mediaClient = _a.mediaClient;
            return item.match({
                pending: function () { return DisabledToolbarDownloadButton; },
                failed: function () { return DisabledToolbarDownloadButton; },
                successful: function (item) { return (react["createElement"](ToolbarDownloadButton, { state: item, identifier: identifier, mediaClient: mediaClient })); },
            });
        };
        _this.renderSize = function (item) {
            if (item.size) {
                return _this.renderSeparator() + Object(humanReadableSize["a" /* toHumanReadableMediaSize */])(item.size);
            }
            else {
                return '';
            }
        };
        _this.renderSeparator = function () {
            return ' · ';
        };
        _this.renderFileTypeText = function (mediaType) {
            var mediaTypeTranslationMap = {
                doc: messages["a" /* messages */].document,
                audio: messages["a" /* messages */].audio,
                video: messages["a" /* messages */].video,
                image: messages["a" /* messages */].image,
                unknown: messages["a" /* messages */].unknown,
            };
            var message = mediaTypeTranslationMap[mediaType || 'unknown'];
            // Defaulting to unknown again since backend has more mediaTypes than the current supported ones
            return react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, message || messages["a" /* messages */].unknown));
        };
        _this.getMediaIcon = function (mediaType) {
            return react["createElement"](media_type_icon_MediaTypeIcon, { type: mediaType });
        };
        return _this;
    }
    Header.prototype.componentWillUpdate = function (nextProps) {
        if (this.needsReset(this.props, nextProps)) {
            this.release();
            this.init(nextProps);
        }
    };
    Header.prototype.componentDidMount = function () {
        this.init(this.props);
    };
    Header.prototype.componentWillUnmount = function () {
        this.release();
    };
    Header.prototype.init = function (props) {
        var _this = this;
        this.setState(header_initialState, function () { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var mediaClient, identifier, _a, name_1, fileState, id, _b;
            var _this = this;
            return tslib_es6["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        mediaClient = props.mediaClient, identifier = props.identifier;
                        if (Object(media_client_identifier["b" /* isExternalImageIdentifier */])(identifier)) {
                            _a = identifier.name, name_1 = _a === void 0 ? identifier.dataURI : _a;
                            fileState = {
                                status: 'processing',
                                id: name_1,
                                mediaType: 'image',
                                mimeType: 'image/',
                                name: name_1,
                                representations: {},
                                size: 0,
                            };
                            this.setState({
                                item: outcome["a" /* Outcome */].successful(fileState),
                            });
                            return [2 /*return*/];
                        }
                        if (!(typeof identifier.id === 'string')) return [3 /*break*/, 1];
                        _b = identifier.id;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, identifier.id];
                    case 2:
                        _b = _c.sent();
                        _c.label = 3;
                    case 3:
                        id = _b;
                        this.subscription = mediaClient.file
                            .getFileState(id, {
                            collectionName: identifier.collectionName,
                        })
                            .subscribe({
                            next: function (file) {
                                _this.setState({
                                    item: outcome["a" /* Outcome */].successful(file),
                                });
                            },
                            error: function (err) {
                                _this.setState({
                                    item: outcome["a" /* Outcome */].failed(Object(error["a" /* createError */])('metadataFailed', err)),
                                });
                            },
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Header.prototype.render = function () {
        return (react["createElement"](styled["p" /* Header */], { className: styled["K" /* hideControlsClassName */] },
            react["createElement"](styled["u" /* LeftHeader */], null, this.renderMetadata()),
            react["createElement"](styled["D" /* RightHeader */], null, this.renderDownload())));
    };
    Header.prototype.renderMetadata = function () {
        var _this = this;
        var item = this.state.item;
        return item.match({
            successful: function (item) { return _this.renderMetadataLayout(item); },
            pending: function () { return null; },
            failed: function () { return null; },
        });
    };
    Header.prototype.renderMetadataLayout = function (item) {
        if (item.status === 'processed' || item.status === 'processing') {
            return (react["createElement"](styled["B" /* MetadataWrapper */], null,
                react["createElement"](styled["z" /* MetadataIconWrapper */], null, this.getMediaIcon(item.mediaType)),
                react["createElement"](styled["x" /* MedatadataTextWrapper */], null,
                    react["createElement"](styled["y" /* MetadataFileName */], null, item.name || react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].unknown))),
                    react["createElement"](styled["A" /* MetadataSubText */], null,
                        this.renderFileTypeText(item.mediaType),
                        this.renderSize(item)))));
        }
        else {
            return null;
        }
    };
    Header.prototype.needsReset = function (propsA, propsB) {
        return (!deep_equal_default()(propsA.identifier, propsB.identifier) ||
            propsA.mediaClient !== propsB.mediaClient);
    };
    Header.prototype.release = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return Header;
}(react["Component"]));

/* harmony default export */ var header = (Object(index_es["e" /* injectIntl */])(header_Header));
//# sourceMappingURL=header.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/list.js






var list_List = /** @class */ (function (_super) {
    tslib_es6["__extends"](List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedItem: _this.props.defaultSelectedItem,
            previewCount: 0,
        };
        _this.onNavigationChange = function (selectedItem) {
            var _a = _this.props, onNavigationChange = _a.onNavigationChange, showControls = _a.showControls;
            if (onNavigationChange) {
                onNavigationChange(selectedItem);
            }
            if (showControls) {
                showControls();
            }
            _this.setState({ selectedItem: selectedItem, previewCount: _this.state.previewCount + 1 });
        };
        return _this;
    }
    List.prototype.render = function () {
        var items = this.props.items;
        return this.renderContent(items);
    };
    List.prototype.renderContent = function (items) {
        var _a = this.props, mediaClient = _a.mediaClient, onClose = _a.onClose, showControls = _a.showControls;
        var selectedItem = this.state.selectedItem;
        return (react["createElement"](styled["w" /* ListWrapper */], null,
            react["createElement"](styled["q" /* HeaderWrapper */], { className: styled["K" /* hideControlsClassName */] },
                react["createElement"](header, { mediaClient: mediaClient, identifier: selectedItem, onClose: onClose })),
            react["createElement"](ItemViewer, { mediaClient: mediaClient, identifier: selectedItem, showControls: showControls, onClose: onClose, previewCount: this.state.previewCount }),
            react["createElement"](Navigation, { items: items, selectedItem: selectedItem, onChange: this.onNavigationChange })));
    };
    return List;
}(react["Component"]));

//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/collection.js








var collection_initialState = { items: outcome["a" /* Outcome */].pending() };
var collection_Collection = /** @class */ (function (_super) {
    tslib_es6["__extends"](Collection, _super);
    function Collection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = collection_initialState;
        _this.onNavigationChange = function (item) {
            var _a = _this.props, mediaClient = _a.mediaClient, collectionName = _a.collectionName, pageSize = _a.pageSize;
            if (_this.shouldLoadNext(item)) {
                mediaClient.collection.loadNextPage(collectionName, {
                    limit: pageSize,
                });
            }
        };
        return _this;
    }
    Collection.prototype.componentWillUpdate = function (nextProps) {
        if (this.needsReset(this.props, nextProps)) {
            this.release();
            this.init(nextProps);
        }
    };
    Collection.prototype.componentWillUnmount = function () {
        this.release();
    };
    Collection.prototype.componentDidMount = function () {
        this.init(this.props);
    };
    Collection.prototype.render = function () {
        var _this = this;
        var _a = this.props, defaultSelectedItem = _a.defaultSelectedItem, mediaClient = _a.mediaClient, onClose = _a.onClose, collectionName = _a.collectionName, showControls = _a.showControls;
        return this.state.items.match({
            pending: function () { return react["createElement"](loading["a" /* Spinner */], null); },
            successful: function (items) {
                var identifiers = items.map(function (x) { return toIdentifier(x, collectionName); });
                var item = defaultSelectedItem
                    ? tslib_es6["__assign"]({}, defaultSelectedItem, { collectionName: collectionName }) : identifiers[0];
                return (react["createElement"](list_List, { items: identifiers, defaultSelectedItem: item, mediaClient: mediaClient, onClose: onClose, onNavigationChange: _this.onNavigationChange, showControls: showControls }));
            },
            failed: function (err) { return react["createElement"](error["b" /* default */], { error: err }); },
        });
    };
    Collection.prototype.init = function (props) {
        var _this = this;
        this.setState(collection_initialState);
        var collectionName = props.collectionName, mediaClient = props.mediaClient, defaultSelectedItem = props.defaultSelectedItem, pageSize = props.pageSize;
        this.subscription = mediaClient.collection
            .getItems(collectionName, { limit: pageSize })
            .subscribe({
            next: function (items) {
                _this.setState({
                    items: outcome["a" /* Outcome */].successful(items),
                });
                if (defaultSelectedItem && _this.shouldLoadNext(defaultSelectedItem)) {
                    mediaClient.collection.loadNextPage(collectionName, {
                        limit: pageSize,
                    });
                }
            },
            error: function () {
                _this.setState({
                    items: outcome["a" /* Outcome */].failed(Object(error["a" /* createError */])('metadataFailed')),
                });
            },
        });
    };
    Collection.prototype.release = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    Collection.prototype.needsReset = function (propsA, propsB) {
        return (propsA.collectionName !== propsB.collectionName ||
            propsA.mediaClient !== propsB.mediaClient);
    };
    Collection.prototype.shouldLoadNext = function (selectedItem) {
        var _this = this;
        if (Object(media_client_identifier["b" /* isExternalImageIdentifier */])(selectedItem)) {
            return false;
        }
        var items = this.state.items;
        return items.match({
            pending: function () { return false; },
            failed: function () { return false; },
            successful: function (items) {
                return items.length !== 0 && _this.isLastItem(selectedItem, items);
            },
        });
    };
    Collection.prototype.isLastItem = function (selectedItem, items) {
        var lastItem = items[items.length - 1];
        var isLastItem = selectedItem.id === lastItem.id &&
            selectedItem.occurrenceKey === lastItem.occurrenceKey;
        return isLastItem;
    };
    return Collection;
}(react["Component"]));

//# sourceMappingURL=collection.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/cross.js
var cross = __webpack_require__(954);
var cross_default = /*#__PURE__*/__webpack_require__.n(cross);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/content.js







var mouseMovementDelay = 2000;
var findParent = function (element, className, maxParentElement) {
    if (maxParentElement === void 0) { maxParentElement = document.body; }
    if (element.classList.contains(className)) {
        return element;
    }
    var currentElement = element;
    while (currentElement.parentElement !== maxParentElement) {
        if (currentElement.parentElement) {
            currentElement = currentElement.parentElement;
            if (currentElement.classList.contains(className)) {
                return currentElement;
            }
        }
        else {
            return undefined;
        }
    }
    return undefined;
};
var content_Content = /** @class */ (function (_super) {
    tslib_es6["__extends"](Content, _super);
    function Content() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showControls: true,
        };
        _this.clearTimeout = function () {
            if (_this.checkActivityTimeout) {
                window.clearTimeout(_this.checkActivityTimeout);
            }
        };
        _this.hideControls = function (element) { return function () {
            if (element) {
                var parent_1 = findParent(element, styled["K" /* hideControlsClassName */], _this.contentWrapperElement);
                if (!parent_1) {
                    _this.setState({ showControls: false });
                }
            }
            else {
                _this.setState({ showControls: false });
            }
        }; };
        _this.checkMouseMovement = function (e) {
            var showControls = _this.state.showControls;
            _this.clearTimeout();
            // This check is needed to not trigger a render call on every movement.
            // Even if nothing will be re-renderer since the value is the same, it
            // will go into any children render method for nothing.
            if (!showControls) {
                _this.setState({ showControls: true });
            }
            _this.checkActivityTimeout = window.setTimeout(_this.hideControls(e && e.target), mouseMovementDelay);
        };
        // We want to check mouse movement on click too
        // in order to not hide controls when user is interacting with any control
        _this.onClick = function (e) {
            var onClose = _this.props.onClose;
            _this.checkMouseMovement();
            Object(closeOnDirectClick["a" /* closeOnDirectClick */])(onClose)(e);
        };
        _this.saveContentWrapperRef = function (el) {
            _this.contentWrapperElement = el;
        };
        return _this;
    }
    Content.prototype.componentDidMount = function () {
        this.checkMouseMovement();
    };
    Content.prototype.componentWillUnmount = function () {
        this.clearTimeout();
    };
    Content.prototype.render = function () {
        var showControls = this.state.showControls;
        var onClose = this.props.onClose;
        // We extend the children with the ability of showing the controls
        var children = react["cloneElement"](this.props.children, {
            showControls: this.checkMouseMovement,
        });
        return (react["createElement"](styled["i" /* ContentWrapper */], { innerRef: this.saveContentWrapperRef, showControls: showControls, onMouseMove: this.checkMouseMovement, onClick: this.onClick },
            react["createElement"](styled["h" /* CloseButtonWrapper */], { className: styled["K" /* hideControlsClassName */] },
                react["createElement"](MediaButton["a" /* default */], { appearance: 'toolbar', onClick: onClose, iconBefore: react["createElement"](cross_default.a, { label: "Close" }) })),
            children));
    };
    return Content;
}(react["Component"]));

//# sourceMappingURL=content.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/media-viewer.js












var media_viewer_MediaViewerComponent = /** @class */ (function (_super) {
    tslib_es6["__extends"](MediaViewerComponent, _super);
    function MediaViewerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(analytics["a" /* channel */]);
            }
        };
        _this.onShortcutClosed = function () {
            _this.sendClosedEvent('escKey');
            var onClose = _this.props.onClose;
            if (onClose) {
                onClose();
            }
        };
        _this.onContentClose = function (_e, analyticsEvent) {
            var onClose = _this.props.onClose;
            if (analyticsEvent &&
                analyticsEvent.payload &&
                analyticsEvent.payload.actionSubject === 'button') {
                _this.sendClosedEvent('button');
            }
            if (onClose) {
                onClose();
            }
        };
        return _this;
    }
    MediaViewerComponent.prototype.componentWillMount = function () {
        this.fireAnalytics(mediaViewerModalEvent());
        MediaViewerComponent.startTime = Date.now();
    };
    MediaViewerComponent.prototype.sendClosedEvent = function (input) {
        this.fireAnalytics(closedEvent(input));
    };
    MediaViewerComponent.prototype.render = function () {
        var content = (react["createElement"](styled["g" /* Blanket */], null,
            react["createElement"](shortcut["a" /* Shortcut */], { keyCode: 27, handler: this.onShortcutClosed }),
            react["createElement"](content_Content, { onClose: this.onContentClose }, this.renderContent())));
        return this.context.intl ? (content) : (react["createElement"](index_es["c" /* IntlProvider */], { locale: "en" }, content));
    };
    MediaViewerComponent.prototype.renderContent = function () {
        var _a = this.props, selectedItem = _a.selectedItem, mediaClient = _a.mediaClient, onClose = _a.onClose, itemSource = _a.itemSource;
        var defaultSelectedItem = selectedItem;
        if (itemSource.kind === 'COLLECTION') {
            return (react["createElement"](collection_Collection, { pageSize: itemSource.pageSize, defaultSelectedItem: defaultSelectedItem, collectionName: itemSource.collectionName, mediaClient: mediaClient, onClose: onClose }));
        }
        else if (itemSource.kind === 'ARRAY') {
            var items = itemSource.items;
            var firstItem = items[0];
            return (react["createElement"](list_List, { defaultSelectedItem: defaultSelectedItem || firstItem, items: items, mediaClient: mediaClient, onClose: onClose }));
        }
        else {
            return null;
        }
    };
    MediaViewerComponent.contextTypes = {
        intl: index_es["f" /* intlShape */],
    };
    MediaViewerComponent.startTime = Date.now();
    MediaViewerComponent.timerElapsed = function () { return Date.now() - MediaViewerComponent.startTime; };
    return MediaViewerComponent;
}(react["Component"]));

var media_viewer_MediaViewer = Object(withAnalyticsEvents["a" /* default */])()(media_viewer_MediaViewerComponent);
//# sourceMappingURL=media-viewer.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/utils/getIdentifierCollection.js

var getIdentifierCollection = function (identifier, defaultCollectionName) {
    return Object(media_client_identifier["c" /* isFileIdentifier */])(identifier)
        ? identifier.collectionName || defaultCollectionName
        : undefined;
};
//# sourceMappingURL=getIdentifierCollection.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/components/media-viewer.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaViewer", function() { return components_media_viewer_MediaViewer; });







var components_media_viewer_MediaViewer = /** @class */ (function (_super) {
    tslib_es6["__extends"](MediaViewer, _super);
    function MediaViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // returns a valid MV data source including current the card identifier
        _this.getDataSourceWithSelectedItem = function (dataSource, selectedItem) {
            // we want to ensure the card identifier is in the list
            var list = dataSource.list;
            if (list) {
                var selectedItemIndex = getSelectedIndex(list, selectedItem);
                if (selectedItemIndex === -1) {
                    return {
                        list: tslib_es6["__spread"]([selectedItem], list),
                    };
                }
            }
            return dataSource;
        };
        return _this;
    }
    MediaViewer.prototype.render = function () {
        var _a = this.props, featureFlags = _a.featureFlags, onClose = _a.onClose, mediaClient = _a.mediaClient, selectedItem = _a.selectedItem, collectionName = _a.collectionName, dataSource = _a.dataSource, pageSize = _a.pageSize;
        var defaultPageSize = 30;
        var dataSourceWithSelectedItem = this.getDataSourceWithSelectedItem(dataSource, selectedItem);
        if (dataSourceWithSelectedItem.list) {
            var items = dataSourceWithSelectedItem.list.map(function (identifier) { return (tslib_es6["__assign"]({}, identifier, { collectionName: getIdentifierCollection(identifier, collectionName) })); });
            var itemSource = {
                kind: 'ARRAY',
                items: items,
            };
            var identifier = tslib_es6["__assign"]({}, selectedItem, { collectionName: collectionName });
            return (react["createElement"](media_viewer_MediaViewer, { mediaClient: mediaClient, selectedItem: identifier, onClose: onClose, itemSource: itemSource, featureFlags: featureFlags }));
        }
        else if (dataSourceWithSelectedItem.collectionName) {
            if (Object(media_client_identifier["b" /* isExternalImageIdentifier */])(selectedItem)) {
                // if integrators pass an external image + collection, we remove the collection and just show the selectedItem
                return (react["createElement"](media_viewer_MediaViewer, { mediaClient: mediaClient, selectedItem: selectedItem, onClose: onClose, itemSource: { kind: 'ARRAY', items: [selectedItem] }, featureFlags: featureFlags }));
            }
            var itemSource = {
                kind: 'COLLECTION',
                collectionName: dataSourceWithSelectedItem.collectionName,
                pageSize: pageSize || defaultPageSize,
            };
            var identifier = tslib_es6["__assign"]({}, selectedItem, { collectionName: dataSourceWithSelectedItem.collectionName });
            return (react["createElement"](media_viewer_MediaViewer, { mediaClient: mediaClient, selectedItem: identifier, onClose: onClose, itemSource: itemSource, featureFlags: featureFlags }));
        }
        else {
            throw new Error();
        }
    };
    return MediaViewer;
}(react["Component"]));

//# sourceMappingURL=media-viewer.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return packageAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fileStateToFileGasPayload; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _version_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
var _version_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(1162, 1);


var channel = 'media';
var packageAttributes = {
    componentName: 'media-viewer',
    packageName: _version_json__WEBPACK_IMPORTED_MODULE_1__[/* name */ "a"],
    packageVersion: _version_json__WEBPACK_IMPORTED_MODULE_1__[/* version */ "b"],
};
function fileStateToFileGasPayload(state) {
    var basePayload = {
        fileId: state.id,
    };
    switch (state.status) {
        case 'uploading':
        case 'failed-processing':
        case 'processing':
        case 'processed':
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, basePayload, { fileMediatype: state.mediaType, fileMimetype: state.mimeType, fileSize: state.size });
        case 'error':
            return basePayload;
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mediaTypeIconColors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return blanketColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return hideControlsClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Blanket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ListWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArrowsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CloseButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return ZoomWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return ZoomControlsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return ZoomLevelIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ErrorMessageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ErrorImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return PDFWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Arrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LeftWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RightWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LeftHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BaselineExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return MedatadataTextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return MetadataWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return MetadataFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return MetadataSubText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return MetadataIconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RightHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CustomAudioPlayerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AudioPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Audio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AudioCover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return DefaultCoverWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return DownloadButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CustomVideoPlayerWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _atlaskit_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _atlaskit_media_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(395);

// StyledComponentClass and React types are imported to prevent a typescript error caused by inferred types sourced
// from external modules - https://github.com/styled-components/styled-components/issues/1063#issuecomment-320344957
// @ts-ignore: unused variable
// prettier-ignore



var overlayZindex = _atlaskit_theme__WEBPACK_IMPORTED_MODULE_2__[/* layers */ "m"].modal() + 10;
var mediaTypeIconColors = {
    image: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].Y200,
    audio: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].P200,
    video: '#ff7143',
    doc: _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].B300,
    unknown: '#3dc7dc',
};
var blanketColor = _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].DN30;
var hideControlsClassName = 'mvng-hide-controls';
var Blanket = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: ", ";\n  z-index: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: ", ";\n  z-index: ", ";\n"])), blanketColor, overlayZindex);
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 98px;\n  opacity: 0.85;\n  background-image: linear-gradient(to bottom, #0e1624, rgba(14, 22, 36, 0));\n  color: #b8c7e0;\n  font-weight: 500;\n  padding-top: 15px;\n  padding: 24px;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 98px;\n  opacity: 0.85;\n  background-image: linear-gradient(to bottom, #0e1624, rgba(14, 22, 36, 0));\n  color: #b8c7e0;\n  font-weight: 500;\n  padding-top: 15px;\n  padding: 24px;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: ", ";\n"])), overlayZindex + 1);
HeaderWrapper.displayName = 'HeaderWrapper';
var ListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"]([""], [""])));
ListWrapper.displayName = 'ListWrapper';
var ArrowsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  width: 100%;\n"], ["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  width: 100%;\n"])));
var CloseButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  position: absolute;\n  top: 24px;\n  right: 20px;\n  z-index: ", ";\n"], ["\n  position: absolute;\n  top: 24px;\n  right: 20px;\n  z-index: ", ";\n"])), overlayZindex + 2);
var ZoomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  height: 98px;\n  background-image: linear-gradient(to top, #0e1624, rgba(14, 22, 36, 0));\n  opacity: 0.85;\n  pointer-events: none;\n"], ["\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  height: 98px;\n  background-image: linear-gradient(to top, #0e1624, rgba(14, 22, 36, 0));\n  opacity: 0.85;\n  pointer-events: none;\n"])));
var ZoomControlsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  width: 100%;\n  position: absolute;\n  text-align: center;\n  bottom: 10px;\n  button {\n    margin-right: 10px;\n  }\n  > * {\n    pointer-events: all;\n  }\n"], ["\n  width: 100%;\n  position: absolute;\n  text-align: center;\n  bottom: 10px;\n  button {\n    margin-right: 10px;\n  }\n  > * {\n    pointer-events: all;\n  }\n"])));
var ZoomLevelIndicator = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(templateObject_8 || (templateObject_8 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  position: absolute;\n  right: 24px;\n  bottom: 22px;\n  color: #b8c7e0;\n  pointer-events: all;\n"], ["\n  position: absolute;\n  right: 24px;\n  bottom: 22px;\n  color: #b8c7e0;\n  pointer-events: all;\n"])));
var handleControlsVisibility = function (_a) {
    var showControls = _a.showControls;
    return "\n  transition: opacity .3s;\n  opacity: " + (showControls ? '1' : '0') + ";\n";
};
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_9 || (templateObject_9 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n\n  .", " {\n    ", ";\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n\n  .", " {\n    ", ";\n  }\n"])), hideControlsClassName, handleControlsVisibility);
ContentWrapper.displayName = 'Content';
var ErrorMessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_10 || (templateObject_10 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  text-align: center;\n  color: #b8c7e0;\n  p {\n    line-height: 100%;\n  }\n"], ["\n  text-align: center;\n  color: #b8c7e0;\n  p {\n    line-height: 100%;\n  }\n"])));
var ErrorImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(templateObject_11 || (templateObject_11 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  margin-bottom: 10px;\n  user-select: none;\n"], ["\n  margin-bottom: 10px;\n  user-select: none;\n"])));
var Video = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].video(templateObject_12 || (templateObject_12 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  width: 100vw;\n  height: 100vh;\n"], ["\n  width: 100vw;\n  height: 100vh;\n"])));
var PDFWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_13 || (templateObject_13 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  overflow: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"], ["\n  overflow: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"])));
var Arrow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(templateObject_14 || (templateObject_14 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  cursor: pointer;\n  button {\n    height: inherit;\n  }\n  > span {\n    color: rgba(27, 38, 56, 0.5);\n    fill: #9fb0cc;\n    filter: drop-shadow(1px 1px 1px rgba(27, 38, 56, 0.2));\n\n    &:hover {\n      color: #fff;\n    }\n  }\n"], ["\n  cursor: pointer;\n  button {\n    height: inherit;\n  }\n  > span {\n    color: rgba(27, 38, 56, 0.5);\n    fill: #9fb0cc;\n    filter: drop-shadow(1px 1px 1px rgba(27, 38, 56, 0.2));\n\n    &:hover {\n      color: #fff;\n    }\n  }\n"])));
var ArrowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_15 || (templateObject_15 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 20px;\n"], ["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 20px;\n"])));
var LeftWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(ArrowWrapper)(templateObject_16 || (templateObject_16 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  text-align: left;\n  left: 0;\n"], ["\n  text-align: left;\n  left: 0;\n"])));
var RightWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(ArrowWrapper)(templateObject_17 || (templateObject_17 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  text-align: right;\n  right: 0;\n"], ["\n  text-align: right;\n  right: 0;\n"])));
// header.tsx
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_18 || (templateObject_18 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var LeftHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_19 || (templateObject_19 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  flex: 1;\n  overflow: hidden;\n  > * {\n    pointer-events: all;\n  }\n"], ["\n  flex: 1;\n  overflow: hidden;\n  > * {\n    pointer-events: all;\n  }\n"])));
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_20 || (templateObject_20 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n"], ["\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n"])));
var BaselineExtend = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_21 || (templateObject_21 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n"], ["\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n"])));
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(templateObject_22 || (templateObject_22 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  cursor: ", ";\n  ", "\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  cursor: ",
    ";\n  ",
    "\n"])), function (_a) {
    var canDrag = _a.canDrag, isDragging = _a.isDragging;
    if (canDrag && isDragging) {
        return 'grabbing';
    }
    else if (canDrag) {
        return 'grab';
    }
    else {
        return 'auto';
    }
}, function (_a) {
    var shouldPixelate = _a.shouldPixelate;
    return shouldPixelate
        ? "/* Prevent images from being smoothed when scaled up */\n    image-rendering: optimizeSpeed; /* Legal fallback */\n    image-rendering: -moz-crisp-edges; /* Firefox        */\n    image-rendering: -o-crisp-edges; /* Opera          */\n    image-rendering: -webkit-optimize-contrast; /* Safari         */\n    image-rendering: optimize-contrast; /* CSS3 Proposed  */\n    image-rendering: crisp-edges; /* CSS4 Proposed  */\n    image-rendering: pixelated; /* CSS4 Proposed  */\n    -ms-interpolation-mode: nearest-neighbor; /* IE8+           */"
        : "";
});
var MedatadataTextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_23 || (templateObject_23 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));
var MetadataWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_24 || (templateObject_24 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var MetadataFileName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_25 || (templateObject_25 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  &::first-letter {\n    text-transform: uppercase;\n  }\n  ", ";\n"], ["\n  &::first-letter {\n    text-transform: uppercase;\n  }\n  ", ";\n"])), Object(_atlaskit_media_ui__WEBPACK_IMPORTED_MODULE_4__[/* ellipsis */ "e"])());
var MetadataSubText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_26 || (templateObject_26 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  color: ", ";\n  ", ";\n"], ["\n  color: ", ";\n  ", ";\n"])), _atlaskit_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].DN400, Object(_atlaskit_media_ui__WEBPACK_IMPORTED_MODULE_4__[/* ellipsis */ "e"])());
var MetadataIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_27 || (templateObject_27 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  padding-top: 4px;\n  padding-right: 12px;\n"], ["\n  padding-top: 4px;\n  padding-right: 12px;\n"])));
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_28 || (templateObject_28 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  display: inline-flex;\n  color: ", ";\n"], ["\n  display: inline-flex;\n  color: ",
    ";\n"])), function (_a) {
    var type = _a.type;
    return mediaTypeIconColors[type] || mediaTypeIconColors.unknown;
});
var RightHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_29 || (templateObject_29 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  text-align: right;\n  margin-right: 40px;\n  min-width: 200px;\n  > * {\n    pointer-events: all;\n  }\n"], ["\n  text-align: right;\n  margin-right: 40px;\n  min-width: 200px;\n  > * {\n    pointer-events: all;\n  }\n"])));
var CustomAudioPlayerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_30 || (templateObject_30 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n"])));
var AudioPlayer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_31 || (templateObject_31 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  background-color: ", ";\n  border-radius: ", ";\n  align-items: center;\n  justify-content: center;\n  width: 400px;\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  align-items: center;\n  justify-content: center;\n  width: 400px;\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"])), blanketColor, Object(_atlaskit_theme__WEBPACK_IMPORTED_MODULE_2__[/* borderRadius */ "f"])());
AudioPlayer.displayName = 'AudioPlayer';
var Audio = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].audio(templateObject_32 || (templateObject_32 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n"], ["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n"])));
var AudioCover = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(templateObject_33 || (templateObject_33 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n  background-color: #000000;\n"], ["\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n  background-color: #000000;\n"])));
var DefaultCoverWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_34 || (templateObject_34 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > * {\n    transform: scale(2);\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > * {\n    transform: scale(2);\n  }\n"])));
var DownloadButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_35 || (templateObject_35 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  margin-top: 28px;\n  text-align: center;\n\n  button {\n    font-weight: bold;\n  }\n"], ["\n  margin-top: 28px;\n  text-align: center;\n\n  button {\n    font-weight: bold;\n  }\n"])));
var CustomVideoPlayerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_36 || (templateObject_36 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  video {\n    flex: 1;\n    width: 100vw;\n    height: 100vh;\n    max-height: 100vh;\n  }\n"], ["\n  video {\n    flex: 1;\n    width: 100vw;\n    height: 100vh;\n    max-height: 100vh;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36;
//# sourceMappingURL=styled.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/styled.js
var styled = __webpack_require__(937);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/messages.js
var media_ui_messages = __webpack_require__(938);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/error-images.js
var cannotViewFile = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIwcHgiIGhlaWdodD0iMTA4cHgiIHZpZXdCb3g9IjAgMCAxMjAgMTA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Q2Fubm90IFZpZXcgRmlsZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTIuMjg5MzYxNyUiIHkxPSI5NC40NDUyMzc4JSIgeDI9IjgzLjMxNDg5MzYlIiB5Mj0iMTQuOTk4MzM0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQzFDN0QwIiBvZmZzZXQ9IjEwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRUJFQ0YwIiBzdG9wLW9wYWNpdHk9IjAuNSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ii0xLjkzNzE3Mjc3JSIgeTE9Ijk2LjQwNDI3NiUiIHgyPSIxMDMuODQ4MTY4JSIgeTI9Ii05OS45NTE0MDkxJSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTVBREJBIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E1QURCQSIgc3RvcC1vcGFjaXR5PSIwLjA3IiBvZmZzZXQ9IjExJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTVBREJBIiBzdG9wLW9wYWNpdHk9IjAuMjQiIG9mZnNldD0iMzIlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBNUFEQkEiIHN0b3Atb3BhY2l0eT0iMC41MiIgb2Zmc2V0PSI2MCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E1QURCQSIgc3RvcC1vcGFjaXR5PSIwLjkxIiBvZmZzZXQ9IjkzJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTVBREJBIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ik1WUC0oU3RyaWRlKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ik1WLS0tcHJldmlldy1lcnJvci0tLXVua293biIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY2MC4wMDAwMDAsIC0zNDAuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IkNhbm5vdC1WaWV3LUZpbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY2MC4wMDAwMDAsIDM0MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0U3RThFQyIgcG9pbnRzPSIxMDMuNjY5Nzg3IDE5Ljc2NjgwODUgMTAzLjY1NDQ2OCAxOS43NjY4MDg1IDEwMy42Njk3ODcgMTkuNzgyMTI3NyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjRUJFQ0YwIiBvcGFjaXR5PSIwLjIiIHBvaW50cz0iODQuMDI1NTMxOSAxOS43ODIxMjc3IDEwMy41MzE5MTUgMTkuNzgyMTI3NyAxMDMuNjY5Nzg3IDE5Ljc4MjEyNzcgMTAzLjY2OTc4NyAxOS43ODIxMjc3IDEwMy42Njk3ODcgMTkuNzgyMTI3NyAxMDMuNjU0NDY4IDE5Ljc2NjgwODUgODMuODg3NjU5NiAwIDgzLjg4NzY1OTYgMCA4My44ODc2NTk2IDE5Ljc4MjEyNzciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Mi41MTQwNDI2LDU0Ljg0MjU1MzIgQzUyLjUxMzEzMjMsNTIuMTkyNDg4OCA1My45MTYyMTc0LDQ5Ljc0MDI3NzkgNTYuMjAxMzE2LDQ4LjM5ODIwMjUgQzU4LjQ4NjQxNDYsNDcuMDU2MTI3MiA2MS4zMTE0ODQ5LDQ3LjAyNTA3NDEgNjMuNjI1NTMxOSw0OC4zMTY1OTU3IEw1My40NjM4Mjk4LDU4LjQ3ODI5NzkgQzUyLjg0MTE0MDQsNTcuMzY3NzAyNyA1Mi41MTQwOTkxLDU2LjExNTgwMjQgNTIuNTE0MDQyNiw1NC44NDI1NTMyIFogTTU5Ljk4OTc4NzIsNjIuMjk3ODcyMyBDNTguNzE2NTM4LDYyLjI5NzgxNTggNTcuNDY0NjM3Nyw2MS45NzA3NzQ1IDU2LjM1NDA0MjYsNjEuMzQ4MDg1MSBMNjYuNTE1NzQ0Nyw1MS4xODYzODMgQzY3LjgwNzI2NjQsNTMuNTAwNDMgNjcuNzc2MjEzMyw1Ni4zMjU1MDAzIDY2LjQzNDEzNzksNTguNjEwNTk4OSBDNjUuMDkyMDYyNSw2MC44OTU2OTc1IDYyLjYzOTg1MTYsNjIuMjk4NzgyNiA1OS45ODk3ODcyLDYyLjI5Nzg3MjMgWiBNNzkuNzIwODUxMSw1NC4wNTYxNzAyIEM3Ny4wODE5NjU0LDUxLjI2OTExOTkgNzQuMDQyNjU5NSw0OC44OTA2ODI0IDcwLjcwMjk3ODcsNDYuOTk5MTQ4OSBMNzcuMTA2MzgzLDQwLjYyMTI3NjYgQzc3LjkwNDQ5MzEsMzkuODIzMTY2NCA3Ny45MDQ0OTMxLDM4LjUyOTE3NDEgNzcuMTA2MzgyOSwzNy43MzEwNjM5IEM3Ni4zMDgyNzI3LDM2LjkzMjk1MzcgNzUuMDE0MjgwNCwzNi45MzI5NTM3IDc0LjIxNjE3MDIsMzcuNzMxMDYzOCBMNjYuNzM1MzE5MSw0NS4yMDY4MDg1IEM2NC41NzQxMTIzLDQ0LjQxMjQ1NjEgNjIuMjkyMjY2Niw0My45OTYxNjE3IDU5Ljk4OTc4NzIsNDMuOTc2MTcwMiBDNTAuNTUzMTkxNSw0My45NzYxNzAyIDQyLjU5NzQ0NjgsNTEuNTc0NDY4MSA0MC4yNTg3MjM0LDU0LjA3MTQ4OTQgQzM5Ljg1NjU3NzIsNTQuNTAyOTUxNSAzOS44NTY1NzcyLDU1LjE3MTk0MjIgNDAuMjU4NzIzNCw1NS42MDM0MDQzIEM0Mi44OTc2MDkxLDU4LjM5MDQ1NDUgNDUuOTM2OTE0OSw2MC43Njg4OTIgNDkuMjc2NTk1Nyw2Mi42NjA0MjU1IEw0Mi44OTM2MTcsNjkuMDYzODI5OCBDNDIuMzc3MzMwMiw2OS41ODAxMTY2IDQyLjE3NTY5NzIsNzAuMzMyNjIxIDQyLjM2NDY3MTMsNzEuMDM3ODgxOCBDNDIuNTUzNjQ1NCw3MS43NDMxNDI3IDQzLjEwNDUxNjgsNzIuMjk0MDE0MiA0My44MDk3Nzc3LDcyLjQ4Mjk4ODMgQzQ0LjUxNTAzODYsNzIuNjcxOTYyMyA0NS4yNjc1NDMsNzIuNDcwMzI5NCA0NS43ODM4Mjk4LDcxLjk1NDA0MjYgTDUzLjI1OTU3NDUsNjQuNDc4Mjk3OSBDNTUuNDIwNzgxMyw2NS4yNzI2NTAzIDU3LjcwMjYyNyw2NS42ODg5NDQ3IDYwLjAwNTEwNjQsNjUuNzA4OTM2MiBDNjkuNDUxOTE0OSw2NS43MDg5MzYyIDc3LjM5NzQ0NjgsNTguMDk1MzE5MSA3OS43MzYxNzAyLDU1LjYxMzYxNyBDODAuMTQwNDI5OSw1NS4xNzY2OTY1IDgwLjEzMzcxMDYsNTQuNTAwMjkyOSA3OS43MjA4NTExLDU0LjA3MTQ4OTQgTDc5LjcyMDg1MTEsNTQuMDU2MTcwMiBaIE03OS4wNDY4MDg1LDkxLjQyOTc4NzIgTDc5LjA0NjgwODUsOTguMjE2MTcwMiBMMTAzLjY1OTU3NCw5OC4yMTYxNzAyIEwxMDMuNjU5NTc0LDEwNy4yOCBMMjAuNzE2NTk1NywxMDcuMjggTDIwLjcxNjU5NTcsNTYuODI4OTM2MiBMMCw1Ni44Mjg5MzYyIEwwLDUwLjA0MjU1MzIgTDMwLjE5OTE0ODksNTAuMDQyNTUzMiBMMzAuMTk5MTQ4OSw0My4yNTYxNzAyIEwxMy41MTY1OTU3LDQzLjI1NjE3MDIgTDEzLjUxNjU5NTcsMzYuNDc0ODkzNiBMMi4xMTkxNDg5NCwzNi40NzQ4OTM2IEwyLjExOTE0ODk0LDI5LjY4ODUxMDYgTDM1LjM5NzQ0NjgsMjkuNjg4NTEwNiBMMzUuMzk3NDQ2OCwyMi45MDIxMjc3IEwyMC43MTY1OTU3LDIyLjkwMjEyNzcgTDIwLjcxNjU5NTcsMCBMODMuODg3NjU5NiwwIEw4My44ODc2NTk2LDE5Ljc4MjEyNzcgTDEwMy42NTk1NzQsMTkuNzgyMTI3NyBMMTAzLjY1OTU3NCw2NC4yOTk1NzQ1IEwxMTcuMDQzNDA0LDY0LjI5OTU3NDUgTDExNy4wNDM0MDQsNzEuMDg1OTU3NCBMMTAzLjY1OTU3NCw3MS4wODU5NTc0IEwxMDMuNjU5NTc0LDc3Ljg3MjM0MDQgTDkxLjczNjE3MDIsNzcuODcyMzQwNCBMOTEuNzM2MTcwMiw4NC42NTg3MjM0IEwxMjAsODQuNjU4NzIzNCBMMTIwLDkxLjQ0NTEwNjQgTDc5LjA0NjgwODUsOTEuNDI5Nzg3MiBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgb3BhY2l0eT0iMC42IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OyIgcG9pbnRzPSI4NC4wMjU1MzE5IDMwLjI5MTA2MzggMTAzLjUzMTkxNSAxOS43ODIxMjc3IDg0LjAyNTUzMTkgMTkuNzgyMTI3NyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
var errorLoadingFile = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIwcHgiIGhlaWdodD0iMTA4cHgiIHZpZXdCb3g9IjAgMCAxMjAgMTA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+RXJyb3IgTG9hZGluZyBGaWxlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMi4yODkzNjE3JSIgeTE9Ijk0LjQzNjI0NzclIiB4Mj0iODMuMzE0ODkzNiUiIHkyPSIxNC45OTY5MDY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQzFDN0QwIiBvZmZzZXQ9IjEwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRUJFQ0YwIiBzdG9wLW9wYWNpdHk9IjAuNSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ii0xLjkzNzE3Mjc3JSIgeTE9Ijk2LjQwNDI3NiUiIHgyPSIxMDMuODQ4MTY4JSIgeTI9Ii05OS45NTE0MDkxJSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTVBREJBIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E1QURCQSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ii0xLjkzNzE3Mjc3JSIgeTE9Ijk2LjQwNDI3NiUiIHgyPSIxMDMuODQ4MTY4JSIgeTI9Ii05OS45NTE0MDkxJSIgaWQ9ImxpbmVhckdyYWRpZW50LTMiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTVBREJBIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E1QURCQSIgc3RvcC1vcGFjaXR5PSIwLjA3IiBvZmZzZXQ9IjExJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTVBREJBIiBzdG9wLW9wYWNpdHk9IjAuMjQiIG9mZnNldD0iMzIlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBNUFEQkEiIHN0b3Atb3BhY2l0eT0iMC41MiIgb2Zmc2V0PSI2MCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E1QURCQSIgc3RvcC1vcGFjaXR5PSIwLjkxIiBvZmZzZXQ9IjkzJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTVBREJBIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ik1WUC0oU3RyaWRlKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ik1WLS0tcHJvY2Vzc2luZy0tLWVycm9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjYwLjAwMDAwMCwgLTM0MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iRXJyb3ItTG9hZGluZy1GaWxlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NjAuMDAwMDAwLCAzNDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNzM2MTcwMiw4NC42NTM2MTcgTDkxLjczNjE3MDIsNzcuODcyMzQwNCBMMTAzLjY1OTU3NCw3Ny44NzIzNDA0IEwxMDMuNjU5NTc0LDcxLjA4NTk1NzQgTDExNy4wNDM0MDQsNzEuMDg1OTU3NCBMMTE3LjA0MzQwNCw2NC4yOTk1NzQ1IEwxMDMuNjU5NTc0LDY0LjI5OTU3NDUgTDEwMy42NTk1NzQsMTkuNzgyMTI3NyBMODMuODg3NjU5NiwxOS43ODIxMjc3IEw4My44ODc2NTk2LDAgTDIwLjcxNjU5NTcsMCBMMjAuNzE2NTk1NywyMi45MDIxMjc3IEwzNS4zOTc0NDY4LDIyLjkwMjEyNzcgTDM1LjM5NzQ0NjgsMjkuNjg4NTEwNiBMMi4xMTkxNDg5NCwyOS42ODg1MTA2IEwyLjExOTE0ODk0LDM2LjQ3NDg5MzYgTDEzLjUxNjU5NTcsMzYuNDc0ODkzNiBMMTMuNTE2NTk1Nyw0My4yNTYxNzAyIEwzMC4xOTkxNDg5LDQzLjI1NjE3MDIgTDMwLjE5OTE0ODksNTAuMDQyNTUzMiBMMCw1MC4wNDI1NTMyIEwwLDU2LjgyODkzNjIgTDIwLjcxNjU5NTcsNTYuODI4OTM2MiBMMjAuNzE2NTk1NywxMDcuMjkwMjEzIEwxMDMuNjU5NTc0LDEwNy4yOTAyMTMgTDEwMy42NTk1NzQsOTguMjI2MzgzIEw3OS4wNDY4MDg1LDk4LjIyNjM4MyBMNzkuMDQ2ODA4NSw5MS40NCBMMTIwLDkxLjQ0IEwxMjAsODQuNjUzNjE3IEw5MS43MzYxNzAyLDg0LjY1MzYxNyBaIE02MC42ODQyNTUzLDI5LjI4NTEwNjQgQzYyLjIyMzk0NDEsMjkuMjgzMTgwNSA2My42OTY5MjQyLDI5LjkxMzM2NzYgNjQuNzU4Nzc5NCwzMS4wMjgzMTU1IEM2NS44MjA2MzQ1LDMyLjE0MzI2MzQgNjYuMzc4MjYyMywzMy42NDUyMTQ2IDY2LjMwMTI3NjYsMzUuMTgyOTc4NyBMNjUuMDA5MzYxNyw2MS4yMjU1MzE5IEM2NC44OTUwMzkyLDYzLjUzMDkyNDIgNjIuOTkyNDgwNCw2NS4zNDEzODc1IDYwLjY4NDI1NTMsNjUuMzQxMjc2NiBDNTguMzc2MDMwMiw2NS4zNDEzODc1IDU2LjQ3MzQ3MTQsNjMuNTMwOTI0MiA1Ni4zNTkxNDg5LDYxLjIyNTUzMTkgTDU1LjA2NzIzNCwzNS4xODI5Nzg3IEM1NC45OTAyNDgzLDMzLjY0NTIxNDYgNTUuNTQ3ODc2MSwzMi4xNDMyNjM0IDU2LjYwOTczMTMsMzEuMDI4MzE1NSBDNTcuNjcxNTg2NCwyOS45MTMzNjc2IDU5LjE0NDU2NjYsMjkuMjgzMTgwNSA2MC42ODQyNTUzLDI5LjI4NTEwNjQgWiBNNjAuNjg0MjU1Myw3OS40OTYxNzAyIEM1Ny43NjI1NTE1LDc5LjQ5NjE3MDIgNTUuMzk0MDQyNiw3Ny4xMjc2NjEzIDU1LjM5NDA0MjYsNzQuMjA1OTU3NCBDNTUuMzk0MDQyNiw3MS4yODQyNTM2IDU3Ljc2MjU1MTUsNjguOTE1NzQ0NyA2MC42ODQyNTUzLDY4LjkxNTc0NDcgQzYzLjYwNTk1OTIsNjguOTE1NzQ0NyA2NS45NzQ0NjgxLDcxLjI4NDI1MzYgNjUuOTc0NDY4MSw3NC4yMDU5NTc0IEM2NS45NzQ0NjgxLDc3LjEyNzY2MTMgNjMuNjA1OTU5Miw3OS40OTYxNzAyIDYwLjY4NDI1NTMsNzkuNDk2MTcwMiBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgb3BhY2l0eT0iMC42IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OyIgcG9pbnRzPSI4NC4wMjU1MzE5IDMwLjI5MTA2MzggMTAzLjUzMTkxNSAxOS43ODIxMjc3IDg0LjAyNTUzMTkgMTkuNzgyMTI3NyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjRTdFOEVDIiBwb2ludHM9IjEwMy42Njk3ODcgMTkuNzY2ODA4NSAxMDMuNjU0NDY4IDE5Ljc2NjgwODUgMTAzLjY2OTc4NyAxOS43ODIxMjc3Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIG9wYWNpdHk9IjAuNiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTsiIHBvaW50cz0iODQuMDI1NTMxOSAzMC4yOTEwNjM4IDEwMy41MzE5MTUgMTkuNzgyMTI3NyA4NC4wMjU1MzE5IDE5Ljc4MjEyNzciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0VCRUNGMCIgb3BhY2l0eT0iMC4yIiBwb2ludHM9Ijg0LjAyNTUzMTkgMTkuNzgyMTI3NyAxMDMuNTMxOTE1IDE5Ljc4MjEyNzcgMTAzLjY2OTc4NyAxOS43ODIxMjc3IDEwMy42Njk3ODcgMTkuNzgyMTI3NyAxMDMuNjY5Nzg3IDE5Ljc4MjEyNzcgMTAzLjY1NDQ2OCAxOS43NjY4MDg1IDgzLjg4NzY1OTYgMCA4My44ODc2NTk2IDAgODMuODg3NjU5NiAxOS43ODIxMjc3Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
//# sourceMappingURL=error-images.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsEvents.js
var withAnalyticsEvents = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/analytics/item-viewer.js
var item_viewer = __webpack_require__(1019);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-viewer/newgen/analytics/index.js
var analytics = __webpack_require__(936);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-viewer/newgen/error.js
/* unused harmony export MediaViewerError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createError; });
/* unused harmony export ErrorMessage */









var errorLoadingFileImage = function (formatMessage) { return (react["createElement"](styled["n" /* ErrorImage */], { src: errorLoadingFile, alt: formatMessage(media_ui_messages["a" /* messages */].error_loading_file) })); };
var cannotViewFileImage = function (formatMessage) { return (react["createElement"](styled["n" /* ErrorImage */], { src: cannotViewFile, alt: formatMessage(media_ui_messages["a" /* messages */].error_generating_preview) })); };
var getErrorMessage = function (formatMessage, errorName) {
    var messages = {
        metadataFailed: (react["createElement"]("div", null,
            errorLoadingFileImage(formatMessage),
            react["createElement"]("p", null,
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, media_ui_messages["a" /* messages */].something_went_wrong))),
            react["createElement"]("p", null,
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, media_ui_messages["a" /* messages */].might_be_a_hiccup))))),
        previewFailed: (react["createElement"]("div", null,
            cannotViewFileImage(formatMessage),
            react["createElement"]("p", null,
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, media_ui_messages["a" /* messages */].couldnt_generate_preview))))),
        unsupported: (react["createElement"]("div", null,
            cannotViewFileImage(formatMessage),
            react["createElement"]("p", null,
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, media_ui_messages["a" /* messages */].cant_preview_file_type))))),
        idNotFound: (react["createElement"]("div", null,
            errorLoadingFileImage(formatMessage),
            react["createElement"]("p", null,
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, media_ui_messages["a" /* messages */].item_not_found_in_list))))),
        noPDFArtifactsFound: (react["createElement"]("div", null,
            cannotViewFileImage(formatMessage),
            react["createElement"]("p", null,
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, media_ui_messages["a" /* messages */].no_pdf_artifacts))))),
    };
    return messages[errorName];
};
var MediaViewerError = /** @class */ (function () {
    function MediaViewerError(errorName, file, innerError) {
        this.errorName = errorName;
        this.file = file;
        this.innerError = innerError;
    }
    return MediaViewerError;
}());

var createError = function (name, innerError, file) {
    return new MediaViewerError(name, file, innerError);
};
var error_ErrorMessage = /** @class */ (function (_super) {
    tslib_es6["__extends"](ErrorMessage, _super);
    function ErrorMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(analytics["a" /* channel */]);
            }
        };
        return _this;
    }
    ErrorMessage.prototype.componentDidMount = function () {
        var _a = this.props.error, failReason = _a.errorName, file = _a.file;
        var fileId = file ? file.id : undefined;
        this.fireAnalytics(Object(item_viewer["d" /* mediaPreviewFailedEvent */])(failReason, fileId));
    };
    ErrorMessage.prototype.render = function () {
        var formatMessage = this.props.intl.formatMessage;
        var errorMessage = getErrorMessage(formatMessage, this.props.error.errorName);
        return (react["createElement"](styled["o" /* ErrorMessageWrapper */], null,
            errorMessage,
            this.props.children));
    };
    return ErrorMessage;
}(react["Component"]));

/* harmony default export */ var error = __webpack_exports__["b"] = (Object(withAnalyticsEvents["a" /* default */])()(Object(index_es["e" /* injectIntl */])(error_ErrorMessage)));
//# sourceMappingURL=error.js.map

/***/ }),

/***/ 954:
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

var CrossIcon = function CrossIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z\" fill=\"currentColor\"/></svg>"
  }, props));
};

CrossIcon.displayName = 'CrossIcon';
var _default = CrossIcon;
exports.default = _default;

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atlaskit_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(830);


var Spinner = function (_a) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_atlaskit_spinner__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], { invertColor: true, size: "large" })); };
//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 962:
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

var MediaServicesAudioIcon = function MediaServicesAudioIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><rect fill=\"currentColor\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M16 9.283V13.6h-.003A1.5 1.5 0 1 1 14.5 12c.175 0 .344.03.5.085v-2.08l-4 .431V14.6h-.003A1.5 1.5 0 0 1 8 14.5a1.5 1.5 0 0 1 2-1.415V9.034c0-.238.186-.451.432-.478l5.136-.553a.38.38 0 0 1 .432.384v.896z\" fill=\"inherit\"/></svg>"
  }, props));
};

MediaServicesAudioIcon.displayName = 'MediaServicesAudioIcon';
var _default = MediaServicesAudioIcon;
exports.default = _default;

/***/ }),

/***/ 972:
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

var MediaServicesImageIcon = function MediaServicesImageIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><rect fill=\"currentColor\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><circle fill=\"inherit\" cx=\"8.667\" cy=\"8.667\" r=\"2\"/><path fill=\"inherit\" d=\"M6.667 17.333l2.666-2.666L12 17.333z\"/><path fill=\"inherit\" d=\"M14.667 12l2.666 2.933v2.4h-8z\"/></g></svg>"
  }, props));
};

MediaServicesImageIcon.displayName = 'MediaServicesImageIcon';
var _default = MediaServicesImageIcon;
exports.default = _default;

/***/ }),

/***/ 973:
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

var MediaServicesDocumentIcon = function MediaServicesDocumentIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><rect fill=\"currentColor\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><rect fill=\"inherit\" x=\"7\" y=\"8\" width=\"10\" height=\"2\" rx=\"1\"/><rect fill=\"inherit\" x=\"7\" y=\"11\" width=\"10\" height=\"2\" rx=\"1\"/><rect fill=\"inherit\" x=\"7\" y=\"14\" width=\"5\" height=\"2\" rx=\"1\"/></g></svg>"
  }, props));
};

MediaServicesDocumentIcon.displayName = 'MediaServicesDocumentIcon';
var _default = MediaServicesDocumentIcon;
exports.default = _default;

/***/ }),

/***/ 974:
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

var MediaServicesUnknownIcon = function MediaServicesUnknownIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><rect fill=\"currentColor\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M12 11h3.502a.5.5 0 0 1 .498.491v4.518A.993.993 0 0 1 15 17H9.01C8.451 17 8 16.544 8 16.005v-8.01C8 7.445 8.443 7 9.01 7h2.5a.5.5 0 0 1 .49.51V11zm1-4l3 3h-3V7z\" fill=\"inherit\"/></g></svg>"
  }, props));
};

MediaServicesUnknownIcon.displayName = 'MediaServicesUnknownIcon';
var _default = MediaServicesUnknownIcon;
exports.default = _default;

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return closeOnDirectClick; });
function closeOnDirectClick(onClose) {
    return function (e) {
        if (e.target === e.currentTarget && onClose) {
            onClose();
        }
    };
}
//# sourceMappingURL=closeOnDirectClick.js.map

/***/ })

}]);