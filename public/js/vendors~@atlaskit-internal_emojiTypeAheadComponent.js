(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ 1202:
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

// EXTERNAL MODULE: ./node_modules/uuid/index.js
var uuid = __webpack_require__(136);
var uuid_default = /*#__PURE__*/__webpack_require__.n(uuid);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/constants.js
var constants = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/type-helpers.js
var type_helpers = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/types.js
var types = __webpack_require__(222);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/logger.js
var logger = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/analytics.js
var analytics = __webpack_require__(949);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/RecordSelectionDefault.js
var RecordSelectionDefault = __webpack_require__(978);

// EXTERNAL MODULE: ./node_modules/@atlaskit/spinner/Spinner/index.js + 3 modules
var Spinner = __webpack_require__(830);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/shared-styles.js
var shared_styles = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/util/mouse.js
var mouse = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/styles.js
var styles = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/common/Scrollable.js
// FIXME - FAB-1732 looking at making a shared component for this






var Scrollable_Scrollable = /** @class */ (function (_super) {
    tslib_es6["__extends"](Scrollable, _super);
    function Scrollable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollableDiv = null;
        // API
        _this.reveal = function (child, forceToTop) {
            if (child && _this.scrollableDiv) {
                var childNode = Object(react_dom["findDOMNode"])(child);
                // Not using Element.scrollIntoView as it scrolls even to top/bottom of view even if
                // already visible
                var scrollableRect = _this.scrollableDiv.getBoundingClientRect();
                var elementRect = childNode.getBoundingClientRect();
                if (forceToTop || elementRect.top < scrollableRect.top) {
                    _this.scrollableDiv.scrollTop += elementRect.top - scrollableRect.top;
                }
                else if (elementRect.bottom > scrollableRect.bottom) {
                    _this.scrollableDiv.scrollTop +=
                        elementRect.bottom - scrollableRect.bottom;
                }
            }
        };
        _this.scrollToBottom = function () {
            if (_this.scrollableDiv) {
                _this.scrollableDiv.scrollTop = _this.scrollableDiv.scrollHeight;
            }
        };
        _this.handleScroll = function (event) {
            var sampleOffset = 10;
            var firstElement;
            if (_this.scrollableDiv) {
                var scrollableRect = _this.scrollableDiv.getBoundingClientRect();
                firstElement = document.elementFromPoint(scrollableRect.left + sampleOffset, scrollableRect.top + sampleOffset);
            }
            if (_this.props.onScroll && firstElement) {
                _this.props.onScroll(firstElement, event);
            }
        };
        _this.handleRef = function (ref) {
            _this.scrollableDiv = ref;
        };
        return _this;
    }
    Scrollable.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, maxHeight = _a.maxHeight, onMouseLeave = _a.onMouseLeave;
        var scrollableClasses = ['emoji-scrollable', styles["t" /* emojiScrollable */]];
        if (className) {
            scrollableClasses.push(className);
        }
        var style = maxHeight ? { maxHeight: maxHeight } : {};
        return (react["createElement"]("div", { className: classnames_default()(scrollableClasses), onMouseLeave: onMouseLeave, onScroll: this.handleScroll, ref: this.handleRef, style: style }, children));
    };
    return Scrollable;
}(react["PureComponent"]));
/* harmony default export */ var common_Scrollable = (Scrollable_Scrollable);
//# sourceMappingURL=Scrollable.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/emoji/components/common/EmojiPreview.js + 2 modules
var EmojiPreview = __webpack_require__(985);

// EXTERNAL MODULE: ./node_modules/typestyle/lib.es2015/index.js + 3 modules
var lib_es2015 = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/typeahead/styles.js
var styles_a;


