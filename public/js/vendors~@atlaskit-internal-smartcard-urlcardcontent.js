(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-lazily-render/dist/esnext/index.js + 6 modules
var esnext = __webpack_require__(984);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/LinkView/index.js
var LinkView = __webpack_require__(901);

// EXTERNAL MODULE: ./node_modules/@atlaskit/smart-card/utils/analytics.js
var analytics = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/@atlaskit/smart-card/utils/index.js
var utils = __webpack_require__(396);

// EXTERNAL MODULE: ./node_modules/@atlaskit/smart-card/state/actions/helpers.js
var helpers = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/@atlaskit/spinner/Spinner/index.js + 3 modules
var Spinner = __webpack_require__(830);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var theme = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/constants.js
var constants = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/mixins.js
var mixins = __webpack_require__(395);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/CollapsedFrame/styled.js




function styled_minWidth(_a) {
    var minWidth = _a.minWidth;
    if (minWidth) {
        return "min-width: " + minWidth + "px;";
    }
    else {
        return '';
    }
}
function styled_maxWidth(_a) {
    var maxWidth = _a.maxWidth;
    if (maxWidth) {
        return "max-width: " + maxWidth + "px;";
    }
    else {
        return '';
    }
}
function interactive(_a) {
    var isInteractive = _a.isInteractive;
    if (isInteractive) {
        return "\n      cursor: pointer;\n      :hover {\n        background-color: " + theme["colors"].B50 + ";\n      }\n    ";
    }
    else {
        return '';
    }
}
function selected(_a) {
    var isSelected = _a.isSelected;
    return isSelected
        ? "&::after {\n        cursor: pointer;\n        box-shadow: 0 0 0 2px " + theme["colors"].B100 + ";\n        content: '';\n        outline: none;\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        left: 0;\n      }"
        : '';
}
var Wrapper = styled_components_browser_esm["default"].div(templateObject_1 || (templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  height: 40px;\n  color: ", ";\n  font-family: ", ";\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 3px;\n  background-color: ", ";\n  position: relative;\n  ", " ", " ", " ", ";\n  ", "\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  height: 40px;\n  color: ", ";\n  font-family: ", ";\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 3px;\n  background-color: ", ";\n  position: relative;\n  ", " ", " ", " ", ";\n  ", "\n"])), theme["colors"].N300, constants["i" /* fontFamily */], theme["colors"].N20A, mixins["b" /* borderRadius */], styled_minWidth, styled_maxWidth, interactive, selected);
var Icon = styled_components_browser_esm["default"].span(templateObject_2 || (templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  display: inline-flex;\n"], ["\n  display: inline-flex;\n"])));
var Text = styled_components_browser_esm["default"].span(templateObject_3 || (templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  margin-left: 12px;\n"], ["\n  margin-left: 12px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/CollapsedFrame/index.js



var CollapsedFrame_CollapsedFrame = /** @class */ (function (_super) {
    tslib_es6["__extends"](CollapsedFrame, _super);
    function CollapsedFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            var onClick = _this.props.onClick;
            if (onClick) {
                event.preventDefault();
                event.stopPropagation();
                onClick(event);
            }
        };
        // imitate a button for accessibility reasons
        _this.handleKeyPress = function (event) {
            if (event.key !== ' ' && event.key !== 'Enter') {
                return;
            }
            var onClick = _this.props.onClick;
            if (onClick) {
                event.preventDefault();
                event.stopPropagation();
                onClick(event);
            }
        };
        return _this;
    }
    CollapsedFrame.prototype.render = function () {
        var _a = this.props, isSelected = _a.isSelected, minWidth = _a.minWidth, maxWidth = _a.maxWidth, children = _a.children, onClick = _a.onClick;
        var isInteractive = Boolean(onClick);
        return (react["createElement"](Wrapper, { minWidth: minWidth, maxWidth: maxWidth, isInteractive: isInteractive, isSelected: isSelected, tabIndex: isInteractive ? 0 : undefined, role: isInteractive ? 'button' : undefined, onClick: this.handleClick, onKeyPress: this.handleKeyPress }, children));
    };
    return CollapsedFrame;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/dimensions.js
var dimensions = __webpack_require__(952);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/SingleLineLayout/styled.js


var styled_Wrapper = styled_components_browser_esm["default"].div(styled_templateObject_1 || (styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 12px;\n  > * + * {\n    margin-left: 12px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 12px;\n  > * + * {\n    margin-left: 12px;\n  }\n"])));
var Left = styled_components_browser_esm["default"].div(styled_templateObject_2 || (styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  > * {\n    /* hack to vertically center the spinner which is display: inline-block; */\n    display: inline-flex;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  > * {\n    /* hack to vertically center the spinner which is display: inline-block; */\n    display: inline-flex;\n  }\n"])));
var Middle = styled_components_browser_esm["default"].div(styled_templateObject_3 || (styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-grow: 1;\n  overflow: hidden;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-grow: 1;\n  overflow: hidden;\n"])));
var Right = styled_components_browser_esm["default"].div(templateObject_4 || (templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n"])));
var styled_templateObject_1, styled_templateObject_2, styled_templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/SingleLineLayout/index.js



var SingleLineLayout_SingleLineLayout = /** @class */ (function (_super) {
    tslib_es6["__extends"](SingleLineLayout, _super);
    function SingleLineLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleLineLayout.prototype.render = function () {
        var _a = this.props, left = _a.left, middle = _a.middle, right = _a.right;
        return (react["createElement"](styled_Wrapper, null,
            react["createElement"](Left, null, left),
            react["createElement"](Middle, null, middle),
            react["createElement"](Right, null, right)));
    };
    return SingleLineLayout;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/messages.js
var messages = __webpack_require__(938);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvingView/index.js








var ResolvingView_BlockCardResolvingView = /** @class */ (function (_super) {
    tslib_es6["__extends"](BlockCardResolvingView, _super);
    function BlockCardResolvingView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockCardResolvingView.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, isSelected = _a.isSelected;
        return (react["createElement"](CollapsedFrame_CollapsedFrame, { isSelected: isSelected, minWidth: dimensions["b" /* minWidth */], maxWidth: dimensions["a" /* maxWidth */], onClick: onClick },
            react["createElement"](SingleLineLayout_SingleLineLayout, { left: react["createElement"](Spinner["a" /* default */], { size: "small" }), middle: react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].loading)) })));
    };
    return BlockCardResolvingView;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ResolvedView/index.js + 15 modules
var ResolvedView = __webpack_require__(1198);

// EXTERNAL MODULE: ./node_modules/@atlaskit/button/components/Button.js + 4 modules
var Button = __webpack_require__(829);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/MultiLineLayout/styled.js


var MultiLineLayout_styled_Wrapper = styled_components_browser_esm["default"].div(MultiLineLayout_styled_templateObject_1 || (MultiLineLayout_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 3px 8px;\n  > * + * {\n    margin-left: 8px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 3px 8px;\n  > * + * {\n    margin-left: 8px;\n  }\n"])));
var styled_Left = styled_components_browser_esm["default"].div(MultiLineLayout_styled_templateObject_2 || (MultiLineLayout_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  > * {\n    /* hack to vertically center the spinner which is display: inline-block; */\n    display: inline-flex;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  > * {\n    /* hack to vertically center the spinner which is display: inline-block; */\n    display: inline-flex;\n  }\n"])));
var styled_Middle = styled_components_browser_esm["default"].div(MultiLineLayout_styled_templateObject_3 || (MultiLineLayout_styled_templateObject_3 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-grow: 1;\n  overflow: hidden;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-grow: 1;\n  overflow: hidden;\n"])));
var styled_Right = styled_components_browser_esm["default"].div(styled_templateObject_4 || (styled_templateObject_4 = tslib_es6["__makeTemplateObject"](["\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n"])));
var MultiLineLayout_styled_templateObject_1, MultiLineLayout_styled_templateObject_2, MultiLineLayout_styled_templateObject_3, styled_templateObject_4;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/MultiLineLayout/index.js



var MultiLineLayout_MultiLineLayout = /** @class */ (function (_super) {
    tslib_es6["__extends"](MultiLineLayout, _super);
    function MultiLineLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiLineLayout.prototype.render = function () {
        var _a = this.props, left = _a.left, middle = _a.middle, right = _a.right;
        return (react["createElement"](MultiLineLayout_styled_Wrapper, null,
            react["createElement"](styled_Left, null, left),
            react["createElement"](styled_Middle, null, middle),
            react["createElement"](styled_Right, null, right)));
    };
    return MultiLineLayout;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/CollapsedIconTitleDescriptionLayout/styled.js




var Title = styled_components_browser_esm["default"].div(CollapsedIconTitleDescriptionLayout_styled_templateObject_1 || (CollapsedIconTitleDescriptionLayout_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: ", ";\n  margin-bottom: 2px;\n  ", ";\n"], ["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: ", ";\n  margin-bottom: 2px;\n  ", ";\n"])), theme["colors"].N800, 16 / 14, Object(mixins["e" /* ellipsis */])('100%'));
var Description = styled_components_browser_esm["default"].div(CollapsedIconTitleDescriptionLayout_styled_templateObject_2 || (CollapsedIconTitleDescriptionLayout_styled_templateObject_2 = tslib_es6["__makeTemplateObject"](["\n  color: ", ";\n  font-size: 12px;\n  font-weight: normal;\n  line-height: ", ";\n  margin-bottom: 2px;\n  ", ";\n"], ["\n  color: ", ";\n  font-size: 12px;\n  font-weight: normal;\n  line-height: ", ";\n  margin-bottom: 2px;\n  ", ";\n"])), theme["colors"].N300, 16 / 12, Object(mixins["e" /* ellipsis */])('100%'));
var CollapsedIconTitleDescriptionLayout_styled_templateObject_1, CollapsedIconTitleDescriptionLayout_styled_templateObject_2;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/CollapsedIconTitleDescriptionLayout/index.js




var CollapsedIconTitleDescriptionLayout_CollapsedIconTitleDescriptionLayout = /** @class */ (function (_super) {
    tslib_es6["__extends"](CollapsedIconTitleDescriptionLayout, _super);
    function CollapsedIconTitleDescriptionLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollapsedIconTitleDescriptionLayout.prototype.render = function () {
        var _a = this.props, icon = _a.icon, title = _a.title, description = _a.description, other = _a.other;
        return (react["createElement"](MultiLineLayout_MultiLineLayout, { left: icon, middle: react["createElement"](react["Fragment"], null,
                react["createElement"](Title, null, title.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')),
                react["createElement"](Description, null, description)), right: other }));
    };
    return CollapsedIconTitleDescriptionLayout;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ImageIcon/index.js + 1 modules
var ImageIcon = __webpack_require__(986);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/UnauthorisedView/index.js









var UnauthorisedView_BlockCardUnauthorisedView = /** @class */ (function (_super) {
    tslib_es6["__extends"](BlockCardUnauthorisedView, _super);
    function BlockCardUnauthorisedView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleAuthorise = function (event) {
            var onAuthorise = _this.props.onAuthorise;
            if (onAuthorise) {
                event.preventDefault();
                event.stopPropagation();
                onAuthorise();
            }
        };
        return _this;
    }
    BlockCardUnauthorisedView.prototype.render = function () {
        var _a = this.props, icon = _a.icon, url = _a.url, onClick = _a.onClick, onAuthorise = _a.onAuthorise, isSelected = _a.isSelected;
        return (react["createElement"](CollapsedFrame_CollapsedFrame, { isSelected: isSelected, minWidth: dimensions["b" /* minWidth */], maxWidth: dimensions["a" /* maxWidth */], onClick: onClick },
            react["createElement"](CollapsedIconTitleDescriptionLayout_CollapsedIconTitleDescriptionLayout, { icon: react["createElement"](ImageIcon["a" /* ImageIcon */], { src: icon, size: 24 }), title: url, description: react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].connect_link_account)), other: onAuthorise && (react["createElement"](Button["a" /* default */], { appearance: "subtle", spacing: "compact", onClick: this.handleAuthorise }, "Connect")) })));
    };
    return BlockCardUnauthorisedView;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/lock-filled.js
var lock_filled = __webpack_require__(993);
var lock_filled_default = /*#__PURE__*/__webpack_require__.n(lock_filled);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ForbiddenView/styled.js




var IconBackground = styled_components_browser_esm["default"].div(ForbiddenView_styled_templateObject_1 || (ForbiddenView_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  ", "\n  ", "\n  background-color: ", ";\n"], ["\n  ", "\n  ", "\n  background-color: ", ";\n"])), mixins["b" /* borderRadius */], Object(mixins["g" /* size */])(24), theme["colors"].B200);
var ForbiddenView_styled_templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ForbiddenView/index.js











var ForbiddenView_BlockCardForbiddenView = /** @class */ (function (_super) {
    tslib_es6["__extends"](BlockCardForbiddenView, _super);
    function BlockCardForbiddenView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleAuthorise = function (event) {
            var onAuthorise = _this.props.onAuthorise;
            if (onAuthorise) {
                event.preventDefault();
                event.stopPropagation();
                onAuthorise();
            }
        };
        return _this;
    }
    BlockCardForbiddenView.prototype.render = function () {
        var _a = this.props, url = _a.url, onClick = _a.onClick, onAuthorise = _a.onAuthorise, isSelected = _a.isSelected;
        return (react["createElement"](CollapsedFrame_CollapsedFrame, { isSelected: isSelected, minWidth: dimensions["b" /* minWidth */], maxWidth: dimensions["a" /* maxWidth */], onClick: onClick },
            react["createElement"](CollapsedIconTitleDescriptionLayout_CollapsedIconTitleDescriptionLayout, { icon: react["createElement"](IconBackground, null,
                    react["createElement"](lock_filled_default.a, { label: "forbidden", size: "medium", primaryColor: theme["colors"].N0 })), title: url, description: react["createElement"](react["Fragment"], null,
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].invalid_permissions)),
                    ' ',
                    onAuthorise && (react["createElement"](Button["a" /* default */], { appearance: "link", spacing: "none", onClick: this.handleAuthorise },
                        react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].try_another_account))))) })));
    };
    return BlockCardForbiddenView;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/warning.js
var warning = __webpack_require__(415);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/BlockCard/ErroredView/index.js










var ErroredView_BlockCardErroredView = /** @class */ (function (_super) {
    tslib_es6["__extends"](BlockCardErroredView, _super);
    function BlockCardErroredView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRetry = function (event) {
            var onRetry = _this.props.onRetry;
            if (onRetry) {
                event.preventDefault();
                event.stopPropagation();
                onRetry();
            }
        };
        return _this;
    }
    BlockCardErroredView.prototype.render = function () {
        var _a = this.props, url = _a.url, message = _a.message, onClick = _a.onClick, onRetry = _a.onRetry, isSelected = _a.isSelected;
        return (react["createElement"](CollapsedFrame_CollapsedFrame, { isSelected: isSelected, minWidth: dimensions["b" /* minWidth */], maxWidth: dimensions["a" /* maxWidth */], onClick: onClick },
            react["createElement"](CollapsedIconTitleDescriptionLayout_CollapsedIconTitleDescriptionLayout, { icon: react["createElement"](warning_default.a, { label: "error", size: "medium", primaryColor: theme["colors"].Y300 }), title: url, description: react["createElement"](react["Fragment"], null,
                    message,
                    ' ',
                    onRetry && (react["createElement"](Button["a" /* default */], { appearance: "link", spacing: "none", onClick: this.handleRetry },
                        react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].try_again))))) })));
    };
    return BlockCardErroredView;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/smart-card/extractors/block/index.js + 8 modules
var block = __webpack_require__(1023);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/view/BlockCard/index.js





var BlockCard = function (_a) {
    var url = _a.url, _b = _a.cardState, status = _b.status, details = _b.details, handleAuthorize = _a.handleAuthorize, handleErrorRetry = _a.handleErrorRetry, handleFrameClick = _a.handleFrameClick, isSelected = _a.isSelected;
    switch (status) {
        case 'pending':
            return react["createElement"](LinkView["a" /* CardLinkView */], { link: url, isSelected: isSelected });
        case 'resolving':
            return (react["createElement"](ResolvingView_BlockCardResolvingView, { isSelected: isSelected, onClick: handleFrameClick }));
        case 'resolved':
            return (react["createElement"](ResolvedView["a" /* BlockCardResolvedView */], tslib_es6["__assign"]({}, Object(block["a" /* extractBlockPropsFromJSONLD */])((details && details.data) || {}), { isSelected: isSelected, onClick: handleFrameClick })));
        case 'unauthorized':
            return (react["createElement"](UnauthorisedView_BlockCardUnauthorisedView, { icon: Object(utils["a" /* getCollapsedIcon */])(details), isSelected: isSelected, url: url, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'forbidden':
            return (react["createElement"](ForbiddenView_BlockCardForbiddenView, { url: url, isSelected: isSelected, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'not_found':
            return (react["createElement"](ErroredView_BlockCardErroredView, { url: url, isSelected: isSelected, message: "We couldn't find this link", onClick: handleFrameClick }));
        case 'errored':
            return (react["createElement"](ErroredView_BlockCardErroredView, { url: url, isSelected: isSelected, message: "We couldn't load this link", onClick: handleFrameClick, onRetry: handleErrorRetry }));
    }
};
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/Frame/index.js + 1 modules
var Frame = __webpack_require__(398);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/IconAndTitleLayout/index.js
var IconAndTitleLayout = __webpack_require__(951);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/IconAndTitleLayout/styled.js
var styled = __webpack_require__(965);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/ResolvingView/styled.js



var SpinnerWrapper = Object(styled_components_browser_esm["default"])(styled["b" /* IconTitleWrapper */])(ResolvingView_styled_templateObject_1 || (ResolvingView_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  vertical-align: text-top;\n  margin-left: 2px;\n"], ["\n  vertical-align: text-top;\n  margin-left: 2px;\n"])));
var ResolvingView_styled_templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/ResolvingView/index.js






var ResolvingView_InlineCardResolvingView = /** @class */ (function (_super) {
    tslib_es6["__extends"](InlineCardResolvingView, _super);
    function InlineCardResolvingView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineCardResolvingView.prototype.render = function () {
        var _a = this.props, url = _a.url, onClick = _a.onClick, isSelected = _a.isSelected;
        return (react["createElement"](Frame["a" /* Frame */], { onClick: onClick, isSelected: isSelected },
            react["createElement"](IconAndTitleLayout["a" /* IconAndTitleLayout */], { icon: react["createElement"](SpinnerWrapper, null,
                    react["createElement"](Spinner["a" /* default */], { size: 12 })), title: url })));
    };
    return InlineCardResolvingView;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/ResolvedView/index.js
var InlineCard_ResolvedView = __webpack_require__(1184);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/utils.js
var truncateUrlForErrorView = function (str, len) {
    if (len === void 0) { len = 40; }
    var clean = str.replace(/https?:\/\//gi, '');
    return clean.length > len - 3 ? clean.substr(0, len) + '...' : clean;
};
//# sourceMappingURL=utils.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/UnauthorisedView/index.js









var UnauthorisedView_InlineCardUnauthorizedView = /** @class */ (function (_super) {
    tslib_es6["__extends"](InlineCardUnauthorizedView, _super);
    function InlineCardUnauthorizedView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleConnectAccount = function (event) {
            var onAuthorise = _this.props.onAuthorise;
            event.preventDefault();
            event.stopPropagation();
            return onAuthorise();
        };
        return _this;
    }
    InlineCardUnauthorizedView.prototype.render = function () {
        var _a = this.props, url = _a.url, icon = _a.icon, onClick = _a.onClick, isSelected = _a.isSelected, onAuthorise = _a.onAuthorise;
        return (react["createElement"](Frame["a" /* Frame */], { onClick: onClick, isSelected: isSelected },
            react["createElement"](IconAndTitleLayout["a" /* IconAndTitleLayout */], { icon: icon, title: truncateUrlForErrorView(url), titleColor: theme["colors"].N500 }),
            !onAuthorise ? ('') : (react["createElement"](react["Fragment"], null, " \u2011 ",
                react["createElement"](Button["a" /* default */], { spacing: "none", appearance: "link", onClick: this.handleConnectAccount },
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].connect_link_account)))))));
    };
    return InlineCardUnauthorizedView;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/Icon.js
var InlineCard_Icon = __webpack_require__(966);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/ForbiddenView/styled.js



var ForbiddenWrapper = styled_components_browser_esm["default"].span(InlineCard_ForbiddenView_styled_templateObject_1 || (InlineCard_ForbiddenView_styled_templateObject_1 = tslib_es6["__makeTemplateObject"](["\n  color: ", "\n  hyphens: auto;\n  overflow-wrap: break-word;\n"], ["\n  color: ", "\n  hyphens: auto;\n  overflow-wrap: break-word;\n"])), theme["colors"].N500);
var InlineCard_ForbiddenView_styled_templateObject_1;
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/ForbiddenView/index.js












var ForbiddenView_InlineCardForbiddenView = /** @class */ (function (_super) {
    tslib_es6["__extends"](InlineCardForbiddenView, _super);
    function InlineCardForbiddenView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRetry = function (event) {
            var onAuthorise = _this.props.onAuthorise;
            event.preventDefault();
            event.stopPropagation();
            onAuthorise();
        };
        return _this;
    }
    InlineCardForbiddenView.prototype.render = function () {
        var _a = this.props, url = _a.url, onClick = _a.onClick, isSelected = _a.isSelected, onAuthorise = _a.onAuthorise;
        return (react["createElement"](Frame["a" /* Frame */], { onClick: onClick, isSelected: isSelected },
            react["createElement"](IconAndTitleLayout["a" /* IconAndTitleLayout */], { icon: react["createElement"](InlineCard_Icon["a" /* AKIconWrapper */], null,
                    react["createElement"](lock_filled_default.a, { label: "error", size: "small", primaryColor: theme["colors"].B400 })), title: truncateUrlForErrorView(url), titleColor: theme["colors"].N500 }),
            !onAuthorise ? ('') : (react["createElement"](react["Fragment"], null,
                react["createElement"](ForbiddenWrapper, null, " - ",
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].invalid_permissions)), " "),
                react["createElement"](Button["a" /* default */], { spacing: "none", appearance: "link", onClick: this.handleRetry },
                    react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].try_another_account)))))));
    };
    return InlineCardForbiddenView;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/error.js
var error = __webpack_require__(947);
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/InlineCard/ErroredView/index.js











var ErroredView_InlineCardErroredView = /** @class */ (function (_super) {
    tslib_es6["__extends"](InlineCardErroredView, _super);
    function InlineCardErroredView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRetry = function (event) {
            var onRetry = _this.props.onRetry;
            if (onRetry) {
                event.preventDefault();
                event.stopPropagation();
                onRetry();
            }
        };
        return _this;
    }
    InlineCardErroredView.prototype.render = function () {
        var _a = this.props, url = _a.url, message = _a.message, onClick = _a.onClick, onRetry = _a.onRetry, isSelected = _a.isSelected;
        return (react["createElement"](Frame["a" /* Frame */], { onClick: onClick, isSelected: isSelected },
            react["createElement"](IconAndTitleLayout["a" /* IconAndTitleLayout */], { icon: react["createElement"](InlineCard_Icon["a" /* AKIconWrapper */], null,
                    react["createElement"](error_default.a, { label: "error", size: "small", primaryColor: theme["colors"].R300 })), title: truncateUrlForErrorView(url) + ' - ' + message.trim(), titleColor: theme["colors"].R300 }),
            ' ',
            onRetry && (react["createElement"](Button["a" /* default */], { spacing: "none", appearance: "link", onClick: this.handleRetry },
                react["createElement"](index_es["a" /* FormattedMessage */], tslib_es6["__assign"]({}, messages["a" /* messages */].try_again))))));
    };
    return InlineCardErroredView;
}(react["Component"]));

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/smart-card/extractors/inline/index.js + 14 modules
var inline = __webpack_require__(1022);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/view/InlineCard/index.js





var InlineCard = function (_a) {
    var url = _a.url, cardState = _a.cardState, handleAuthorize = _a.handleAuthorize, handleFrameClick = _a.handleFrameClick, isSelected = _a.isSelected;
    var status = cardState.status, details = cardState.details;
    switch (status) {
        case 'pending':
            return react["createElement"](LinkView["a" /* CardLinkView */], { link: url, isSelected: isSelected });
        case 'resolving':
            return (react["createElement"](ResolvingView_InlineCardResolvingView, { url: url, isSelected: isSelected, onClick: handleFrameClick }));
        case 'resolved':
            return (react["createElement"](InlineCard_ResolvedView["a" /* InlineCardResolvedView */], tslib_es6["__assign"]({}, Object(inline["a" /* extractInlinePropsFromJSONLD */])((details && details.data) || {}), { isSelected: isSelected, onClick: handleFrameClick })));
        case 'unauthorized':
            return (react["createElement"](UnauthorisedView_InlineCardUnauthorizedView, { icon: Object(utils["a" /* getCollapsedIcon */])(details), url: url, isSelected: isSelected, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'forbidden':
            return (react["createElement"](ForbiddenView_InlineCardForbiddenView, { url: url, isSelected: isSelected, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'not_found':
            return (react["createElement"](ErroredView_InlineCardErroredView, { url: url, isSelected: isSelected, message: "We couldn't find this link", onClick: handleFrameClick }));
        case 'errored':
            return react["createElement"](LinkView["a" /* CardLinkView */], { link: url, isSelected: isSelected });
    }
};
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/smart-card/state/index.js + 3 modules
var smart_card_state = __webpack_require__(423);

// CONCATENATED MODULE: ./node_modules/@atlaskit/smart-card/view/CardWithUrl/component.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyCardWithUrlContent", function() { return LazyCardWithUrlContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWithUrlContent", function() { return CardWithUrlContent; });










function LazyCardWithUrlContent(props) {
    var appearance = props.appearance, isSelected = props.isSelected, container = props.container, url = props.url;
    return (react["createElement"](esnext["a" /* default */], { offset: 100, component: appearance === 'inline' ? 'span' : 'div', placeholder: react["createElement"](LinkView["a" /* CardLinkView */], { isSelected: isSelected, key: 'lazy-render-placeholder', link: url }), scrollContainer: container, content: react["createElement"](CardWithUrlContent, tslib_es6["__assign"]({}, props)) }));
}
function CardWithUrlContent(_a) {
    var url = _a.url, isSelected = _a.isSelected, onClick = _a.onClick, appearance = _a.appearance, dispatchAnalytics = _a.dispatchAnalytics;
    // Get state, actions for this card.
    var _b = Object(smart_card_state["a" /* useSmartLink */])(url, dispatchAnalytics), state = _b.state, actions = _b.actions;
    var services = Object(helpers["d" /* getServices */])(state.details);
    // Setup UI handlers.
    var handleClick = function (event) {
        Object(utils["e" /* isSpecialKey */])(event)
            ? window.open(url, '_blank')
            : window.open(url, '_self');
    };
    var handleAnalytics = function () {
        var definitionId = Object(helpers["c" /* getDefinitionId */])(state.details);
        if (state.status === 'resolved') {
            dispatchAnalytics(Object(analytics["l" /* uiCardClickedEvent */])(appearance, definitionId));
        }
    };
    var handleClickWrapper = function (event) {
        handleAnalytics();
        onClick ? onClick(event) : handleClick(event);
    };
    var handleAuthorize = function () { return actions.authorize(appearance); };
    // Lazily render into the viewport.
    return appearance === 'inline' ? (react["createElement"](InlineCard, { url: url, cardState: state, handleAuthorize: (services.length && handleAuthorize) || undefined, handleFrameClick: handleClickWrapper, isSelected: isSelected })) : (react["createElement"](BlockCard, { url: url, cardState: state, handleAuthorize: (services.length && handleAuthorize) || undefined, handleErrorRetry: actions.reload, handleFrameClick: handleClickWrapper, isSelected: isSelected }));
}
//# sourceMappingURL=component.js.map

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

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  var regex = /(auto|scroll)/;

  var parents = function (node, ps) {
    if (node.parentNode === null) { return ps; }

    return parents(node.parentNode, ps.concat([node]));
  };

  var style = function (node, prop) {
    return getComputedStyle(node, null).getPropertyValue(prop);
  };

  var overflow = function (node) {
    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
  };

  var scroll = function (node) {
   return regex.test(overflow(node));
  };

  var scrollParent = function (node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return ;
    }

    var ps = parents(node.parentNode, []);

    for (var i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  };

  return scrollParent;
}));


/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/scrollparent/scrollparent.js
var scrollparent = __webpack_require__(968);
var scrollparent_default = /*#__PURE__*/__webpack_require__.n(scrollparent);

// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/getElementBounds.js
function getElementBounds_getElementBounds(element) {
  if (!element) {
    return undefined;
  }

  var rect = element.getBoundingClientRect();
  return {
    left: window.pageXOffset + rect.left,
    right: window.pageXOffset + rect.left + rect.width,
    top: window.pageYOffset + rect.top,
    bottom: window.pageYOffset + rect.top + rect.height
  };
}
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/getViewportBounds.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var utils_getViewportBounds = (function (container) {
  if (!container) {
    return undefined;
  }

  if (container === window) {
    return {
      top: window.pageYOffset,
      left: window.pageXOffset,
      bottom: window.pageYOffset + window.innerHeight,
      right: window.pageXOffset + window.innerWidth
    };
  } else {
    var bounds = getElementBounds_getElementBounds(container);

    if (bounds) {
      return _objectSpread({}, bounds, {
        bottom: bounds.top + container.offsetHeight,
        right: bounds.left + container.offsetWidth
      });
    } else {
      return undefined;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/convertOffsetToBounds.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ var convertOffsetToBounds = (function (offset) {
  if (!offset) {
    return undefined;
  }

  var offsetTop;
  var offsetRight;
  var offsetBottom;
  var offsetLeft;

  if (_typeof(offset) === 'object') {
    offsetTop = offset.top || 0;
    offsetRight = offset.right || 0;
    offsetBottom = offset.bottom || 0;
    offsetLeft = offset.left || 0;
  } else {
    offsetTop = offset || 0;
    offsetRight = offset || 0;
    offsetBottom = offset || 0;
    offsetLeft = offset || 0;
  }

  return {
    top: offsetTop,
    right: offsetRight,
    bottom: offsetBottom,
    left: offsetLeft
  };
});
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/isElementInViewport.js
/* harmony default export */ var isElementInViewport = (function (elementBounds, viewportBounds, offset) {
  var offsetTop = offset && offset.top || 0;
  var offsetRight = offset && offset.right || 0;
  var offsetBottom = offset && offset.bottom || 0;
  var offsetLeft = offset && offset.left || 0;
  return elementBounds.bottom + offsetBottom >= viewportBounds.top && elementBounds.top - offsetTop <= viewportBounds.bottom && elementBounds.right + offsetRight >= viewportBounds.left && elementBounds.left - offsetLeft <= viewportBounds.right;
});
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/isBackCompatMode.js
/* harmony default export */ var isBackCompatMode = (function () {
  return document.compatMode === "BackCompat";
});
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/utils/eventListenerOptions.js
var isPassiveListenerSupported = function isPassiveListenerSupported() {
  var supported = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supported = true;
      }
    });
    window.addEventListener('test', null, opts);
    window.removeEventListener('test', null, opts);
  } catch (e) {}

  return supported;
};

/* harmony default export */ var eventListenerOptions = (isPassiveListenerSupported() ? {
  passive: true
} : undefined);
// CONCATENATED MODULE: ./node_modules/react-lazily-render/dist/esnext/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return esnext_LazilyRender; });
function esnext_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { esnext_typeof = function _typeof(obj) { return typeof obj; }; } else { esnext_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return esnext_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (esnext_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function esnext_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var esnext_LazilyRender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LazilyRender, _React$Component);

  function LazilyRender() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LazilyRender);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LazilyRender)).call.apply(_getPrototypeOf2, [this].concat(args)));

    esnext_defineProperty(_assertThisInitialized(_this), "raf", void 0);

    esnext_defineProperty(_assertThisInitialized(_this), "element", void 0);

    esnext_defineProperty(_assertThisInitialized(_this), "container", void 0);

    esnext_defineProperty(_assertThisInitialized(_this), "state", {
      hasBeenScrolledIntoView: false
    });

    esnext_defineProperty(_assertThisInitialized(_this), "update", function () {
      cancelAnimationFrame(_this.raf);
      _this.raf = requestAnimationFrame(function () {
        var elementBounds = _this.getElementBounds();

        var viewportBounds = _this.getViewportBounds();

        var offsetBounds = _this.getOffsetBounds();

        if (!elementBounds || !viewportBounds) {
          return;
        }

        if (isElementInViewport(elementBounds, viewportBounds, offsetBounds)) {
          _this.stopListening(_this.container);

          _this.setState({
            hasBeenScrolledIntoView: true
          }, function () {
            var onRender = _this.props.onRender;

            if (onRender) {
              onRender();
            }
          });
        }
      });
    });

    esnext_defineProperty(_assertThisInitialized(_this), "handleMount", function (element) {
      var scrollContainer = _this.props.scrollContainer;
      _this.element = element;
      _this.container = _this.getContainer(scrollContainer);
    });

    return _this;
  }

  _createClass(LazilyRender, [{
    key: "getContainer",
    value: function getContainer(scrollContainer) {
      if (scrollContainer) {
        return scrollContainer;
      } else {
        if (this.element) {
          var container = scrollparent_default()(this.element);

          if (container === document.scrollingElement || container === document.documentElement || !isBackCompatMode() && container == document.body) {
            return window;
          } else {
            return container;
          }
        } else {
          return undefined;
        }
      }
    }
  }, {
    key: "getViewportBounds",
    value: function getViewportBounds() {
      return utils_getViewportBounds(this.container);
    }
  }, {
    key: "getElementBounds",
    value: function getElementBounds() {
      return getElementBounds_getElementBounds(this.element);
    }
  }, {
    key: "getOffsetBounds",
    value: function getOffsetBounds() {
      var offset = this.props.offset;
      return convertOffsetToBounds(offset);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var prevContainer = prevProps.scrollContainer;
      var nextContainer = this.props.scrollContainer; // If a scroll container was defined before, do some cleanup
      // and bootstrap the next scroll container.

      if (prevContainer !== nextContainer) {
        // If the previous container was already utilised, no cleanup
        // is required - already done in LazilyRender.update().
        if (!prevState.hasBeenScrolledIntoView) {
          this.stopListening(prevContainer);
        } // Set a new listener if the scrollContainer is defined, and update 
        // the container property accordingly. Note: this should only be done
        // when the next container is different.


        this.container = this.getContainer(nextContainer);
        this.startListening(this.container); // Signal that the element has not been scrolled into view and 
        // recompute its position. This will essentially 'reset' the node's
        // current status back to a placeholder item if need be.

        this.setState({
          hasBeenScrolledIntoView: false
        }, function () {
          _this2.update();
        });
      }
    }
  }, {
    key: "startListening",
    value: function startListening(container) {
      if (container) container.addEventListener('scroll', this.update, eventListenerOptions);
      window.addEventListener('resize', this.update);
    }
  }, {
    key: "stopListening",
    value: function stopListening(container) {
      if (container) container.removeEventListener('scroll', this.update, eventListenerOptions);
      window.removeEventListener('resize', this.update);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update();
      this.startListening(this.container);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.container);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          content = _this$props.content,
          children = _this$props.children;
      var hasBeenScrolledIntoView = this.state.hasBeenScrolledIntoView;

      if (!hasBeenScrolledIntoView && placeholder) {
        return placeholder;
      }

      if (hasBeenScrolledIntoView && content) {
        return content;
      }

      if (children) {
        return children(hasBeenScrolledIntoView);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          component = _this$props2.component;
      return react["createElement"](component || 'div', {
        ref: this.handleMount,
        className: className,
        children: this.renderChildren()
      });
    }
  }]);

  return LazilyRender;
}(react["Component"]);



/***/ }),

/***/ 993:
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

var LockFilledIcon = function LockFilledIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 10V8.002A4.004 4.004 0 0 1 12 4a4 4 0 0 1 4 4.002V10a2 2 0 0 1 2 2v6c0 1.105-.902 2-2.009 2H8.01A2 2 0 0 1 6 18v-6c0-1.102.897-1.995 2-2zm2 0h4V8.002A2.001 2.001 0 0 0 12 6c-1.102 0-2 .898-2 2.002V10zm2 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"/></svg>"
  }, props));
};

LockFilledIcon.displayName = 'LockFilledIcon';
var _default = LockFilledIcon;
exports.default = _default;

/***/ })

}]);