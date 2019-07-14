(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ 1188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleHasher", function() { return SimpleHasher; });
/* harmony import */ var rusha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1012);
/* harmony import */ var rusha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rusha__WEBPACK_IMPORTED_MODULE_0__);

var SimpleHasher = /** @class */ (function () {
    function SimpleHasher() {
    }
    SimpleHasher.prototype.hash = function (blob) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            reader.onload = function () {
                resolve(rusha__WEBPACK_IMPORTED_MODULE_0__["createHash"]()
                    .update(reader.result)
                    .digest('hex'));
            };
            reader.onerror = reject;
        });
    };
    return SimpleHasher;
}());

//# sourceMappingURL=simpleHasher.js.map

/***/ })

}]);