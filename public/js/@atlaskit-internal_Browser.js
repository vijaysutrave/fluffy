(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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