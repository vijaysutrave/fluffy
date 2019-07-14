(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/components/localUpload.js
var localUpload = __webpack_require__(959);

// EXTERNAL MODULE: ./node_modules/exenv/index.js
var exenv = __webpack_require__(163);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/util/documentReady.js

// https://gist.github.com/dragosh/e9baf2d7bf3673a98c91
var checkDomReady = function () {
    if (document.readyState === 'complete') {
        return Promise.resolve();
    }
    return new Promise(function (resolve) {
        window.addEventListener('load', resolve);
    });
};
var whenDomReady = exenv["canUseDOM"]
    ? checkDomReady()
    : Promise.resolve();
//# sourceMappingURL=documentReady.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-ui/messages.js
var messages = __webpack_require__(938);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/util/parseHTML.js
var parseHTML = function (htmlString) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = htmlString;
    return wrapper.childNodes[0];
};
//# sourceMappingURL=parseHTML.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/components/dropzone/styled.js
// TODO [MSW-385]: Migrate into SC
var wrapperStyles = "\n  .mp-title {\n    font-weight: 500;\n    font-size: 40px;\n    margin-bottom: 20px;\n  }\n\n  .mp-description {\n    font-size: 16px;\n    font-weight: 500;\n  }\n\n  .mp-fileIcon {\n    width: auto;\n    height: 200px;\n    position: absolute;\n    bottom: 0;\n    transform-origin: bottom;\n    left: 150px;\n  }\n\n  .mp-iconAtlassianDoc {\n    left: 100px;\n    width: 183px;\n    height: 212px;\n    bottom: -15px;\n    animation: atlassian-doc .75s .2s forwards;\n  }\n\n  .mp-iconOtherDoc {\n    left: 170px;\n    z-index: 1;\n    width: 173px;\n    height: 224px;\n  }\n\n  .mp-iconPageSpreadsheet {\n    left: 250px;\n    animation: spreadsheet .75s .2s forwards;\n  }\n\n  .mp-text {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n    left: 0;\n    right: 0;\n    top: 130px;\n    position: absolute;\n    text-align: center;\n  }\n\n  .mp-text span {\n    display: block;\n  }\n\n  .mp-circle {\n    transition: width 0.2s ease,\n    height 0.2s ease,\n    top 0.2s ease,\n    left 0.2s ease;\n    width: 0;\n    height: 0;\n    transform: scale(1);\n    background-color: #0052cc;\n    border-radius: 50%;\n    margin: auto;\n    position: absolute;\n    overflow: hidden;\n    color: #fff;\n    top: 50%;\n    left: 50%; \n  }\n\n  .mp-content {\n    width: 100vw;\n    height: 100vh; \n  }\n\n  .mediaPickerDropzone {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 0;\n    overflow: hidden;\n    margin: auto;\n    font-family: \"Source Sans Pro\", \"Helvetica Neue\", \"Helvetica\", Arial, sans-serif;\n    pointer-events: none;\n  }\n\n  .mediaPickerDropzone.active {\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.7);\n    position: fixed;\n    z-index: 500;\n  }\n\n  .mediaPickerDropzone.active .mp-circle {\n    width: 500px;\n    height: 500px;\n    top: calc(50% - 250px);\n    left: calc(50% - 250px);\n  }\n\n  @keyframes atlassian-doc {\n    0%   { transform: rotate(0deg); }\n    100% { transform: rotate(-18deg); }\n  }\n\n  @keyframes spreadsheet {\n    0%   { transform: rotate(0deg); }\n    100% { transform: rotate(20deg); }\n  }\n";
//# sourceMappingURL=styled.js.map
// EXTERNAL MODULE: ./node_modules/@atlaskit/media-picker/util/getAssetUrl.js
var getAssetUrl = __webpack_require__(960);

// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/components/dropzone/dropzoneUI.js




// TODO [MSW-385]: Remove template string and use React
/* harmony default export */ var dropzoneUI = (function (formatMessage) {
    return parseHTML("<div class=\"mediaPickerDropzone\">\n    <style>" + wrapperStyles + "</style>\n    <div class=\"mp-content\">\n        <div class=\"mp-circle\">\n            <div class=\"mp-text\">\n                <span class=\"mp-title\">" + formatMessage(messages["a" /* messages */].drop_your_files_here) + "</span>\n                <span class=\"mp-description\">" + formatMessage(messages["a" /* messages */].share_files_instantly) + "</span>\n            </div>\n            <img class=\"mp-fileIcon mp-iconAtlassianDoc\" src=\"" + Object(getAssetUrl["a" /* getAssetUrl */])('pie-chart-icon.png') + "\"/>\n            <img class=\"mp-fileIcon mp-iconOtherDoc\" src=\"" + Object(getAssetUrl["a" /* getAssetUrl */])('line-graph-icon.png') + "\" />\n            <img class=\"mp-fileIcon mp-iconPageSpreadsheet\" src=\"" + Object(getAssetUrl["a" /* getAssetUrl */])('flow-chart-icon.png') + "\" />\n        </div>\n    </div>\n  </div>");
});
//# sourceMappingURL=dropzoneUI.js.map
// CONCATENATED MODULE: ./node_modules/@atlaskit/media-picker/components/dropzone/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropzoneImpl", function() { return dropzone_DropzoneImpl; });