var styles_selected = 'emoji-typeahead-selected';
var emojiTypeAhead = 'emoji-typeahead-element';
var typeAheadListContainer = 'emoji-typeahead-list-container';
var typeAheadList = Object(lib_es2015["a" /* style */])({
    background: 'white',
    border: "1px solid " + shared_styles["h" /* noDialogContainerBorderColor */],
    borderRadius: shared_styles["i" /* noDialogContainerBorderRadius */],
    boxShadow: shared_styles["j" /* noDialogContainerBoxShadow */],
    color: '#333',
    width: shared_styles["g" /* emojiTypeAheadWidth */],
});
var typeAheadEmpty = Object(lib_es2015["a" /* style */])({
    display: 'none',
});
var typeAheadItem = Object(lib_es2015["a" /* style */])({
    cursor: 'pointer',
    display: 'block',
    listStyleType: 'none',
    overflow: 'hidden',
    width: shared_styles["g" /* emojiTypeAheadWidth */],
    $nest: (styles_a = {},
        styles_a["&." + styles_selected] = {
            backgroundColor: shared_styles["e" /* emojiPreviewSelectedColor */],
        },
        styles_a),
});
var typeAheadItemRow = Object(lib_es2015["a" /* style */])({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    verticalAlign: 'middle',
});
var emojiTypeAheadSpinnerContainer = Object(lib_es2015["a" /* style */])({
    position: 'relative',
    height: shared_styles["f" /* emojiTypeAheadMaxHeight */] + "px",
    paddingTop: ((shared_styles["f" /* emojiTypeAheadMaxHeight */] - 30) / 2).toFixed() + "px",
    boxSizing: 'border-box',
});
var emojiTypeAheadSpinner = Object(lib_es2015["a" /* style */])({
    textAlign: 'center',
});
//# sourceMappingURL=styles.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/typeahead/EmojiTypeAheadItem.js








var EmojiTypeAheadItem_EmojiTypeAheadItem = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiTypeAheadItem, _super);
    function EmojiTypeAheadItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // internal, used for callbacks
        _this.onEmojiSelected = function (event) {
            var _a = _this.props, emoji = _a.emoji, onSelection = _a.onSelection;
            if (Object(mouse["b" /* leftClick */])(event) && onSelection) {
                event.preventDefault();
                onSelection(Object(type_helpers["q" /* toEmojiId */])(emoji), emoji, event);
            }
        };
        _this.onEmojiMenuItemMouseMove = function (event) {
            var _a = _this.props, emoji = _a.emoji, onMouseMove = _a.onMouseMove;
            if (onMouseMove) {
                onMouseMove(Object(type_helpers["q" /* toEmojiId */])(emoji), emoji, event);
            }
        };
        return _this;
    }
    EmojiTypeAheadItem.prototype.render = function () {
        var _a;
        var _b = this.props, selected = _b.selected, emoji = _b.emoji;
        var classes = classnames_default()((_a = {
                'ak-emoji-typeahead-item': true
            },
            _a[typeAheadItem] = true,
            _a[styles_selected] = selected,
            _a));
        return (react["createElement"]("div", { className: classes, onMouseDown: this.onEmojiSelected, onMouseMove: this.onEmojiMenuItemMouseMove, "data-emoji-id": emoji.shortName },
            react["createElement"]("div", { className: typeAheadItemRow },
                react["createElement"](EmojiPreview["a" /* default */], { emoji: emoji }))));
    };
    return EmojiTypeAheadItem;
}(react["PureComponent"]));
/* harmony default export */ var typeahead_EmojiTypeAheadItem = (EmojiTypeAheadItem_EmojiTypeAheadItem);
//# sourceMappingURL=EmojiTypeAheadItem.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/typeahead/EmojiTypeAheadList.js












