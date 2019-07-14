(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/types.js
var ImageType;
(function (ImageType) {
    ImageType["JPEG"] = "image/jpeg";
    ImageType["PNG"] = "image/png";
})(ImageType || (ImageType = {}));
var SupportedImageMetaTag;
(function (SupportedImageMetaTag) {
    SupportedImageMetaTag["XResolution"] = "XResolution";
    SupportedImageMetaTag["YResolution"] = "YResolution";
    SupportedImageMetaTag["Orientation"] = "Orientation";
})(SupportedImageMetaTag || (SupportedImageMetaTag = {}));
// http://sylvana.net/jpegcrop/exif_orientation.html
var ExifOrientation = {
    'top-left': 1,
    'top-right': 2,
    'bottom-right': 3,
    'bottom-left': 4,
    'left-top': 5,
    'right-top': 6,
    'right-bottom': 7,
    'left-bottom': 8,
};
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/parseJPEG.js


var XResolution = SupportedImageMetaTag.XResolution, YResolution = SupportedImageMetaTag.YResolution;
var loadImage;
function readJPEGExifMetaData(file) {
    var _this = this;
    return new Promise(function (resolve, reject) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
        var module_1;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!loadImage) return [3 /*break*/, 2];
                    return [4 /*yield*/, __webpack_require__.e(/* import() */ 33).then(__webpack_require__.t.bind(null, 1190, 7))];
                case 1:
                    module_1 = _a.sent();
                    loadImage = module_1.default || module_1;
                    _a.label = 2;
                case 2:
                    loadImage.parseMetaData(file, function (data) {
                        try {
                            var tags_1 = data && data.exif ? data.exif.getAll() : {};
                            Object.keys(tags_1).forEach(function (key) {
                                var value = tags_1[key];
                                if (typeof value === 'object' &&
                                    (key === XResolution || key === YResolution) &&
                                    'numerator' in value) {
                                    // some test images had this structure, so just take the numerator value to simplify returned value
                                    tags_1[key] = value.numerator;
                                }
                                if (typeof tags_1[key] === 'number') {
                                    // in case numbers types were auto-converted, keep everything the same between jpeg & png we keep as strings
                                    tags_1[key] = "" + tags_1[key];
                                }
                            });
                            resolve(tags_1);
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    }); });
}
//# sourceMappingURL=parseJPEG.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/util.js
var util = __webpack_require__(953);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/parsePNG.js


var pngChunksExtract;
function readPNGXMPMetaData(file) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var module_1, buffer, chunks;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!pngChunksExtract) return [3 /*break*/, 2];
                    return [4 /*yield*/, __webpack_require__.e(/* import() */ 46).then(__webpack_require__.t.bind(null, 1189, 7))];
                case 1:
                    module_1 = _a.sent();
                    pngChunksExtract = module_1.default || module_1;
                    _a.label = 2;
                case 2: return [4 /*yield*/, Object(util["a" /* fileToArrayBuffer */])(file)];
                case 3:
                    buffer = _a.sent();
                    chunks = pngChunksExtract(buffer);
                    return [4 /*yield*/, parsePNGChunks(chunks)];
                case 4: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function parsePNGChunks(chunks) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var iTXt, pHYs, i, chunk, dv, unitSpecifier, PixelPerUnitX, PixelPerUnitY;
        return tslib_es6["__generator"](this, function (_a) {
            iTXt = '';
            pHYs = {};
            /**
             * http://www.libpng.org/pub/png/spec/1.2/PNG-Chunks.html#C.Summary-of-standard-chunks
             * Order of every chunk is not guaranteed.
             * And both iTXt and pHYs are Ancillary chunks.
             */
            for (i = 0; i < chunks.length; ++i) {
                chunk = chunks[i];
                // Must be last
                if (chunk.name === 'IEND') {
                    break;
                }
                /**
                 * http://www.libpng.org/pub/png/spec/1.2/PNG-Chunks.html#C.Anc-text
                 * iTXt contains the useful XMP/XML string data of meta tags
                 */
                if (chunk.name === 'iTXt') {
                    iTXt = String.fromCharCode.apply(null, chunk.data);
                }
                /**
                 * http://www.libpng.org/pub/png/spec/1.2/PNG-Chunks.html#C.pHYs
                 * Pixels per unit, X axis: 4 bytes (unsigned integer)
                 * Pixels per unit, Y axis: 4 bytes (unsigned integer)
                 * Unit specifier:          1 byte  (0: unit is unknown 1: unit is the meter)
                 */
                if (chunk.name === 'pHYs') {
                    dv = new DataView(chunk.data.buffer);
                    unitSpecifier = dv.getUint8(8);
                    // meter
                    if (unitSpecifier === 1) {
                        PixelPerUnitX = dv.getUint32(0);
                        PixelPerUnitY = dv.getUint32(4);
                        pHYs = { PixelPerUnitX: PixelPerUnitX, PixelPerUnitY: PixelPerUnitY };
                    }
                }
            }
            return [2 /*return*/, { iTXt: iTXt, pHYs: pHYs }];
        });
    });
}
//# sourceMappingURL=parsePNG.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/parsePNGXMP.js
function parseXMPMetaData(xmpMetaData) {
    var metadata = {};
    var tags = xmpMetaData.match(/<(tiff|exif):.+>/gi);
    if (tags) {
        tags.forEach(function (tag) {
            var match = tag.match(/<(tiff|exif):([^>]+)>([^<]+)/i);
            if (match) {
                var name_1 = match[2];
                metadata[name_1] = match[3];
            }
        });
    }
    return metadata;
}
//# sourceMappingURL=parsePNGXMP.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/metatags.js





