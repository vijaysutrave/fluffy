(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1100), __esModule: true };

/***/ }),

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';
	if (mix) {
		if (typeof mix === 'object') {
			if (!!mix.push) {
				for (k=0; k < mix.length; k++) {
					if (mix[k] && (y = toVal(mix[k]))) {
						str && (str += ' ');
						str += y;
					}
				}
			} else {
				for (k in mix) {
					if (mix[k] && (y = toVal(k))) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else if (typeof mix !== 'boolean' && !mix.call) {
			str && (str += ' ');
			str += mix;
		}
	}
	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, x, str='';
	while (i < arguments.length) {
		if (x = toVal(arguments[i++])) {
			str && (str += ' ');
			str += x
		}
	}
	return str;
});


/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_BACKWARD = undefined;
exports.default = defaultOverscanIndicesGetter;

var _types = __webpack_require__(943);

var SCROLL_DIRECTION_BACKWARD = exports.SCROLL_DIRECTION_BACKWARD = -1;

var SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_VERTICAL = 'vertical';

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}

/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultCellRangeRenderer;

var _types = __webpack_require__(943);

/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */

function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      isScrollingOptOut = _ref.isScrollingOptOut,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;

  var renderedCells = [];

  // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.
  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();

  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = rowIndex + '-' + columnIndex;
      var style = void 0;

      // Cache style objects so shallow-compare doesn't re-render unnecessarily.
      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };

          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };

      var renderedCell = void 0;

      // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      //
      // If isScrollingOptOut is specified, we always cache cells.
      // For more info refer to issue #1028
      if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key];

        // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (false) {}

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (false) {}
}

/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(400);
var TAG = __webpack_require__(176)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(215);
var aFunction = __webpack_require__(566);
var SPECIES = __webpack_require__(176)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(399);
var invoke = __webpack_require__(1128);
var html = __webpack_require__(575);
var cel = __webpack_require__(409);
var global = __webpack_require__(143);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(400)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ 1009:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ 1010:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(215);
var isObject = __webpack_require__(180);
var newPromiseCapability = __webpack_require__(981);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_RenderedRows = exports.bpfrpt_proptype_RowRenderer = exports.bpfrpt_proptype_RowRendererParams = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var bpfrpt_proptype_RowRendererParams =  true ? null : undefined;
var bpfrpt_proptype_RowRenderer =  true ? null : undefined;
var bpfrpt_proptype_RenderedRows =  true ? null : undefined;
var bpfrpt_proptype_Scroll =  true ? null : undefined;
exports.bpfrpt_proptype_RowRendererParams = bpfrpt_proptype_RowRendererParams;
exports.bpfrpt_proptype_RowRenderer = bpfrpt_proptype_RowRenderer;
exports.bpfrpt_proptype_RenderedRows = bpfrpt_proptype_RenderedRows;
exports.bpfrpt_proptype_Scroll = bpfrpt_proptype_Scroll;

/***/ }),

/***/ 1084:
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

var EmojiFrequentIcon = function EmojiFrequentIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M12 4c-4.412 0-8 3.588-8 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8zm0 14.222A6.23 6.23 0 0 1 5.778 12 6.23 6.23 0 0 1 12 5.778 6.23 6.23 0 0 1 18.222 12 6.23 6.23 0 0 1 12 18.222zm.889-6.59V8.448c0-.489-.4-.889-.889-.889s-.889.4-.889.89v3.555c0 .248.103.471.268.633l2.195 2.194a.891.891 0 0 0 1.257 0 .891.891 0 0 0 0-1.256l-1.942-1.943z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

EmojiFrequentIcon.displayName = 'EmojiFrequentIcon';
var _default = EmojiFrequentIcon;
exports.default = _default;

/***/ }),

/***/ 1085:
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

var EmojiPeopleIcon = function EmojiPeopleIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M12 4c-4.412 0-8 3.588-8 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8zm0 14.222A6.23 6.23 0 0 1 5.778 12 6.23 6.23 0 0 1 12 5.778 6.23 6.23 0 0 1 18.222 12 6.23 6.23 0 0 1 12 18.222zM14.83 14a3.001 3.001 0 0 1-5.66 0h5.66zM14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

EmojiPeopleIcon.displayName = 'EmojiPeopleIcon';
var _default = EmojiPeopleIcon;
exports.default = _default;

/***/ }),

/***/ 1086:
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

var EmojiNatureIcon = function EmojiNatureIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M13 16h3.625l-2.5-4h1.208L12 7l-3.333 5h1.208l-2.5 4H11v2h2v-2zm4.33-2.06l1.527 2.546A1 1 0 0 1 18 18h-3c-.003 1.105-.9 2-1.998 2h-2.004A1.999 1.999 0 0 1 9 18H6a1 1 0 0 1-.857-1.514L6.67 13.94c-.6-.23-.888-1.068-.484-1.697l5-7.778c.4-.62 1.229-.62 1.628 0l5 7.778c.404.629.117 1.467-.484 1.697z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

EmojiNatureIcon.displayName = 'EmojiNatureIcon';
var _default = EmojiNatureIcon;
exports.default = _default;

/***/ }),

/***/ 1087:
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

var EmojiFoodIcon = function EmojiFoodIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M9.425 4.798v.005L9.271 7H4.995a.881.881 0 0 0-.885.999L5.319 19c.06.552.556.999 1.108.999H17.99A2.006 2.006 0 0 0 20 18v-3.99A3.998 3.998 0 0 0 16.004 10H13.56l.294-2.001c.08-.552-.3-.999-.85-.999h-1.728l.075-1.07 3.002.21a1 1 0 0 0 1.058-.928.993.993 0 0 0-.919-1.067l-4.008-.28a1 1 0 0 0-1.059.933zM18 15v-1.002A2 2 0 0 0 16.002 12h-4.004A1.993 1.993 0 0 0 10 13.998V15h8zm0 2v1h-8v-1h8zm-6.111-6.999L12 9H6l1 9h1v-3.99A4.008 4.008 0 0 1 11.889 10z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

EmojiFoodIcon.displayName = 'EmojiFoodIcon';
var _default = EmojiFoodIcon;
exports.default = _default;

/***/ }),

/***/ 1088:
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

var EmojiActivityIcon = function EmojiActivityIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M15.677 16.738A5.97 5.97 0 0 1 12 18a5.97 5.97 0 0 1-3.677-1.262 6.329 6.329 0 0 0 1.982-4.589 6.33 6.33 0 0 0-2.157-4.746A5.973 5.973 0 0 1 12 6c1.465 0 2.808.528 3.851 1.403a6.33 6.33 0 0 0-2.156 4.746c0 1.751.736 3.41 1.982 4.589zm1.354-1.472c.613-.94.969-2.063.969-3.266 0-1.124-.31-2.176-.85-3.076a4.321 4.321 0 0 0-1.455 3.225c0 1.187.495 2.313 1.336 3.117zm-10.062 0A5.964 5.964 0 0 1 6 12c0-1.124.31-2.176.85-3.076a4.324 4.324 0 0 1 1.455 3.225 4.323 4.323 0 0 1-1.336 3.117zM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

EmojiActivityIcon.displayName = 'EmojiActivityIcon';
var _default = EmojiActivityIcon;
exports.default = _default;

/***/ }),

/***/ 1089:
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

var EmojiTravelIcon = function EmojiTravelIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M15.584 17H8.416l-2.708 2.709a1.004 1.004 0 0 1-1.415 0l-.002-.002a1.004 1.004 0 0 1 0-1.415l1.618-1.617A1.998 1.998 0 0 1 5 14.997V6.003C5 4.897 5.897 4 7.006 4h9.988C18.102 4 19 4.894 19 6.003v8.994a2 2 0 0 1-.909 1.678l1.618 1.617a1.004 1.004 0 0 1 0 1.415 1.004 1.004 0 0 1-1.417.002L15.584 17zM17 10V6H7v4h10zm0 2v3H7v-3h10zm-1.5 6.997c0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1zm.2-5.517a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-6.691 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

EmojiTravelIcon.displayName = 'EmojiTravelIcon';
var _default = EmojiTravelIcon;
exports.default = _default;

/***/ }),

/***/ 1090:
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

var EmojiObjectsIcon = function EmojiObjectsIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M11.998 4A5.997 5.997 0 0 0 6 9.998c0 2.218 2.288 4.484 2.288 4.484.39.387.71 1.112.71 1.611 0 .499.45.907 1 .907h4c.55 0 1-.408 1-.907 0-.499.32-1.224.71-1.611 0 0 2.288-2.266 2.288-4.484A5.997 5.997 0 0 0 11.998 4zm0 2a4.003 4.003 0 0 1 3.998 3.998c0 1.029-1.145 2.511-1.695 3.064-.507.501-.912 1.216-1.13 1.938h-2.346c-.217-.722-.622-1.435-1.125-1.934-.555-.557-1.7-2.039-1.7-3.068A4.003 4.003 0 0 1 11.998 6zm2.965 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v.003c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V19z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

EmojiObjectsIcon.displayName = 'EmojiObjectsIcon';
var _default = EmojiObjectsIcon;
exports.default = _default;

/***/ }),

/***/ 1091:
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

var EmojiSymbolsIcon = function EmojiSymbolsIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M12 9.44l1.76-1.744a2.505 2.505 0 0 1 3.52 0 2.451 2.451 0 0 1 0 3.488L12 16.417l-5.28-5.232a2.451 2.451 0 0 1 0-3.49 2.505 2.505 0 0 1 3.52 0v.001L12 9.44zm-6.684 3.143l.003.004 6.322 6.266a.508.508 0 0 0 .718 0l6.322-6.266.003-.004.004-.003a4.412 4.412 0 0 0 0-6.28 4.509 4.509 0 0 0-6.336 0l-.003.004-.004.003L12 6.65l-.345-.342-.004-.003-.003-.003a4.509 4.509 0 0 0-6.336 0 4.412 4.412 0 0 0 0 6.279l.004.003z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

EmojiSymbolsIcon.displayName = 'EmojiSymbolsIcon';
var _default = EmojiSymbolsIcon;
exports.default = _default;

/***/ }),

/***/ 1092:
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

var EmojiFlagsIcon = function EmojiFlagsIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M6 12.235v6.446c0 .537.45.977 1 .977s1-.44 1-.977v-5.778c1.17-.341 2.389-.045 3.768.29.982.238 2.036.495 3.13.495a5.73 5.73 0 0 0 2.547-.567 1 1 0 0 0 .563-.9V5.466a.998.998 0 0 0-1.437-.9c-1.345.654-2.731.317-4.331-.071-1.729-.42-3.687-.895-5.678.072A1 1 0 0 0 6 5.466v6.769zm3.111-1.48c1.094 0 2.148.256 3.129.495 1.381.335 2.6.63 3.768.289V6.836c-1.488.27-2.93-.08-4.24-.398-1.379-.335-2.598-.632-3.768-.29v4.704a6.195 6.195 0 0 1 1.111-.097z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

EmojiFlagsIcon.displayName = 'EmojiFlagsIcon';
var _default = EmojiFlagsIcon;
exports.default = _default;

/***/ }),

/***/ 1093:
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

var EmojiProductivityIcon = function EmojiProductivityIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" focusable=\"false\" role=\"presentation\"><g fill=\"currentColor\"><path d=\"M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 2a8 8 0 1 1 0-16 8 8 0 0 1 0 16z\"/><path d=\"M14.301 9.485a1 1 0 0 1 1.398 1.43l-4.261 4.166a1 1 0 0 1-1.406-.008l-2.04-2.04a1 1 0 1 1 1.415-1.413l1.34 1.34L14.3 9.484z\"/></g></svg>"
  }, props));
};

EmojiProductivityIcon.displayName = 'EmojiProductivityIcon';
var _default = EmojiProductivityIcon;
exports.default = _default;

/***/ }),

/***/ 1094:
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

var EmojiCustomIcon = function EmojiCustomIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M13 11V7.002a.999.999 0 1 0-2 0V11H7.002a.999.999 0 1 0 0 2H11v3.998a.999.999 0 1 0 2 0V13h3.998a.999.999 0 1 0 0-2H13z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

EmojiCustomIcon.displayName = 'EmojiCustomIcon';
var _default = EmojiCustomIcon;
exports.default = _default;

/***/ }),

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_RowRendererParams = exports.List = exports.default = undefined;

var _List = __webpack_require__(1096);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_List).default;
  }
});
Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_List).default;
  }
});

var _types = __webpack_require__(1011);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.bpfrpt_proptype_RowRendererParams = _types.bpfrpt_proptype_RowRendererParams;

/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(147);

var _extends3 = _interopRequireDefault(_extends2);

var _getOwnPropertyDescriptor = __webpack_require__(1097);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(1002);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(184);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(963);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(148);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(187);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Grid = __webpack_require__(1105);

var _Grid2 = _interopRequireDefault(_Grid);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _clsx = __webpack_require__(1003);

var _clsx2 = _interopRequireDefault(_clsx);

var _types = __webpack_require__(1011);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = function (_React$PureComponent) {
  (0, _inherits3.default)(List, _React$PureComponent);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = List.__proto__ || (0, _getPrototypeOf2.default)(List)).call.apply(_ref, [this].concat(args))), _this), _this._cellRenderer = function (_ref2) {
      var parent = _ref2.parent,
          rowIndex = _ref2.rowIndex,
          style = _ref2.style,
          isScrolling = _ref2.isScrolling,
          isVisible = _ref2.isVisible,
          key = _ref2.key;
      var rowRenderer = _this.props.rowRenderer;

      // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = (0, _getOwnPropertyDescriptor2.default)(style, 'width'),
          writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    }, _this._setRef = function (ref) {
      _this.Grid = ref;
    }, _this._onScroll = function (_ref3) {
      var clientHeight = _ref3.clientHeight,
          scrollHeight = _ref3.scrollHeight,
          scrollTop = _ref3.scrollTop;
      var onScroll = _this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }, _this._onSectionRendered = function (_ref4) {
      var rowOverscanStartIndex = _ref4.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref4.rowOverscanStopIndex,
          rowStartIndex = _ref4.rowStartIndex,
          rowStopIndex = _ref4.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(List, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref5) {
      var alignment = _ref5.alignment,
          index = _ref5.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            _scrollTop = _Grid$getOffsetForCel.scrollTop;

        return _scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$columnIndex = _ref7.columnIndex,
          columnIndex = _ref7$columnIndex === undefined ? 0 : _ref7$columnIndex,
          _ref7$rowIndex = _ref7.rowIndex,
          rowIndex = _ref7$rowIndex === undefined ? 0 : _ref7$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          noRowsRenderer = _props.noRowsRenderer,
          scrollToIndex = _props.scrollToIndex,
          width = _props.width;


      var classNames = (0, _clsx2.default)('ReactVirtualized__List', className);

      return React.createElement(_Grid2.default, (0, _extends3.default)({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);
  return List;
}(React.PureComponent);

List.defaultProps = {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: _Grid.accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
List.propTypes =  true ? null : undefined;
exports.default = List;

/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1098), __esModule: true };

/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1099);
var $Object = __webpack_require__(162).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(183);
var $getOwnPropertyDescriptor = __webpack_require__(410).f;

__webpack_require__(979)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1101);
module.exports = __webpack_require__(162).Object.getPrototypeOf;


/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(305);
var $getPrototypeOf = __webpack_require__(576);

__webpack_require__(979)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1103), __esModule: true };

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1104);
var $Object = __webpack_require__(162).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(214);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(164), 'Object', { defineProperty: __webpack_require__(179).f });


/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_CellRendererParams = exports.bpfrpt_proptype_RenderedSection = exports.bpfrpt_proptype_OverscanIndicesGetter = exports.bpfrpt_proptype_CellSize = exports.bpfrpt_proptype_CellPosition = exports.bpfrpt_proptype_Alignment = exports.bpfrpt_proptype_NoContentRenderer = exports.defaultOverscanIndicesGetter = exports.defaultCellRangeRenderer = exports.accessibilityOverscanIndicesGetter = exports.Grid = exports.default = undefined;

var _Grid = __webpack_require__(1106);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grid).default;
  }
});
Object.defineProperty(exports, 'Grid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grid).default;
  }
});

var _accessibilityOverscanIndicesGetter = __webpack_require__(1137);

Object.defineProperty(exports, 'accessibilityOverscanIndicesGetter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_accessibilityOverscanIndicesGetter).default;
  }
});

var _defaultCellRangeRenderer = __webpack_require__(1005);

Object.defineProperty(exports, 'defaultCellRangeRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defaultCellRangeRenderer).default;
  }
});

var _defaultOverscanIndicesGetter = __webpack_require__(1004);

Object.defineProperty(exports, 'defaultOverscanIndicesGetter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defaultOverscanIndicesGetter).default;
  }
});

var _types = __webpack_require__(943);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.bpfrpt_proptype_NoContentRenderer = _types.bpfrpt_proptype_NoContentRenderer;
exports.bpfrpt_proptype_Alignment = _types.bpfrpt_proptype_Alignment;
exports.bpfrpt_proptype_CellPosition = _types.bpfrpt_proptype_CellPosition;
exports.bpfrpt_proptype_CellSize = _types.bpfrpt_proptype_CellSize;
exports.bpfrpt_proptype_OverscanIndicesGetter = _types.bpfrpt_proptype_OverscanIndicesGetter;
exports.bpfrpt_proptype_RenderedSection = _types.bpfrpt_proptype_RenderedSection;
exports.bpfrpt_proptype_CellRendererParams = _types.bpfrpt_proptype_CellRendererParams;
exports.bpfrpt_proptype_Scroll = _types.bpfrpt_proptype_Scroll;

/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = undefined;

var _assign = __webpack_require__(572);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(147);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(1002);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(184);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(963);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(148);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(187);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _clsx = __webpack_require__(1003);

var _clsx2 = _interopRequireDefault(_clsx);

var _calculateSizeAndPositionDataAndUpdateScrollOffset = __webpack_require__(1107);

var _calculateSizeAndPositionDataAndUpdateScrollOffset2 = _interopRequireDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset);

var _ScalingCellSizeAndPositionManager = __webpack_require__(980);

var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);

var _createCallbackMemoizer = __webpack_require__(1112);

var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);

var _defaultOverscanIndicesGetter = __webpack_require__(1004);

var _defaultOverscanIndicesGetter2 = _interopRequireDefault(_defaultOverscanIndicesGetter);

var _updateScrollIndexHelper = __webpack_require__(1116);

var _updateScrollIndexHelper2 = _interopRequireDefault(_updateScrollIndexHelper);

