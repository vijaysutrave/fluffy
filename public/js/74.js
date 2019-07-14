(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ 1187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerHasher", function() { return WorkerHasher; });
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(241);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rusha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1012);
/* harmony import */ var rusha__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rusha__WEBPACK_IMPORTED_MODULE_1__);


var WorkerHasher = /** @class */ (function () {
    function WorkerHasher(numOfWorkers) {
        this.workers = [];
        this.jobs = {};
        for (var i = 0; i < numOfWorkers; ++i) {
            this.workers.push(this.createWorker());
        }
    }
    WorkerHasher.prototype.hash = function (chunk) {
        return this.calculateHashInWorker(chunk);
    };
    WorkerHasher.prototype.createWorker = function () {
        var _this = this;
        var worker = rusha__WEBPACK_IMPORTED_MODULE_1___default.a.createWorker();
        var hasherWorker = { worker: worker, activeJobs: 0 };
        worker.addEventListener('message', function (event) {
            _this.handleWorkerMessage(event, hasherWorker);
        });
        return hasherWorker;
    };
    WorkerHasher.prototype.handleWorkerMessage = function (event, hasherWorker) {
        var id = event.data.id;
        if (this.jobs[id]) {
            var _a = this.jobs[id], resolve = _a.resolve, reject = _a.reject;
            delete this.jobs[id];
            hasherWorker.activeJobs--;
            if (event.data.error) {
                // TODO previously we were just calling it again.
                // this.calculateHashInWorker(chunk);
                reject(event.data.error);
            }
            else {
                resolve(event.data.hash);
            }
        }
    };
    WorkerHasher.prototype.calculateHashInWorker = function (blob) {
        var _this = this;
        var jobId = uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
        return new Promise(function (resolve, reject) {
            _this.jobs[jobId] = { resolve: resolve, reject: reject };
            var worker = _this.getMostRelaxedWorker();
            _this.dispatch(jobId, worker, blob);
        });
    };
    WorkerHasher.prototype.dispatch = function (jobId, hasherWorker, chunkBlob) {
        hasherWorker.activeJobs++;
        var worker = hasherWorker.worker;
        /*
         * postMessage() with chunk blob in Safari results in the error
         * "Failed to load resource: The operation could not be completed. (WebKitBlobResource error 1.)"
         *
         * To prevent it, we read the data from the blob using FileReader and pass it via postMessage to the worker.
         */
        if (navigator.userAgent.indexOf('Safari') > -1 &&
            navigator.userAgent.indexOf('Chrome') === -1) {
            var rd_1 = new FileReader();
            rd_1.onload = function () {
                worker.postMessage({ id: jobId, data: rd_1.result });
            };
            rd_1.readAsBinaryString(chunkBlob);
            return;
        }
        worker.postMessage({ id: jobId, data: chunkBlob });
    };
    WorkerHasher.prototype.getMostRelaxedWorker = function () {
        return this.workers.reduce(function (current, next) {
            if (next.activeJobs < current.activeJobs) {
                return next;
            }
            return current;
        }, this.workers[0]);
    };
    return WorkerHasher;
}());

//# sourceMappingURL=workerHasher.js.map

/***/ })

}]);