function readImageMetaTags(file) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var type, _a, iTXt, pHYs, xmpMetaData, e_1;
        return tslib_es6["__generator"](this, function (_b) {
            switch (_b.label) {
                case 0:
                    type = file.type;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    if (!(type === ImageType.PNG)) return [3 /*break*/, 3];
                    return [4 /*yield*/, readPNGXMPMetaData(file)];
                case 2:
                    _a = _b.sent(), iTXt = _a.iTXt, pHYs = _a.pHYs;
                    xmpMetaData = tslib_es6["__assign"]({}, parseXMPMetaData(iTXt), pHYs);
                    return [2 /*return*/, xmpMetaData];
                case 3:
                    if (!(file.type === ImageType.JPEG)) return [3 /*break*/, 5];
                    return [4 /*yield*/, readJPEGExifMetaData(file)];
                case 4: return [2 /*return*/, _b.sent()];
                case 5: return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, null];
            }
        });
    });
}
//# sourceMappingURL=metatags.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/imageOrientationUtil.js
var imageOrientationUtil = __webpack_require__(944);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getImageInfo; });
/* unused harmony export getScaleFactor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getOrientation; });
/* unused harmony export getMetaTagNumericValue */
/* unused harmony export getScaleFactorFromFile */
/* unused harmony export readImageMetaData */
/* unused concated harmony import ExifOrientation */
/* unused concated harmony import isRotated */
/* unused concated harmony import getCssFromImageOrientation */





var Orientation = SupportedImageMetaTag.Orientation, imageMetaData_XResolution = SupportedImageMetaTag.XResolution;
// http://bonfx.com/why-is-the-web-72-dpi-and-print-300-dpi/
var DPI_WEB_BASELINE = 72;

function getImageInfo(fileInfo) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var metadata, width, height, tags, scaleFactor;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readImageMetaData(fileInfo)];
                case 1:
                    metadata = _a.sent();
                    if (!metadata) {
                        return [2 /*return*/, null];
                    }
                    width = metadata.width, height = metadata.height, tags = metadata.tags;
                    scaleFactor = getScaleFactor(fileInfo.file, tags);
                    return [2 /*return*/, {
                            scaleFactor: scaleFactor,
                            width: width,
                            height: height,
                        }];
            }
        });
    });
}
function getScaleFactor(file, tags) {
    var scaleFactorFromFilename = getScaleFactorFromFile(file);
    if (scaleFactorFromFilename !== null) {
        return scaleFactorFromFilename;
    }
    else if (tags) {
        /**
         * Scale Factor is actually a 2D thing, but in practice X & Y are same in 99% cases.
         * So we are only relying on X axis.
         */
        if (typeof tags['PixelPerUnitX'] === 'number') {
            // 1 inch = 0.0254 meters
            return (Math.round(tags['PixelPerUnitX'] * 0.0254) /
                DPI_WEB_BASELINE);
        }
        else {
            return (getMetaTagNumericValue(tags, imageMetaData_XResolution, DPI_WEB_BASELINE) /
                DPI_WEB_BASELINE);
        }
    }
    else {
        return 1;
    }
}
var getOrientationFromTags = function (tags) {
    if (tags && tags[Orientation]) {
        var tagValue = tags[Orientation];
        if (tagValue) {
            var numericValue = parseInt(tagValue, 10);
            if (isNaN(numericValue)) {
                return ExifOrientation[tagValue];
            }
            return numericValue;
        }
    }
    return 1;
};
function getOrientation(file) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var tags;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readImageMetaTags(file)];
                case 1:
                    tags = _a.sent();
                    return [2 /*return*/, getOrientationFromTags(tags)];
            }
        });
    });
}
function getMetaTagNumericValue(tags, key, defaultValue) {
    try {
        var num = parseFloat("" + tags[key]);
        if (!isNaN(num)) {
            return num;
        }
    }
    catch (e) {
        //
    }
    return defaultValue;
}
function getScaleFactorFromFile(file) {
    try {
        // filenames with scale ratio in name take precedence - eg. filename@2x.png
        var match = file.name.trim().match(/@([0-9\.]+)x\.[a-z]{3}$/);
        if (match) {
            return parseFloat(match[1]);
        }
    }
    catch (e) {
        // parse problem, return null
    }
    return null;
}
function readImageMetaData(fileInfo) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var file, src, type, width, height, tags, img, e_1, naturalWidth, naturalHeight, orientation, isImageRotated, data;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = fileInfo.file, src = fileInfo.src;
                    type = file.type;
                    width = 0;
                    height = 0;
                    return [4 /*yield*/, readImageMetaTags(file)];
                case 1:
                    tags = _a.sent();
                    // since we're reading metadata anyway, try to get dimensions from there...
                    if (tags && tags.PixelXDimension) {
                        width = getMetaTagNumericValue(tags, 'PixelXDimension', 0);
                    }
                    if (tags && tags.PixelXDimension) {
                        height = getMetaTagNumericValue(tags, 'PixelYDimension', 0);
                    }
                    if (!(width === 0 && height === 0)) return [3 /*break*/, 6];
                    img = void 0;
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Object(util["c" /* loadImage */])(src)];
                case 3:
                    img = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    return [2 /*return*/, null];
                case 5:
                    naturalWidth = img.naturalWidth, naturalHeight = img.naturalHeight;
                    width = naturalWidth;
                    height = naturalHeight;
                    _a.label = 6;
                case 6:
                    orientation = getOrientationFromTags(tags);
                    isImageRotated = Object(imageOrientationUtil["b" /* isRotated */])(orientation);
                    data = {
                        type: type,
                        width: isImageRotated ? height : width,
                        height: isImageRotated ? width : height,
                        tags: tags,
                    };
                    return [2 /*return*/, data];
            }
        });
    });
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RECENTS_COLLECTION; });
var RECENTS_COLLECTION = 'recents';
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isRotated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCssFromImageOrientation; });
var ORIENT_TRANSFORMS = {
    1: 'none',
    2: 'rotateY(180deg)',
    3: 'rotate(180deg)',
    4: 'rotate(180deg) rotateY(180deg)',
    5: 'rotate(270deg) rotateY(180deg)',
    6: 'rotate(90deg)',
    7: 'rotate(90deg) rotateY(180deg)',
    8: 'rotate(270deg)',
};
/**
 * Returns true if image rotated 90 or 270 degrees (on it's side)
 */
