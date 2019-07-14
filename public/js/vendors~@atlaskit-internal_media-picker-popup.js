(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28,15,16,17],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/components/localUpload.js
var localUpload = __webpack_require__(959);

// EXTERNAL MODULE: ./node_modules/exenv/index.js
var exenv = __webpack_require__(163);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/util/documentReady.js

// https://gist.github.com/dragosh/e9baf2d7bf3673a98c91
var checkDomReady = function () {
    if (document.readyState === 'complete') {
        return Promise.resolve();
    }
    return new Promise(function (resolve) {
        window.addEventListener('load', resolve);
    });
};
var whenDomReady = exenv["canUseDOM"]
    ? checkDomReady()
    : Promise.resolve();
//# sourceMappingURL=documentReady.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/messages.js
var messages = __webpack_require__(938);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/util/parseHTML.js
var parseHTML = function (htmlString) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = htmlString;
    return wrapper.childNodes[0];
};
//# sourceMappingURL=parseHTML.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/components/dropzone/styled.js
// TODO [MSW-385]: Migrate into SC
var wrapperStyles = "\n  .mp-title {\n    font-weight: 500;\n    font-size: 40px;\n    margin-bottom: 20px;\n  }\n\n  .mp-description {\n    font-size: 16px;\n    font-weight: 500;\n  }\n\n  .mp-fileIcon {\n    width: auto;\n    height: 200px;\n    position: absolute;\n    bottom: 0;\n    transform-origin: bottom;\n    left: 150px;\n  }\n\n  .mp-iconAtlassianDoc {\n    left: 100px;\n    width: 183px;\n    height: 212px;\n    bottom: -15px;\n    animation: atlassian-doc .75s .2s forwards;\n  }\n\n  .mp-iconOtherDoc {\n    left: 170px;\n    z-index: 1;\n    width: 173px;\n    height: 224px;\n  }\n\n  .mp-iconPageSpreadsheet {\n    left: 250px;\n    animation: spreadsheet .75s .2s forwards;\n  }\n\n  .mp-text {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n    left: 0;\n    right: 0;\n    top: 130px;\n    position: absolute;\n    text-align: center;\n  }\n\n  .mp-text span {\n    display: block;\n  }\n\n  .mp-circle {\n    transition: width 0.2s ease,\n    height 0.2s ease,\n    top 0.2s ease,\n    left 0.2s ease;\n    width: 0;\n    height: 0;\n    transform: scale(1);\n    background-color: #0052cc;\n    border-radius: 50%;\n    margin: auto;\n    position: absolute;\n    overflow: hidden;\n    color: #fff;\n    top: 50%;\n    left: 50%; \n  }\n\n  .mp-content {\n    width: 100vw;\n    height: 100vh; \n  }\n\n  .mediaPickerDropzone {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 0;\n    overflow: hidden;\n    margin: auto;\n    font-family: \"Source Sans Pro\", \"Helvetica Neue\", \"Helvetica\", Arial, sans-serif;\n    pointer-events: none;\n  }\n\n  .mediaPickerDropzone.active {\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.7);\n    position: fixed;\n    z-index: 500;\n  }\n\n  .mediaPickerDropzone.active .mp-circle {\n    width: 500px;\n    height: 500px;\n    top: calc(50% - 250px);\n    left: calc(50% - 250px);\n  }\n\n  @keyframes atlassian-doc {\n    0%   { transform: rotate(0deg); }\n    100% { transform: rotate(-18deg); }\n  }\n\n  @keyframes spreadsheet {\n    0%   { transform: rotate(0deg); }\n    100% { transform: rotate(20deg); }\n  }\n";
//# sourceMappingURL=styled.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/util/getAssetUrl.js
var getAssetUrl = __webpack_require__(960);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/components/dropzone/dropzoneUI.js




// TODO [MSW-385]: Remove template string and use React
/* harmony default export */ var dropzoneUI = (function (formatMessage) {
    return parseHTML("<div class=\"mediaPickerDropzone\">\n    <style>" + wrapperStyles + "</style>\n    <div class=\"mp-content\">\n        <div class=\"mp-circle\">\n            <div class=\"mp-text\">\n                <span class=\"mp-title\">" + formatMessage(messages["a" /* messages */].drop_your_files_here) + "</span>\n                <span class=\"mp-description\">" + formatMessage(messages["a" /* messages */].share_files_instantly) + "</span>\n            </div>\n            <img class=\"mp-fileIcon mp-iconAtlassianDoc\" src=\"" + Object(getAssetUrl["a" /* getAssetUrl */])('pie-chart-icon.png') + "\"/>\n            <img class=\"mp-fileIcon mp-iconOtherDoc\" src=\"" + Object(getAssetUrl["a" /* getAssetUrl */])('line-graph-icon.png') + "\" />\n            <img class=\"mp-fileIcon mp-iconPageSpreadsheet\" src=\"" + Object(getAssetUrl["a" /* getAssetUrl */])('flow-chart-icon.png') + "\" />\n        </div>\n    </div>\n  </div>");
});
//# sourceMappingURL=dropzoneUI.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/components/dropzone/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropzoneImpl", function() { return dropzone_DropzoneImpl; });





var toArray = function (arr) { return [].slice.call(arr, 0); };
var dropzone_DropzoneImpl = /** @class */ (function (_super) {
    tslib_es6["__extends"](DropzoneImpl, _super);
    function DropzoneImpl(mediaClient, config) {
        if (config === void 0) { config = { uploadParams: {} }; }
        var _this = _super.call(this, mediaClient, config) || this;
        _this.onFileDropped = function (dragEvent) {
            if (!dragEvent.dataTransfer) {
                return;
            }
            dragEvent.preventDefault();
            dragEvent.stopPropagation();
            _this.onDrop(dragEvent);
            var filesArray = [].slice.call(dragEvent.dataTransfer.files);
            _this.uploadService.addFiles(filesArray);
        };
        _this.removeContainerListeners = function () {
            _this.container.removeEventListener('dragover', _this.onDragOver, false);
            _this.container.removeEventListener('dragleave', _this.onDragLeave, false);
        };
        _this.addContainerListeners = function () {
            _this.container.addEventListener('dragover', _this.onDragOver, false);
            _this.container.addEventListener('dragleave', _this.onDragLeave, false);
        };
        _this.onDragOver = function (e) {
            e.preventDefault();
            if (_this.instance && e.dataTransfer && DropzoneImpl.dragContainsFiles(e)) {
                var dataTransfer = e.dataTransfer;
                var allowed = void 0;
                try {
                    allowed = dataTransfer.effectAllowed;
                }
                catch (e) { } // the error is expected in IE11
                dataTransfer.dropEffect =
                    'move' === allowed || 'linkMove' === allowed ? 'move' : 'copy';
                _this.instance.classList.add('active');
                var length_1 = _this.getDraggedItemsLength(dataTransfer);
                _this.emitDragOver({ length: length_1 });
            }
        };
        _this.onDragLeave = function (e) {
            if (_this.instance && e.dataTransfer) {
                e.preventDefault();
                _this.instance.classList.remove('active');
                var length_2 = 0;
                if (DropzoneImpl.dragContainsFiles(e)) {
                    var dataTransfer = e.dataTransfer;
                    length_2 = _this.getDraggedItemsLength(dataTransfer);
                }
                _this.emitDragLeave({ length: length_2 });
            }
        };
        _this.onDrop = function (e) {
            var instance = _this.instance;
            if (instance && e.dataTransfer && DropzoneImpl.dragContainsFiles(e)) {
                instance.classList.remove('active');
                var dataTransfer = e.dataTransfer;
                var length_3 = _this.getDraggedItemsLength(dataTransfer);
                _this.emit('drop', undefined);
                _this.emitDragLeave({ length: length_3 });
            }
        };
        var container = config.container, headless = config.headless, proxyReactContext = config.proxyReactContext;
        _this.container = container || document.body;
        _this.headless = headless || false;
        _this.uiActive = false;
        _this.proxyReactContext = proxyReactContext;
        return _this;
    }
    DropzoneImpl.prototype.activate = function () {
        var _this = this;
        return whenDomReady
            .then(function () {
            _this.container = _this.container || document.body;
            if (!_this.instance) {
                return _this.createInstance();
            }
        })
            .then(function () {
            _this.removeContainerListeners(); // in case we call activate twice in a row
            _this.addContainerListeners();
            _this.addDropzone();
        });
    };
    DropzoneImpl.prototype.deactivate = function () {
        this.removeContainerListeners();
        this.removeDropzone();
    };
    DropzoneImpl.prototype.addDropzone = function () {
        this.container.addEventListener('drop', this.onFileDropped);
    };
    DropzoneImpl.prototype.removeDropzone = function () {
        this.container.removeEventListener('drop', this.onFileDropped);
        if (this.instance) {
            this.instance.remove();
        }
    };
    // Cross-browser way of getting dragged items length, we prioritize "items" if present
    // https://www.w3.org/TR/html51/editing.html#the-datatransfer-interface
    // This method is used on 'dragover' and we have no way to retrieve FileSystemFileEntry,
    // which contains info about if the dropped item is a file or directory. That info is only
    // available on 'drop'
    DropzoneImpl.prototype.getDraggedItemsLength = function (dataTransfer) {
        if (dataTransfer.items) {
            var items = toArray(dataTransfer.items);
            return items.filter(function (i) { return i.kind === 'file'; }).length;
        }
        // This is required for IE11
        return dataTransfer.files.length;
    };
    DropzoneImpl.prototype.createInstance = function () {
        this.instance = this.getDropzoneUI();
        this.container.appendChild(this.instance);
    };
    DropzoneImpl.prototype.getDropzoneUI = function () {
        if (this.headless) {
            var container = document.createElement('DIV');
            container.classList.add('headless-dropzone');
            return container;
        }
        else {
            if (this.proxyReactContext && this.proxyReactContext.intl) {
                var formatMessage = this.proxyReactContext.intl.formatMessage;
                return dropzoneUI(formatMessage);
            }
            var defaultFormatMessage = new index_es["c" /* IntlProvider */]({
                locale: 'en',
            }).getChildContext().intl.formatMessage;
            return dropzoneUI(defaultFormatMessage);
        }
    };
    DropzoneImpl.prototype.emitDragOver = function (e) {
        if (!this.uiActive) {
            this.uiActive = true;
            this.emit('drag-enter', e);
        }
    };
    DropzoneImpl.prototype.emitDragLeave = function (payload) {
        var _this = this;
        if (this.uiActive) {
            this.uiActive = false;
            /*
             when drag over child elements, container will issue dragleave and then dragover immediately.
             The 50ms timeout will prevent from issuing that "false" dragleave event
             */
            window.setTimeout(function () {
                if (!_this.uiActive) {
                    _this.emit('drag-leave', payload);
                }
            }, 50);
        }
    };
    DropzoneImpl.dragContainsFiles = function (event) {
        if (!event.dataTransfer) {
            return false;
        }
        var types = event.dataTransfer.types;
        return toArray(types).indexOf('Files') > -1;
    };
    return DropzoneImpl;
}(localUpload["a" /* LocalUploadComponent */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/components/localUploadReact.js
var localUploadReact = __webpack_require__(948);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/util/appendTimestamp.js
var padZero = function (n) { return (n < 10 ? "0" + n : "" + n); };
var appendTimestamp = function (fileName, timestamp) {
    var dotPosition = fileName.lastIndexOf('.');
    var containsDot = dotPosition > 0;
    var fileNameWithoutExtension = containsDot
        ? fileName.substring(0, dotPosition)
        : fileName;
    var extension = containsDot ? fileName.substring(dotPosition) : '';
    var date = new Date(timestamp);
    var formattedDate = "" + date.getUTCFullYear() + padZero(date.getUTCMonth() + 1) + padZero(date.getUTCDate());
    var formattedTime = "" + padZero(date.getUTCHours()) + padZero(date.getUTCMinutes()) + padZero(date.getUTCSeconds());
    return fileNameWithoutExtension + "-" + formattedDate + "-" + formattedTime + extension;
};
//# sourceMappingURL=appendTimestamp.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/service/types.js
var types = __webpack_require__(969);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/components/clipboard/clipboard.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilesFromClipboard", function() { return getFilesFromClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return clipboard_Clipboard; });




var getFilesFromClipboard = function (files) {
    return Array.from(files).map(function (file) {
        if (file.type.indexOf('image/') === 0) {
            var name_1 = appendTimestamp(file.name, file.lastModified);
            return new File([file], name_1, {
                type: file.type,
            });
        }
        else {
            return file;
        }
    });
};
var defaultConfig = { uploadParams: {} };
var clipboard_ClipboardImpl = /** @class */ (function () {
    function ClipboardImpl(uploadService) {
        this.uploadService = uploadService;
    }
    Object.defineProperty(ClipboardImpl, "latestInstance", {
        get: function () {
            return ClipboardImpl.instances[ClipboardImpl.instances.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    ClipboardImpl.prototype.activate = function () {
        this.deactivate();
        document.addEventListener('paste', ClipboardImpl.handleEvent);
        ClipboardImpl.instances.push(this);
    };
    ClipboardImpl.prototype.deactivate = function () {
        var index = ClipboardImpl.instances.indexOf(this);
        if (index > -1) {
            ClipboardImpl.instances.splice(index, 1);
        }
        else {
            /**
             * We want to remove the handleEvent only when there are no more instances.
             * Since handleEvent is static, if we remove it right away, and there is still an active instance,
             * we will loose the clipboard functionality.
             */
            document.removeEventListener('paste', ClipboardImpl.handleEvent);
        }
    };
    ClipboardImpl.prototype.onFilesPasted = function (files) {
        this.uploadService.addFilesWithSource(files);
    };
    ClipboardImpl.instances = [];
    ClipboardImpl.handleEvent = function (event) {
        // last in, first served to support multiple instances listening at once
        var instance = ClipboardImpl.latestInstance;
        if (instance) {
            /*
              Browser behaviour for getting files from the clipboard is very inconsistent and buggy.
              @see https://extranet.atlassian.com/display/FIL/RFC+099%3A+Clipboard+browser+inconsistency
            */
            var clipboardData = event.clipboardData;
            if (clipboardData && clipboardData.files) {
                var fileSource_1 = clipboardData.types.length === 1
                    ? types["a" /* LocalFileSource */].PastedScreenshot
                    : types["a" /* LocalFileSource */].PastedFile;
                var filesArray = getFilesFromClipboard(clipboardData.files).map(function (file) { return ({ file: file, source: fileSource_1 }); });
                // only the latest instance gets the event
                instance.onFilesPasted.call(instance, filesArray);
            }
        }
    };
    return ClipboardImpl;
}());
var clipboard_Clipboard = /** @class */ (function (_super) {
    tslib_es6["__extends"](Clipboard, _super);
    function Clipboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clipboard = new clipboard_ClipboardImpl(_this.uploadService);
        return _this;
    }
    Clipboard.prototype.componentDidMount = function () {
        this.clipboard.activate();
    };
    Clipboard.prototype.componentWillUnmount = function () {
        this.clipboard.deactivate();
    };
    Clipboard.prototype.render = function () {
        return null;
    };
    Clipboard.defaultProps = {
        config: defaultConfig,
    };
    return Clipboard;
}(localUploadReact["a" /* LocalUploadComponentReact */]));

//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ 1052:
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

var UploadIcon = function UploadIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M11.208 9.32L9.29 11.253a1 1 0 0 0 0 1.409.982.982 0 0 0 1.397 0l1.29-1.301 1.336 1.347a.982.982 0 0 0 1.397.001 1.002 1.002 0 0 0 .001-1.408l-1.965-1.98a1.08 1.08 0 0 0-1.538-.001z\"/><path d=\"M11 10.007l.001 9.986c0 .557.448 1.008 1 1.007.553 0 1-.45 1-1.007L13 10.006C13 9.451 12.552 9 12 9s-1.001.451-1 1.007z\"/><path d=\"M7.938 5.481a4.8 4.8 0 0 0-.777-.063C4.356 5.419 2 7.62 2 10.499 2 13.408 4.385 16 7.1 16h2.881v-1.993H7.1c-1.657 0-3.115-1.663-3.115-3.508 0-1.778 1.469-3.087 3.104-3.087h.012c.389 0 .686.051.97.15l.17.063c.605.248.875-.246.875-.246l.15-.267c.73-1.347 2.201-2.096 3.716-2.119a4.14 4.14 0 0 1 4.069 3.644l.046.34s.071.525.665.525c.013 0 .012.005.023.005h.254c1.136 0 1.976.959 1.976 2.158 0 1.207-.987 2.342-2.07 2.342h-3.964V16h3.964C20.105 16 22 13.955 22 11.665c0-1.999-1.312-3.663-3.138-4.074-.707-2.707-3.053-4.552-5.886-4.591-1.975.021-3.901.901-5.038 2.481z\"/></g></svg>"
  }, props));
};

UploadIcon.displayName = 'UploadIcon';
var _default = UploadIcon;
exports.default = _default;

/***/ }),

/***/ 1053:
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

var TrashIcon = function TrashIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M5 5a1 1 0 0 0-1 1v1h16V6a1 1 0 0 0-1-1H5zm11.15 15H7.845a1 1 0 0 1-.986-.835L5 8h14l-1.864 11.166a.999.999 0 0 1-.986.834M9 4.5a.5.5 0 0 1 .491-.5h5.018a.5.5 0 0 1 .491.5V5H9v-.5z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

TrashIcon.displayName = 'TrashIcon';
var _default = TrashIcon;
exports.default = _default;

/***/ }),

/***/ 1057:
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

var ChevronUpIcon = function ChevronUpIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M11.221 9.322l-2.929 2.955a1.009 1.009 0 0 0 0 1.419.986.986 0 0 0 1.405 0l2.298-2.317 2.307 2.327a.989.989 0 0 0 1.407 0 1.01 1.01 0 0 0 0-1.419l-2.94-2.965A1.106 1.106 0 0 0 11.991 9c-.279 0-.557.107-.77.322z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

ChevronUpIcon.displayName = 'ChevronUpIcon';
var _default = ChevronUpIcon;
exports.default = _default;

/***/ }),

/***/ 1058:
/***/ (function(module) {

module.exports = {"a":"@atlaskit/flag","b":"12.0.10"};

/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? 'a'  : 'p',
          tt:   H < 12 ? 'am' : 'pm',
          T:    H < 12 ? 'A'  : 'P',
          TT:   H < 12 ? 'AM' : 'PM',
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occured and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dateFormat;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);


/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * filesize
 *
 * @copyright 2018 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 3.6.1
 */
(function (global) {
	var b = /^(b|B)$/,
	    symbol = {
		iec: {
			bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],
			bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
		},
		jedec: {
			bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
			bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
		}
	},
	    fullform = {
		iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
		jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
	};

	/**
  * filesize
  *
  * @method filesize
  * @param  {Mixed}   arg        String, Int or Float to transform
  * @param  {Object}  descriptor [Optional] Flags
  * @return {String}             Readable file size String
  */
	function filesize(arg) {
		var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		var result = [],
		    val = 0,
		    e = void 0,
		    base = void 0,
		    bits = void 0,
		    ceil = void 0,
		    full = void 0,
		    fullforms = void 0,
		    neg = void 0,
		    num = void 0,
		    output = void 0,
		    round = void 0,
		    unix = void 0,
		    separator = void 0,
		    spacer = void 0,
		    standard = void 0,
		    symbols = void 0;

		if (isNaN(arg)) {
			throw new Error("Invalid arguments");
		}

		bits = descriptor.bits === true;
		unix = descriptor.unix === true;
		base = descriptor.base || 2;
		round = descriptor.round !== void 0 ? descriptor.round : unix ? 1 : 2;
		separator = descriptor.separator !== void 0 ? descriptor.separator || "" : "";
		spacer = descriptor.spacer !== void 0 ? descriptor.spacer : unix ? "" : " ";
		symbols = descriptor.symbols || descriptor.suffixes || {};
		standard = base === 2 ? descriptor.standard || "jedec" : "jedec";
		output = descriptor.output || "string";
		full = descriptor.fullform === true;
		fullforms = descriptor.fullforms instanceof Array ? descriptor.fullforms : [];
		e = descriptor.exponent !== void 0 ? descriptor.exponent : -1;
		num = Number(arg);
		neg = num < 0;
		ceil = base > 2 ? 1000 : 1024;

		// Flipping a negative number to determine the size
		if (neg) {
			num = -num;
		}

		// Determining the exponent
		if (e === -1 || isNaN(e)) {
			e = Math.floor(Math.log(num) / Math.log(ceil));

			if (e < 0) {
				e = 0;
			}
		}

		// Exceeding supported length, time to reduce & multiply
		if (e > 8) {
			e = 8;
		}

		// Zero is now a special case because bytes divide by 1
		if (num === 0) {
			result[0] = 0;
			result[1] = unix ? "" : symbol[standard][bits ? "bits" : "bytes"][e];
		} else {
			val = num / (base === 2 ? Math.pow(2, e * 10) : Math.pow(1000, e));

			if (bits) {
				val = val * 8;

				if (val >= ceil && e < 8) {
					val = val / ceil;
					e++;
				}
			}

			result[0] = Number(val.toFixed(e > 0 ? round : 0));
			result[1] = base === 10 && e === 1 ? bits ? "kb" : "kB" : symbol[standard][bits ? "bits" : "bytes"][e];

			if (unix) {
				result[1] = standard === "jedec" ? result[1].charAt(0) : e > 0 ? result[1].replace(/B$/, "") : result[1];

				if (b.test(result[1])) {
					result[0] = Math.floor(result[0]);
					result[1] = "";
				}
			}
		}

		// Decorating a 'diff'
		if (neg) {
			result[0] = -result[0];
		}

		// Applying custom symbol
		result[1] = symbols[result[1]] || result[1];

		// Returning Array, Object, or String (default)
		if (output === "array") {
			return result;
		}

		if (output === "exponent") {
			return e;
		}

		if (output === "object") {
			return { value: result[0], suffix: result[1], symbol: result[1] };
		}

		if (full) {
			result[1] = fullforms[e] ? fullforms[e] : fullform[standard][e] + (bits ? "bit" : "byte") + (result[0] === 1 ? "" : "s");
		}

		if (separator.length > 0) {
			result[0] = result[0].toString().replace(".", separator);
		}

		return result.join(spacer);
	}

	// Partial application for functional programming
	filesize.partial = function (opt) {
		return function (arg) {
			return filesize(arg, opt);
		};
	};

	// CommonJS, AMD, script tag
	if (true) {
		module.exports = filesize;
	} else {}
})(typeof window !== "undefined" ? window : global);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(105)))

/***/ }),

/***/ 1061:
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

var RefreshIcon = function RefreshIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M8 6.003v2.995a1 1 0 1 0 2 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 0 0 0 2.003h3z\" fill-rule=\"nonzero\"/><path d=\"M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 0 0-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z\" fill-rule=\"nonzero\"/><path d=\"M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 0 0 0-2.003h-3v-2.995a1 1 0 1 0-2 0z\"/><path d=\"M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 0 0-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0 0 15.002 4a1 1 0 0 0-.905.596z\"/></g></svg>"
  }, props));
};

RefreshIcon.displayName = 'RefreshIcon';
var _default = RefreshIcon;
exports.default = _default;

/***/ }),

/***/ 1062:
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

var SettingsIcon = function SettingsIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M11.701 16.7a5.002 5.002 0 1 1 0-10.003 5.002 5.002 0 0 1 0 10.004m8.368-3.117a1.995 1.995 0 0 1-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 0 0 .315-.574 8.947 8.947 0 0 0-.836-1.993.477.477 0 0 0-.598-.195 2.04 2.04 0 0 1-1.29.08 1.988 1.988 0 0 1-1.404-1.395 2.04 2.04 0 0 1 .076-1.297.478.478 0 0 0-.196-.597 8.98 8.98 0 0 0-1.975-.826.479.479 0 0 0-.574.314 1.995 1.995 0 0 1-1.885 1.346 1.994 1.994 0 0 1-1.884-1.345.482.482 0 0 0-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 0 0-.198.582A2.002 2.002 0 0 1 4.445 7.06a.478.478 0 0 0-.595.196 8.946 8.946 0 0 0-.833 1.994.48.48 0 0 0 .308.572 1.995 1.995 0 0 1 1.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 0 0-.308.57 8.99 8.99 0 0 0 .723 1.79.477.477 0 0 0 .624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 0 0 .168.628 8.946 8.946 0 0 0 2.11.897.474.474 0 0 0 .57-.313 1.995 1.995 0 0 1 1.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 0 0 .57.313 8.964 8.964 0 0 0 2.084-.883.473.473 0 0 0 .167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 0 0 .628-.19 8.925 8.925 0 0 0 .728-1.793.478.478 0 0 0-.314-.573\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

SettingsIcon.displayName = 'SettingsIcon';
var _default = SettingsIcon;
exports.default = _default;

/***/ }),

/***/ 1063:
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

var FolderFilledIcon = function FolderFilledIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M12.2 6h7.81C21.108 6 22 6.893 22 7.992v11.016c0 1.1-.898 1.992-1.99 1.992H3.99A1.992 1.992 0 0 1 2 19.008V5.006C2 3.898 2.896 3 3.997 3h5.006c1.103 0 2.327.826 2.742 1.862L12.2 6z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

FolderFilledIcon.displayName = 'FolderFilledIcon';
var _default = FolderFilledIcon;
exports.default = _default;

/***/ }),

/***/ 1064:
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

var MediaServicesSpreadsheetIcon = function MediaServicesSpreadsheetIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><rect fill=\"currentColor\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><rect fill=\"inherit\" x=\"7\" y=\"8\" width=\"4\" height=\"2\" rx=\"1\"/><rect fill=\"inherit\" x=\"7\" y=\"11\" width=\"4\" height=\"2\" rx=\"1\"/><rect fill=\"inherit\" x=\"13\" y=\"11\" width=\"4\" height=\"2\" rx=\"1\"/><rect fill=\"inherit\" x=\"7\" y=\"14\" width=\"4\" height=\"2\" rx=\"1\"/><rect fill=\"inherit\" x=\"13\" y=\"14\" width=\"4\" height=\"2\" rx=\"1\"/><rect fill=\"inherit\" x=\"13\" y=\"8\" width=\"4\" height=\"2\" rx=\"1\"/></g></svg>"
  }, props));
};

MediaServicesSpreadsheetIcon.displayName = 'MediaServicesSpreadsheetIcon';
var _default = MediaServicesSpreadsheetIcon;
exports.default = _default;

/***/ }),

/***/ 1065:
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

var MediaServicesPresentationIcon = function MediaServicesPresentationIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><rect fill=\"currentColor\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><rect fill=\"inherit\" x=\"8\" y=\"12\" width=\"2\" height=\"3\" rx=\"1\"/><rect fill=\"inherit\" x=\"11\" y=\"10\" width=\"2\" height=\"5\" rx=\"1\"/><rect fill=\"inherit\" x=\"14\" y=\"8\" width=\"2\" height=\"7\" rx=\"1\"/></g></svg>"
  }, props));
};

MediaServicesPresentationIcon.displayName = 'MediaServicesPresentationIcon';
var _default = MediaServicesPresentationIcon;
exports.default = _default;

/***/ }),

/***/ 1066:
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

var MediaServicesPdfIcon = function MediaServicesPdfIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><rect fill=\"currentColor\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><rect fill=\"inherit\" x=\"7\" y=\"8\" width=\"10\" height=\"2\" rx=\"1\"/><path d=\"M16.187 16h-3.373c-.45 0-.814-.222-.814-.497v-4.006c0-.275.364-.497.814-.497h3.373c.45 0 .813.222.813.497v4.006c0 .275-.364.497-.813.497\" fill=\"inherit\"/><rect fill=\"inherit\" x=\"7\" y=\"11\" width=\"4\" height=\"2\" rx=\"1\"/><rect fill=\"inherit\" x=\"7\" y=\"14\" width=\"4\" height=\"2\" rx=\"1\"/></g></svg>"
  }, props));
};

MediaServicesPdfIcon.displayName = 'MediaServicesPdfIcon';
var _default = MediaServicesPdfIcon;
exports.default = _default;

/***/ }),

/***/ 1067:
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

var MediaServicesZipIcon = function MediaServicesZipIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><rect fill=\"currentColor\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M9 6.999C9 6.447 9.443 6 9.999 6H12v3H9.999A.996.996 0 0 1 9 8.001V6.999zM12 9h2.001c.552 0 .999.443.999.999v1.002a.996.996 0 0 1-.999.999H12V9zm-3 3.999c0-.552.443-.999.999-.999H12v3H9.999A.996.996 0 0 1 9 14.001v-1.002zM12 15h2.001c.552 0 .999.443.999.999v1.002a.996.996 0 0 1-.999.999H12v-3z\" fill=\"inherit\"/></g></svg>"
  }, props));
};

MediaServicesZipIcon.displayName = 'MediaServicesZipIcon';
var _default = MediaServicesZipIcon;
exports.default = _default;

/***/ }),

/***/ 1068:
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

var CheckCircleIcon = function CheckCircleIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><g fill-rule=\"evenodd\"><circle fill=\"currentColor\" cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z\" fill=\"inherit\"/></g></svg>"
  }, props));
};

CheckCircleIcon.displayName = 'CheckCircleIcon';
var _default = CheckCircleIcon;
exports.default = _default;

/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(407).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
   false ?
    undefined :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
   false ?
    undefined :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ 1070:
/***/ (function(module, exports) {

function Postis(options) {
  var scope = options.scope;
  var targetWindow = options.window;
  var windowForEventListening = options.windowForEventListening || window;
  var listeners = {};
  var sendBuffer = [];
  var listenBuffer = {};
  var ready = false;
  var readyMethod = "__ready__";
  var readynessCheck;

  var listener = function(event) {
    var data;
    try {
      data = JSON.parse(event.data);
    } catch (e) {
      return;
    }

    if (data.postis && data.scope === scope) {
      var listenersForMethod = listeners[data.method];
      if (listenersForMethod) {
        for (var i = 0; i < listenersForMethod.length; i++) {
          listenersForMethod[i].call(null, data.params);
        }
      } else {
        listenBuffer[data.method] = listenBuffer[data.method] || [];
        listenBuffer[data.method].push(data.params);
      }
    }
  };

  windowForEventListening.addEventListener("message", listener, false);

  var postis = {
    listen: function (method, callback) {
      listeners[method] = listeners[method] || [];
      listeners[method].push(callback);

      var listenBufferForMethod = listenBuffer[method];
      if (listenBufferForMethod) {
        var listenersForMethod = listeners[method];
        for (var i = 0; i < listenersForMethod.length; i++) {
          for (var j = 0; j < listenBufferForMethod.length; j++) {
            listenersForMethod[i].call(null, listenBufferForMethod[j]);
          }
        }
      }
      delete listenBuffer[method];
    },

    send: function (opts) {
      var method = opts.method;

      if ((ready || opts.method === readyMethod) && (targetWindow && typeof targetWindow.postMessage === "function")) {
        targetWindow.postMessage(JSON.stringify({
          postis: true,
          scope: scope,
          method: method,
          params: opts.params
        }), "*");
      } else {
        sendBuffer.push(opts);
      }
    },

    ready: function (callback) {
      if (ready) {
        callback();
      } else {
        setTimeout(function () { postis.ready(callback); }, 50);
      }
    },

    destroy: function (callback) {
      clearInterval(readynessCheck);
      ready = false;
      if (windowForEventListening && typeof windowForEventListening.removeEventListener === "function") {
        windowForEventListening.removeEventListener("message", listener);
      }
      callback && callback();
    }
  };

  var readyCheckID = +new Date() + Math.random() + "";

  readynessCheck = setInterval(function () {
    postis.send({
      method: readyMethod,
      params: readyCheckID
    });
  }, 50);

  postis.listen(readyMethod, function (id) {
    if (id === readyCheckID) {
      clearInterval(readynessCheck);
      ready = true;

      for (var i = 0; i < sendBuffer.length; i++) {
        postis.send(sendBuffer[i]);
      }
      sendBuffer = [];
    } else {
      postis.send({
        method: readyMethod,
        params: id
      });
    }
  });

  return postis;
}

module.exports = Postis;


/***/ }),

/***/ 1071:
/***/ (function(module) {

module.exports = {"a":"@atlaskit/media-picker","b":"44.0.1"};

/***/ }),

