(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ })

}]);