var isRotated = function (orientation) { return orientation >= 5; };
var getCssFromImageOrientation = function (orientation) {
    return ORIENT_TRANSFORMS[orientation];
};
//# sourceMappingURL=imageOrientationUtil.js.map

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/eventemitter2/lib/eventemitter2.js
var eventemitter2 = __webpack_require__(245);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/util/eventEmitter.js

var eventEmitter_GenericEventEmitter = /** @class */ (function () {
    function GenericEventEmitter() {
        this.emitter = new eventemitter2["EventEmitter2"]({
            wildcard: true,
        });
    }
    GenericEventEmitter.prototype.once = function (event, listener) {
        this.emitter.once(event, listener);
    };
    GenericEventEmitter.prototype.on = function (event, listener) {
        this.emitter.on(event, listener);
    };
    GenericEventEmitter.prototype.onAny = function (listener) {
        this.emitter.onAny(listener);
    };
    GenericEventEmitter.prototype.addListener = function (event, listener) {
        this.emitter.addListener(event, listener);
    };
    GenericEventEmitter.prototype.off = function (event, listener) {
        this.emitter.off(event, listener);
    };
    GenericEventEmitter.prototype.removeListener = function (event, handler) {
        this.emitter.removeListener(event, handler);
    };
    GenericEventEmitter.prototype.removeAllListeners = function (event) {
        // We want to explicitly call removeAllListeners without any argument if event is undefined, otherwise will EventEmitter fail
        if (event === undefined) {
            this.emitter.removeAllListeners();
        }
        else {
            this.emitter.removeAllListeners(event);
        }
    };
    GenericEventEmitter.prototype.emit = function (event, payload) {
        return this.emitter.emit(event, payload);
    };
    return GenericEventEmitter;
}());

//# sourceMappingURL=eventEmitter.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/components/component.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return component_UploadComponent; });


