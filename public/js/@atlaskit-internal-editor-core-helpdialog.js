(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 1204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-common/utils/browser.js
var browser = __webpack_require__(211);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/cross.js
var cross = __webpack_require__(954);
var cross_default = /*#__PURE__*/__webpack_require__.n(cross);

// EXTERNAL MODULE: ./node_modules/@atlaskit/modal-dialog/components/ModalWrapper.js + 36 modules
var ModalWrapper = __webpack_require__(1195);

// EXTERNAL MODULE: ./node_modules/@atlaskit/modal-dialog/components/ModalTransition.js
var ModalTransition = __webpack_require__(1054);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var theme = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/constants.js
var constants = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-common/styles/consts.js
var consts = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/@atlaskit/editor-core/plugins/help-dialog/ui/styles.js




var Header = styled_components_browser_esm["default"].div(templateObject_1 || (templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  z-index: ", ";\n  min-height: 24px;\n  padding: 20px 40px;\n  font-size: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: ", ";\n  color: ", ";\n  background-color: ", ";\n  border-radius: ", "px;\n"], ["\n  z-index: ", ";\n  min-height: 24px;\n  padding: 20px 40px;\n  font-size: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: ",
    ";\n  color: ", ";\n  background-color: ", ";\n  border-radius: ", "px;\n"])), consts["z" /* akEditorUnitZIndex */], function (props) {
    return props.showKeyline ? "0 2px 0 " + theme["colors"].N30 : 'none';
}, theme["colors"].N400, theme["colors"].N0, Object(constants["f" /* borderRadius */])());
var Footer = styled_components_browser_esm["default"].div(templateObject_2 || (templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  z-index: ", ";\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n  padding: 24px;\n  text-align: right;\n  box-shadow: ", ";\n"], ["\n  z-index: ", ";\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n  padding: 24px;\n  text-align: right;\n  box-shadow: ",
    ";\n"])), consts["z" /* akEditorUnitZIndex */], theme["colors"].N300, function (props) {
    return props.showKeyline ? "0 -2px 0 " + theme["colors"].N30 : 'none';
});
var ContentWrapper = styled_components_browser_esm["default"].div(templateObject_3 || (templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  padding: 18px 20px;\n  border-bottom-right-radius: ", "px;\n  overflow: auto;\n  position: relative;\n  color: ", ";\n  background-color: ", ";\n"], ["\n  padding: 18px 20px;\n  border-bottom-right-radius: ", "px;\n  overflow: auto;\n  position: relative;\n  color: ", ";\n  background-color: ", ";\n"])), Object(constants["f" /* borderRadius */])(), theme["colors"].N400, theme["colors"].N0);
var Line = styled_components_browser_esm["default"].div(templateObject_4 || (templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  background: #fff;\n  content: '';\n  display: block;\n  height: 2px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  min-width: 604px;\n"], ["\n  background: #fff;\n  content: '';\n  display: block;\n  height: 2px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  min-width: 604px;\n"])));
var Content = styled_components_browser_esm["default"].div(templateObject_5 || (templateObject_5 = tslib_es6["__makeTemplateObject"](["\n  min-width: 524px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  min-width: 524px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n"])));
var ColumnLeft = styled_components_browser_esm["default"].div(templateObject_6 || (templateObject_6 = tslib_es6["__makeTemplateObject"](["\n  width: 44%;\n"], ["\n  width: 44%;\n"])));
var ColumnRight = styled_components_browser_esm["default"].div(templateObject_7 || (templateObject_7 = tslib_es6["__makeTemplateObject"](["\n  width: 44%;\n"], ["\n  width: 44%;\n"])));
var Row = styled_components_browser_esm["default"].div(templateObject_8 || (templateObject_8 = tslib_es6["__makeTemplateObject"](["\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n"])));
var Title = styled_components_browser_esm["default"].div(templateObject_9 || (templateObject_9 = tslib_es6["__makeTemplateObject"](["\n  font-size: 18px;\n  font-weight: 400;\n"], ["\n  font-size: 18px;\n  font-weight: 400;\n"])));
var CodeSm = styled_components_browser_esm["default"].span(templateObject_10 || (templateObject_10 = tslib_es6["__makeTemplateObject"](["\n  background-color: ", ";\n  border-radius: ", "px;\n  width: 24px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  width: 24px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n"])), theme["colors"].N20, Object(constants["f" /* borderRadius */])());
var CodeMd = styled_components_browser_esm["default"].span(templateObject_11 || (templateObject_11 = tslib_es6["__makeTemplateObject"](["\n  background-color: ", ";\n  border-radius: ", "px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  width: 50px;\n  text-align: center;\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  width: 50px;\n  text-align: center;\n"])), theme["colors"].N20, Object(constants["f" /* borderRadius */])());
var CodeLg = styled_components_browser_esm["default"].span(templateObject_12 || (templateObject_12 = tslib_es6["__makeTemplateObject"](["\n  background-color: ", ";\n  border-radius: ", "px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 10px;\n  text-align: center;\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 10px;\n  text-align: center;\n"])), theme["colors"].N20, Object(constants["f" /* borderRadius */])());
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-core/keymaps/index.js
var keymaps = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-core/ui/ToolbarButton/index.js + 1 modules
var ToolbarButton = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-core/plugins/text-formatting/ui/ToolbarTextFormatting/index.js
var ToolbarTextFormatting = __webpack_require__(466);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-core/plugins/text-formatting/ui/ToolbarAdvancedTextFormatting/index.js
var ToolbarAdvancedTextFormatting = __webpack_require__(467);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-core/plugins/block-type/types.js
var types = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-core/plugins/lists/messages.js
var messages = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-core/plugins/insert-block/ui/ToolbarInsertBlock/index.js + 1 modules
var ToolbarInsertBlock = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-core/plugins/help-dialog/index.js + 1 modules
var help_dialog = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/@atlaskit/editor-core/plugins/help-dialog/ui/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatting", function() { return formatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedFormatting", function() { return getSupportedFormatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentFromKeymap", function() { return getComponentFromKeymap; });















var ui_messages = Object(index_es["d" /* defineMessages */])({
    editorHelp: {
        id: 'fabric.editor.editorHelp',
        defaultMessage: 'Editor help',
        description: 'Title of editor help dialog.',
    },
    helpDialogTips: {
        id: 'fabric.editor.helpDialogTips',
        defaultMessage: 'Press {keyMap} to quickly open this dialog at any time',
        description: 'Hint about how to open a dialog quickly using a shortcut.',
    },
    keyboardShortcuts: {
        id: 'fabric.editor.keyboardShortcuts',
        defaultMessage: 'Keyboard shortcuts',
        description: '',
    },
    markdown: {
        id: 'fabric.editor.markdown',
        defaultMessage: 'Markdown',
        description: 'It is a name of popular markup language.',
    },
    undo: {
        id: 'fabric.editor.undo',
        defaultMessage: 'Undo',
        description: '',
    },
    redo: {
        id: 'fabric.editor.redo',
        defaultMessage: 'Redo',
        description: '',
    },
    pastePlainText: {
        id: 'fabric.editor.pastePlainText',
        defaultMessage: 'Paste plain text',
        description: '',
    },
    altText: {
        id: 'fabric.editor.altText',
        defaultMessage: 'Alt text',
        description: 'Alternative text for image.',
    },
    closeHelpDialog: {
        id: 'fabric.editor.closeHelpDialog',
        defaultMessage: 'Close help dialog',
        description: '',
    },
    // TODO: Move it inside quick insert plugin
    quickInsert: {
        id: 'fabric.editor.quickInsert',
        defaultMessage: 'Quick insert',
        description: 'Name of a feature, which let you insert items quickly.',
    },
});
var AkModalDialog = ModalWrapper["a" /* default */];
var formatting = function (_a) {
    var formatMessage = _a.formatMessage;
    return [
        {
            name: formatMessage(ToolbarTextFormatting["b" /* messages */].bold),
            type: 'strong',
            keymap: function () { return keymaps["L" /* toggleBold */]; },
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null,
                    "**",
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, ToolbarTextFormatting["b" /* messages */].bold)),
                    "**"))); },
        },
        {
            name: formatMessage(ToolbarTextFormatting["b" /* messages */].italic),
            type: 'em',
            keymap: function () { return keymaps["O" /* toggleItalic */]; },
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null,
                    "*",
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, ToolbarTextFormatting["b" /* messages */].italic)),
                    "*"))); },
        },
        {
            name: formatMessage(ToolbarAdvancedTextFormatting["b" /* messages */].underline),
            type: 'underline',
            keymap: function () { return keymaps["S" /* toggleUnderline */]; },
        },
        {
            name: formatMessage(ToolbarAdvancedTextFormatting["b" /* messages */].strike),
            type: 'strike',
            keymap: function () { return keymaps["Q" /* toggleStrikethrough */]; },
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null,
                    "~~",
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, ToolbarAdvancedTextFormatting["b" /* messages */].strike)),
                    "~~"))); },
        },
        {
            name: formatMessage(types["p" /* messages */].heading1),
            type: 'heading',
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeSm, null, "#"),
                " ",
                react["createElement"](CodeLg, null, "Space"))); },
        },
        {
            name: formatMessage(types["p" /* messages */].heading2),
            type: 'heading',
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null, "##"),
                " ",
                react["createElement"](CodeLg, null, "Space"))); },
        },
        {
            name: formatMessage(messages["a" /* messages */].orderedList),
            type: 'orderedList',
            keymap: function () { return keymaps["P" /* toggleOrderedList */]; },
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeSm, null, "1."),
                " ",
                react["createElement"](CodeLg, null, "Space"))); },
        },
        {
            name: formatMessage(messages["a" /* messages */].unorderedList),
            type: 'bulletList',
            keymap: function () { return keymaps["M" /* toggleBulletList */]; },
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeSm, null, "*"),
                " ",
                react["createElement"](CodeLg, null, "Space"))); },
        },
        {
            name: formatMessage(types["p" /* messages */].blockquote),
            type: 'blockquote',
            keymap: function () { return keymaps["K" /* toggleBlockQuote */]; },
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null, ">"),
                " ",
                react["createElement"](CodeLg, null, "Space"))); },
        },
        {
            name: formatMessage(types["p" /* messages */].codeblock),
            type: 'codeBlock',
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null, "```"))); },
        },
        {
            name: formatMessage(ToolbarInsertBlock["b" /* messages */].horizontalRule),
            type: 'rule',
            keymap: function () { return keymaps["t" /* insertRule */]; },
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null, "---"))); },
        },
        {
            name: formatMessage(ToolbarInsertBlock["b" /* messages */].link),
            type: 'link',
            keymap: function () { return keymaps["d" /* addLink */]; },
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null,
                    "[",
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, ToolbarInsertBlock["b" /* messages */].link)),
                    "](http://a.com)"))); },
        },
        {
            name: formatMessage(ToolbarAdvancedTextFormatting["b" /* messages */].code),
            type: 'code',
            keymap: function () { return keymaps["N" /* toggleCode */]; },
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null,
                    "`",
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, ToolbarAdvancedTextFormatting["b" /* messages */].code)),
                    "`"))); },
        },
        {
            name: formatMessage(ToolbarInsertBlock["b" /* messages */].action),
            type: 'taskItem',
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeSm, null, "[]"),
                " ",
                react["createElement"](CodeLg, null, "Space"))); },
        },
        {
            name: formatMessage(ToolbarInsertBlock["b" /* messages */].decision),
            type: 'decisionItem',
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeSm, null, "<>"),
                " ",
                react["createElement"](CodeLg, null, "Space"))); },
        },
        {
            name: formatMessage(ToolbarInsertBlock["b" /* messages */].emoji),
            type: 'emoji',
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null, ":"))); },
        },
        {
            name: formatMessage(ToolbarInsertBlock["b" /* messages */].mention),
            type: 'mention',
            autoFormatting: function () { return (react["createElement"]("span", null,
                react["createElement"](CodeLg, null, "@"))); },
        },
    ];
};
var shortcutNamesWithoutKeymap = [
    'emoji',
    'mention',
    'quickInsert',
];
var otherFormatting = function (_a) {
    var formatMessage = _a.formatMessage;
    return [
        {
            name: formatMessage(ToolbarAdvancedTextFormatting["b" /* messages */].clearFormatting),
            type: 'clearFormatting',
            keymap: function () { return keymaps["i" /* clearFormatting */]; },
        },
        {
            name: formatMessage(ui_messages.undo),
            type: 'undo',
            keymap: function () { return keymaps["U" /* undo */]; },
        },
        {
            name: formatMessage(ui_messages.redo),
            type: 'redo',
            keymap: function () { return keymaps["E" /* redo */]; },
        },
        {
            name: formatMessage(ui_messages.pastePlainText),
            type: 'paste',
            keymap: function () { return keymaps["C" /* pastePlainText */]; },
        },
    ];
};
var imageAutoFormat = {
    name: 'Image',
    type: 'image',
    autoFormatting: function () { return (react["createElement"]("span", null,
        react["createElement"](CodeLg, null,
            "![",
            react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, ui_messages.altText)),
            "](http://www.image.com)"))); },
};
var quickInsertAutoFormat = function (_a) {
    var formatMessage = _a.formatMessage;
    return ({
        name: formatMessage(ui_messages.quickInsert),
        type: 'quickInsert',
        autoFormatting: function () { return (react["createElement"]("span", null,
            react["createElement"](CodeLg, null, "/"))); },
    });
};
var getSupportedFormatting = function (schema, intl, imageEnabled, quickInsertEnabled) {
    var supportedBySchema = formatting(intl).filter(function (format) { return schema.nodes[format.type] || schema.marks[format.type]; });
    return tslib_es6["__spread"](supportedBySchema, (imageEnabled ? [imageAutoFormat] : []), (quickInsertEnabled ? [quickInsertAutoFormat(intl)] : []), otherFormatting(intl));
};
var getComponentFromKeymap = function (keymap) {
    var shortcut = keymap[browser["a" /* default */].mac ? 'mac' : 'windows'];
    var keyParts = shortcut.replace(/\-(?=.)/g, ' + ').split(' ');
    return (react["createElement"]("span", null, keyParts.map(function (part, index) {
        if (part === '+') {
            return react["createElement"]("span", { key: shortcut + "-" + index }, ' + ');
        }
        else if (part === 'Cmd') {
            return react["createElement"](CodeSm, { key: shortcut + "-" + index }, "\u2318");
        }
        else if (['ctrl', 'alt', 'opt', 'shift'].indexOf(part.toLowerCase()) >= 0) {
            return react["createElement"](CodeMd, { key: shortcut + "-" + index }, part);
        }
        return (react["createElement"](CodeSm, { key: shortcut + "-" + index }, part.toUpperCase()));
    })));
};
var ModalHeader = Object(index_es["e" /* injectIntl */])(function (_a) {
    var onClose = _a.onClose, showKeyline = _a.showKeyline, formatMessage = _a.intl.formatMessage;
    return (react["createElement"](Header, { showKeyline: showKeyline },
        react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, ui_messages.editorHelp)),
        react["createElement"]("div", null,
            react["createElement"](ToolbarButton["a" /* default */], { onClick: onClose, title: formatMessage(ui_messages.closeHelpDialog), spacing: "compact", iconBefore: react["createElement"](cross_default.a, { label: formatMessage(ui_messages.closeHelpDialog), size: "medium" }) }))));
});
var ModalFooter = function (_a) {
    var showKeyline = _a.showKeyline;
    return (react["createElement"](Footer, { showKeyline: showKeyline },
        react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, ui_messages.helpDialogTips, { values: { keyMap: getComponentFromKeymap(keymaps["z" /* openHelp */]) } }))));
};
var ui_HelpDialog = /** @class */ (function (_super) {
    tslib_es6["__extends"](HelpDialog, _super);
    function HelpDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formatting = [];
        _this.closeDialog = function () {
            var _a = _this.props.editorView, tr = _a.state.tr, dispatch = _a.dispatch;
            Object(help_dialog["a" /* closeHelpCommand */])(tr, dispatch);
        };
        _this.handleEsc = function (e) {
            if (e.key === 'Escape' && _this.props.isVisible) {
                _this.closeDialog();
            }
        };
        return _this;
    }
    HelpDialog.prototype.componentDidMount = function () {
        document.addEventListener('keydown', this.handleEsc);
    };
    HelpDialog.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.handleEsc);
    };
    HelpDialog.prototype.render = function () {
        var _this = this;
        var _a = this.props, editorView = _a.editorView, intl = _a.intl, imageEnabled = _a.imageEnabled, quickInsertEnabled = _a.quickInsertEnabled;
        this.formatting = getSupportedFormatting(editorView.state.schema, intl, imageEnabled, quickInsertEnabled);
        return (react["createElement"](ModalTransition["b" /* default */], null, this.props.isVisible ? (react["createElement"](AkModalDialog, { width: "large", onClose: this.closeDialog, components: { Header: ModalHeader, Footer: ModalFooter } },
            react["createElement"](ContentWrapper, null,
                react["createElement"](Line, null),
                react["createElement"](Content, null,
                    react["createElement"](ColumnLeft, null,
                        react["createElement"](Title, null,
                            react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, ui_messages.keyboardShortcuts))),
                        react["createElement"]("div", null,
                            this.formatting
                                .filter(function (form) {
                                var keymap = form.keymap && form.keymap(_this.props);
                                return (keymap && keymap[browser["a" /* default */].mac ? 'mac' : 'windows']);
                            })
                                .map(function (form) { return (react["createElement"](Row, { key: "textFormatting-" + form.name },
                                react["createElement"]("span", null, form.name),
                                getComponentFromKeymap(form.keymap({ appearance: _this.props.appearance })))); }),
                            this.formatting
                                .filter(function (form) {
                                return shortcutNamesWithoutKeymap.indexOf(form.type) !== -1;
                            })
                                .filter(function (form) { return form.autoFormatting; })
                                .map(function (form) { return (react["createElement"](Row, { key: "autoFormatting-" + form.name },
                                react["createElement"]("span", null, form.name),
                                form.autoFormatting())); }))),
                    react["createElement"](Line, null),
                    react["createElement"](ColumnRight, null,
                        react["createElement"](Title, null,
                            react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, ui_messages.markdown))),
                        react["createElement"]("div", null, this.formatting
                            .filter(function (form) {
                            return shortcutNamesWithoutKeymap.indexOf(form.type) === -1;
                        })
                            .map(function (form) {
                            return form.autoFormatting && (react["createElement"](Row, { key: "autoFormatting-" + form.name },
                                react["createElement"]("span", null, form.name),
                                form.autoFormatting()));
                        }))))))) : null));
    };
    return HelpDialog;
}(react["Component"]));
/* harmony default export */ var ui = __webpack_exports__["default"] = (Object(index_es["e" /* injectIntl */])(ui_HelpDialog));
//# sourceMappingURL=index.js.map

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

/***/ })

}]);