/***/ 1193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bricks_module_namespaceObject = {};
__webpack_require__.r(bricks_module_namespaceObject);
__webpack_require__.d(bricks_module_namespaceObject, "default", function() { return bricks_module; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/client/media-client.js
var media_client = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/exenv/index.js
var exenv = __webpack_require__(163);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(18);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/PropTypes.js

var subscriptionShape = prop_types_default.a.shape({
  trySubscribe: prop_types_default.a.func.isRequired,
  tryUnsubscribe: prop_types_default.a.func.isRequired,
  notifyNestedSubs: prop_types_default.a.func.isRequired,
  isSubscribed: prop_types_default.a.func.isRequired
});
var storeShape = prop_types_default.a.shape({
  subscribe: prop_types_default.a.func.isRequired,
  dispatch: prop_types_default.a.func.isRequired,
  getState: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





var didWarnAboutReceivingStore = false;

function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }

  didWarnAboutReceivingStore = true;
  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider(storeKey) {
  var _Provider$childContex;

  if (storeKey === void 0) {
    storeKey = 'store';
  }

  var subscriptionKey = storeKey + "Subscription";

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Provider, _Component);

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      var _this;

      _this = _Component.call(this, props, context) || this;
      _this[storeKey] = props.store;
      return _this;
    }

    _proto.render = function render() {
      return react["Children"].only(this.props.children);
    };

    return Provider;
  }(react["Component"]);

  if (false) {}

  Provider.propTypes = {
    store: storeShape.isRequired,
    children: prop_types_default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);
  return Provider;
}
/* harmony default export */ var components_Provider = (createProvider());
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(439);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(224);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(314);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;

      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub, onStateChange) {
    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js










var hotReloadingVersion = 0;
var dummyState = {};

function noop() {}

function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);

        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };
  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  var _contextTypes, _childContextTypes;

  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;
  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);
  return function wrapWithConnect(WrappedComponent) {
    browser_default()(Object(react_is["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

      /* eslint-disable react/no-deprecated */

    });

    var Connect =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(Connect, _Component);

      function Connect(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        browser_default()(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

        _this.initSelector();

        _this.initSubscription();

        return _this;
      }

      var _proto = Connect.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref3;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
      };

      _proto.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.

        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      _proto.getWrappedInstance = function getWrappedInstance() {
        browser_default()(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
        return this.wrappedInstance;
      };

      _proto.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      _proto.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      _proto.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.

        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      _proto.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      _proto.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad

        var withExtras = _extends({}, props);

        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      _proto.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(react["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(react["Component"]);
    /* eslint-enable react/no-deprecated */


    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {}

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/redux/es/index.js + 15 modules
var es = __webpack_require__(407);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/isPlainObject.js
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return Object(es["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ var connect_connect = (createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js




// EXTERNAL MODULE: ./node_modules/@atlaskit/modal-dialog/components/ModalTransition.js
var ModalTransition = __webpack_require__(1054);

// EXTERNAL MODULE: ./node_modules/@atlaskit/modal-dialog/components/ModalWrapper.js + 36 modules
var ModalWrapper = __webpack_require__(1195);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/components/dropzone/index.js + 4 modules
var dropzone = __webpack_require__(1024);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/messages.js
var messages = __webpack_require__(938);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@atlaskit/button/components/Button.js + 4 modules
var Button = __webpack_require__(829);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/footer/styled.js




var Wrapper = styled_components_browser_esm["default"].div(templateObject_1 || (templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-end;\n\n  height: 80px;\n  padding: 26px 15px 23px 18px;\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-end;\n\n  height: 80px;\n  padding: 26px 15px 23px 18px;\n"])));
var InsertButton = function (props) { return (react["createElement"](Button["a" /* default */], tslib_es6["__assign"]({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_es6["__rest"](_a, ["buttonStyles"]);
        return tslib_es6["__assign"]({ buttonStyles: tslib_es6["__assign"]({}, buttonStyles, { marginRight: '5px' }) }, rest);
    } }))); };
var CancelButton = function (props) { return react["createElement"](Button["a" /* default */], tslib_es6["__assign"]({}, props)); };
var templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/changeAccount.js
var CHANGE_ACCOUNT = 'CHANGE_ACCOUNT';
function isChangeAccountAction(action) {
    return action.type === CHANGE_ACCOUNT;
}
function changeAccount(serviceName, accountId) {
    return {
        type: CHANGE_ACCOUNT,
        serviceName: serviceName,
        accountId: accountId,
    };
}
//# sourceMappingURL=changeAccount.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/changeCloudAccountFolder.js
var CHANGE_CLOUD_ACCOUNT_FOLDER = 'CHANGE_CLOUD_ACCOUNT_FOLDER';
function changeCloudAccountFolder(serviceName, accountId, path) {
    return {
        type: CHANGE_CLOUD_ACCOUNT_FOLDER,
        serviceName: serviceName,
        accountId: accountId,
        path: path,
    };
}
function isChangeCloudAccountFolderAction(action) {
    return action.type === CHANGE_CLOUD_ACCOUNT_FOLDER;
}
//# sourceMappingURL=changeCloudAccountFolder.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/changeService.js
var CHANGE_SERVICE = 'SERVICE_CHANGE';
function isChangeServiceAction(action) {
    return action.type === CHANGE_SERVICE;
}
function changeService(serviceName) {
    return {
        type: CHANGE_SERVICE,
        serviceName: serviceName,
    };
}
//# sourceMappingURL=changeService.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/deselectItem.js
var DESELECT_ITEM = 'DESELECT_ITEM';
function isDeslectItemAction(action) {
    return action.type === DESELECT_ITEM;
}
function deselectItem(fileId) {
    return {
        type: DESELECT_ITEM,
        id: fileId,
    };
}
//# sourceMappingURL=deselectItem.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/editorClose.js
var EDITOR_CLOSE = 'EDITOR_CLOSE';
function isEditorCloseAction(action) {
    return action.type === EDITOR_CLOSE;
}
function editorClose(selection) {
    return {
        type: EDITOR_CLOSE,
        selection: selection,
    };
}
//# sourceMappingURL=editorClose.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/editorShowError.js
var EDITOR_SHOW_ERROR = 'EDITOR_SHOW_ERROR';
function isEditorShowErrorAction(action) {
    return action.type === EDITOR_SHOW_ERROR;
}
function editorShowError(message, retryHandler) {
    return {
        type: EDITOR_SHOW_ERROR,
        error: {
            message: message,
            retryHandler: retryHandler,
        },
    };
}
//# sourceMappingURL=editorShowError.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/fetchNextCloudFilesPage.js
var FETCH_NEXT_CLOUD_FILES_PAGE = 'FETCH_NEXT_CLOUD_FILES_PAGE';
function fetchNextCloudFilesPage(serviceName, accountId, path, nextCursor) {
    return {
        type: FETCH_NEXT_CLOUD_FILES_PAGE,
        serviceName: serviceName,
        accountId: accountId,
        path: path,
        nextCursor: nextCursor,
    };
}
function isFetchNextCloudFilesPageAction(action) {
    return action.type === FETCH_NEXT_CLOUD_FILES_PAGE;
}
//# sourceMappingURL=fetchNextCloudFilesPage.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/fileClick.js

var FILE_CLICK = 'FILE_CLICK';
function isFileClickAction(action) {
    return action.type === FILE_CLICK;
}
function fileClick(file, serviceName, accountId) {
    return {
        type: FILE_CLICK,
        file: tslib_es6["__assign"]({}, file, { accountId: accountId,
            serviceName: serviceName }),
    };
}
//# sourceMappingURL=fileClick.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/fileListUpdate.js
var FILE_LIST_UPDATE = 'FILE_LIST_UPDATE';
function isFileListUpdateAction(action) {
    return action.type === FILE_LIST_UPDATE;
}
function fileListUpdate(accountId, path, items, serviceName, currentCursor, nextCursor) {
    return {
        type: FILE_LIST_UPDATE,
        accountId: accountId,
        path: path,
        items: items,
        currentCursor: currentCursor,
        nextCursor: nextCursor,
        serviceName: serviceName,
    };
}
//# sourceMappingURL=fileListUpdate.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/hidePopup.js
var HIDE_POPUP = 'HIDE_POPUP';
function isHidePopupAction(action) {
    return action.type === HIDE_POPUP;
}
function hidePopup() {
    return {
        type: HIDE_POPUP,
    };
}
//# sourceMappingURL=hidePopup.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/resetView.js
var RESET_VIEW = 'RESET_VIEW';
function isResetViewAction(action) {
    return action.type === RESET_VIEW;
}
function resetView() {
    return {
        type: RESET_VIEW,
    };
}
//# sourceMappingURL=resetView.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/startAuth.js
var START_AUTH = 'AUTH_START';
function isStartAuthAction(action) {
    return action.type === START_AUTH;
}
function startAuth(serviceName) {
    return {
        type: START_AUTH,
        serviceName: serviceName,
    };
}
//# sourceMappingURL=startAuth.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/startImport.js
var START_IMPORT = 'START_IMPORT';
function isStartImportAction(action) {
    return action.type === START_IMPORT;
}
function startImport() {
    return {
        type: START_IMPORT,
    };
}
//# sourceMappingURL=startImport.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/unlinkCloudAccount.js
var REQUEST_UNLINK_CLOUD_ACCOUNT = 'ACCOUNT_UNLINK_CLOUD_REQUEST';
function requestUnlinkCloudAccount(account) {
    return {
        type: REQUEST_UNLINK_CLOUD_ACCOUNT,
        account: account,
    };
}
var UNLINK_ACCOUNT = 'ACCOUNT_CLOUD_UNLINK';
function unlinkCloudAccount(account) {
    return {
        type: UNLINK_ACCOUNT,
        account: account,
    };
}
//# sourceMappingURL=unlinkCloudAccount.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/getFilesInRecents.js
var GET_FILES_IN_RECENTS = 'GET_FILES_IN_RECENTS';
var isGetFilesInRecentsAction = function (action) {
    return action.type === GET_FILES_IN_RECENTS;
};
var getFilesInRecents = function () {
    return {
        type: GET_FILES_IN_RECENTS,
    };
};
var GET_FILES_IN_RECENTS_FULLFILLED = 'GET_FILES_IN_RECENTS_FULLFILLED';
var isGetFilesInRecentsFullfilledAction = function (action) {
    return action.type === GET_FILES_IN_RECENTS_FULLFILLED;
};
function getFilesInRecentsFullfilled(items) {
    return {
        type: GET_FILES_IN_RECENTS_FULLFILLED,
        items: items,
    };
}
var GET_FILES_IN_RECENTS_FAILED = 'GET_FILES_IN_RECENTS_FAILED';
var isGetFilesInRecentsFailedAction = function (action) {
    return action.type === GET_FILES_IN_RECENTS_FAILED;
};
function getFilesInRecentsFailed() {
    return {
        type: GET_FILES_IN_RECENTS_FAILED,
    };
}
//# sourceMappingURL=getFilesInRecents.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/updateServiceList.js
var UPDATE_SERVICE_LIST = 'SERVICE_LIST_UPDATE';
function updateServiceList(accounts) {
    return {
        type: UPDATE_SERVICE_LIST,
        accounts: accounts,
    };
}
//# sourceMappingURL=updateServiceList.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/searchGiphy.js
var SEARCH_GIPHY = 'SEARCH_GIPHY';
var SEARCH_GIPHY_FULFILLED = 'SEARCH_GIPHY_FULFILLED';
var SEARCH_GIPHY_FAILED = 'SEARCH_GIPHY_FAILED';
function isSearchGiphyAction(action) {
    return action.type === SEARCH_GIPHY;
}
function searchGiphy(query, shouldAppendResults) {
    return {
        type: SEARCH_GIPHY,
        query: query,
        shouldAppendResults: shouldAppendResults,
    };
}
function isSearchGiphyFulfilledAction(action) {
    return action.type === SEARCH_GIPHY_FULFILLED;
}
function searchGiphyFulfilled(imageCardModels, totalResultCount, shouldAppendResults) {
    return {
        type: SEARCH_GIPHY_FULFILLED,
        imageCardModels: imageCardModels,
        totalResultCount: totalResultCount,
        shouldAppendResults: shouldAppendResults,
    };
}
function isSearchGiphyFailedAction(action) {
    return action.type === SEARCH_GIPHY_FAILED;
}
function searchGiphyFailed() {
    return {
        type: SEARCH_GIPHY_FAILED,
    };
}
//# sourceMappingURL=searchGiphy.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/saveCollectionItemsSubscription.js
var SAVE_COLLECTION_ITEMS_SUBSCRIPTION = 'SAVE_COLLECTION_ITEMS_SUBSCRIPTION';
function saveCollectionItemsSubscription(subscription) {
    return {
        type: SAVE_COLLECTION_ITEMS_SUBSCRIPTION,
        subscription: subscription,
    };
}
//# sourceMappingURL=saveCollectionItemsSubscription.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/index.js


















//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/footer/footer.js








var footer_Footer = /** @class */ (function (_super) {
    tslib_es6["__extends"](Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.renderCancelButton = function () {
        var _a = this.props, canCancel = _a.canCancel, onCancel = _a.onCancel;
        return (react["createElement"](CancelButton, { appearance: "subtle", onClick: onCancel, isDisabled: !canCancel },
            react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].cancel))));
    };
    Footer.prototype.renderInsertButton = function () {
        var _a = this.props, selectedItems = _a.selectedItems, canInsert = _a.canInsert, onInsert = _a.onInsert;
        var itemCount = selectedItems.length;
        if (itemCount === 0) {
            return null;
        }
        var onClick = function () { return onInsert(selectedItems); };
        return (react["createElement"](InsertButton, { className: "e2e-insert-button", appearance: "primary", onClick: onClick, isDisabled: !canInsert, autoFocus: true },
            react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].insert_files, { values: {
                    0: itemCount,
                } }))));
    };
    Footer.prototype.render = function () {
        return (react["createElement"](Wrapper, null,
            this.renderInsertButton(),
            this.renderCancelButton()));
    };
    return Footer;
}(react["Component"]));

var footer_mapStateToProps = function (_a) {
    var isUploading = _a.isUploading, isCancelling = _a.isCancelling, selectedItems = _a.selectedItems;
    var isUploadingOrCancelling = isUploading || isCancelling;
    return {
        selectedItems: selectedItems,
        canInsert: !isUploadingOrCancelling,
        canCancel: !isUploadingOrCancelling,
    };
};
var footer_mapDispatchToProps = function (dispatch) { return ({
    onInsert: function () { return dispatch(startImport()); },
    onCancel: function () { return dispatch(hidePopup()); },
}); };
/* harmony default export */ var footer = (connect_connect(footer_mapStateToProps, footer_mapDispatchToProps)(footer_Footer));
//# sourceMappingURL=footer.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/upload.js
var glyph_upload = __webpack_require__(1052);
var upload_default = /*#__PURE__*/__webpack_require__.n(glyph_upload);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/dropbox.js
var dropbox = __webpack_require__(997);
var dropbox_default = /*#__PURE__*/__webpack_require__.n(dropbox);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/googledrive.js
var googledrive = __webpack_require__(998);
var googledrive_default = /*#__PURE__*/__webpack_require__.n(googledrive);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var theme = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/sidebar/item/styled.js



var styled_Wrapper = styled_components_browser_esm["default"].li(styled_templateObject_1 || (styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  padding: 6px 25px;\n  list-style-type: none;\n  opacity: 1;\n\n  ", ";\n  &:hover {\n    ", ";\n  }\n"], ["\n  color: ",
    ";\n  padding: 6px 25px;\n  list-style-type: none;\n  opacity: 1;\n\n  ", ";\n  &:hover {\n    ",
    ";\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive ? theme["colors"].B400 : theme["colors"].N500;
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? '' : 'cursor: pointer');
}, function (_a) {
    var isActive = _a.isActive;
    return isActive ? '' : 'background-color: #E5E8EC';
});
var ServiceIcon = styled_components_browser_esm["default"].div(templateObject_2 || (templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  display: inline-block;\n  vertical-align: middle;\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n"])));
var ServiceName = styled_components_browser_esm["default"].div(templateObject_3 || (templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  font-size: 14px;\n  position: relative;\n  margin-left: 10px;\n  top: -1px;\n  display: inline-block;\n"], ["\n  font-size: 14px;\n  position: relative;\n  margin-left: 10px;\n  top: -1px;\n  display: inline-block;\n"])));
var styled_templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/sidebar/item/sidebarItem.js






var sidebarItem_StatelessSidebarItem = /** @class */ (function (_super) {
    tslib_es6["__extends"](StatelessSidebarItem, _super);
    function StatelessSidebarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () { return _this.props.onChangeService(_this.props.serviceName); };
        return _this;
    }
    StatelessSidebarItem.prototype.render = function () {
        var _a = this.props, serviceFullName = _a.serviceFullName, isActive = _a.isActive, children = _a.children;
        return (react["createElement"](styled_Wrapper, { isActive: isActive, onClick: this.onClick },
            react["createElement"](ServiceIcon, null, children),
            react["createElement"](ServiceName, null, serviceFullName)));
    };
    return StatelessSidebarItem;
}(react["Component"]));

var sidebarItem_mapDispatchToProps = function (dispatch) { return ({
    onChangeService: function (serviceName) {
        return dispatch(changeService(serviceName));
    },
}); };
/* harmony default export */ var sidebarItem = (connect_connect(null, sidebarItem_mapDispatchToProps)(sidebarItem_StatelessSidebarItem));
//# sourceMappingURL=sidebarItem.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/sidebar/styled.js


// TODO: ECEEF1 is not an atlaskit colour
// https://product-fabric.atlassian.net/browse/MSW-156
var sidebar_styled_Wrapper = styled_components_browser_esm["default"].div(sidebar_styled_templateObject_1 || (sidebar_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-color: #eceef1;\n  z-index: 60;\n"], ["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-color: #eceef1;\n  z-index: 60;\n"])));
var ServiceList = styled_components_browser_esm["default"].ul(styled_templateObject_2 || (styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  padding: 0;\n  float: left;\n  width: 100%;\n  margin: 17px 0 0 0 !important; /* We need important here due to default \"ul\" style overrides */\n"], ["\n  padding: 0;\n  float: left;\n  width: 100%;\n  margin: 17px 0 0 0 !important; /* We need important here due to default \"ul\" style overrides */\n"])));
var Separator = styled_components_browser_esm["default"].li(styled_templateObject_3 || (styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  width: 100%;\n  list-style-type: none;\n  margin: 9px 0 10px 0;\n  box-sizing: border-box;\n  padding: 0 25px 0 25px;\n  position: relative;\n  cursor: default;\n"], ["\n  width: 100%;\n  list-style-type: none;\n  margin: 9px 0 10px 0;\n  box-sizing: border-box;\n  padding: 0 25px 0 25px;\n  position: relative;\n  cursor: default;\n"])));
// TODO: rgba(9, 30, 66, 0.06) is not an atlaskit colour
// https://product-fabric.atlassian.net/browse/MSW-156
var SeparatorLine = styled_components_browser_esm["default"].div(templateObject_4 || (templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  width: 100%;\n  border-top: 1px solid rgba(9, 30, 66, 0.06);\n  height: 0;\n"], ["\n  width: 100%;\n  border-top: 1px solid rgba(9, 30, 66, 0.06);\n  height: 0;\n"])));
var StyledIcon = styled_components_browser_esm["default"].svg(templateObject_5 || (templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  width: 22px;\n  height: 22px;\n"], ["\n  width: 22px;\n  height: 22px;\n"])));
var StyledSvgGroup = styled_components_browser_esm["default"].g(templateObject_6 || (templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  fill: ", ";\n"], ["\n  fill: ", ";\n"])), function (_a) {
    var active = _a.active;
    return (active ? '#0061C5' : '#42526E');
});
var sidebar_styled_templateObject_1, styled_templateObject_2, styled_templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/sidebar/icons.js




// TODO this file should be replaced with ak/icons icon MSW-404
var icons_GiphyIcon = /** @class */ (function (_super) {
    tslib_es6["__extends"](GiphyIcon, _super);
    function GiphyIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GiphyIcon.prototype.render = function () {
        var active = this.props.active;
        return (react["createElement"](StyledIcon, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 27 35" },
            react["createElement"](StyledSvgGroup, { active: active, "fill-rule": "evenodd", "clip-rule": "evenodd" },
                react["createElement"]("path", { className: "logo-green", d: "M0 3h4v29H0z" }),
                react["createElement"]("path", { className: "logo-purple", d: "M24 11h4v21h-4z" }),
                react["createElement"]("path", { className: "logo-blue", d: "M0 31h28v4H0z" }),
                react["createElement"]("path", { className: "logo-yellow", d: "M0 0h16v4H0z" }),
                react["createElement"]("path", { className: "logo-red", d: "M24 8V4h-4V0h-4v12h12V8" }),
                react["createElement"]("path", { className: "logo-shadow", d: "M24 16v-4h4M16 0v4h-4" }))));
    };
    return GiphyIcon;
}(react["Component"]));

//# sourceMappingURL=icons.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/sidebar/item/giphySidebarItem.js







var giphySidebarItem_StatelessGiphySidebarItem = /** @class */ (function (_super) {
    tslib_es6["__extends"](StatelessGiphySidebarItem, _super);
    function StatelessGiphySidebarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatelessGiphySidebarItem.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, onChangeService = _a.onChangeService;
        return (react["createElement"](sidebarItem_StatelessSidebarItem, { serviceName: "giphy", serviceFullName: "GIPHY", isActive: isActive, onChangeService: onChangeService },
            react["createElement"](icons_GiphyIcon, { active: isActive })));
    };
    return StatelessGiphySidebarItem;
}(react["Component"]));

var giphySidebarItem_mapDispatchToProps = function (dispatch) { return ({
    onChangeService: function () {
        dispatch(changeService('giphy'));
        dispatch(searchGiphy('', false));
    },
}); };
/* harmony default export */ var giphySidebarItem = (connect_connect(null, giphySidebarItem_mapDispatchToProps)(giphySidebarItem_StatelessGiphySidebarItem));
//# sourceMappingURL=giphySidebarItem.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/sidebar/sidebar.js












var sidebar_StatelessSidebar = /** @class */ (function (_super) {
    tslib_es6["__extends"](StatelessSidebar, _super);
    function StatelessSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getCloudPickingSidebarItems = function () {
            var selected = _this.props.selected;
            return [
                react["createElement"](Separator, { key: "seperator" },
                    react["createElement"](SeparatorLine, null)),
                react["createElement"](giphySidebarItem, { key: "giphy", isActive: selected === 'giphy' }),
                react["createElement"](sidebarItem, { key: "dropbox", serviceName: "dropbox", serviceFullName: "Dropbox", isActive: selected === 'dropbox' },
                    react["createElement"](dropbox_default.a, { label: "dropbox" })),
                react["createElement"](sidebarItem, { key: "google", serviceName: "google", serviceFullName: "Google Drive", isActive: selected === 'google' },
                    react["createElement"](googledrive_default.a, { label: "google" })),
            ];
        };
        return _this;
    }
    StatelessSidebar.prototype.render = function () {
        var selected = this.props.selected;
        return (react["createElement"](sidebar_styled_Wrapper, null,
            react["createElement"](ServiceList, null,
                react["createElement"](sidebarItem, { serviceName: "upload", serviceFullName: react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].upload)), isActive: selected === 'upload' },
                    react["createElement"](upload_default.a, { label: "upload" })),
                this.getCloudPickingSidebarItems())));
    };
    return StatelessSidebar;
}(react["Component"]));

/* harmony default export */ var sidebar = (connect_connect(function (state) { return ({
    selected: state.view.service.name,
}); })(sidebar_StatelessSidebar));
//# sourceMappingURL=sidebar.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-card/index.js + 2 modules
var media_card = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/utils/getMediaTypeFromMimeType.js
var getMediaTypeFromMimeType = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/@atlaskit/spinner/Spinner/index.js + 3 modules
var Spinner = __webpack_require__(830);

// EXTERNAL MODULE: ./node_modules/react-transition-group/index.js
var react_transition_group = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/@atlaskit/portal/components/Portal.js
var Portal = __webpack_require__(907);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/constants.js
var constants = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/@atlaskit/flag/styled/Wrapper.js



var flagWidth = Object(constants["l" /* gridSize */])() * 50;
var flagAnimationTime = 400;
// This is the translateX position that we target when animating a card out
// towards the left of screen.
var exitXPosition = 0 - flagWidth / 2 + "px";
var flagAnimationDuration = flagAnimationTime + "ms";
var animationEnter = Object(styled_components_browser_esm["keyframes"])(Wrapper_templateObject_1 || (Wrapper_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n    from {\n      opacity: 0;\n      transform: translate(", ", 0);\n    }\n    to {\n      opacity: 1;\n      transform: translate(0, 0);\n    }\n"], ["\n    from {\n      opacity: 0;\n      transform: translate(", ", 0);\n    }\n    to {\n      opacity: 1;\n      transform: translate(0, 0);\n    }\n"])), exitXPosition);
var animationLeave = Object(styled_components_browser_esm["keyframes"])(Wrapper_templateObject_2 || (Wrapper_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  from {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate(", ", 0);\n  }\n"], ["\n  from {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate(", ", 0);\n  }\n"])), exitXPosition);
var getAnimation = function (_a) {
    var transitionState = _a.transitionState;
    if (transitionState === 'entering') {
        return animationEnter + " " + flagAnimationDuration;
    }
    if (transitionState === 'exiting') {
        return animationLeave + " " + flagAnimationDuration;
    }
    return 'initial';
};
var Wrapper_Wrapper = styled_components_browser_esm["default"].div(Wrapper_templateObject_3 || (Wrapper_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  bottom: 0;\n  position: absolute;\n  transition: transform ", " ease-in-out;\n  width: ", "px;\n\n  &:first-child {\n    animation: ", ";\n  }\n\n  &:nth-child(n + 2) {\n    transform: translateX(0) translateY(100%) translateY(", "px);\n  }\n\n  /* Layer the 'primary' flag above the 'secondary' flag */\n  &:nth-child(1) {\n    z-index: 5;\n  }\n  &:nth-child(2) {\n    z-index: 4;\n  }\n\n  /* The 2nd flag should be placed at 0,0 position when the 1st flag is animating out. */\n  ", " &:nth-child(n+4) {\n    display: none;\n  }\n"], ["\n  bottom: 0;\n  position: absolute;\n  transition: transform ", " ease-in-out;\n  width: ", "px;\n\n  &:first-child {\n    animation: ", ";\n  }\n\n  &:nth-child(n + 2) {\n    transform: translateX(0) translateY(100%) translateY(", "px);\n  }\n\n  /* Layer the 'primary' flag above the 'secondary' flag */\n  &:nth-child(1) {\n    z-index: 5;\n  }\n  &:nth-child(2) {\n    z-index: 4;\n  }\n\n  /* The 2nd flag should be placed at 0,0 position when the 1st flag is animating out. */\n  ",
    " &:nth-child(n+4) {\n    display: none;\n  }\n"])), flagAnimationDuration, flagWidth, getAnimation, 2 * Object(constants["l" /* gridSize */])(), function (_a) {
    var transitionState = _a.transitionState;
    return transitionState === 'exiting'
        ? "\n    && + * {\n      transform: translate(0, 0);\n    }\n  "
        : null;
});
Wrapper_Wrapper.displayName = 'Wrapper';
/* harmony default export */ var flag_styled_Wrapper = (Wrapper_Wrapper);
var Wrapper_templateObject_1, Wrapper_templateObject_2, Wrapper_templateObject_3;
//# sourceMappingURL=Wrapper.js.map
// EXTERNAL MODULE: ./node_modules/react-transition-group/TransitionGroup.js
var TransitionGroup = __webpack_require__(413);
var TransitionGroup_default = /*#__PURE__*/__webpack_require__.n(TransitionGroup);

// CONCATENATED MODULE: ./node_modules/@atlaskit/flag/components/FlagGroup/styledFlagGroup.js




/* harmony default export */ var styledFlagGroup = (styled_components_browser_esm["default"].div(styledFlagGroup_templateObject_1 || (styledFlagGroup_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  bottom: ", "px;\n  left: ", "px;\n  position: fixed;\n  z-index: ", ";\n"], ["\n  bottom: ", "px;\n  left: ", "px;\n  position: fixed;\n  z-index: ", ";\n"])), theme["math"].multiply(constants["l" /* gridSize */], 6), theme["math"].multiply(constants["l" /* gridSize */], 10), constants["m" /* layers */].flag));
var SROnly = styled_components_browser_esm["default"].h1(styledFlagGroup_templateObject_2 || (styledFlagGroup_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"], ["\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));
var Inner = Object(styled_components_browser_esm["default"])(TransitionGroup_default.a)(styledFlagGroup_templateObject_3 || (styledFlagGroup_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var styledFlagGroup_templateObject_1, styledFlagGroup_templateObject_2, styledFlagGroup_templateObject_3;
//# sourceMappingURL=styledFlagGroup.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/flag/components/FlagGroup/index.js







var FlagGroup_FlagGroup = /** @class */ (function (_super) {
    tslib_es6["__extends"](FlagGroup, _super);
    function FlagGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderChildren = function () {
            var _a = _this.props, children = _a.children, onDismissed = _a.onDismissed;
            return react["Children"].map(children, function (flag, index) {
                var isDismissAllowed = index === 0;
                var id = flag.props.id;
                return (
                // @ts-ignore: Bug in types - 'timeout' prop should not be required when addEndListener is provided
                react_default.a.createElement(react_transition_group["Transition"], { key: id, addEndListener: function (node, done) {
                        if (index > 0) {
                            done();
                            return;
                        }
                        node.addEventListener('animationstart', function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            setTimeout(function () { return done.apply(void 0, tslib_es6["__spread"](args)); }, flagAnimationTime);
                        });
                        node.addEventListener('animationend', done);
                    } }, function (transitionState) { return (react_default.a.createElement(flag_styled_Wrapper, { transitionState: transitionState }, Object(react["cloneElement"])(flag, { onDismissed: onDismissed, isDismissAllowed: isDismissAllowed }))); }));
            });
        };
        return _this;
    }
    FlagGroup.prototype.render = function () {
        return (react_default.a.createElement(Portal["a" /* default */], { zIndex: constants["m" /* layers */].flag() },
            react_default.a.createElement(styledFlagGroup, null,
                react_default.a.createElement(SROnly, null, "Flag notifications"),
                react_default.a.createElement(Inner, { component: "div" }, this.renderChildren()))));
    };
    return FlagGroup;
}(react["Component"]));
/* harmony default export */ var components_FlagGroup = (FlagGroup_FlagGroup);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/createAndFireEvent.js
var createAndFireEvent = __webpack_require__(905);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsContext.js
var withAnalyticsContext = __webpack_require__(909);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsEvents.js
var withAnalyticsEvents = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/cross.js
var cross = __webpack_require__(954);
var cross_default = /*#__PURE__*/__webpack_require__.n(cross);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/chevron-up.js
var chevron_up = __webpack_require__(1057);
var chevron_up_default = /*#__PURE__*/__webpack_require__.n(chevron_up);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/chevron-down.js
var chevron_down = __webpack_require__(106);
var chevron_down_default = /*#__PURE__*/__webpack_require__.n(chevron_down);

// EXTERNAL MODULE: ./node_modules/@atlaskit/flag/version.json
var flag_version = __webpack_require__(1058);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/utils/themed.js
var themed = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/@atlaskit/flag/theme.js

var flagBackgroundColor = Object(themed["a" /* default */])('appearance', {
    error: { light: theme["colors"].R400, dark: theme["colors"].R300 },
    info: { light: theme["colors"].N500, dark: theme["colors"].N500 },
    normal: { light: theme["colors"].N0, dark: theme["colors"].DN50 },
    success: { light: theme["colors"].G400, dark: theme["colors"].G300 },
    warning: { light: theme["colors"].Y200, dark: theme["colors"].Y300 },
});
var flagBorderColor = Object(themed["a" /* default */])('appearance', {
    normal: { light: theme["colors"].N60A },
});
var flagTextColor = Object(themed["a" /* default */])('appearance', {
    error: { light: theme["colors"].N0, dark: theme["colors"].DN40 },
    info: { light: theme["colors"].N0, dark: theme["colors"].DN600 },
    normal: { light: theme["colors"].N500, dark: theme["colors"].DN600 },
    success: { light: theme["colors"].N0, dark: theme["colors"].DN40 },
    warning: { light: theme["colors"].N700, dark: theme["colors"].DN40 },
});
var flagShadowColor = Object(themed["a" /* default */])('appearance', {
    error: { light: theme["colors"].N50A, dark: theme["colors"].N50A },
    info: { light: theme["colors"].N50A, dark: theme["colors"].N50A },
    normal: { light: theme["colors"].N50A, dark: theme["colors"].N50A },
    success: { light: theme["colors"].N50A, dark: theme["colors"].N50A },
    warning: { light: theme["colors"].N50A, dark: theme["colors"].N50A },
});
var flagFocusRingColor = Object(themed["a" /* default */])('appearance', {
    error: { light: theme["colors"].N40, dark: theme["colors"].N40 },
    info: { light: theme["colors"].N40, dark: theme["colors"].N40 },
    normal: { light: theme["colors"].B100, dark: theme["colors"].link },
    success: { light: theme["colors"].N40, dark: theme["colors"].N40 },
    warning: { light: theme["colors"].N200, dark: theme["colors"].N200 },
});
var lightButtonBackground = 'rgba(255, 255, 255, 0.08)';
var background = {
    success: { light: lightButtonBackground, dark: theme["colors"].N30A },
    info: { light: lightButtonBackground, dark: lightButtonBackground },
    error: { light: lightButtonBackground, dark: theme["colors"].N30A },
    warning: { light: theme["colors"].N30A, dark: theme["colors"].N30A },
    normal: { light: 'none', dark: 'none' },
};
var color = {
    success: { light: theme["colors"].N0, dark: theme["colors"].DN40 },
    info: { light: theme["colors"].N0, dark: theme["colors"].DN600 },
    error: { light: theme["colors"].N0, dark: theme["colors"].DN600 },
    warning: { light: theme["colors"].N700, dark: theme["colors"].DN40 },
    normal: { light: theme["colors"].B400, dark: theme["colors"].B100 },
};
var getBackground = function (_a) {
    var _b = _a.appearance, appearance = _b === void 0 ? 'normal' : _b, _c = _a.mode, mode = _c === void 0 ? 'light' : _c;
    return background[appearance][mode];
};
var getColor = function (_a) {
    var _b = _a.appearance, appearance = _b === void 0 ? 'normal' : _b, _c = _a.mode, mode = _c === void 0 ? 'light' : _c;
    return color[appearance][mode];
};
var actionButtonStyles = function (props) { return ({
    background: getBackground(props),
    color: getColor(props),
}); };
var getPseudos = function (p) {
    var padding = p.appearance === 'normal' ? 0 : Object(constants["l" /* gridSize */])();
    return {
        '&, a&': {
            fontWeight: '500',
            padding: "0 " + padding + "px !important",
        },
        '&:focus': {
            boxShadow: "0 0 0 2px " + flagFocusRingColor(p),
        },
        '&:hover, &:active': {
            textDecoration: 'underline',
        },
    };
};
//# sourceMappingURL=theme.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/flag/components/Flag/styledFlag.js




var getBoxShadow = function (props) {
    var borderColor = flagBorderColor(props);
    var shadowColor = flagShadowColor(props);
    var border = borderColor && "0 0 1px " + borderColor;
    var shadow = "0 20px 32px -8px " + shadowColor;
    return [border, shadow].filter(function (p) { return p; }).join(',');
};
/* harmony default export */ var styledFlag = (styled_components_browser_esm["default"].div(styledFlag_templateObject_1 || (styledFlag_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  color: ", ";\n  padding: ", "px;\n  transition: background-color 200ms;\n  width: 100%;\n  z-index: 600;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  color: ", ";\n  padding: ", "px;\n  transition: background-color 200ms;\n  width: 100%;\n  z-index: 600;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"])), flagBackgroundColor, constants["f" /* borderRadius */], getBoxShadow, flagTextColor, theme["math"].multiply(constants["l" /* gridSize */], 2), flagFocusRingColor));
// Header
var Header = styled_components_browser_esm["default"].div(styledFlag_templateObject_2 || (styledFlag_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  height: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  height: ", "px;\n"])), theme["math"].multiply(constants["l" /* gridSize */], 4));
var Icon = styled_components_browser_esm["default"].div(styledFlag_templateObject_3 || (styledFlag_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  flex: 0 0 auto;\n  width: ", "px;\n"], ["\n  flex: 0 0 auto;\n  width: ", "px;\n"])), theme["math"].multiply(constants["l" /* gridSize */], 5));
var Title = styled_components_browser_esm["default"].span(styledFlag_templateObject_4 || (styledFlag_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  font-weight: 600;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  color: ", ";\n  font-weight: 600;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), flagTextColor);
var DismissButton = styled_components_browser_esm["default"].button(styledFlag_templateObject_5 || (styledFlag_templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: ", "px;\n  color: ", ";\n  cursor: pointer;\n  flex: 0 0 auto;\n  line-height: 1;\n  margin-left: ", "px;\n  padding: 0;\n  white-space: nowrap;\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"], ["\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: ", "px;\n  color: ", ";\n  cursor: pointer;\n  flex: 0 0 auto;\n  line-height: 1;\n  margin-left: ", "px;\n  padding: 0;\n  white-space: nowrap;\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"])), constants["f" /* borderRadius */], flagTextColor, constants["l" /* gridSize */], flagFocusRingColor);
// Content
var Content = styled_components_browser_esm["default"].div(styledFlag_templateObject_6 || (styledFlag_templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n  padding: 0 0 0 ", "px;\n"], ["\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n  padding: 0 0 0 ", "px;\n"])), theme["math"].multiply(constants["l" /* gridSize */], 5));
var styledFlag_Expander = styled_components_browser_esm["default"].div(templateObject_7 || (templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  max-height: ", "px;\n  opacity: ", ";\n  overflow: ", ";\n  transition: max-height 0.3s, opacity 0.3s;\n"], ["\n  max-height: ", "px;\n  opacity: ", ";\n  overflow: ",
    ";\n  transition: max-height 0.3s, opacity 0.3s;\n"])), function (_a) {
    var isExpanded = _a.isExpanded;
    return (isExpanded ? 150 : 0);
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return (isExpanded ? 1 : 0);
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded ? 'visible' : 'hidden';
});
var Description = styled_components_browser_esm["default"].div(templateObject_8 || (templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  word-wrap: break-word;\n"], ["\n  color: ", ";\n  word-wrap: break-word;\n"])), flagTextColor);
var styledFlag_templateObject_1, styledFlag_templateObject_2, styledFlag_templateObject_3, styledFlag_templateObject_4, styledFlag_templateObject_5, styledFlag_templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styledFlag.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/flag/components/Expander/styledExpander.js


/* harmony default export */ var styledExpander = (styled_components_browser_esm["default"].div(styledExpander_templateObject_1 || (styledExpander_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  max-height: ", "px;\n  opacity: ", ";\n  overflow: ", ";\n  transition: max-height 0.3s, opacity 0.3s;\n"], ["\n  max-height: ",
    "px;\n  opacity: ", ";\n  overflow: ",
    ";\n  transition: max-height 0.3s, opacity 0.3s;\n"])), function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded ? 150 : 0;
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return (isExpanded ? 1 : 0);
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded ? 'visible' : 'hidden';
}));
var styledExpander_templateObject_1;
//# sourceMappingURL=styledExpander.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/flag/components/Expander/index.js



var Expander_Expander = /** @class */ (function (_super) {
    tslib_es6["__extends"](Expander, _super);
    function Expander() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isAnimating: false };
        _this.handleTransitionEnd = function () {
            _this.setState({ isAnimating: false });
        };
        return _this;
    }
    Expander.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.isExpanded !== nextProps.isExpanded) {
            this.setState({ isAnimating: true });
        }
    };
    Expander.prototype.render = function () {
        var _a = this.props, children = _a.children, isExpanded = _a.isExpanded;
        var isAnimating = this.state.isAnimating;
        // Need to always render the ExpanderInternal otherwise the
        // reveal transiton doesn't happen. We can't use CSS animation for
        // the the reveal because we don't know the height of the content.
        var childrenIfExpanded = isAnimating || isExpanded ? children : null;
        return (react_default.a.createElement(styledExpander, { "aria-hidden": !isExpanded, isExpanded: isExpanded, onTransitionEnd: this.handleTransitionEnd }, childrenIfExpanded));
    };
    // eslint-disable-line react/sort-comp
    Expander.defaultProps = { isExpanded: false };
    return Expander;
}(react["Component"]));
/* harmony default export */ var components_Expander = (Expander_Expander);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/uuid/v1.js
var v1 = __webpack_require__(571);
var v1_default = /*#__PURE__*/__webpack_require__.n(v1);

// CONCATENATED MODULE: ./node_modules/@atlaskit/flag/components/FlagActions/styledFlagActions.js





// Outputs the styles for actions separator: mid-dot for non-bold flags, or space for bold flags.
var getDivider = function (_a) {
    var hasDivider = _a.hasDivider, useMidDot = _a.useMidDot;
    return Object(styled_components_browser_esm["css"])(styledFlagActions_templateObject_1 || (styledFlagActions_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: ", ";\n  content: \"", "\";\n  width: ", "px;\n"], ["\n  display: ", ";\n  content: \"", "\";\n  width: ", "px;\n"])), hasDivider ? 'inline-block' : 'none', useMidDot ? '\u00B7' : '', useMidDot ? theme["math"].multiply(constants["l" /* gridSize */], 2) : constants["l" /* gridSize */]);
};
/* harmony default export */ var styledFlagActions = (styled_components_browser_esm["default"].div(styledFlagActions_templateObject_2 || (styledFlagActions_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ", "px;\n  transform: ", ";\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ", "px;\n  transform: ",
    ";\n"])), constants["l" /* gridSize */], function (_a) {
    var appearance = _a.appearance;
    return appearance === DEFAULT_APPEARANCE ? "translateX(-" + Object(constants["l" /* gridSize */])() / 2 + "px)" : 0;
}));
var Action = styled_components_browser_esm["default"].div(styledFlagActions_templateObject_3 || (styledFlagActions_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  &::before {\n    color: ", ";\n    text-align: center;\n    vertical-align: middle;\n\n    ", ";\n  }\n"], ["\n  &::before {\n    color: ", ";\n    text-align: center;\n    vertical-align: middle;\n\n    ", ";\n  }\n"])), flagTextColor, getDivider);
var styledFlagActions_templateObject_1, styledFlagActions_templateObject_2, styledFlagActions_templateObject_3;
//# sourceMappingURL=styledFlagActions.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/flag/components/FlagActions/index.js







var FlagActions_FlagActions = /** @class */ (function (_super) {
    tslib_es6["__extends"](FlagActions, _super);
    function FlagActions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getUniqueId = function (prefix) { return prefix + "-" + v1_default()(); };
        return _this;
    }
    FlagActions.prototype.render = function () {
        var _this = this;
        var _a = this.props, actions = _a.actions, appearance = _a.appearance, linkComponent = _a.linkComponent;
        var isBold = appearance !== DEFAULT_APPEARANCE;
        if (!actions.length)
            return null;
        return (react_default.a.createElement(styledFlagActions, { appearance: appearance }, actions.map(function (action, index) { return (react_default.a.createElement(Action, { key: _this.getUniqueId('flag-action'), hasDivider: !!index, useMidDot: !isBold },
            react_default.a.createElement(Button["a" /* default */], { onClick: action.onClick, href: action.href, target: action.target, 
                // This is very much a hack
                // This should be tidied up when the appearance prop
                // of flag is aligned with other appearance props.
                appearance: appearance === 'normal'
                    ? 'link'
                    : appearance, component: linkComponent, spacing: "compact", theme: function (adgTheme, themeProps) {
                    var _a = adgTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_es6["__rest"](_a, ["buttonStyles"]);
                    return tslib_es6["__assign"]({ buttonStyles: tslib_es6["__assign"]({}, buttonStyles, actionButtonStyles({
                            appearance: appearance,
                            mode: themeProps.mode,
                        }), getPseudos({ appearance: appearance, mode: themeProps.mode })) }, rest);
                } }, action.content))); })));
    };
    // eslint-disable-line react/sort-comp
    FlagActions.defaultProps = {
        appearance: DEFAULT_APPEARANCE,
        actions: [],
    };
    return FlagActions;
}(react["Component"]));
/* harmony default export */ var components_FlagActions = (FlagActions_FlagActions);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/flag/components/Flag/index.js











var DEFAULT_APPEARANCE = 'normal';
var Flag_Flag = /** @class */ (function (_super) {
    tslib_es6["__extends"](Flag, _super);
    function Flag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isExpanded: false };
        _this.dismissFlag = function () {
            if (_this.props.isDismissAllowed && _this.props.onDismissed) {
                _this.props.onDismissed(_this.props.id);
            }
        };
        _this.isBold = function () { return _this.props.appearance !== DEFAULT_APPEARANCE; };
        _this.toggleExpand = function () {
            _this.setState({ isExpanded: !_this.state.isExpanded });
        };
        _this.renderToggleOrDismissButton = function () {
            var _a = _this.props, appearance = _a.appearance, description = _a.description, actions = _a.actions, isDismissAllowed = _a.isDismissAllowed, onDismissed = _a.onDismissed;
            var isBold = _this.isBold();
            if (!isDismissAllowed ||
                (!isBold && !onDismissed) ||
                (isBold && !description && (!actions || !actions.length))) {
                return null;
            }
            var ChevronIcon = _this.state.isExpanded ? chevron_up_default.a : chevron_down_default.a;
            var ButtonIcon = isBold ? ChevronIcon : cross_default.a;
            var buttonLabel = isBold ? 'Toggle flag body' : 'Dismiss flag';
            var buttonAction = isBold ? _this.toggleExpand : _this.dismissFlag;
            var size = ButtonIcon === ChevronIcon ? 'large' : 'small';
            return (react_default.a.createElement(DismissButton, { appearance: appearance, "aria-expanded": _this.state.isExpanded, focusRingColor: flagFocusRingColor(_this.props), onClick: buttonAction, type: "button" },
                react_default.a.createElement(ButtonIcon, { label: buttonLabel, size: size })));
        };
        _this.renderBody = function () {
            var _a = _this.props, actions = _a.actions, appearance = _a.appearance, description = _a.description, linkComponent = _a.linkComponent;
            var isExpanded = !_this.isBold() || _this.state.isExpanded;
            return (react_default.a.createElement(components_Expander, { isExpanded: isExpanded },
                description && (react_default.a.createElement(Description, { appearance: appearance }, description)),
                react_default.a.createElement(components_FlagActions, { actions: actions, appearance: appearance, linkComponent: linkComponent })));
        };
        // We prevent default on mouse down to avoid focus ring when the flag is clicked,
        // while still allowing it to be focused with the keyboard.
        _this.handleMouseDown = function (e) {
            e.preventDefault();
        };
        return _this;
    }
    Flag.prototype.componentWillReceiveProps = function (nextProps) {
        var actions = nextProps.actions, description = nextProps.description;
        if (this.isBold() &&
            this.state.isExpanded &&
            !description &&
            (!actions || !actions.length)) {
            this.toggleExpand();
        }
    };
    Flag.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, icon = _a.icon, title = _a.title, onMouseOver = _a.onMouseOver, onFocus = _a.onFocus, onMouseOut = _a.onMouseOut, onBlur = _a.onBlur;
        var autoDismissProps = { onMouseOver: onMouseOver, onFocus: onFocus, onMouseOut: onMouseOut, onBlur: onBlur };
        var OptionalDismissButton = this.renderToggleOrDismissButton;
        var Body = this.renderBody;
        return (react_default.a.createElement(styledFlag, tslib_es6["__assign"]({ appearance: appearance, role: "alert", tabIndex: 0, onMouseDown: this.handleMouseDown }, autoDismissProps),
            react_default.a.createElement(Header, null,
                react_default.a.createElement(Icon, null, icon),
                react_default.a.createElement(Title, { appearance: appearance }, title),
                react_default.a.createElement(OptionalDismissButton, null)),
            react_default.a.createElement(Content, null,
                react_default.a.createElement(Body, null))));
    };
    Flag.defaultProps = {
        actions: [],
        appearance: DEFAULT_APPEARANCE,
        isDismissAllowed: false,
    };
    return Flag;
}(react["Component"]));

var createAndFireEventOnAtlaskit = Object(createAndFireEvent["a" /* default */])('atlaskit');
/* harmony default export */ var components_Flag = (Object(withAnalyticsContext["a" /* default */])({
    componentName: 'flag',
    packageName: flag_version["a" /* name */],
    packageVersion: flag_version["b" /* version */],
})(Object(withAnalyticsEvents["a" /* default */])({
    onBlur: createAndFireEventOnAtlaskit({
        action: 'blurred',
        actionSubject: 'flag',
        attributes: {
            componentName: 'flag',
            packageName: flag_version["a" /* name */],
            packageVersion: flag_version["b" /* version */],
        },
    }),
    onDismissed: createAndFireEventOnAtlaskit({
        action: 'dismissed',
        actionSubject: 'flag',
        attributes: {
            componentName: 'flag',
            packageName: flag_version["a" /* name */],
            packageVersion: flag_version["b" /* version */],
        },
    }),
    onFocus: createAndFireEventOnAtlaskit({
        action: 'focused',
        actionSubject: 'flag',
        attributes: {
            componentName: 'flag',
            packageName: flag_version["a" /* name */],
            packageVersion: flag_version["b" /* version */],
        },
    }),
})(Flag_Flag)));
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/annotate.js
var annotate = __webpack_require__(485);
var annotate_default = /*#__PURE__*/__webpack_require__.n(annotate);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/trash.js
var trash = __webpack_require__(1053);
var trash_default = /*#__PURE__*/__webpack_require__.n(trash);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/error.js
var glyph_error = __webpack_require__(947);
var error_default = /*#__PURE__*/__webpack_require__.n(glyph_error);

// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(958);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/infiniteScroll.js




var infiniteScroll_InfiniteScroll = /** @class */ (function (_super) {
    tslib_es6["__extends"](InfiniteScroll, _super);
    function InfiniteScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.scrollHeight = 0;
        _this.checkThreshold = function () {
            var div = _this.div.current;
            if (div === null) {
                return;
            }
            var threshold = _this.props.threshold || 0;
            var position = div.scrollTop + div.offsetHeight;
            var thresholdModifier = 0.1;
            var adjustedThreshold = Math.min(threshold, div.scrollHeight * thresholdModifier);
            var thresholdReached = position > _this.scrollHeight &&
                position > div.scrollHeight - adjustedThreshold;
            if (thresholdReached) {
                _this.scrollHeight = div.scrollHeight;
                if (_this.props.onThresholdReached) {
                    _this.props.onThresholdReached();
                }
            }
        };
        _this.checkThresholdDebounce = lodash_debounce_default()(_this.checkThreshold, _this.props.delay, {
            leading: true,
            trailing: true,
        });
        _this.div = react["createRef"]();
        return _this;
    }
    InfiniteScroll.prototype.componentDidMount = function () {
        this.checkThresholdDebounce();
    };
    InfiniteScroll.prototype.componentDidUpdate = function () {
        this.checkThresholdDebounce();
    };
    InfiniteScroll.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height, children = _a.children;
        return (react["createElement"]("div", { ref: this.div, style: {
                width: width,
                height: height,
                overflowX: 'hidden',
                overflowY: 'auto',
                msOverflowStyle: 'scrollbar',
                display: 'inline-block',
            }, onScroll: this.checkThresholdDebounce }, children));
    };
    InfiniteScroll.defaultProps = {
        width: '100%',
        delay: 500,
        threshold: 100,
    };
    return InfiniteScroll;
}(react["Component"]));

//# sourceMappingURL=infiniteScroll.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/webgl.js
var isWebGLAvailableValue;
var isWebGLAvailable = function (forceCheck) {
    if (isWebGLAvailableValue !== undefined && !forceCheck) {
        return isWebGLAvailableValue;
    }
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl'); // experimental-webgl is needed for IE11
    isWebGLAvailableValue = !!context;
    return isWebGLAvailableValue;
};
//# sourceMappingURL=webgl.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/startFileBrowser.js
var START_FILE_BROWSER = 'START_FILE_BROWSER';
function isStartFileBrowserAction(action) {
    return action.type === START_FILE_BROWSER;
}
function startFileBrowser() {
    return {
        type: START_FILE_BROWSER,
    };
}
//# sourceMappingURL=startFileBrowser.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/upload/uploadButton.js







var uploadButton_LocalBrowserButton = /** @class */ (function (_super) {
    tslib_es6["__extends"](LocalBrowserButton, _super);
    function LocalBrowserButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onUploadClick = function () {
            var _a = _this.props, browserRef = _a.browserRef, onClick = _a.onClick;
            onClick();
            if (browserRef && browserRef.current) {
                browserRef.current.browse();
            }
        };
        return _this;
    }
    LocalBrowserButton.prototype.render = function () {
        return (react["createElement"](Button["a" /* default */], { className: "e2e-upload-button", appearance: "default", onClick: this.onUploadClick },
            react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].upload_file))));
    };
    return LocalBrowserButton;
}(react["Component"]));

var uploadButton_mapDispatchToProps = function (dispatch) { return ({
    onClick: function () { return dispatch(startFileBrowser()); },
}); };
/* harmony default export */ var uploadButton = (connect_connect(null, uploadButton_mapDispatchToProps)(uploadButton_LocalBrowserButton));
//# sourceMappingURL=uploadButton.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/util/getAssetUrl.js
var getAssetUrl = __webpack_require__(960);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/icons/index.js


var borderIcon = Object(getAssetUrl["a" /* getAssetUrl */])('border-icon.png');
var filesIcon = Object(getAssetUrl["a" /* getAssetUrl */])('files-icon.png');
var style = "\n.cls-1{fill:url(#linear-gradient);}\n.cls-2{fill:#253858;}\n.cls-3{fill:#ffc400;}\n.cls-4{fill:#ffab00;}\n.cls-5,.cls-6{fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;}\n.cls-5{stroke:#344563;}\n.cls-6{stroke:#5e6c84;}\n";
var errorIcon = (react["createElement"]("svg", { viewBox: "0 0 163.28 218" },
    react["createElement"]("defs", null,
        react["createElement"]("style", null, style),
        react["createElement"]("linearGradient", { id: "linear-gradient", x1: "133.86", y1: "136.43", x2: "-2.79", y2: "200.15", gradientUnits: "userSpaceOnUse" },
            react["createElement"]("stop", { offset: "0", stopColor: "#ffd740" }),
            react["createElement"]("stop", { offset: "1", stopColor: "#ffab00" })),
        react["createElement"]("clipPath", null,
            react["createElement"]("path", { className: "cls-1", d: "M94.78,80.16l66.44,115.08A15.17,15.17,0,0,1,148.08,218H15.2A15.17,15.17,0,0,1,2.06,195.24L68.5,80.16A15.17,15.17,0,0,1,94.78,80.16Z" }))),
    react["createElement"]("g", null,
        react["createElement"]("g", null,
            react["createElement"]("path", { className: "cls-1", d: "M94.78,80.16l66.44,115.08A15.17,15.17,0,0,1,148.08,218H15.2A15.17,15.17,0,0,1,2.06,195.24L68.5,80.16A15.17,15.17,0,0,1,94.78,80.16Z" }),
            react["createElement"]("path", { className: "cls-2", d: "M87.22,163.71l2.88-44.35a9.18,9.18,0,0,0-9.16-9.78h0a9.18,9.18,0,0,0-9.16,9.78l2.88,44.35a6.3,6.3,0,0,0,6.28,5.89h0A6.3,6.3,0,0,0,87.22,163.71Z" }),
            react["createElement"]("path", { className: "cls-2", d: "M71.38,187.25a9.53,9.53,0,0,0,10.39,9.58,9.68,9.68,0,0,0-.9-19.32A9.64,9.64,0,0,0,71.38,187.25Z" }),
            react["createElement"]("path", { className: "cls-3", d: "M91.7,27.17,84.29.45A.61.61,0,0,0,83.1.5L78.44,25.6l-5.8-1.08a.61.61,0,0,0-.7.76L79.35,52A.61.61,0,0,0,80.54,52l4.66-25.1L91,27.93A.61.61,0,0,0,91.7,27.17Z" }),
            react["createElement"]("path", { className: "cls-4", d: "M65.12,41.81,54.24,33.26a.27.27,0,0,0-.41.33L59.36,45,56.7,46.31a.27.27,0,0,0,0,.45l10.87,8.55a.27.27,0,0,0,.41-.33L62.41,43.55l2.66-1.29A.27.27,0,0,0,65.12,41.81Z" }),
            react["createElement"]("path", { className: "cls-5", d: "M115.15,36.6c-1.17,1.59-11-5.6-12.16-4s8.66,8.79,7.5,10.39-11-5.6-12.17-4,8.66,8.79,7.49,10.39-11-5.6-12.17-4,8.66,8.79,7.49,10.39" }),
            react["createElement"]("path", { className: "cls-6", d: "M119.92,64.19c-1.46,1.33-7.05-4.78-8.51-3.44s4.13,7.45,2.67,8.78-7.05-4.78-8.51-3.44c-.68.62.16,2.27,1.11,4" }),
            react["createElement"]("path", { className: "cls-6", d: "M44.8,64c1.82.77,5-6.87,6.86-6.1s-1.39,8.4.43,9.17,5-6.87,6.86-6.1c.85.36.61,2.19.29,4.13" })))));
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/upload/styled.js



var SpinnerWrapper = styled_components_browser_esm["default"].div(upload_styled_templateObject_1 || (upload_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60px;\n  height: calc(100% - 211px);\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60px;\n  height: calc(100% - 211px);\n"])));
var DefaultImage = styled_components_browser_esm["default"].img(upload_styled_templateObject_2 || (upload_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  float: left;\n  width: 115px;\n"], ["\n  float: left;\n  width: 115px;\n"])));
var TextWrapper = styled_components_browser_esm["default"].div(upload_styled_templateObject_3 || (upload_styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  float: left;\n"], ["\n  float: left;\n"])));
var DropzoneText = styled_components_browser_esm["default"].div(styled_templateObject_4 || (styled_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  display: block;\n  margin-left: 10px;\n  white-space: nowrap;\n  margin-top: 15px;\n  color: #6c798f;\n"], ["\n  display: block;\n  margin-left: 10px;\n  white-space: nowrap;\n  margin-top: 15px;\n  color: #6c798f;\n"])));
var ButtonWrapper = styled_components_browser_esm["default"].div(styled_templateObject_5 || (styled_templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  margin-left: 10px;\n  margin-top: 14px;\n  text-align: center;\n"], ["\n  margin-left: 10px;\n  margin-top: 14px;\n  text-align: center;\n"])));
var DropzoneContentWrapper = styled_components_browser_esm["default"].div(styled_templateObject_6 || (styled_templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  display: block;\n  float: left;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  display: block;\n  float: left;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
var DropzoneContainer = styled_components_browser_esm["default"].div(styled_templateObject_7 || (styled_templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  box-sizing: border-box;\n  border: 2px dashed #cfd4db;\n  border-image-source: url('", "');\n  border-image-slice: 2;\n  border-image-repeat: round;\n  border-radius: 3px;\n  ", "\n"], ["\n  box-sizing: border-box;\n  border: 2px dashed #cfd4db;\n  border-image-source: url('", "');\n  border-image-slice: 2;\n  border-image-repeat: round;\n  border-radius: 3px;\n  ",
    "\n"])), borderIcon, function (_a) {
    var isEmpty = _a.isEmpty;
    return isEmpty ? 'height: calc(100% - 4px);' : 'height: 211px;';
});
var RecentUploadsTitle = styled_components_browser_esm["default"].div(styled_templateObject_8 || (styled_templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  padding: 25px 10px 5px 0;\n  font-size: 20px;\n  color: #071d43;\n"], ["\n  padding: 25px 10px 5px 0;\n  font-size: 20px;\n  color: #071d43;\n"])));
var CardsWrapper = styled_components_browser_esm["default"].div(templateObject_9 || (templateObject_9 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var CardWrapper = styled_components_browser_esm["default"].div(templateObject_10 || (templateObject_10 = tslib_es6["__makeTemplateObject"](["\n  margin: 6px 0;\n  margin-right: 12px;\n  outline: none;\n\n  /* Cards are displayed in rows of 4, line up last card with edge of dropzone border */\n  &:nth-child(4n) {\n    margin-right: 0;\n  }\n"], ["\n  margin: 6px 0;\n  margin-right: 12px;\n  outline: none;\n\n  /* Cards are displayed in rows of 4, line up last card with edge of dropzone border */\n  &:nth-child(4n) {\n    margin-right: 0;\n  }\n"])));
var upload_styled_Wrapper = styled_components_browser_esm["default"].div(templateObject_11 || (templateObject_11 = tslib_es6["__makeTemplateObject"](["\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  padding: 24px 24px 2px 24px;\n"], ["\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  padding: 24px 24px 2px 24px;\n"])));
var LoadingNextPageWrapper = styled_components_browser_esm["default"].div(templateObject_12 || (templateObject_12 = tslib_es6["__makeTemplateObject"](["\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n"], ["\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n"])));
var upload_styled_templateObject_1, upload_styled_templateObject_2, upload_styled_templateObject_3, styled_templateObject_4, styled_templateObject_5, styled_templateObject_6, styled_templateObject_7, styled_templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/upload/dropzone.js









var dropzone_Dropzone = /** @class */ (function (_super) {
    tslib_es6["__extends"](Dropzone, _super);
    function Dropzone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropzone.prototype.render = function () {
        var _a = this.props, isEmpty = _a.isEmpty, browserRef = _a.browserRef;
        return (react["createElement"](DropzoneContainer, { isEmpty: isEmpty },
            react["createElement"](DropzoneContentWrapper, null,
                react["createElement"](DefaultImage, { src: filesIcon }),
                react["createElement"](TextWrapper, null,
                    react["createElement"](DropzoneText, null,
                        react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].drag_and_drop_your_files))),
                    react["createElement"](ButtonWrapper, null,
                        react["createElement"](uploadButton, { browserRef: browserRef }))))));
    };
    return Dropzone;
}(react["Component"]));

//# sourceMappingURL=dropzone.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/editorShowImage.js
var EDITOR_SHOW_IMAGE = 'EDITOR_SHOW_IMAGE';
function isEditorShowImageAction(action) {
    return action.type === EDITOR_SHOW_IMAGE;
}
function editorShowImage(imageUrl, originalFile) {
    return {
        type: EDITOR_SHOW_IMAGE,
        imageUrl: imageUrl,
        originalFile: originalFile,
    };
}
//# sourceMappingURL=editorShowImage.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/editRemoteImage.js
var EDIT_REMOTE_IMAGE = 'EDIT_REMOTE_IMAGE';
function isEditRemoteImageAction(action) {
    return action.type === EDIT_REMOTE_IMAGE;
}
function editRemoteImage(item, collectionName) {
    return {
        type: EDIT_REMOTE_IMAGE,
        item: item,
        collectionName: collectionName,
    };
}
//# sourceMappingURL=editRemoteImage.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/setUpfrontIdDeferred.js
var SET_UPFRONT_ID_DEFERRED = 'SET_UPFRONT_ID_DEFERRED';
function setUpfrontIdDeferred_setUpfrontIdDeferred(id, resolver, rejecter) {
    return {
        type: SET_UPFRONT_ID_DEFERRED,
        id: id,
        resolver: resolver,
        rejecter: rejecter,
    };
}
//# sourceMappingURL=setUpfrontIdDeferred.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/editor/phrases.js
var couldNotLoadImage = "Oops! We couldn't retrieve the image";
var menuDelete = 'Delete';
var menuEdit = 'Annotate';
//# sourceMappingURL=phrases.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/popup/config.js
var popup_config = __webpack_require__(942);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/removeFileFromRecents.js
var REMOVE_FILES_FROM_RECENTS = 'REMOVE_FILES_FROM_RECENTS';
var isRemoveFileFromRecentsAction = function (action) {
    return action.type === REMOVE_FILES_FROM_RECENTS;
};
var removeFileFromRecents_removeFileFromRecents = function (id, occurrenceKey, userFileId) {
    return {
        type: REMOVE_FILES_FROM_RECENTS,
        id: id,
        userFileId: userFileId,
        occurrenceKey: occurrenceKey,
    };
};
//# sourceMappingURL=removeFileFromRecents.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/upload/upload.js
























var createEditCardAction = function (handler, label) {
    return {
        label: label,
        handler: handler,
        icon: react["createElement"](annotate_default.a, { label: menuEdit, size: "medium" }),
    };
};
var createDeleteCardAction = function (handler) {
    return {
        label: menuDelete,
        handler: handler,
        icon: react["createElement"](trash_default.a, { label: menuDelete, size: "medium" }),
    };
};
var cardDimension = { width: 162, height: 108 };
var upload_StatelessUploadView = /** @class */ (function (_super) {
    tslib_es6["__extends"](StatelessUploadView, _super);
    function StatelessUploadView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasPopupBeenVisible: false,
            isWebGLWarningFlagVisible: false,
            shouldDismissWebGLWarningFlag: false,
            isLoadingNextPage: false,
        };
        _this.renderDeleteConfirmation = function () {
            var deletionCandidate = _this.state.deletionCandidate;
            var removeFileFromRecents = _this.props.removeFileFromRecents;
            var closeDialog = function () {
                _this.setState({ deletionCandidate: undefined });
            };
            if (!deletionCandidate) {
                return null;
            }
            var id = deletionCandidate.id, occurrenceKey = deletionCandidate.occurrenceKey, userFileId = deletionCandidate.userFileId;
            var actions = [
                {
                    text: 'Delete permanently',
                    onClick: function () {
                        removeFileFromRecents(id, occurrenceKey, userFileId);
                        closeDialog();
                    },
                },
                {
                    text: 'Cancel',
                    onClick: function () {
                        closeDialog();
                    },
                },
            ];
            return (react["createElement"](ModalTransition["b" /* default */], null,
                react["createElement"](ModalWrapper["a" /* default */], { width: "small", appearance: "danger", heading: "Delete forever?", actions: actions, onClose: closeDialog }, "This file is about to be permanently deleted. Once you delete, it's gone for good.")));
        };
        _this.onThresholdReachedListener = function () {
            var isLoadingNextPage = _this.state.isLoadingNextPage;
            if (isLoadingNextPage) {
                return;
            }
            _this.setState({ isLoadingNextPage: true }, function () { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
                var mediaClient;
                return tslib_es6["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, , 2, 3]);
                            mediaClient = this.props.mediaClient;
                            return [4 /*yield*/, mediaClient.collection.loadNextPage(popup_config["a" /* RECENTS_COLLECTION */])];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            this.setState({ isLoadingNextPage: false });
                            return [7 /*endfinally*/];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        };
        _this.renderLoadingView = function () {
            return (react["createElement"](SpinnerWrapper, null,
                react["createElement"](Spinner["a" /* default */], { size: "large" })));
        };
        _this.renderLoadingNextPageView = function () {
            var isLoadingNextPage = _this.state.isLoadingNextPage;
            // We want to always render LoadingNextPageWrapper regardless of the next page loading or not
            // to keep the same wrapper height, this prevents jumping when interacting with the infinite scroll
            return (react["createElement"](LoadingNextPageWrapper, null, isLoadingNextPage && react["createElement"](Spinner["a" /* default */], null)));
        };
        _this.renderRecentsView = function (cards) {
            var isWebGLWarningFlagVisible = _this.state.isWebGLWarningFlagVisible;
            return (react["createElement"]("div", null,
                react["createElement"](RecentUploadsTitle, null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].recent_uploads))),
                react["createElement"](CardsWrapper, null, cards),
                _this.renderLoadingNextPageView(),
                isWebGLWarningFlagVisible && _this.renderWebGLWarningFlag()));
        };
        _this.renderWebGLWarningFlag = function () {
            var formatMessage = _this.props.intl.formatMessage;
            return (react["createElement"](components_FlagGroup, { onDismissed: _this.onFlagDismissed },
                react["createElement"](components_Flag, { shouldDismiss: _this.state.shouldDismissWebGLWarningFlag, description: formatMessage(messages["a" /* messages */].webgl_warning_description), icon: react["createElement"](error_default.a, { label: "info" }), id: "webgl-warning-flag", title: formatMessage(messages["a" /* messages */].unable_to_annotate_image), actions: [
                        {
                            content: formatMessage(messages["a" /* messages */].learn_more),
                            onClick: _this.onLearnMoreClicked,
                        },
                    ] })));
        };
        _this.onFlagDismissed = function () {
            _this.setState({ isWebGLWarningFlagVisible: false });
        };
        _this.onLearnMoreClicked = function () {
            _this.setState({ shouldDismissWebGLWarningFlag: true });
            _this.onFlagDismissed();
            window.open('https://get.webgl.org/');
        };
        return _this;
    }
    StatelessUploadView.prototype.render = function () {
        var _a = this.props, isLoading = _a.isLoading, browserRef = _a.browserRef;
        var cards = this.renderCards();
        var isEmpty = !isLoading && cards.length === 0;
        var contentPart = null;
        if (isLoading) {
            contentPart = this.renderLoadingView();
        }
        else if (!isEmpty) {
            contentPart = this.renderRecentsView(cards);
        }
        var confirmationDialog = this.renderDeleteConfirmation();
        return (react["createElement"](infiniteScroll_InfiniteScroll, { height: "100%", onThresholdReached: this.onThresholdReachedListener },
            react["createElement"](upload_styled_Wrapper, null,
                react["createElement"](dropzone_Dropzone, { isEmpty: isEmpty, browserRef: browserRef }),
                contentPart,
                confirmationDialog)));
    };
    StatelessUploadView.prototype.onAnnotateActionClick = function (callback) {
        var _this = this;
        return function () {
            if (isWebGLAvailable()) {
                callback();
            }
            else {
                _this.showWebGLWarningFlag();
            }
        };
    };
    StatelessUploadView.prototype.renderCards = function () {
        var recentFilesCards = this.recentFilesCards();
        var uploadingFilesCards = this.uploadingFilesCards();
        return uploadingFilesCards
            .concat(recentFilesCards)
            .map(function (_a) {
            var key = _a.key, card = _a.el;
            return (react["createElement"](CardWrapper, { tabIndex: 0, className: "e2e-recent-upload-card", key: key }, card));
        });
    };
    StatelessUploadView.prototype.uploadingFilesCards = function () {
        var _this = this;
        var _a = this.props, uploads = _a.uploads, onFileClick = _a.onFileClick, mediaClient = _a.mediaClient;
        var itemsKeys = Object.keys(uploads);
        itemsKeys.sort(function (a, b) {
            return uploads[b].index - uploads[a].index;
        });
        var selectedUploadIds = this.props.selectedItems
            .filter(function (item) { return item.serviceName === 'upload'; })
            .map(function (item) { return item.id; });
        return itemsKeys.map(function (key) {
            var item = _this.props.uploads[key];
            var file = item.file;
            var mediaType = Object(getMediaTypeFromMimeType["a" /* getMediaTypeFromMimeType */])(file.metadata.mimeType);
            var fileMetadata = tslib_es6["__assign"]({}, file.metadata, { mimeType: mediaType });
            var id = fileMetadata.id, userOccurrenceKey = fileMetadata.userOccurrenceKey, userUpfrontId = fileMetadata.userUpfrontId, size = fileMetadata.size, name = fileMetadata.name, upfrontId = fileMetadata.upfrontId;
            var selected = selectedUploadIds.indexOf(id) > -1;
            var serviceFile = {
                id: id,
                mimeType: mediaType,
                name: name,
                size: size,
                upfrontId: upfrontId,
                occurrenceKey: fileMetadata.occurrenceKey,
                date: 0,
            };
            var onClick = function () { return onFileClick(serviceFile, 'upload'); };
            var actions = [
                createDeleteCardAction(function () { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
                    var userFileId, occurrenceKey;
                    return tslib_es6["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, userUpfrontId];
                            case 1:
                                userFileId = _a.sent();
                                return [4 /*yield*/, userOccurrenceKey];
                            case 2:
                                occurrenceKey = _a.sent();
                                this.setState({
                                    deletionCandidate: { id: id, occurrenceKey: occurrenceKey, userFileId: userFileId },
                                });
                                return [2 /*return*/];
                        }
                    });
                }); }),
            ]; // TODO [MS-1017]: allow file annotation for uploading files
            var identifier = {
                id: userUpfrontId,
                mediaItemType: 'file',
            };
            return {
                key: id,
                el: (react["createElement"](media_card["a" /* Card */], { mediaClientConfig: mediaClient.config, identifier: identifier, dimensions: cardDimension, selectable: true, selected: selected, onClick: onClick, actions: actions })),
            };
        });
    };
    StatelessUploadView.prototype.recentFilesCards = function () {
        var _this = this;
        var _a = this.props, mediaClient = _a.mediaClient, recents = _a.recents, recentsCollection = _a.recentsCollection, selectedItems = _a.selectedItems, onFileClick = _a.onFileClick, onEditRemoteImage = _a.onEditRemoteImage, setUpfrontIdDeferred = _a.setUpfrontIdDeferred, formatMessage = _a.intl.formatMessage;
        var items = recents.items;
        var selectedRecentFiles = selectedItems
            .filter(function (item) { return item.serviceName === 'recent_files'; })
            .map(function (item) { return item.id; });
        var onClick = function (_a) {
            var mediaItemDetails = _a.mediaItemDetails;
            var fileDetails = mediaItemDetails;
            if (fileDetails) {
                var id_1 = fileDetails.id;
                var upfrontId = new Promise(function (resolve, reject) {
                    setUpfrontIdDeferred(id_1, resolve, reject);
                });
                onFileClick({
                    id: id_1,
                    date: 0,
                    name: fileDetails.name || '',
                    mimeType: fileDetails.mimeType || '',
                    size: fileDetails.size || 0,
                    upfrontId: upfrontId,
                }, 'recent_files');
            }
        };
        var editHandler = function (mediaItem) {
            if (mediaItem && mediaItem.type === 'file') {
                var _a = mediaItem.details, id = _a.id, name_1 = _a.name;
                if (isWebGLAvailable()) {
                    onEditRemoteImage({
                        id: id,
                        name: name_1 || '',
                    }, recentsCollection);
                }
                else {
                    // WebGL not available - show warning flag
                    _this.showWebGLWarningFlag();
                }
            }
        };
        return items.map(function (item) {
            var id = item.id, occurrenceKey = item.occurrenceKey, details = item.details;
            var selected = selectedRecentFiles.indexOf(id) > -1;
            var actions = [
                createDeleteCardAction(function () {
                    _this.setState({ deletionCandidate: { id: id, occurrenceKey: occurrenceKey } });
                }),
            ];
            if (details.mediaType === 'image') {
                actions.unshift(createEditCardAction(editHandler, formatMessage(messages["a" /* messages */].annotate)));
            }
            return {
                key: occurrenceKey + "-" + id,
                el: (react["createElement"](media_card["a" /* Card */], { mediaClientConfig: mediaClient.config, identifier: {
                        id: id,
                        mediaItemType: 'file',
                        collectionName: recentsCollection,
                    }, dimensions: cardDimension, selectable: true, selected: selected, onClick: onClick, actions: actions })),
            };
        });
    };
    StatelessUploadView.prototype.showWebGLWarningFlag = function () {
        this.setState({ isWebGLWarningFlagVisible: true });
    };
    return StatelessUploadView;
}(react["Component"]));

var upload_mapStateToProps = function (state) { return ({
    isLoading: state.view.isLoading,
    recents: state.recents,
    uploads: state.uploads,
    selectedItems: state.selectedItems,
}); };
var upload_mapDispatchToProps = function (dispatch) { return ({
    onFileClick: function (serviceFile, serviceName) {
        return dispatch(fileClick(serviceFile, serviceName));
    },
    onEditorShowImage: function (file, dataUri) {
        return dispatch(editorShowImage(dataUri, file));
    },
    onEditRemoteImage: function (file, collectionName) {
        return dispatch(editRemoteImage(file, collectionName));
    },
    setUpfrontIdDeferred: function (id, resolver, rejecter) {
        return dispatch(setUpfrontIdDeferred_setUpfrontIdDeferred(id, resolver, rejecter));
    },
    removeFileFromRecents: function (id, occurrenceKey, userFileId) {
        return dispatch(removeFileFromRecents_removeFileFromRecents(id, occurrenceKey, userFileId));
    },
}); };
/* harmony default export */ var upload_upload = (connect_connect(upload_mapStateToProps, upload_mapDispatchToProps)(Object(index_es["e" /* injectIntl */])(upload_StatelessUploadView)));
//# sourceMappingURL=upload.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/field-text/index.js + 1 modules
var field_text = __webpack_require__(843);

// CONCATENATED MODULE: ./node_modules/bricks.js/dist/bricks.module.js
var bricks_module_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var knot = function knot() {
  var extended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var events = Object.create(null);

  function on(name, handler) {
    events[name] = events[name] || [];
    events[name].push(handler);
    return this;
  }

  function once(name, handler) {
    handler._once = true;
    on(name, handler);
    return this;
  }

  function off(name) {
    var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    handler ? events[name].splice(events[name].indexOf(handler), 1) : delete events[name];

    return this;
  }

  function emit(name) {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    // cache the events, to avoid consequences of mutation
    var cache = events[name] && events[name].slice();

    // only fire handlers if they exist
    cache && cache.forEach(function (handler) {
      // remove handlers added with 'once'
      handler._once && off(name, handler);

      // set 'this' context, pass args to handlers
      handler.apply(_this, args);
    });

    return this;
  }

  return bricks_module_extends({}, extended, {

    on: on,
    once: once,
    off: off,
    emit: emit
  });
};

var bricks = function bricks() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // privates

  var persist = void 0; // packing new elements, or all elements?
  var ticking = void 0; // for debounced resize

  var sizeIndex = void 0;
  var sizeDetail = void 0;

  var columnTarget = void 0;
  var columnHeights = void 0;

  var nodeTop = void 0;
  var nodeLeft = void 0;
  var nodeWidth = void 0;
  var nodeHeight = void 0;

  var nodes = void 0;
  var nodesWidths = void 0;
  var nodesHeights = void 0;

  // resolve options

  var packed = options.packed.indexOf('data-') === 0 ? options.packed : 'data-' + options.packed;
  var sizes = options.sizes.slice().reverse();
  var position = options.position !== false;

  var container = options.container.nodeType ? options.container : document.querySelector(options.container);

  var selectors = {
    all: function all() {
      return toArray(container.children);
    },
    new: function _new() {
      return toArray(container.children).filter(function (node) {
        return !node.hasAttribute('' + packed);
      });
    }
  };

  // series

  var setup = [setSizeIndex, setSizeDetail, setColumns];

  var run = [setNodes, setNodesDimensions, setNodesStyles, setContainerStyles];

  // instance

  var instance = knot({
    pack: pack,
    update: update,
    resize: resize
  });

  return instance;

  // general helpers

  function runSeries(functions) {
    functions.forEach(function (func) {
      return func();
    });
  }

  // array helpers

  function toArray(input) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    return Array.prototype.slice.call(input);
  }

  function fillArray(length) {
    return Array.apply(null, Array(length)).map(function () {
      return 0;
    });
  }

  // size helpers

  function getSizeIndex() {
    // find index of widest matching media query
    return sizes.map(function (size) {
      return size.mq && window.matchMedia('(min-width: ' + size.mq + ')').matches;
    }).indexOf(true);
  }

  function setSizeIndex() {
    sizeIndex = getSizeIndex();
  }

  function setSizeDetail() {
    // if no media queries matched, use the base case
    sizeDetail = sizeIndex === -1 ? sizes[sizes.length - 1] : sizes[sizeIndex];
  }

  // column helpers

  function setColumns() {
    columnHeights = fillArray(sizeDetail.columns);
  }

  // node helpers

  function setNodes() {
    nodes = selectors[persist ? 'new' : 'all']();
  }

  function setNodesDimensions() {
    // exit if empty container
    if (nodes.length === 0) {
      return;
    }

    nodesWidths = nodes.map(function (element) {
      return element.clientWidth;
    });
    nodesHeights = nodes.map(function (element) {
      return element.clientHeight;
    });
  }

  function setNodesStyles() {
    nodes.forEach(function (element, index) {
      columnTarget = columnHeights.indexOf(Math.min.apply(Math, columnHeights));

      element.style.position = 'absolute';

      nodeTop = columnHeights[columnTarget] + 'px';
      nodeLeft = columnTarget * nodesWidths[index] + columnTarget * sizeDetail.gutter + 'px';

      // support positioned elements (default) or transformed elements
      if (position) {
        element.style.top = nodeTop;
        element.style.left = nodeLeft;
      } else {
        element.style.transform = 'translate3d(' + nodeLeft + ', ' + nodeTop + ', 0)';
      }

      element.setAttribute(packed, '');

      // ignore nodes with no width and/or height
      nodeWidth = nodesWidths[index];
      nodeHeight = nodesHeights[index];

      if (nodeWidth && nodeHeight) {
        columnHeights[columnTarget] += nodeHeight + sizeDetail.gutter;
      }
    });
  }

  // container helpers

  function setContainerStyles() {
    container.style.position = 'relative';
    container.style.width = sizeDetail.columns * nodeWidth + (sizeDetail.columns - 1) * sizeDetail.gutter + 'px';
    container.style.height = Math.max.apply(Math, columnHeights) - sizeDetail.gutter + 'px';
  }

  // resize helpers

  function resizeFrame() {
    if (!ticking) {
      window.requestAnimationFrame(resizeHandler);
      ticking = true;
    }
  }

  function resizeHandler() {
    if (sizeIndex !== getSizeIndex()) {
      pack();
      instance.emit('resize', sizeDetail);
    }

    ticking = false;
  }

  // API

  function pack() {
    persist = false;
    runSeries(setup.concat(run));

    return instance.emit('pack');
  }

  function update() {
    persist = true;
    runSeries(run);

    return instance.emit('update');
  }

  function resize() {
    var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var action = flag ? 'addEventListener' : 'removeEventListener';

    window[action]('resize', resizeFrame);

    return instance;
  }
};

/* harmony default export */ var bricks_module = (bricks);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/giphy/bricksGrid.js



// We need to import Bricks in both ways because the way they create the dist doesn't play well with TS


var bricksGrid_BricksLayout = /** @class */ (function (_super) {
    tslib_es6["__extends"](BricksLayout, _super);
    function BricksLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BricksLayout.prototype.componentDidMount = function () {
        var _a = this.props, id = _a.id, _b = _a.packed, packed = _b === void 0 ? 'data-packed' : _b, _c = _a.sizes, sizes = _c === void 0 ? [{ columns: 3, gutter: 10 }] : _c;
        // We try to use the TS import, otherwise we use the "default" export
        var BricksConstructor = (typeof bricks_module_namespaceObject === 'function'
            ? bricks_module_namespaceObject
            : bricks_module);
        var instance = BricksConstructor({
            container: "#" + id,
            packed: packed,
            sizes: sizes,
        });
        instance.resize(true);
        this.setState({ instance: instance });
    };
    BricksLayout.prototype.componentDidUpdate = function (_a) {
        var prevChildren = _a.children;
        var children = this.props.children;
        var instance = this.state.instance;
        if (prevChildren.length === 0 && children.length === 0) {
            return;
        }
        return instance.pack();
    };
    BricksLayout.prototype.componentWillUnmount = function () {
        this.state.instance.resize(false);
    };
    BricksLayout.prototype.render = function () {
        var _a = this.props, id = _a.id, children = _a.children;
        return react["createElement"]("div", { id: id }, children);
    };
    BricksLayout.defaultProps = {
        packed: 'data-packed',
        sizes: [{ columns: 3, gutter: 10 }],
    };
    return BricksLayout;
}(react["Component"]));

//# sourceMappingURL=bricksGrid.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/gridCellScaler.js
/* harmony default export */ var gridCellScaler = (function (_a) {
    var width = _a.width, height = _a.height, containerWidth = _a.containerWidth, gapSize = _a.gapSize, numberOfColumns = _a.numberOfColumns;
    var desiredWith = Math.floor((containerWidth - gapSize * (numberOfColumns - 1)) / numberOfColumns);
    return {
        width: desiredWith,
        height: Math.round((desiredWith / width) * height),
    };
});
//# sourceMappingURL=gridCellScaler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/giphy/styles.js



var Container = styled_components_browser_esm["default"].div(styles_templateObject_1 || (styles_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  height: 100%;\n  overflow-y: scroll;\n\n  padding: 0 28px;\n"], ["\n  height: 100%;\n  overflow-y: scroll;\n\n  padding: 0 28px;\n"])));
var GridCell = styled_components_browser_esm["default"].div(styles_templateObject_2 || (styles_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  ", " margin-top: 5px;\n"], ["\n  ", " margin-top: 5px;\n"])), function (_a) {
    var width = _a.width;
    return "width: " + width + "px;";
});
var styles_Title = styled_components_browser_esm["default"].div(styles_templateObject_3 || (styles_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  color: #091e42;\n  font-size: 20px;\n  margin-top: 15px;\n"], ["\n  color: #091e42;\n  font-size: 20px;\n  margin-top: 15px;\n"])));
var ButtonContainer = styled_components_browser_esm["default"].div(styles_templateObject_4 || (styles_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n"], ["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n"])));
var WarningContainer = styled_components_browser_esm["default"].div(styles_templateObject_5 || (styles_templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n\n  /* Required to allow end users to select text in the error message */\n  cursor: auto;\n  user-select: text;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n\n  /* Required to allow end users to select text in the error message */\n  cursor: auto;\n  user-select: text;\n"])));
var WarningIconWrapper = styled_components_browser_esm["default"].div(styles_templateObject_6 || (styles_templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  width: 92px;\n"], ["\n  width: 92px;\n"])));
var WarningImage = styled_components_browser_esm["default"].img(styles_templateObject_7 || (styles_templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  width: 200px;\n"], ["\n  width: 200px;\n"])));
var WarningHeading = styled_components_browser_esm["default"].p(styles_templateObject_8 || (styles_templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n"], ["\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n"])));
var WarningSuggestion = styled_components_browser_esm["default"].p(styles_templateObject_9 || (styles_templateObject_9 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  font-size: 14px;\n  margin-top: 5px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n  margin-top: 5px;\n"])), theme["colors"].N300);
var styles_templateObject_1, styles_templateObject_2, styles_templateObject_3, styles_templateObject_4, styles_templateObject_5, styles_templateObject_6, styles_templateObject_7, styles_templateObject_8, styles_templateObject_9;
//# sourceMappingURL=styles.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/giphy/giphyView.js


















var NUMBER_OF_COLUMNS = 4;
var GAP_SIZE = 5;
var CONTAINER_WIDTH = 677;
var giphyView_GiphyView = /** @class */ (function (_super) {
    tslib_es6["__extends"](GiphyView, _super);
    function GiphyView(props) {
        var _this = _super.call(this, props) || this;
        _this.getContent = function () {
            var _a = _this.props, hasError = _a.hasError, isLoading = _a.isLoading, cardModels = _a.cardModels;
            if (hasError) {
                return _this.renderError();
            }
            if (!isLoading && cardModels.length === 0) {
                return _this.renderEmptyState();
            }
            return _this.renderSearchResults();
        };
        _this.renderError = function () {
            return (react["createElement"](WarningContainer, null,
                react["createElement"](WarningIconWrapper, null, errorIcon),
                react["createElement"](WarningHeading, null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].cant_retrieve_gifs))),
                react["createElement"](WarningSuggestion, null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].check_your_network))),
                react["createElement"](Button["a" /* default */], { onClick: _this.handleRetryButtonClick },
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].try_again)))));
        };
        _this.renderEmptyState = function () {
            var query = _this.state.query;
            // The GIF used in this error state is too large to store as a data URI (> 3.2 MB)
            return (react["createElement"](WarningContainer, null,
                react["createElement"](WarningImage, { src: "https://media1.giphy.com/media/10YK5Hh53nC3dK/200w.gif" }),
                react["createElement"](WarningHeading, null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].no_gifs_found))),
                react["createElement"](WarningSuggestion, null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].no_gifs_found_suggestion, { values: { query: query } })))));
        };
        _this.renderSearchResults = function () {
            var _a = _this.props, isLoading = _a.isLoading, cardModels = _a.cardModels, totalResultCount = _a.totalResultCount;
            var isThereAreMoreResults = totalResultCount === undefined ||
                cardModels.length < totalResultCount - 1;
            var shouldShowLoadMoreButton = isLoading || isThereAreMoreResults;
            var loadMoreButton = shouldShowLoadMoreButton && _this.renderLoadMoreButton();
            return (react["createElement"]("div", null,
                _this.renderMasonaryLayout(_this.props.cardModels),
                loadMoreButton));
        };
        _this.renderMasonaryLayout = function (cardModels) {
            if (cardModels.length === 0) {
                return null;
            }
            var cards = cardModels.map(function (cardModel, i) {
                var dataURI = cardModel.dataURI, metadata = cardModel.metadata, actualDimensions = cardModel.dimensions;
                var selectedItems = _this.props.selectedItems;
                var selected = selectedItems.some(function (item) { return item.id === metadata.id && item.serviceName === 'giphy'; });
                var dimensions = gridCellScaler(tslib_es6["__assign"]({}, actualDimensions, { gapSize: GAP_SIZE, containerWidth: CONTAINER_WIDTH, numberOfColumns: NUMBER_OF_COLUMNS }));
                var identifier = {
                    mediaItemType: 'external-image',
                    dataURI: dataURI,
                    name: metadata.name,
                };
                return (react["createElement"](GridCell, { key: i + "-metadata.id", width: dimensions.width },
                    react["createElement"](media_card["a" /* Card */], { identifier: identifier, context: {}, dimensions: dimensions, selectable: true, selected: selected, onClick: _this.createClickHandler(cardModel) })));
            });
            return (react["createElement"](bricksGrid_BricksLayout, { id: "mediapicker-gif-layout", sizes: [{ columns: NUMBER_OF_COLUMNS, gutter: GAP_SIZE }] }, cards));
        };
        _this.renderLoadMoreButton = function () {
            var isLoading = _this.props.isLoading;
            var iconAfter = isLoading ? react["createElement"](Spinner["a" /* default */], null) : undefined;
            return (react["createElement"](ButtonContainer, null,
                react["createElement"](Button["a" /* default */], { onClick: _this.handleLoadMoreButtonClick, isDisabled: isLoading, iconAfter: iconAfter },
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].load_more_gifs)))));
        };
        _this.createSearchChangeHandler = function () {
            var onSearchQueryChange = _this.props.onSearchQueryChange;
            var debouncedOnSearchQueryChange = lodash_debounce_default()(onSearchQueryChange, 1000);
            return function (e) {
                var query = e.currentTarget.value;
                _this.setState({
                    query: query,
                });
                debouncedOnSearchQueryChange(query);
            };
        };
        _this.createClickHandler = function (cardModel) { return function () {
            var _a = _this.props, onCardClick = _a.onCardClick, setUpfrontIdDeferred = _a.setUpfrontIdDeferred;
            var upfrontId = new Promise(function (resolve, reject) {
                var id = cardModel.metadata.id;
                setUpfrontIdDeferred(id, resolve, reject);
            });
            onCardClick(cardModel, upfrontId);
        }; };
        _this.handleLoadMoreButtonClick = function () {
            var onLoadMoreButtonClick = _this.props.onLoadMoreButtonClick;
            onLoadMoreButtonClick(_this.state.query, true);
        };
        _this.handleRetryButtonClick = function () {
            var onSearchQueryChange = _this.props.onSearchQueryChange;
            onSearchQueryChange(_this.state.query);
        };
        _this.state = {
            query: '',
        };
        _this.searchChangeHandler = _this.createSearchChangeHandler();
        return _this;
    }
    GiphyView.prototype.componentDidUpdate = function (_a) {
        var oldOnSearchQueryChange = _a.onSearchQueryChange;
        var newOnSearchQueryChange = this.props.onSearchQueryChange;
        if (oldOnSearchQueryChange !== newOnSearchQueryChange) {
            this.createSearchChangeHandler();
        }
    };
    GiphyView.prototype.render = function () {
        var formatMessage = this.props.intl.formatMessage;
        var query = this.state.query;
        return (react["createElement"](Container, { id: "mediapicker-giphy-container" },
            react["createElement"](styles_Title, null, "GIPHY"),
            react["createElement"](field_text["a" /* default */], { label: "", placeholder: formatMessage(messages["a" /* messages */].search_all_gifs), onChange: this.searchChangeHandler, shouldFitContainer: true, value: query }),
            this.getContent()));
    };
    return GiphyView;
}(react["Component"]));

/* harmony default export */ var giphyView = (connect_connect(function (state) { return ({
    hasError: state.view.hasError,
    isLoading: state.view.isLoading,
    cardModels: state.giphy.imageCardModels,
    totalResultCount: state.giphy.totalResultCount,
    selectedItems: state.selectedItems,
}); }, function (dispatch) { return ({
    onSearchQueryChange: function (query) { return dispatch(searchGiphy(query, false)); },
    onLoadMoreButtonClick: function (query, shouldAppendResults) {
        return dispatch(searchGiphy(query, shouldAppendResults));
    },
    onCardClick: function (cardModel, upfrontId) {
        var _a = cardModel.metadata, id = _a.id, name = _a.name, size = _a.size;
        dispatch(fileClick({
            mimeType: 'image/gif',
            id: id || '',
            name: name || '',
            size: size || 0,
            date: Date.now(),
            upfrontId: upfrontId,
        }, 'giphy'));
    },
    setUpfrontIdDeferred: function (id, resolver, rejecter) {
        return dispatch(setUpfrontIdDeferred_setUpfrontIdDeferred(id, resolver, rejecter));
    },
}); })(Object(index_es["e" /* injectIntl */])(giphyView_GiphyView)));
//# sourceMappingURL=giphyView.js.map
// EXTERNAL MODULE: ./node_modules/dateformat/lib/dateformat.js
var dateformat = __webpack_require__(1059);
var dateformat_default = /*#__PURE__*/__webpack_require__.n(dateformat);

// EXTERNAL MODULE: ./node_modules/filesize/lib/filesize.js
var filesize = __webpack_require__(1060);
var filesize_default = /*#__PURE__*/__webpack_require__.n(filesize);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/check-circle.js
var check_circle = __webpack_require__(1068);
var check_circle_default = /*#__PURE__*/__webpack_require__.n(check_circle);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/domain/local-upload.js
function hasLocalUploadStartedProcessing(localUpload) {
    return localUpload.events.some(function (event) { return event.name === 'upload-processing'; });
}
//# sourceMappingURL=local-upload.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/domain/index.js

var isRemoteCloudAccount = function (serviceName) {
    return serviceName === 'google' || serviceName === 'dropbox';
};
var isServiceFolder = function (item) {
    return item.mimeType === 'application/vnd.atlassian.mediapicker.folder';
};
var isServiceFile = function (item) {
    return item.mimeType !== 'application/vnd.atlassian.mediapicker.folder';
};
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/dropdown-menu/components/item/DropdownItem.js + 5 modules
var DropdownItem = __webpack_require__(929);

// EXTERNAL MODULE: ./node_modules/@atlaskit/dropdown-menu/components/group/DropdownItemGroup.js
var DropdownItemGroup = __webpack_require__(911);

// EXTERNAL MODULE: ./node_modules/@atlaskit/dropdown-menu/components/DropdownMenu.js + 13 modules
var DropdownMenu = __webpack_require__(928);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/refresh.js
var refresh = __webpack_require__(1061);
var refresh_default = /*#__PURE__*/__webpack_require__.n(refresh);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/settings.js
var settings = __webpack_require__(1062);
var settings_default = /*#__PURE__*/__webpack_require__.n(settings);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/navigation/styled.js





var FolderViewerNavigation = styled_components_browser_esm["default"].div(navigation_styled_templateObject_1 || (navigation_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  justify-content: space-between;\n\n  /* Ensure header has height */\n  min-height: 60px;\n  padding: 15px 13px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  background-color: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n\n  /* Ensure header has height */\n  min-height: 60px;\n  padding: 15px 13px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  background-color: ", ";\n"])), theme["colors"].N0);
FolderViewerNavigation.displayName = 'FolderViewerNavigation';
var ControlsWrapper = styled_components_browser_esm["default"].div(navigation_styled_templateObject_2 || (navigation_styled_templateObject_2 = tslib_es6["__makeTemplateObject"]([""], [""])));
var Controls = styled_components_browser_esm["default"].div(navigation_styled_templateObject_3 || (navigation_styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  height: 30px;\n  display: flex;\n"], ["\n  height: 30px;\n  display: flex;\n"])));
var ControlButton = function (props) { return (react["createElement"](Button["a" /* default */], tslib_es6["__assign"]({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_es6["__rest"](_a, ["buttonStyles"]);
        return tslib_es6["__assign"]({ buttonStyles: tslib_es6["__assign"]({}, buttonStyles, { marginRight: '5px' }) }, rest);
    } }))); };
var BreadCrumbs = styled_components_browser_esm["default"].div(navigation_styled_templateObject_4 || (navigation_styled_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var BreadCrumbLinkLabel = styled_components_browser_esm["default"].span(navigation_styled_templateObject_5 || (navigation_styled_templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  &:hover {\n    text-decoration: ", ";\n  }\n"], ["\n  &:hover {\n    text-decoration: ",
    ";\n  }\n"])), function (props) {
    return props.isLast ? 'none' : 'underline';
});
var BreadCrumbLinkSeparator = styled_components_browser_esm["default"].span(navigation_styled_templateObject_6 || (navigation_styled_templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  display: ", ";\n  margin: 0 4px;\n  text-decoration: none;\n"], ["\n  color: ", ";\n  display: ",
    ";\n  margin: 0 4px;\n  text-decoration: none;\n"])), theme["colors"].N500, function (props) {
    return props.isLast ? 'none' : 'inline';
});
var BreadCrumbLink = styled_components_browser_esm["default"].span(navigation_styled_templateObject_7 || (navigation_styled_templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  cursor: ", ";\n  font-size: ", ";\n"], ["\n  color: ",
    ";\n  cursor: ",
    ";\n  font-size: ",
    ";\n"])), function (props) {
    return props.isLast ? theme["colors"].N900 : theme["colors"].N500;
}, function (props) {
    return props.isLast ? 'default' : 'pointer';
}, function (props) {
    return props.isLast ? '20px' : '14px';
});
var AccountItemButton = function (props) { return react["createElement"](Button["a" /* default */], tslib_es6["__assign"]({}, props)); };
// Dropdown is NOT intentionally extended by this component to allow HACK style below to work
var AccountDropdownWrapper = styled_components_browser_esm["default"].div(navigation_styled_templateObject_8 || (navigation_styled_templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  /* TODO: remove this when the ak-dropdown-menu package supports custom item types */\n  span[role='presentation'] > span > span:first-child {\n    display: none;\n  }\n"], ["\n  /* TODO: remove this when the ak-dropdown-menu package supports custom item types */\n  span[role='presentation'] > span > span:first-child {\n    display: none;\n  }\n"])));
var navigation_styled_templateObject_1, navigation_styled_templateObject_2, navigation_styled_templateObject_3, navigation_styled_templateObject_4, navigation_styled_templateObject_5, navigation_styled_templateObject_6, navigation_styled_templateObject_7, navigation_styled_templateObject_8;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/navigation/navigation.js













var SERVICENAME = {
    dropbox: 'Dropbox',
    google: 'Google Drive',
};
var navigation_Navigation = /** @class */ (function (_super) {
    tslib_es6["__extends"](Navigation, _super);
    function Navigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dropdownOpen: false,
            availableAccounts: [],
        };
        _this.onRefreshButtonClick = function () {
            var _a = _this.props, service = _a.service, path = _a.path, onChangePath = _a.onChangePath;
            onChangePath(service.name, service.accountId, path);
        };
        _this.onChangeAccountHandler = function (type, id) { return function () {
            var onChangeAccount = _this.props.onChangeAccount;
            onChangeAccount(type, id);
        }; };
        _this.onUnlinkAccountHandler = function (name, accountId) { return function () {
            var onUnlinkAccount = _this.props.onUnlinkAccount;
            onUnlinkAccount(name, accountId);
        }; };
        _this.onStartAuthHandler = function (name) { return function () {
            var onStartAuth = _this.props.onStartAuth;
            onStartAuth(name);
        }; };
        _this.handleOpenChange = function (attrs) {
            _this.setState({ dropdownOpen: attrs.isOpen });
        };
        return _this;
    }
    Navigation.prototype.componentDidMount = function () {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var _a, accounts, service, availableAccounts;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, accounts = _a.accounts, service = _a.service;
                        return [4 /*yield*/, accounts];
                    case 1:
                        availableAccounts = (_b.sent()).filter(function (account) { return account.type === service.name; });
                        this.setState({
                            availableAccounts: availableAccounts,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Navigation.prototype.componentDidUpdate = function (prevProps) {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var _a, accounts, service, availableAccounts;
            return tslib_es6["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, accounts = _a.accounts, service = _a.service;
                        if (!(prevProps.service !== service)) return [3 /*break*/, 2];
                        return [4 /*yield*/, accounts];
                    case 1:
                        availableAccounts = (_b.sent()).filter(function (account) { return account.type === service.name; });
                        this.setState({
                            availableAccounts: availableAccounts,
                        });
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Navigation.prototype.render = function () {
        var _a = this.props, service = _a.service, path = _a.path;
        var breadcrumbs = this.generateBreadcrumbs(service, path);
        var accountsDropdown = this.getAccountsDropdown();
        return (react["createElement"](FolderViewerNavigation, null,
            breadcrumbs,
            react["createElement"](ControlsWrapper, null,
                react["createElement"](Controls, null,
                    react["createElement"](ControlButton, { onClick: this.onRefreshButtonClick, iconBefore: react["createElement"](refresh_default.a, { label: "refresh" }) }),
                    accountsDropdown))));
    };
    Navigation.prototype.getAccountButton = function () {
        var dropdownOpen = this.state.dropdownOpen;
        return (react["createElement"](AccountItemButton, { isSelected: dropdownOpen, iconBefore: react["createElement"](settings_default.a, { label: "account settings" }) }));
    };
    Navigation.prototype.getAccountsDropdownItems = function () {
        var _this = this;
        var _a = this.props, service = _a.service, formatMessage = _a.intl.formatMessage;
        var availableAccounts = this.state.availableAccounts;
        var dropdownAccountItems = availableAccounts.map(function (_a) {
            var id = _a.id, displayName = _a.displayName, type = _a.type;
            return (react["createElement"](DropdownItem["a" /* default */], { key: id, onClick: _this.onChangeAccountHandler(type, id) }, id === service.accountId ? react["createElement"]("b", null, displayName) : displayName));
        });
        var dropdownActionItems = [
            react["createElement"](DropdownItem["a" /* default */], { key: "add", onClick: this.onStartAuthHandler(service.name) },
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].add_account))),
            react["createElement"](DropdownItem["a" /* default */], { key: "unlink", onClick: this.onUnlinkAccountHandler(service.name, service.accountId) },
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].unlink_account))),
        ];
        return [
            react["createElement"](DropdownItemGroup["a" /* default */], { key: "accounts", title: formatMessage(messages["a" /* messages */].accounts) }, dropdownAccountItems),
            react["createElement"](DropdownItemGroup["a" /* default */], { key: "actions", title: formatMessage(messages["a" /* messages */].actions) }, dropdownActionItems),
        ];
    };
    Navigation.prototype.getAccountsDropdown = function () {
        var items = this.getAccountsDropdownItems();
        return (react["createElement"](AccountDropdownWrapper, null,
            react["createElement"](DropdownMenu["a" /* default */], { onOpenChange: this.handleOpenChange, trigger: this.getAccountButton(), position: "bottom right" }, items)));
    };
    Navigation.prototype.generateBreadcrumbs = function (service, path) {
        var _this = this;
        var serviceName = SERVICENAME[service.name] || service.name;
        var fullPath = [{ id: '', name: serviceName }].concat(path);
        var breadcrumbs = fullPath
            .slice(-2)
            .map(function (folderReference) {
            var index = fullPath.indexOf(folderReference);
            return fullPath.slice(0, index + 1);
        })
            .map(function (path, index, allPaths) {
            var isLast = index === allPaths.length - 1;
            return _this.renderBreadcrumb(service, path, isLast);
        });
        return react["createElement"](BreadCrumbs, null, breadcrumbs);
    };
    Navigation.prototype.renderBreadcrumb = function (service, path, isLast) {
        var onChangePath = this.props.onChangePath;
        if (path.length === 0) {
            return null;
        }
        var folder = path[path.length - 1];
        var onClick = function () {
            return onChangePath(service.name, service.accountId, path.slice(1));
        };
        return (react["createElement"](BreadCrumbLink, { key: folder.id, onClick: onClick, isLast: isLast },
            react["createElement"](BreadCrumbLinkLabel, { title: folder.name, isLast: isLast }, folder.name),
            react["createElement"](BreadCrumbLinkSeparator, { isLast: isLast }, "/")));
    };
    return Navigation;
}(react["Component"]));

/* harmony default export */ var navigation = (connect_connect(function (_a) {
    var accounts = _a.accounts, view = _a.view;
    return ({
        accounts: accounts,
        path: view.path,
        service: view.service,
    });
}, function (dispatch) { return ({
    onChangeAccount: function (serviceName, accountId) {
        return dispatch(changeAccount(serviceName, accountId));
    },
    onChangePath: function (serviceName, accountId, path) {
        return dispatch(changeCloudAccountFolder(serviceName, accountId, tslib_es6["__spread"](path)));
    },
    onStartAuth: function (serviceName) { return dispatch(startAuth(serviceName)); },
    onUnlinkAccount: function (serviceName, accountId) {
        return dispatch(requestUnlinkCloudAccount({
            id: accountId,
            name: serviceName,
        }));
    },
}); })(Object(index_es["e" /* injectIntl */])(navigation_Navigation)));
//# sourceMappingURL=navigation.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/browser/folderView/styled.js



var FolderViewerWrapper = styled_components_browser_esm["default"].div(folderView_styled_templateObject_1 || (folderView_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n"])));
var styled_SpinnerWrapper = styled_components_browser_esm["default"].div(folderView_styled_templateObject_2 || (folderView_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* Take up all of the available space between header and footer */\n  flex: 1;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* Take up all of the available space between header and footer */\n  flex: 1;\n"])));
var FolderViewerContent = styled_components_browser_esm["default"].ul(folderView_styled_templateObject_3 || (folderView_styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  /* Take up all of the available space between header and footer */\n  flex: 1;\n\n  /* Ensure navigation header is pinned to top */\n  overflow: auto;\n\n  list-style: none;\n\n  /* Override default list styles */\n  margin-top: 0;\n  padding-left: 0;\n"], ["\n  /* Take up all of the available space between header and footer */\n  flex: 1;\n\n  /* Ensure navigation header is pinned to top */\n  overflow: auto;\n\n  list-style: none;\n\n  /* Override default list styles */\n  margin-top: 0;\n  padding-left: 0;\n"])));
var FolderViewerRow = styled_components_browser_esm["default"].li(folderView_styled_templateObject_4 || (folderView_styled_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n\n  width: 100%;\n  height: 48px;\n\n  margin-top: 0;\n  padding: 8px 28px 8px 28px;\n\n  cursor: pointer;\n\n  ", " &:hover {\n    ", ";\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n\n  width: 100%;\n  height: 48px;\n\n  margin-top: 0;\n  padding: 8px 28px 8px 28px;\n\n  cursor: pointer;\n\n  ",
    " &:hover {\n    ",
    ";\n  }\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return isSelected
        ? "background-color: " + theme["colors"].B200 + ";"
        : 'background-color: white;';
}, function (_a) {
    var isSelected = _a.isSelected;
    return isSelected
        ? "background-color: " + theme["colors"].B200 + ";"
        : "background-color: " + theme["colors"].N30 + ";";
});
FolderViewerRow.displayName = 'FolderViewerRow';
var FileMetadataGroup = styled_components_browser_esm["default"].div(folderView_styled_templateObject_5 || (folderView_styled_templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var FileIcon = styled_components_browser_esm["default"].div(folderView_styled_templateObject_6 || (folderView_styled_templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  /* vertically center icon */\n  display: flex;\n  align-items: center;\n\n  width: 32px;\n  height: 32px;\n"], ["\n  /* vertically center icon */\n  display: flex;\n  align-items: center;\n\n  width: 32px;\n  height: 32px;\n"])));
var FileName = styled_components_browser_esm["default"].div(folderView_styled_templateObject_7 || (folderView_styled_templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  padding-left: 17px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ", ";\n"], ["\n  padding-left: 17px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ",
    ";\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return isSelected ? 'color: white;' : "color: " + theme["colors"].N900;
});
var FileCreateDate = styled_components_browser_esm["default"].div(folderView_styled_templateObject_8 || (folderView_styled_templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  text-align: right;\n  padding: 0 10px 0 10px;\n"], ["\n  color: ", ";\n  text-align: right;\n  padding: 0 10px 0 10px;\n"])), theme["colors"].N90);
var FileSize = styled_components_browser_esm["default"].div(styled_templateObject_9 || (styled_templateObject_9 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  min-width: 70px;\n  text-align: right;\n  padding: 0 0 0 10px;\n"], ["\n  color: ", ";\n  min-width: 70px;\n  text-align: right;\n  padding: 0 0 0 10px;\n"])), theme["colors"].N90);
var SelectedFileIconWrapper = styled_components_browser_esm["default"].div(styled_templateObject_10 || (styled_templateObject_10 = tslib_es6["__makeTemplateObject"](["\n  color: ", " !important;\n  right: 23px;\n  top: 12px;\n"], ["\n  color: ", " !important;\n  right: 23px;\n  top: 12px;\n"])), theme["colors"].B400);
var MoreBtnWrapper = styled_components_browser_esm["default"].div(styled_templateObject_11 || (styled_templateObject_11 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  justify-content: center;\n\n  margin-top: 10px;\n"], ["\n  display: flex;\n  justify-content: center;\n\n  margin-top: 10px;\n"])));
var folderView_styled_templateObject_1, folderView_styled_templateObject_2, folderView_styled_templateObject_3, folderView_styled_templateObject_4, folderView_styled_templateObject_5, folderView_styled_templateObject_6, folderView_styled_templateObject_7, folderView_styled_templateObject_8, styled_templateObject_9, styled_templateObject_10, styled_templateObject_11;
//# sourceMappingURL=styled.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/folder-filled.js
var folder_filled = __webpack_require__(1063);
var folder_filled_default = /*#__PURE__*/__webpack_require__.n(folder_filled);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/image.js
var media_services_image = __webpack_require__(972);
var image_default = /*#__PURE__*/__webpack_require__.n(media_services_image);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/video.js
var video = __webpack_require__(961);
var video_default = /*#__PURE__*/__webpack_require__.n(video);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/audio.js
var audio = __webpack_require__(962);
var audio_default = /*#__PURE__*/__webpack_require__.n(audio);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/spreadsheet.js
var spreadsheet = __webpack_require__(1064);
var spreadsheet_default = /*#__PURE__*/__webpack_require__.n(spreadsheet);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/presentation.js
var presentation = __webpack_require__(1065);
var presentation_default = /*#__PURE__*/__webpack_require__.n(presentation);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/document.js
var media_services_document = __webpack_require__(973);
var document_default = /*#__PURE__*/__webpack_require__.n(media_services_document);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/pdf.js
var pdf = __webpack_require__(1066);
var pdf_default = /*#__PURE__*/__webpack_require__.n(pdf);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/zip.js
var zip = __webpack_require__(1067);
var zip_default = /*#__PURE__*/__webpack_require__.n(zip);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/media-services/unknown.js
var unknown = __webpack_require__(974);
var unknown_default = /*#__PURE__*/__webpack_require__.n(unknown);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/mimeTypeToIcon.js














var IconWrapper = styled_components_browser_esm["default"].div(mimeTypeToIcon_templateObject_1 || (mimeTypeToIcon_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var color = _a.color;
    return "color: " + color + ";";
});
function isFolder(mimeType) {
    return mimeType === 'application/vnd.atlassian.mediapicker.folder';
}
function isImage(mimeType) {
    return mimeType.indexOf('image/') === 0;
}
function isVideo(mimeType) {
    return mimeType.indexOf('video/') === 0;
}
function isAudio(mimeType) {
    return mimeType.indexOf('audio/') === 0;
}
function isPDF(mimeType) {
    return mimeType === 'application/pdf';
}
function isSpreadsheet(mimeType) {
    return ([
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
        'application/x-iwork-keynote-sffnumbers',
    ].indexOf(mimeType) > -1);
}
function isPresentation(mimeType) {
    return ([
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.ms-powerpoint',
        'application/x-iwork-keynote-sffkey',
    ].indexOf(mimeType) > -1);
}
function isDocument(mimeType) {
    return ([
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
        'application/x-iwork-pages-sffpages',
    ].indexOf(mimeType) > -1);
}
function isArchive(mimeType) {
    return ([
        'application/zip',
        'application/x-7z-compressed',
        'application/x-bzip',
        'application/x-bzip2',
    ].indexOf(mimeType) > -1);
}
var mapMimeTypeToIcon = function (mimeType) {
    if (isFolder(mimeType)) {
        return (react["createElement"](IconWrapper, { color: theme["colors"].B75 },
            react["createElement"](folder_filled_default.a, { label: "folder" })));
    }
    else if (isImage(mimeType)) {
        return (react["createElement"](IconWrapper, { color: theme["colors"].Y200 },
            react["createElement"](image_default.a, { label: "image" })));
    }
    else if (isVideo(mimeType)) {
        return (react["createElement"](IconWrapper, { color: theme["colors"].R300 },
            react["createElement"](video_default.a, { label: "video" })));
    }
    else if (isAudio(mimeType)) {
        return (react["createElement"](IconWrapper, { color: theme["colors"].P200 },
            react["createElement"](audio_default.a, { label: "audio" })));
    }
    else if (isSpreadsheet(mimeType)) {
        return (react["createElement"](IconWrapper, { color: theme["colors"].G300 },
            react["createElement"](spreadsheet_default.a, { label: "spreadsheet" })));
    }
    else if (isPresentation(mimeType)) {
        return (react["createElement"](IconWrapper, { color: theme["colors"].Y400 },
            react["createElement"](presentation_default.a, { label: "presentation" })));
    }
    else if (isDocument(mimeType)) {
        return (react["createElement"](IconWrapper, { color: theme["colors"].B200 },
            react["createElement"](document_default.a, { label: "document" })));
    }
    else if (isPDF(mimeType)) {
        return (react["createElement"](IconWrapper, { color: theme["colors"].R400 },
            react["createElement"](pdf_default.a, { label: "pdf document" })));
    }
    else if (isArchive(mimeType)) {
        return (react["createElement"](IconWrapper, { color: theme["colors"].N200 },
            react["createElement"](zip_default.a, { label: "zip" })));
    }
    else {
        return (react["createElement"](IconWrapper, { color: theme["colors"].N70 },
            react["createElement"](unknown_default.a, { label: "unknown" })));
    }
};
var mimeTypeToIcon_templateObject_1;
//# sourceMappingURL=mimeTypeToIcon.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/browser/folderView/folderView.js




 // ToDo: FIL-3207 | replace dateformat library with native solution
 // ToDo: FIL-3208 | replace filesize library with native solution





/* Actions */



/* Components */



var getDateString = function (timestamp) {
    if (!timestamp) {
        return '';
    }
    var todayString = new Date().toDateString();
    var itemDate = new Date(timestamp);
    var itemDateString = itemDate.toDateString();
    return dateformat_default()(itemDate, todayString === itemDateString ? 'H:MM TT' : 'd mmm yyyy');
};
var selectedTick = (react["createElement"](SelectedFileIconWrapper, null,
    react["createElement"](check_circle_default.a, { label: "check" })));
/**
 * Routing class that displays view depending on situation.
 */
var folderView_FolderViewer = /** @class */ (function (_super) {
    tslib_es6["__extends"](FolderViewer, _super);
    function FolderViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderContents = function () {
            if (_this.isPageInitialLoading) {
                return (react["createElement"](styled_SpinnerWrapper, null,
                    react["createElement"](Spinner["a" /* default */], { size: "large" })));
            }
            return _this.renderFolderContent(_this.props.items);
        };
        _this.renderServiceFolder = function (item, itemIcon) {
            return (react["createElement"](FolderViewerRow, { onClick: _this.itemClicked(item), key: item.id },
                react["createElement"](FileMetadataGroup, null,
                    react["createElement"](FileIcon, null, itemIcon),
                    react["createElement"](FileName, null, item.name))));
        };
        _this.renderServiceFile = function (serviceFile, itemIcon, isSelected) {
            var tail = isSelected
                ? selectedTick
                : _this.renderFileCreateDateAndSize(serviceFile);
            return (react["createElement"](FolderViewerRow, { isSelected: isSelected, onClick: _this.itemClicked(serviceFile), key: serviceFile.id },
                react["createElement"](FileMetadataGroup, null,
                    react["createElement"](FileIcon, null, itemIcon),
                    react["createElement"](FileName, { isSelected: isSelected }, serviceFile.name)),
                tail));
        };
        _this.renderFileCreateDateAndSize = function (_a) {
            var date = _a.date, size = _a.size;
            return (react["createElement"](FileMetadataGroup, null,
                react["createElement"](FileCreateDate, null, getDateString(date)),
                react["createElement"](FileSize, null, filesize_default()(size))));
        };
        _this.onLoadMoreButtonClick = function () {
            var _a = _this.props, service = _a.service, path = _a.path, nextCursor = _a.nextCursor, isLoading = _a.isLoading, onLoadMoreClick = _a.onLoadMoreClick;
            if (!isLoading) {
                onLoadMoreClick(service.name, service.accountId, path, nextCursor || '');
            }
        };
        return _this;
    }
    FolderViewer.prototype.render = function () {
        return (react["createElement"](FolderViewerWrapper, null,
            react["createElement"](navigation, null),
            this.renderContents()));
    };
    Object.defineProperty(FolderViewer.prototype, "isPageInitialLoading", {
        get: function () {
            return this.props.isLoading && !this.props.currentCursor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderViewer.prototype, "isPageMoreLoading", {
        get: function () {
            return this.props.isLoading && this.props.currentCursor;
        },
        enumerable: true,
        configurable: true
    });
    FolderViewer.prototype.renderFolderContent = function (items) {
        var _this = this;
        if (!items) {
            return null;
        }
        var folderItems = items
            .filter(function (item) { return item.mimeType.indexOf('application/vnd.google-apps.') === -1; })
            .map(function (item) {
            var itemIcon = mapMimeTypeToIcon(item.mimeType);
            var availableIds = _this.props.selectedItems.map(function (selectedItem) { return selectedItem.id; });
            var isSelected = availableIds.indexOf(item.id) > -1;
            if (isServiceFile(item)) {
                return _this.renderServiceFile(item, itemIcon, isSelected);
            }
            else {
                return _this.renderServiceFolder(item, itemIcon);
            }
        });
        return (react["createElement"](FolderViewerContent, null, [folderItems, this.renderLoadMoreButton()]));
    };
    FolderViewer.prototype.renderLoadMoreButton = function () {
        var _a = this.props, nextCursor = _a.nextCursor, isLoading = _a.isLoading;
        if (nextCursor || this.isPageMoreLoading) {
            var label = isLoading ? 'Loading...' : 'Load more';
            return (
            // Key is required as this component is used in array
            react["createElement"](MoreBtnWrapper, { key: "load-more-button-wrapper" },
                react["createElement"](Button["a" /* default */], { className: "moreBtn", onClick: this.onLoadMoreButtonClick, isDisabled: isLoading }, label)));
        }
        else {
            return null;
        }
    };
    FolderViewer.prototype.itemClicked = function (item) {
        var _this = this;
        return function () {
            var _a = _this.props, service = _a.service, onFolderClick = _a.onFolderClick, onFileClick = _a.onFileClick;
            if (isServiceFolder(item)) {
                var path = _this.props.path.slice();
                path.push({ id: item.id, name: item.name });
                onFolderClick(service.name, service.accountId, path);
            }
            else {
                var setUpfrontIdDeferred_1 = _this.props.setUpfrontIdDeferred;
                var upfrontId = new Promise(function (resolve, reject) {
                    setUpfrontIdDeferred_1(item.id, resolve, reject);
                });
                var file = tslib_es6["__assign"]({}, item, { upfrontId: upfrontId });
                onFileClick(service.name, service.accountId, file);
            }
        };
    };
    return FolderViewer;
}(react["Component"]));

/* harmony default export */ var folderView = (connect_connect(function (_a) {
    var view = _a.view, selectedItems = _a.selectedItems;
    return ({
        path: view.path,
        service: view.service,
        items: view.items,
        selectedItems: selectedItems,
        isLoading: view.isLoading,
        currentCursor: view.currentCursor,
        nextCursor: view.nextCursor,
    });
}, function (dispatch) { return ({
    onFolderClick: function (serviceName, accountId, path) {
        return dispatch(changeCloudAccountFolder(serviceName, accountId, path));
    },
    onFileClick: function (serviceName, accountId, file) {
        return dispatch(fileClick(file, serviceName, accountId));
    },
    onLoadMoreClick: function (serviceName, accountId, path, nextCursor) {
        return dispatch(fetchNextCloudFilesPage(serviceName, accountId, path, nextCursor));
    },
    setUpfrontIdDeferred: function (id, resolver, rejecter) {
        return dispatch(setUpfrontIdDeferred_setUpfrontIdDeferred(id, resolver, rejecter));
    },
}); })(folderView_FolderViewer));
//# sourceMappingURL=folderView.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/browser/auth/styled.js



var styled_IconWrapper = styled_components_browser_esm["default"].div(auth_styled_templateObject_1 || (auth_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > span {\n    width: 120px;\n    height: 120px;\n\n    svg {\n      width: 100%;\n      height: 100%;\n    }\n  }\n"], ["\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > span {\n    width: 120px;\n    height: 120px;\n\n    svg {\n      width: 100%;\n      height: 100%;\n    }\n  }\n"])), theme["colors"].N30);
var styled_ButtonWrapper = styled_components_browser_esm["default"].div(auth_styled_templateObject_2 || (auth_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  text-align: center;\n"], ["\n  text-align: center;\n"])));
var TextDescription = styled_components_browser_esm["default"].div(auth_styled_templateObject_3 || (auth_styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  margin-top: 18px;\n  color: ", ";\n  opacity: 0.7;\n  font-size: 12px;\n  text-align: center;\n"], ["\n  margin-top: 18px;\n  color: ", ";\n  opacity: 0.7;\n  font-size: 12px;\n  text-align: center;\n"])), theme["colors"].N500);
var styled_Title = styled_components_browser_esm["default"].div(auth_styled_templateObject_4 || (auth_styled_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  text-align: center;\n  font-size: 16px;\n  color: ", ";\n"], ["\n  text-align: center;\n  font-size: 16px;\n  color: ", ";\n"])), theme["colors"].N100);
var ConnectWrapper = styled_components_browser_esm["default"].div(auth_styled_templateObject_5 || (auth_styled_templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"])));
var auth_styled_templateObject_1, auth_styled_templateObject_2, auth_styled_templateObject_3, auth_styled_templateObject_4, auth_styled_templateObject_5;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/browser/auth/auth.js











var serviceDetails = {
    dropbox: {
        name: 'Dropbox',
        icon: react["createElement"](dropbox_default.a, { label: "dropbox", size: "xlarge" }),
    },
    google: {
        name: 'Google Drive',
        icon: react["createElement"](googledrive_default.a, { label: "drive", size: "xlarge" }),
    },
};
/**
 * Routing class that displays view depending on situation.
 */
var auth_StatelessAuth = /** @class */ (function (_super) {
    tslib_es6["__extends"](StatelessAuth, _super);
    function StatelessAuth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () { return _this.props.onStartAuth(_this.props.service.name); };
        return _this;
    }
    StatelessAuth.prototype.render = function () {
        var service = this.props.service;
        var details = serviceDetails[service.name];
        if (!details) {
            return null;
        }
        var name = details.name, icon = details.icon;
        return (react["createElement"](ConnectWrapper, null,
            react["createElement"](styled_Title, null,
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].upload_file_from, { values: { name: name } }))),
            react["createElement"](styled_IconWrapper, null, icon),
            react["createElement"](styled_ButtonWrapper, null,
                react["createElement"](Button["a" /* default */], { appearance: "primary", className: "connectBtn", onClick: this.onClick },
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].connect_to, { values: { name: name } })))),
            react["createElement"](TextDescription, null,
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].connect_account_description, { values: { name: name } })))));
    };
    return StatelessAuth;
}(react["Component"]));

/* harmony default export */ var auth_auth = (connect_connect(function (state) { return ({
    service: state.view.service,
}); }, function (dispatch) { return ({
    onStartAuth: function (serviceName) { return dispatch(startAuth(serviceName)); },
}); })(auth_StatelessAuth));
//# sourceMappingURL=auth.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/browser/styled.js


var browser_styled_Wrapper = styled_components_browser_esm["default"].div(browser_styled_templateObject_1 || (browser_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n"], ["\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n"])));
var browser_styled_templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/browser/browser.js







var browser_Browser = /** @class */ (function (_super) {
    tslib_es6["__extends"](Browser, _super);
    function Browser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Browser.prototype.render = function () {
        var service = this.props.service;
        var view = service.accountId ? react["createElement"](folderView, null) : react["createElement"](auth_auth, null);
        return react["createElement"](browser_styled_Wrapper, null, view);
    };
    return Browser;
}(react["Component"]));

/* harmony default export */ var browser_browser = (connect_connect(function (_a) {
    var service = _a.view.service;
    return ({
        service: service,
    });
})(browser_Browser));
//# sourceMappingURL=browser.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/dropzone/styled.js


var dropzone_styled_Wrapper = styled_components_browser_esm["default"].div(dropzone_styled_templateObject_1 || (dropzone_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  left: 0;\n  top: 0;\n  display: ", ";\n  text-align: center;\n  z-index: 100;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  left: 0;\n  top: 0;\n  display: ", ";\n  text-align: center;\n  z-index: 100;\n  align-items: center;\n  justify-content: center;\n"])), function (props) { return (props.isActive ? 'flex' : 'none'); });
var dropzoneAppear = Object(styled_components_browser_esm["keyframes"])(dropzone_styled_templateObject_2 || (dropzone_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  from {\n    opacity: 0;\n    transform: translate(0, 30px);\n  }\n"], ["\n  from {\n    opacity: 0;\n    transform: translate(0, 30px);\n  }\n"])));
var styled_Content = styled_components_browser_esm["default"].div(dropzone_styled_templateObject_3 || (dropzone_styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  animation: ", " 0.5s;\n"], ["\n  animation: ", " 0.5s;\n"])), dropzoneAppear);
// TODO: Use Atlaskit color
// https://product-fabric.atlassian.net/browse/MSW-156
var Label = styled_components_browser_esm["default"].div(dropzone_styled_templateObject_4 || (dropzone_styled_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  margin-top: 10px;\n  font-size: 16px;\n  color: #165ecc;\n"], ["\n  margin-top: 10px;\n  font-size: 16px;\n  color: #165ecc;\n"])));
/* needed to prevent child dragleave events */
var Glass = styled_components_browser_esm["default"].div(dropzone_styled_templateObject_5 || (dropzone_styled_templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 101;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 101;\n"])));
var styled_StyledIcon = styled_components_browser_esm["default"].svg(dropzone_styled_templateObject_6 || (dropzone_styled_templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  width: 70px;\n  height: 70px;\n"], ["\n  width: 70px;\n  height: 70px;\n"])));
var styled_StyledSvgGroup = styled_components_browser_esm["default"].g(dropzone_styled_templateObject_7 || (dropzone_styled_templateObject_7 = tslib_es6["__makeTemplateObject"]([""], [""])));
var dropzone_styled_templateObject_1, dropzone_styled_templateObject_2, dropzone_styled_templateObject_3, dropzone_styled_templateObject_4, dropzone_styled_templateObject_5, dropzone_styled_templateObject_6, dropzone_styled_templateObject_7;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/dropzone/icons.js




var icons_UploadIcon = /** @class */ (function (_super) {
    tslib_es6["__extends"](UploadIcon, _super);
    function UploadIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UploadIcon.prototype.render = function () {
        // TODO: Use Atlaskit color
        // https://product-fabric.atlassian.net/browse/MSW-156
        return (react["createElement"](styled_StyledIcon, { viewBox: "0 0 24 24", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
            react["createElement"](styled_StyledSvgGroup, { id: "Symbols", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
                react["createElement"](styled_StyledSvgGroup, { id: "Upload-cloud-active", fill: "#165ECC" },
                    react["createElement"]("path", { d: "M13,13.769312 L15.4995642,13.769312 C15.7692032,13.769312 15.8594741,13.5936547 15.6861267,13.3769704 L12.1240983,8.92443488 C12.0565453,8.83999358 11.9444393,8.83876288 11.8759017,8.92443488 L8.31387329,13.3769704 C8.14236212,13.5913594 8.22405275,13.769312 8.50043583,13.769312 L11,13.769312 L11,16.7978014 C11,16.9132156 11.0891309,17 11.1990795,17 L12.8009205,17 C12.9140625,17 13,16.9094726 13,16.7978014 L13,13.769312 Z M6,20 C3.23857625,20 1,17.7614237 1,15 C1,12.580468 2.71857515,10.5623307 5.00162508,10.0996885 C5.00054449,10.0665918 5,10.0333595 5,10 C5,8.34314575 6.34314575,7 8,7 C8.4650862,7 8.90545376,7.10583308 9.2983335,7.29473006 C9.99550814,5.37293414 11.8374211,4 14,4 C16.7614237,4 19,6.23857625 19,9 C19,9.37003761 18.9598026,9.73068663 18.8835364,10.0778186 C21.2235498,10.4950422 23,12.540065 23,15 C23,17.7614237 20.7614237,20 18,20 L6,20 Z", id: "Combined-Shape" })))));
    };
    return UploadIcon;
}(react["Component"]));

//# sourceMappingURL=icons.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/dropzone/dropzone.js







var dropzone_dropzone_Dropzone = /** @class */ (function (_super) {
    tslib_es6["__extends"](Dropzone, _super);
    function Dropzone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropzone.prototype.render = function () {
        var isActive = this.props.isActive;
        return (react["createElement"](dropzone_styled_Wrapper, { isActive: isActive },
            react["createElement"](styled_Content, null,
                react["createElement"](icons_UploadIcon, null),
                react["createElement"](Label, null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].drop_your_files)))),
            react["createElement"](Glass, null)));
    };
    return Dropzone;
}(react["Component"]));

//# sourceMappingURL=dropzone.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/modalSpinner.js
var modalSpinner = __webpack_require__(926);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-editor/react/editorView/editorViewLoader.js



var editorViewLoader_AsyncEditorView = /** @class */ (function (_super) {
    tslib_es6["__extends"](AsyncEditorView, _super);
    function AsyncEditorView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            // Set state value to equal to current static value of this class.
            EditorView: AsyncEditorView.EditorView,
        };
        return _this;
    }
    AsyncEditorView.prototype.componentWillMount = function () {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var module_1;
            return tslib_es6["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.state.EditorView) return [3 /*break*/, 2];
                        return [4 /*yield*/, __webpack_require__.e(/* import() | @atlaskit-internal_media-editor-view */ 9).then(__webpack_require__.bind(null, 1173))];
                    case 1:
                        module_1 = _a.sent();
                        AsyncEditorView.EditorView = module_1.default;
                        this.setState({ EditorView: module_1.default });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AsyncEditorView.prototype.render = function () {
        if (!this.state.EditorView) {
            return react["createElement"](modalSpinner["a" /* default */], { blankedColor: "none", invertSpinnerColor: false });
        }
        return react["createElement"](this.state.EditorView, tslib_es6["__assign"]({}, this.props));
    };
    AsyncEditorView.displayName = 'AsyncEditorView';
    return AsyncEditorView;
}(react["PureComponent"]));
/* harmony default export */ var editorViewLoader = (editorViewLoader_AsyncEditorView);
//# sourceMappingURL=editorViewLoader.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/editor/escHelper.js
/**
 * Subscribes to the window 'keydown' event, calls escHandler when ESC is pressed.
 * Call unload() to unsubscribe from the window event.
 */
var EscHelper = /** @class */ (function () {
    function EscHelper(escHandler) {
        var _this = this;
        this.escHandler = escHandler;
        this.keyDownListener = function (event) { return _this.onKeyDown(event); };
        window.addEventListener('keydown', this.keyDownListener);
        window.focus();
    }
    EscHelper.prototype.teardown = function () {
        window.removeEventListener('keydown', this.keyDownListener);
    };
    EscHelper.prototype.onKeyDown = function (event) {
        if (event.key === 'Escape' || event.which === 27) {
            this.escHandler();
        }
    };
    return EscHelper;
}());

//# sourceMappingURL=escHelper.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/editor/styles.js



// z-index is set to 200 for the main container to be above the dropzone which has z-index 100
var CenterView = styled_components_browser_esm["default"].div(editor_styles_templateObject_1 || (editor_styles_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n  overflow: hidden;\n"], ["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n  overflow: hidden;\n"])), theme["colors"].N700A);
var editor_styles_templateObject_1;
//# sourceMappingURL=styles.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/editor/errorView/styles.js





var ErrorPopup = styled_components_browser_esm["default"].div(errorView_styles_templateObject_1 || (errorView_styles_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  width: 290px;\n  padding: 16px;\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"], ["\n  width: 290px;\n  padding: 16px;\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"])), theme["colors"].N0);
var ErrorIconWrapper = styled_components_browser_esm["default"].div(errorView_styles_templateObject_2 || (errorView_styles_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  width: 92px;\n"], ["\n  width: 92px;\n"])));
var ErrorMessage = styled_components_browser_esm["default"].div(errorView_styles_templateObject_3 || (errorView_styles_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  margin-top: 16px;\n  margin-bottom: 4px;\n  width: 256px;\n  text-align: center;\n  font-weight: bold;\n"], ["\n  color: ", ";\n  margin-top: 16px;\n  margin-bottom: 4px;\n  width: 256px;\n  text-align: center;\n  font-weight: bold;\n"])), theme["colors"].N900);
var ErrorHint = styled_components_browser_esm["default"].div(errorView_styles_templateObject_4 || (errorView_styles_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  margin-top: 4px;\n  margin-bottom: 20px;\n  width: 256px;\n  text-align: center;\n"], ["\n  color: ", ";\n  margin-top: 4px;\n  margin-bottom: 20px;\n  width: 256px;\n  text-align: center;\n"])), theme["colors"].N70);
var ErrorButton = function (props) { return (react["createElement"](Button["a" /* default */], tslib_es6["__assign"]({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_es6["__rest"](_a, ["buttonStyles"]);
        return tslib_es6["__assign"]({ buttonStyles: tslib_es6["__assign"]({}, buttonStyles, { display: 'inline-flex', width: '84px', margin: '2px', justifyContent: 'center' }) }, rest);
    } }))); };
var errorView_styles_templateObject_1, errorView_styles_templateObject_2, errorView_styles_templateObject_3, errorView_styles_templateObject_4;
//# sourceMappingURL=styles.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/editor/errorView/errorView.js









var errorView_ErrorView = /** @class */ (function (_super) {
    tslib_es6["__extends"](ErrorView, _super);
    function ErrorView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorView.prototype.componentDidMount = function () {
        this.escHelper = new EscHelper(this.props.onCancel);
    };
    ErrorView.prototype.componentWillUnmount = function () {
        if (this.escHelper) {
            this.escHelper.teardown();
        }
    };
    ErrorView.prototype.render = function () {
        return (react["createElement"](CenterView, null,
            react["createElement"](ErrorPopup, null,
                react["createElement"](ErrorIconWrapper, null, errorIcon),
                react["createElement"](ErrorMessage, null, this.props.message),
                react["createElement"](ErrorHint, null, this.renderHint()),
                this.renderTryAgainButton(),
                this.renderCancelButton())));
    };
    ErrorView.prototype.renderHint = function () {
        var _a = this.props, onRetry = _a.onRetry, formatMessage = _a.intl.formatMessage;
        if (onRetry) {
            return react["createElement"]("span", null, formatMessage(messages["a" /* messages */].error_hint_retry));
        }
        return react["createElement"]("span", null, formatMessage(messages["a" /* messages */].error_hint_critical));
    };
    ErrorView.prototype.renderTryAgainButton = function () {
        var _a = this.props, onRetry = _a.onRetry, formatMessage = _a.intl.formatMessage;
        if (onRetry) {
            return (react["createElement"](ErrorButton, { appearance: "primary", onClick: onRetry }, formatMessage(messages["a" /* messages */].try_again)));
        }
        return null;
    };
    ErrorView.prototype.renderCancelButton = function () {
        var _a = this.props, onCancel = _a.onCancel, onRetry = _a.onRetry, formatMessage = _a.intl.formatMessage;
        var message = onRetry ? messages["a" /* messages */].cancel : messages["a" /* messages */].close;
        return (react["createElement"](ErrorButton, { appearance: "subtle", onClick: onCancel }, formatMessage(message)));
    };
    return ErrorView;
}(react["Component"]));

/* harmony default export */ var errorView = (Object(index_es["e" /* injectIntl */])(errorView_ErrorView));
//# sourceMappingURL=errorView.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/editor/spinnerView/spinnerView.js






var spinnerView_SpinnerView = /** @class */ (function (_super) {
    tslib_es6["__extends"](SpinnerView, _super);
    function SpinnerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerView.prototype.componentDidMount = function () {
        this.escHelper = new EscHelper(this.props.onCancel);
    };
    SpinnerView.prototype.componentWillUnmount = function () {
        if (this.escHelper) {
            this.escHelper.teardown();
        }
    };
    SpinnerView.prototype.render = function () {
        return (react["createElement"](CenterView, null,
            react["createElement"](Spinner["a" /* default */], { size: "large", invertColor: true })));
    };
    return SpinnerView;
}(react["Component"]));

//# sourceMappingURL=spinnerView.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/views/editor/mainEditorView.js











var mainEditorView_MainEditorView = /** @class */ (function (_super) {
    tslib_es6["__extends"](MainEditorView, _super);
    function MainEditorView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderContent = function (editorData) {
            var imageUrl = editorData.imageUrl, originalFile = editorData.originalFile, error = editorData.error;
            if (error) {
                return _this.renderError(error);
            }
            else if (imageUrl && originalFile) {
                return (react["createElement"](CenterView, null,
                    react["createElement"](editorViewLoader, { imageUrl: imageUrl, onSave: _this.onEditorSave(originalFile), onCancel: _this.onCancel, onError: _this.onEditorError })));
            }
            else {
                return react["createElement"](spinnerView_SpinnerView, { onCancel: _this.onCancel });
            }
        };
        _this.onEditorError = function (message, retryHandler) {
            _this.props.onShowEditorError({ message: message, retryHandler: retryHandler });
        };
        _this.onEditorSave = function (originalFile) { return function (image) {
            var _a = _this.props, localUploader = _a.localUploader, onDeselectFile = _a.onDeselectFile, onCloseEditor = _a.onCloseEditor;
            var filename = originalFile.name;
            var file = _this.urltoFile(image, filename);
            localUploader.addFiles([file]);
            onDeselectFile(originalFile.id);
            onCloseEditor('Save');
        }; };
        _this.onCancel = function () {
            _this.props.onCloseEditor('Close');
        };
        _this.urltoFile = function (dataurl, filename) {
            var arr = dataurl.split(',');
            var matches = arr[0].match(/:(.*?);/);
            if (!matches || matches.length < 2) {
                throw new Error('Failed to retrieve file from data URL');
            }
            var mime = matches[1];
            var bstr = atob(arr[1]);
            var n = bstr.length;
            var u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            var file = new Blob([u8arr], { type: mime });
            file.name = filename;
            return file;
        };
        return _this;
    }
    MainEditorView.prototype.render = function () {
        var editorData = this.props.editorData;
        if (editorData) {
            return this.renderContent(editorData);
        }
        else {
            return null;
        }
    };
    MainEditorView.prototype.renderError = function (_a) {
        var message = _a.message, retryHandler = _a.retryHandler;
        return (react["createElement"](errorView, { message: message, onRetry: retryHandler, onCancel: this.onCancel }));
    };
    return MainEditorView;
}(react["Component"]));

/* harmony default export */ var mainEditorView = (connect_connect(function (_a) {
    var editorData = _a.editorData;
    return ({ editorData: editorData });
}, function (dispatch) { return ({
    onShowEditorError: function (_a) {
        var message = _a.message, retryHandler = _a.retryHandler;
        return dispatch(editorShowError(message, retryHandler));
    },
    onCloseEditor: function (selection) { return dispatch(editorClose(selection)); },
    onDeselectFile: function (fileId) { return dispatch(deselectItem(fileId)); },
}); })(mainEditorView_MainEditorView));
//# sourceMappingURL=mainEditorView.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/startApp.js
var START_APP = 'START_APP';
function isStartAppAction(action) {
    return action.type === START_APP;
}
function startApp(payload) {
    return {
        type: START_APP,
        payload: payload,
    };
}
//# sourceMappingURL=startApp.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/fileUploadsStart.js
var FILE_UPLOADS_START = 'FILE_UPLOADS_START';
function isFileUploadsStartAction(action) {
    return action.type === FILE_UPLOADS_START;
}
function fileUploadsStart(payload) {
    return {
        type: FILE_UPLOADS_START,
        files: payload.files,
    };
}
//# sourceMappingURL=fileUploadsStart.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/fileUploadPreviewUpdate.js
var FILE_PREVIEW_UPDATE = 'FILE_PREVIEW_UPDATE';
function isFileUploadPreviewUpdateAction(action) {
    return action.type === FILE_PREVIEW_UPDATE;
}
function fileUploadPreviewUpdate(payload) {
    return {
        type: FILE_PREVIEW_UPDATE,
        file: payload.file,
        preview: payload.preview.file,
        originalEvent: {
            name: 'upload-preview-update',
            data: payload,
        },
    };
}
//# sourceMappingURL=fileUploadPreviewUpdate.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/fileUploadProgress.js
var FILE_UPLOAD_PROGRESS = 'FILE_UPLOAD_PROGRESS';
function isFileUploadProgressAction(action) {
    return action.type === FILE_UPLOAD_PROGRESS;
}
function fileUploadProgress(payload) {
    return {
        type: FILE_UPLOAD_PROGRESS,
        file: payload.file,
        progress: payload.progress.portion,
        originalEvent: {
            name: 'upload-status-update',
            data: payload,
        },
    };
}
//# sourceMappingURL=fileUploadProgress.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/fileUploadProcessingStart.js
var FILE_UPLOAD_PROCESSING_START = 'FILE_UPLOAD_PROCESSING_START';
function isFileUploadProcessingStartAction(action) {
    return action.type === FILE_UPLOAD_PROCESSING_START;
}
function fileUploadProcessingStart(payload) {
    return {
        type: FILE_UPLOAD_PROCESSING_START,
        file: payload.file,
        originalEvent: {
            name: 'upload-processing',
            data: payload,
        },
    };
}
//# sourceMappingURL=fileUploadProcessingStart.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/fileUploadEnd.js
var FILE_UPLOAD_END = 'FILE_UPLOAD_END';
function isFileUploadEndAction(action) {
    return action.type === FILE_UPLOAD_END;
}
function fileUploadEnd(payload) {
    return {
        type: FILE_UPLOAD_END,
        file: payload.file,
        publicFile: payload.public,
        originalEvent: {
            name: 'upload-end',
            data: payload,
        },
    };
}
//# sourceMappingURL=fileUploadEnd.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/fileUploadError.js
var FILE_UPLOAD_ERROR = 'FILE_UPLOAD_ERROR';
function isFileUploadErrorAction(action) {
    return action.type === FILE_UPLOAD_ERROR;
}
function fileUploadError(payload) {
    return {
        type: FILE_UPLOAD_ERROR,
        file: payload.file,
        error: payload.error,
        originalEvent: {
            name: 'upload-error',
            data: payload,
        },
    };
}
//# sourceMappingURL=fileUploadError.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/dropzoneDropIn.js
var DROPZONE_DROP_IN = 'DROPZONE_DROP_IN';
function isDropzoneDropInAction(action) {
    return action.type === DROPZONE_DROP_IN;
}
function dropzoneDropIn(fileCount) {
    return {
        type: DROPZONE_DROP_IN,
        fileCount: fileCount,
    };
}
//# sourceMappingURL=dropzoneDropIn.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/dropzoneDragIn.js
var DROPZONE_DRAG_IN = 'DROPZONE_DRAG_IN';
function isDropzoneDragInAction(action) {
    return action.type === DROPZONE_DRAG_IN;
}
function dropzoneDragIn(fileCount) {
    return {
        type: DROPZONE_DRAG_IN,
        fileCount: fileCount,
    };
}
//# sourceMappingURL=dropzoneDragIn.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/dropzoneDragOut.js
var DROPZONE_DRAG_OUT = 'DROPZONE_DRAG_OUT';
function isDropzoneDragOutAction(action) {
    return action.type === DROPZONE_DRAG_OUT;
}
function dropzoneDragOut(fileCount) {
    return {
        type: DROPZONE_DRAG_OUT,
        fileCount: fileCount,
    };
}
//# sourceMappingURL=dropzoneDragOut.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/passContext.js



var passContext_PassContext = /** @class */ (function (_super) {
    tslib_es6["__extends"](PassContext, _super);
    function PassContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createDefaultI18nProvider = function () {
            return new index_es["c" /* IntlProvider */]({ locale: 'en' }).getChildContext().intl;
        };
        return _this;
    }
    PassContext.prototype.getChildContext = function () {
        var _a = this.props, store = _a.store, proxyReactContext = _a.proxyReactContext;
        var getAtlaskitAnalyticsEventHandlers = proxyReactContext && proxyReactContext.getAtlaskitAnalyticsEventHandlers
            ? proxyReactContext.getAtlaskitAnalyticsEventHandlers
            : function () { return []; };
        var intl = (proxyReactContext && proxyReactContext.intl) ||
            this.createDefaultI18nProvider();
        return {
            store: store,
            getAtlaskitAnalyticsEventHandlers: getAtlaskitAnalyticsEventHandlers,
            intl: intl,
        };
    };
    PassContext.prototype.render = function () {
        var children = this.props.children;
        return children;
    };
    // We need to manually specify all the child contexts
    PassContext.childContextTypes = {
        store: function () { },
        getAtlaskitAnalyticsEventHandlers: function () { },
        intl: index_es["f" /* intlShape */],
    };
    return PassContext;
}(react["Component"]));
/* harmony default export */ var passContext = (passContext_PassContext);
//# sourceMappingURL=passContext.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/styled.js



var MediaPickerPopupWrapper = styled_components_browser_esm["default"].div(components_styled_templateObject_1 || (components_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  cursor: default;\n  user-select: none;\n  font-family: ", ";\n  border-radius: 3px;\n  position: relative;\n\n  /* Ensure that the modal has a static size */\n  width: 968px;\n"], ["\n  display: flex;\n  cursor: default;\n  user-select: none;\n  font-family: ", ";\n  border-radius: 3px;\n  position: relative;\n\n  /* Ensure that the modal has a static size */\n  width: 968px;\n"])), Object(constants["i" /* fontFamily */])());
var SidebarWrapper = styled_components_browser_esm["default"].div(components_styled_templateObject_2 || (components_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  width: 235px;\n  min-width: 235px;\n  background-color: ", ";\n"], ["\n  width: 235px;\n  min-width: 235px;\n  background-color: ", ";\n"])), theme["colors"].N30);
var ViewWrapper = styled_components_browser_esm["default"].div(components_styled_templateObject_3 || (components_styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  /* Height of the Popup should never change */\n  height: calc(100vh - 200px);\n\n  background-color: white;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  /* Height of the Popup should never change */\n  height: calc(100vh - 200px);\n\n  background-color: white;\n"])));
var components_styled_templateObject_1, components_styled_templateObject_2, components_styled_templateObject_3;
//# sourceMappingURL=styled.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/components/clipboard/clipboard.js + 1 modules
var clipboard = __webpack_require__(1025);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/components/browser/browser.js
var components_browser_browser = __webpack_require__(999);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/components/localUpload.js
var components_localUpload = __webpack_require__(959);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/components/app.js







/* Components */







/* Configs */

/* actions */
















var app_App = /** @class */ (function (_super) {
    tslib_es6["__extends"](App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.browserRef = react["createRef"]();
        _this.onDragLeave = function (payload) {
            var onDropzoneDragOut = _this.props.onDropzoneDragOut;
            onDropzoneDragOut(payload.length);
            _this.setDropzoneActive(false);
        };
        _this.onDragEnter = function (payload) {
            var onDropzoneDragIn = _this.props.onDropzoneDragIn;
            onDropzoneDragIn(payload.length);
            _this.setDropzoneActive(true);
        };
        _this.onDrop = function (payload) {
            var _a = _this.props, onDropzoneDropIn = _a.onDropzoneDropIn, onUploadsStart = _a.onUploadsStart;
            onDropzoneDropIn(payload.files.length);
            onUploadsStart(payload);
        };
        _this.setDropzoneActive = function (isDropzoneActive) {
            _this.setState({
                isDropzoneActive: isDropzoneActive,
            });
        };
        _this.renderClipboard = function () {
            var _a = _this.props, onUploadPreviewUpdate = _a.onUploadPreviewUpdate, onUploadStatusUpdate = _a.onUploadStatusUpdate, onUploadProcessing = _a.onUploadProcessing, onUploadEnd = _a.onUploadEnd, onUploadError = _a.onUploadError, tenantUploadParams = _a.tenantUploadParams;
            var config = {
                uploadParams: tenantUploadParams,
                shouldCopyFileToRecents: false,
            };
            return (react["createElement"](clipboard["Clipboard"], { mediaClient: _this.componentMediaClient, config: config, onUploadsStart: _this.onDrop, onPreviewUpdate: onUploadPreviewUpdate, onStatusUpdate: onUploadStatusUpdate, onProcessing: onUploadProcessing, onEnd: onUploadEnd, onError: onUploadError }));
        };
        _this.renderBrowser = function () {
            var _a = _this.props, tenantUploadParams = _a.tenantUploadParams, onUploadsStart = _a.onUploadsStart, onUploadPreviewUpdate = _a.onUploadPreviewUpdate, onUploadStatusUpdate = _a.onUploadStatusUpdate, onUploadProcessing = _a.onUploadProcessing, onUploadEnd = _a.onUploadEnd, onUploadError = _a.onUploadError;
            var config = {
                uploadParams: tenantUploadParams,
                shouldCopyFileToRecents: false,
                multiple: true,
            };
            return (react["createElement"](components_browser_browser["Browser"], { ref: _this.browserRef, mediaClient: _this.componentMediaClient, config: config, onUploadsStart: onUploadsStart, onPreviewUpdate: onUploadPreviewUpdate, onStatusUpdate: onUploadStatusUpdate, onProcessing: onUploadProcessing, onEnd: onUploadEnd, onError: onUploadError }));
        };
        var onStartApp = props.onStartApp, onUploadsStart = props.onUploadsStart, onUploadPreviewUpdate = props.onUploadPreviewUpdate, onUploadStatusUpdate = props.onUploadStatusUpdate, onUploadProcessing = props.onUploadProcessing, onUploadEnd = props.onUploadEnd, onUploadError = props.onUploadError, tenantMediaClient = props.tenantMediaClient, userMediaClient = props.userMediaClient, tenantUploadParams = props.tenantUploadParams;
        _this.state = {
            isDropzoneActive: false,
        };
        // Context that has both auth providers defined explicitly using to provided contexts.
        // Each of the local components using this context will upload first to user's recents
        // and then copy to a tenant's collection.
        var mediaClient = new media_client["a" /* MediaClient */]({
            authProvider: tenantMediaClient.config.authProvider,
            userAuthProvider: userMediaClient.config.authProvider,
            cacheSize: tenantMediaClient.config.cacheSize,
        });
        _this.componentMediaClient = mediaClient;
        _this.localUploader = new components_localUpload["a" /* LocalUploadComponent */](mediaClient, {
            uploadParams: tenantUploadParams,
            shouldCopyFileToRecents: false,
        });
        _this.localUploader.on('uploads-start', onUploadsStart);
        _this.localUploader.on('upload-preview-update', onUploadPreviewUpdate);
        _this.localUploader.on('upload-status-update', onUploadStatusUpdate);
        _this.localUploader.on('upload-processing', onUploadProcessing);
        _this.localUploader.on('upload-end', onUploadEnd);
        _this.localUploader.on('upload-error', onUploadError);
        _this.mpDropzone = new dropzone["DropzoneImpl"](mediaClient, {
            uploadParams: tenantUploadParams,
            shouldCopyFileToRecents: false,
            headless: true,
        });
        _this.mpDropzone.on('drag-enter', _this.onDragEnter);
        _this.mpDropzone.on('drag-leave', _this.onDragLeave);
        _this.mpDropzone.on('uploads-start', _this.onDrop);
        _this.mpDropzone.on('upload-preview-update', onUploadPreviewUpdate);
        _this.mpDropzone.on('upload-status-update', onUploadStatusUpdate);
        _this.mpDropzone.on('upload-processing', onUploadProcessing);
        _this.mpDropzone.on('upload-end', onUploadEnd);
        _this.mpDropzone.on('upload-error', onUploadError);
        onStartApp({
            onCancelUpload: function (uploadId) {
                _this.browserRef &&
                    _this.browserRef.current &&
                    _this.browserRef.current.cancel(uploadId);
                _this.mpDropzone.cancel(uploadId);
                _this.localUploader.cancel(uploadId);
            },
        });
        return _this;
    }
    App.prototype.componentWillReceiveProps = function (_a) {
        var isVisible = _a.isVisible;
        if (isVisible !== this.props.isVisible) {
            if (isVisible) {
                this.mpDropzone.activate();
            }
            else {
                this.mpDropzone.deactivate();
            }
        }
    };
    App.prototype.componentWillUnmount = function () {
        this.mpDropzone.deactivate();
    };
    App.prototype.render = function () {
        var _a = this.props, selectedServiceName = _a.selectedServiceName, isVisible = _a.isVisible, onClose = _a.onClose, store = _a.store, proxyReactContext = _a.proxyReactContext;
        var isDropzoneActive = this.state.isDropzoneActive;
        return (react["createElement"](ModalTransition["b" /* default */], null, isVisible && (react["createElement"](components_Provider, { store: store },
            react["createElement"](ModalWrapper["a" /* default */], { onClose: onClose, width: "x-large", isChromeless: true },
                react["createElement"](passContext, { store: store, proxyReactContext: proxyReactContext },
                    react["createElement"](MediaPickerPopupWrapper, null,
                        react["createElement"](SidebarWrapper, null,
                            react["createElement"](sidebar, null)),
                        react["createElement"](ViewWrapper, null,
                            this.renderCurrentView(selectedServiceName),
                            react["createElement"](footer, null)),
                        react["createElement"](dropzone_dropzone_Dropzone, { isActive: isDropzoneActive }),
                        react["createElement"](mainEditorView, { localUploader: this.localUploader })),
                    this.renderClipboard(),
                    this.renderBrowser()))))));
    };
    App.prototype.renderCurrentView = function (selectedServiceName) {
        if (selectedServiceName === 'upload') {
            // We need to create a new context since Cards in recents view need user auth
            var userMediaClient = this.props.userMediaClient;
            return (react["createElement"](upload_upload, { browserRef: this.browserRef, mediaClient: userMediaClient, recentsCollection: popup_config["a" /* RECENTS_COLLECTION */] }));
        }
        else if (selectedServiceName === 'giphy') {
            return react["createElement"](giphyView, null);
        }
        else {
            return react["createElement"](browser_browser, null);
        }
    };
    return App;
}(react["Component"]));

var app_mapStateToProps = function (_a) {
    var view = _a.view, tenantMediaClient = _a.tenantMediaClient, userMediaClient = _a.userMediaClient, config = _a.config;
    return ({
        selectedServiceName: view.service.name,
        isVisible: view.isVisible,
        config: config,
        tenantMediaClient: tenantMediaClient,
        userMediaClient: userMediaClient,
    });
};
var app_mapDispatchToProps = function (dispatch) { return ({
    onStartApp: function (payload) { return dispatch(startApp(payload)); },
    onUploadsStart: function (payload) {
        return dispatch(fileUploadsStart(payload));
    },
    onClose: function () { return dispatch(hidePopup()); },
    onUploadPreviewUpdate: function (payload) {
        return dispatch(fileUploadPreviewUpdate(payload));
    },
    onUploadStatusUpdate: function (payload) {
        return dispatch(fileUploadProgress(payload));
    },
    onUploadProcessing: function (payload) {
        return dispatch(fileUploadProcessingStart(payload));
    },
    onUploadEnd: function (payload) {
        return dispatch(fileUploadEnd(payload));
    },
    onUploadError: function (payload) {
        return dispatch(fileUploadError(payload));
    },
    onDropzoneDragIn: function (fileCount) { return dispatch(dropzoneDragIn(fileCount)); },
    onDropzoneDragOut: function (fileCount) {
        return dispatch(dropzoneDragOut(fileCount));
    },
    onDropzoneDropIn: function (fileCount) { return dispatch(dropzoneDropIn(fileCount)); },
}); };
/* harmony default export */ var app = (connect_connect(app_mapStateToProps, app_mapDispatchToProps)(app_App));
//# sourceMappingURL=app.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/cancelUpload.js
var CANCEL_UPLOAD = 'CANCEL_UPLOAD';
function isCancelUploadAction(action) {
    return action.type === CANCEL_UPLOAD;
}
function cancelUpload(payload) {
    return {
        type: CANCEL_UPLOAD,
        payload: payload,
    };
}
//# sourceMappingURL=cancelUpload.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/showPopup.js
var SHOW_POPUP = 'SHOW_POPUP';
function isShowPopupAction(action) {
    return action.type === SHOW_POPUP;
}
function showPopup() {
    return {
        type: SHOW_POPUP,
    };
}
//# sourceMappingURL=showPopup.js.map
// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/developmentOnly.js
var developmentOnly = __webpack_require__(1069);

// EXTERNAL MODULE: ./node_modules/postis/src/index.js
var src = __webpack_require__(1070);
var src_default = /*#__PURE__*/__webpack_require__.n(src);

// EXTERNAL MODULE: ./node_modules/uuid/v4.js
var v4 = __webpack_require__(241);
var v4_default = /*#__PURE__*/__webpack_require__.n(v4);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-core/index.js + 3 modules
var media_core = __webpack_require__(135);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/domain/auth.js

function mapAuthToAuthHeaders(auth) {
    if (Object(media_core["isClientBasedAuth"])(auth)) {
        return {
            'X-Client-Id': auth.clientId,
            Authorization: "Bearer " + auth.token,
        };
    }
    else {
        return {
            'X-Issuer': auth.asapIssuer,
            Authorization: "Bearer " + auth.token,
        };
    }
}
function mapAuthToQueryParameters(auth) {
    if (Object(media_core["isClientBasedAuth"])(auth)) {
        return {
            client: auth.clientId,
            token: auth.token,
        };
    }
    else {
        return {
            issuer: auth.asapIssuer,
            token: auth.token,
        };
    }
}
//# sourceMappingURL=auth.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/objectToQueryString.js
var objectToQueryString = function (json) {
    return Object.keys(json)
        .map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(json[key].toString());
    })
        .join('&');
};
//# sourceMappingURL=objectToQueryString.js.map
// EXTERNAL MODULE: ./node_modules/url/url.js
var url_url = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/client/media-store.js
var media_store = __webpack_require__(417);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/fetcher/fetcher.js




var METADATA_POLL_INTERVAL_MS = 2000;
var giphyApiKey = 'lBOxhhz1BM62Y3JsK0iQv1pRYyOGUjR8';
var toJson = function (response) { return response.json(); };
var fetcher_MediaApiFetcher = /** @class */ (function () {
    function MediaApiFetcher() {
        var _this = this;
        this.fetchTrendingGifs = function (offset) {
            var baseUrl = 'https://api.giphy.com/v1/gifs/trending';
            var params = {
                api_key: giphyApiKey,
                rating: 'pg',
                offset: offset,
            };
            var url = "" + baseUrl + _this.stringifyParams(params);
            return fetch(url)
                .then(toJson)
                .then(_this.mapGiphyResponseToViewModel);
        };
        this.fetchGifsRelevantToSearch = function (query, offset) {
            var baseUrl = 'https://api.giphy.com/v1/gifs/search';
            var params = {
                api_key: giphyApiKey,
                rating: 'pg',
                q: query,
                offset: offset,
            };
            var url = "" + baseUrl + _this.stringifyParams(params);
            return fetch(url)
                .then(toJson)
                .then(_this.mapGiphyResponseToViewModel);
        };
        this.mapGiphyResponseToViewModel = function (response) {
            var data = response.data, pagination = response.pagination;
            var cardModels = data.map(function (gif) {
                var id = gif.id, slug = gif.slug;
                var _a = gif.images.fixed_width, size = _a.size, url = _a.url, width = _a.width, height = _a.height;
                var name = slug.replace(new RegExp("-" + id), '');
                var metadata = {
                    id: id,
                    name: name,
                    mediaType: 'image',
                    size: parseInt(size, 10),
                };
                return {
                    metadata: metadata,
                    dataURI: url,
                    dimensions: {
                        width: parseInt(width, 10),
                        height: parseInt(height, 10),
                    },
                };
            });
            return {
                cardModels: cardModels,
                totalResultCount: pagination.total_count,
            };
        };
    }
    MediaApiFetcher.prototype.fetchCloudAccountFolder = function (auth, serviceName, accountId, folderId, cursor) {
        var _this = this;
        return this.query(pickerUrl(auth.baseUrl) + "/service/" + serviceName + "/" + accountId + "/folder", 'GET', {
            folderId: folderId,
            limit: 100,
            cursor: cursor,
        }, mapAuthToAuthHeaders(auth))
            .then(toJson)
            .then(function (_a) {
            var serviceFolder = _a.data;
            if (serviceName === 'dropbox') {
                return tslib_es6["__assign"]({}, serviceFolder, { items: _this.sortDropboxFiles(serviceFolder.items) });
            }
            else {
                return serviceFolder;
            }
        });
    };
    // TODO [MS-725]: remove
    MediaApiFetcher.prototype.pollFile = function (auth, fileId, collection) {
        var _this = this;
        var store = new media_store["a" /* MediaStore */]({
            authProvider: function () { return Promise.resolve(auth); },
        });
        return new Promise(function (resolve, reject) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var file, e_1;
            var _this = this;
            return tslib_es6["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, store.getFile(fileId, { collection: collection })];
                    case 1:
                        file = (_a.sent()).data;
                        if (file.processingStatus === 'succeeded' ||
                            file.processingStatus === 'failed') {
                            resolve(file);
                        }
                        else {
                            window.setTimeout(function () {
                                _this.pollFile(auth, fileId, collection).then(resolve, reject);
                            }, METADATA_POLL_INTERVAL_MS);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        reject('metadata_fetch_fail');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    MediaApiFetcher.prototype.getServiceList = function (auth) {
        return this.query(pickerUrl(auth.baseUrl) + "/accounts", 'GET', {}, mapAuthToAuthHeaders(auth))
            .then(toJson)
            .then(function (_a) {
            var services = _a.data;
            return flattenAccounts(services);
        });
    };
    MediaApiFetcher.prototype.unlinkCloudAccount = function (auth, accountId) {
        return this.query(pickerUrl(auth.baseUrl) + "/account/" + accountId, 'DELETE', {}, mapAuthToAuthHeaders(auth)).then(function () { });
    };
    MediaApiFetcher.prototype.stringifyParams = function (queryParams) {
        var keys = Object.keys(queryParams);
        if (!keys.length) {
            return '';
        }
        var stringifiedParams = keys
            .map(function (key) {
            var value = queryParams[key];
            return value !== undefined ? key + "=" + value : undefined;
        })
            .filter(function (key) { return !!key; })
            .join('&');
        return "?" + stringifiedParams;
    };
    MediaApiFetcher.prototype.query = function (baseUrl, method, payload, authHeaders) {
        var contentType = 'application/json; charset=utf-8';
        var headers = new Headers(tslib_es6["__assign"]({}, authHeaders, { 'Content-Type': contentType }));
        var params = method === 'GET' ? this.stringifyParams(payload) : '';
        var body = method !== 'GET' ? JSON.stringify(payload) : undefined;
        var url = "" + baseUrl + params;
        var request = new Request(url, {
            method: method,
            headers: headers,
            body: body,
        });
        return fetch(request);
    };
    MediaApiFetcher.prototype.isFolder = function (item) {
        return item.mimeType === 'application/vnd.atlassian.mediapicker.folder';
    };
    MediaApiFetcher.prototype.sortDropboxFiles = function (items) {
        var _this = this;
        return items.sort(function (a, b) {
            var isAFolder = _this.isFolder(a);
            var isBFolder = _this.isFolder(b);
            if (!isAFolder && isBFolder) {
                return 1;
            }
            if (isAFolder && !isBFolder) {
                return -1;
            }
            var aName = a.name.toLowerCase();
            var bName = b.name.toLowerCase();
            if (aName > bName) {
                return 1;
            }
            else if (aName < bName) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    return MediaApiFetcher;
}());

var fileStoreUrl = function (baseUrl) {
    var _a = url_url["parse"](baseUrl), protocol = _a.protocol, host = _a.host;
    return protocol + "//" + host;
};
var pickerUrl = function (baseUrl) {
    return fileStoreUrl(baseUrl) + "/picker";
};
function flattenAccounts(services) {
    return services.reduce(function (accounts, service) {
        return accounts.concat(service.accounts.map(function (account) { return (tslib_es6["__assign"]({}, account, { type: service.type })); }));
    }, new Array());
}
//# sourceMappingURL=fetcher.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/services/cloud-service.js

// We still need postis here to communicate with the "link-account-handler" iframe





var cloud_service_CloudService = /** @class */ (function () {
    function CloudService(userAuthProvider) {
        this.userAuthProvider = userAuthProvider;
    }
    CloudService.prototype.startAuth = function (redirectUrl, serviceName) {
        var win = window.open('', '_blank');
        return this.userAuthProvider()
            .then(function (auth) {
            return new Promise(function (resolve) {
                var channelId = v4_default()();
                var authParams = mapAuthToQueryParameters(auth);
                var queryString = objectToQueryString(tslib_es6["__assign"]({}, authParams, { redirectUrl: redirectUrl + "?channelId=" + channelId }));
                // Electron does not support location.assign so we must use the
                // string setter to assign a new location to the window
                win.location = pickerUrl(auth.baseUrl) + "/service/" + serviceName + "?" + queryString;
                var channel = src_default()({
                    window: win,
                    scope: channelId,
                });
                channel.ready(function () {
                    channel.listen('auth-callback-received', function () {
                        // notify auth window to close itself
                        channel.send({ method: 'auth-callback-done', params: {} });
                        // unregister the channel listener
                        channel.destroy();
                        resolve();
                        // TODO: MSW-69 what happens if this times out?
                    });
                });
            });
        })
            .catch(function (e) {
            if (win) {
                win.close();
            }
            throw e;
        });
    };
    return CloudService;
}());

//# sourceMappingURL=cloud-service.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/randomInt.js
var randomInt = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//# sourceMappingURL=randomInt.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/websocket/ws.js




// Helper function that formats websocket URL based on API URL
var getWsUrl = function (baseUrl) {
    var urlParams = url_url["parse"](baseUrl);
    var protocol = urlParams.protocol, host = urlParams.host;
    var wsProtocol = protocol === 'http:' ? 'ws:' : 'wss:';
    return wsProtocol + "//" + host + "/picker/ws/";
};
// Wraps WebSocket instance.
// The constructor can throw an error.
//
// You should call teardown() when you're done with the object of this class.
//
// Internally pings the websocket periodically. If the connection is lost, calls onConnectionLost.
// In this case you don't have to call teardown(), however calling teardown() twice doesn't cause an error.
var ws_Ws = /** @class */ (function () {
    function Ws(auth, onDataReceived, onConnectionLost) {
        var _this = this;
        this.onDataReceived = onDataReceived;
        this.onConnectionLost = onConnectionLost;
        this.teardown = function () {
            window.clearTimeout(_this.pingTimeoutId);
            _this.ws.close();
        };
        this.send = function (data) {
            var ws = _this.ws;
            if (ws.readyState === ws.OPEN) {
                ws.send(JSON.stringify(data));
            }
            else if (ws.readyState === ws.CONNECTING) {
                var listener_1 = function () {
                    ws.removeEventListener('open', listener_1);
                    ws.send(JSON.stringify(data));
                };
                ws.addEventListener('open', listener_1);
            }
        };
        this.schedulePing = function () {
            // Intervals for ping in milliseconds
            var minInterval = 25 * 1000;
            var maxInterval = 35 * 1000;
            var interval = randomInt(minInterval, maxInterval);
            window.clearTimeout(_this.pingTimeoutId);
            _this.pingTimeoutId = window.setTimeout(_this.ping, interval);
        };
        this.ping = function () {
            if (_this.isWebSocketClosed()) {
                _this.teardown();
                _this.onConnectionLost();
                return;
            }
            _this.sendHeartBeat();
            _this.schedulePing();
        };
        this.isWebSocketClosed = function () {
            return _this.ws.readyState === _this.ws.CLOSED;
        };
        this.sendHeartBeat = function () {
            if (_this.ws.readyState === _this.ws.OPEN) {
                _this.ws.send('');
            }
        };
        this.setHandler = function () {
            _this.ws.onmessage = function (message) {
                var resp = JSON.parse(message.data);
                _this.onDataReceived(resp);
            };
        };
        var wsUrl = getWsUrl(auth.baseUrl);
        // WebSocket throws an exception SECURITY_ERR if the port is blocked.
        // https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
        var authParams = mapAuthToQueryParameters(auth);
        this.ws = new WebSocket(wsUrl + "?" + objectToQueryString(authParams));
        this.setHandler();
        this.schedulePing();
    }
    return Ws;
}());

//# sourceMappingURL=ws.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/websocket/wsConnection.js

// Contains retry logic to establish the websocket connection
//
// If no data was received within 3 minutes, the connection is reported as lost.
var wsConnection_WsConnection = /** @class */ (function () {
    function WsConnection(auth, onDataReceived, onConnectionLost) {
        var _this = this;
        this.auth = auth;
        this.onDataReceived = onDataReceived;
        this.onConnectionLost = onConnectionLost;
        this.retriesRemaining = 10;
        this.openWs = function () {
            var timeout = 1000; // msec
            try {
                window.clearTimeout(_this.retryTimeoutId);
                _this.ws = new ws_Ws(_this.auth, _this.wsDataReceived, _this.onConnectionLost);
                _this.resetIdleTimeout();
            }
            catch (error) {
                // Could not create a web socket
                --_this.retriesRemaining;
                if (_this.retriesRemaining > 0) {
                    // Retry after a timeout
                    _this.retryTimeoutId = window.setTimeout(_this.openWs, timeout);
                }
                else {
                    // No more retries
                    _this.teardown();
                    _this.onConnectionLost();
                }
            }
        };
        this.wsDataReceived = function (data) {
            _this.resetIdleTimeout();
            _this.onDataReceived(data);
        };
        this.resetIdleTimeout = function () {
            // if we don't receive a message from the WebSocket after 3 minutes we close it
            var idleTimeout = 3 * 60 * 1000;
            window.clearTimeout(_this.idleTimeoutId);
            _this.idleTimeoutId = window.setTimeout(_this.onIdle, idleTimeout);
        };
        this.onIdle = function () {
            window.clearTimeout(_this.idleTimeoutId);
            _this.onConnectionLost();
        };
        this.openWs();
    }
    WsConnection.prototype.teardown = function () {
        if (this.ws) {
            this.ws.teardown();
            this.ws = undefined;
        }
        window.clearTimeout(this.retryTimeoutId);
        window.clearTimeout(this.idleTimeoutId);
        this.retriesRemaining = 0;
    };
    WsConnection.prototype.send = function (data) {
        if (!this.ws) {
            throw new Error('WebSocket connection has been closed');
        }
        this.ws.send(data);
    };
    return WsConnection;
}());

//# sourceMappingURL=wsConnection.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/websocket/wsConnectionHolder.js

// Responsible for creating a websocket connection when necessary and holding it until all activities are finished
var wsConnectionHolder_WsConnectionHolder = /** @class */ (function () {
    function WsConnectionHolder(auth) {
        var _this = this;
        this.auth = auth;
        this.activities = [];
        this.onActivityCompleted = function (activity) {
            var index = _this.activities.indexOf(activity);
            if (index !== -1) {
                _this.activities.splice(index, 1);
            }
            // Where we don't have any activities left, we should close the connection
            if (_this.activities.length === 0 && _this.wsConnection) {
                _this.closeConnection();
            }
        };
        this.onWebSocketDataReceived = function (data) {
            _this.activities.forEach(function (activity) {
                activity.processWebSocketData(data);
            });
        };
        this.onConnectionLost = function () {
            _this.closeConnection();
        };
    }
    WsConnectionHolder.prototype.openConnection = function (activity) {
        activity.on('Completed', this.onActivityCompleted);
        this.activities.push(activity);
        if (!this.wsConnection) {
            this.wsConnection = new wsConnection_WsConnection(this.auth, this.onWebSocketDataReceived, this.onConnectionLost);
        }
    };
    WsConnectionHolder.prototype.send = function (data) {
        if (!this.wsConnection) {
            throw new Error('WebSocket connection has been closed');
        }
        this.wsConnection.send(data);
    };
    WsConnectionHolder.prototype.closeConnection = function () {
        var _this = this;
        this.activities.forEach(function (activity) {
            activity.off('Completed', _this.onActivityCompleted);
            activity.connectionLost();
        });
        this.activities = [];
        if (this.wsConnection) {
            this.wsConnection.teardown();
            this.wsConnection = undefined;
        }
    };
    return WsConnectionHolder;
}());

//# sourceMappingURL=wsConnectionHolder.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/websocket/wsProvider.js


// Helper class that provides a WsConnectionHolder instance for a given client.
var wsProvider_WsProvider = /** @class */ (function () {
    function WsProvider() {
        this.connectionHolders = {};
    }
    WsProvider.prototype.getWsConnectionHolder = function (auth) {
        var tag = WsProvider.mapAuthToTag(auth);
        var stored = this.connectionHolders[tag];
        if (stored) {
            return stored;
        }
        return this.createAndRemember(auth, tag);
    };
    WsProvider.prototype.createAndRemember = function (auth, tag) {
        var holder = new wsConnectionHolder_WsConnectionHolder(auth);
        this.connectionHolders[tag] = holder;
        return holder;
    };
    WsProvider.mapAuthToTag = function (auth) {
        if (Object(media_core["isClientBasedAuth"])(auth)) {
            return auth.clientId + "-" + auth.token;
        }
        else {
            return auth.asapIssuer + "-" + auth.token;
        }
    };
    return WsProvider;
}());

//# sourceMappingURL=wsProvider.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/fileClick.js


function fileClick_fileClick(state, action) {
    if (isFileClickAction(action)) {
        var file_1 = action.file;
        var selectedItems = state.selectedItems, _a = state.config.singleSelect, singleSelect = _a === void 0 ? false : _a;
        var itemFound = selectedItems.some(function (item) { return item.id === file_1.id; });
        if (itemFound) {
            return tslib_es6["__assign"]({}, state, { selectedItems: selectedItems.filter(function (item) { return item.id !== file_1.id; }) });
        }
        else if (singleSelect) {
            return tslib_es6["__assign"]({}, state, { selectedItems: [file_1] });
        }
        else {
            return tslib_es6["__assign"]({}, state, { selectedItems: tslib_es6["__spread"](selectedItems, [file_1]) });
        }
    }
    else {
        return state;
    }
}
//# sourceMappingURL=fileClick.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/updatePopupUrls.js
var UPDATE_POPUP_URLS = 'UPDATE_POPUP_URLS';
var updatePopupUrls = function (urls) {
    return {
        type: UPDATE_POPUP_URLS,
        urls: urls,
    };
};
function isUpdatePopupUrlsAction(action) {
    return action.type === UPDATE_POPUP_URLS;
}
//# sourceMappingURL=updatePopupUrls.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/updatePopupUrls.js


function updatePopupUrls_updatePopupUrls(state, action) {
    if (isUpdatePopupUrlsAction(action)) {
        var urls = action.urls;
        return tslib_es6["__assign"]({}, state, urls);
    }
    return state;
}
//# sourceMappingURL=updatePopupUrls.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/pathsEqual.js
function pathsEqual(path1, path2) {
    if (!Array.isArray(path1) ||
        !Array.isArray(path2) ||
        path1.length !== path2.length) {
        return false;
    }
    var isEqual = path1.reduce(function (wasEqual, folder, i) {
        return wasEqual && folder.id === path2[i].id;
    }, true);
    return isEqual;
}
//# sourceMappingURL=pathsEqual.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/fileListUpdate.js



function fileListUpdate_fileListUpdate(state, action) {
    if (action.type === FILE_LIST_UPDATE) {
        if (pathsEqual(action.path, state.view.path) &&
            action.accountId === state.view.service.accountId &&
            state.view.currentCursor === action.currentCursor) {
            return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { items: action.items, isLoading: false, currentCursor: action.currentCursor, nextCursor: action.nextCursor }) });
        }
    }
    return state;
}
//# sourceMappingURL=fileListUpdate.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/serviceListUpdate.js


function serviceListUpdate(state, action) {
    if (action.type === UPDATE_SERVICE_LIST) {
        return tslib_es6["__assign"]({}, state, { accounts: action.accounts });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=serviceListUpdate.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/accountChange.js


function accountChange(state, action) {
    if (isChangeAccountAction(action)) {
        var accountId = action.accountId, serviceName = action.serviceName;
        // remove loading state from view, as we only reload the recents collection when the popup is shown
        var isLoading = serviceName === 'upload' ? false : state.view.isLoading;
        return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { isLoading: isLoading, hasError: false, service: {
                    accountId: accountId,
                    name: serviceName,
                }, path: [], items: [] }) });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=accountChange.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/accountUnlink.js


/* harmony default export */ var accountUnlink = (function (state, action) {
    if (action.type === UNLINK_ACCOUNT) {
        var accounts = state.accounts.then(function (accounts) {
            return accounts.slice().filter(function (account) { return account.id !== action.account.id; });
        });
        return tslib_es6["__assign"]({}, state, { accounts: accounts });
    }
    else {
        return state;
    }
});
//# sourceMappingURL=accountUnlink.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/serviceConnect.js
function serviceConnect(state, action) {
    if (action.type === 'SERVICE_CONNECT') {
        var view = Object.assign({}, state.view, {
            connect: { name: action.serviceName },
            path: false,
        });
        return Object.assign({}, state, { view: view });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=serviceConnect.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/pathChangeRequest.js


function pathChangeRequest(state, action) {
    if (isChangeCloudAccountFolderAction(action)) {
        var view = tslib_es6["__assign"]({}, state.view, {
            isLoading: true,
            path: action.path,
            currentCursor: undefined,
            nextCursor: undefined,
        });
        return tslib_es6["__assign"]({}, state, { view: view });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=pathChangeRequest.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/fetchNextCloudFilesPage.js


function fetchNextPage(state, action) {
    if (isFetchNextCloudFilesPageAction(action)) {
        return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { isLoading: true, currentCursor: action.nextCursor, nextCursor: undefined }) });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=fetchNextCloudFilesPage.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/getFilesInRecents.js


var getRecentFilesStarted = function (state, action) {
    if (isGetFilesInRecentsAction(action)) {
        return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { service: {
                    name: 'upload',
                    accountId: '',
                }, path: [], hasError: false }) });
    }
    else {
        return state;
    }
};
var getRecentFilesFullfilled = function (state, action) {
    if (isGetFilesInRecentsFullfilledAction(action)) {
        var items = action.items;
        return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { isLoading: false }), recents: {
                items: items,
            } });
    }
    return state;
};
var getRecentFilesFailed = function (state, action) {
    if (isGetFilesInRecentsFailedAction(action)) {
        return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { hasError: true, isLoading: false }) });
    }
    return state;
};
//# sourceMappingURL=getFilesInRecents.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/fileUploadsAdd.js


function fileUploadsAdd(state, action) {
    if (isFileUploadsStartAction(action)) {
        var uploads = state.uploads, selectedItems = state.selectedItems, lastUploadIndex = state.lastUploadIndex;
        var files = action.files;
        var newUploads_1 = {};
        var newLastUploadIndex_1 = lastUploadIndex;
        files.forEach(function (_a) {
            var id = _a.id, name = _a.name, type = _a.type, size = _a.size, upfrontId = _a.upfrontId, userUpfrontId = _a.userUpfrontId, userOccurrenceKey = _a.userOccurrenceKey, occurrenceKey = _a.occurrenceKey;
            if (userUpfrontId && userOccurrenceKey) {
                newUploads_1[id] = {
                    file: {
                        metadata: {
                            id: id,
                            name: name,
                            mimeType: type,
                            size: size,
                            upfrontId: upfrontId,
                            userUpfrontId: userUpfrontId,
                            userOccurrenceKey: userOccurrenceKey,
                            occurrenceKey: occurrenceKey,
                        },
                    },
                    timeStarted: Date.now(),
                    progress: 0,
                    events: [],
                    index: newLastUploadIndex_1++,
                };
            }
        });
        var newSelectedItems = files.map(function (_a) {
            var id = _a.id, name = _a.name, type = _a.type, size = _a.size, upfrontId = _a.upfrontId, occurrenceKey = _a.occurrenceKey;
            return ({
                date: 0,
                id: id,
                upfrontId: upfrontId,
                occurrenceKey: occurrenceKey,
                mimeType: type,
                name: name,
                parentId: '',
                size: size,
                serviceName: 'upload',
            });
        });
        return tslib_es6["__assign"]({}, state, { uploads: tslib_es6["__assign"]({}, uploads, newUploads_1), selectedItems: tslib_es6["__spread"](selectedItems, newSelectedItems), lastUploadIndex: newLastUploadIndex_1 });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=fileUploadsAdd.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/filePreviewUpdate.js


function filePreviewUpdate(state, action) {
    if (isFileUploadPreviewUpdateAction(action)) {
        // this event is not going to be recorded or sent to main window (you can't pass blobs)
        var uploads = tslib_es6["__assign"]({}, state.uploads);
        if (uploads[action.file.id]) {
            uploads[action.file.id].file.blob = action.preview;
            uploads[action.file.id].events.push(action.originalEvent);
        }
        return tslib_es6["__assign"]({}, state, { uploads: uploads });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=filePreviewUpdate.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/fileUploadProgress.js


function fileUploadProgress_fileUploadProgress(state, action) {
    if (isFileUploadProgressAction(action)) {
        var uploads = tslib_es6["__assign"]({}, state.uploads);
        if (uploads[action.file.id]) {
            uploads[action.file.id].progress = action.progress;
            uploads[action.file.id].events.push(action.originalEvent);
        }
        return tslib_es6["__assign"]({}, state, { uploads: uploads });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=fileUploadProgress.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/fileUploadProcessingStart.js


function fileUploadProcessingStart_fileUploadProcessingStart(state, action) {
    if (isFileUploadProcessingStartAction(action)) {
        var uploads = tslib_es6["__assign"]({}, state.uploads);
        if (uploads[action.file.id]) {
            uploads[action.file.id].progress = 1; // no specific UI, just setting 100% in progress
            uploads[action.file.id].events.push(action.originalEvent);
        }
        return tslib_es6["__assign"]({}, state, { uploads: uploads });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=fileUploadProcessingStart.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/fileUploadEnd.js


function fileUploadEnd_fileUploadEnd(state, action) {
    if (isFileUploadEndAction(action)) {
        var uploads = tslib_es6["__assign"]({}, state.uploads);
        if (uploads[action.file.id]) {
            uploads[action.file.id].progress = null; // clearing progress will remove progress UI
            uploads[action.file.id].events.push(action.originalEvent);
        }
        return tslib_es6["__assign"]({}, state, { uploads: uploads });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=fileUploadEnd.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/setEventProxy.js

function setEventProxy(state, action) {
    if (action.type === 'SET_EVENT_PROXY') {
        var itemId = action.itemId, uploadId = action.uploadId;
        var uploads = state.uploads;
        var upload = uploads[itemId];
        if (upload) {
            if (upload.proxy) {
                upload.proxy.push(uploadId);
            }
            else {
                upload.proxy = [uploadId];
            }
        }
        return tslib_es6["__assign"]({}, state, { uploads: uploads });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=setEventProxy.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/removeEventProxy.js
var REMOVE_EVENT_PROXY = 'REMOVE_EVENT_PROXY';
function isRemoveEventProxyAction(action) {
    return action.type === REMOVE_EVENT_PROXY;
}
function removeEventProxy(payload) {
    return {
        type: REMOVE_EVENT_PROXY,
        payload: payload,
    };
}
//# sourceMappingURL=removeEventProxy.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/removeEventProxy.js


function removeEventProxy_removeEventProxy(state, action) {
    if (isRemoveEventProxyAction(action)) {
        var _a = action.payload, uploadId = _a.uploadId, proxyId = _a.proxyId;
        var uploads = tslib_es6["__assign"]({}, state.uploads);
        var upload = uploads[uploadId];
        if (upload) {
            var proxy = upload.proxy;
            if (proxy) {
                var pos = proxy.indexOf(proxyId);
                if (pos > -1) {
                    if (proxy.length === 1) {
                        delete uploads[uploadId];
                    }
                    else {
                        proxy.splice(pos, 1);
                    }
                }
            }
        }
        return tslib_es6["__assign"]({}, state, { uploads: uploads });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=removeEventProxy.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/resetView.js


function resetView_resetView(state, action) {
    if (isResetViewAction(action)) {
        var selectedItems = [];
        var oldUploads_1 = state.uploads;
        var uploads = Object.keys(oldUploads_1)
            .filter(function (uploadId) {
            var progress = oldUploads_1[uploadId].progress;
            return typeof progress === 'number' && progress < 1; // remove files that finished upload
        })
            .reduce(function (uploads, fileIdToKeep) {
            uploads[fileIdToKeep] = oldUploads_1[fileIdToKeep];
            return uploads;
        }, {});
        return tslib_es6["__assign"]({}, state, { selectedItems: selectedItems,
            uploads: uploads });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=resetView.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/editorClose.js


function editorClose_editorClose(state, action) {
    if (isEditorCloseAction(action)) {
        return tslib_es6["__assign"]({}, state, { editorData: undefined });
    }
    return state;
}
//# sourceMappingURL=editorClose.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/editorShowError.js


function editorShowError_editorShowError(state, action) {
    if (isEditorShowErrorAction(action)) {
        var editorData = state.editorData;
        var error = action.error;
        return tslib_es6["__assign"]({}, state, { editorData: tslib_es6["__assign"]({}, editorData, { error: error }) });
    }
    return state;
}
//# sourceMappingURL=editorShowError.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/editorShowImage.js


function editorShowImage_editorShowImage(state, action) {
    if (isEditorShowImageAction(action)) {
        var editorData = state.editorData;
        var imageUrl = action.imageUrl;
        var originalFile = action.originalFile || (editorData && editorData.originalFile);
        return tslib_es6["__assign"]({}, state, { editorData: {
                imageUrl: imageUrl,
                originalFile: originalFile,
            } });
    }
    return state;
}
//# sourceMappingURL=editorShowImage.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/editorShowLoading.js
var EDITOR_SHOW_LOADING = 'EDITOR_SHOW_LOADING';
function editorShowLoading(originalFile) {
    return {
        type: EDITOR_SHOW_LOADING,
        originalFile: originalFile,
    };
}
//# sourceMappingURL=editorShowLoading.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/editorShowLoading.js


function editorShowLoading_editorShowLoading(state, action) {
    if (action.type === EDITOR_SHOW_LOADING) {
        return tslib_es6["__assign"]({}, state, { editorData: { originalFile: action.originalFile } });
    }
    return state;
}
//# sourceMappingURL=editorShowLoading.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/deselectItem.js


function deselectItem_deselectItem(state, action) {
    if (isDeslectItemAction(action)) {
        var selectedItems = state.selectedItems;
        if (selectedItems) {
            return tslib_es6["__assign"]({}, state, { selectedItems: selectedItems.filter(function (item) { return item.id !== action.id; }) });
        }
    }
    return state;
}
//# sourceMappingURL=deselectItem.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/isUploading.js


function isUploading(state, action) {
    if (state === void 0) { state = false; }
    if (isStartImportAction(action)) {
        return true;
    }
    else if (isResetViewAction(action)) {
        return false;
    }
    else {
        return state;
    }
}
function isCancelling(state, action) {
    if (state === void 0) { state = false; }
    if (isHidePopupAction(action)) {
        return true;
    }
    else if (isResetViewAction(action)) {
        return false;
    }
    else {
        return state;
    }
}
/* harmony default export */ var reducers_isUploading = (function (state, action) {
    var nextState = tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view) });
    var hasChanged = false;
    nextState.view.isUploading = isUploading(state.view.isUploading, action);
    if (nextState.view.isUploading !== state.view.isUploading) {
        hasChanged = true;
    }
    nextState.view.isCancelling = isCancelling(state.view.isCancelling, action);
    if (nextState.view.isCancelling !== state.view.isCancelling) {
        hasChanged = true;
    }
    return hasChanged ? nextState : state;
});
// this would be nicer:
// import {combineReducers} from 'redux';
// export default combineReducers({
//   isUploading,
//   isCancelling
// });
//# sourceMappingURL=isUploading.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/remoteUploadStart.js
var REMOTE_UPLOAD_START = 'REMOTE_UPLOAD_START';
function remoteUploadStart(uploadId) {
    return {
        type: REMOTE_UPLOAD_START,
        uploadId: uploadId,
    };
}
//# sourceMappingURL=remoteUploadStart.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/remoteUploadStart.js


function remoteUploadStart_remoteUploadStart(state, action) {
    if (action.type === REMOTE_UPLOAD_START) {
        var uploadId = action.uploadId;
        var remoteUploads = tslib_es6["__assign"]({}, state.remoteUploads);
        remoteUploads[uploadId] = {
            timeStarted: Date.now(),
        };
        return tslib_es6["__assign"]({}, state, { remoteUploads: remoteUploads });
    }
    return state;
}
//# sourceMappingURL=remoteUploadStart.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/searchGiphy.js


var giphySearchStarted = function (state, action) {
    if (isSearchGiphyAction(action)) {
        var shouldAppendResults = action.shouldAppendResults;
        var giphy = shouldAppendResults ? state.giphy : { imageCardModels: [] };
        return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { isLoading: true, hasError: false }), giphy: giphy });
    }
    else {
        return state;
    }
};
var giphySearchFullfilled = function (state, action) {
    if (isSearchGiphyFulfilledAction(action)) {
        var oldImageCardModels = state.giphy.imageCardModels;
        var newImageCardModels = action.imageCardModels, shouldAppendResults = action.shouldAppendResults, totalResultCount = action.totalResultCount;
        var imageCardModels = shouldAppendResults
            ? tslib_es6["__spread"](oldImageCardModels, newImageCardModels) : newImageCardModels;
        return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { isLoading: false }), giphy: {
                imageCardModels: imageCardModels,
                totalResultCount: totalResultCount,
            } });
    }
    else {
        return state;
    }
};
var giphySearchFailed = function (state, action) {
    if (isSearchGiphyFailedAction(action)) {
        return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { isLoading: false, hasError: true }), giphy: {
                imageCardModels: [],
                totalResultCount: undefined,
            } });
    }
    else {
        return state;
    }
};
//# sourceMappingURL=searchGiphy.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/showPopup.js


/* harmony default export */ var reducers_showPopup = (function (state, action) {
    if (isShowPopupAction(action)) {
        return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { isVisible: true }) });
    }
    else {
        return state;
    }
});
//# sourceMappingURL=showPopup.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/hidePopup.js


/* harmony default export */ var reducers_hidePopup = (function (state, action) {
    if (isHidePopupAction(action)) {
        return tslib_es6["__assign"]({}, state, { view: tslib_es6["__assign"]({}, state.view, { isVisible: false }) });
    }
    else {
        return state;
    }
});
//# sourceMappingURL=hidePopup.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/startApp.js


/* harmony default export */ var reducers_startApp = (function (state, action) {
    if (isStartAppAction(action)) {
        return tslib_es6["__assign"]({}, state, { onCancelUpload: action.payload.onCancelUpload });
    }
    else {
        return state;
    }
});
//# sourceMappingURL=startApp.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/setUpfrontIdDeferred.js


function reducers_setUpfrontIdDeferred_setUpfrontIdDeferred(state, action) {
    var _a;
    if (action.type === SET_UPFRONT_ID_DEFERRED) {
        var id = action.id, resolver = action.resolver, rejecter = action.rejecter;
        return tslib_es6["__assign"]({}, state, { deferredIdUpfronts: tslib_es6["__assign"]({}, state.deferredIdUpfronts, (_a = {}, _a[id] = { resolver: resolver, rejecter: rejecter }, _a)) });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=setUpfrontIdDeferred.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/saveCollectionItemsSubscription.js


function saveCollectionItemsSubscription_saveCollectionItemsSubscription(state, action) {
    if (action.type === SAVE_COLLECTION_ITEMS_SUBSCRIPTION) {
        return tslib_es6["__assign"]({}, state, { collectionItemsSubscription: action.subscription });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=saveCollectionItemsSubscription.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/removeFileFromRecents.js


function reducers_removeFileFromRecents_removeFileFromRecents(state, action) {
    if (!isRemoveFileFromRecentsAction(action)) {
        return state;
    }
    var selectedItems = state.selectedItems.filter(function (item) { return item.id !== action.id; });
    var uploads = Object.keys(state.uploads)
        .filter(function (uploadId) { return state.uploads[uploadId].file.metadata.id !== action.id; })
        .reduce(function (uploadObject, uploadId) {
        var _a;
        return (tslib_es6["__assign"]({}, uploadObject, (_a = {}, _a[uploadId] = state.uploads[uploadId], _a)));
    }, {});
    return tslib_es6["__assign"]({}, state, { selectedItems: selectedItems,
        uploads: uploads });
}
//# sourceMappingURL=removeFileFromRecents.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/reducers/reducers.js

































var reducers_reducers = combineReducers([
    fileClick_fileClick,
    fileListUpdate_fileListUpdate,
    pathChangeRequest,
    fetchNextPage,
    serviceListUpdate,
    accountChange,
    serviceConnect,
    accountUnlink,
    getRecentFilesStarted,
    getRecentFilesFullfilled,
    getRecentFilesFailed,
    updatePopupUrls_updatePopupUrls,
    fileUploadsAdd,
    filePreviewUpdate,
    fileUploadProgress_fileUploadProgress,
    fileUploadProcessingStart_fileUploadProcessingStart,
    fileUploadEnd_fileUploadEnd,
    setEventProxy,
    removeEventProxy_removeEventProxy,
    reducers_removeFileFromRecents_removeFileFromRecents,
    resetView_resetView,
    editorClose_editorClose,
    editorShowError_editorShowError,
    editorShowImage_editorShowImage,
    editorShowLoading_editorShowLoading,
    deselectItem_deselectItem,
    reducers_isUploading,
    remoteUploadStart_remoteUploadStart,
    giphySearchStarted,
    giphySearchFullfilled,
    giphySearchFailed,
    reducers_showPopup,
    reducers_hidePopup,
    reducers_startApp,
    reducers_setUpfrontIdDeferred_setUpfrontIdDeferred,
    saveCollectionItemsSubscription_saveCollectionItemsSubscription,
]);
function combineReducers(reducers) {
    return function (state, action) {
        return reducers.reduce(function (oldState, reducer) {
            return reducer(oldState, action);
        }, tslib_es6["__assign"]({}, state));
    };
}
/* harmony default export */ var popup_reducers_reducers = (reducers_reducers);
//# sourceMappingURL=reducers.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/default_state.js
var defaultState = {
    uploads: {},
    remoteUploads: {},
    recents: {
        items: [],
    },
    view: {
        isVisible: false,
        service: {
            name: 'upload',
            accountId: '',
        },
        hasError: false,
        isLoading: true,
        path: [],
        items: [],
        isUploading: false,
        isCancelling: false,
    },
    accounts: Promise.resolve([]),
    selectedItems: [],
    isUploading: false,
    isCancelling: false,
    lastUploadIndex: 0,
    giphy: {
        imageCardModels: [],
        totalResultCount: undefined,
    },
    onCancelUpload: function () {
        throw new Error('onCancelUpload has not been set yet.');
    },
    deferredIdUpfronts: {},
};
/* harmony default export */ var default_state = (defaultState);
//# sourceMappingURL=default_state.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/config.js

/* harmony default export */ var media_picker_config = ({
    version: exenv["canUseDOM"] && window.VERSION,
    html: {
        redirectUrl: 'https://api.media.atlassian.com/picker/static/link-account-handler.html',
    },
});
//# sourceMappingURL=config.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/changeAccount.js



/* harmony default export */ var middleware_changeAccount = (function (store) { return function (next) { return function (action) {
    if (isChangeAccountAction(action)) {
        var serviceName = action.serviceName, accountId = action.accountId;
        if (isRemoteCloudAccount(serviceName) && accountId !== '') {
            store.dispatch(changeCloudAccountFolder(serviceName, accountId, []));
        }
    }
    return next(action);
}; }; });
//# sourceMappingURL=changeAccount.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/getConnectedRemoteAccounts.js
var GET_CONNECTED_REMOTE_ACCOUNTS = 'GET_CONNECTED_REMOTE_ACCOUNTS';
var getConnectedRemoteAccounts = function () {
    return {
        type: GET_CONNECTED_REMOTE_ACCOUNTS,
    };
};
//# sourceMappingURL=getConnectedRemoteAccounts.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/changeService.js
var changeService_this = undefined;



var loggableServices = ['google', 'dropbox'];
var changeService_changeService = function (store) { return function (next) { return function (action) { return tslib_es6["__awaiter"](changeService_this, void 0, void 0, function () {
    var serviceName, firstAccount, accountId;
    return tslib_es6["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!isChangeServiceAction(action)) return [3 /*break*/, 2];
                serviceName = action.serviceName;
                if (loggableServices.indexOf(serviceName) !== -1) {
                    store.dispatch(getConnectedRemoteAccounts());
                }
                return [4 /*yield*/, store.getState().accounts];
            case 1:
                firstAccount = (_a.sent()).find(function (account) { return account.type === action.serviceName; });
                accountId = firstAccount ? firstAccount.id : '';
                store.dispatch(changeAccount(serviceName, accountId));
                _a.label = 2;
            case 2: return [2 /*return*/, next(action)];
        }
    });
}); }; }; };
//# sourceMappingURL=changeService.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/fetchNextCloudFilesPage.js

var fetchNextCloudFilesPageMiddleware = function (fetcher) { return function (store) { return function (next) { return function (action) {
    if (isFetchNextCloudFilesPageAction(action)) {
        var userMediaClient = store.getState().userMediaClient;
        var serviceName_1 = action.serviceName, accountId_1 = action.accountId, path_1 = action.path;
        var folderId_1 = (path_1[path_1.length - 1] || { id: '' }).id;
        var view = store.getState().view;
        var cursor_1 = view && view.nextCursor;
        var items_1 = (view && view.items) || [];
        userMediaClient.config
            .authProvider()
            .then(function (auth) {
            return fetcher.fetchCloudAccountFolder(auth, serviceName_1, accountId_1, folderId_1, cursor_1);
        })
            .then(function (folder) {
            return store.dispatch(fileListUpdate(accountId_1, path_1, items_1.concat(folder.items), serviceName_1, cursor_1, folder.cursor));
        })
            .catch(function (error) {
            /* TODO: error collector */
            if (error.response && error.response.status === 401) {
                store.dispatch(requestUnlinkCloudAccount({ id: accountId_1, name: serviceName_1 }));
            }
        });
    }
    return next(action);
}; }; }; };
//# sourceMappingURL=fetchNextCloudFilesPage.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/changeCloudAccountFolder.js


var changeCloudAccountFolderMiddleware = function (fetcher) { return function (store) { return function (next) { return function (action) {
    if (isChangeCloudAccountFolderAction(action)) {
        var userMediaClient = store.getState().userMediaClient;
        var serviceName_1 = action.serviceName, accountId_1 = action.accountId, path_1 = action.path;
        var lastPath_1 = path_1.length === 0 ? { id: '', name: '' } : path_1[path_1.length - 1];
        userMediaClient.config
            .authProvider()
            .then(function (auth) {
            return fetcher.fetchCloudAccountFolder(auth, serviceName_1, accountId_1, lastPath_1.id);
        })
            .then(function (folder) {
            return store.dispatch(fileListUpdate(accountId_1, path_1, folder.items, serviceName_1, undefined, folder.cursor));
        })
            .catch(function (error) {
            /* TODO: Error Collector */
            if (error.response && error.response.status === 401) {
                store.dispatch(requestUnlinkCloudAccount({ id: accountId_1, name: serviceName_1 }));
            }
        });
    }
    return next(action);
}; }; }; };
//# sourceMappingURL=changeCloudAccountFolder.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/startApp.js


/* harmony default export */ var middleware_startApp = (function () {
    return function (store) { return function (next) { return function (action) {
        if (isStartAppAction(action)) {
            var redirectUrl = store.getState().redirectUrl;
            store.dispatch(updatePopupUrls({ redirectUrl: redirectUrl }));
        }
        return next(action);
    }; }; };
});
//# sourceMappingURL=startApp.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/getConnectedRemoteAccounts.js


var isGetConnectedRemoteAccountsAction = function (action) {
    return action.type === GET_CONNECTED_REMOTE_ACCOUNTS;
};
var getConnectedRemoteAccounts_getConnectedRemoteAccounts = function (fetcher) { return function (store) { return function (next) { return function (action) {
    if (isGetConnectedRemoteAccountsAction(action)) {
        var userMediaClient = store.getState().userMediaClient;
        store.dispatch(updateServiceList(userMediaClient.config
            .authProvider()
            .then(function (auth) { return fetcher.getServiceList(auth); })));
    }
    return next(action);
}; }; }; };
//# sourceMappingURL=getConnectedRemoteAccounts.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/getFilesInRecents.js



var getFilesInRecents_getFilesInRecents = function () { return function (store) { return function (next) { return function (action) {
    if (isGetFilesInRecentsAction(action)) {
        requestRecentFiles(store);
    }
    return next(action);
}; }; }; };
var requestRecentFiles = function (store) {
    var _a = store.getState(), userMediaClient = _a.userMediaClient, collectionItemsSubscription = _a.collectionItemsSubscription;
    if (collectionItemsSubscription) {
        collectionItemsSubscription.unsubscribe();
    }
    var subscription = userMediaClient.collection
        .getItems(popup_config["a" /* RECENTS_COLLECTION */])
        .subscribe({
        next: function (items) {
            store.dispatch(getFilesInRecentsFullfilled(items));
        },
        error: function () {
            store.dispatch(getFilesInRecentsFailed());
        },
    });
    store.dispatch(saveCollectionItemsSubscription(subscription));
};
//# sourceMappingURL=getFilesInRecents.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/ReplaySubject.js
var ReplaySubject = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/rxjs/operators/map.js
var map = __webpack_require__(569);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/file-streams-cache.js
var file_streams_cache = __webpack_require__(418);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/models/media.js
var media = __webpack_require__(839);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/globalMediaEventEmitter.js
var globalMediaEventEmitter = __webpack_require__(971);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/finalizeUpload.js
var FINALIZE_UPLOAD = 'FINALIZE_UPLOAD';
function isFinalizeUploadAction(action) {
    return action.type === FINALIZE_UPLOAD;
}
function finalizeUpload(file, uploadId, source, replaceFileId) {
    return {
        type: FINALIZE_UPLOAD,
        file: file,
        uploadId: uploadId,
        source: source,
        replaceFileId: replaceFileId,
    };
}
//# sourceMappingURL=finalizeUpload.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/getPreview.js
var GET_PREVIEW = 'GET_PREVIEW';
function isGetPreviewAction(action) {
    return action.type === GET_PREVIEW;
}
function getPreview(uploadId, file, collection) {
    return {
        type: GET_PREVIEW,
        uploadId: uploadId,
        file: file,
        collection: collection,
    };
}
//# sourceMappingURL=getPreview.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/handleCloudFetchingEvent.js
var HANDLE_CLOUD_FETCHING_EVENT = 'HANDLE_CLOUD_FETCHING_EVENT';
function isHandleCloudFetchingEventAction(action) {
    return action.type === HANDLE_CLOUD_FETCHING_EVENT;
}
function handleCloudFetchingEvent(file, event, payload) {
    return {
        type: HANDLE_CLOUD_FETCHING_EVENT,
        file: file,
        event: event,
        payload: payload,
    };
}
//# sourceMappingURL=handleCloudFetchingEvent.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/setEventProxy.js
var SET_EVENT_PROXY = 'SET_EVENT_PROXY';
var setEventProxy_setEventProxy = function (itemId, uploadId) {
    return {
        type: SET_EVENT_PROXY,
        itemId: itemId,
        uploadId: uploadId,
    };
};
//# sourceMappingURL=setEventProxy.js.map
// EXTERNAL MODULE: ./node_modules/eventemitter2/lib/eventemitter2.js
var eventemitter2 = __webpack_require__(245);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/websocket/wsMessageData.js
var isRemoteUploadStartData = function (data) {
    return data && data.type === 'RemoteUploadStart';
};
var isRemoteUploadProgressData = function (data) {
    return data.type === 'RemoteUploadProgress';
};
var isRemoteUploadEndData = function (data) {
    return data.type === 'RemoteUploadEnd';
};
var isErrorData = function (data) {
    return data.type === 'Error';
};
var isRemoteUploadErrorData = function (data) {
    return isErrorData(data) && data.error === 'RemoteUploadFail';
};
var isNotifyMetadata = function (data) {
    return data.type === 'NotifyMetadata';
};
var isServerError = function (data) {
    return isErrorData(data) && data.error === 'ServerError';
};
var isNoUserFound = function (data) {
    return isErrorData(data) && data.error === 'NoUserFound';
};
//# sourceMappingURL=wsMessageData.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/websocket/upload/remoteUploadActivity.js


var remoteUploadActivity_RemoteUploadActivity = /** @class */ (function () {
    function RemoteUploadActivity(uploadId, dispatchEvent) {
        this.uploadId = uploadId;
        this.dispatchEvent = dispatchEvent;
        this.eventEmitter = new eventemitter2["EventEmitter2"]();
    }
    RemoteUploadActivity.prototype.processWebSocketData = function (data) {
        if (!this.shouldProcessWsData(data)) {
            return;
        }
        if (isRemoteUploadStartData(data)) {
            this.dispatchEvent('RemoteUploadStart', {
                uploadId: data.uploadId,
            });
            this.notifyActivityStarted();
        }
        else if (isRemoteUploadProgressData(data)) {
            this.dispatchEvent('RemoteUploadProgress', {
                uploadId: data.uploadId,
                bytes: data.currentAmount,
                fileSize: data.totalAmount,
            });
        }
        else if (isRemoteUploadEndData(data)) {
            this.dispatchEvent('RemoteUploadEnd', {
                fileId: data.fileId,
                uploadId: data.uploadId,
            });
            this.notifyActivityCompleted();
        }
        else if (isRemoteUploadErrorData(data)) {
            this.dispatchEvent('RemoteUploadFail', {
                // First try to use alternative response shape
                // Will be removed after backend unifies response schema
                uploadId: (data.data && data.data.uploadId) || data.uploadId,
                description: (data.data && data.data.reason) || data.reason,
            });
            this.notifyActivityCompleted();
        }
        else if (isNotifyMetadata(data)) {
            this.dispatchEvent('NotifyMetadata', {
                uploadId: data.uploadId,
                metadata: data.metadata,
            });
        }
    };
    RemoteUploadActivity.prototype.connectionLost = function () {
        if (this.uploadId) {
            this.dispatchEvent('RemoteUploadFail', {
                uploadId: this.uploadId,
                description: 'Websocket connection lost',
            });
        }
    };
    RemoteUploadActivity.prototype.on = function (event, handler) {
        this.eventEmitter.on(event, handler);
    };
    RemoteUploadActivity.prototype.off = function (event, handler) {
        this.eventEmitter.off(event, handler);
    };
    RemoteUploadActivity.prototype.shouldProcessWsData = function (data) {
        var shouldProcess = !!(data.uploadId &&
            this.uploadId &&
            data.uploadId === this.uploadId);
        // Try to use alternative response shape
        // Will be removed after backend unifies response schema
        var shouldProcessAlt = !!(data.data &&
            data.data.uploadId &&
            this.uploadId &&
            data.data.uploadId === this.uploadId);
        return shouldProcess || shouldProcessAlt;
    };
    RemoteUploadActivity.prototype.notifyActivityStarted = function () {
        this.eventEmitter.emit('Started', this);
    };
    RemoteUploadActivity.prototype.notifyActivityCompleted = function () {
        this.eventEmitter.emit('Completed', this);
    };
    return RemoteUploadActivity;
}());

//# sourceMappingURL=remoteUploadActivity.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/domain/file.js
function copyMediaFileForUpload(_a, fileId) {
    var name = _a.name, size = _a.size, creationDate = _a.creationDate, type = _a.type, upfrontId = _a.upfrontId, userUpfrontId = _a.userUpfrontId, occurrenceKey = _a.occurrenceKey, userOccurrenceKey = _a.userOccurrenceKey;
    // We dont' use spread here because user upload events are not sanitized
    return {
        id: fileId,
        name: name,
        size: size,
        creationDate: creationDate,
        type: type,
        upfrontId: upfrontId,
        userUpfrontId: userUpfrontId,
        occurrenceKey: occurrenceKey,
        userOccurrenceKey: userOccurrenceKey,
    };
}
//# sourceMappingURL=file.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/actions/sendUploadEvent.js
var SEND_UPLOAD_EVENT = 'SEND_UPLOAD_EVENT';
function isSendUploadEventAction(action) {
    return action.type === SEND_UPLOAD_EVENT;
}
function sendUploadEvent(payload) {
    return {
        type: SEND_UPLOAD_EVENT,
        payload: payload,
    };
}
//# sourceMappingURL=sendUploadEvent.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/domain/preview.js
var domain_preview = __webpack_require__(404);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/importFiles.js
var importFiles_this = undefined;


















var isRemoteFileItem = function (item) {
    return ['dropbox', 'google', 'giphy'].indexOf(item.serviceName) !== -1;
};
var isRemoteService = function (serviceName) {
    return ['dropbox', 'google', 'giphy'].indexOf(serviceName) !== -1;
};
var mapSelectedItemToSelectedUploadFile = function (_a, collection) {
    var id = _a.id, name = _a.name, mimeType = _a.mimeType, size = _a.size, date = _a.date, serviceName = _a.serviceName, accountId = _a.accountId, upfrontId = _a.upfrontId, _b = _a.occurrenceKey, occurrenceKey = _b === void 0 ? v4_default()() : _b;
    return ({
        file: {
            id: id,
            name: name,
            size: size,
            creationDate: date || Date.now(),
            type: mimeType,
            upfrontId: upfrontId,
            occurrenceKey: occurrenceKey,
        },
        serviceName: serviceName,
        accountId: accountId,
        touchFileDescriptor: {
            fileId: v4_default()(),
            occurrenceKey: occurrenceKey,
            collection: collection,
        },
    });
};
function importFilesMiddleware(eventEmitter, wsProvider) {
    return function (store) { return function (next) { return function (action) {
        if (isStartImportAction(action)) {
            importFiles(eventEmitter, store, wsProvider);
        }
        return next(action);
    }; }; };
}
var getPreviewByService = function (store, serviceName, mediaType, fileId) {
    var _a = store.getState(), userMediaClient = _a.userMediaClient, giphy = _a.giphy;
    if (serviceName === 'giphy') {
        var selectedGiphy = giphy.imageCardModels.find(function (cardModel) { return cardModel.metadata.id === fileId; });
        if (selectedGiphy) {
            return {
                value: selectedGiphy.dataURI,
            };
        }
    }
    else if (serviceName === 'upload') {
        var observable_1 = Object(file_streams_cache["b" /* getFileStreamsCache */])().get(fileId);
        if (observable_1) {
            return new Promise(function (resolve) {
                var subscription = observable_1.subscribe({
                    next: function (state) {
                        if (state.status !== 'error') {
                            setTimeout(function () { return subscription.unsubscribe(); }, 0);
                            resolve(state.preview);
                        }
                    },
                });
            });
        }
    }
    else if (serviceName === 'recent_files' && Object(media["a" /* isPreviewableType */])(mediaType)) {
        return new Promise(function (resolve) { return tslib_es6["__awaiter"](importFiles_this, void 0, void 0, function () {
            var blob;
            return tslib_es6["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userMediaClient.getImage(fileId, {
                            collection: popup_config["a" /* RECENTS_COLLECTION */],
                            width: 1920,
                            height: 1080,
                            mode: 'fit',
                        })];
                    case 1:
                        blob = _a.sent();
                        resolve({ value: blob });
                        return [2 /*return*/];
                }
            });
        }); });
    }
    return undefined;
};
var touchSelectedFiles = function (selectedUploadFiles, store) {
    if (selectedUploadFiles.length === 0) {
        return;
    }
    var _a = store.getState(), tenantMediaClient = _a.tenantMediaClient, config = _a.config;
    var tenantCollection = config.uploadParams && config.uploadParams.collection;
    selectedUploadFiles.forEach(function (_a) {
        var selectedFile = _a.file, serviceName = _a.serviceName, touchFileDescriptor = _a.touchFileDescriptor;
        var id = touchFileDescriptor.fileId;
        var selectedFileId = selectedFile.id;
        var mediaType = Object(getMediaTypeFromMimeType["a" /* getMediaTypeFromMimeType */])(selectedFile.type);
        var preview = getPreviewByService(store, serviceName, mediaType, selectedFile.id);
        var fileState = {
            id: id,
            status: 'processing',
            mediaType: mediaType,
            mimeType: selectedFile.type,
            name: selectedFile.name,
            size: selectedFile.size,
            preview: preview,
            representations: {},
        };
        tenantMediaClient.emit('file-added', fileState);
        globalMediaEventEmitter["a" /* globalMediaEventEmitter */].emit('file-added', fileState);
        var existingFileState = Object(file_streams_cache["b" /* getFileStreamsCache */])().get(selectedFileId);
        // if we already have a fileState in the cache, we re use it for the new id, otherwise we create a new one
        if (existingFileState) {
            // We assign the tenant id to the observable to not emit user id instead
            var tenantFile = existingFileState.pipe(Object(map["map"])(function (file) { return (tslib_es6["__assign"]({}, file, { id: id, preview: fileState.preview })); }));
            Object(file_streams_cache["b" /* getFileStreamsCache */])().set(id, tenantFile);
        }
        else {
            var subject = new ReplaySubject["ReplaySubject"](1);
            subject.next(fileState);
            Object(file_streams_cache["b" /* getFileStreamsCache */])().set(id, subject);
        }
    });
    var touchFileDescriptors = selectedUploadFiles.map(function (selectedUploadFile) { return selectedUploadFile.touchFileDescriptor; });
    tenantMediaClient.file.touchFiles(touchFileDescriptors, tenantCollection);
};
function importFiles(eventEmitter, store, wsProvider) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var _a, uploads, selectedItems, userMediaClient, config, tenantCollection, auth, selectedUploadFiles;
        return tslib_es6["__generator"](this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = store.getState(), uploads = _a.uploads, selectedItems = _a.selectedItems, userMediaClient = _a.userMediaClient, config = _a.config;
                    tenantCollection = config.uploadParams && config.uploadParams.collection;
                    store.dispatch(hidePopup());
                    return [4 /*yield*/, userMediaClient.config.authProvider()];
                case 1:
                    auth = _b.sent();
                    selectedUploadFiles = selectedItems.map(function (item) {
                        return mapSelectedItemToSelectedUploadFile(item, tenantCollection);
                    });
                    touchSelectedFiles(selectedUploadFiles, store);
                    eventEmitter.emitUploadsStart(selectedUploadFiles.map(function (_a) {
                        var file = _a.file, touchFileDescriptor = _a.touchFileDescriptor;
                        return copyMediaFileForUpload(file, touchFileDescriptor.fileId);
                    }));
                    selectedUploadFiles.forEach(function (selectedUploadFile) {
                        var file = selectedUploadFile.file, serviceName = selectedUploadFile.serviceName, touchFileDescriptor = selectedUploadFile.touchFileDescriptor;
                        var selectedItemId = file.id;
                        if (serviceName === 'upload') {
                            var localUpload = uploads[selectedItemId];
                            var fileId = touchFileDescriptor.fileId;
                            importFilesFromLocalUpload(selectedItemId, fileId, store, localUpload, fileId);
                        }
                        else if (serviceName === 'recent_files') {
                            importFilesFromRecentFiles(selectedUploadFile, store);
                        }
                        else if (isRemoteService(serviceName)) {
                            var wsConnectionHolder = wsProvider.getWsConnectionHolder(auth);
                            importFilesFromRemoteService(selectedUploadFile, store, wsConnectionHolder);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
var importFilesFromLocalUpload = function (selectedItemId, uploadId, store, localUpload, replaceFileId) {
    localUpload.events.forEach(function (originalEvent) {
        var event = tslib_es6["__assign"]({}, originalEvent);
        if (event.name === 'upload-processing') {
            var file = event.data.file;
            var source = {
                id: file.id,
                collection: popup_config["a" /* RECENTS_COLLECTION */],
            };
            store.dispatch(finalizeUpload(file, uploadId, source, replaceFileId));
        }
        else if (event.name !== 'upload-end') {
            store.dispatch(sendUploadEvent({ event: event, uploadId: uploadId }));
        }
    });
    store.dispatch(setEventProxy_setEventProxy(selectedItemId, uploadId));
};
var importFilesFromRecentFiles = function (selectedUploadFile, store) {
    var file = selectedUploadFile.file, touchFileDescriptor = selectedUploadFile.touchFileDescriptor;
    var fileId = touchFileDescriptor.fileId;
    var source = {
        id: file.id,
        collection: popup_config["a" /* RECENTS_COLLECTION */],
    };
    store.dispatch(finalizeUpload(file, fileId, source, fileId));
    store.dispatch(getPreview(fileId, file, popup_config["a" /* RECENTS_COLLECTION */]));
};
var importFilesFromRemoteService = function (selectedUploadFile, store, wsConnectionHolder) {
    var touchFileDescriptor = selectedUploadFile.touchFileDescriptor, serviceName = selectedUploadFile.serviceName, accountId = selectedUploadFile.accountId, file = selectedUploadFile.file;
    var fileId = touchFileDescriptor.fileId;
    var deferredIdUpfronts = store.getState().deferredIdUpfronts;
    var deferred = deferredIdUpfronts[file.id];
    if (deferred) {
        var rejecter = deferred.rejecter, resolver = deferred.resolver;
        // We asociate the temporary file.id with the uploadId
        store.dispatch(setUpfrontIdDeferred_setUpfrontIdDeferred(fileId, resolver, rejecter));
    }
    var uploadActivity = new remoteUploadActivity_RemoteUploadActivity(fileId, function (event, payload) {
        if (event === 'NotifyMetadata') {
            var preview = Object(domain_preview["a" /* getPreviewFromMetadata */])(payload.metadata);
            store.dispatch(sendUploadEvent({
                event: {
                    name: 'upload-preview-update',
                    data: {
                        file: file,
                        preview: preview,
                    },
                },
                uploadId: fileId,
            }));
        }
        else {
            // TODO figure out the difference between this uploadId and the last MSW-405
            var newUploadId = payload.uploadId;
            var newFile = tslib_es6["__assign"]({}, file, { id: newUploadId, creationDate: Date.now() });
            store.dispatch(handleCloudFetchingEvent(newFile, event, payload));
        }
    });
    uploadActivity.on('Started', function () {
        store.dispatch(remoteUploadStart(fileId));
    });
    wsConnectionHolder.openConnection(uploadActivity);
    wsConnectionHolder.send({
        type: 'fetchFile',
        params: {
            serviceName: serviceName,
            accountId: accountId,
            fileId: file.id,
            fileName: file.name,
            collection: popup_config["a" /* RECENTS_COLLECTION */],
            jobId: fileId,
        },
    });
};
//# sourceMappingURL=importFiles.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/startAuth.js


var startCloudAccountOAuthFlow = function (fetcher, cloudService) { return function (store) { return function (next) { return function (action) {
    if (action.type === START_AUTH) {
        var _a = store.getState(), redirectUrl = _a.redirectUrl, userMediaClient_1 = _a.userMediaClient;
        var serviceName_1 = action.serviceName;
        var accounts = cloudService
            .startAuth(redirectUrl, serviceName_1)
            .then(function () { return userMediaClient_1.config.authProvider(); })
            .then(function (auth) { return fetcher.getServiceList(auth); });
        store.dispatch(updateServiceList(accounts));
        accounts.then(function (accounts) {
            var selectedAccount = accounts.find(function (account) { return account.type === serviceName_1; });
            if (selectedAccount) {
                store.dispatch(changeAccount(serviceName_1, selectedAccount.id));
            }
        });
    }
    return next(action);
}; }; }; };
//# sourceMappingURL=startAuth.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/unlinkCloudAccount.js

/* harmony default export */ var middleware_unlinkCloudAccount = (function (fetcher) { return function (store) { return function (next) { return function (action) {
    if (action.type === REQUEST_UNLINK_CLOUD_ACCOUNT) {
        var userMediaClient = store.getState().userMediaClient;
        userMediaClient.config
            .authProvider()
            .then(function (auth) { return fetcher.unlinkCloudAccount(auth, action.account.id); })
            .then(function () {
            store.dispatch(unlinkCloudAccount(action.account));
            store.dispatch(changeService(action.account.name));
        });
    }
    return next(action);
}; }; }; });
//# sourceMappingURL=unlinkCloudAccount.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/tools/uploadHasProxy.js
var uploadHasProxy = function (upload) {
    return Array.isArray(upload.proxy);
};
//# sourceMappingURL=uploadHasProxy.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/proxyUploadEvents.js





var proxyUploadEvents = function (store) { return function (next) { return function (action) {
    if ([
        'FILE_PREVIEW_UPDATE',
        'FILE_UPLOAD_PROGRESS',
        'FILE_UPLOAD_PROCESSING_START',
        'FILE_UPLOAD_END',
        'FILE_UPLOAD_ERROR',
    ].indexOf(action.type) > -1) {
        var uploads = store.getState().uploads;
        var file = action.file, originalEvent = action.originalEvent;
        if (file) {
            var upload = uploads[file.id];
            if (upload && upload.proxy && uploadHasProxy(upload)) {
                var event_1 = tslib_es6["__assign"]({}, originalEvent);
                upload.proxy.forEach(function (uploadId) {
                    if (event_1.name === 'upload-processing') {
                        var localFile = event_1.data.file;
                        var source = {
                            id: localFile.id,
                            collection: popup_config["a" /* RECENTS_COLLECTION */],
                        };
                        store.dispatch(finalizeUpload(localFile, uploadId, source, uploadId));
                    }
                    else if (event_1.name !== 'upload-end') {
                        // TODO: MSW-376 upload-status-update events from the user has a public Id that should be sanitized here.
                        store.dispatch(sendUploadEvent({ event: event_1, uploadId: uploadId }));
                    }
                });
            }
        }
    }
    return next(action);
}; }; };
//# sourceMappingURL=proxyUploadEvents.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/cancelUpload.js


/* harmony default export */ var middleware_cancelUpload = (function (store) { return function (next) { return function (action) {
    if (isCancelUploadAction(action)) {
        var tenantUploadId_1 = action.payload.tenantUploadId;
        var _a = store.getState(), uploads_1 = _a.uploads, onCancelUpload_1 = _a.onCancelUpload;
        var shouldRemoveEventProxy_1 = function (proxy) {
            return proxy.some(function (proxyId) { return proxyId === tenantUploadId_1; });
        };
        Object.keys(uploads_1)
            .map(function (uploadId) {
            var upload = uploads_1[uploadId];
            var proxy = (upload && upload.proxy) || [];
            return {
                uploadId: uploadId,
                proxy: proxy,
            };
        })
            .filter(function (_a) {
            var proxy = _a.proxy;
            return shouldRemoveEventProxy_1(proxy);
        })
            .forEach(function (_a) {
            var uploadId = _a.uploadId, proxy = _a.proxy;
            store.dispatch(removeEventProxy({
                uploadId: uploadId,
                proxyId: tenantUploadId_1,
            }));
            if (proxy.length === 1) {
                onCancelUpload_1(uploadId);
            }
        });
    }
    return next(action);
}; }; });
//# sourceMappingURL=cancelUpload.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/editRemoteImage.js





// When we complete upload, we need to check if we can open the editor.
// What can be changed:
// 1) The user pressed ESC and the editor shouldn't appear. In this case state.editorData will be null.
// 2) The user has chosen another image to edit. In this case state.editorData.originalFile.id will be different.
//
// We continue with the uploaded image only if:
// - the file is the same
// - state.imageUrl is not defined (the editor is not open)
var continueRenderingEditor = function (id, store) {
    var editorData = store.getState().editorData;
    if (!editorData) {
        return false;
    }
    var originalFile = editorData.originalFile, imageUrl = editorData.imageUrl;
    if (originalFile) {
        return originalFile.id === id && !imageUrl;
    }
    else {
        return false;
    }
};
var editRemoteImageMiddleware = function () { return function (store) { return function (next) { return function (action) {
    if (action.type === EDIT_REMOTE_IMAGE) {
        editRemoteImage_editRemoteImage(store, action);
    }
    return next(action);
}; }; }; };
function editRemoteImage_editRemoteImage(store, action) {
    var item = action.item, collectionName = action.collectionName;
    var userMediaClient = store.getState().userMediaClient;
    store.dispatch(editorShowLoading(item));
    return userMediaClient
        .getImageUrl(item.id, {
        mode: 'full-fit',
        collection: collectionName,
    })
        .then(function (imageUrl) {
        if (continueRenderingEditor(item.id, store)) {
            store.dispatch(editorShowImage(imageUrl));
        }
    })
        .catch(function () {
        if (continueRenderingEditor(item.id, store)) {
            var retryHandler = function () {
                store.dispatch(action);
            };
            store.dispatch(editorShowError(couldNotLoadImage, retryHandler));
        }
    });
}
//# sourceMappingURL=editRemoteImage.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/popup/domain/source-file.js
var source_file = __webpack_require__(994);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/finalizeUpload.js






/* harmony default export */ var middleware_finalizeUpload = (function (fetcher) {
    return function (store) { return function (next) { return function (action) {
        if (isFinalizeUploadAction(action)) {
            finalizeUpload_finalizeUpload(fetcher, store, action);
        }
        return next(action);
    }; }; };
});
function finalizeUpload_finalizeUpload(fetcher, store, _a) {
    var file = _a.file, uploadId = _a.uploadId, source = _a.source, replaceFileId = _a.replaceFileId;
    var userMediaClient = store.getState().userMediaClient;
    return userMediaClient.config
        .authProvider()
        .then(source_file["a" /* mapAuthToSourceFileOwner */])
        .then(function (owner) {
        var sourceFile = tslib_es6["__assign"]({}, source, { owner: owner });
        var copyFileParams = {
            store: store,
            fetcher: fetcher,
            file: file,
            uploadId: uploadId,
            sourceFile: sourceFile,
            replaceFileId: replaceFileId,
        };
        return copyFile(copyFileParams);
    });
}
function copyFile(_a) {
    var store = _a.store, fetcher = _a.fetcher, file = _a.file, uploadId = _a.uploadId, sourceFile = _a.sourceFile, replaceFileId = _a.replaceFileId;
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var _b, deferredIdUpfronts, tenantMediaClient, config, collection, deferred, mediaStore, body, params, _c, _d;
        var _this = this;
        return tslib_es6["__generator"](this, function (_e) {
            switch (_e.label) {
                case 0:
                    _b = store.getState(), deferredIdUpfronts = _b.deferredIdUpfronts, tenantMediaClient = _b.tenantMediaClient, config = _b.config;
                    collection = config.uploadParams && config.uploadParams.collection;
                    deferred = deferredIdUpfronts[sourceFile.id];
                    mediaStore = new media_store["a" /* MediaStore */]({
                        authProvider: tenantMediaClient.config.authProvider,
                    });
                    body = {
                        sourceFile: sourceFile,
                    };
                    _c = {
                        collection: collection
                    };
                    if (!replaceFileId) return [3 /*break*/, 2];
                    return [4 /*yield*/, replaceFileId];
                case 1:
                    _d = _e.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _d = undefined;
                    _e.label = 3;
                case 3:
                    params = (_c.replaceFileId = _d,
                        _c.occurrenceKey = file.occurrenceKey,
                        _c);
                    return [2 /*return*/, mediaStore
                            .copyFileWithToken(body, params)
                            .then(function (destinationFile) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
                            var publicId, resolver, auth;
                            return tslib_es6["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        publicId = destinationFile.data.id;
                                        if (deferred) {
                                            resolver = deferred.resolver;
                                            resolver(publicId);
                                        }
                                        store.dispatch(sendUploadEvent({
                                            event: {
                                                name: 'upload-processing',
                                                data: {
                                                    file: file,
                                                },
                                            },
                                            uploadId: uploadId,
                                        }));
                                        return [4 /*yield*/, tenantMediaClient.config.authProvider({
                                                collectionName: collection,
                                            })];
                                    case 1:
                                        auth = _a.sent();
                                        // TODO [MS-725]: replace by context.getFile
                                        return [2 /*return*/, fetcher.pollFile(auth, publicId, collection)];
                                }
                            });
                        }); })
                            .then(function (processedDestinationFile) {
                            var subject = Object(file_streams_cache["b" /* getFileStreamsCache */])().get(processedDestinationFile.id);
                            // We need to cast to ReplaySubject and check for "next" method since the current
                            if (subject && subject.next) {
                                var subscription_1 = subject.subscribe({
                                    next: function (currentState) {
                                        setTimeout(function () { return subscription_1.unsubscribe(); }, 0);
                                        setTimeout(function () {
                                            var artifacts = processedDestinationFile.artifacts, mediaType = processedDestinationFile.mediaType, mimeType = processedDestinationFile.mimeType, name = processedDestinationFile.name, size = processedDestinationFile.size, representations = processedDestinationFile.representations;
                                            subject.next(tslib_es6["__assign"]({}, currentState, { status: 'processed', artifacts: artifacts,
                                                mediaType: mediaType,
                                                mimeType: mimeType,
                                                name: name,
                                                size: size,
                                                representations: representations }));
                                        }, 0);
                                    },
                                });
                            }
                            return store.dispatch(sendUploadEvent({
                                event: {
                                    name: 'upload-end',
                                    data: {
                                        file: file,
                                        public: processedDestinationFile,
                                    },
                                },
                                uploadId: uploadId,
                            }));
                        })
                            .catch(function (error) {
                            if (deferred) {
                                var rejecter = deferred.rejecter;
                                rejecter();
                            }
                            return store.dispatch(sendUploadEvent({
                                event: {
                                    name: 'upload-error',
                                    data: {
                                        file: file,
                                        error: {
                                            name: 'object_create_fail',
                                            description: error.message,
                                        },
                                    },
                                },
                                uploadId: uploadId,
                            }));
                        })];
            }
        });
    });
}
//# sourceMappingURL=finalizeUpload.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/getPreview.js




/* harmony default export */ var middleware_getPreview = (function () {
    return function (store) { return function (next) { return function (action) {
        if (isGetPreviewAction(action)) {
            getPreview_getPreview(store, action);
        }
        return next(action);
    }; }; };
});
var dispatchPreviewUpdate = function (store, _a, preview) {
    var uploadId = _a.uploadId, file = _a.file;
    store.dispatch(sendUploadEvent({
        event: {
            name: 'upload-preview-update',
            data: {
                file: file,
                preview: preview,
            },
        },
        uploadId: uploadId,
    }));
};
function getPreview_getPreview(store, action) {
    var file = action.file, collection = action.collection;
    var userMediaClient = store.getState().userMediaClient;
    var subscription = userMediaClient.file
        .getFileState(file.id, { collectionName: collection })
        .subscribe({
        next: function (state) {
            return tslib_es6["__awaiter"](this, void 0, void 0, function () {
                var mediaType, metadata, preview, blob, _a, preview;
                return tslib_es6["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (state.status === 'error') {
                                return [2 /*return*/];
                            }
                            mediaType = state.mediaType;
                            // We need to wait for the next tick since rxjs might call "next" before returning from "subscribe"
                            window.setTimeout(function () { return subscription.unsubscribe(); });
                            if (!(mediaType === 'image' || mediaType === 'video')) return [3 /*break*/, 2];
                            return [4 /*yield*/, userMediaClient.getImageMetadata(file.id, {
                                    collection: collection,
                                })];
                        case 1:
                            metadata = _b.sent();
                            preview = Object(domain_preview["a" /* getPreviewFromMetadata */])(metadata);
                            dispatchPreviewUpdate(store, action, preview);
                            return [3 /*break*/, 5];
                        case 2:
                            _a = state.preview;
                            if (!_a) return [3 /*break*/, 4];
                            return [4 /*yield*/, state.preview];
                        case 3:
                            _a = (_b.sent());
                            _b.label = 4;
                        case 4:
                            blob = _a;
                            preview = {
                                file: state.preview && blob instanceof Blob ? blob : undefined,
                            };
                            dispatchPreviewUpdate(store, action, preview);
                            _b.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        },
    });
}
//# sourceMappingURL=getPreview.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/domain/progress.js
var domain_progress = __webpack_require__(995);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/handleCloudFetchingEvent.js







var isCloudFetchingEventAction = function (action) {
    return action.type === HANDLE_CLOUD_FETCHING_EVENT;
};
var isRemoteUploadProgressAction = function (action) {
    return action.event === 'RemoteUploadProgress';
};
var isRemoteUploadEndAction = function (action) {
    return action.event === 'RemoteUploadEnd';
};
var isRemoteUploadFailAction = function (action) {
    return action.event === 'RemoteUploadFail';
};
var handleCloudFetchingEvent_handleCloudFetchingEvent = function (store) { return function (next) { return function (action) {
    // Handle cloud upload progress
    var handleRemoteUploadProgressMessage = function (file, data) {
        var portion = data.bytes / data.fileSize;
        var progress = new domain_progress["a" /* SmartMediaProgress */](file.size, file.size * portion, file.creationDate, Date.now());
        store.dispatch(sendUploadEvent({
            event: {
                name: 'upload-status-update',
                data: {
                    file: file,
                    progress: progress.toJSON(),
                },
            },
            uploadId: data.uploadId,
        }));
    };
    // Handle cloud upload end
    var handleRemoteUploadEndMessage = function (file, data) {
        var deferredIdUpfronts = store.getState().deferredIdUpfronts;
        var uploadId = data.uploadId, fileId = data.fileId;
        var deferred = deferredIdUpfronts[uploadId];
        var source = {
            id: fileId,
            collection: popup_config["a" /* RECENTS_COLLECTION */],
        };
        var uploadedFile = tslib_es6["__assign"]({}, file, { id: fileId });
        if (deferred) {
            var rejecter = deferred.rejecter, resolver = deferred.resolver;
            // We asociate the uploadId with the public fileId on the user collection
            store.dispatch(setUpfrontIdDeferred_setUpfrontIdDeferred(fileId, resolver, rejecter));
        }
        store.dispatch(finalizeUpload(uploadedFile, uploadId, source, file.id));
    };
    // Handle cloud upload fail
    var handleRemoteUploadFailMessage = function (file, data) {
        store.dispatch(sendUploadEvent({
            event: {
                name: 'upload-error',
                data: {
                    file: file,
                    error: {
                        fileId: data.uploadId,
                        name: 'remote_upload_fail',
                        description: data.description,
                    },
                },
            },
            uploadId: data.uploadId,
        }));
    };
    if (isCloudFetchingEventAction(action)) {
        if (isRemoteUploadProgressAction(action)) {
            handleRemoteUploadProgressMessage(action.file, action.payload);
        }
        else if (isRemoteUploadEndAction(action)) {
            handleRemoteUploadEndMessage(action.file, action.payload);
        }
        else if (isRemoteUploadFailAction(action)) {
            handleRemoteUploadFailMessage(action.file, action.payload);
        }
    }
    return next(action);
}; }; };
//# sourceMappingURL=handleCloudFetchingEvent.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/searchGiphy.js
var searchGiphy_this = undefined;


/* harmony default export */ var middleware_searchGiphy = (function (fetcher) { return function (store) { return function (next) { return function (action) {
    if (isSearchGiphyAction(action)) {
        var query = action.query, shouldAppendResults = action.shouldAppendResults;
        var imageCardModels = store.getState().giphy.imageCardModels;
        var offset = shouldAppendResults ? imageCardModels.length + 1 : undefined;
        fetchGifs(fetcher, store, { query: query, offset: offset, shouldAppendResults: shouldAppendResults });
    }
    return next(action);
}; }; }; });
var fetchGifs = function (fetcher, store, params) { return tslib_es6["__awaiter"](searchGiphy_this, void 0, void 0, function () {
    var query, offset, shouldAppendResults, _a, cardModels, totalResultCount, _b, e_1;
    return tslib_es6["__generator"](this, function (_c) {
        switch (_c.label) {
            case 0:
                query = params.query, offset = params.offset, shouldAppendResults = params.shouldAppendResults;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 6, , 7]);
                if (!(query.length > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, fetcher.fetchGifsRelevantToSearch(query, offset)];
            case 2:
                _b = _c.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, fetcher.fetchTrendingGifs(offset)];
            case 4:
                _b = _c.sent();
                _c.label = 5;
            case 5:
                _a = _b, cardModels = _a.cardModels, totalResultCount = _a.totalResultCount;
                store.dispatch(searchGiphyFulfilled(cardModels, totalResultCount, shouldAppendResults));
                return [3 /*break*/, 7];
            case 6:
                e_1 = _c.sent();
                store.dispatch(searchGiphyFailed());
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=searchGiphy.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/hidePopup.js

/* harmony default export */ var middleware_hidePopup = (function (eventEmitter) { return function (_) { return function (next) { return function (action) {
    if (isHidePopupAction(action)) {
        eventEmitter.emitClosed();
    }
    return next(action);
}; }; }; });
//# sourceMappingURL=hidePopup.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/util/handleError.js
var handleError = __webpack_require__(996);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/sendUploadEvent.js



/* harmony default export */ var middleware_sendUploadEvent = (function (eventEmitter) {
    return function () { return function (next) { return function (action) {
        if (isSendUploadEventAction(action)) {
            var _a = action.payload, event_1 = _a.event, uploadId = _a.uploadId;
            switch (event_1.name) {
                case 'upload-status-update': {
                    var file = copyMediaFileForUpload(event_1.data.file, uploadId);
                    eventEmitter.emitUploadProgress(file, event_1.data.progress);
                    break;
                }
                case 'upload-preview-update': {
                    var preview = event_1.data.preview;
                    var file = copyMediaFileForUpload(event_1.data.file, uploadId);
                    eventEmitter.emitUploadPreviewUpdate(file, preview);
                    break;
                }
                case 'upload-processing': {
                    var file = copyMediaFileForUpload(event_1.data.file, uploadId);
                    eventEmitter.emitUploadProcessing(file);
                    break;
                }
                case 'upload-end': {
                    var file = copyMediaFileForUpload(event_1.data.file, uploadId);
                    eventEmitter.emitUploadEnd(file, event_1.data.public);
                    break;
                }
                case 'upload-error': {
                    var file = copyMediaFileForUpload(event_1.data.file, uploadId);
                    var error = event_1.data.error;
                    eventEmitter.emitUploadError(file, error);
                    Object(handleError["a" /* handleError */])(error.name, error.description);
                    break;
                }
            }
        }
        return next(action);
    }; }; };
});
//# sourceMappingURL=sendUploadEvent.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/UIAnalyticsEvent.js + 1 modules
var UIAnalyticsEvent = __webpack_require__(374);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/version.json
var media_picker_version = __webpack_require__(1071);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-gas-types/index.js
var analytics_gas_types = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/fileUploadEndHandler.js


/* harmony default export */ var fileUploadEndHandler = (function (action, store) {
    if (isFileUploadEndAction(action)) {
        var file = action.file, publicFile = action.publicFile;
        var timeStarted = store.getState().uploads[file.id].timeStarted;
        return [
            {
                action: 'uploaded',
                actionSubject: 'mediaUpload',
                actionSubjectId: 'localMedia',
                attributes: {
                    fileAttributes: {
                        fileMediatype: publicFile.mediaType,
                        fileState: publicFile.processingStatus,
                        fileStatus: publicFile.artifacts &&
                            Object.keys(publicFile.artifacts).length > 0
                            ? 'original'
                            : 'converted',
                        fileSize: publicFile.size,
                        fileMimetype: publicFile.mimeType,
                        fileSource: 'mediapicker',
                    },
                    status: 'success',
                    uploadDurationMsec: timeStarted !== undefined ? Date.now() - timeStarted : -1,
                },
                eventType: analytics_gas_types["d" /* TRACK_EVENT_TYPE */],
            },
        ];
    }
});
//# sourceMappingURL=fileUploadEndHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/fileUploadErrorHandler.js


/* harmony default export */ var fileUploadErrorHandler = (function (action, store) {
    if (isFileUploadErrorAction(action)) {
        var uploadFile = action.file;
        var currentUploads = store.getState().uploads;
        var timeStarted = currentUploads[uploadFile.id].timeStarted;
        return [
            {
                action: 'uploaded',
                actionSubject: 'mediaUpload',
                actionSubjectId: 'localMedia',
                attributes: {
                    fileAttributes: {
                        fileSize: uploadFile.size,
                        fileSource: 'mediapicker',
                    },
                    status: 'fail',
                    failReason: action.error.description,
                    uploadDurationMsec: timeStarted !== undefined ? Date.now() - timeStarted : -1,
                },
                eventType: analytics_gas_types["d" /* TRACK_EVENT_TYPE */],
            },
        ];
    }
});
//# sourceMappingURL=fileUploadErrorHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/fileUploadsStartHandler.js


/* harmony default export */ var fileUploadsStartHandler = (function (action) {
    if (isFileUploadsStartAction(action)) {
        return action.files.map(function (file) {
            return ({
                action: 'commenced',
                actionSubject: 'mediaUpload',
                actionSubjectId: 'localMedia',
                attributes: {
                    fileAttributes: {
                        fileSize: file.size,
                        fileMimetype: file.type,
                        fileSource: 'mediapicker',
                    },
                },
                eventType: analytics_gas_types["b" /* OPERATIONAL_EVENT_TYPE */],
            });
        });
    }
});
//# sourceMappingURL=fileUploadsStartHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/handleCloudFetchingEventHandler.js



var commonPayload = {
    actionSubject: 'mediaUpload',
    actionSubjectId: 'cloudMedia',
};
var fileAttributes = function (file) { return ({
    fileSize: file.size,
    fileMimetype: file.type,
    fileSource: 'mediapicker',
}); };
/* harmony default export */ var handleCloudFetchingEventHandler = (function (action, store) {
    if (isHandleCloudFetchingEventAction(action)) {
        var event_1 = action.event, payload = action.payload, file = action.file;
        var remoteUpload = store.getState().remoteUploads[payload.uploadId];
        var timeStarted = (remoteUpload || { timeStarted: undefined }).timeStarted;
        var uploadDurationMsec = timeStarted !== undefined ? Date.now() - timeStarted : -1;
        if (event_1 === 'RemoteUploadStart') {
            return [
                tslib_es6["__assign"]({ action: 'commenced' }, commonPayload, { attributes: {
                        fileAttributes: fileAttributes(file),
                    }, eventType: analytics_gas_types["b" /* OPERATIONAL_EVENT_TYPE */] }),
            ];
        }
        else if (event_1 === 'RemoteUploadEnd') {
            return [
                tslib_es6["__assign"]({ action: 'uploaded' }, commonPayload, { attributes: {
                        fileAttributes: fileAttributes(file),
                        status: 'success',
                        uploadDurationMsec: uploadDurationMsec,
                    }, eventType: analytics_gas_types["d" /* TRACK_EVENT_TYPE */] }),
            ];
        }
        else if (event_1 === 'RemoteUploadFail') {
            return [
                tslib_es6["__assign"]({ action: 'uploaded' }, commonPayload, { attributes: {
                        fileAttributes: fileAttributes(file),
                        status: 'fail',
                        uploadDurationMsec: uploadDurationMsec,
                    }, eventType: analytics_gas_types["d" /* TRACK_EVENT_TYPE */] }),
            ];
        }
        else {
            return [];
        }
    }
});
//# sourceMappingURL=handleCloudFetchingEventHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/editorCloseHandler.js



/* harmony default export */ var editorCloseHandler = (function (action) {
    if (isEditorCloseAction(action)) {
        return [
            tslib_es6["__assign"]({}, buttonClickPayload, { actionSubjectId: "mediaEditor" + action.selection + "Button" }),
        ];
    }
});
//# sourceMappingURL=editorCloseHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/editRemoteImageHandler.js



/* harmony default export */ var editRemoteImageHandler = (function (action) {
    if (isEditRemoteImageAction(action)) {
        return [
            tslib_es6["__assign"]({}, buttonClickPayload, { actionSubjectId: 'annotateFileButton' }),
        ];
    }
});
//# sourceMappingURL=editRemoteImageHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/changeServiceHandler.js




/* harmony default export */ var changeServiceHandler = (function (action) {
    if (isChangeServiceAction(action)) {
        if (action.serviceName === 'upload') {
            return [
                tslib_es6["__assign"]({}, buttonClickPayload, { actionSubjectId: 'uploadButton' }),
                {
                    name: 'recentFilesBrowserModal',
                    eventType: analytics_gas_types["c" /* SCREEN_EVENT_TYPE */],
                },
            ];
        }
        else {
            return [
                tslib_es6["__assign"]({}, buttonClickPayload, { actionSubjectId: 'cloudBrowserButton', attributes: {
                        cloudType: action.serviceName,
                    } }),
            ];
        }
    }
});
//# sourceMappingURL=changeServiceHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/hidePopupHandler.js



/* harmony default export */ var hidePopupHandler = (function (action, store) {
    if (isHidePopupAction(action)) {
        return [
            tslib_es6["__assign"]({}, buttonClickPayload, { actionSubjectId: store.getState().selectedItems.length > 0
                    ? 'insertFilesButton'
                    : 'cancelButton', attributes: {
                    fileCount: store.getState().selectedItems.length,
                } }),
        ];
    }
});
//# sourceMappingURL=hidePopupHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/startAuthHandler.js



/* harmony default export */ var startAuthHandler = (function (action) {
    if (isStartAuthAction(action)) {
        return [
            tslib_es6["__assign"]({}, buttonClickPayload, { actionSubjectId: 'linkCloudAccountButton', attributes: {
                    cloudType: action.serviceName,
                } }),
        ];
    }
});
//# sourceMappingURL=startAuthHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/startFileBrowserHandler.js




/* harmony default export */ var startFileBrowserHandler = (function (action) {
    if (isStartFileBrowserAction(action)) {
        return [
            {
                name: 'localFileBrowserModal',
                eventType: analytics_gas_types["c" /* SCREEN_EVENT_TYPE */],
            },
            tslib_es6["__assign"]({}, buttonClickPayload, { actionSubjectId: 'localFileBrowserButton' }),
        ];
    }
});
//# sourceMappingURL=startFileBrowserHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/fileListUpdateHandler.js


/* harmony default export */ var fileListUpdateHandler = (function (action) {
    if (isFileListUpdateAction(action)) {
        return [
            {
                name: 'cloudBrowserModal',
                eventType: analytics_gas_types["c" /* SCREEN_EVENT_TYPE */],
                attributes: {
                    cloudType: action.serviceName,
                },
            },
        ];
    }
});
//# sourceMappingURL=fileListUpdateHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/searchGiphyHandler.js


/* harmony default export */ var searchGiphyHandler = (function (action) {
    if (isSearchGiphyAction(action)) {
        return [
            {
                name: 'cloudBrowserModal',
                eventType: analytics_gas_types["c" /* SCREEN_EVENT_TYPE */],
                attributes: {
                    cloudType: 'giphy',
                },
            },
        ];
    }
});
//# sourceMappingURL=searchGiphyHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/editorShowImageHandler.js


/* harmony default export */ var editorShowImageHandler = (function (action) {
    if (isEditorShowImageAction(action)) {
        return [
            {
                name: 'fileEditorModal',
                eventType: analytics_gas_types["c" /* SCREEN_EVENT_TYPE */],
            },
        ];
    }
});
//# sourceMappingURL=editorShowImageHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/showPopupHandler.js


/* harmony default export */ var showPopupHandler = (function (action) {
    if (isShowPopupAction(action)) {
        return [
            {
                name: 'mediaPickerModal',
                eventType: analytics_gas_types["c" /* SCREEN_EVENT_TYPE */],
            },
            {
                name: 'recentFilesBrowserModal',
                eventType: analytics_gas_types["c" /* SCREEN_EVENT_TYPE */],
            },
        ];
    }
});
//# sourceMappingURL=showPopupHandler.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsHandlers/index.js















var buttonClickPayload = {
    action: 'clicked',
    actionSubject: 'button',
    eventType: analytics_gas_types["e" /* UI_EVENT_TYPE */],
};
/* harmony default export */ var analyticsHandlers = ([
    fileUploadEndHandler,
    fileUploadErrorHandler,
    fileUploadsStartHandler,
    handleCloudFetchingEventHandler,
    editorCloseHandler,
    editRemoteImageHandler,
    changeServiceHandler,
    hidePopupHandler,
    startAuthHandler,
    startFileBrowserHandler,
    fileListUpdateHandler,
    searchGiphyHandler,
    editorShowImageHandler,
    showPopupHandler,
]);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/analyticsProcessing.js




// TODO https://product-fabric.atlassian.net/browse/MS-598
var createAndFire = function (payload, handlers) {
    new UIAnalyticsEvent["a" /* default */]({
        context: [{}],
        handlers: handlers,
        payload: tslib_es6["__assign"]({}, payload, { attributes: tslib_es6["__assign"]({}, payload.attributes, { componentName: 'mediaPicker', packageName: media_picker_version["a" /* name */], componentVersion: media_picker_version["b" /* version */] }) }),
    }).fire('media');
};
/* harmony default export */ var analyticsProcessing = (function (store) { return function (next) { return function (action) {
    var e_1, _a;
    var proxyReactContext = store.getState().config.proxyReactContext;
    if (proxyReactContext &&
        proxyReactContext.getAtlaskitAnalyticsEventHandlers) {
        var atlaskitAnalyticsEventHandlers_1 = proxyReactContext.getAtlaskitAnalyticsEventHandlers();
        try {
            for (var analyticsActionHandlers_1 = tslib_es6["__values"](analyticsHandlers), analyticsActionHandlers_1_1 = analyticsActionHandlers_1.next(); !analyticsActionHandlers_1_1.done; analyticsActionHandlers_1_1 = analyticsActionHandlers_1.next()) {
                var handler = analyticsActionHandlers_1_1.value;
                var payloads = handler(action, store) || [];
                payloads.forEach(function (payload) {
                    return createAndFire(payload, atlaskitAnalyticsEventHandlers_1);
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (analyticsActionHandlers_1_1 && !analyticsActionHandlers_1_1.done && (_a = analyticsActionHandlers_1.return)) _a.call(analyticsActionHandlers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return next(action);
}; }; });
//# sourceMappingURL=analyticsProcessing.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/popup/middleware/removeFileFromRecents.js


var middleware_removeFileFromRecents_removeFileFromRecents = function (store) { return function (next) { return function (action) {
    if (isRemoveFileFromRecentsAction(action)) {
        store
            .getState()
            .userMediaClient.collection.removeFile(action.userFileId || action.id, popup_config["a" /* RECENTS_COLLECTION */], action.occurrenceKey);
    }
    return next(action);
}; }; };
//# sourceMappingURL=removeFileFromRecents.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/store/create-store.js






























/* harmony default export */ var create_store = (function (eventEmitter, tenantMediaClient, userMediaClient, config) {
    var userAuthProvider = userMediaClient.config.authProvider;
    var redirectUrl = media_picker_config.html.redirectUrl;
    var fetcher = new fetcher_MediaApiFetcher();
    var wsProvider = new wsProvider_WsProvider();
    var cloudService = new cloud_service_CloudService(userAuthProvider);
    var partialState = tslib_es6["__assign"]({}, default_state, { redirectUrl: redirectUrl,
        tenantMediaClient: tenantMediaClient,
        userMediaClient: userMediaClient,
        config: config });
    return Object(es["createStore"])(popup_reducers_reducers, partialState, Object(developmentOnly["composeWithDevTools"])(Object(es["applyMiddleware"])(analyticsProcessing, middleware_startApp(), getFilesInRecents_getFilesInRecents(), changeService_changeService, middleware_changeAccount, changeCloudAccountFolderMiddleware(fetcher), fetchNextCloudFilesPageMiddleware(fetcher), startCloudAccountOAuthFlow(fetcher, cloudService), middleware_unlinkCloudAccount(fetcher), getConnectedRemoteAccounts_getConnectedRemoteAccounts(fetcher), middleware_cancelUpload, importFilesMiddleware(eventEmitter, wsProvider), editRemoteImageMiddleware(), middleware_getPreview(), middleware_finalizeUpload(fetcher), proxyUploadEvents, handleCloudFetchingEvent_handleCloudFetchingEvent, middleware_searchGiphy(fetcher), middleware_hidePopup(eventEmitter), middleware_sendUploadEvent(eventEmitter), middleware_removeFileFromRecents_removeFileFromRecents)));
});
//# sourceMappingURL=create-store.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/store/index.js

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/components/component.js + 1 modules
var component = __webpack_require__(950);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/domain/uploadParams.js
var defaultUploadParams = {
    collection: '',
};
//# sourceMappingURL=uploadParams.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/components/popup.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupImpl", function() { return popup_PopupImpl; });














var popup_PopupImpl = /** @class */ (function (_super) {
    tslib_es6["__extends"](PopupImpl, _super);
    function PopupImpl(tenantMediaClient, _a) {
        var _b = _a.container, container = _b === void 0 ? exenv["canUseDOM"] ? document.body : undefined : _b, uploadParams = _a.uploadParams, // tenant
        proxyReactContext = _a.proxyReactContext, singleSelect = _a.singleSelect;
        var _this = _super.call(this) || this;
        _this.tenantMediaClient = tenantMediaClient;
        _this.proxyReactContext = proxyReactContext;
        var _c = tenantMediaClient.config, userAuthProvider = _c.userAuthProvider, cacheSize = _c.cacheSize;
        if (!userAuthProvider) {
            throw new Error('When using Popup media picker userAuthProvider must be provided in the context');
        }
        var userMediaClient = new media_client["a" /* MediaClient */]({
            cacheSize: cacheSize,
            authProvider: userAuthProvider,
        });
        var tenantUploadParams = tslib_es6["__assign"]({}, defaultUploadParams, uploadParams);
        _this.store = create_store(_this, tenantMediaClient, userMediaClient, {
            proxyReactContext: proxyReactContext,
            singleSelect: singleSelect,
            uploadParams: tenantUploadParams,
        });
        _this.tenantUploadParams = tenantUploadParams;
        var popup = _this.renderPopup();
        if (!popup) {
            return _this;
        }
        _this.container = popup;
        if (container) {
            container.appendChild(popup);
        }
        return _this;
    }
    PopupImpl.prototype.show = function () {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var dispatch;
            return tslib_es6["__generator"](this, function (_a) {
                dispatch = this.store.dispatch;
                dispatch(resetView());
                dispatch(getFilesInRecents());
                dispatch(showPopup());
                return [2 /*return*/];
            });
        });
    };
    PopupImpl.prototype.cancel = function (uniqueIdentifier) {
        return tslib_es6["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return tslib_es6["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!uniqueIdentifier) {
                            return [2 /*return*/];
                        }
                        _b = (_a = this.store).dispatch;
                        _c = cancelUpload;
                        _d = {};
                        return [4 /*yield*/, uniqueIdentifier];
                    case 1:
                        _b.apply(_a, [_c.apply(void 0, [(_d.tenantUploadId = _e.sent(), _d)])]);
                        return [2 /*return*/];
                }
            });
        });
    };
    PopupImpl.prototype.teardown = function () {
        if (!this.container) {
            return;
        }
        Object(react_dom["unmountComponentAtNode"])(this.container);
        this.container.remove();
    };
    PopupImpl.prototype.hide = function () {
        this.store.dispatch(hidePopup());
    };
    PopupImpl.prototype.setUploadParams = function (uploadParams) {
        this.tenantUploadParams = tslib_es6["__assign"]({}, defaultUploadParams, uploadParams);
    };
    PopupImpl.prototype.emitClosed = function () {
        this.emit('closed', undefined);
    };
    PopupImpl.prototype.renderPopup = function () {
        if (!exenv["canUseDOM"]) {
            return;
        }
        var container = document.createElement('div');
        Object(react_dom["render"])(react["createElement"](app, { store: this.store, proxyReactContext: this.proxyReactContext, tenantUploadParams: this.tenantUploadParams }), container);
        return container;
    };
    return PopupImpl;
}(component["a" /* UploadComponent */]));

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(35);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(21);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(22);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(23);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(20);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(24);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@atlaskit/field-text/FieldTextStateless.js + 3 modules
var FieldTextStateless = __webpack_require__(836);

// CONCATENATED MODULE: ./node_modules/@atlaskit/field-text/FieldText.js











var FieldText_FieldText =
/*#__PURE__*/
function (_Component) {
  inherits_default()(FieldText, _Component);

  function FieldText() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, FieldText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(FieldText)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "input", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      value: _this.props.value
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleOnChange", function (e) {
      _this.setState({
        value: e.target.value
      });

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    return _this;
  }

  createClass_default()(FieldText, [{
    key: "focus",
    value: function focus() {
      if (this.input) {
        this.input.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react_default.a.createElement(FieldTextStateless["a" /* default */], extends_default()({}, this.props, {
        value: this.state.value,
        onChange: this.handleOnChange,
        innerRef: function innerRef(fieldRef) {
          _this2.input = fieldRef;
        }
      }));
    }
  }]);

  return FieldText;
}(react["Component"]);

defineProperty_default()(FieldText_FieldText, "defaultProps", {
  onChange: function onChange() {}
});


// CONCATENATED MODULE: ./node_modules/@atlaskit/field-text/index.js
/* unused concated harmony import FieldTextStateless */


/* harmony default export */ var field_text = __webpack_exports__["a"] = (FieldText_FieldText);


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

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalUploadComponentReact; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(950);
/* harmony import */ var _service_newUploadServiceImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(957);




var LocalUploadComponentReact = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LocalUploadComponentReact, _super);
    function LocalUploadComponentReact(props) {
        var _this = _super.call(this, props) || this;
        _this.uploadComponent = new _component__WEBPACK_IMPORTED_MODULE_2__[/* UploadComponent */ "a"]();
        _this.cancel = function (uniqueIdentifier) {
            _this.uploadService.cancel(uniqueIdentifier);
        };
        _this.onFilesAdded = function (_a) {
            var files = _a.files;
            _this.uploadComponent.emitUploadsStart(files);
        };
        _this.onFilePreviewUpdate = function (_a) {
            var file = _a.file, preview = _a.preview;
            _this.uploadComponent.emitUploadPreviewUpdate(file, preview);
        };
        _this.onFileUploading = function (_a) {
            var file = _a.file, progress = _a.progress;
            _this.uploadComponent.emitUploadProgress(file, progress);
        };
        _this.onFileConverting = function (_a) {
            var file = _a.file;
            _this.uploadComponent.emitUploadProcessing(file);
        };
        _this.onFileConverted = function (payload) {
            _this.uploadComponent.emitUploadEnd(payload.file, payload.public);
        };
        _this.onUploadError = function (_a) {
            var file = _a.file, error = _a.error;
            _this.uploadComponent.emitUploadError(file, error);
        };
        var _a = _this.props, mediaClient = _a.mediaClient, config = _a.config, onUploadsStart = _a.onUploadsStart, onPreviewUpdate = _a.onPreviewUpdate, onStatusUpdate = _a.onStatusUpdate, onProcessing = _a.onProcessing, onEnd = _a.onEnd, onError = _a.onError;
        var tenantUploadParams = config.uploadParams;
        var _b = config.shouldCopyFileToRecents, shouldCopyFileToRecents = _b === void 0 ? true : _b;
        if (onUploadsStart) {
            _this.uploadComponent.on('uploads-start', onUploadsStart);
        }
        if (onPreviewUpdate) {
            _this.uploadComponent.on('upload-preview-update', onPreviewUpdate);
        }
        if (onStatusUpdate) {
            _this.uploadComponent.on('upload-status-update', onStatusUpdate);
        }
        if (onProcessing) {
            _this.uploadComponent.on('upload-processing', onProcessing);
        }
        if (onEnd) {
            _this.uploadComponent.on('upload-end', onEnd);
        }
        if (onError) {
            _this.uploadComponent.on('upload-error', onError);
        }
        _this.uploadService = new _service_newUploadServiceImpl__WEBPACK_IMPORTED_MODULE_3__[/* NewUploadServiceImpl */ "a"](mediaClient, tenantUploadParams, shouldCopyFileToRecents);
        _this.uploadService.on('files-added', _this.onFilesAdded);
        _this.uploadService.on('file-preview-update', _this.onFilePreviewUpdate);
        _this.uploadService.on('file-uploading', _this.onFileUploading);
        _this.uploadService.on('file-converting', _this.onFileConverting);
        _this.uploadService.on('file-converted', _this.onFileConverted);
        _this.uploadService.on('file-upload-error', _this.onUploadError);
        return _this;
    }
    LocalUploadComponentReact.prototype.setUploadParams = function (uploadParams) {
        this.uploadService.setUploadParams(uploadParams);
    };
    return LocalUploadComponentReact;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=localUploadReact.js.map

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

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(105)))

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(950);
/* harmony import */ var _service_newUploadServiceImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(957);



var LocalUploadComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LocalUploadComponent, _super);
    function LocalUploadComponent(mediaClient, config) {
        var _this = _super.call(this) || this;
        _this.addFiles = function (files) { return _this.uploadService.addFiles(files); };
        _this.onFilesAdded = function (_a) {
            var files = _a.files;
            _this.emitUploadsStart(files);
        };
        _this.onFilePreviewUpdate = function (_a) {
            var file = _a.file, preview = _a.preview;
            _this.emitUploadPreviewUpdate(file, preview);
        };
        _this.onFileUploading = function (_a) {
            var file = _a.file, progress = _a.progress;
            _this.emitUploadProgress(file, progress);
        };
        _this.onFileConverting = function (_a) {
            var file = _a.file;
            _this.emitUploadProcessing(file);
        };
        _this.onFileConverted = function (payload) {
            _this.emitUploadEnd(payload.file, payload.public);
        };
        _this.onUploadError = function (_a) {
            var file = _a.file, error = _a.error;
            _this.emitUploadError(file, error);
        };
        var tenantUploadParams = config.uploadParams;
        _this.mediaClient = mediaClient;
        var _a = config.shouldCopyFileToRecents, shouldCopyFileToRecents = _a === void 0 ? true : _a;
        _this.uploadService = new _service_newUploadServiceImpl__WEBPACK_IMPORTED_MODULE_2__[/* NewUploadServiceImpl */ "a"](_this.mediaClient, tenantUploadParams, shouldCopyFileToRecents);
        _this.config = config;
        _this.uploadService.on('files-added', _this.onFilesAdded);
        _this.uploadService.on('file-preview-update', _this.onFilePreviewUpdate);
        _this.uploadService.on('file-uploading', _this.onFileUploading);
        _this.uploadService.on('file-converting', _this.onFileConverting);
        _this.uploadService.on('file-converted', _this.onFileConverted);
        _this.uploadService.on('file-upload-error', _this.onUploadError);
        return _this;
    }
    LocalUploadComponent.prototype.cancel = function (uniqueIdentifier) {
        this.uploadService.cancel(uniqueIdentifier);
    };
    LocalUploadComponent.prototype.setUploadParams = function (uploadParams) {
        this.uploadService.setUploadParams(uploadParams);
    };
    return LocalUploadComponent;
}(_component__WEBPACK_IMPORTED_MODULE_1__[/* UploadComponent */ "a"]));

//# sourceMappingURL=localUpload.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAssetUrl; });
var assetsHost = 'https://aui-cdn.atlassian.com/media';
var getAssetUrl = function (assetName) { return assetsHost + "/" + assetName; };
//# sourceMappingURL=getAssetUrl.js.map

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

/***/ 997:
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

var DropboxIcon = function DropboxIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M16.19 2l-4.216 3.494 5.812 3.608L22 5.77 16.19 2zM2 5.958l4.162 3.214 5.812-3.678-3.992-3.492L2 5.958zm14.01 12.355l-.014-.986-3.994-2.975-3.833 2.934-.036.057-2.113-1.278v2.115l5.977 3.824 5.93-3.824v-2.037l-1.917 1.17v1zM6.15 9.179l-4.143 3.352 3.604 2.166.002-.002.785.476 1.585.952 2.652-2.014 1.328-1.017.004.004.007-.004.021.016.014-.016 3.156 2.348.921.68 5.91-3.593-4.21-3.422-5.809 3.681L6.151 9.18zm11.636-.074l.001-.003h-.002l.001.003z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

DropboxIcon.displayName = 'DropboxIcon';
var _default = DropboxIcon;
exports.default = _default;

/***/ }),

/***/ 998:
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

var GoogledriveIcon = function GoogledriveIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M15.81 3l-6.776.068 5.846 10.126 6.777-.07L15.811 3zM2 14.315l3.447 5.835 5.846-10.126L7.846 4.19 2 14.315zm8.307.175l-3.33 5.902H18.67L22 14.49H10.307z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

GoogledriveIcon.displayName = 'GoogledriveIcon';
var _default = GoogledriveIcon;
exports.default = _default;

/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _localUploadReact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(948);



var defaultConfig = { uploadParams: {} };
var Browser = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Browser, _super);
    function Browser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.browserRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.defaultProps = {
            config: defaultConfig,
        };
        _this.onFilePicked = function () {
            if (!_this.browserRef.current) {
                return;
            }
            var filesArray = [].slice.call(_this.browserRef.current.files);
            _this.uploadService.addFiles(filesArray);
        };
        _this.browse = function () {
            var onClose = _this.props.onClose;
            if (!_this.browserRef.current) {
                return;
            }
            _this.browserRef.current.click();
            // Calling onClose directly since there is no dom api to notify us when
            // the native file picker is closed
            if (onClose) {
                onClose();
            }
        };
        return _this;
    }
    Browser.prototype.componentDidMount = function () {
        var _a = this.props, onBrowseFn = _a.onBrowseFn, onCancelFn = _a.onCancelFn, isOpen = _a.isOpen;
        if (onBrowseFn) {
            onBrowseFn(this.browse);
        }
        if (onCancelFn) {
            onCancelFn(this.cancel);
        }
        if (isOpen) {
            this.browse();
        }
    };
    Browser.prototype.componentWillReceiveProps = function (nextProps) {
        var isOpen = this.props.isOpen;
        var nextIsOpen = nextProps.isOpen;
        if (nextIsOpen && nextIsOpen !== isOpen) {
            this.browse();
        }
    };
    Browser.prototype.render = function () {
        var config = this.props.config;
        var multiple = config.multiple;
        var fileExtensions = config.fileExtensions && config.fileExtensions.join(',');
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: this.browserRef, type: "file", style: { display: 'none' }, multiple: multiple, accept: fileExtensions, onChange: this.onFilePicked }));
    };
    return Browser;
}(_localUploadReact__WEBPACK_IMPORTED_MODULE_2__[/* LocalUploadComponentReact */ "a"]));

//# sourceMappingURL=browser.js.map

/***/ })

}]);