var _defaultCellRangeRenderer = __webpack_require__(1005);

var _defaultCellRangeRenderer2 = _interopRequireDefault(_defaultCellRangeRenderer);

var _scrollbarSize = __webpack_require__(1117);

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _reactLifecyclesCompat = __webpack_require__(412);

var _requestAnimationTimeout = __webpack_require__(1119);

var _types = __webpack_require__(943);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */


var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

var renderNull = function renderNull() {
  return null;
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var Grid = function (_React$PureComponent) {
  (0, _inherits3.default)(Grid, _React$PureComponent);

  // Invokes onSectionRendered callback only when start/stop row or column indices change
  function Grid(props) {
    (0, _classCallCheck3.default)(this, Grid);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).call(this, props));

    _this._onGridRenderedMemoizer = (0, _createCallbackMemoizer2.default)();
    _this._onScrollMemoizer = (0, _createCallbackMemoizer2.default)(false);
    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;
    _this._recomputeScrollLeftFlag = false;
    _this._recomputeScrollTopFlag = false;
    _this._horizontalScrollBarSize = 0;
    _this._verticalScrollBarSize = 0;
    _this._scrollbarPresenceChanged = false;
    _this._renderedColumnStartIndex = 0;
    _this._renderedColumnStopIndex = 0;
    _this._renderedRowStartIndex = 0;
    _this._renderedRowStopIndex = 0;
    _this._styleCache = {};
    _this._cellCache = {};

    _this._debounceScrollEndedCallback = function () {
      _this._disablePointerEventsTimeoutId = null;
      // isScrolling is used to determine if we reset styleCache
      _this.setState({
        isScrolling: false,
        needToResetStyleCache: false
      });
    };

    _this._invokeOnGridRenderedHelper = function () {
      var onSectionRendered = _this.props.onSectionRendered;


      _this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    };

    _this._setScrollingContainerRef = function (ref) {
      _this._scrollingContainer = ref;
    };

    _this._onScroll = function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    };

    var columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.columnWidth)(params);
      },
      estimatedCellSize: Grid._getEstimatedColumnSize(props)
    });
    var rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.rowHeight)(params);
      },
      estimatedCellSize: Grid._getEstimatedRowSize(props)
    });

    _this.state = {
      instanceProps: {
        columnSizeAndPositionManager: columnSizeAndPositionManager,
        rowSizeAndPositionManager: rowSizeAndPositionManager,

        prevColumnWidth: props.columnWidth,
        prevRowHeight: props.rowHeight,
        prevColumnCount: props.columnCount,
        prevRowCount: props.rowCount,
        prevIsScrolling: props.isScrolling === true,
        prevScrollToColumn: props.scrollToColumn,
        prevScrollToRow: props.scrollToRow,
        prevScrollLeft: props.scrollLeft,
        prevScrollTop: props.scrollTop,

        scrollbarSize: 0,
        scrollbarSizeMeasured: false
      },
      isScrolling: false,
      scrollDirectionHorizontal: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
      scrollDirectionVertical: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
      scrollLeft: props.scrollLeft || 0,
      scrollTop: props.scrollTop || 0,
      scrollPositionChangeReason: null,

      needToResetStyleCache: false
    };

    if (props.scrollToRow > 0) {
      _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
    }
    if (props.scrollToColumn > 0) {
      _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
    }
    return _this;
  }

  /**
   * Gets offsets for a given cell and alignment.
   */


  (0, _createClass3.default)(Grid, [{
    key: 'getOffsetForCell',
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alignment = _ref.alignment,
          alignment = _ref$alignment === undefined ? this.props.scrollToAlignment : _ref$alignment,
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === undefined ? this.props.scrollToColumn : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === undefined ? this.props.scrollToRow : _ref$rowIndex;

      var offsetProps = (0, _extends3.default)({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }

    /**
     * Gets estimated total rows' height.
     */

  }, {
    key: 'getTotalRowsHeight',
    value: function getTotalRowsHeight() {
      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    }

    /**
     * Gets estimated total columns' width.
     */

  }, {
    key: 'getTotalColumnsWidth',
    value: function getTotalColumnsWidth() {
      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    }

    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */

  }, {
    key: 'handleScrollEvent',
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeftParam = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTopParam = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceScrollEnded();

      var _props = this.props,
          autoHeight = _props.autoHeight,
          autoWidth = _props.autoWidth,
          height = _props.height,
          width = _props.width;
      var instanceProps = this.state.instanceProps;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = instanceProps.scrollbarSize;
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam);

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var _scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal;
        var _scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical;

        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: _scrollDirectionHorizontal,
          scrollDirectionVertical: _scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }

        newState.needToResetStyleCache = false;
        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalColumnsWidth: totalColumnsWidth,
        totalRowsHeight: totalRowsHeight
      });
    }

    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      var _props2 = this.props,
          columnCount = _props2.columnCount,
          rowCount = _props2.rowCount;
      var instanceProps = this.state.instanceProps;

      instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }

    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$columnIndex = _ref4.columnIndex,
          columnIndex = _ref4$columnIndex === undefined ? 0 : _ref4$columnIndex,
          _ref4$rowIndex = _ref4.rowIndex,
          rowIndex = _ref4$rowIndex === undefined ? 0 : _ref4$rowIndex;

      var _props3 = this.props,
          scrollToColumn = _props3.scrollToColumn,
          scrollToRow = _props3.scrollToRow;
      var instanceProps = this.state.instanceProps;


      instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
      instanceProps.rowSizeAndPositionManager.resetCell(rowIndex);

      // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
      this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? rowIndex <= scrollToRow : rowIndex >= scrollToRow);

      // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.
      this._styleCache = {};
      this._cellCache = {};

      this.forceUpdate();
    }

    /**
     * Ensure column and row are visible.
     */

  }, {
    key: 'scrollToCell',
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;


      var props = this.props;

      // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.
      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn((0, _extends3.default)({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow((0, _extends3.default)({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props4 = this.props,
          getScrollbarSize = _props4.getScrollbarSize,
          height = _props4.height,
          scrollLeft = _props4.scrollLeft,
          scrollToColumn = _props4.scrollToColumn,
          scrollTop = _props4.scrollTop,
          scrollToRow = _props4.scrollToRow,
          width = _props4.width;
      var instanceProps = this.state.instanceProps;

      // Reset initial offsets to be ignored in browser

      this._initialScrollTop = 0;
      this._initialScrollLeft = 0;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.
      this._handleInvalidatedGridSize();

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.
      if (!instanceProps.scrollbarSizeMeasured) {
        this.setState(function (prevState) {
          var stateUpdate = (0, _extends3.default)({}, prevState, { needToResetStyleCache: false });
          stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
          stateUpdate.instanceProps.scrollbarSizeMeasured = true;
          return stateUpdate;
        });
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        var stateUpdate = Grid._getScrollToPositionStateUpdate({
          prevState: this.state,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
        if (stateUpdate) {
          stateUpdate.needToResetStyleCache = false;
          this.setState(stateUpdate);
        }
      }

      // refs don't work in `react-test-renderer`
      if (this._scrollingContainer) {
        // setting the ref's scrollLeft and scrollTop.
        // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
        if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
          this._scrollingContainer.scrollLeft = this.state.scrollLeft;
        }
        if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
          this._scrollingContainer.scrollTop = this.state.scrollTop;
        }
      }

      // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.
      var sizeIsBiggerThanZero = height > 0 && width > 0;
      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }
      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      }

      // Update onRowsRendered callback
      this._invokeOnGridRenderedHelper();

      // Initialize onScroll callback
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props5 = this.props,
          autoHeight = _props5.autoHeight,
          autoWidth = _props5.autoWidth,
          columnCount = _props5.columnCount,
          height = _props5.height,
          rowCount = _props5.rowCount,
          scrollToAlignment = _props5.scrollToAlignment,
          scrollToColumn = _props5.scrollToColumn,
          scrollToRow = _props5.scrollToRow,
          width = _props5.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop,
          instanceProps = _state.instanceProps;
      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218
      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.
      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.
      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0;

      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;
        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        (0, _updateScrollIndexHelper2.default)({
          cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;
        this._updateScrollTopForScrollToRow(this.props);
      } else {
        (0, _updateScrollIndexHelper2.default)({
          cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnGridRenderedHelper();

      // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          totalColumnsWidth: totalColumnsWidth,
          totalRowsHeight: totalRowsHeight
        });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          autoContainerWidth = _props6.autoContainerWidth,
          autoHeight = _props6.autoHeight,
          autoWidth = _props6.autoWidth,
          className = _props6.className,
          containerProps = _props6.containerProps,
          containerRole = _props6.containerRole,
          containerStyle = _props6.containerStyle,
          height = _props6.height,
          id = _props6.id,
          noContentRenderer = _props6.noContentRenderer,
          role = _props6.role,
          style = _props6.style,
          tabIndex = _props6.tabIndex,
          width = _props6.width;
      var _state2 = this.state,
          instanceProps = _state2.instanceProps,
          needToResetStyleCache = _state2.needToResetStyleCache;


      var isScrolling = this._isScrolling();

      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      if (needToResetStyleCache) {
        this._styleCache = {};
      }

      // calculate _styleCache here
      // if state.isScrolling (not from _isScrolling) then reset
      if (!this.state.isScrolling) {
        this._resetStyleCache();
      }

      // calculate children to render here
      this._calculateChildrenToRender(this.props, this.state);

      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      }

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      var childrenToDisplay = this._childrenToDisplay;

      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;

      return React.createElement(
        'div',
        (0, _extends3.default)({
          ref: this._setScrollingContainerRef
        }, containerProps, {
          'aria-label': this.props['aria-label'],
          'aria-readonly': this.props['aria-readonly'],
          className: (0, _clsx2.default)('ReactVirtualized__Grid', className),
          id: id,
          onScroll: this._onScroll,
          role: role,
          style: (0, _extends3.default)({}, gridStyle, style),
          tabIndex: tabIndex }),
        childrenToDisplay.length > 0 && React.createElement(
          'div',
          {
            className: 'ReactVirtualized__Grid__innerScrollContainer',
            role: containerRole,
            style: (0, _extends3.default)({
              width: autoContainerWidth ? 'auto' : totalColumnsWidth,
              height: totalRowsHeight,
              maxWidth: totalColumnsWidth,
              maxHeight: totalRowsHeight,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              position: 'relative'
            }, containerStyle) },
          childrenToDisplay
        ),
        showNoContentRenderer && noContentRenderer()
      );
    }

    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: '_calculateChildrenToRender',
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width,
          isScrollingOptOut = props.isScrollingOptOut;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          instanceProps = state.instanceProps;


      var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
      var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;

      var isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = [];

      // Render only enough columns and rows to cover the visible area of the grid.
      if (height > 0 && width > 0) {
        var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });

        var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        });

        // Store for _invokeOnGridRenderedHelper()
        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;

        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
          stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
        });

        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
          stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
        });

        // Store for _invokeOnGridRenderedHelper()
        var columnStartIndex = overscanColumnIndices.overscanStartIndex;
        var columnStopIndex = overscanColumnIndices.overscanStopIndex;
        var rowStartIndex = overscanRowIndices.overscanStartIndex;
        var rowStopIndex = overscanRowIndices.overscanStopIndex;

        // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
        if (deferredMeasurementCache) {
          // If rows have a dynamic height, scan the rows we are about to render.
          // If any have not yet been measured, then we need to render all columns initially,
          // Because the height of the row is equal to the tallest cell within that row,
          // (And so we can't know the height without measuring all column-cells first).
          if (!deferredMeasurementCache.hasFixedHeight()) {
            for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
              if (!deferredMeasurementCache.has(rowIndex, 0)) {
                columnStartIndex = 0;
                columnStopIndex = columnCount - 1;
                break;
              }
            }
          }

          // If columns have a dynamic width, scan the columns we are about to render.
          // If any have not yet been measured, then we need to render all rows initially,
          // Because the width of the column is equal to the widest cell within that column,
          // (And so we can't know the width without measuring all row-cells first).
          if (!deferredMeasurementCache.hasFixedWidth()) {
            for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
              if (!deferredMeasurementCache.has(0, columnIndex)) {
                rowStartIndex = 0;
                rowStopIndex = rowCount - 1;
                break;
              }
            }
          }
        }

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          columnStartIndex: columnStartIndex,
          columnStopIndex: columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          isScrollingOptOut: isScrollingOptOut,
          parent: this,
          rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          rowStartIndex: rowStartIndex,
          rowStopIndex: rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        });

        // update the indices
        this._columnStartIndex = columnStartIndex;
        this._columnStopIndex = columnStopIndex;
        this._rowStartIndex = rowStartIndex;
        this._rowStopIndex = rowStopIndex;
      }
    }

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_debounceScrollEnded',
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;


      if (this._disablePointerEventsTimeoutId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = (0, _requestAnimationTimeout.requestAnimationTimeout)(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_handleInvalidatedGridSize',


    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({ columnIndex: columnIndex, rowIndex: rowIndex });
      }
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this3 = this;

      var scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop,
          totalColumnsWidth = _ref6.totalColumnsWidth,
          totalRowsHeight = _ref6.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft = _ref7.scrollLeft,
              scrollTop = _ref7.scrollTop;
          var _props7 = _this3.props,
              height = _props7.height,
              onScroll = _props7.onScroll,
              width = _props7.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_isScrolling',
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: '_maybeCallOnScrollbarPresenceChange',
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var _onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;


        this._scrollbarPresenceChanged = false;

        _onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this.state.instanceProps.scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: 'scrollToPosition',


    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft,
          scrollTop = _ref8.scrollTop;

      var stateUpdate = Grid._getScrollToPositionStateUpdate({
        prevState: this.state,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: '_getCalculatedScrollLeft',
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      return Grid._getCalculatedScrollLeft(props, state);
    }
  }, {
    key: '_updateScrollLeftForScrollToColumn',
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: '_getCalculatedScrollTop',
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      return Grid._getCalculatedScrollTop(props, state);
    }
  }, {
    key: '_resetStyleCache',
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;
      var cellCache = this._cellCache;
      var isScrollingOptOut = this.props.isScrollingOptOut;

      // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
      // This keeps the cellCache to a resonable size.

      this._cellCache = {};
      this._styleCache = {};

      // Copy over the visible cell styles so avoid unnecessary re-render.
      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = rowIndex + '-' + columnIndex;
          this._styleCache[key] = styleCache[key];

          if (isScrollingOptOut) {
            this._cellCache[key] = cellCache[key];
          }
        }
      }
    }
  }, {
    key: '_updateScrollTopForScrollToRow',
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};
      var instanceProps = prevState.instanceProps;


      if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
        newState.scrollLeft = 0;
        newState.scrollTop = 0;

        // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
        // scrollTo{Column,Row} should override scroll{Left,Top}
      } else if (nextProps.scrollLeft !== instanceProps.prevScrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== instanceProps.prevScrollTop && nextProps.scrollToRow < 0) {
        (0, _assign2.default)(newState, Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        }));
      }

      // Initially we should not clearStyleCache
      newState.needToResetStyleCache = false;
      if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) {
        // Reset cache. set it to {} in render
        newState.needToResetStyleCache = true;
      }

      instanceProps.columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
      });

      instanceProps.rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
      });

      if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
        instanceProps.prevColumnCount = 0;
        instanceProps.prevRowCount = 0;
      }

      // If scrolling is controlled outside this component, clear cache when scrolling stops
      if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
        (0, _assign2.default)(newState, {
          isScrolling: false
        });
      }

      var maybeStateA = void 0;
      var maybeStateB = void 0;

      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
        cellCount: instanceProps.prevColumnCount,
        cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: instanceProps.prevScrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
        }
      });
      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
        cellCount: instanceProps.prevRowCount,
        cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: instanceProps.prevScrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
        }
      });

      instanceProps.prevColumnCount = nextProps.columnCount;
      instanceProps.prevColumnWidth = nextProps.columnWidth;
      instanceProps.prevIsScrolling = nextProps.isScrolling === true;
      instanceProps.prevRowCount = nextProps.rowCount;
      instanceProps.prevRowHeight = nextProps.rowHeight;
      instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
      instanceProps.prevScrollToRow = nextProps.scrollToRow;
      instanceProps.prevScrollLeft = nextProps.scrollLeft;
      instanceProps.prevScrollTop = nextProps.scrollTop;

      // getting scrollBarSize (moved from componentWillMount)
      instanceProps.scrollbarSize = nextProps.getScrollbarSize();
      if (instanceProps.scrollbarSize === undefined) {
        instanceProps.scrollbarSizeMeasured = false;
        instanceProps.scrollbarSize = 0;
      } else {
        instanceProps.scrollbarSizeMeasured = true;
      }

      newState.instanceProps = instanceProps;

      return (0, _extends3.default)({}, newState, maybeStateA, maybeStateB);
    }
  }, {
    key: '_getEstimatedColumnSize',
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: '_getEstimatedRowSize',
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }
  }, {
    key: '_getScrollToPositionStateUpdate',


    /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */
    value: function _getScrollToPositionStateUpdate(_ref9) {
      var prevState = _ref9.prevState,
          scrollLeft = _ref9.scrollLeft,
          scrollTop = _ref9.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollLeft = scrollLeft;
      }

      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollTop = scrollTop;
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
        return newState;
      }
      return null;
    }
  }, {
    key: '_wrapSizeGetter',
    value: function _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: '_getCalculatedScrollLeft',
    value: function _getCalculatedScrollLeft(nextProps, prevState) {
      var columnCount = nextProps.columnCount,
          height = nextProps.height,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToColumn = nextProps.scrollToColumn,
          width = nextProps.width;
      var scrollLeft = prevState.scrollLeft,
          instanceProps = prevState.instanceProps;


      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;

        return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }
      return 0;
    }
  }, {
    key: '_getScrollLeftForScrollToColumnStateUpdate',
    value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
      var scrollLeft = prevState.scrollLeft;

      var calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);

      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }
      return null;
    }
  }, {
    key: '_getCalculatedScrollTop',
    value: function _getCalculatedScrollTop(nextProps, prevState) {
      var height = nextProps.height,
          rowCount = nextProps.rowCount,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToRow = nextProps.scrollToRow,
          width = nextProps.width;
      var scrollTop = prevState.scrollTop,
          instanceProps = prevState.instanceProps;


      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

        return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }
      return 0;
    }
  }, {
    key: '_getScrollTopForScrollToRowStateUpdate',
    value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
      var scrollTop = prevState.scrollTop;

      var calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);

      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }
      return null;
    }
  }]);
  return Grid;
}(React.PureComponent);

