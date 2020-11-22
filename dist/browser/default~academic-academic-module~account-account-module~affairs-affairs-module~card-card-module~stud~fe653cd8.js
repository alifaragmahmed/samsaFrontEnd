(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~academic-academic-module~account-account-module~affairs-affairs-module~card-card-module~stud~fe653cd8"],{

/***/ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-hashtable/fesm5/angular-hashtable.js ***!
  \*******************************************************************/
/*! exports provided: HashTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashTable", function() { return HashTable; });
/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-hashtable.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
* This class represents the class definition.
*/
/**
 * @template T, L
 */
var  /*
* This class represents the class definition.
*/
/**
 * @template T, L
 */
HashTable = /** @class */ (function () {
    function HashTable() {
        this.table = {};
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.put = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.table['v_' + key] = value;
        return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.table['v_' + key];
    };
    /**
     * @return {?}
     */
    HashTable.prototype.getAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var vector = Array.from(Object.keys(this.table), (/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return _this.table[k]; }));
        return vector;
    };
    /**
     * @return {?}
     */
    HashTable.prototype.getKeys = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keys = Array.from(Object.keys(this.table), (/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return k.substring(2); }));
        return keys;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.has = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (typeof this.table['v_' + key] !== 'undefined') {
            return true;
        }
        return false;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        delete this.table['v_' + key];
        return this;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.putArray = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        this.table['a_' + key].push(value);
        return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.getArray = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        return this.table['a_' + key];
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.removeArray = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            this.table['a_' + key].splice(this.table['a_' + key].indexOf(value), 1);
        }
        return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.hasArray = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.hasinArray = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            if (this.table['a_' + key].indexOf(value) !== -1) {
                return true;
            }
            return false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    HashTable.prototype.size = /**
     * @return {?}
     */
    function () {
        return Object.keys(this.table).length;
    };
    /***************************************************/
    // ForEach Function
    // forEach(callback: function(key,value) )
    // @callback: A Callback function use to iterate the Object  
    //
    // Iterate all objects Hashtable
    // A used like arguments in the callback function
    /***************************************************/
    /***************************************************/
    // ForEach Function
    // forEach(callback: function(key,value) )
    // @callback: A Callback function use to iterate the Object  
    //
    // Iterate all objects Hashtable
    // A used like arguments in the callback function
    /**
     * ***********************************************
     * @param {?} callback
     * @return {?}
     */
    HashTable.prototype.forEach = /***************************************************/
    // ForEach Function
    // forEach(callback: function(key,value) )
    // @callback: A Callback function use to iterate the Object  
    //
    // Iterate all objects Hashtable
    // A used like arguments in the callback function
    /**
     * ***********************************************
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        for (var key in this.table) {
            callback(key.substring(2), this.table[key]);
        }
    };
    return HashTable;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-hashtable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-hashtable.js.map


/***/ }),

/***/ "./src/app/account/services/student-account.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/account/services/student-account.service.ts ***!
  \*************************************************************/
/*! exports provided: StudentAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAccountService", function() { return StudentAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var StudentAccountService = /** @class */ (function () {
    function StudentAccountService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    StudentAccountService.prototype.search = function (key) {
        return this.http.get('account/search_student?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken() + "&key=" + key);
    };
    /**
     * get services from api
     *
     */
    StudentAccountService.prototype.getStudentAccount = function (studentId) {
        return this.http.get('account/get_student_account?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken() + "&student_id=" + studentId);
    };
    /**
     * update student installments
     *
     */
    StudentAccountService.prototype.updateStudentInstallments = function (data) {
        return this.http.post('account/installment/update', data);
    };
    /**
     * update student installments
     *
     */
    StudentAccountService.prototype.studentPay = function (data) {
        return this.http.post('account/pay', data);
    };
    /**
     * update student installments
     *
     */
    StudentAccountService.prototype.sendNotes = function (data) {
        return this.http.post('account/write_notes', data);
    };
    /**
     * get available services for student
     *
     */
    StudentAccountService.prototype.getAvailabeServices = function (studentId) {
        return this.http.get('account/get_available_services?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken() + '&student_id=' + studentId);
    };
    /**
     * pay refund
     */
    StudentAccountService.prototype.payRefund = function (data) {
        return this.http.post('account/pay-refund?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * pay refund
     */
    StudentAccountService.prototype.payRemove = function (data) {
        return this.http.post('account/pay-remove?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * edit payment info
     */
    StudentAccountService.prototype.editPayment = function (data) {
        return this.http.post('account/edit-payment?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * update student info
     */
    StudentAccountService.prototype.updateStudentInfo = function (data) {
        return this.http.post('account/update_student_info?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * create discount request for the student
     */
    StudentAccountService.prototype.createDiscountRequest = function (data) {
        return this.http.post('account/discount_requests/store?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * create discount request for the student
     */
    StudentAccountService.prototype.createDiscount = function (data) {
        return this.http.post('account/discounts/store?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * get discount request for the student
     *
     * @param StudentId
     */
    StudentAccountService.prototype.getDiscountsRequests = function (studentId) {
        return this.http.get('account/discount_requests?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken() + "&student_id=" + studentId);
    };
    /**
     * remove discount request for the student
     *
     * @param StudentId
     */
    StudentAccountService.prototype.removeDiscountRequest = function (id) {
        return this.http.post('account/discount_requests/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), null);
    };
    /**
     * create balance reset for student
     *
     * @param data of balance reset
     */
    StudentAccountService.prototype.createStudentBalanceReset = function (data) {
        return this.http.post('account/create_balance_reset?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    StudentAccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StudentAccountService);
    return StudentAccountService;
}());



/***/ }),

/***/ "./src/app/account/services/student-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/account/services/student-service.service.ts ***!
  \*************************************************************/
/*! exports provided: StudentServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentServiceService", function() { return StudentServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/cache */ "./src/app/shared/cache.ts");





var StudentServiceService = /** @class */ (function () {
    function StudentServiceService(http) {
        this.http = http;
    }
    StudentServiceService_1 = StudentServiceService;
    /**
     * get services from api
     *
     */
    StudentServiceService.prototype.get = function () {
        return this.http.get('account/services?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    StudentServiceService.prototype.store = function (data) {
        // remove old cache
        src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].remove(StudentServiceService_1.STUDENT_SERVICE_PREFIX);
        return this.http.post('account/services/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    StudentServiceService.prototype.update = function (data) {
        // remove old cache
        src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].remove(StudentServiceService_1.STUDENT_SERVICE_PREFIX);
        return this.http.post('account/services/update/' + data.id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    StudentServiceService.prototype.destroy = function (id) {
        // remove old cache
        src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].remove(StudentServiceService_1.STUDENT_SERVICE_PREFIX);
        return this.http.post('account/services/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), null);
    };
    var StudentServiceService_1;
    StudentServiceService.STUDENT_SERVICE_PREFIX = 'student_services';
    StudentServiceService = StudentServiceService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentServiceService);
    return StudentServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=default~academic-academic-module~account-account-module~affairs-affairs-module~card-card-module~stud~fe653cd8.js.map