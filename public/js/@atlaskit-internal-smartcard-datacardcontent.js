(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWithDataContent", function() { return CardWithDataContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atlaskit_media_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1184);
/* harmony import */ var _atlaskit_media_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1198);
/* harmony import */ var _extractors_inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1022);
/* harmony import */ var _extractors_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1023);





var CardWithDataContent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CardWithDataContent, _super);
    function CardWithDataContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardWithDataContent.prototype.render = function () {
        var _a = this.props, details = _a.data, isSelected = _a.isSelected, appearance = _a.appearance, onClick = _a.onClick;
        if (appearance === 'inline') {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_atlaskit_media_ui__WEBPACK_IMPORTED_MODULE_2__[/* InlineCardResolvedView */ "a"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_extractors_inline__WEBPACK_IMPORTED_MODULE_4__[/* extractInlinePropsFromJSONLD */ "a"])(details || {}), { isSelected: isSelected, onClick: onClick })));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_atlaskit_media_ui__WEBPACK_IMPORTED_MODULE_3__[/* BlockCardResolvedView */ "a"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_extractors_block__WEBPACK_IMPORTED_MODULE_5__[/* extractBlockPropsFromJSONLD */ "a"])(details || {}), { isSelected: isSelected, onClick: onClick })));
        }
    };
    return CardWithDataContent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=component.js.map

/***/ })

}]);