Grid.defaultProps = {
  'aria-label': 'grid',
  'aria-readonly': true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: _defaultCellRangeRenderer2.default,
  containerRole: 'rowgroup',
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: _scrollbarSize2.default,
  noContentRenderer: renderNull,
  onScroll: function onScroll() {},
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
  onSectionRendered: function onSectionRendered() {},
  overscanColumnCount: 0,
  overscanIndicesGetter: _defaultOverscanIndicesGetter2.default,
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0,
  isScrollingOptOut: false
};
Grid.propTypes =  true ? null : undefined;


(0, _reactLifecyclesCompat.polyfill)(Grid);
exports.default = Grid;

/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculateSizeAndPositionDataAndUpdateScrollOffset;
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps);

    // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.
    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/**
 * Helper method that determines when to recalculate row or column metadata.
 */

/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(184);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(963);

var _createClass3 = _interopRequireDefault(_createClass2);

var _linearLayoutVector = __webpack_require__(1110);

var _linearLayoutVector2 = _interopRequireDefault(_linearLayoutVector);

var _types = __webpack_require__(943);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */

var CellSizeAndPositionManager = function () {

  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
  function CellSizeAndPositionManager(_ref) {
    var cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;
    (0, _classCallCheck3.default)(this, CellSizeAndPositionManager);
    this._lastMeasuredIndex = -1;

    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
    this._layoutVector = new _linearLayoutVector2.default();
    this._layoutVector.setLength(cellCount);
    this._layoutVector.setDefaultSize(estimatedCellSize);
  }
  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex


  (0, _createClass3.default)(CellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: 'configure',
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize,
          cellSizeGetter = _ref2.cellSizeGetter;

      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
      this._cellSizeGetter = cellSizeGetter;
      this._layoutVector.setLength(cellCount);
      this._layoutVector.setDefaultSize(estimatedCellSize);
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment() {
      return 0;
    }

    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
      }
      var vector = this._layoutVector;
      if (index > this._lastMeasuredIndex) {
        var token = { index: this._lastMeasuredIndex + 1 };

        for (var i = token.index; i <= index; token.index = ++i) {
          var _size = this._cellSizeGetter(token);
          // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.
          if (_size === undefined || _size !== _size) {
            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
          } else if (_size !== null) {
            vector.setItemSize(i, _size);
          }
        }
        this._lastMeasuredIndex = Math.min(index, this._cellCount - 1);
      }

      return {
        offset: vector.start(index),
        size: vector.getItemSize(index)
      };
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      var index = this._lastMeasuredIndex;
      if (index <= 0) {
        return {
          offset: 0,
          size: 0
        };
      }
      var vector = this._layoutVector;
      return {
        offset: vector.start(index),
        size: vector.getItemSize(index)
      };
    }

    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      var lastIndex = this._cellCount - 1;
      return lastIndex >= 0 ? this._layoutVector.end(lastIndex) : 0;
    }

    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;

      var idealOffset = void 0;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;
        case 'end':
          idealOffset = minOffset;
          break;
        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();

      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(params) {
      if (this.getTotalSize() === 0) {
        return {};
      }

      var containerSize = params.containerSize,
          offset = params.offset;

      var maxOffset = offset + containerSize - 1;
      return {
        start: this._findNearestCell(offset),
        stop: this._findNearestCell(maxOffset)
      };
    }

    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }

    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: '_findNearestCell',
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error('Invalid offset ' + offset + ' specified');
      }

      var vector = this._layoutVector;
      var lastIndex = this._cellCount - 1;
      // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.
      var targetOffset = Math.max(0, Math.min(offset, vector.start(lastIndex)));
      // First interrogate the constant-time lookup table
      var nearestCellIndex = vector.indexOf(targetOffset);

      // If we haven't yet measured this high, compute sizes for each cell up to the desired offset.
      while (nearestCellIndex > this._lastMeasuredIndex) {
        // Measure all the cells up to the one we want to find presently.
        // Do this before the last-index check to ensure the sparse array
        // is fully populated.
        this.getSizeAndPositionOfCell(nearestCellIndex);
        // No need to search and compare again if we're at the end.
        if (nearestCellIndex === lastIndex) {
          return nearestCellIndex;
        }
        nearestCellIndex = vector.indexOf(targetOffset);
        // Guard in case `getSizeAndPositionOfCell` didn't fully measure to
        // the nearestCellIndex. This might happen scrolling quickly down
        // and back up on large lists -- possible race with React or DOM?
        if (nearestCellIndex === -1) {
          nearestCellIndex = this._lastMeasuredIndex;
          this._lastMeasuredIndex = nearestCellIndex - 1;
          targetOffset = Math.max(0, Math.min(offset, vector.start(lastIndex)));
        }
      }

      return nearestCellIndex;
    }
  }]);
  return CellSizeAndPositionManager;
}();

exports.default = CellSizeAndPositionManager;

/***/ }),

/***/ 1110:
/***/ (function(module, exports) {

module.exports = LinearLayoutVector;

LinearLayoutVector.prototype.getLength = getLength;
LinearLayoutVector.prototype.setLength = setLength;
LinearLayoutVector.prototype.getDefaultSize = getDefaultSize;
LinearLayoutVector.prototype.setDefaultSize = setDefaultSize;
LinearLayoutVector.prototype.getAxisOffset = getAxisOffset;
LinearLayoutVector.prototype.setAxisOffset = setAxisOffset;
LinearLayoutVector.prototype.getGap = getGap;
LinearLayoutVector.prototype.setGap = setGap;
LinearLayoutVector.prototype.getItemSize = getItemSize;
LinearLayoutVector.prototype.setItemSize = setItemSize;
LinearLayoutVector.prototype.insert = insert;
LinearLayoutVector.prototype.remove = remove;
LinearLayoutVector.prototype.start = start;
LinearLayoutVector.prototype.end = end;
LinearLayoutVector.prototype.indexOf = indexOf;
LinearLayoutVector.prototype.clear = clear;
LinearLayoutVector.prototype.toString = toString;

/**
 * A sparse array of sizes that represent items in a dimension.
 *
 * Provides efficient support for finding the cumulative distance to
 * the start/end of an item along the axis, and similarly for finding the
 * index of the item at a particular distance.
 *
 * Default size is used for items whose size hasn't been specified.
 */
function LinearLayoutVector(block_size) {

    if(block_size === undefined) {
        block_size = 128;
    }

    // Assumption: vector elements (sizes) will typically be set in
    // small ranges that reflect localized scrolling.  Allocate vector
    // elements in blocks of block_size, which must be a power of 2.
    // block_shift is the power of 2 and block_mask masks off as many
    // low order bits.  The block_table contains all of the allocated
    // blocks and has length/block_size elements which are allocated lazily.
    var pow = (Math.log(block_size) / Math.log(2)) | 0,
        size = Math.pow(2, pow),
        mask = size - 1;

    this.block_size  = size;
    this.block_shift = pow;
    this.block_mask  = mask;
    this.block_table = [];

    this._defaultSize = 0;
    this._axisOffset = 0;
    this._gap = 0;

    // Sorted Vector of intervals for the pending removes, in descending order,
    // for example [7, 5, 3, 1] for the removes at 7, 6, 5, 3, 2, 1
    this.removes = null;
    // Sorted Vector of intervals for the pending inserts, in ascending order,
    // for example [1, 3, 5, 7] for the inserts at 1, 2, 3, 5, 6, 7
    this.inserts = null;

    this._length = 0;
    // What the length will be after any pending changes are flushed.
    this._pendingLength = -1;
}

/**
 * The number of item size valued elements.
 *
 * @default 0
 */
function getLength() {
    return this._pendingLength === -1 ? this._length : this._pendingLength;
}

/**
 * @private
 * Grows or truncates the vector to be the specified newLength.
 * When truncating, releases empty blocks and sets to NaN any values
 * in the last block beyond the newLength.
 */
function setLength(newLength) {
    flushPendingChanges.call(this);

    if(newLength < this._length) {
        // Clear any remaining non-NaN values in the last block
        var blockIndex = newLength >> this.block_shift;
        var endIndex = Math.min(blockIndex * this.block_size + this.block_size, this._length) - 1;
        clearInterval.call(this, newLength, endIndex);
    }

    this._length = newLength;

    // update the table
    var partialBlock = ((this._length & this.block_mask) === 0) ? 0 : 1;
    this.block_table.length = (this._length >> this.block_shift) + partialBlock;
}

//----------------------------------
//  defaultSize
//----------------------------------

/**
 * The size of items whose size was not specified with setItemSize.
 *
 * @default 0
 */
function getDefaultSize() {
    return this._defaultSize;
}

/**
 * @private
 */
function setDefaultSize(value) {
    this._defaultSize = value;
}

//----------------------------------
//  axisOffset
//----------------------------------

/**
 * The offset of the first item from the origin in the majorAxis
 * direction. This is useful when implementing padding,
 * in addition to gaps, for virtual layouts.
 *
 * @see #gap
 */
function getAxisOffset() {
    return this._axisOffset;
}

/**
 * @private
 */
function setAxisOffset(value) {
    this._axisOffset = value;
}

//----------------------------------
//  gap
//----------------------------------

/**
 * The distance between items.
 *
 * @default 0
 */
function getGap() {
    return this._gap;
}

/**
 * @private
 */
function setGap(value) {
    this._gap = value;
}

//--------------------------------------------------------------------------
//
//  Methods
//
//--------------------------------------------------------------------------

/**
 * Return the size of the item at index.  If no size was ever
 * specified then then the defaultSize is returned.
 *
 * @param index The item's index.
 * @see defaultSize
 */
function getItemSize(index) {
    flushPendingChanges.call(this);

    var block = this.block_table[index >> this.block_shift];
    if(block) {
        var value = block.sizes[index & this.block_mask];
        return (value !== value) ? this._defaultSize : value;
    } else {
        return this._defaultSize;
    }
}

/**
 * Set the size of the item at index. If an index is
 * set to <code>NaN</code> then subsequent calls to get
 * will return the defaultSize.
 *
 * @param index The item's index.
 * @param value The item's size.
 * @see defaultSize
 */
function setItemSize(index, value) {
    flushPendingChanges.call(this);

    if(index >= this.getLength()) {
        throw new Error("Invalid index and all that.");
    }

    var blockIndex = index >> this.block_shift;
    var block = this.block_table[blockIndex];
    if(!block) {
        block = this.block_table[blockIndex] = new Block(this.block_size);
    }

    var sizesIndex = index & this.block_mask;
    var sizes = block.sizes;
    var oldValue = sizes[sizesIndex];
    if(oldValue === value) {
        return;
    }

    if(oldValue !== oldValue) {
        block.defaultCount -= 1;
        block.sizesSum += value;
    } else if(value !== value) {
        block.defaultCount += 1;
        block.sizesSum -= oldValue;
    } else {
        block.sizesSum += value - oldValue;
    }

    sizes[sizesIndex] = value;
}

/**
 * Make room for a new item at index by shifting all of the sizes
 * one position to the right, beginning with startIndex.
 *
 * The value at index will be NaN.
 *
 * This is similar to array.splice(index, 0, NaN).
 *
 * @param index The position of the new NaN size item.
 */
function insert(index) {
    // We don't support interleaved pending inserts and removes
    if(this.removes) {
        flushPendingChanges.call(this);
    }

    if(this.inserts) {
        // Update the last interval or add a new one?
        var lastIndex = this.inserts.length - 1;
        var intervalEnd = this.inserts[lastIndex];

        if(index === intervalEnd + 1) {
            // Extend the end of the interval
            this.inserts[lastIndex] = index;
        } else if(index > intervalEnd) {
            // New interval
            this.inserts.push(index);
            this.inserts.push(index);
        } else {
            // We can't support pending inserts that are not ascending
            flushPendingChanges.call(this);
        }
    }

    this._pendingLength = Math.max(this._length, index + 1);

    if(!this.inserts) {
        this.inserts = [];
        this.inserts.push(index);
        this.inserts.push(index);
    }
}

/**
 * Remove index by shifting all of the sizes one position to the left,
 * begining with index+1.
 *
 * This is similar to array.splice(index, 1).
 *
 * @param index The position to be removed.
 */
function remove(index) {
    // We don't support interleaved pending inserts and removes
    if(this.inserts) {
        flushPendingChanges.call(this);
    }

    // length getter takes into account pending inserts/removes but doesn't flush
    if(index >= this.getLength()) {
        throw new Error("Invalid index and all that.");
    }

    if(this.removes) {
        // Update the last interval or add a new one?
        var lastIndex = this.removes.length - 1;
        var intervalStart = this.removes[lastIndex];

        if(index === intervalStart - 1) {
            // Extend the start of the interval
            this.removes[lastIndex] = index;
        } else if(index < intervalStart) {
            // New interval
            this.removes.push(index);
            this.removes.push(index);
        } else {
            // We can't support pending removes that are not descending
            flushPendingChanges.call(this);
        }
    }

    this._pendingLength = (this._pendingLength === -1) ? length - 1 : this._pendingLength - 1;

    if(!this.removes) {
        this.removes = [];
        this.removes.push(index);
        this.removes.push(index);
    }
}

/**
 * @private
 * Returns true when all sizes in the specified interval for the block are NaN
 */
function isIntervalClear(block, index, count) {
    var sizes = block.sizes, size;
    for(count += index; index < count; ++index) {
        if((size = sizes[index]) === size) {
            return false;
        }
    }
    return true;
}

/**
 * @private
 * Copies elements between blocks. Indices relative to the blocks.
 * If srcBlock is null, then it fills the destination with NaNs.
 * The case of srcBlock === dstBlock is also supported.
 * The caller must ensure that count is within range.
 */
function inBlockCopy(dstBlock, dstIndexStart, srcBlock, srcIndexStart, count) {
    var ascending = dstIndexStart < srcIndexStart;

    var srcIndex = ascending ? srcIndexStart : srcIndexStart + count - 1;
    var dstIndex = ascending ? dstIndexStart : dstIndexStart + count - 1;
    var increment = ascending ? +1 : -1;

    var dstSizes = dstBlock.sizes;
    var srcSizes = srcBlock ? srcBlock.sizes : null;
    var dstValue = NaN;
    var srcValue = NaN;
    var sizesSumDelta = 0; // How much the destination sizesSum will change
    var defaultCountDelta = 0; // How much the destination defaultCount will change

    while(count > 0) {
        if(srcSizes) {
            srcValue = srcSizes[srcIndex];
        }

        dstValue = dstSizes[dstIndex];

        // Are the values different?
        if(srcValue !== dstValue) { // Triple '=' to handle NaN comparison

            // Are we removing a default size or a chached size?
            if(dstValue !== dstValue) {
                defaultCountDelta--;
            } else {
                sizesSumDelta -= dstValue;
            }

            // Are we adding a default size or a cached size?
            if(srcValue !== srcValue) {
                defaultCountDelta++;
            } else {
                sizesSumDelta += srcValue;
            }

            dstSizes[dstIndex] = srcValue;
        }

        srcIndex += increment;
        dstIndex += increment;
        count--;
    }

    dstBlock.sizesSum += sizesSumDelta;
    dstBlock.defaultCount += defaultCountDelta;
}

/**
 * @private
 * Copies 'count' elements from dstIndex to srcIndex.
 * Safe for overlapping source and destination intervals.
 * If any blocks are left full of NaNs, they will be deallcated.
 */
function copyInterval(dstIndex, srcIndex, count) {
    var ascending = dstIndex < srcIndex;
    if(!ascending) {
        dstIndex += count - 1;
        srcIndex += count - 1;
    }

    while(count > 0) {
        // Figure out destination block
        var dstBlockIndex = dstIndex >> this.block_shift;
        var dstSizesIndex = dstIndex & this.block_mask;
        var dstBlock = this.block_table[dstBlockIndex];

        // Figure out source block
        var srcBlockIndex = srcIndex >> this.block_shift;
        var srcSizesIndex = srcIndex & this.block_mask;
        var srcBlock = this.block_table[srcBlockIndex];

        // Figure out number of elements to copy
        var copyCount = ascending ?
            Math.min(this.block_size - dstSizesIndex, this.block_size - srcSizesIndex) :
            1 + Math.min(dstSizesIndex, srcSizesIndex);

        copyCount = Math.min(copyCount, count);

        // Figure out the start index for each block
        var dstStartIndex = ascending ? dstSizesIndex : dstSizesIndex - copyCount + 1;
        var srcStartIndex = ascending ? srcSizesIndex : srcSizesIndex - copyCount + 1;

        // Check whether a destination block needs to be allocated.
        // Allocate only if there are non-default values to be copied from the source.
        if(srcBlock && !dstBlock && isIntervalClear(srcBlock, srcStartIndex, copyCount)) {
            dstBlock = new Block(this.block_size);
            this.block_table[dstBlockIndex] = dstBlock;
        }

        // Copy to non-null dstBlock, srcBlock can be null
        if(dstBlock) {
            inBlockCopy(dstBlock, dstStartIndex, srcBlock, srcStartIndex, copyCount);

            // If this is the last time we're visiting this block, and it contains
            // only NaNs, then remove it
            if(dstBlock.defaultCount === this.block_size) {
                var blockEndReached = ascending ?
                    (dstStartIndex + copyCount === this.block_size) :
                    (dstStartIndex === 0);
                if(blockEndReached || count === copyCount)
                    this.block_table[dstBlockIndex] = null;
            }
        }

        dstIndex += ascending ? copyCount : -copyCount;
        srcIndex += ascending ? copyCount : -copyCount;
        count -= copyCount;
    }
}

/**
 * @private
 * Sets all elements within the specified interval to NaN (both ends inclusive).
 * Releases empty blocks.
 */
function clearInterval(start, end) {
    while(start <= end) {
        // Figure our destination block
        var blockIndex = start >> this.block_shift;
        var sizesIndex = start & this.block_mask;
        var block = this.block_table[blockIndex];

        // Figure out number of elements to clear in this iteration
        // Make sure we don't clear more items than requested
        var clearCount = this.block_size - sizesIndex;
        clearCount = Math.min(clearCount, end - start + 1);

        if(block) {
            if(clearCount === this.block_size) {
                this.block_table[blockIndex] = null;
            } else {
                // Copying from null source block is equivalent of clearing the destination block
                inBlockCopy(block, sizesIndex, null /*srcBlock*/, 0, clearCount);

                // If the blockDst contains only default sizes, then remove the block
                if(block.defaultCount === this.block_size) {
                    this.block_table[blockIndex] = null;
                }
            }
        }

        start += clearCount;
    }
}

/**
 * @private
 * Removes the elements designated by the intervals and truncates
 * the LinearLayoutVector to the new length.
 * 'intervals' is a Vector of descending intervals [7, 5, 3, 1]
 */
function removeIntervals(intervals) {
    var intervalsCount = intervals.length;
    if(intervalsCount === 0) {
        return;
    }

    // Adding final nextIntervalStart value (see below).
    intervals.reverse(); // turn into ascending, for example [7, 5, 3, 1] --> [1, 3, 5, 7]
    intervals.push(this.getLength());

    // Move the elements
    var dstStart = intervals[0];
    var srcStart;
    var count;
    var i = 0;
    do {
        var intervalEnd = intervals[i + 1];
        var nextIntervalStart = intervals[i + 2]
        i += 2;

        // Start copy from after the end of current interval
        srcStart = intervalEnd + 1;

        // copy all elements up to the start of the next interval.
        count = nextIntervalStart - srcStart;

        copyInterval.call(this, dstStart, srcStart, count);
        dstStart += count;
    } while(i < intervalsCount)

    // Truncate the excess elements.
    this.setLength(dstStart);
}

/**
 * @private
 * Increases the length and inserts NaN values for the elements designated by the intervals.
 * 'intervals' is a Vector of ascending intervals [1, 3, 5, 7]
 */
function insertIntervals(intervals, newLength) {
    var intervalsCount = intervals.length;
    if(intervalsCount === 0) {
        return;
    }

    // Allocate enough space for the insertions, all the elements
    // allocated are NaN by default.
    var oldLength = this.getLength();
    this.setLength(newLength);

    var srcEnd = oldLength - 1;
    var dstEnd = newLength - 1;
    var i = intervalsCount - 2;
    while(i >= 0) {
        // Find current interval
        var intervalStart = intervals[i];
        var intervalEnd = intervals[i + 1];
        i -= 2;

        // Start after the current interval
        var dstStart = intervalEnd + 1;
        var copyCount = dstEnd - dstStart + 1;
        var srcStart = srcEnd - copyCount + 1;

        copyInterval.call(this, dstStart, srcStart, copyCount);
        dstStart -= copyCount;
        dstEnd = intervalStart - 1;

        // Fill in with default NaN values after the copy
        clearInterval.call(this, intervalStart, intervalEnd);
    }
}

/**
 * @private
 * Processes any pending removes or pending inserts.
 */
function flushPendingChanges() {
    var intervals;
    if(this.removes) {
        intervals = this.removes;
        this.removes = null;
        this._pendingLength = -1;
        removeIntervals.call(this, intervals);
    } else if(this.inserts) {
        intervals = this.inserts;
        var newLength = this._pendingLength;
        this.inserts = null;
        this._pendingLength = -1;
        insertIntervals.call(this, intervals, newLength);
    }
}

/**
 * The cumulative distance to the start of the item at index, including
 * the gaps between items and the axisOffset.
 *
 * The value of start(0) is axisOffset.
 *
 * Equivalent to:
 * <pre>
 * var distance = this.getAxisOffset();
 * for (var i = 0; i &lt; index; i++)
 *     distance += get(i);
 * return distance + (gap * index);
 * </pre>
 *
 * The actual implementation is relatively efficient.
 *
 * @param index The item's index.
 * @see #end
 */
function start(index) {

    flushPendingChanges.call(this);

    if((this._length === 0) || (index === 0)) {
        return this.getAxisOffset();
    }

    if(index >= this._length) {
        throw new Error("Invalid index and all that.");
    }

    var distance = this.getAxisOffset();
    var blockIndex = index >> this.block_shift;
    for(var i = 0; i < blockIndex; i++)
    {
        var block = this.block_table[i];
        distance += block ?
            block.sizesSum + (block.defaultCount * this._defaultSize) :
            this.block_size * this._defaultSize;
    }
    var lastBlock = this.block_table[blockIndex];
    var lastBlockOffset = index & ~this.block_mask;
    var lastBlockLength = index - lastBlockOffset;
    if(lastBlock) {
        var sizes = lastBlock.sizes;
        for(i = 0; i < lastBlockLength; i++) {
            var size = sizes[i];
            distance += (size !== size) ? this._defaultSize : size;
        }
    } else {
        distance += this._defaultSize * lastBlockLength;
    }
    distance += index * this.getGap();
    return distance;
}

/**
 * The cumulative distance to the end of the item at index, including
 * the gaps between items.
 *
 * If <code>index &lt;(length-1)</code> then the value of this
 * function is defined as:
 * <code>start(index) + get(index)</code>.
 *
 * @param index The item's index.
 * @see #start
 */
function end(index) {
    flushPendingChanges.call(this);
    return this.start(index) + this.getItemSize(index);
}

/**
 * Returns the index of the item that overlaps the specified distance.
 *
 * The item at index <code>i</code> overlaps a distance value
 * if <code>start(i) &lt;= distance &lt; end(i)</code>.
 *
 * If no such item exists, -1 is returned.
 */
function indexOf(distance) {
    flushPendingChanges.call(this);
    var index = indexOfInternal.call(this, distance);
    return (index >= this._length) ? -1 : index;
}

function indexOfInternal(distance) {

    if((this._length === 0) || (distance < 0)) {
        return -1;
    }

    // The area of the first item includes the axisOffset
    var curDistance = this.getAxisOffset();

    if(distance < curDistance) {
        return 0;
    }

    var index = -1,
        block = null,
        blockSize = this.block_size,
        defaultSize = this._defaultSize,
        gap = this.getGap(),
        blockGap = gap * blockSize;

    // Find the block that contains distance and the index of its
    // first element
    var blockIndex = -1,
        blockTable = this.block_table,
        blockTableLength = blockTable.length;

    for(; ++blockIndex < blockTableLength;) {
        block = blockTable[blockIndex];
        var blockDistance = blockGap + (
            block ?
                block.sizesSum + (block.defaultCount * defaultSize) :
                blockSize * defaultSize
        );

        if((distance === curDistance) || ((distance >= curDistance) && (distance < (curDistance + blockDistance)))) {
            index = blockIndex << this.block_shift;
            break;
        }
        curDistance += blockDistance;
    }

    if((index === -1) || (distance === curDistance)) {
        return index;
    }

    // At this point index corresponds to the first item in this block
    if(block) {
        // Find the item that contains distance and return its index
        var sizes = block.sizes,
            n = this.block_size - 1;
        for(var i = 0; i < n; i++) {
            var size = sizes[i];
            curDistance += gap + (size !== size ? this._defaultSize : size);
            if(curDistance > distance) {
                return index + i;
            }
        }
        // TBD special-case for the very last index
        return index + this.block_size - 1;
    } else {
        return index + Math.floor(Number(distance - curDistance) / Number(this._defaultSize + gap));
    }
}

/**
 * Clear all cached state, reset length to zero.
 */
function clear() {
    // Discard any pending changes, before setting the length
    // otherwise the length setter will commit the changes.
    this.removes = null;
    this.inserts = null;
    this._pendingLength = -1;

    this.setLength(0); // clears the this.block_table as well
}

function toString() {
    return "LinearLayoutVector { " +
        "length: " + this._length + ", " +
        "size: " + this.end(this.getLength() -1) + ", " +
        "[blocks: " + this.block_table.length + "]" + ", " +
        "gap: " + this._gap + ", " +
        "defaultSize: " + this._defaultSize + ", " +
        "pendingRemoves: " + (this.removes ? this.removes.length : 0) + ", " +
        "pendingInserts: " + (this.inserts ? this.inserts.length : 0) +
        " }";
}

/**
 * @private
 * A LinearLayoutVector block of layout element heights or widths.
 *
 * Total "distance" for a Block is: sizesSum + (defaultCount * distanceVector.default).
 */
function Block(block_size) {

    this.sizes = new Array(block_size);
    this.sizesSum = 0;
    this.defaultCount = block_size;

    for(var i = -1; ++i < block_size;) {
        this.sizes[i] = NaN;
    }
}


/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isChrome = function isChrome() {
  return !!window.chrome && !!window.chrome.webstore;
};

var getMaxElementSize = exports.getMaxElementSize = function getMaxElementSize() {
  if (isBrowser()) {
    if (isChrome()) {
      return CHROME_MAX_ELEMENT_SIZE;
    }
  }
  return DEFAULT_MAX_ELEMENT_SIZE;
};

/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(1113);

var _keys2 = _interopRequireDefault(_keys);

exports.default = createCallbackMemoizer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var cachedIndices = {};

  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;

    var keys = (0, _keys2.default)(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== (0, _keys2.default)(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];

      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });

    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1114), __esModule: true };