function wrapIndex(emojis, index) {
    var len = emojis.length;
    var newIndex = index;
    while (newIndex < 0 && len > 0) {
        newIndex += len;
    }
    return newIndex % len;
}
function getKey(emoji) {
    return emoji.id || emoji.shortName + "-" + emoji.type;
}
function getKeyByIndex(emojis, index) {
    var emoji = emojis && emojis[index];
    if (emoji) {
        return getKey(emoji);
    }
    return undefined;
}
var EmojiTypeAheadList_EmojiTypeAheadList = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiTypeAheadList, _super);
    function EmojiTypeAheadList(props) {
        var _this = _super.call(this, props) || this;
        // API
        _this.selectNext = function () {
            var newIndex = wrapIndex(_this.props.emojis, _this.state.selectedIndex + 1);
            _this.selectIndex(newIndex);
        };
        _this.selectPrevious = function () {
            var newIndex = wrapIndex(_this.props.emojis, _this.state.selectedIndex - 1);
            _this.selectIndex(newIndex);
        };
        _this.chooseCurrentSelection = function () {
            var _a = _this.props, emojis = _a.emojis, onEmojiSelected = _a.onEmojiSelected;
            var selectedIndex = _this.state.selectedIndex;
            var selectedEmoji = emojis[selectedIndex];
            Object(logger["a" /* default */])('ak-typeahead-list.chooseCurrentSelection', selectedEmoji);
            if (onEmojiSelected) {
                onEmojiSelected(Object(type_helpers["q" /* toEmojiId */])(selectedEmoji), selectedEmoji);
            }
        };
        _this.selectIndexOnHover = function (emojiId, _emoji, event) {
            // TODO: fix this
            if (!event) {
                return;
            }
            var mousePosition = Object(mouse["c" /* mouseLocation */])(event);
            if (Object(mouse["a" /* actualMouseMove */])(_this.lastMousePosition, mousePosition)) {
                _this.selectByEmojiId(emojiId);
            }
            _this.lastMousePosition = mousePosition;
        };
        _this.itemSelected = function (emojiId) {
            _this.selectByEmojiId(emojiId, function () {
                _this.chooseCurrentSelection();
            });
        };
        _this.handleScrollableRef = function (ref) {
            _this.scrollable = ref;
        };
        _this.state = {
            selectedKey: getKeyByIndex(props.emojis, 0),
            selectedIndex: 0,
        };
        return _this;
    }
    EmojiTypeAheadList.prototype.componentWillReceiveProps = function (nextProps) {
        // adjust selection
        var emojis = nextProps.emojis;
        var selectedKey = this.state.selectedKey;
        if (!selectedKey) {
            // go with default of selecting first item
            return;
        }
        for (var i = 0; i < emojis.length; i++) {
            if (selectedKey === emojis[i].id) {
                this.setState({
                    selectedIndex: i,
                });
                return;
            }
        }
        // existing selection not in results, pick first
        this.selectIndexNewEmoji(0, emojis);
    };
    EmojiTypeAheadList.prototype.componentDidUpdate = function () {
        var emojis = this.props.emojis;
        var selectedIndex = this.state.selectedIndex;
        if (emojis && emojis[selectedIndex]) {
            var selectedEmoji = emojis[selectedIndex];
            this.revealItem(selectedEmoji.id || selectedEmoji.shortName);
        }
    };
    // Internal
    EmojiTypeAheadList.prototype.revealItem = function (key) {
        var item = this.items[key];
        if (item && this.scrollable) {
            this.scrollable.reveal(item);
        }
    };
    EmojiTypeAheadList.prototype.selectIndexNewEmoji = function (index, emojis) {
        this.setState({
            selectedIndex: index,
            selectedKey: getKeyByIndex(emojis, index),
        });
    };
    EmojiTypeAheadList.prototype.selectIndex = function (index, callback) {
        var emojis = this.props.emojis;
        this.setState({
            selectedIndex: index,
            selectedKey: getKeyByIndex(emojis, index),
        }, callback);
    };
    EmojiTypeAheadList.prototype.selectByEmojiId = function (emojiId, callback) {
        var emojis = this.props.emojis;
        for (var i = 0; i < emojis.length; i++) {
            var emoji = emojis[i];
            if (emoji.id === emojiId.id) {
                this.selectIndex(i, callback);
                return;
            }
        }
        for (var i = 0; i < emojis.length; i++) {
            var emoji = emojis[i];
            if (emoji.shortName === emojiId.shortName) {
                this.selectIndex(i, callback);
                return;
            }
        }
    };
    EmojiTypeAheadList.prototype.renderItems = function (emojis) {
        var _this = this;
        if (emojis && emojis.length) {
            this.items = {};
            return (react["createElement"]("div", null, emojis.map(function (emoji, idx) {
                var key = getKey(emoji);
                var item = (react["createElement"](typeahead_EmojiTypeAheadItem, { emoji: emoji, key: key, selected: _this.isSelectedEmoji(emoji, idx), onMouseMove: _this.selectIndexOnHover, onSelection: _this.itemSelected, ref: function (ref) {
                        if (ref) {
                            _this.items[key] = ref;
                        }
                        else {
                            delete _this.items[key];
                        }
                    } }));
                return item;
            })));
        }
        return null;
    };
    EmojiTypeAheadList.prototype.isSelectedEmoji = function (emoji, index) {
        var selectedKey = this.state.selectedKey;
        return selectedKey ? selectedKey === emoji.id : index === 0;
    };
    EmojiTypeAheadList.prototype.render = function () {
        var _a;
        var _b = this.props, emojis = _b.emojis, loading = _b.loading;
        var hasEmoji = emojis && emojis.length;
        var classes = classnames_default()((_a = {
                'ak-emoji-typeahead-list': true
            },
            _a[typeAheadList] = true,
            _a[typeAheadEmpty] = !hasEmoji && !loading,
            _a));
        var listBody;
        if (loading) {
            listBody = (react["createElement"]("div", { className: emojiTypeAheadSpinnerContainer },
                react["createElement"]("div", { className: emojiTypeAheadSpinner },
                    react["createElement"](Spinner["a" /* default */], { size: "medium" }))));
        }
        else {
            listBody = this.renderItems(emojis);
        }
        return (react["createElement"]("div", { className: typeAheadListContainer },
            react["createElement"]("div", { className: classes },
                react["createElement"](common_Scrollable, { ref: this.handleScrollableRef, maxHeight: shared_styles["f" /* emojiTypeAheadMaxHeight */] + "px" }, listBody))));
    };
    EmojiTypeAheadList.defaultProps = {
        onEmojiSelected: function () { },
    };
    return EmojiTypeAheadList;
}(react["PureComponent"]));
/* harmony default export */ var typeahead_EmojiTypeAheadList = (EmojiTypeAheadList_EmojiTypeAheadList);
//# sourceMappingURL=EmojiTypeAheadList.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/emoji/components/typeahead/EmojiTypeAheadComponent.js














