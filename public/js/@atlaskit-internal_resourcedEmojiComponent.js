(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _util_type_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _CachingEmoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(401);
/* harmony import */ var _EmojiPlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(263);








var ResourcedEmojiComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ResourcedEmojiComponent, _super);
    function ResourcedEmojiComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.ready = false;
        _this.state = {
            emoji: undefined,
            loaded: false,
        };
        return _this;
    }
    ResourcedEmojiComponent.prototype.getChildContext = function () {
        return {
            emoji: {
                emojiProvider: this.props.emojiProvider,
            },
        };
    };
    ResourcedEmojiComponent.prototype.refreshEmoji = function (emojiProvider, emojiId) {
        var _this = this;
        var foundEmoji = emojiProvider.findByEmojiId(emojiId);
        if (Object(_util_type_helpers__WEBPACK_IMPORTED_MODULE_4__[/* isPromise */ "n"])(foundEmoji)) {
            this.setState({
                loaded: false,
            });
            foundEmoji.then(function (emoji) {
                if (_this.ready) {
                    // don't update state if component was unmounted
                    _this.setState({
                        emoji: emoji,
                        loaded: true,
                    });
                }
            });
        }
        else {
            // loaded
            this.setState({
                emoji: foundEmoji,
                loaded: true,
            });
        }
    };
    ResourcedEmojiComponent.prototype.componentWillMount = function () {
        this.ready = true;
        if (!this.state.emoji) {
            // using componentWillMount instead of componentDidMount to avoid needless
            // rerendering.
            this.refreshEmoji(this.props.emojiProvider, this.props.emojiId);
        }
    };
    ResourcedEmojiComponent.prototype.componentWillUnmount = function () {
        this.ready = false;
    };
    ResourcedEmojiComponent.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.emojiProvider !== this.props.emojiProvider ||
            nextProps.emojiId !== this.props.emojiId) {
            this.refreshEmoji(nextProps.emojiProvider, nextProps.emojiId);
        }
    };
    ResourcedEmojiComponent.prototype.render = function () {
        var _a = this.props, emojiId = _a.emojiId, _b = _a.fitToHeight, fitToHeight = _b === void 0 ? _util_constants__WEBPACK_IMPORTED_MODULE_3__[/* defaultEmojiHeight */ "f"] : _b, showTooltip = _a.showTooltip;
        var _c = this.state, emoji = _c.emoji, loaded = _c.loaded;
        var shortName = emojiId.shortName, fallback = emojiId.fallback;
        if (emoji) {
            return this.emojiWrapper(react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_CachingEmoji__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], { emoji: emoji, showTooltip: showTooltip, fitToHeight: fitToHeight }));
        }
        else if (loaded) {
            // loaded but not found - render fallback
            return this.emojiWrapper(react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null, fallback || shortName));
        }
        return this.emojiWrapper(react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_EmojiPlaceholder__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], { shortName: shortName, showTooltip: showTooltip, size: fitToHeight || _util_constants__WEBPACK_IMPORTED_MODULE_3__[/* defaultEmojiHeight */ "f"] }));
    };
    ResourcedEmojiComponent.prototype.emojiWrapper = function (element) {
        var _a = this.props.emojiId, shortName = _a.shortName, id = _a.id, fallback = _a.fallback;
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", { "data-emoji-id": id, "data-emoji-short-name": shortName, "data-emoji-text": fallback || shortName }, element));
    };
    ResourcedEmojiComponent.childContextTypes = {
        emoji: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
    };
    return ResourcedEmojiComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ResourcedEmojiComponent);
//# sourceMappingURL=ResourcedEmojiComponent.js.map

/***/ })

}]);