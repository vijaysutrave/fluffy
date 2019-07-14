(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/client/media-store.js
var media_store = __webpack_require__(417);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/upload-controller.js
var upload_controller = __webpack_require__(838);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/models/media.js
var media = __webpack_require__(839);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/models/artifacts.js
var artifacts = __webpack_require__(579);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/models/file-state.js
var file_state = __webpack_require__(565);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/file-streams-cache.js
var file_streams_cache = __webpack_require__(418);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/uploader.js + 1 modules
var uploader = __webpack_require__(842);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/utils/request.js + 1 modules
var request = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/client/file-fetcher.js + 2 modules
var file_fetcher = __webpack_require__(424);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/client/collection-fetcher.js
var collection_fetcher = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/client/media-client.js
var media_client = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/utils/isImageRemote.js
var isImageRemote = __webpack_require__(840);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-client/utils/checkWebpSupport.js
/**
 * Checks if Webp support is enabled in the browser.
 * We know that creating a new image in memory and checking its height,
 * later on we cache this value forever.
 */
var isSupported;
var checkWebpSupport = function () {
    if (isSupported !== undefined) {
        return Promise.resolve(isSupported);
    }
    return new Promise(function (resolve) {
        var img = new Image();
        // Following base64 encoded binary content is in webp format. If browser supports this standard,
        // 2px height image will be displayed. If not, standard "not found" image placeholder will be
        // displayed and it will be not 2px height.
        img.src =
            'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA';
        img.onload = img.onerror = function () {
            isSupported = img.height === 2;
            resolve(isSupported);
        };
    });
};
//# sourceMappingURL=checkWebpSupport.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/utils/observableToPromise.js
var observableToPromise = __webpack_require__(334);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/utils/getMediaTypeFromMimeType.js
var getMediaTypeFromMimeType = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/identifier.js
var identifier = __webpack_require__(832);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/utils/with-media-client-hoc.js
var with_media_client_hoc = __webpack_require__(834);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/globalMediaEventEmitter.js
var globalMediaEventEmitter = __webpack_require__(971);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-client/index.js
/* concated harmony reexport MediaStore */__webpack_require__.d(__webpack_exports__, "MediaStore", function() { return media_store["a" /* MediaStore */]; });
/* concated harmony reexport UploadController */__webpack_require__.d(__webpack_exports__, "UploadController", function() { return upload_controller["a" /* UploadController */]; });
/* concated harmony reexport isPreviewableType */__webpack_require__.d(__webpack_exports__, "isPreviewableType", function() { return media["a" /* isPreviewableType */]; });
/* concated harmony reexport getArtifactUrl */__webpack_require__.d(__webpack_exports__, "getArtifactUrl", function() { return artifacts["a" /* getArtifactUrl */]; });
/* concated harmony reexport isErrorFileState */__webpack_require__.d(__webpack_exports__, "isErrorFileState", function() { return file_state["a" /* isErrorFileState */]; });
/* concated harmony reexport isImageRepresentationReady */__webpack_require__.d(__webpack_exports__, "isImageRepresentationReady", function() { return file_state["b" /* isImageRepresentationReady */]; });
/* concated harmony reexport mapMediaFileToFileState */__webpack_require__.d(__webpack_exports__, "mapMediaFileToFileState", function() { return file_state["c" /* mapMediaFileToFileState */]; });
/* concated harmony reexport mapMediaItemToFileState */__webpack_require__.d(__webpack_exports__, "mapMediaItemToFileState", function() { return file_state["d" /* mapMediaItemToFileState */]; });
/* concated harmony reexport getFileStreamsCache */__webpack_require__.d(__webpack_exports__, "getFileStreamsCache", function() { return file_streams_cache["b" /* getFileStreamsCache */]; });
/* concated harmony reexport StreamsCache */__webpack_require__.d(__webpack_exports__, "StreamsCache", function() { return file_streams_cache["a" /* StreamsCache */]; });
/* concated harmony reexport uploadFile */__webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploader["a" /* uploadFile */]; });
/* concated harmony reexport request */__webpack_require__.d(__webpack_exports__, "request", function() { return request["e" /* request */]; });
/* concated harmony reexport mapResponseToJson */__webpack_require__.d(__webpack_exports__, "mapResponseToJson", function() { return request["c" /* mapResponseToJson */]; });
/* concated harmony reexport mapResponseToBlob */__webpack_require__.d(__webpack_exports__, "mapResponseToBlob", function() { return request["b" /* mapResponseToBlob */]; });
/* concated harmony reexport mapResponseToVoid */__webpack_require__.d(__webpack_exports__, "mapResponseToVoid", function() { return request["d" /* mapResponseToVoid */]; });
/* concated harmony reexport createUrl */__webpack_require__.d(__webpack_exports__, "createUrl", function() { return request["a" /* createUrl */]; });
/* concated harmony reexport FileFetcherImpl */__webpack_require__.d(__webpack_exports__, "FileFetcherImpl", function() { return file_fetcher["a" /* FileFetcherImpl */]; });
/* concated harmony reexport CollectionFetcher */__webpack_require__.d(__webpack_exports__, "CollectionFetcher", function() { return collection_fetcher["a" /* CollectionFetcher */]; });
/* concated harmony reexport MediaClient */__webpack_require__.d(__webpack_exports__, "MediaClient", function() { return media_client["a" /* MediaClient */]; });
/* concated harmony reexport isImageRemote */__webpack_require__.d(__webpack_exports__, "isImageRemote", function() { return isImageRemote["a" /* isImageRemote */]; });
/* concated harmony reexport checkWebpSupport */__webpack_require__.d(__webpack_exports__, "checkWebpSupport", function() { return checkWebpSupport; });
/* concated harmony reexport observableToPromise */__webpack_require__.d(__webpack_exports__, "observableToPromise", function() { return observableToPromise["a" /* observableToPromise */]; });
/* concated harmony reexport getMediaTypeFromMimeType */__webpack_require__.d(__webpack_exports__, "getMediaTypeFromMimeType", function() { return getMediaTypeFromMimeType["a" /* getMediaTypeFromMimeType */]; });
/* concated harmony reexport isFileIdentifier */__webpack_require__.d(__webpack_exports__, "isFileIdentifier", function() { return identifier["c" /* isFileIdentifier */]; });
/* concated harmony reexport isExternalImageIdentifier */__webpack_require__.d(__webpack_exports__, "isExternalImageIdentifier", function() { return identifier["b" /* isExternalImageIdentifier */]; });
/* concated harmony reexport isDifferentIdentifier */__webpack_require__.d(__webpack_exports__, "isDifferentIdentifier", function() { return identifier["a" /* isDifferentIdentifier */]; });
/* concated harmony reexport withMediaClient */__webpack_require__.d(__webpack_exports__, "withMediaClient", function() { return with_media_client_hoc["b" /* withMediaClient */]; });
/* concated harmony reexport getMediaClient */__webpack_require__.d(__webpack_exports__, "getMediaClient", function() { return with_media_client_hoc["a" /* getMediaClient */]; });
/* concated harmony reexport globalMediaEventEmitter */__webpack_require__.d(__webpack_exports__, "globalMediaEventEmitter", function() { return globalMediaEventEmitter["a" /* globalMediaEventEmitter */]; });


















//# sourceMappingURL=index.js.map

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalMediaEventEmitter; });
/* harmony import */ var _atlaskit_media_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);

var globalMediaEventEmitter = {
    on: function (event, listener) {
        if (_atlaskit_media_core__WEBPACK_IMPORTED_MODULE_0__["mediaState"].eventEmitter) {
            _atlaskit_media_core__WEBPACK_IMPORTED_MODULE_0__["mediaState"].eventEmitter.on(event, listener);
        }
    },
    off: function (event, listener) {
        if (_atlaskit_media_core__WEBPACK_IMPORTED_MODULE_0__["mediaState"].eventEmitter) {
            _atlaskit_media_core__WEBPACK_IMPORTED_MODULE_0__["mediaState"].eventEmitter.off(event, listener);
        }
    },
    emit: function (event, payload) {
        if (_atlaskit_media_core__WEBPACK_IMPORTED_MODULE_0__["mediaState"].eventEmitter) {
            return _atlaskit_media_core__WEBPACK_IMPORTED_MODULE_0__["mediaState"].eventEmitter.emit(event, payload);
        }
        return undefined;
    },
};
//# sourceMappingURL=globalMediaEventEmitter.js.map

/***/ })

}]);