var isFullShortName = function (query) {
    return query &&
        query.length > 1 &&
        query.charAt(0) === ':' &&
        query.charAt(query.length - 1) === ':';
};
var uniqueExactShortNameMatchIndex = function (searchResult, query) {
    var e_1, _a;
    if (!query) {
        return undefined;
    }
    query = query.toLowerCase();
    var matchIndex;
    var index = 0;
    try {
        for (var _b = tslib_es6["__values"](searchResult.emojis), _c = _b.next(); !_c.done; _c = _b.next()) {
            var emoji = _c.value;
            if (query && emoji.shortName.toLowerCase() === query) {
                if (matchIndex === undefined) {
                    matchIndex = index;
                }
                else {
                    return;
                }
            }
            index++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return matchIndex;
};
var EmojiTypeAheadComponent_EmojiTypeAheadComponent = /** @class */ (function (_super) {
    tslib_es6["__extends"](EmojiTypeAheadComponent, _super);
    function EmojiTypeAheadComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.emojiListRef = null;
        _this.openTime = 0;
        _this.renderStartTime = 0;
        _this.selectNext = function () {
            if (_this.emojiListRef) {
                _this.emojiListRef.selectNext();
            }
        };
        _this.selectPrevious = function () {
            if (_this.emojiListRef) {
                _this.emojiListRef.selectPrevious();
            }
        };
        _this.chooseCurrentSelection = function () {
            _this.pressed = true;
            if (_this.emojiListRef) {
                _this.emojiListRef.chooseCurrentSelection();
            }
        };
        _this.count = function () {
            var emojis = _this.state.emojis;
            return (emojis && emojis.length) || 0;
        };
        _this.getTone = function (tone) {
            return typeof tone === 'undefined'
                ? undefined
                : tone >= 0 && tone <= 5
                    ? ['default', 'light', 'mediumLight', 'medium', 'mediumDark', 'dark'][tone]
                    : undefined;
        };
        _this.onSearchResult = function (result) {
            var emojis = result.emojis, query = result.query;
            var wasVisible = _this.state.visible;
            var visible = emojis.length > 0;
            _this.fireAnalyticsEvent(Object(analytics["o" /* typeaheadRenderedEvent */])(Date.now() - _this.renderStartTime, query, emojis));
            Object(logger["a" /* default */])('emoji-typeahead.applyPropChanges', emojis.length, wasVisible, visible);
            _this.setState({
                emojis: emojis,
                visible: visible,
                loading: false,
            });
            if (isFullShortName(query)) {
                var matchIndex = uniqueExactShortNameMatchIndex(result, query);
                if (matchIndex !== undefined) {
                    var onSelect = Object(RecordSelectionDefault["a" /* createRecordSelectionDefault */])(_this.props.emojiProvider, _this.props.onSelection);
                    _this.fireSelectionEvent(result.emojis[matchIndex], true);
                    onSelect(Object(type_helpers["q" /* toEmojiId */])(result.emojis[matchIndex]), result.emojis[matchIndex]);
                }
            }
            if (wasVisible !== visible) {
                if (visible) {
                    if (_this.props.onOpen) {
                        _this.props.onOpen();
                    }
                }
                else {
                    if (_this.props.onClose) {
                        _this.props.onClose();
                    }
                }
            }
        };
        _this.onProviderChange = {
            result: _this.onSearchResult,
        };
        _this.onEmojiListRef = function (ref) {
            _this.emojiListRef = ref;
        };
        _this.state = {
            visible: true,
            emojis: [],
            loading: true,
        };
        if (_this.props.onOpen) {
            _this.props.onOpen();
        }
        _this.openTime = Date.now();
        _this.renderStartTime = _this.openTime;
        _this.selectedTone = props.emojiProvider.getSelectedTone();
        _this.pressed = false;
        _this.sessionId = uuid_default()();
        _this.selected = false;
        return _this;
    }
    EmojiTypeAheadComponent.prototype.getChildContext = function () {
        return {
            emoji: {
                emojiProvider: this.props.emojiProvider,
            },
        };
    };
    EmojiTypeAheadComponent.prototype.componentDidMount = function () {
        var emojiProvider = this.props.emojiProvider;
        emojiProvider.subscribe(this.onProviderChange);
        this.onSearch(this.props.query);
    };
    EmojiTypeAheadComponent.prototype.componentWillUnmount = function () {
        var _a = this.props, emojiProvider = _a.emojiProvider, query = _a.query;
        var emojis = this.state.emojis;
        emojiProvider.unsubscribe(this.onProviderChange);
        if (!this.selected) {
            this.fireAnalyticsEvent(Object(analytics["n" /* typeaheadCancelledEvent */])(Date.now() - this.openTime, query, emojis));
        }
        this.sessionId = uuid_default()();
        this.selected = false;
    };
    EmojiTypeAheadComponent.prototype.componentWillReceiveProps = function (nextProps) {
        var prevEmojiProvider = this.props.emojiProvider;
        var nextEmojiProvider = nextProps.emojiProvider;
        if (prevEmojiProvider !== nextEmojiProvider) {
            prevEmojiProvider.unsubscribe(this.onProviderChange);
            nextEmojiProvider.subscribe(this.onProviderChange);
            this.onSearch(nextProps.query);
        }
        else if (this.props.query !== nextProps.query) {
            this.onSearch(nextProps.query);
        }
    };
    EmojiTypeAheadComponent.prototype.fireAnalyticsEvent = function (payload) {
        if (!this.props.createAnalyticsEvent) {
            return;
        }
        payload.attributes.sessionId = this.sessionId;
        this.props.createAnalyticsEvent(payload).fire('fabric-elements');
    };
    EmojiTypeAheadComponent.prototype.onSearch = function (query) {
        var _a = this.props, emojiProvider = _a.emojiProvider, listLimit = _a.listLimit;
        var options = {
            limit: listLimit || constants["g" /* defaultListLimit */],
            skinTone: this.selectedTone,
        };
        if (query && query.replace(':', '').length > 0) {
            options.sort = types["a" /* SearchSort */].Default;
        }
        else {
            // if empty query (i.e. typeahead triggered only) then only sort by usage
            options.sort = types["a" /* SearchSort */].UsageFrequency;
        }
        this.renderStartTime = Date.now();
        emojiProvider.filter(query, options);
    };
    EmojiTypeAheadComponent.prototype.fireSelectionEvent = function (emoji, exactMatch) {
        var query = this.props.query;
        var emojis = this.state.emojis;
        this.selected = true;
        this.fireAnalyticsEvent(Object(analytics["p" /* typeaheadSelectedEvent */])(exactMatch || this.pressed, Date.now() - this.openTime, emoji, emojis, query, exactMatch));
    };
    EmojiTypeAheadComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, emojiProvider = _a.emojiProvider, onSelection = _a.onSelection;
        var recordUsageOnSelection = Object(RecordSelectionDefault["a" /* createRecordSelectionDefault */])(emojiProvider, function (emojiId, emoji, event) {
            _this.fireSelectionEvent(emoji);
            if (onSelection)
                onSelection(emojiId, emoji, event);
        });
        var _b = this.state, visible = _b.visible, emojis = _b.emojis, loading = _b.loading;
        var style = {
            display: visible ? 'block' : 'none',
        };
        var classes = classnames_default()(['ak-emoji-typeahead', emojiTypeAhead]);
        return (react["createElement"]("div", { style: style, className: classes },
            react["createElement"](typeahead_EmojiTypeAheadList, { emojis: emojis, onEmojiSelected: recordUsageOnSelection, ref: this.onEmojiListRef, loading: loading })));
    };
    EmojiTypeAheadComponent.childContextTypes = {
        emoji: prop_types["object"],
    };
    EmojiTypeAheadComponent.defaultProps = {
        onSelection: function () { },
        onOpen: function () { },
        onClose: function () { },
        listLimit: constants["g" /* defaultListLimit */],
    };
    return EmojiTypeAheadComponent;
}(react["PureComponent"]));
/* harmony default export */ var typeahead_EmojiTypeAheadComponent = __webpack_exports__["default"] = (EmojiTypeAheadComponent_EmojiTypeAheadComponent);
//# sourceMappingURL=EmojiTypeAheadComponent.js.map

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