/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1115);
module.exports = __webpack_require__(162).Object.keys;


/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(305);
var $keys = __webpack_require__(242);

__webpack_require__(979)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateScrollIndexHelper;

var _ScalingCellSizeAndPositionManager = __webpack_require__(980);

var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);

var _types = __webpack_require__(943);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 */

function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;

  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;

  // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.
  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex);

    // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}

/***/ }),

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(394);

exports.__esModule = true;
exports.default = scrollbarSize;

var _inDOM = _interopRequireDefault(__webpack_require__(1118));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

module.exports = exports["default"];

/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_AnimationTimeoutId = exports.requestAnimationTimeout = exports.cancelAnimationTimeout = undefined;

var _promise = __webpack_require__(1120);

var _promise2 = _interopRequireDefault(_promise);

var _animationFrame = __webpack_require__(1136);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bpfrpt_proptype_AnimationTimeoutId =  true ? null : undefined;
var cancelAnimationTimeout = exports.cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return (0, _animationFrame.caf)(frame.id);
};

/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */
var requestAnimationTimeout = exports.requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start = void 0;
  // wait for end of processing current event handler, because event handler may be long
  _promise2.default.resolve().then(function () {
    start = Date.now();
  });

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = (0, _animationFrame.raf)(timeout);
    }
  };

  var frame = {
    id: (0, _animationFrame.raf)(timeout)
  };

  return frame;
};
exports.bpfrpt_proptype_AnimationTimeoutId = bpfrpt_proptype_AnimationTimeoutId;

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1121), __esModule: true };

/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(578);
__webpack_require__(574);
__webpack_require__(577);
__webpack_require__(1122);
__webpack_require__(1134);
__webpack_require__(1135);
module.exports = __webpack_require__(162).Promise;


/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(243);
var global = __webpack_require__(143);
var ctx = __webpack_require__(399);
var classof = __webpack_require__(1006);
var $export = __webpack_require__(214);
var isObject = __webpack_require__(180);
var aFunction = __webpack_require__(566);
var anInstance = __webpack_require__(1123);
var forOf = __webpack_require__(1124);
var speciesConstructor = __webpack_require__(1007);
var task = __webpack_require__(1008).set;
var microtask = __webpack_require__(1129)();
var newPromiseCapabilityModule = __webpack_require__(981);
var perform = __webpack_require__(1009);
var userAgent = __webpack_require__(1130);
var promiseResolve = __webpack_require__(1010);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(176)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(1131)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(307)($Promise, PROMISE);
__webpack_require__(1132)(PROMISE);
Wrapper = __webpack_require__(162)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(1133)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ 1123:
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(399);
var call = __webpack_require__(1125);
var isArrayIter = __webpack_require__(1126);
var anObject = __webpack_require__(215);
var toLength = __webpack_require__(573);
var getIterFn = __webpack_require__(1127);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(215);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(306);
var ITERATOR = __webpack_require__(176)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(1006);
var ITERATOR = __webpack_require__(176)('iterator');
var Iterators = __webpack_require__(306);
module.exports = __webpack_require__(162).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 1128:
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var macrotask = __webpack_require__(1008).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(400)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(143);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(182);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(143);
var core = __webpack_require__(162);
var dP = __webpack_require__(179);
var DESCRIPTORS = __webpack_require__(164);
var SPECIES = __webpack_require__(176)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(176)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(214);
var core = __webpack_require__(162);
var global = __webpack_require__(143);
var speciesConstructor = __webpack_require__(1007);
var promiseResolve = __webpack_require__(1010);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(214);
var newPromiseCapability = __webpack_require__(981);
var perform = __webpack_require__(1009);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


// Properly handle server-side rendering.
var win = void 0;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
}

// requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};

var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};

var raf = exports.raf = request;
var caf = exports.caf = cancel;

/***/ }),

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_BACKWARD = undefined;
exports.default = defaultOverscanIndicesGetter;

var _types = __webpack_require__(943);

var SCROLL_DIRECTION_BACKWARD = exports.SCROLL_DIRECTION_BACKWARD = -1;

var SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_VERTICAL = 'vertical';

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(64);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/api/EmojiRepository.js + 5 modules
var EmojiRepository = __webpack_require__(491);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/api/EmojiResource.js + 5 modules
var EmojiResource = __webpack_require__(841);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/constants.js
var constants = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/type-helpers.js
var type_helpers = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/types.js
var types = __webpack_require__(222);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/util/filters.js
var toneEmojiShortName = ':raised_hand:';
var byShortName = function (emojis, shortName) { return emojis.filter(function (emoji) { return emoji.shortName === shortName; })[0]; };
var filters_toneEmoji = function (emojis) {
    return byShortName(emojis, toneEmojiShortName);
};
var getToneEmoji = function (provider) {
    return provider.findByShortName(toneEmojiShortName);
};
/* harmony default export */ var filters = ({
    byShortName: byShortName,
    toneEmoji: filters_toneEmoji,
});
//# sourceMappingURL=filters.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/analytics.js
var analytics = __webpack_require__(949);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/i18n.js
var i18n = __webpack_require__(177);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/UploadEmoji.js



var uploadEmoji = function (upload, emojiProvider, errorSetter, onSuccess, fireAnalytics) {
    var startTime = Date.now();
    errorSetter(undefined);
    if (Object(EmojiResource["b" /* supportsUploadFeature */])(emojiProvider)) {
        emojiProvider
            .uploadCustomEmoji(upload)
            .then(function (emojiDescription) {
            fireAnalytics(Object(analytics["u" /* uploadSucceededEvent */])({
                duration: Date.now() - startTime,
            }));
            onSuccess(emojiDescription);
        })
            .catch(function (err) {
            errorSetter(i18n["a" /* messages */].emojiUploadFailed);
            // eslint-disable-next-line no-console
            console.error('Unable to upload emoji', err);
            fireAnalytics(Object(analytics["t" /* uploadFailedEvent */])({
                duration: Date.now() - startTime,
                reason: i18n["a" /* messages */].emojiUploadFailed.defaultMessage,
            }));
        });
    }
};
//# sourceMappingURL=UploadEmoji.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/RecordSelectionDefault.js
var RecordSelectionDefault = __webpack_require__(978);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/activity.js
var activity = __webpack_require__(1088);
var activity_default = /*#__PURE__*/__webpack_require__.n(activity);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/custom.js
var custom = __webpack_require__(1094);
var custom_default = /*#__PURE__*/__webpack_require__.n(custom);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/flags.js
var flags = __webpack_require__(1092);
var flags_default = /*#__PURE__*/__webpack_require__.n(flags);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/food.js
var food = __webpack_require__(1087);
var food_default = /*#__PURE__*/__webpack_require__.n(food);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/frequent.js
var frequent = __webpack_require__(1084);
var frequent_default = /*#__PURE__*/__webpack_require__.n(frequent);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/nature.js
var nature = __webpack_require__(1086);
var nature_default = /*#__PURE__*/__webpack_require__.n(nature);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/objects.js
var objects = __webpack_require__(1090);
var objects_default = /*#__PURE__*/__webpack_require__.n(objects);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/people.js
var people = __webpack_require__(1085);
var people_default = /*#__PURE__*/__webpack_require__.n(people);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/symbols.js
var symbols = __webpack_require__(1091);
var symbols_default = /*#__PURE__*/__webpack_require__.n(symbols);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/travel.js
var travel = __webpack_require__(1089);
var travel_default = /*#__PURE__*/__webpack_require__.n(travel);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/emoji/productivity.js
var productivity = __webpack_require__(1093);
var productivity_default = /*#__PURE__*/__webpack_require__.n(productivity);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/picker/categories.js












var CategoryDescriptionMap = {
    SEARCH: {
        id: 'SEARCH',
        name: 'categoriesSearchResults',
        icon: undefined,
        order: 0,
    },
    FREQUENT: {
        id: 'FREQUENT',
        name: 'frequentCategory',
        icon: frequent_default.a,
        order: 1,
    },
    PEOPLE: {
        id: 'PEOPLE',
        name: 'peopleCategory',
        icon: people_default.a,
        order: 2,
    },
    NATURE: {
        id: 'NATURE',
        name: 'natureCategory',
        icon: nature_default.a,
        order: 3,
    },
    FOODS: {
        id: 'FOODS',
        name: 'foodsCategory',
        icon: food_default.a,
        order: 4,
    },
    ACTIVITY: {
        id: 'ACTIVITY',
        name: 'activityCategory',
        icon: activity_default.a,
        order: 5,
    },
    PLACES: {
        id: 'PLACES',
        name: 'placesCategory',
        icon: travel_default.a,
        order: 6,
    },
    OBJECTS: {
        id: 'OBJECTS',
        name: 'objectsCategory',
        icon: objects_default.a,
        order: 7,
    },
    SYMBOLS: {
        id: 'SYMBOLS',
        name: 'symbolsCategory',
        icon: symbols_default.a,
        order: 8,
    },
    FLAGS: {
        id: 'FLAGS',
        name: 'flagsCategory',
        icon: flags_default.a,
        order: 9,
    },
    ATLASSIAN: {
        id: 'ATLASSIAN',
        name: 'productivityCategory',
        icon: productivity_default.a,
        order: 10,
    },
    USER_CUSTOM: {
        id: constants["b" /* customCategory */],
        name: constants["n" /* userCustomTitle */],
        icon: custom_default.a,
        order: 11,
    },
    CUSTOM: {
        id: constants["b" /* customCategory */],
        name: constants["c" /* customTitle */],
        icon: custom_default.a,
        order: 12,
    },
};
//# sourceMappingURL=categories.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/picker/styles.js
var styles = __webpack_require__(114);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/picker/CategorySelector.js