var component_UploadComponent = /** @class */ (function (_super) {
    tslib_es6["__extends"](UploadComponent, _super);
    function UploadComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UploadComponent.prototype.emitUploadsStart = function (files) {
        this.emit('uploads-start', {
            files: files,
        });
    };
    UploadComponent.prototype.emitUploadProgress = function (file, progress) {
        this.emit('upload-status-update', {
            file: file,
            progress: progress,
        });
    };
    UploadComponent.prototype.emitUploadPreviewUpdate = function (file, preview) {
        this.emit('upload-preview-update', {
            file: file,
            preview: preview,
        });
    };
    UploadComponent.prototype.emitUploadProcessing = function (file) {
        this.emit('upload-processing', { file: file });
    };
    UploadComponent.prototype.emitUploadEnd = function (file, fileDetails) {
        this.emit('upload-end', { file: file, public: fileDetails });
    };
    UploadComponent.prototype.emitUploadError = function (file, error) {
        this.emit('upload-error', {
            file: file,
            error: error,
        });
    };
    return UploadComponent;
}(eventEmitter_GenericEventEmitter));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dataURItoFile */
/* unused harmony export fileToDataURI */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFileInfo; });
/* unused harmony export getFileInfoFromSrc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fileToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadImage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function dataURItoFile(dataURI, filename) {
    if (filename === void 0) { filename = 'untitled'; }
    if (dataURI.length === 0) {
        throw new Error('dataURI not found');
    }
    // convert base64/URLEncoded data component to raw binary data held in a string
    var dataURIParts = dataURI.split(',');
    var byteString = dataURIParts[0].indexOf('base64') >= 0
        ? atob(dataURIParts[1])
        : decodeURIComponent(dataURIParts[1]);
    // separate out the mime component
    var mimeString;
    try {
        mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
    }
    catch (e) {
        // https://stackoverflow.com/questions/1176022/unknown-file-type-mime
        mimeString = 'application/octet-stream';
    }
    // write the bytes of the string to a typed array
    var intArray = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        intArray[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([intArray], { type: mimeString });
    try {
        return new File([blob], filename, { type: mimeString });
    }
    catch (e) {
        // IE11 does not allow the File constructor (yay!)
        // we get around this by decorating the blob instance with File properties
        // effectively casting up from Blob to File.
        var ie11File = blob;
        var date = new Date();
        ie11File.lastModified = date.getTime();
        ie11File.lastModifiedDate = date;
        ie11File.name = filename;
        ie11File.webkitRelativePath = '';
        return ie11File;
    }
}
function fileToDataURI(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            var result = reader.result;
            if (typeof result === 'string') {
                resolve(result);
            }
            else if (result === null) {
                reject();
            }
        });
        reader.addEventListener('error', reject);
        reader.readAsDataURL(blob);
    });
}
function getFileInfo(file, src) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var _a, _b;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = {
                        file: file
                    };
                    _b = src;
                    if (_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, fileToDataURI(file)];
                case 1:
                    _b = (_c.sent());
                    _c.label = 2;
                case 2: return [2 /*return*/, (_a.src = _b,
                        _a)];
            }
        });
    });
}
function getFileInfoFromSrc(src, file) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var _a, _b;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = {};
                    _b = file;
                    if (_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, dataURItoFile(src)];
                case 1:
                    _b = (_c.sent());
                    _c.label = 2;
                case 2: return [2 /*return*/, (_a.file = _b,
                        _a.src = src,
                        _a)];
            }
        });
    });
}
function fileToArrayBuffer(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            var array = new Uint8Array(reader.result);
            resolve(array);
        });
        reader.addEventListener('error', reject);
        reader.readAsArrayBuffer(file);
    });
}
function loadImage(src) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = src;
        img.onload = function () {
            resolve(img);
        };
        img.onerror = reject;
    });
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/uuid/v4.js
var v4 = __webpack_require__(241);
var v4_default = /*#__PURE__*/__webpack_require__.n(v4);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/client/media-client.js
var media_client = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/globalMediaEventEmitter.js
var globalMediaEventEmitter = __webpack_require__(971);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/file-streams-cache.js
var file_streams_cache = __webpack_require__(418);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/utils/getMediaTypeFromMimeType.js
var getMediaTypeFromMimeType = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/client/media-store.js
var media_store = __webpack_require__(417);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-client/upload-controller.js
var upload_controller = __webpack_require__(838);

// EXTERNAL MODULE: ./node_modules/eventemitter2/lib/eventemitter2.js
var eventemitter2 = __webpack_require__(245);

// EXTERNAL MODULE: ./node_modules/rxjs/operators/map.js
var map = __webpack_require__(569);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/popup/config.js
var config = __webpack_require__(942);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/popup/domain/source-file.js
var source_file = __webpack_require__(994);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/util.js
var util = __webpack_require__(953);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/imageMetaData/index.js + 5 modules
var imageMetaData = __webpack_require__(1174);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/util/getPreviewFromImage.js