var toArray = function (arr) { return [].slice.call(arr, 0); };
var dropzone_DropzoneImpl = /** @class */ (function (_super) {
    tslib_es6["__extends"](DropzoneImpl, _super);
    function DropzoneImpl(mediaClient, config) {
        if (config === void 0) { config = { uploadParams: {} }; }
        var _this = _super.call(this, mediaClient, config) || this;
        _this.onFileDropped = function (dragEvent) {
            if (!dragEvent.dataTransfer) {
                return;
            }
            dragEvent.preventDefault();
            dragEvent.stopPropagation();
            _this.onDrop(dragEvent);
            var filesArray = [].slice.call(dragEvent.dataTransfer.files);
            _this.uploadService.addFiles(filesArray);
        };
        _this.removeContainerListeners = function () {
            _this.container.removeEventListener('dragover', _this.onDragOver, false);
            _this.container.removeEventListener('dragleave', _this.onDragLeave, false);
        };
        _this.addContainerListeners = function () {
            _this.container.addEventListener('dragover', _this.onDragOver, false);
            _this.container.addEventListener('dragleave', _this.onDragLeave, false);
        };
        _this.onDragOver = function (e) {
            e.preventDefault();
            if (_this.instance && e.dataTransfer && DropzoneImpl.dragContainsFiles(e)) {
                var dataTransfer = e.dataTransfer;
                var allowed = void 0;
                try {
                    allowed = dataTransfer.effectAllowed;
                }
                catch (e) { } // the error is expected in IE11
                dataTransfer.dropEffect =
                    'move' === allowed || 'linkMove' === allowed ? 'move' : 'copy';
                _this.instance.classList.add('active');
                var length_1 = _this.getDraggedItemsLength(dataTransfer);
                _this.emitDragOver({ length: length_1 });
            }
        };
        _this.onDragLeave = function (e) {
            if (_this.instance && e.dataTransfer) {
                e.preventDefault();
                _this.instance.classList.remove('active');
                var length_2 = 0;
                if (DropzoneImpl.dragContainsFiles(e)) {
                    var dataTransfer = e.dataTransfer;
                    length_2 = _this.getDraggedItemsLength(dataTransfer);
                }
                _this.emitDragLeave({ length: length_2 });
            }
        };
        _this.onDrop = function (e) {
            var instance = _this.instance;
            if (instance && e.dataTransfer && DropzoneImpl.dragContainsFiles(e)) {
                instance.classList.remove('active');
                var dataTransfer = e.dataTransfer;
                var length_3 = _this.getDraggedItemsLength(dataTransfer);
                _this.emit('drop', undefined);
                _this.emitDragLeave({ length: length_3 });
            }
        };
        var container = config.container, headless = config.headless, proxyReactContext = config.proxyReactContext;
        _this.container = container || document.body;
        _this.headless = headless || false;
        _this.uiActive = false;
        _this.proxyReactContext = proxyReactContext;
        return _this;
    }
    DropzoneImpl.prototype.activate = function () {
        var _this = this;
        return whenDomReady
            .then(function () {
            _this.container = _this.container || document.body;
            if (!_this.instance) {
                return _this.createInstance();
            }
        })
            .then(function () {
            _this.removeContainerListeners(); // in case we call activate twice in a row
            _this.addContainerListeners();
            _this.addDropzone();
        });
    };
    DropzoneImpl.prototype.deactivate = function () {
        this.removeContainerListeners();
        this.removeDropzone();
    };
    DropzoneImpl.prototype.addDropzone = function () {
        this.container.addEventListener('drop', this.onFileDropped);
    };
    DropzoneImpl.prototype.removeDropzone = function () {
        this.container.removeEventListener('drop', this.onFileDropped);
        if (this.instance) {
            this.instance.remove();
        }
    };
    // Cross-browser way of getting dragged items length, we prioritize "items" if present
    // https://www.w3.org/TR/html51/editing.html#the-datatransfer-interface
    // This method is used on 'dragover' and we have no way to retrieve FileSystemFileEntry,
    // which contains info about if the dropped item is a file or directory. That info is only
    // available on 'drop'
    DropzoneImpl.prototype.getDraggedItemsLength = function (dataTransfer) {
        if (dataTransfer.items) {
            var items = toArray(dataTransfer.items);
            return items.filter(function (i) { return i.kind === 'file'; }).length;
        }
        // This is required for IE11
        return dataTransfer.files.length;
    };
    DropzoneImpl.prototype.createInstance = function () {
        this.instance = this.getDropzoneUI();
        this.container.appendChild(this.instance);
    };
    DropzoneImpl.prototype.getDropzoneUI = function () {
        if (this.headless) {
            var container = document.createElement('DIV');
            container.classList.add('headless-dropzone');
            return container;
        }
        else {
            if (this.proxyReactContext && this.proxyReactContext.intl) {
                var formatMessage = this.proxyReactContext.intl.formatMessage;
                return dropzoneUI(formatMessage);
            }
            var defaultFormatMessage = new index_es["c" /* IntlProvider */]({
                locale: 'en',
            }).getChildContext().intl.formatMessage;
            return dropzoneUI(defaultFormatMessage);
        }
    };
    DropzoneImpl.prototype.emitDragOver = function (e) {
        if (!this.uiActive) {
            this.uiActive = true;
            this.emit('drag-enter', e);
        }
    };
    DropzoneImpl.prototype.emitDragLeave = function (payload) {
        var _this = this;
        if (this.uiActive) {
            this.uiActive = false;
            /*
             when drag over child elements, container will issue dragleave and then dragover immediately.
             The 50ms timeout will prevent from issuing that "false" dragleave event
             */
            window.setTimeout(function () {
                if (!_this.uiActive) {
                    _this.emit('drag-leave', payload);
                }
            }, 50);
        }
    };
    DropzoneImpl.dragContainsFiles = function (event) {
        if (!event.dataTransfer) {
            return false;
        }
        var types = event.dataTransfer.types;
        return toArray(types).indexOf('Files') > -1;
    };
    return DropzoneImpl;
}(localUpload["a" /* LocalUploadComponent */]));