var sortCategories = function (c1, c2) {
    return CategoryDescriptionMap[c1].order - CategoryDescriptionMap[c2].order;
};
var addNewCategories = function (oldCategories, newCategories) {
    if (!newCategories) {
        return oldCategories;
    }
    return oldCategories
        .concat(newCategories.filter(function (category) { return !!CategoryDescriptionMap[category]; }))
        .sort(sortCategories);
};
var CategorySelector_CategorySelector = /** @class */ (function (_super) {
    tslib_es6["__extends"](CategorySelector, _super);
    function CategorySelector(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (categoryId) {
            var onCategorySelected = _this.props.onCategorySelected;
            if (onCategorySelected) {
                onCategorySelected(categoryId);
            }
        };
        var dynamicCategories = props.dynamicCategories;
        var categories = constants["e" /* defaultCategories */];
        if (dynamicCategories) {
            categories = addNewCategories(categories, dynamicCategories);
        }
        _this.state = {
            categories: categories,
        };
        return _this;
    }
    CategorySelector.prototype.componentWillUpdate = function (nextProps) {
        if (this.props.dynamicCategories !== nextProps.dynamicCategories) {
            this.setState({
                categories: addNewCategories(constants["e" /* defaultCategories */], nextProps.dynamicCategories),
            });
        }
    };
    CategorySelector.prototype.render = function () {
        var _this = this;
        var disableCategories = this.props.disableCategories;
        var categories = this.state.categories;
        var categoriesSection;
        if (categories) {
            categoriesSection = (react["createElement"]("ul", null, categories.map(function (categoryId) {
                var category = CategoryDescriptionMap[categoryId];
                var categoryClasses = [styles["b" /* category */]];
                if (categoryId === _this.props.activeCategoryId) {
                    categoryClasses.push(styles["a" /* active */]);
                }
                var onClick = function (e) {
                    e.preventDefault();
                    // ignore if disabled
                    if (!disableCategories) {
                        _this.onClick(categoryId);
                    }
                };
                if (disableCategories) {
                    categoryClasses.push(styles["d" /* disable */]);
                }
                var Icon = category.icon;
                return (react["createElement"]("li", { key: category.id },
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */][category.name]), function (categoryName) { return (react["createElement"]("button", { "data-category-id": category.id, className: classnames_default()(categoryClasses), onClick: onClick, title: categoryName },
                        react["createElement"](Icon, { label: categoryName }))); })));
            })));
        }
        return (react["createElement"]("div", { className: classnames_default()([styles["c" /* categorySelector */]]) }, categoriesSection));
    };
    CategorySelector.defaultProps = {
        onCategorySelected: function () { },
        dynamicCategories: [],
    };
    return CategorySelector;
}(react["PureComponent"]));
/* harmony default export */ var picker_CategorySelector = (CategorySelector_CategorySelector);
//# sourceMappingURL=CategorySelector.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/button/components/Button.js + 4 modules
var Button = __webpack_require__(829);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/CachingEmoji.js
var CachingEmoji = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/error.js
var glyph_error = __webpack_require__(947);
var error_default = /*#__PURE__*/__webpack_require__.n(glyph_error);

// EXTERNAL MODULE: ./node_modules/@atlaskit/tooltip/components/Tooltip.js + 3 modules
var Tooltip = __webpack_require__(304);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/EmojiErrorMessage.js





var EmojiErrorMessage_EmojiErrorMessage = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiErrorMessage, _super);
    function EmojiErrorMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiErrorMessage.prototype.renderWithTooltip = function () {
        return (react["createElement"]("div", { className: this.props.className },
            react["createElement"](Tooltip["a" /* default */], { content: this.props.message, position: "top" },
                react["createElement"](error_default.a, { label: "Error", size: "medium" }))));
    };
    EmojiErrorMessage.prototype.renderInline = function () {
        return (react["createElement"]("div", { className: this.props.className },
            react["createElement"](error_default.a, { label: "Error", size: "small" }),
            " ",
            this.props.message));
    };
    EmojiErrorMessage.prototype.render = function () {
        return this.props.tooltip ? this.renderWithTooltip() : this.renderInline();
    };
    return EmojiErrorMessage;
}(react["PureComponent"]));
/* harmony default export */ var common_EmojiErrorMessage = (EmojiErrorMessage_EmojiErrorMessage);
//# sourceMappingURL=EmojiErrorMessage.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/spinner/Spinner/index.js + 3 modules
var Spinner = __webpack_require__(830);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/styles.js
var common_styles = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/RetryableButton.js








var RetryableButton_RetryableButton = /** @class */ (function (_super) {
    tslib_es6["__extends"](RetryableButton, _super);
    function RetryableButton(props) {
        return _super.call(this, props) || this;
    }
    RetryableButton.prototype.renderLoading = function () {
        return (react["createElement"]("span", { className: common_styles["d" /* buttonSpinner */] },
            react["createElement"](Spinner["a" /* default */], { invertColor: false })));
    };
    RetryableButton.prototype.renderRetry = function () {
        var _a = this.props, loading = _a.loading, retryClassName = _a.retryClassName, onSubmit = _a.onSubmit;
        return loading ? (this.renderLoading()) : (react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].retryLabel), function (retryLabel) { return (react["createElement"](Button["a" /* default */], { className: retryClassName, appearance: "warning", onClick: onSubmit }, retryLabel)); }));
    };
    RetryableButton.prototype.render = function () {
        var _a = this.props, loading = _a.loading, error = _a.error, className = _a.className, appearance = _a.appearance, onSubmit = _a.onSubmit, label = _a.label;
        return error ? (this.renderRetry()) : loading ? (this.renderLoading()) : (react["createElement"](Button["a" /* default */], { className: className, appearance: appearance, onClick: onSubmit }, label));
    };
    return RetryableButton;
}(react["Component"]));
/* harmony default export */ var common_RetryableButton = (RetryableButton_RetryableButton);
//# sourceMappingURL=RetryableButton.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/EmojiDeletePreview.js










var EmojiDeletePreview_EmojiDeletePreview = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiDeletePreview, _super);
    function EmojiDeletePreview(props) {
        var _this = _super.call(this, props) || this;
        _this.onSubmit = function () {
            var _a = _this.props, emoji = _a.emoji, onDeleteEmoji = _a.onDeleteEmoji, onCloseDelete = _a.onCloseDelete;
            if (!_this.state.loading) {
                _this.setState({ loading: true });
                onDeleteEmoji(emoji).then(function (success) {
                    if (success) {
                        onCloseDelete();
                        return;
                    }
                    _this.setState({
                        loading: false,
                        error: true,
                    });
                });
            }
        };
        _this.onCancel = function () {
            _this.props.onCloseDelete();
        };
        _this.state = {
            loading: false,
            error: false,
        };
        return _this;
    }
    EmojiDeletePreview.prototype.componentWillUpdate = function (nextProps) {
        if (nextProps.emoji.id !== this.props.emoji.id) {
            this.setState({ error: false });
        }
    };
    EmojiDeletePreview.prototype.render = function () {
        var _this = this;
        var emoji = this.props.emoji;
        var _a = this.state, loading = _a.loading, error = _a.error;
        return (react["createElement"]("div", { className: common_styles["i" /* deletePreview */] },
            react["createElement"]("div", { className: common_styles["j" /* deleteText */] },
                react["createElement"]("h5", null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].deleteEmojiTitle))),
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].deleteEmojiDescription, { values: { emojiShortName: emoji.shortName } }))),
            react["createElement"]("div", { className: common_styles["h" /* deleteFooter */] },
                react["createElement"](CachingEmoji["a" /* default */], { emoji: emoji }),
                react["createElement"]("div", { className: common_styles["B" /* previewButtonGroup */] },
                    error ? (react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].deleteEmojiFailed), function (message) {
                        return !loading ? (react["createElement"](common_EmojiErrorMessage, { message: message, className: common_styles["o" /* emojiDeleteErrorMessage */], tooltip: true })) : null;
                    })) : null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].deleteEmojiLabel), function (message) { return (react["createElement"](common_RetryableButton, { className: common_styles["O" /* uploadEmojiButton */], retryClassName: common_styles["S" /* uploadRetryButton */], label: message, onSubmit: _this.onSubmit, appearance: "danger", loading: loading, error: error })); }),
                    react["createElement"](Button["a" /* default */], { appearance: "subtle", onClick: this.onCancel, className: common_styles["f" /* cancelButton */] },
                        react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].cancelLabel)))))));
    };
    return EmojiDeletePreview;
}(react["Component"]));
/* harmony default export */ var common_EmojiDeletePreview = (EmojiDeletePreview_EmojiDeletePreview);
//# sourceMappingURL=EmojiDeletePreview.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/EmojiPreview.js + 2 modules
var EmojiPreview = __webpack_require__(985);

// EXTERNAL MODULE: ./node_modules/@atlaskit/field-base/components/FieldBase.js + 4 modules
var FieldBase = __webpack_require__(931);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/image.js
var util_image = __webpack_require__(490);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/logger.js
var logger = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/Emoji.js
var Emoji = __webpack_require__(308);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/internal-types.js
var UploadStatus;
(function (UploadStatus) {
    UploadStatus[UploadStatus["Waiting"] = 0] = "Waiting";
    UploadStatus[UploadStatus["Uploading"] = 1] = "Uploading";
    UploadStatus[UploadStatus["Error"] = 2] = "Error";
})(UploadStatus || (UploadStatus = {}));
//# sourceMappingURL=internal-types.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/EmojiUploadPreview.js












var EmojiUploadPreview_EmojiUploadPreview = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiUploadPreview, _super);
    function EmojiUploadPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiUploadPreview.prototype.render = function () {
        var _a = this.props, name = _a.name, previewImage = _a.previewImage, uploadStatus = _a.uploadStatus, errorMessage = _a.errorMessage, onAddEmoji = _a.onAddEmoji, onUploadCancelled = _a.onUploadCancelled;
        var emojiComponent;
        if (previewImage) {
            var emoji = {
                shortName: ":" + name + ":",
                type: constants["b" /* customCategory */],
                category: constants["b" /* customCategory */],
                representation: {
                    imagePath: previewImage,
                    width: 24,
                    height: 24,
                },
                searchable: true,
            };
            emojiComponent = react["createElement"](Emoji["a" /* default */], { emoji: emoji });
        }
        var uploading = uploadStatus === UploadStatus.Uploading;
        return (react["createElement"]("div", { className: common_styles["Q" /* uploadPreviewFooter */] },
            react["createElement"]("div", { className: common_styles["P" /* uploadPreview */] },
                react["createElement"]("div", { className: common_styles["R" /* uploadPreviewText */] },
                    react["createElement"]("h5", null,
                        react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].emojiPreviewTitle))),
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].emojiPreview, { values: { emoji: emojiComponent } }))),
                react["createElement"]("div", { className: common_styles["c" /* bigEmojiPreview */] }, emojiComponent)),
            react["createElement"]("div", { className: common_styles["J" /* uploadAddRow */] },
                !uploading && errorMessage ? (react["createElement"](common_EmojiErrorMessage, { className: common_styles["r" /* emojiPreviewErrorMessage */], message: errorMessage, tooltip: true })) : null,
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].addEmojiLabel), function (label) { return (react["createElement"](common_RetryableButton, { className: common_styles["O" /* uploadEmojiButton */], retryClassName: common_styles["S" /* uploadRetryButton */], label: label, onSubmit: onAddEmoji, appearance: "primary", loading: uploading, error: !!errorMessage })); }),
                react["createElement"](Button["a" /* default */], { onClick: onUploadCancelled, appearance: "subtle", isDisabled: uploading, className: common_styles["f" /* cancelButton */] },
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].cancelLabel))))));
    };
    return EmojiUploadPreview;
}(react["PureComponent"]));
/* harmony default export */ var common_EmojiUploadPreview = (EmojiUploadPreview_EmojiUploadPreview);
//# sourceMappingURL=EmojiUploadPreview.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/FileChooser.js




var FileChooser_FileChooser = /** @class */ (function (_super) {
    tslib_es6["__extends"](FileChooser, _super);
    function FileChooser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChooseFile = function () {
            if (_this.props.onClick) {
                _this.props.onClick();
            }
            var chooseFile = _this.refs['chooseFile'];
            if (chooseFile) {
                chooseFile.click();
            }
        };
        return _this;
    }
    FileChooser.prototype.render = function () {
        var _a = this.props, accept = _a.accept, ariaLabel = _a.ariaLabel, isDisabled = _a.isDisabled, label = _a.label, onChange = _a.onChange;
        return (react["createElement"]("span", null,
            react["createElement"](Button["a" /* default */], { onClick: this.onChooseFile, isDisabled: isDisabled, "aria-label": ariaLabel || label }, label),
            react["createElement"]("input", { className: "emojiUploadFileInput", ref: "chooseFile", onChange: onChange, type: "file", accept: accept, style: { display: 'none' } })));
    };
    return FileChooser;
}(react["PureComponent"]));
/* harmony default export */ var common_FileChooser = (FileChooser_FileChooser);
//# sourceMappingURL=FileChooser.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/EmojiUploadPicker.js













var disallowedReplacementsMap = new Map([
    [':', ''],
    ['!', ''],
    ['@', ''],
    ['#', ''],
    ['%', ''],
    ['^', ''],
    ['&', ''],
    ['*', ''],
    ['(', ''],
    [')', ''],
    [' ', '_'],
]);
var sanitizeName = function (name) {
    // prevent / replace certain characters, allow others
    disallowedReplacementsMap.forEach(function (replaceWith, exclude) {
        name = name.split(exclude).join(replaceWith);
    });
    return name;
};
var maxNameLength = 50;
var toEmojiName = function (uploadName) {
    var name = uploadName.split('_').join(' ');
    return "" + name.substr(0, 1).toLocaleUpperCase() + name.substr(1);
};
var EmojiUploadPicker_ChooseEmojiFile = /** @class */ (function (_super) {
    tslib_es6["__extends"](ChooseEmojiFile, _super);
    function ChooseEmojiFile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onKeyDown = function (event) {
            if (event.key === 'Escape') {
                _this.props.onUploadCancelled();
            }
        };
        return _this;
    }
    ChooseEmojiFile.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.name, name = _b === void 0 ? '' : _b, onChooseFile = _a.onChooseFile, onClick = _a.onClick, onNameChange = _a.onNameChange, errorMessage = _a.errorMessage;
        var disableChooser = !name;
        // Note: FileChooser.accept does not work in Electron due to a bug: https://product-fabric.atlassian.net/browse/FS-1626
        return (react["createElement"]("div", { className: common_styles["v" /* emojiUpload */] },
            react["createElement"]("div", { className: common_styles["M" /* uploadChooseFileMessage */] },
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].addCustomEmojiLabel), function (message) { return react["createElement"]("h5", null, message); })),
            react["createElement"]("div", { className: common_styles["N" /* uploadChooseFileRow */] },
                react["createElement"]("span", { className: common_styles["L" /* uploadChooseFileEmojiName */] },
                    react["createElement"](FieldBase["a" /* default */], { appearance: "standard", isCompact: true, isLabelHidden: true, isFocused: true, isFitContainerWidthEnabled: true },
                        react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].emojiPlaceholder), function (message) { return (react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].emojiNameAriaLabel), function (ariaLabel) { return (react["createElement"]("input", { placeholder: message, "aria-label": ariaLabel, maxLength: maxNameLength, onChange: onNameChange, onKeyDown: _this.onKeyDown, value: name, ref: "name", autoFocus: true })); })); }))),
                react["createElement"]("span", { className: common_styles["K" /* uploadChooseFileBrowse */] },
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].emojiChooseFileTitle), function (message) { return (react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].emojiChooseFileAriaLabel), function (ariaLabel) { return (react["createElement"](common_FileChooser, { label: message, onChange: onChooseFile, onClick: onClick, accept: "image/png,image/jpeg,image/gif", ariaLabel: ariaLabel, isDisabled: disableChooser })); })); }))),
            react["createElement"]("div", { className: common_styles["w" /* emojiUploadBottom */] }, !errorMessage ? (react["createElement"]("p", null,
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].emojiImageRequirements)))) : (react["createElement"](common_EmojiErrorMessage, { className: common_styles["m" /* emojiChooseFileErrorMessage */], message: errorMessage })))));
    };
    return ChooseEmojiFile;
}(react["PureComponent"]));
var EmojiUploadPicker_EmojiUploadPicker = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiUploadPicker, _super);
    function EmojiUploadPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            uploadStatus: UploadStatus.Waiting,
            chooseEmojiErrorMessage: undefined,
        };
        _this.onNameChange = function (event) {
            var newName = sanitizeName(event.target.value);
            if (_this.state.name !== newName) {
                _this.setState({
                    name: newName,
                });
            }
        };
        _this.onAddEmoji = function () {
            var onUploadEmoji = _this.props.onUploadEmoji;
            var _a = _this.state, filename = _a.filename, name = _a.name, previewImage = _a.previewImage, uploadStatus = _a.uploadStatus;
            if (uploadStatus === UploadStatus.Uploading) {
                return;
            }
            if (filename && name && previewImage) {
                var notifyUpload_1 = function (size) {
                    var width = size.width, height = size.height;
                    _this.setState({
                        uploadStatus: UploadStatus.Uploading,
                    });
                    onUploadEmoji({
                        name: toEmojiName(name),
                        shortName: ":" + name + ":",
                        filename: filename,
                        dataURL: previewImage,
                        width: width,
                        height: height,
                    }, uploadStatus === UploadStatus.Error);
                };
                util_image["a" /* getNaturalImageSize */](previewImage)
                    .then(function (size) {
                    notifyUpload_1(size);
                })
                    .catch(function (error) {
                    Object(logger["a" /* default */])('getNaturalImageSize error', error);
                    // Just set arbitrary size, worse case is it may render
                    // in wrong aspect ratio in some circumstances.
                    notifyUpload_1({
                        width: 32,
                        height: 32,
                    });
                });
            }
        };
        _this.errorOnUpload = function (event) {
            Object(logger["a" /* default */])('File load error: ', event);
            _this.setState({
                chooseEmojiErrorMessage: i18n["a" /* messages */].emojiUploadFailed,
            });
            _this.cancelChooseFile();
        };
        _this.onFileLoad = function (file) { return function (f) {
            return util_image["d" /* parseImage */](f.target.result)
                .then(function () {
                var state = {
                    previewImage: f.target.result,
                    filename: file.name,
                };
                _this.setState(state);
            })
                .catch(function () {
                _this.setState({
                    chooseEmojiErrorMessage: i18n["a" /* messages */].emojiInvalidImage,
                });
                _this.cancelChooseFile();
            });
        }; };
        _this.cancelChooseFile = function () {
            _this.setState({
                previewImage: undefined,
            });
        };
        _this.onChooseFile = function (event) {
            var files = event.target.files;
            if (files.length) {
                var reader = new FileReader();
                var file = files[0];
                if (util_image["b" /* hasFileExceededSize */](file)) {
                    _this.setState({
                        chooseEmojiErrorMessage: i18n["a" /* messages */].emojiImageTooBig,
                    });
                    _this.cancelChooseFile();
                    return;
                }
                reader.addEventListener('load', _this.onFileLoad(file));
                reader.addEventListener('abort', _this.errorOnUpload);
                reader.addEventListener('error', _this.errorOnUpload);
                reader.readAsDataURL(file);
            }
            else {
                _this.cancelChooseFile();
            }
        };
        _this.clearUploadPicker = function () {
            _this.setState({
                name: undefined,
                previewImage: undefined,
                uploadStatus: UploadStatus.Waiting,
            });
        };
        if (props.errorMessage) {
            _this.state.uploadStatus = UploadStatus.Error;
        }
        if (props.initialUploadName) {
            _this.state.name = sanitizeName(props.initialUploadName);
        }
        return _this;
    }
    EmojiUploadPicker.prototype.componentWillReceiveProps = function (nextProps) {
        var updatedState = {};
        if (nextProps.errorMessage) {
            updatedState.uploadStatus = UploadStatus.Error;
        }
        else {
            if (this.state.uploadStatus === UploadStatus.Error) {
                updatedState.uploadStatus = UploadStatus.Waiting;
            }
        }
        if (nextProps.initialUploadName) {
            if (!this.state.name) {
                updatedState.name = sanitizeName(nextProps.initialUploadName);
            }
        }
        this.setState(updatedState);
    };
    EmojiUploadPicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, errorMessage = _a.errorMessage, onUploadCancelled = _a.onUploadCancelled;
        var _b = this.state, name = _b.name, previewImage = _b.previewImage, uploadStatus = _b.uploadStatus, chooseEmojiErrorMessage = _b.chooseEmojiErrorMessage;
        var cancelUpload = function () {
            _this.clearUploadPicker();
            onUploadCancelled();
        };
        if (name && previewImage) {
            return (react["createElement"](common_EmojiUploadPreview, { errorMessage: errorMessage, name: name, onAddEmoji: this.onAddEmoji, onUploadCancelled: cancelUpload, previewImage: previewImage, uploadStatus: uploadStatus }));
        }
        return (react["createElement"](EmojiUploadPicker_ChooseEmojiFile, { name: name, onChooseFile: this.onChooseFile, onClick: this.props.onFileChooserClicked, onNameChange: this.onNameChange, onUploadCancelled: cancelUpload, errorMessage: chooseEmojiErrorMessage ? (react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, chooseEmojiErrorMessage))) : (undefined) }));
    };
    return EmojiUploadPicker;
}(react["PureComponent"]));
/* harmony default export */ var common_EmojiUploadPicker = (EmojiUploadPicker_EmojiUploadPicker);
//# sourceMappingURL=EmojiUploadPicker.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/picker/EmojiPickerFooter.js