function getPreviewFromImage(file, devicePixelRatio) {
    return tslib_es6["__awaiter"](this, void 0, void 0, function () {
        var fileInfo, imageInfo, width, height, scaleFactor, preview;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(util["b" /* getFileInfo */])(file)];
                case 1:
                    fileInfo = _a.sent();
                    return [4 /*yield*/, Object(imageMetaData["a" /* getImageInfo */])(fileInfo)];
                case 2:
                    imageInfo = _a.sent();
                    if (imageInfo === null) {
                        return [2 /*return*/, { file: file }];
                    }
                    else {
                        width = imageInfo.width, height = imageInfo.height, scaleFactor = imageInfo.scaleFactor;
                        preview = {
                            file: file,
                            dimensions: {
                                width: width,
                                height: height,
                            },
                            scaleFactor: devicePixelRatio || scaleFactor,
                        };
                        return [2 /*return*/, preview];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var SCALE_FACTOR_DEFAULT = 1;
//# sourceMappingURL=getPreviewFromImage.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/domain/progress.js
var domain_progress = __webpack_require__(995);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/service/types.js
var types = __webpack_require__(969);

// EXTERNAL MODULE: ./node_modules/video-snapshot/dist/index.js
var dist = __webpack_require__(970);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/util/getPreviewFromBlob.js
var getPreviewFromBlob_this = undefined;


var getPreviewFromBlob = function (file, mediaType) {
    return new Promise(function (resolve, reject) { return tslib_es6["__awaiter"](getPreviewFromBlob_this, void 0, void 0, function () {
        var src, img_1, snapshoter, dimensions, preview;
        return tslib_es6["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    src = URL.createObjectURL(file);
                    if (!(mediaType === 'image')) return [3 /*break*/, 1];
                    img_1 = new Image();
                    img_1.src = src;
                    img_1.onload = function () {
                        var dimensions = { width: img_1.width, height: img_1.height };
                        var preview = {
                            file: file,
                            dimensions: dimensions,
                            scaleFactor: 1,
                        };
                        URL.revokeObjectURL(src);
                        resolve(preview);
                    };
                    img_1.onerror = reject;
                    return [3 /*break*/, 4];
                case 1:
                    if (!(mediaType === 'video')) return [3 /*break*/, 3];
                    snapshoter = new dist_default.a(file);
                    return [4 /*yield*/, snapshoter.getDimensions()];
                case 2:
                    dimensions = _a.sent();
                    preview = {
                        file: file,
                        dimensions: dimensions,
                        scaleFactor: 1,
                    };
                    snapshoter.end();
                    resolve(preview);
                    return [3 /*break*/, 4];
                case 3:
                    resolve({ file: file });
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
//# sourceMappingURL=getPreviewFromBlob.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/service/newUploadServiceImpl.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newUploadServiceImpl_NewUploadServiceImpl; });












var newUploadServiceImpl_NewUploadServiceImpl = /** @class */ (function () {
    function NewUploadServiceImpl(tenantMediaClient, tenantUploadParams, shouldCopyFileToRecents) {
        var _this = this;
        this.tenantMediaClient = tenantMediaClient;
        this.tenantUploadParams = tenantUploadParams;
        this.shouldCopyFileToRecents = shouldCopyFileToRecents;
        this.emit = function (event, payload) {
            _this.emitter.emit(event, payload);
        };
        this.onFileSuccess = function (cancellableFileUpload, fileId) { return tslib_es6["__awaiter"](_this, void 0, void 0, function () {
            var mediaFile, details;
            var _this = this;
            return tslib_es6["__generator"](this, function (_a) {
                mediaFile = cancellableFileUpload.mediaFile;
                this.copyFileToUsersCollection(fileId)
                    // eslint-disable-next-line no-console
                    .catch(console.log); // We intentionally swallow these errors
                this.emit('file-converting', {
                    file: mediaFile,
                });
                details = {
                    id: fileId,
                };
                this.emit('file-converted', {
                    file: mediaFile,
                    public: details,
                });
                cancellableFileUpload.cancel = function () {
                    _this.releaseCancellableFile(mediaFile);
                };
                return [2 /*return*/];
            });
        }); };
        this.onFileProgress = function (_a, portion) {
            var mediaFile = _a.mediaFile, file = _a.file;
            var size = file.size;
            var progress = new domain_progress["a" /* SmartMediaProgress */](size, size * portion, mediaFile.creationDate, Date.now());
            _this.emit('file-uploading', {
                file: mediaFile,
                progress: progress.toJSON(),
            });
        };
        this.onFileError = function (mediaFile, mediaErrorName, error) {
            _this.releaseCancellableFile(mediaFile);
            if (error === 'canceled') {
                // Specific error coming from chunkinator via rejected fileId promise.
                // We do not want to trigger error in this case.
                return;
            }
            var description = error instanceof Error ? error.message : error;
            _this.emit('file-upload-error', {
                file: mediaFile,
                error: {
                    fileId: mediaFile.id,
                    description: description,
                    name: mediaErrorName,
                },
            });
        };
        this.emitter = new eventemitter2["EventEmitter2"]();
        this.cancellableFilesUploads = {};
        var _a = tenantMediaClient.config, tenantAuthProvider = _a.authProvider, userAuthProvider = _a.userAuthProvider;
        // We need a non user auth store, since we want to create the empty file in the public collection
        this.tenantMediaStore = new media_store["a" /* MediaStore */]({
            authProvider: tenantAuthProvider,
        });
        if (userAuthProvider) {
            this.userMediaStore = new media_store["a" /* MediaStore */]({
                authProvider: userAuthProvider,
            });
            // We need to use the userAuth to upload this file (recents)
            this.userMediaClient = new media_client["a" /* MediaClient */]({
                userAuthProvider: userAuthProvider,
                authProvider: userAuthProvider,
            });
        }
    }
    NewUploadServiceImpl.prototype.setUploadParams = function (uploadParams) {
        this.tenantUploadParams = uploadParams;
    };
    // Used for testing
    NewUploadServiceImpl.prototype.createUploadController = function () {
        return new upload_controller["a" /* UploadController */]();
    };
    NewUploadServiceImpl.prototype.addFiles = function (files) {
        this.addFilesWithSource(files.map(function (file) { return ({
            file: file,
            source: types["a" /* LocalFileSource */].LocalUpload,
        }); }));
    };
    NewUploadServiceImpl.prototype.addFilesWithSource = function (files) {
        var _this = this;
        if (files.length === 0) {
            return;
        }
        var creationDate = Date.now();
        var _a = this, userMediaClient = _a.userMediaClient, tenantMediaClient = _a.tenantMediaClient, shouldCopyFileToRecents = _a.shouldCopyFileToRecents;
        var mediaClient = shouldCopyFileToRecents
            ? tenantMediaClient
            : userMediaClient;
        var collection = shouldCopyFileToRecents
            ? this.tenantUploadParams.collection
            : config["a" /* RECENTS_COLLECTION */];
        if (!mediaClient) {
            return;
        }
        var touchFileDescriptors = [];
        for (var i = 0; i < files.length; i++) {
            touchFileDescriptors.push({
                fileId: v4_default()(),
                occurrenceKey: v4_default()(),
                collection: collection,
            });
        }
        var promisedTouchFiles = mediaClient.file.touchFiles(touchFileDescriptors, collection);
        var cancellableFileUploads = files.map(function (fileWithSource, i) {
            var file = fileWithSource.file, source = fileWithSource.source;
            var _a = touchFileDescriptors[i], id = _a.fileId, occurrenceKey = _a.occurrenceKey;
            var deferredUploadId = promisedTouchFiles.then(function (touchedFiles) {
                var touchedFile = touchedFiles.created.find(function (touchedFile) { return touchedFile.fileId === id; });
                if (!touchedFile) {
                    throw new Error('Cant retrieve uploadId from result of touch endpoint call');
                }
                return touchedFile.uploadId;
            });
            var uploadableFile = {
                collection: collection,
                content: file,
                name: file.name,
                mimeType: file.type,
            };
            var uploadableUpfrontIds = {
                id: id,
                occurrenceKey: occurrenceKey,
                deferredUploadId: deferredUploadId,
            };
            var controller = _this.createUploadController();
            var observable = mediaClient.file.upload(uploadableFile, controller, uploadableUpfrontIds);
            var userUpfrontId;
            var userOccurrenceKey;
            var upfrontId = Promise.resolve(id);
            if (!shouldCopyFileToRecents) {
                var tenantOccurrenceKey = v4_default()();
                var collection_1 = _this.tenantUploadParams.collection;
                var options = {
                    collection: collection_1,
                    occurrenceKey: tenantOccurrenceKey,
                };
                // We want to create an empty file in the tenant collection
                // TODO [MS-1355]: using mediaClient.file.touchFiles instead of createFile will speed up things
                // since we can lookup the id in the cache without wait for this to finish
                upfrontId = _this.tenantMediaStore
                    .createFile(options)
                    .then(function (response) { return response.data.id; });
                userUpfrontId = Promise.resolve(id);
                userOccurrenceKey = Promise.resolve(occurrenceKey);
            }
            var mediaFile = {
                id: id,
                upfrontId: upfrontId,
                userUpfrontId: userUpfrontId,
                userOccurrenceKey: userOccurrenceKey,
                name: file.name,
                size: file.size,
                creationDate: creationDate,
                type: file.type,
                occurrenceKey: occurrenceKey,
            };
            var cancellableFileUpload = {
                mediaFile: mediaFile,
                file: file,
                source: source,
                cancel: function () {
                    // we can't do "cancellableFileUpload.cancel = controller.abort" because will change the "this" mediaClient
                    controller.abort();
                },
            };
            var subscription = observable.subscribe({
                next: function (state) {
                    if (state.status === 'uploading') {
                        _this.onFileProgress(cancellableFileUpload, state.progress);
                    }
                    if (state.status === 'processing') {
                        subscription.unsubscribe();
                        if (shouldCopyFileToRecents) {
                            mediaClient.emit('file-added', state);
                            globalMediaEventEmitter["a" /* globalMediaEventEmitter */].emit('file-added', state);
                        }
                        _this.onFileSuccess(cancellableFileUpload, id);
                    }
                },
                error: function (error) {
                    _this.onFileError(mediaFile, 'upload_fail', error);
                },
            });
            _this.cancellableFilesUploads[id] = cancellableFileUpload;
            // Save observable in the cache
            // We want to save the observable without collection too, due consumers using cards without collection.
            Object(file_streams_cache["b" /* getFileStreamsCache */])().set(id, observable);
            upfrontId.then(function (id) {
                // We assign the tenant id to the observable to not emit user id instead
                var tenantObservable = observable.pipe(Object(map["map"])(function (file) { return (tslib_es6["__assign"]({}, file, { id: id })); }));
                Object(file_streams_cache["b" /* getFileStreamsCache */])().set(id, tenantObservable);
            });
            return cancellableFileUpload;
        });
        var mediaFiles = cancellableFileUploads.map(function (cancellableFileUpload) { return cancellableFileUpload.mediaFile; });
        this.emit('files-added', { files: mediaFiles });
        this.emitPreviews(cancellableFileUploads);
    };
    NewUploadServiceImpl.prototype.cancel = function (id) {
        var _this = this;
        if (id) {
            var cancellableFileUpload = this.cancellableFilesUploads[id];
            if (cancellableFileUpload && cancellableFileUpload.cancel) {
                cancellableFileUpload.cancel();
            }
        }
        else {
            Object.keys(this.cancellableFilesUploads).forEach(function (key) {
                var cancellableFileUpload = _this.cancellableFilesUploads[key];
                if (cancellableFileUpload.cancel) {
                    cancellableFileUpload.cancel();
                }
            });
        }
    };
    NewUploadServiceImpl.prototype.on = function (event, listener) {
        this.emitter.on(event, listener);
    };
    NewUploadServiceImpl.prototype.off = function (event, listener) {
        this.emitter.off(event, listener);
    };
    NewUploadServiceImpl.prototype.emitPreviews = function (cancellableFileUploads) {
        var _this = this;
        cancellableFileUploads.forEach(function (cancellableFileUpload) {
            var file = cancellableFileUpload.file, mediaFile = cancellableFileUpload.mediaFile, source = cancellableFileUpload.source;
            var mediaType = _this.getMediaTypeFromFile(file);
            if (mediaType === 'image') {
                getPreviewFromImage(file, source === types["a" /* LocalFileSource */].PastedScreenshot
                    ? window.devicePixelRatio
                    : undefined).then(function (preview) {
                    _this.emit('file-preview-update', {
                        file: mediaFile,
                        preview: preview,
                    });
                });
            }
            else {
                getPreviewFromBlob(file, mediaType).then(function (preview) {
                    _this.emit('file-preview-update', {
                        file: mediaFile,
                        preview: preview,
                    });
                });
            }
        });
    };
    NewUploadServiceImpl.prototype.getMediaTypeFromFile = function (file) {
        var type = file.type;
        return Object(getMediaTypeFromMimeType["a" /* getMediaTypeFromMimeType */])(type);
    };
    NewUploadServiceImpl.prototype.releaseCancellableFile = function (mediaFile) {
        delete this.cancellableFilesUploads[mediaFile.id];
    };
    // This method copies the file from the "tenant collection" to the "user collection" (recents).
    // that means we need "tenant auth" as input and "user auth" as output
    NewUploadServiceImpl.prototype.copyFileToUsersCollection = function (sourceFileId) {
        var _a = this, shouldCopyFileToRecents = _a.shouldCopyFileToRecents, userMediaStore = _a.userMediaStore, tenantUploadParams = _a.tenantUploadParams;
        if (!shouldCopyFileToRecents || !userMediaStore) {
            return Promise.resolve();
        }
        var sourceCollection = tenantUploadParams.collection;
        var tenantAuthProvider = this.tenantMediaClient.config.authProvider;
        return tenantAuthProvider({ collectionName: sourceCollection }).then(function (auth) {
            var body = {
                sourceFile: {
                    id: sourceFileId,
                    collection: sourceCollection,
                    owner: tslib_es6["__assign"]({}, Object(source_file["a" /* mapAuthToSourceFileOwner */])(auth)),
                },
            };
            var params = {
                collection: config["a" /* RECENTS_COLLECTION */],
            };
            return userMediaStore.copyFileWithToken(body, params);
        });
    };
    return NewUploadServiceImpl;
}());

//# sourceMappingURL=newUploadServiceImpl.js.map

/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MAX_FILE_SIZE_FOR_PREVIEW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalFileSource; });
var MAX_FILE_SIZE_FOR_PREVIEW = 10e6; // 10 MB
var LocalFileSource;
(function (LocalFileSource) {
    LocalFileSource[LocalFileSource["PastedFile"] = 0] = "PastedFile";
    LocalFileSource[LocalFileSource["PastedScreenshot"] = 1] = "PastedScreenshot";
    LocalFileSource[LocalFileSource["LocalUpload"] = 2] = "LocalUpload";
})(LocalFileSource || (LocalFileSource = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var isSafari = typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var VideoSnapshot = (function () {
    function VideoSnapshot(blob) {
        var _this = this;
        this.loadVideo = function (time) {
            if (time === void 0) { time = 0; }
            return new Promise(function (resolve) {
                var video = document.createElement('video');
                video.preload = 'metadata';
                video.src = _this.videoUrl;
                video.muted = true;
                if (time === 0) {
                    video.play();
                }
                else {
                    if (typeof time === 'number') {
                        video.currentTime = time;
                    }
                    else if (typeof time === 'string') {
                        var duration = video.duration;
                        video.currentTime = _this.getSmartTime(time, duration);
                    }
                    if (isSafari) {
                        video.play();
                    }
                }
                video.addEventListener('timeupdate', function timeupdateHandler() {
                    video.removeEventListener('timeupdate', timeupdateHandler);
                    video.pause();
                    resolve(video);
                });
            });
        };
        this.getDimensions = function () { return __awaiter(_this, void 0, void 0, function () {
            var video;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.loadVideo()];
                    case 1:
                        video = _a.sent();
                        return [2, {
                                width: video.videoWidth,
                                height: video.videoHeight
                            }];
                }
            });
        }); };
        var url = URL.createObjectURL(blob);
        this.videoUrl = url;
    }
    VideoSnapshot.prototype.takeSnapshot = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            var video, canvas, context, dataURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.loadVideo(time)];
                    case 1:
                        video = _a.sent();
                        canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        context = canvas.getContext('2d');
                        if (!context) {
                            throw new Error('error creating canvas context');
                        }
                        context.drawImage(video, 0, 0, canvas.width, canvas.height);
                        dataURL = canvas.toDataURL();
                        return [2, dataURL];
                }
            });
        });
    };
    VideoSnapshot.prototype.end = function () {
        this.revoke();
    };
    VideoSnapshot.prototype.revoke = function () {
        URL.revokeObjectURL(this.videoUrl);
    };
    VideoSnapshot.prototype.getSmartTime = function (time, duration) {
        if (duration === void 0) { duration = 0; }
        var smartTimes = {
            start: 0,
            middle: duration / 2,
            end: duration,
        };
        return smartTimes[time];
    };
    return VideoSnapshot;
}());
exports.default = VideoSnapshot;


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

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapAuthToSourceFileOwner; });
/* harmony import */ var _atlaskit_media_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);