//# sourceMappingURL=index.js.map

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

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(950);
/* harmony import */ var _service_newUploadServiceImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(957);



var LocalUploadComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LocalUploadComponent, _super);
    function LocalUploadComponent(mediaClient, config) {
        var _this = _super.call(this) || this;
        _this.addFiles = function (files) { return _this.uploadService.addFiles(files); };
        _this.onFilesAdded = function (_a) {
            var files = _a.files;
            _this.emitUploadsStart(files);
        };
        _this.onFilePreviewUpdate = function (_a) {
            var file = _a.file, preview = _a.preview;
            _this.emitUploadPreviewUpdate(file, preview);
        };
        _this.onFileUploading = function (_a) {
            var file = _a.file, progress = _a.progress;
            _this.emitUploadProgress(file, progress);
        };
        _this.onFileConverting = function (_a) {
            var file = _a.file;
            _this.emitUploadProcessing(file);
        };
        _this.onFileConverted = function (payload) {
            _this.emitUploadEnd(payload.file, payload.public);
        };
        _this.onUploadError = function (_a) {
            var file = _a.file, error = _a.error;
            _this.emitUploadError(file, error);
        };
        var tenantUploadParams = config.uploadParams;
        _this.mediaClient = mediaClient;
        var _a = config.shouldCopyFileToRecents, shouldCopyFileToRecents = _a === void 0 ? true : _a;
        _this.uploadService = new _service_newUploadServiceImpl__WEBPACK_IMPORTED_MODULE_2__[/* NewUploadServiceImpl */ "a"](_this.mediaClient, tenantUploadParams, shouldCopyFileToRecents);
        _this.config = config;
        _this.uploadService.on('files-added', _this.onFilesAdded);
        _this.uploadService.on('file-preview-update', _this.onFilePreviewUpdate);
        _this.uploadService.on('file-uploading', _this.onFileUploading);
        _this.uploadService.on('file-converting', _this.onFileConverting);
        _this.uploadService.on('file-converted', _this.onFileConverted);
        _this.uploadService.on('file-upload-error', _this.onUploadError);
        return _this;
    }
    LocalUploadComponent.prototype.cancel = function (uniqueIdentifier) {
        this.uploadService.cancel(uniqueIdentifier);
    };
    LocalUploadComponent.prototype.setUploadParams = function (uploadParams) {
        this.uploadService.setUploadParams(uploadParams);
    };
    return LocalUploadComponent;
}(_component__WEBPACK_IMPORTED_MODULE_1__[/* UploadComponent */ "a"]));

//# sourceMappingURL=localUpload.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAssetUrl; });
var assetsHost = 'https://aui-cdn.atlassian.com/media';
var getAssetUrl = function (assetName) { return assetsHost + "/" + assetName; };
//# sourceMappingURL=getAssetUrl.js.map

/***/ })

}]);