var EmojiPickerFooter_EmojiPickerFooter = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiPickerFooter, _super);
    function EmojiPickerFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiPickerFooter.prototype.render = function () {
        var _a = this.props, initialUploadName = _a.initialUploadName, onToneSelected = _a.onToneSelected, onToneSelectorCancelled = _a.onToneSelectorCancelled, onUploadCancelled = _a.onUploadCancelled, onUploadEmoji = _a.onUploadEmoji, onCloseDelete = _a.onCloseDelete, onDeleteEmoji = _a.onDeleteEmoji, selectedEmoji = _a.selectedEmoji, selectedTone = _a.selectedTone, toneEmoji = _a.toneEmoji, uploadErrorMessage = _a.uploadErrorMessage, uploading = _a.uploading, onFileChooserClicked = _a.onFileChooserClicked, onOpenUpload = _a.onOpenUpload, uploadEnabled = _a.uploadEnabled, emojiToDelete = _a.emojiToDelete;
        var previewFooterClassnames = classnames_default()([
            styles["h" /* emojiPickerFooter */],
            styles["i" /* emojiPickerFooterWithTopShadow */],
        ]);
        if (uploading) {
            return (react["createElement"]("div", { className: previewFooterClassnames },
                react["createElement"](common_EmojiUploadPicker, { onUploadCancelled: onUploadCancelled, onUploadEmoji: onUploadEmoji, onFileChooserClicked: onFileChooserClicked, errorMessage: uploadErrorMessage, initialUploadName: initialUploadName })));
        }
        if (emojiToDelete) {
            return (react["createElement"]("div", { className: previewFooterClassnames },
                react["createElement"](common_EmojiDeletePreview, { emoji: emojiToDelete, onDeleteEmoji: onDeleteEmoji, onCloseDelete: onCloseDelete })));
        }
        return (react["createElement"]("div", { className: previewFooterClassnames },
            react["createElement"](EmojiPreview["a" /* default */], { emoji: selectedEmoji, toneEmoji: toneEmoji, selectedTone: selectedTone, onToneSelected: onToneSelected, onToneSelectorCancelled: onToneSelectorCancelled, onOpenUpload: onOpenUpload, uploadEnabled: uploadEnabled })));
    };
    return EmojiPickerFooter;
}(react["PureComponent"]));
/* harmony default export */ var picker_EmojiPickerFooter = (EmojiPickerFooter_EmojiPickerFooter);
//# sourceMappingURL=EmojiPickerFooter.js.map
// EXTERNAL MODULE: ./node_modules/react-virtualized/dist/commonjs/List/index.js
var List = __webpack_require__(1095);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/picker/CategoryTracker.js
/**
 * Mapping between CategoryId and row
 *
 * Tracks which category is visible based on
 * scrollTop, and virtual rows.
 */
var CategoryTracker = /** @class */ (function () {
    function CategoryTracker() {
        this.reset();
    }
    CategoryTracker.prototype.reset = function () {
        this.categoryToRow = new Map();
        this.rowToCategory = new Map();
    };
    CategoryTracker.prototype.add = function (category, row) {
        if (!this.categoryToRow.has(category)) {
            this.categoryToRow.set(category, row);
            this.rowToCategory.set(row, category);
        }
    };
    CategoryTracker.prototype.getRow = function (category) {
        return this.categoryToRow.get(category);
    };
    CategoryTracker.prototype.findNearestCategoryAbove = function (startIndex, list) {
        var rows = Array.from(this.rowToCategory.keys()).sort(function (a, b) { return a - b; });
        if (rows.length === 0) {
            return;
        }
        // Return first category if list not yet rendered
        // or the top row is above the first category
        if (!list || rows[0] > startIndex) {
            return this.rowToCategory.get(rows[0]);
        }
        var bounds = [0, rows.length - 1];
        var index = Math.floor(rows.length / 2);
        while (rows[index] !== startIndex && bounds[0] < bounds[1]) {
            if (rows[index] > startIndex) {
                bounds[1] = Math.max(index - 1, 0);
            }
            else {
                bounds[0] = index + 1;
            }
            index = Math.floor((bounds[0] + bounds[1]) / 2);
        }
        var headerRow = rows[rows[index] > startIndex ? Math.max(index - 1, 0) : index];
        return this.rowToCategory.get(headerRow);
    };
    return CategoryTracker;
}());
/* harmony default export */ var picker_CategoryTracker = (CategoryTracker);
//# sourceMappingURL=CategoryTracker.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/picker/EmojiPickerSizes.js
var EmojiPickerSizes = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/picker/EmojiPickerVirtualItems.js + 3 modules
var EmojiPickerVirtualItems = __webpack_require__(492);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/picker/EmojiPickerList.js












var categoryClassname = 'emoji-category';
var byOrder = function (orderableA, orderableB) {
    return (orderableA.order || 0) - (orderableB.order || 0);
};
var EmojiPickerList_EmojiPickerVirtualList = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiPickerVirtualList, _super);
    function EmojiPickerVirtualList(props) {
        var _this = _super.call(this, props) || this;
        _this.virtualItems = [];
        _this.categoryTracker = new picker_CategoryTracker();
        _this.onEmojiMouseEnter = function (emojiId, emoji) {
            if (_this.props.onEmojiActive) {
                _this.props.onEmojiActive(emojiId, emoji);
            }
        };
        _this.onSearch = function (e) {
            if (_this.props.onSearch) {
                _this.props.onSearch(e.target.value);
            }
        };
        _this.buildVirtualItemFromGroup = function (group) {
            var _a = _this.props, onEmojiSelected = _a.onEmojiSelected, onEmojiDelete = _a.onEmojiDelete;
            var items = [];
            items.push(new EmojiPickerVirtualItems["a" /* CategoryHeadingItem */]({
                id: group.category,
                title: group.title,
                className: categoryClassname,
            }));
            var remainingEmojis = group.emojis;
            while (remainingEmojis.length > 0) {
                var rowEmojis = remainingEmojis.slice(0, EmojiPickerSizes["a" /* sizes */].emojiPerRow);
                remainingEmojis = remainingEmojis.slice(EmojiPickerSizes["a" /* sizes */].emojiPerRow);
                items.push(new EmojiPickerVirtualItems["b" /* EmojisRowItem */]({
                    emojis: rowEmojis,
                    title: group.title,
                    showDelete: group.title === constants["n" /* userCustomTitle */],
                    onSelected: onEmojiSelected,
                    onDelete: onEmojiDelete,
                    onMouseMove: _this.onEmojiMouseEnter,
                }));
            }
            return items;
        };
        _this.buildVirtualItems = function (props, _state) {
            var emojis = props.emojis, loading = props.loading, query = props.query;
            var items = [];
            _this.categoryTracker.reset();
            items.push(new EmojiPickerVirtualItems["d" /* SearchItem */]({
                onChange: _this.onSearch,
                query: query,
            }));
            if (loading) {
                items.push(new EmojiPickerVirtualItems["c" /* LoadingItem */]());
            }
            else {
                if (query) {
                    var search = CategoryDescriptionMap.SEARCH;
                    // Only a single "result" category
                    items = tslib_es6["__spread"](items, _this.buildVirtualItemFromGroup({
                        category: 'SEARCH',
                        title: search.name,
                        emojis: emojis,
                        order: search.order,
                    }));
                }
                else {
                    // Group by category
                    // Not searching show in categories.
                    _this.allEmojiGroups.forEach(function (group) {
                        // Optimisation - avoid re-rendering unaffected groups for the current selectedShortcut
                        // by not passing it to irrelevant groups
                        _this.categoryTracker.add(group.emojis[0].category, items.length);
                        items = tslib_es6["__spread"](items, _this.buildVirtualItemFromGroup(group));
                    });
                }
            }
            var rowCountChanged = _this.virtualItems.length !== items.length;
            _this.virtualItems = items;
            var list = _this.refs.list;
            if (!rowCountChanged && list) {
                // Row count has not changed, so need to tell list to rerender.
                list.forceUpdateGrid();
            }
            if (!query && list) {
                // VirtualList can apply stale heights since it performs a shallow
                // compare to check if the list has changed. Should manually recompute
                // row heights for the case when frequent category come in later
                list.recomputeRowHeights();
            }
        };
        _this.addToCategoryMap = function (categoryToGroupMap, emoji, category) {
            if (!categoryToGroupMap[category]) {
                var categoryDefinition = CategoryDescriptionMap[category];
                categoryToGroupMap[category] = {
                    emojis: [],
                    title: categoryDefinition.name,
                    category: category,
                    order: categoryDefinition.order,
                };
            }
            categoryToGroupMap[category].emojis.push(emoji);
            return categoryToGroupMap;
        };
        _this.groupByCategory = function (currentUser) { return function (categoryToGroupMap, emoji) {
            _this.addToCategoryMap(categoryToGroupMap, emoji, emoji.category);
            // separate user emojis
            if (emoji.category === constants["b" /* customCategory */] &&
                currentUser &&
                emoji.creatorUserId === currentUser.id) {
                _this.addToCategoryMap(categoryToGroupMap, emoji, 'USER_CUSTOM');
            }
            return categoryToGroupMap;
        }; };
        _this.buildEmojiGroupedByCategory = function (emojis, currentUser) {
            var categoryToGroupMap = emojis.reduce(_this.groupByCategory(currentUser), {});
            _this.allEmojiGroups = Object.keys(categoryToGroupMap)
                .map(function (key) { return categoryToGroupMap[key]; })
                .map(function (group) {
                if (group.category !== 'FREQUENT') {
                    group.emojis.sort(byOrder);
                }
                return group;
            })
                .sort(byOrder);
        };
        _this.repaintList = function () {
            if (_this.refs.root) {
                var root = _this.refs.root;
                var display = root.style.display;
                root.style.display = 'none';
                // we need to access offset to force repaint
                // eslint-disable-next-line no-unused-expressions
                root.offsetHeight;
                root.style.display = display;
            }
        };
        /**
         * Checks if list is showing a new CategoryId
         * to inform selector to change active category
         */
        _this.checkCategoryIdChange = function (indexes) {
            var startIndex = indexes.startIndex;
            // FS-1844 Fix a rendering problem when scrolling to the top
            if (startIndex === 0) {
                _this.repaintList();
            }
            if (!_this.props.query) {
                // Calculate category in view - only relevant if categories shown, i.e. no query
                var list = _this.refs.list;
                var currentCategory = _this.categoryTracker.findNearestCategoryAbove(startIndex, list);
                if (currentCategory && _this.activeCategoryId !== currentCategory) {
                    _this.activeCategoryId = currentCategory;
                    if (_this.props.onCategoryActivated) {
                        _this.props.onCategoryActivated(currentCategory);
                    }
                }
            }
        };
        _this.rowSize = function (_a) {
            var index = _a.index;
            return _this.virtualItems[index].height;
        };
        _this.renderRow = function (context) {
            return Object(EmojiPickerVirtualItems["e" /* virtualItemRenderer */])(_this.virtualItems, context);
        };
        _this.buildEmojiGroupedByCategory(props.emojis, props.currentUser);
        _this.buildVirtualItems(props, _this.state);
        return _this;
    }
    EmojiPickerVirtualList.prototype.getChildContext = function () {
        var emoji = this.context.emoji;
        return {
            emoji: tslib_es6["__assign"]({}, emoji),
        };
    };
    EmojiPickerVirtualList.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (this.props.emojis !== nextProps.emojis ||
            this.props.selectedTone !== nextProps.selectedTone ||
            this.props.loading !== nextProps.loading ||
            this.props.query !== nextProps.query) {
            if (!nextProps.query) {
                // Only refresh if no query
                this.buildEmojiGroupedByCategory(nextProps.emojis, nextProps.currentUser);
            }
            this.buildVirtualItems(nextProps, nextState);
        }
    };
    /**
     * Scrolls to a category in the list view
     */
    EmojiPickerVirtualList.prototype.reveal = function (category) {
        var row = this.categoryTracker.getRow(category);
        var list = this.refs.list;
        list.scrollToRow(row);
    };
    EmojiPickerVirtualList.prototype.scrollToBottom = function () {
        var list = this.refs.list;
        list.scrollToRow(this.virtualItems.length);
    };
    EmojiPickerVirtualList.prototype.render = function () {
        var _a = this.props, onMouseLeave = _a.onMouseLeave, onMouseEnter = _a.onMouseEnter;
        var classes = [styles["j" /* emojiPickerList */]];
        return (react["createElement"]("div", { ref: "root", className: classnames_default()(classes), onMouseLeave: onMouseLeave, onMouseEnter: onMouseEnter },
            react["createElement"](List["List"], { ref: "list", height: EmojiPickerSizes["a" /* sizes */].listHeight, overscanRowCount: 5, rowCount: this.virtualItems.length, rowHeight: this.rowSize, rowRenderer: this.renderRow, scrollToAlignment: "start", width: EmojiPickerSizes["a" /* sizes */].listWidth, className: styles["p" /* virtualList */], onRowsRendered: this.checkCategoryIdChange })));
    };
    EmojiPickerVirtualList.contextTypes = {
        emoji: prop_types["object"],
    };
    EmojiPickerVirtualList.childContextTypes = {
        emoji: prop_types["object"],
    };
    EmojiPickerVirtualList.defaultProps = {
        onEmojiSelected: function () { },
        onEmojiActive: function () { },
        onEmojiDelete: function () { },
        onCategoryActivated: function () { },
        onSearch: function () { },
    };
    return EmojiPickerVirtualList;
}(react["PureComponent"]));
/* harmony default export */ var EmojiPickerList = (EmojiPickerList_EmojiPickerVirtualList);
//# sourceMappingURL=EmojiPickerList.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/picker/EmojiPickerComponent.js



