function mapAuthToSourceFileOwner(auth) {
    if (Object(_atlaskit_media_core__WEBPACK_IMPORTED_MODULE_0__["isClientBasedAuth"])(auth)) {
        return {
            id: auth.clientId,
            token: auth.token,
            baseUrl: auth.baseUrl,
        };
    }
    else {
        return auth;
    }
}
//# sourceMappingURL=source-file.js.map

/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartMediaProgress; });
/* harmony import */ var _util_handleError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(996);
// TODO these classes are deprecated and will be removed as part of MSW-691

var SmartMediaProgress = /** @class */ (function () {
    function SmartMediaProgress(size, progress, startTime, measureTime) {
        this.size = size;
        this.progress = progress;
        this.startTime = startTime;
        this.measureTime = measureTime;
        if (!SmartMediaProgress.isValidSize(size)) {
            Object(_util_handleError__WEBPACK_IMPORTED_MODULE_0__[/* handleError */ "a"])('wrong_file_size', 'Passed file size is incorrect.');
            return;
        }
        if (!SmartMediaProgress.isValidProgress(size, progress)) {
            Object(_util_handleError__WEBPACK_IMPORTED_MODULE_0__[/* handleError */ "a"])('wrong_progress', 'The progress format is incorrect.');
            return;
        }
        if (!SmartMediaProgress.isValidStartTime(startTime)) {
            Object(_util_handleError__WEBPACK_IMPORTED_MODULE_0__[/* handleError */ "a"])('wrong_start_time', 'The progress start time has incorrect format.');
            return;
        }
        if (!SmartMediaProgress.isValidMeasureTime(startTime, measureTime)) {
            Object(_util_handleError__WEBPACK_IMPORTED_MODULE_0__[/* handleError */ "a"])('wrong_measure_time', 'The progress measure time has incorrect format.');
            return;
        }
        this.size = size;
        this.progress = progress;
        this.startTime = startTime;
        this.measureTime = measureTime;
    }
    Object.defineProperty(SmartMediaProgress.prototype, "absolute", {
        get: function () {
            return this.progress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartMediaProgress.prototype, "portion", {
        get: function () {
            return this.progress / this.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartMediaProgress.prototype, "max", {
        get: function () {
            return this.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartMediaProgress.prototype, "overallTime", {
        get: function () {
            return (this.measureTime - this.startTime) / this.portion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartMediaProgress.prototype, "expectedFinishTime", {
        get: function () {
            return this.startTime + this.overallTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartMediaProgress.prototype, "timeLeft", {
        get: function () {
            return this.expectedFinishTime - this.measureTime;
        },
        enumerable: true,
        configurable: true
    });
    SmartMediaProgress.prototype.toJSON = function () {
        return {
            absolute: this.absolute,
            portion: this.portion,
            max: this.max,
            overallTime: this.overallTime,
            expectedFinishTime: this.expectedFinishTime,
            timeLeft: this.timeLeft,
        };
    };
    SmartMediaProgress.isValidSize = function (size) {
        return typeof size === 'number' && size > 0;
    };
    SmartMediaProgress.isValidProgress = function (size, progress) {
        return (SmartMediaProgress.isValidSize(size) &&
            typeof progress === 'number' &&
            progress >= 0 &&
            progress <= size);
    };
    SmartMediaProgress.isValidStartTime = function (startTime) {
        return typeof startTime === 'number' && startTime > 0;
    };
    SmartMediaProgress.isValidMeasureTime = function (startTime, measureTime) {
        return (SmartMediaProgress.isValidStartTime(startTime) &&
            typeof measureTime === 'number' &&
            measureTime >= startTime);
    };
    return SmartMediaProgress;
}());

//# sourceMappingURL=progress.js.map

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleError; });
var handleError = function (alias, description) {
    var stackTrace = Error().stack || '';
    var descr = description || '';
    var errorMessage = alias + ": " + descr + " \n " + stackTrace;
    // eslint-disable-next-line no-console
    console.error(errorMessage);
};
//# sourceMappingURL=handleError.js.map

/***/ })

}]);