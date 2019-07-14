(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

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

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/uuid/v4.js
var v4 = __webpack_require__(241);
var v4_default = /*#__PURE__*/__webpack_require__.n(v4);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/messages.js
var messages = __webpack_require__(938);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/shortcut.js
var shortcut = __webpack_require__(1001);

// EXTERNAL MODULE: ./node_modules/@atlaskit/modal-dialog/components/ModalTransition.js
var ModalTransition = __webpack_require__(1054);

// EXTERNAL MODULE: ./node_modules/@atlaskit/modal-dialog/components/ModalWrapper.js + 36 modules
var ModalWrapper = __webpack_require__(1195);

// EXTERNAL MODULE: ./node_modules/@atlaskit/spinner/Spinner/index.js + 3 modules
var Spinner = __webpack_require__(830);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-editor/react/editorView/editorView.js + 45 modules
var editorView = __webpack_require__(1173);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-editor/react/styled.js
var styled = __webpack_require__(1013);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-editor/util.js
var util = __webpack_require__(945);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var theme = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@atlaskit/button/components/Button.js + 4 modules
var Button = __webpack_require__(829);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-editor/react/editorView/errorView/styles.js





var ErrorPopup = styled_components_browser_esm["default"].div(templateObject_1 || (templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  width: 290px;\n  padding: 16px;\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"], ["\n  width: 290px;\n  padding: 16px;\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"])), theme["colors"].N0);
var ErrorIconWrapper = styled_components_browser_esm["default"].div(templateObject_2 || (templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  width: 92px;\n"], ["\n  width: 92px;\n"])));
var ErrorMessage = styled_components_browser_esm["default"].div(templateObject_3 || (templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  margin-top: 16px;\n  margin-bottom: 4px;\n  width: 256px;\n  text-align: center;\n  font-weight: bold;\n"], ["\n  color: ", ";\n  margin-top: 16px;\n  margin-bottom: 4px;\n  width: 256px;\n  text-align: center;\n  font-weight: bold;\n"])), theme["colors"].N900);
var ErrorHint = styled_components_browser_esm["default"].div(templateObject_4 || (templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  margin-top: 4px;\n  margin-bottom: 20px;\n  width: 256px;\n  text-align: center;\n"], ["\n  color: ", ";\n  margin-top: 4px;\n  margin-bottom: 20px;\n  width: 256px;\n  text-align: center;\n"])), theme["colors"].N70);
var ErrorButton = function (props) { return (react["createElement"](Button["a" /* default */], tslib_es6["__assign"]({}, props, { theme: function (currentTheme, themeProps) {
        var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_es6["__rest"](_a, ["buttonStyles"]);
        return tslib_es6["__assign"]({ buttonStyles: tslib_es6["__assign"]({}, buttonStyles, { display: 'inline-flex', width: '84px', margin: '2px', justifyContent: 'center' }) }, rest);
    } }))); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styles.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-editor/react/editorView/errorView/icons.js

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
//# sourceMappingURL=icons.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-editor/react/editorView/styles.js
var styles = __webpack_require__(1014);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-editor/react/editorView/errorView/errorView.js








var errorView_ErrorView = /** @class */ (function (_super) {
    tslib_es6["__extends"](ErrorView, _super);
    function ErrorView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorView.prototype.render = function () {
        return (react["createElement"](styles["a" /* EditorContainer */], null,
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
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-editor/react/smartMediaEditor.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFileNameToPng", function() { return convertFileNameToPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartMediaEditor", function() { return smartMediaEditor_SmartMediaEditor; });











var convertFileNameToPng = function (fileName) {
    if (!fileName) {
        return 'annotated-image.png';
    }
    if (fileName.endsWith('.png')) {
        return fileName;
    }
    else {
        if (fileName.lastIndexOf('.') === 0 || fileName.lastIndexOf('.') === -1) {
            return fileName + ".png";
        }
        else {
            return fileName.substring(0, fileName.lastIndexOf('.')) + ".png";
        }
    }
};
var smartMediaEditor_SmartMediaEditor = /** @class */ (function (_super) {
    tslib_es6["__extends"](SmartMediaEditor, _super);
    function SmartMediaEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasError: false,
            hasBeenEdited: false,
            closeIntent: false,
        };
        _this.getFile = function (identifier) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var mediaClient, collectionName, occurrenceKey, id, getFileSubscription;
            var _this = this;
            return tslib_es6["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mediaClient = this.props.mediaClient;
                        collectionName = identifier.collectionName, occurrenceKey = identifier.occurrenceKey;
                        return [4 /*yield*/, identifier.id];
                    case 1:
                        id = _a.sent();
                        getFileSubscription = mediaClient.file
                            .getFileState(id, { collectionName: collectionName, occurrenceKey: occurrenceKey })
                            .subscribe({
                            next: function (state) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
                                var name, preview, status, value, imageUrl;
                                return tslib_es6["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (state.status === 'error') {
                                                this.onError(state.message);
                                                setTimeout(function () { return getFileSubscription.unsubscribe(); }, 0);
                                                return [2 /*return*/];
                                            }
                                            name = state.name, preview = state.preview, status = state.status;
                                            this.fileName = name;
                                            if (!(status === 'processed')) return [3 /*break*/, 1];
                                            this.setRemoteImageUrl(identifier);
                                            setTimeout(function () { return getFileSubscription.unsubscribe(); }, 0);
                                            return [3 /*break*/, 6];
                                        case 1:
                                            if (!preview) return [3 /*break*/, 6];
                                            return [4 /*yield*/, preview];
                                        case 2:
                                            value = (_a.sent()).value;
                                            if (!(value instanceof Blob)) return [3 /*break*/, 4];
                                            return [4 /*yield*/, Object(util["d" /* fileToBase64 */])(value)];
                                        case 3:
                                            imageUrl = _a.sent();
                                            this.setState({
                                                imageUrl: imageUrl,
                                            });
                                            return [3 /*break*/, 5];
                                        case 4:
                                            this.setState({
                                                imageUrl: value,
                                            });
                                            _a.label = 5;
                                        case 5:
                                            setTimeout(function () { return getFileSubscription.unsubscribe(); }, 0);
                                            _a.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); },
                            error: function (error) {
                                _this.onError(error);
                            },
                        });
                        this.getFileSubscription = getFileSubscription;
                        return [2 /*return*/];
                }
            });
        }); };
        _this.setRemoteImageUrl = function (identifier) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var mediaClient, id, imageUrl;
            return tslib_es6["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mediaClient = this.props.mediaClient;
                        return [4 /*yield*/, identifier.id];
                    case 1:
                        id = _a.sent();
                        return [4 /*yield*/, mediaClient.getImageUrl(id, {
                                collection: identifier.collectionName,
                                mode: 'full-fit',
                            })];
                    case 2:
                        imageUrl = _a.sent();
                        this.setState({
                            imageUrl: imageUrl,
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.copyFileToUserCollection = function (fileId) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var _a, _b, _c, userAuthProvider, authProvider, file, collectionName, source, destination;
            return tslib_es6["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.props, _b = _a.mediaClient, _c = _b.config, userAuthProvider = _c.userAuthProvider, authProvider = _c.authProvider, file = _b.file, collectionName = _a.identifier.collectionName;
                        if (!userAuthProvider) return [3 /*break*/, 2];
                        source = {
                            id: fileId,
                            collection: collectionName,
                            authProvider: authProvider,
                        };
                        destination = {
                            collection: 'recents',
                            authProvider: userAuthProvider,
                            occurrenceKey: v4_default()(),
                        };
                        return [4 /*yield*/, file.copyFile(source, destination)];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.onSave = function (imageData, dimensions) {
            var fileName = _this.fileName;
            var _a = _this.props, mediaClient = _a.mediaClient, identifier = _a.identifier, onUploadStart = _a.onUploadStart, onFinish = _a.onFinish, formatMessage = _a.intl.formatMessage;
            var collectionName = identifier.collectionName;
            var uploadableFile = {
                content: imageData,
                collection: collectionName,
                name: convertFileNameToPng(fileName),
            };
            var id = v4_default()();
            var occurrenceKey = v4_default()();
            var touchedFiles = mediaClient.file.touchFiles([
                {
                    fileId: id,
                    collection: collectionName,
                    occurrenceKey: occurrenceKey,
                },
            ], collectionName);
            var deferredUploadId = touchedFiles.then(function (touchedFiles) { return touchedFiles.created[0].uploadId; });
            var uploadableFileUpfrontIds = {
                id: id,
                deferredUploadId: deferredUploadId,
                occurrenceKey: occurrenceKey,
            };
            var uploadingFileState = mediaClient.file.upload(uploadableFile, undefined, uploadableFileUpfrontIds);
            var newFileIdentifier = {
                id: id,
                collectionName: collectionName,
                mediaItemType: 'file',
                occurrenceKey: occurrenceKey,
            };
            var uploadingFileStateSubscription = uploadingFileState.subscribe({
                next: function (fileState) {
                    if (fileState.status === 'processing') {
                        _this.copyFileToUserCollection(fileState.id).then(function () {
                            if (onFinish) {
                                onFinish(newFileIdentifier);
                            }
                            setTimeout(function () { return uploadingFileStateSubscription.unsubscribe(); }, 0);
                        });
                    }
                    else if (fileState.status === 'failed-processing' ||
                        fileState.status === 'error') {
                        _this.onError(formatMessage(messages["a" /* messages */].could_not_save_image));
                        setTimeout(function () { return uploadingFileStateSubscription.unsubscribe(); }, 0);
                    }
                },
            });
            if (onUploadStart) {
                onUploadStart(newFileIdentifier, dimensions);
            }
        };
        _this.onAnyEdit = function () {
            var hasBeenEdited = _this.state.hasBeenEdited;
            if (!hasBeenEdited) {
                _this.setState({ hasBeenEdited: true });
            }
        };
        _this.closeConfirmationDialog = function () {
            _this.setState({ closeIntent: false });
        };
        _this.closeAnyway = function () {
            var onClose = _this.props.onClose;
            _this.closeConfirmationDialog();
            if (onClose) {
                onClose();
            }
        };
        _this.renderDeleteConfirmation = function () {
            var formatMessage = _this.props.intl.formatMessage;
            var closeIntent = _this.state.closeIntent;
            if (closeIntent) {
                var actions = [
                    {
                        text: formatMessage(messages["a" /* messages */].annotate_confirmation_close_anyway),
                        onClick: _this.closeAnyway,
                    },
                    {
                        text: formatMessage(messages["a" /* messages */].cancel),
                        onClick: _this.closeConfirmationDialog,
                    },
                ];
                return (react["createElement"](ModalTransition["b" /* default */], null,
                    react["createElement"](ModalWrapper["a" /* default */], { width: "small", appearance: "danger", heading: formatMessage(messages["a" /* messages */].annotate_confirmation_heading), actions: actions, onClose: _this.closeConfirmationDialog }, formatMessage(messages["a" /* messages */].annotate_confirmation_content))));
            }
            return null;
        };
        _this.onCancel = function () {
            var hasBeenEdited = _this.state.hasBeenEdited;
            var onClose = _this.props.onClose;
            if (hasBeenEdited) {
                _this.setState({ closeIntent: true });
            }
            else if (onClose) {
                onClose();
            }
        };
        _this.onError = function (error) {
            _this.setState({
                hasError: true,
                errorMessage: error,
            });
        };
        _this.clickShellNotPass = function (e) {
            // Stop click from propagating back to the editor.
            // Without it editor will get focus and apply all the key events
            e.stopPropagation();
        };
        _this.renderLoading = function () {
            return (react["createElement"](styled["g" /* SpinnerWrapper */], null,
                react["createElement"](Spinner["a" /* default */], { size: "large", invertColor: true })));
        };
        _this.renderEditor = function (imageUrl) {
            return (react["createElement"](editorView["default"], { imageUrl: imageUrl, onSave: _this.onSave, onCancel: _this.onCancel, onError: _this.onError, onAnyEdit: _this.onAnyEdit }));
        };
        _this.renderError = function (error) {
            var onClose = _this.props.onClose;
            if (error instanceof Error) {
                error = error.message;
            }
            return react["createElement"](errorView, { message: error, onCancel: onClose || (function () { }) });
        };
        return _this;
    }
    SmartMediaEditor.prototype.componentDidMount = function () {
        var identifier = this.props.identifier;
        this.getFile(identifier);
    };
    SmartMediaEditor.prototype.componentWillReceiveProps = function (nextProps) {
        var _a = this.props, identifier = _a.identifier, mediaClient = _a.mediaClient;
        if (nextProps.identifier.id !== identifier.id ||
            nextProps.mediaClient !== mediaClient) {
            this.getFile(nextProps.identifier);
        }
    };
    SmartMediaEditor.prototype.componentWillUnmount = function () {
        var _a = this, getFileSubscription = _a.getFileSubscription, uploadFileSubscription = _a.uploadFileSubscription;
        if (getFileSubscription) {
            getFileSubscription.unsubscribe();
        }
        if (uploadFileSubscription) {
            uploadFileSubscription.unsubscribe();
        }
    };
    SmartMediaEditor.prototype.render = function () {
        var _a = this.state, imageUrl = _a.imageUrl, hasError = _a.hasError, errorMessage = _a.errorMessage;
        var content = hasError
            ? this.renderError(errorMessage)
            : imageUrl
                ? this.renderEditor(imageUrl)
                : this.renderLoading();
        return (react["createElement"](styled["a" /* Blanket */], { onClick: this.clickShellNotPass },
            this.renderDeleteConfirmation(),
            react["createElement"](shortcut["a" /* Shortcut */], { keyCode: 27, handler: this.onCancel }),
            content));
    };
    SmartMediaEditor.contextTypes = {
        intl: index_es["f" /* intlShape */],
    };
    return SmartMediaEditor;
}(react["Component"]));

var smartMediaEditor_default_1 = /** @class */ (function (_super) {
    tslib_es6["__extends"](default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        var Component = Object(index_es["e" /* injectIntl */])(smartMediaEditor_SmartMediaEditor);
        var content = react["createElement"](Component, tslib_es6["__assign"]({}, this.props));
        return this.context.intl ? (content) : (react["createElement"](index_es["c" /* IntlProvider */], { locale: "en" }, content));
    };
    return default_1;
}(react["Component"]));
/* harmony default export */ var smartMediaEditor = __webpack_exports__["default"] = (smartMediaEditor_default_1);
//# sourceMappingURL=smartMediaEditor.js.map

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

/***/ })

}]);