var FREQUENTLY_USED_MAX = 16;
var EmojiPickerComponent_EmojiPickerComponent = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiPickerComponent, _super);
    function EmojiPickerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onEmojiActive = function (_emojiId, emoji) {
            if (_this.state.selectedEmoji !== emoji) {
                _this.setState({
                    selectedEmoji: emoji,
                    showUploadButton: false,
                });
            }
            else {
                _this.setState({
                    showUploadButton: false,
                });
            }
        };
        _this.onCategoryActivated = function (category) {
            if (_this.state.activeCategory !== category) {
                _this.setState({
                    activeCategory: category,
                });
            }
        };
        _this.onCategorySelected = function (categoryId) {
            var emojiProvider = _this.props.emojiProvider;
            if (!categoryId) {
                return;
            }
            emojiProvider.findInCategory(categoryId).then(function (emojisInCategory) {
                var disableCategories = _this.state.disableCategories;
                if (!disableCategories) {
                    var selectedEmoji = void 0;
                    if (emojisInCategory && emojisInCategory.length > 0) {
                        selectedEmoji = Object(EmojiRepository["b" /* getEmojiVariation */])(emojisInCategory[0], {
                            skinTone: _this.state.selectedTone,
                        });
                    }
                    var emojiPickerList = _this.refs.emojiPickerList;
                    if (emojiPickerList) {
                        emojiPickerList.reveal(categoryId);
                    }
                    _this.setState({
                        activeCategory: categoryId,
                        selectedEmoji: selectedEmoji,
                    });
                    _this.fireAnalytics(Object(analytics["a" /* categoryClickedEvent */])({ category: categoryId }));
                }
            });
        };
        _this.onFileChooserClicked = function () {
            _this.fireAnalytics(Object(analytics["j" /* selectedFileEvent */])());
        };
        _this.onEmojiPickerMouseLeave = function () {
            _this.setState({
                showUploadButton: true,
            });
        };
        _this.onEmojiPickerMouseEnter = function () {
            _this.setState({
                showUploadButton: false,
            });
        };
        _this.fireAnalytics = function (analyticsEvent) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                Object(analytics["c" /* createAndFireEventInElementsChannel */])(analyticsEvent)(createAnalyticsEvent);
            }
        };
        _this.calculateElapsedTime = function () {
            return Date.now() - _this.openTime;
        };
        _this.onUploadSupported = function (supported) {
            _this.setState({
                uploadSupported: supported,
            });
        };
        _this.onSearch = function (query) {
            _this.updateEmojis(query, { skinTone: _this.state.selectedTone });
        };
        _this.onSearchResult = function (searchResults) {
            var frequentlyUsedEmoji = _this.state.frequentlyUsedEmojis || [];
            var searchQuery = searchResults.query || '';
            var emojiToRender = _this.buildQuerySpecificEmojiList(searchQuery, searchResults.emojis, frequentlyUsedEmoji);
            if (searchQuery !== _this.state.query) {
                _this.fireAnalytics(Object(analytics["i" /* pickerSearchedEvent */])({
                    queryLength: searchQuery.length,
                    numMatches: emojiToRender.length,
                }));
            }
            _this.setStateAfterEmojiChange(searchQuery, emojiToRender, searchResults.emojis, frequentlyUsedEmoji);
        };
        _this.onFrequentEmojiResult = function (frequentEmoji) {
            var _a = _this.state, query = _a.query, searchEmojis = _a.searchEmojis;
            // change the category of each of the featured emoji
            var recategorised = frequentEmoji.map(function (emoji) {
                var clone = JSON.parse(JSON.stringify(emoji));
                clone.category = constants["k" /* frequentCategory */];
                return clone;
            });
            var emojiToRender = _this.buildQuerySpecificEmojiList(query, searchEmojis, recategorised);
            _this.setStateAfterEmojiChange(query, emojiToRender, searchEmojis, recategorised);
        };
        _this.onDynamicCategoryChange = function (categories) {
            _this.setState({
                dynamicCategories: categories,
            });
        };
        _this.onProviderChange = {
            result: _this.onSearchResult,
        };
        _this.onToneSelected = function (toneValue) {
            _this.setState({
                selectedTone: toneValue,
            });
            _this.props.emojiProvider.setSelectedTone(toneValue);
            var _a = _this.state.query, query = _a === void 0 ? '' : _a;
            _this.updateEmojis(query, { skinTone: toneValue });
        };
        _this.onToneSelectorCancelled = function () {
            _this.fireAnalytics(Object(analytics["l" /* toneSelectorClosedEvent */])());
        };
        /**
         * Updates the emoji displayed by the picker. If there is no query specified then we expect to retrieve all emoji for display,
         * by category, in the picker. This differs from when there is a query in which case we expect to receive a sorted result matching
         * the search.
         */
        _this.updateEmojis = function (query, options) {
            // if the query is empty then we want the emoji to be in service defined order, unless specified otherwise
            // and we want emoji for the 'frequently used' category to be refreshed as well.
            if (!query) {
                if (!options) {
                    options = {};
                }
                if (!options.sort) {
                    options.sort = types["a" /* SearchSort */].None;
                }
                // take a copy of search options so that the frequently used can be limited to 16 without affecting the full emoji query
                var frequentOptions = tslib_es6["__assign"]({}, options, { sort: types["a" /* SearchSort */].None, limit: FREQUENTLY_USED_MAX });
                _this.props.emojiProvider
                    .getFrequentlyUsed(frequentOptions)
                    .then(_this.onFrequentEmojiResult);
            }
            _this.props.emojiProvider.filter(query, options);
        };
        _this.onOpenUpload = function () {
            // Prime upload token so it's ready when the user adds
            var emojiProvider = _this.props.emojiProvider;
            if (Object(EmojiResource["b" /* supportsUploadFeature */])(emojiProvider)) {
                emojiProvider.prepareForUpload();
            }
            _this.setState({
                uploadErrorMessage: undefined,
                uploading: true,
            });
            _this.fireAnalytics(Object(analytics["q" /* uploadBeginButton */])());
        };
        _this.onUploadEmoji = function (upload, retry) {
            var emojiProvider = _this.props.emojiProvider;
            _this.fireAnalytics(Object(analytics["s" /* uploadConfirmButton */])({ retry: retry }));
            var errorSetter = function (message) {
                _this.setState({
                    uploadErrorMessage: message,
                });
            };
            var onSuccess = function (emojiDescription) {
                _this.setState({
                    activeCategory: constants["b" /* customCategory */],
                    selectedEmoji: emojiDescription,
                    uploading: false,
                });
                // this.loadEmoji(emojiProvider, emojiDescription);
                _this.scrollToEndOfList();
            };
            uploadEmoji(upload, emojiProvider, errorSetter, onSuccess, _this.fireAnalytics);
        };
        _this.onTriggerDelete = function (_emojiId, emoji) {
            _this.fireAnalytics(Object(analytics["d" /* deleteBeginEvent */])({ emojiId: _emojiId.id }));
            _this.setState({ emojiToDelete: emoji });
        };
        _this.onCloseDelete = function () {
            var emojiToDelete = _this.state.emojiToDelete;
            _this.fireAnalytics(Object(analytics["e" /* deleteCancelEvent */])({
                emojiId: emojiToDelete && emojiToDelete.id,
            }));
            _this.setState({ emojiToDelete: undefined });
        };
        _this.onDeleteEmoji = function (emoji) {
            var _a = _this.state, emojiToDelete = _a.emojiToDelete, query = _a.query, selectedTone = _a.selectedTone;
            _this.fireAnalytics(Object(analytics["f" /* deleteConfirmEvent */])({
                emojiId: emojiToDelete && emojiToDelete.id,
            }));
            return _this.props.emojiProvider.deleteSiteEmoji(emoji).then(function (success) {
                if (success) {
                    _this.updateEmojis(query, { skinTone: selectedTone });
                }
                return success;
            });
        };
        _this.scrollToEndOfList = function () {
            var emojiPickerList = _this.refs.emojiPickerList;
            if (emojiPickerList) {
                // Wait a tick to ensure repaint and updated height for picker list
                window.setTimeout(function () {
                    emojiPickerList.scrollToBottom();
                }, 0);
            }
        };
        _this.onUploadCancelled = function () {
            _this.setState({
                uploading: false,
                uploadErrorMessage: undefined,
            });
            _this.fireAnalytics(Object(analytics["r" /* uploadCancelButton */])());
        };
        _this.handlePickerRef = function (ref) {
            if (_this.props.onPickerRef) {
                _this.props.onPickerRef(ref);
            }
        };
        _this.onSelectWrapper = function (emojiId, emoji, event) {
            var onSelection = _this.props.onSelection;
            var query = _this.state.query;
            if (onSelection) {
                onSelection(emojiId, emoji, event);
                _this.fireAnalytics(Object(analytics["h" /* pickerClickedEvent */])({
                    duration: _this.calculateElapsedTime(),
                    emojiId: emojiId.id || '',
                    category: (emoji && emoji.category) || '',
                    type: (emoji && emoji.type) || '',
                    queryLength: (query && query.length) || 0,
                }));
            }
        };
        var emojiProvider = props.emojiProvider, hideToneSelector = props.hideToneSelector;
        _this.state = {
            filteredEmojis: [],
            searchEmojis: [],
            frequentlyUsedEmojis: [],
            query: '',
            dynamicCategories: [],
            selectedTone: !hideToneSelector
                ? emojiProvider.getSelectedTone()
                : undefined,
            loading: true,
            uploadSupported: false,
            uploading: false,
            showUploadButton: true,
        };
        _this.openTime = 0;
        return _this;
    }
    EmojiPickerComponent.prototype.getChildContext = function () {
        return {
            emoji: {
                emojiProvider: this.props.emojiProvider,
            },
        };
    };
    EmojiPickerComponent.prototype.componentWillMount = function () {
        this.openTime = Date.now();
        this.fireAnalytics(Object(analytics["g" /* openedPickerEvent */])());
    };
    EmojiPickerComponent.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, emojiProvider = _a.emojiProvider, hideToneSelector = _a.hideToneSelector;
        emojiProvider.subscribe(this.onProviderChange);
        this.onSearch(this.state.query);
        if (Object(EmojiResource["b" /* supportsUploadFeature */])(emojiProvider)) {
            emojiProvider.isUploadSupported().then(this.onUploadSupported);
        }
        if (!hideToneSelector) {
            var toneEmoji = getToneEmoji(emojiProvider);
            if (Object(type_helpers["n" /* isPromise */])(toneEmoji)) {
                toneEmoji.then(function (emoji) { return _this.setState({ toneEmoji: emoji }); });
            }
            else if (toneEmoji === undefined || Object(type_helpers["f" /* isEmojiDescription */])(toneEmoji)) {
                this.setState({ toneEmoji: toneEmoji });
            }
        }
    };
    EmojiPickerComponent.prototype.componentWillUnmount = function () {
        var emojiProvider = this.props.emojiProvider;
        emojiProvider.unsubscribe(this.onProviderChange);
        this.fireAnalytics(Object(analytics["b" /* closedPickerEvent */])({ duration: this.calculateElapsedTime() }));
    };
    EmojiPickerComponent.prototype.componentWillReceiveProps = function (nextProps) {
        var prevEmojiProvider = this.props.emojiProvider;
        var nextEmojiProvider = nextProps.emojiProvider;
        if (prevEmojiProvider !== nextEmojiProvider) {
            if (Object(EmojiResource["b" /* supportsUploadFeature */])(nextEmojiProvider)) {
                nextEmojiProvider.isUploadSupported().then(this.onUploadSupported);
            }
        }
    };
    EmojiPickerComponent.prototype.componentDidUpdate = function (prevProps) {
        var prevEmojiProvider = prevProps.emojiProvider;
        var currentEmojiProvider = this.props.emojiProvider;
        if (prevEmojiProvider !== currentEmojiProvider) {
            prevEmojiProvider.unsubscribe(this.onProviderChange);
            currentEmojiProvider.subscribe(this.onProviderChange);
            // We changed provider which means we subscribed to filter results for a new subscriber.
            // So we refresh the emoji display with onSearch and we do it here, after the new props have
            // been set since onSearch leads to filter being called on the current emojiProvider.
            // (Calling onSearch in a '...Will...' lifecycle method would lead to filter being called on
            // an emojiProvider we have already unsubscribed from)
            this.onSearch(this.state.query);
        }
    };
    /**
     * If there is no user search in the EmojiPicker then it should display all emoji received from the EmojiRepository and should
     * also include a special category of most frequently used emoji (if there are any). This method decides if we are in this 'no search'
     * state and appends the frequent emoji if necessary.
     *
     * @param searchEmoji the emoji last received from the EmojiRepository after a search (may be empty)
     * @param frequentEmoji the frequently used emoji last received from the EmojiRepository (may be empty)
     */
    EmojiPickerComponent.prototype.buildQuerySpecificEmojiList = function (query, searchEmoji, frequentEmoji) {
        // If there are no frequent emoji, or if there was a search query then we want to take the search result exactly as is.
        if (!frequentEmoji.length || query) {
            return searchEmoji;
        }
        return tslib_es6["__spread"](searchEmoji, frequentEmoji);
    };
    /**
     * Calculate and set the new state of the component in response to the list of emoji changing for some reason (a search has returned
     * or the frequently used emoji have updated.)
     */
    EmojiPickerComponent.prototype.setStateAfterEmojiChange = function (query, emojiToRender, searchEmoji, frequentEmoji) {
        var _this = this;
        var filteredEmojis = this.state.filteredEmojis;
        // Only enable categories for full emoji list (non-search)
        var disableCategories = !!query;
        if (!disableCategories && emojiToRender.length !== filteredEmojis.length) {
            this.getDynamicCategories().then(function (categories) {
                _this.onDynamicCategoryChange(categories);
            });
        }
        var selectedEmoji;
        var activeCategory;
        if (Object(type_helpers["b" /* containsEmojiId */])(emojiToRender, this.state.selectedEmoji)) {
            // Keep existing emoji selected if still in results
            selectedEmoji = this.state.selectedEmoji;
            activeCategory = this.state.activeCategory;
        }
        else {
            selectedEmoji = undefined;
            // Only enable categories for full emoji list (non-search)
            activeCategory = undefined;
        }
        this.setState({
            filteredEmojis: emojiToRender,
            searchEmojis: searchEmoji,
            frequentlyUsedEmojis: frequentEmoji,
            selectedEmoji: selectedEmoji,
            activeCategory: activeCategory,
            disableCategories: disableCategories,
            query: query,
            loading: false,
        });
    };
    EmojiPickerComponent.prototype.getDynamicCategories = function () {
        if (!this.props.emojiProvider.calculateDynamicCategories) {
            return Promise.resolve([]);
        }
        return this.props.emojiProvider.calculateDynamicCategories();
    };
    EmojiPickerComponent.prototype.render = function () {
        var emojiProvider = this.props.emojiProvider;
        var _a = this.state, activeCategory = _a.activeCategory, disableCategories = _a.disableCategories, dynamicCategories = _a.dynamicCategories, filteredEmojis = _a.filteredEmojis, loading = _a.loading, query = _a.query, selectedEmoji = _a.selectedEmoji, selectedTone = _a.selectedTone, toneEmoji = _a.toneEmoji, emojiToDelete = _a.emojiToDelete, uploading = _a.uploading, uploadErrorMessage = _a.uploadErrorMessage, uploadSupported = _a.uploadSupported, showUploadButton = _a.showUploadButton;
        var recordUsageOnSelection = Object(RecordSelectionDefault["a" /* createRecordSelectionDefault */])(emojiProvider, this.onSelectWrapper);
        var formattedErrorMessage = uploadErrorMessage ? (react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, uploadErrorMessage))) : null;
        var classes = [styles["g" /* emojiPicker */]];
        var picker = (react["createElement"]("div", { className: classnames_default()(classes), ref: this.handlePickerRef, "data-emoji-picker-container": true },
            react["createElement"](picker_CategorySelector, { activeCategoryId: activeCategory, dynamicCategories: dynamicCategories, disableCategories: disableCategories, onCategorySelected: this.onCategorySelected }),
            react["createElement"](EmojiPickerList, { emojis: filteredEmojis, currentUser: emojiProvider.getCurrentUser(), onEmojiSelected: recordUsageOnSelection, onEmojiActive: this.onEmojiActive, onEmojiDelete: this.onTriggerDelete, onCategoryActivated: this.onCategoryActivated, onMouseLeave: this.onEmojiPickerMouseLeave, onMouseEnter: this.onEmojiPickerMouseEnter, onSearch: this.onSearch, query: query, selectedTone: selectedTone, loading: loading, ref: "emojiPickerList" }),
            react["createElement"](picker_EmojiPickerFooter, { initialUploadName: query, selectedEmoji: selectedEmoji, selectedTone: selectedTone, onToneSelected: this.onToneSelected, onToneSelectorCancelled: this.onToneSelectorCancelled, toneEmoji: toneEmoji, uploading: uploading, emojiToDelete: emojiToDelete, uploadErrorMessage: formattedErrorMessage, uploadEnabled: uploadSupported && showUploadButton && !uploading, onUploadEmoji: this.onUploadEmoji, onUploadCancelled: this.onUploadCancelled, onDeleteEmoji: this.onDeleteEmoji, onCloseDelete: this.onCloseDelete, onFileChooserClicked: this.onFileChooserClicked, onOpenUpload: this.onOpenUpload })));
        return picker;
    };
    EmojiPickerComponent.childContextTypes = {
        emoji: prop_types["object"],
    };
    EmojiPickerComponent.defaultProps = {
        onSelection: function () { },
    };
    return EmojiPickerComponent;
}(react["PureComponent"]));
/* harmony default export */ var picker_EmojiPickerComponent = __webpack_exports__["default"] = (EmojiPickerComponent_EmojiPickerComponent);
//# sourceMappingURL=EmojiPickerComponent.js.map

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_VisibleCellRange = exports.bpfrpt_proptype_Alignment = exports.bpfrpt_proptype_OverscanIndicesGetter = exports.bpfrpt_proptype_OverscanIndices = exports.bpfrpt_proptype_OverscanIndicesGetterParams = exports.bpfrpt_proptype_RenderedSection = exports.bpfrpt_proptype_ScrollbarPresenceChange = exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_NoContentRenderer = exports.bpfrpt_proptype_CellSize = exports.bpfrpt_proptype_CellSizeGetter = exports.bpfrpt_proptype_CellRangeRenderer = exports.bpfrpt_proptype_CellRangeRendererParams = exports.bpfrpt_proptype_StyleCache = exports.bpfrpt_proptype_CellCache = exports.bpfrpt_proptype_CellRenderer = exports.bpfrpt_proptype_CellRendererParams = exports.bpfrpt_proptype_CellPosition = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _ScalingCellSizeAndPositionManager = __webpack_require__(980);

var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var bpfrpt_proptype_CellPosition =  true ? null : undefined;
var bpfrpt_proptype_CellRendererParams =  true ? null : undefined;
var bpfrpt_proptype_CellRenderer =  true ? null : undefined;
var bpfrpt_proptype_CellCache =  true ? null : undefined;
var bpfrpt_proptype_StyleCache =  true ? null : undefined;
var bpfrpt_proptype_CellRangeRendererParams =  true ? null : undefined;
var bpfrpt_proptype_CellRangeRenderer =  true ? null : undefined;
var bpfrpt_proptype_CellSizeGetter =  true ? null : undefined;
var bpfrpt_proptype_CellSize =  true ? null : undefined;
var bpfrpt_proptype_NoContentRenderer =  true ? null : undefined;
var bpfrpt_proptype_Scroll =  true ? null : undefined;
var bpfrpt_proptype_ScrollbarPresenceChange =  true ? null : undefined;
var bpfrpt_proptype_RenderedSection =  true ? null : undefined;
var bpfrpt_proptype_OverscanIndicesGetterParams =  true ? null : undefined;
var bpfrpt_proptype_OverscanIndices =  true ? null : undefined;
var bpfrpt_proptype_OverscanIndicesGetter =  true ? null : undefined;
var bpfrpt_proptype_Alignment =  true ? null : undefined;
var bpfrpt_proptype_VisibleCellRange =  true ? null : undefined;
exports.bpfrpt_proptype_CellPosition = bpfrpt_proptype_CellPosition;
exports.bpfrpt_proptype_CellRendererParams = bpfrpt_proptype_CellRendererParams;
exports.bpfrpt_proptype_CellRenderer = bpfrpt_proptype_CellRenderer;
exports.bpfrpt_proptype_CellCache = bpfrpt_proptype_CellCache;
exports.bpfrpt_proptype_StyleCache = bpfrpt_proptype_StyleCache;
exports.bpfrpt_proptype_CellRangeRendererParams = bpfrpt_proptype_CellRangeRendererParams;
exports.bpfrpt_proptype_CellRangeRenderer = bpfrpt_proptype_CellRangeRenderer;
exports.bpfrpt_proptype_CellSizeGetter = bpfrpt_proptype_CellSizeGetter;
exports.bpfrpt_proptype_CellSize = bpfrpt_proptype_CellSize;
exports.bpfrpt_proptype_NoContentRenderer = bpfrpt_proptype_NoContentRenderer;
exports.bpfrpt_proptype_Scroll = bpfrpt_proptype_Scroll;
exports.bpfrpt_proptype_ScrollbarPresenceChange = bpfrpt_proptype_ScrollbarPresenceChange;
exports.bpfrpt_proptype_RenderedSection = bpfrpt_proptype_RenderedSection;
exports.bpfrpt_proptype_OverscanIndicesGetterParams = bpfrpt_proptype_OverscanIndicesGetterParams;
exports.bpfrpt_proptype_OverscanIndices = bpfrpt_proptype_OverscanIndices;
exports.bpfrpt_proptype_OverscanIndicesGetter = bpfrpt_proptype_OverscanIndicesGetter;
exports.bpfrpt_proptype_Alignment = bpfrpt_proptype_Alignment;
exports.bpfrpt_proptype_VisibleCellRange = bpfrpt_proptype_VisibleCellRange;

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

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createAndFireEventInElementsChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return openedPickerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return closedPickerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return pickerClickedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categoryClickedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return pickerSearchedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return toneSelectedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return toneSelectorOpenedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return toneSelectorClosedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return uploadBeginButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return uploadConfirmButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return uploadCancelButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return uploadSucceededEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return uploadFailedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteBeginEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteConfirmEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteCancelEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return selectedFileEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return typeaheadCancelledEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return typeaheadSelectedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return typeaheadRenderedEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _atlaskit_analytics_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(905);
/* harmony import */ var _version_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
var _version_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(977, 1);



var createAndFireEventInElementsChannel = Object(_atlaskit_analytics_next__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('fabric-elements');
var createEvent = function (eventType, action, actionSubject, actionSubjectId, attributes) {
    if (attributes === void 0) { attributes = {}; }
    return ({
        eventType: eventType,
        action: action,
        actionSubject: actionSubject,
        actionSubjectId: actionSubjectId,
        attributes: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ packageName: _version_json__WEBPACK_IMPORTED_MODULE_2__[/* name */ "a"],
            packageVersion: _version_json__WEBPACK_IMPORTED_MODULE_2__[/* version */ "b"] }, attributes),
    });
};
var emojiPickerEvent = function (action, attributes, actionSubjectId) {
    if (attributes === void 0) { attributes = {}; }
    return createEvent('ui', action, 'emojiPicker', actionSubjectId, attributes);
};
var openedPickerEvent = function () { return emojiPickerEvent('opened'); };
var closedPickerEvent = function (attributes) {
    return emojiPickerEvent('closed', attributes);
};
var skinTones = [
    { id: '-1f3fb', skinToneModifier: 'light' },
    { id: '-1f3fc', skinToneModifier: 'mediumLight' },
    { id: '-1f3fd', skinToneModifier: 'medium' },
    { id: '-1f3fe', skinToneModifier: 'mediumDark' },
    { id: '-1f3ff', skinToneModifier: 'dark' },
];
var getSkinTone = function (emojiId) {
    var e_1, _a;
    if (!emojiId) {
        return {};
    }
    try {
        for (var skinTones_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](skinTones), skinTones_1_1 = skinTones_1.next(); !skinTones_1_1.done; skinTones_1_1 = skinTones_1.next()) {
            var _b = skinTones_1_1.value, id = _b.id, skinToneModifier = _b.skinToneModifier;
            if (emojiId.indexOf(id) !== -1) {
                return { skinToneModifier: skinToneModifier, baseEmojiId: emojiId.replace(id, '') };
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (skinTones_1_1 && !skinTones_1_1.done && (_a = skinTones_1.return)) _a.call(skinTones_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {};
};
var pickerClickedEvent = function (attributes) {
    return emojiPickerEvent('clicked', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, getSkinTone(attributes.emojiId), attributes), 'emoji');
};
var categoryClickedEvent = function (attributes) {
    return emojiPickerEvent('clicked', attributes, 'category');
};
var pickerSearchedEvent = function (attributes) { return emojiPickerEvent('searched', attributes, 'query'); };
var skintoneSelectorEvent = function (action, attributes) {
    if (attributes === void 0) { attributes = {}; }
    return createEvent('ui', action, 'emojiSkintoneSelector', undefined, attributes);
};
var toneSelectedEvent = function (attributes) {
    return skintoneSelectorEvent('clicked', attributes);
};
var toneSelectorOpenedEvent = function (attributes) { return skintoneSelectorEvent('opened', attributes); };
var toneSelectorClosedEvent = function () { return skintoneSelectorEvent('cancelled'); };
var emojiUploaderEvent = function (action, actionSubjectId, attributes) { return createEvent('ui', action, 'emojiUploader', actionSubjectId, attributes); };
var uploadBeginButton = function () {
    return emojiUploaderEvent('clicked', 'addButton');
};
var uploadConfirmButton = function (attributes) {
    return emojiUploaderEvent('clicked', 'confirmButton', attributes);
};
var uploadCancelButton = function () {
    return emojiUploaderEvent('clicked', 'cancelButton');
};
var uploadSucceededEvent = function (attributes) {
    return createEvent('operational', 'finished', 'emojiUploader', undefined, attributes);
};
var uploadFailedEvent = function (attributes) {
    return createEvent('operational', 'failed', 'emojiUploader', undefined, attributes);
};
var deleteBeginEvent = function (attributes) {
    return createEvent('ui', 'clicked', 'emojiPicker', 'deleteEmojiTrigger', attributes);
};
var deleteConfirmEvent = function (attributes) {
    return createEvent('ui', 'clicked', 'emojiPicker', 'deleteEmojiConfirm', attributes);
};
var deleteCancelEvent = function (attributes) {
    return createEvent('ui', 'clicked', 'emojiPicker', 'deleteEmojiCancel', attributes);
};
var selectedFileEvent = function () {
    return createEvent('ui', 'clicked', 'emojiUploader', 'selectFile');
};
var extractCommonAttributes = function (query, emojiList) {
    return {
        queryLength: query ? query.length : 0,
        spaceInQuery: query ? query.indexOf(' ') !== -1 : false,
        emojiIds: emojiList
            ? emojiList
                .map(function (emoji) { return emoji.id; })
                .filter(Boolean)
                .slice(0, 20)
            : [],
    };
};
var typeaheadCancelledEvent = function (duration, query, emojiList) {
    return createEvent('ui', 'cancelled', 'emojiTypeahead', undefined, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ duration: duration }, extractCommonAttributes(query, emojiList)));
};
var getPosition = function (emojiList, selectedEmoji) {
    if (emojiList) {
        var index = emojiList.findIndex(function (emoji) { return emoji.id === selectedEmoji.id; });
        return index === -1 ? undefined : index;
    }
    return;
};
var typeaheadSelectedEvent = function (pressed, duration, emoji, emojiList, query, exactMatch) {
    return createEvent('ui', pressed ? 'pressed' : 'clicked', 'emojiTypeahead', undefined, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ duration: duration, position: getPosition(emojiList, emoji) }, extractCommonAttributes(query, emojiList), getSkinTone(emoji.id), { emojiType: emoji.type, exactMatch: exactMatch || false }));
};
var typeaheadRenderedEvent = function (duration, query, emojiList) {
    return createEvent('operational', 'rendered', 'emojiTypeahead', undefined, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ duration: duration }, extractCommonAttributes(query, emojiList)));
};
//# sourceMappingURL=analytics.js.map

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1102);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 977:
/***/ (function(module) {

module.exports = {"a":"@atlaskit/emoji","b":"62.2.1"};

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRecordSelectionDefault; });
/**
 * A function that will wrap any configured Emoji 'onSelection' function to ensure recordSelection is always
 * called.
 *
 * @param provider the EmojiProvider which will be called on each emoji selection
 * @param onSelect the onSelect function that is explicitly configured on the Emoji component.
 */
var createRecordSelectionDefault = function (provider, onSelect) {
    return function (emojiId, emoji, event) {
        try {
            if (provider.recordSelection && emoji) {
                provider.recordSelection(emoji);
            }
        }
        finally {
            if (onSelect) {
                onSelect(emojiId, emoji, event);
            }
        }
    };
};
//# sourceMappingURL=RecordSelectionDefault.js.map

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(214);
var core = __webpack_require__(162);
var fails = __webpack_require__(217);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(1108);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(184);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(963);

var _createClass3 = _interopRequireDefault(_createClass2);

var _CellSizeAndPositionManager = __webpack_require__(1109);

var _CellSizeAndPositionManager2 = _interopRequireDefault(_CellSizeAndPositionManager);

var _maxElementSize = __webpack_require__(1111);

var _types = __webpack_require__(943);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */


/**
 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels where as Edge tops out at ~1.5M pixels).
 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
 */

var ScalingCellSizeAndPositionManager = function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === undefined ? (0, _maxElementSize.getMaxElementSize)() : _ref$maxScrollSize,
        params = (0, _objectWithoutProperties3.default)(_ref, ['maxScrollSize']);
    (0, _classCallCheck3.default)(this, ScalingCellSizeAndPositionManager);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager2.default(params);
    this._maxScrollSize = maxScrollSize;
  }

  (0, _createClass3.default)(ScalingCellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: 'configure',
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }

    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */

  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }

    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }

    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }

    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;

      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });

      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: '_getOffsetPercentage',
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;

      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: '_offsetToSafeOffset',
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: '_safeOffsetToOffset',
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);
  return ScalingCellSizeAndPositionManager;
}();

exports.default = ScalingCellSizeAndPositionManager;

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(566);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 982:
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

var AddIcon = function AddIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M13 11V3.993A.997.997 0 0 0 12 3c-.556 0-1 .445-1 .993V11H3.993A.997.997 0 0 0 3 12c0 .557.445 1 .993 1H11v7.007c0 .548.448.993 1 .993.556 0 1-.445 1-.993V13h7.007A.997.997 0 0 0 21 12c0-.556-.445-1-.993-1H13z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

AddIcon.displayName = 'AddIcon';
var _default = AddIcon;
exports.default = _default;

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@atlaskit/button/components/Button.js + 4 modules
var Button = __webpack_require__(829);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/add.js
var add = __webpack_require__(982);
var add_default = /*#__PURE__*/__webpack_require__.n(add);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(64);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/CachingEmoji.js
var CachingEmoji = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/styles.js
var styles = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/Emoji.js
var Emoji = __webpack_require__(308);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/mouse.js
var mouse = __webpack_require__(402);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/EmojiButton.js





var handleMouseDown = function (props, event) {
    var onSelected = props.onSelected;
    event.preventDefault();
    if (onSelected && Object(mouse["b" /* leftClick */])(event)) {
        onSelected();
    }
};
var EmojiButton = function (props) {
    var emoji = props.emoji, selectOnHover = props.selectOnHover;
    var classes = [styles["l" /* emojiButton */]];
    return (react["createElement"]("button", { className: classnames_default()(classes), onMouseDown: function (event) {
            handleMouseDown(props, event);
        } },
        react["createElement"](Emoji["a" /* default */], { emoji: emoji, selectOnHover: selectOnHover })));
};
/* harmony default export */ var common_EmojiButton = (EmojiButton);
//# sourceMappingURL=EmojiButton.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/i18n.js
var i18n = __webpack_require__(177);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsEvents.js
var withAnalyticsEvents = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/analytics.js
var analytics = __webpack_require__(949);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/ToneSelector.js






var extractAllTones = function (emoji) {
    if (emoji.skinVariations) {
        return tslib_es6["__spread"]([emoji], emoji.skinVariations);
    }
    return [emoji];
};
var ToneSelector_ToneSelectorInternal = /** @class */ (function (_super) {
    tslib_es6["__extends"](ToneSelectorInternal, _super);
    function ToneSelectorInternal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onToneSelectedHandler = function (skinTone) {
            var onToneSelected = _this.props.onToneSelected;
            onToneSelected(skinTone);
            var toneList = [
                'default',
                'light',
                'mediumLight',
                'medium',
                'mediumDark',
                'dark',
            ];
            _this.fireEvent(Object(analytics["k" /* toneSelectedEvent */])({
                skinToneModifier: toneList[skinTone],
            }));
        };
        return _this;
    }
    ToneSelectorInternal.prototype.fireEvent = function (event) {
        var createAnalyticsEvent = this.props.createAnalyticsEvent;
        if (createAnalyticsEvent) {
            Object(analytics["c" /* createAndFireEventInElementsChannel */])(event)(createAnalyticsEvent);
        }
    };
    ToneSelectorInternal.prototype.componentWillMount = function () {
        this.fireEvent(Object(analytics["m" /* toneSelectorOpenedEvent */])({}));
    };
    ToneSelectorInternal.prototype.render = function () {
        var _this = this;
        var emoji = this.props.emoji;
        var toneEmojis = extractAllTones(emoji);
        return (react["createElement"]("div", null, toneEmojis.map(function (tone, i) { return (react["createElement"](common_EmojiButton, { key: "" + tone.id, onSelected: function () { return _this.onToneSelectedHandler(i); }, emoji: tone, selectOnHover: true })); })));
    };
    return ToneSelectorInternal;
}(react["PureComponent"]));

var ToneSelector = Object(withAnalyticsEvents["a" /* default */])()(ToneSelector_ToneSelectorInternal);
/* harmony default export */ var common_ToneSelector = (ToneSelector);
//# sourceMappingURL=ToneSelector.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/EmojiPreview.js












var EmojiPreview_EmojiPreview = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiPreview, _super);
    function EmojiPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectingTone: false,
        };
        _this.onToneButtonClick = function () {
            _this.setState({
                selectingTone: true,
            });
        };
        _this.onToneSelected = function (toneValue) {
            _this.setState({
                selectingTone: false,
            });
            if (_this.props.onToneSelected) {
                _this.props.onToneSelected(toneValue);
            }
        };
        _this.onMouseLeave = function () {
            var selectingTone = _this.state.selectingTone;
            var onToneSelectorCancelled = _this.props.onToneSelectorCancelled;
            if (selectingTone && onToneSelectorCancelled) {
                onToneSelectorCancelled();
            }
            _this.setState({
                selectingTone: false,
            });
        };
        return _this;
    }
    EmojiPreview.prototype.renderTones = function () {
        var _this = this;
        var _a = this.props, toneEmoji = _a.toneEmoji, selectedTone = _a.selectedTone;
        if (!toneEmoji) {
            return null;
        }
        if (this.state.selectingTone) {
            return (react["createElement"]("div", { className: styles["I" /* toneSelectorContainer */] },
                react["createElement"](common_ToneSelector, { emoji: toneEmoji, onToneSelected: this.onToneSelected })));
        }
        var previewEmoji = toneEmoji;
        if (selectedTone && previewEmoji.skinVariations) {
            previewEmoji = previewEmoji.skinVariations[(selectedTone || 1) - 1];
        }
        return (react["createElement"]("div", { className: styles["e" /* buttons */] },
            react["createElement"](common_EmojiButton, { emoji: previewEmoji, onSelected: function () { return _this.onToneButtonClick(); }, selectOnHover: true })));
    };
    EmojiPreview.prototype.renderEmojiPreview = function () {
        var _a, _b;
        var selectingTone = this.state.selectingTone;
        var _c = this.props, emoji = _c.emoji, uploadEnabled = _c.uploadEnabled;
        if (!emoji || selectingTone || uploadEnabled) {
            return null;
        }
        var previewClasses = classnames_default()((_a = {},
            _a[styles["A" /* preview */]] = true,
            _a[styles["T" /* withToneSelector */]] = !!this.props.toneEmoji,
            _a));
        var previewTextClasses = classnames_default()((_b = {},
            _b[styles["E" /* previewText */]] = true,
            _b[styles["D" /* previewSingleLine */]] = !emoji.name,
            _b));
        return (react["createElement"]("div", { className: previewClasses },
            react["createElement"]("span", { className: styles["C" /* previewImg */] },
                react["createElement"](CachingEmoji["a" /* default */], { emoji: emoji })),
            react["createElement"]("div", { className: previewTextClasses },
                react["createElement"]("span", { className: styles["x" /* name */] }, emoji.name),
                react["createElement"]("span", { className: styles["H" /* shortName */] }, emoji.shortName))));
    };
    // note: emoji-picker-add-emoji className is used by pollinator synthetic checks
    EmojiPreview.prototype.renderAddOwnEmoji = function () {
        var _a = this.props, onOpenUpload = _a.onOpenUpload, uploadEnabled = _a.uploadEnabled;
        var selectingTone = this.state.selectingTone;
        if (!uploadEnabled || selectingTone) {
            return null;
        }
        return (react["createElement"]("div", { className: styles["a" /* AddCustomEmoji */] },
            react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, i18n["a" /* messages */].addCustomEmojiLabel), function (label) { return (react["createElement"](Button["a" /* default */], { onClick: onOpenUpload, iconBefore: react["createElement"](add_default.a, { label: label, size: "small" }), appearance: "subtle", className: styles["b" /* addCustomEmojiButton */] + ' emoji-picker-add-emoji' }, label)); })));
    };
    EmojiPreview.prototype.render = function () {
        var sectionClasses = classnames_default()([
            styles["q" /* emojiPreview */],
            styles["s" /* emojiPreviewSection */],
        ]);
        return (react["createElement"]("div", { className: sectionClasses, onMouseLeave: this.onMouseLeave },
            this.renderAddOwnEmoji(),
            this.renderEmojiPreview(),
            this.renderTones()));
    };
    return EmojiPreview;
}(react["PureComponent"]));
/* harmony default export */ var common_EmojiPreview = __webpack_exports__["a"] = (EmojiPreview_EmojiPreview);
//# sourceMappingURL=EmojiPreview.js.map

/***/ })

}]);