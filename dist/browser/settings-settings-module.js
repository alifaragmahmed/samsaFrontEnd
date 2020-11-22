(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

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

/***/ "./src/app/adminision/services/required-document.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/adminision/services/required-document.service.ts ***!
  \******************************************************************/
/*! exports provided: RequiredDocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredDocumentService", function() { return RequiredDocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var RequiredDocumentService = /** @class */ (function () {
    function RequiredDocumentService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    RequiredDocumentService.prototype.get = function () {
        return this.http.get('adminision/required_documents?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    RequiredDocumentService.prototype.store = function (data) {
        return this.http.post('adminision/required_documents/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    RequiredDocumentService.prototype.update = function (data) {
        return this.http.post('adminision/required_documents/update/' + data.id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    RequiredDocumentService.prototype.destroy = function (id) {
        return this.http.post('adminision/required_documents/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    RequiredDocumentService.REQUIRED_DOCUMENT_SERVICE_PREFIX = 'required_document';
    RequiredDocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RequiredDocumentService);
    return RequiredDocumentService;
}());



/***/ }),

/***/ "./src/app/settings/components/academic-year/academic-year.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/settings/components/academic-year/academic-year.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\n      {{ \"academic years\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th>{{ \"start_date\" | trans }}</th>\n                <th>{{ \"end_date\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>{{ item.name }}</td>\n                  <td>\n                    <input type=\"date\" class=\"form-control input-sm\" [(ngModel)]=\"item.start_date\" >\n                  </td>\n                  <td>\n                    <input type=\"date\" class=\"form-control input-sm\" [(ngModel)]=\"item.end_date\" >\n                  </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/academic-year/academic-year.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/settings/components/academic-year/academic-year.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  z-index: 9999999; }\n\n.custom-panel-body {\n  padding: 5px; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto; }\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto; }\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important; }\n\n.number_input {\n  width: 45px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9hY2FkZW1pYy15ZWFyL0U6XFxwcm9qZWN0XFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxzZXR0aW5nc1xcY29tcG9uZW50c1xcYWNhZGVtaWMteWVhclxcYWNhZGVtaWMteWVhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9hY2FkZW1pYy15ZWFyL2FjYWRlbWljLXllYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUNGLEVBQUE7O0FBRUE7RUFDRSx5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSx3Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1Q0FBc0M7RUFDdEMsOEJBQTZCLEVBQUE7O0FBSS9CO0VBQ0UsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLGtDQUFpQztFQUNqQyw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzdCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHVEQUFtRCxFQUFBOztBQUdyRDtFQUNFLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLGlDQUFnQyxFQUFBOztBQUdsQztFQUNFLGdCQUNGLEVBQUE7O0FBRUE7RUFDRSx5QkFBd0IsRUFBQTs7QUFFMUI7O0NDWEM7O0FEZUQ7RUFDRSx1QkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx3QkFBdUI7RUFDdkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHdCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsdUJBQXNCO0VBQ3RCLDBCQUF5QixFQUFBOztBQUczQjtFQUNFLFdBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvYWNhZGVtaWMteWVhci9hY2FkZW1pYy15ZWFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhZmUtYm94IHtcclxuICBwYWRkaW5nOiAxMHB4XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tcmVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZGFzaGVkIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk5OTk5O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNtYWxsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTIwcHhcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXHJcblxyXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXItdG9wIHtcclxuICBoZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZpbHRlci1zaWRlIHtcclxuICBoZWlnaHQ6IDQwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi53My11bCBsaSB7XHJcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtYmVyX2lucHV0IHtcclxuICB3aWR0aDogNDVweFxyXG59XHJcbiIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ib3R0b20tcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5OTk7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogNXB4OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4qL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmZpbHRlci10b3Age1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5maWx0ZXItc2lkZSB7XG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLnczLXVsIGxpIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50OyB9XG5cbi5udW1iZXJfaW5wdXQge1xuICB3aWR0aDogNDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/settings/components/academic-year/academic-year.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/settings/components/academic-year/academic-year.component.ts ***!
  \******************************************************************************/
/*! exports provided: AcademicYearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicYearComponent", function() { return AcademicYearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");




var AcademicYearComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AcademicYearComponent, _super);
    function AcademicYearComponent(settingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.baseUrl = "academic_years";
        _this.requiredFields = ['start_date', 'end_date'];
        _this.get();
        return _this;
    }
    AcademicYearComponent.prototype.ngOnInit = function () {
    };
    AcademicYearComponent.prototype.action = function () {
        this.get();
    };
    AcademicYearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-year',
            template: __webpack_require__(/*! ./academic-year.component.html */ "./src/app/settings/components/academic-year/academic-year.component.html"),
            styles: [__webpack_require__(/*! ./academic-year.component.scss */ "./src/app/settings/components/academic-year/academic-year.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], AcademicYearComponent);
    return AcademicYearComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/case-constraint/case-constraint.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/settings/components/case-constraint/case-constraint.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large text-center\" style=\"padding: 5px!important\">\n      {{ \"case_constraint\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/case-constraint/case-constraint.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/settings/components/case-constraint/case-constraint.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  z-index: 9999999; }\n\n.custom-panel-body {\n  padding: 5px; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto; }\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto; }\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important; }\n\n.number_input {\n  width: 45px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9jYXNlLWNvbnN0cmFpbnQvRTpcXHByb2plY3RcXHNhbXNhRnJvbnRFbmQvc3JjXFxhcHBcXHNldHRpbmdzXFxjb21wb25lbnRzXFxjYXNlLWNvbnN0cmFpbnRcXGNhc2UtY29uc3RyYWludC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9jYXNlLWNvbnN0cmFpbnQvY2FzZS1jb25zdHJhaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFDRixFQUFBOztBQUVBO0VBQ0UseUNBQXdDLEVBQUE7O0FBRzFDO0VBQ0Usd0NBQXVDLEVBQUE7O0FBR3pDO0VBQ0UsdUNBQXNDLEVBQUE7O0FBR3hDO0VBQ0UsNkJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsdUNBQXNDO0VBQ3RDLDhCQUE2QixFQUFBOztBQUkvQjtFQUNFLDZCQUE0QjtFQUM1QixzQkFBcUI7RUFDckIscUJBQW9CO0VBQ3BCLHNCQUFxQjtFQUNyQixrQ0FBaUM7RUFDakMsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM3QixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx1REFBbUQsRUFBQTs7QUFHckQ7RUFDRSx5QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxpQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQkFDRixFQUFBOztBQUVBO0VBQ0UseUJBQXdCLEVBQUE7O0FBRTFCOztDQ1hDOztBRGVEO0VBQ0UsdUJBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usd0JBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSx3QkFBdUI7RUFDdkIsY0FBYyxFQUFBOztBQUloQjtFQUNFLHVCQUFzQjtFQUN0QiwwQkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxXQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9jb21wb25lbnRzL2Nhc2UtY29uc3RyYWludC9jYXNlLWNvbnN0cmFpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FmZS1ib3gge1xyXG4gIHBhZGRpbmc6IDEwcHhcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbS1yZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1kYXNoZWQge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDZweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFuZWwge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICByaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAtMTNweCFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDk5OTk5OTk7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFuZWwtYm9keSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uc21hbGwtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIG1pbi13aWR0aDogNzAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ncmF5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1pbnB1dCB7XHJcbiAgbWluLXdpZHRoOiAxMjBweFxyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIG92ZXJmbG93OiBhdXRvIWltcG9ydGFudDtcclxufVxyXG4vKlxyXG4gIGN1c3RvbSBidXR0b24gc3R5bGVcclxuKi9cclxuXHJcbnNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbHRlci10b3Age1xyXG4gIGhlaWdodDogMjAwcHghaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZmlsdGVyLXNpZGUge1xyXG4gIGhlaWdodDogNDAwcHghaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLnczLXVsIGxpIHtcclxuICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW1iZXJfaW5wdXQge1xyXG4gIHdpZHRoOiA0NXB4XHJcbn1cclxuIiwiLnNhZmUtYm94IHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1yZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZGFzaGVkIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50OyB9XG5cbi5idG4tbWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tcGFuZWwge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogLTEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTk5OTsgfVxuXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiA1cHg7IH1cblxuLnNtYWxsLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7IH1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIG1pbi13aWR0aDogNzAlICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ncmF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20taW5wdXQge1xuICBtaW4td2lkdGg6IDEyMHB4OyB9XG5cbi5tb2RhbCB7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDsgfVxuXG4uZmlsdGVyLXRvcCB7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLmZpbHRlci1zaWRlIHtcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4udzMtdWwgbGkge1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7IH1cblxuLm51bWJlcl9pbnB1dCB7XG4gIHdpZHRoOiA0NXB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/settings/components/case-constraint/case-constraint.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/settings/components/case-constraint/case-constraint.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CaseConstraintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseConstraintComponent", function() { return CaseConstraintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");




var CaseConstraintComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CaseConstraintComponent, _super);
    function CaseConstraintComponent(settingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.baseUrl = "case_contraints";
        _this.requiredFields = ['name'];
        _this.get();
        return _this;
    }
    CaseConstraintComponent.prototype.ngOnInit = function () {
    };
    CaseConstraintComponent.prototype.action = function () {
        this.get();
    };
    CaseConstraintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-case-constraint',
            template: __webpack_require__(/*! ./case-constraint.component.html */ "./src/app/settings/components/case-constraint/case-constraint.component.html"),
            styles: [__webpack_require__(/*! ./case-constraint.component.scss */ "./src/app/settings/components/case-constraint/case-constraint.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], CaseConstraintComponent);
    return CaseConstraintComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/country/country.component.html":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/country/country.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block\">\n  <div class=\"w3-white material-shadow safe-box\">\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\n      {{ \"coutries & governments & cities\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-4  col-md-4 col-sm-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-title\">\n            {{ \"countries\" | trans }}\n          </div>\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4  col-md-4 col-sm-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-title\">\n            {{ \"governments\" | trans }}\n          </div>\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center  \"\n          style=\"height: 400px;\" >\n            <div class=\"w3-display-topmiddle w3-block hidden\">\n              <select class=\"form-control input-sm\" [(ngModel)]=\"selectedCountry\"  >\n                <option *ngFor=\"let country of data\" value=\"{{ country.id }}\">{{ country.name }}</option>\n              </select>\n            </div>\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th>{{ \"country\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let item of gover.data index as i\" >\n                  <tr  >\n                    <td>{{ i + 1 }}</td>\n                    <td>\n                      <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                    </td>\n                    <td>\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"item.country_id\"  >\n                        <option *ngFor=\"let country of data\" value=\"{{ country.id }}\">{{ country.name }}</option>\n                      </select>\n                    </td>\n                    <td>\n                    <div style=\"width: 90px\" >\n                      <button class=\"btn btn-success\"\n                      [disabled]=\"gover.isSubmitted\"\n                      (click)=\"gover.send(item, i)\" >\n                      <i *ngIf=\"!gover.isSubmitted\" class=\"fa fa-check\" ></i>\n                      <i *ngIf=\"gover.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                      <button class=\"btn btn-danger\"\n                      [disabled]=\"gover.isSubmitted\"\n                      (click)=\"gover.destroy(item, i)\" >\n                        <i *ngIf=\"!gover.isSubmitted\" class=\"fa fa-trash\" ></i>\n                        <i *ngIf=\"gover.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                      </button>\n                    </div>\n                    </td>\n                  </tr>\n                </ng-container>\n                <tr>\n                  <td></td>\n                  <td colspan=\"2\" >\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"gover.add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4  col-md-4 col-sm-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-title\">\n            {{ \"cities\" | trans }}\n          </div>\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <div class=\"w3-display-topmiddle w3-block hidden\">\n              <select class=\"form-control input-sm\" [(ngModel)]=\"selectedGovernment\"  >\n                <option *ngFor=\"let gn of gover.data\" value=\"{{ gn.id }}\">{{ gn.name }}</option>\n              </select>\n            </div>\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th>{{ \"government\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let item of city.data index as i\">\n                  <tr  >\n                    <td>{{ i + 1 }}</td>\n                    <td>\n                      <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                    </td>\n                    <td>\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"item.government_id\"  >\n                        <option *ngFor=\"let government of gover.data\" value=\"{{ government.id }}\">{{ government.name }}</option>\n                      </select>\n                    </td>\n                    <td>\n                    <div style=\"width: 90px\" >\n                      <button class=\"btn btn-success\"\n                      [disabled]=\"city.isSubmitted\"\n                      (click)=\"city.send(item, i)\" >\n                      <i *ngIf=\"!city.isSubmitted\" class=\"fa fa-check\" ></i>\n                      <i *ngIf=\"city.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                      <button class=\"btn btn-danger\"\n                      [disabled]=\"city.isSubmitted\"\n                      (click)=\"city.destroy(item, i)\" >\n                        <i *ngIf=\"!city.isSubmitted\" class=\"fa fa-trash\" ></i>\n                        <i *ngIf=\"city.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                      </button>\n                    </div>\n                    </td>\n                  </tr>\n                </ng-container>\n                <tr>\n                  <td></td>\n                  <td colspan=\"2\" >\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"city.add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/country/country.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/country/country.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  z-index: 9999999; }\n\n.custom-panel-body {\n  padding: 5px; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto; }\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto; }\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important; }\n\n.number_input {\n  width: 45px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9jb3VudHJ5L0U6XFxwcm9qZWN0XFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxzZXR0aW5nc1xcY29tcG9uZW50c1xcY291bnRyeVxcY291bnRyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9jb3VudHJ5L2NvdW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUNGLEVBQUE7O0FBRUE7RUFDRSx5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSx3Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1Q0FBc0M7RUFDdEMsOEJBQTZCLEVBQUE7O0FBSS9CO0VBQ0UsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLGtDQUFpQztFQUNqQyw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzdCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHVEQUFtRCxFQUFBOztBQUdyRDtFQUNFLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLGlDQUFnQyxFQUFBOztBQUdsQztFQUNFLGdCQUNGLEVBQUE7O0FBRUE7RUFDRSx5QkFBd0IsRUFBQTs7QUFFMUI7O0NDWEM7O0FEZUQ7RUFDRSx1QkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx3QkFBdUI7RUFDdkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHdCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsdUJBQXNCO0VBQ3RCLDBCQUF5QixFQUFBOztBQUczQjtFQUNFLFdBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhZmUtYm94IHtcclxuICBwYWRkaW5nOiAxMHB4XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tcmVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZGFzaGVkIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk5OTk5O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNtYWxsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTIwcHhcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXHJcblxyXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXItdG9wIHtcclxuICBoZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZpbHRlci1zaWRlIHtcclxuICBoZWlnaHQ6IDQwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi53My11bCBsaSB7XHJcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtYmVyX2lucHV0IHtcclxuICB3aWR0aDogNDVweFxyXG59XHJcbiIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ib3R0b20tcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5OTk7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogNXB4OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4qL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmZpbHRlci10b3Age1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5maWx0ZXItc2lkZSB7XG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLnczLXVsIGxpIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50OyB9XG5cbi5udW1iZXJfaW5wdXQge1xuICB3aWR0aDogNDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/settings/components/country/country.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/settings/components/country/country.component.ts ***!
  \******************************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");






var CountryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CountryComponent, _super);
    function CountryComponent(settingService, governmentService, cityService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.governmentService = governmentService;
        _this.cityService = cityService;
        _this.gover = null;
        _this.city = null;
        _this.selectedCountry = {};
        _this.selectedGovernment = {};
        _this.baseUrl = "countries";
        _this.settingService.baseUrl = "countries";
        _this.requiredFields = ['name'];
        _this.get();
        // init government
        _this.gover = new _setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"](_this.governmentService);
        _this.gover.requiredFields = ['name', 'country_id'];
        _this.gover.baseUrl = "governments";
        //governmentService.baseUrl = "governments";
        _this.gover.get();
        // init city
        _this.city = new _setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"](_this.cityService);
        _this.city.baseUrl = "cities";
        _this.city.requiredFields = ['name', 'government_id'];
        _this.city.get();
        return _this;
    }
    CountryComponent.prototype.ngOnInit = function () {
    };
    CountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/settings/components/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.scss */ "./src/app/settings/components/country/country.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"],
            _services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"],
            _services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], CountryComponent);
    return CountryComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/division/division.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/settings/components/division/division.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block\">\n  <div class=\"w3-white material-shadow safe-box\">\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\n      {{ \"divisions & departments & levels\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-3  col-md-3 col-sm-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-title\">\n            {{ \"divisions\" | trans }}\n          </div>\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                  <td>\n                   <div style=\"width: 80px\" >\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                   </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3  col-md-3 col-sm-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-title\">\n            {{ \"levels\" | trans }}\n          </div>\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center  \"\n          style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let item of level.data index as i\" >\n                  <tr  >\n                    <td>{{ i + 1 }}</td>\n                    <td>\n                      <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                    </td>\n                    <td>\n                    <div style=\"width: 90px\" >\n                      <button class=\"btn btn-success\"\n                      [disabled]=\"level.isSubmitted\"\n                      (click)=\"level.send(item, i)\" >\n                      <i *ngIf=\"!level.isSubmitted\" class=\"fa fa-check\" ></i>\n                      <i *ngIf=\"level.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                      <button class=\"btn btn-danger\"\n                      [disabled]=\"level.isSubmitted\"\n                      (click)=\"level.destroy(item, i)\" >\n                        <i *ngIf=\"!level.isSubmitted\" class=\"fa fa-trash\" ></i>\n                        <i *ngIf=\"level.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                      </button>\n                    </div>\n                    </td>\n                  </tr>\n                </ng-container>\n                <tr>\n                  <td></td>\n                  <td colspan=\"2\" >\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"level.add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6  col-md-6 col-sm-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-title\">\n            {{ \"departments\" | trans }}\n          </div>\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th>{{ \"division\" | trans }}</th>\n                <th>{{ \"level\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let item of department.data index as i\">\n                  <tr  >\n                    <td>{{ i + 1 }}</td>\n                    <td>\n                      <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                    </td>\n                    <td>\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"item.division_id\"  >\n                        <option *ngFor=\"let dv of data\" value=\"{{ dv.id }}\">{{ dv.name }}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"item.level_id\"  >\n                        <option *ngFor=\"let level of level.data\" value=\"{{ level.id }}\">{{ level.name }}</option>\n                      </select>\n                    </td>\n                    <td>\n                    <div style=\"width: 90px\" >\n                      <button class=\"btn btn-success\"\n                      [disabled]=\"department.isSubmitted\"\n                      (click)=\"department.send(item, i)\" >\n                      <i *ngIf=\"!department.isSubmitted\" class=\"fa fa-check\" ></i>\n                      <i *ngIf=\"department.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                      <button class=\"btn btn-danger\"\n                      [disabled]=\"department.isSubmitted\"\n                      (click)=\"department.destroy(item, i)\" >\n                        <i *ngIf=\"!department.isSubmitted\" class=\"fa fa-trash\" ></i>\n                        <i *ngIf=\"department.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                      </button>\n                    </div>\n                    </td>\n                  </tr>\n                </ng-container>\n                <tr>\n                  <td></td>\n                  <td colspan=\"2\" >\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"department.add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/division/division.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/settings/components/division/division.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  z-index: 9999999; }\n\n.custom-panel-body {\n  padding: 5px; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto; }\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto; }\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important; }\n\n.number_input {\n  width: 45px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9kaXZpc2lvbi9FOlxccHJvamVjdFxcc2Ftc2FGcm9udEVuZC9zcmNcXGFwcFxcc2V0dGluZ3NcXGNvbXBvbmVudHNcXGRpdmlzaW9uXFxkaXZpc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9kaXZpc2lvbi9kaXZpc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQ0YsRUFBQTs7QUFFQTtFQUNFLHlDQUF3QyxFQUFBOztBQUcxQztFQUNFLHdDQUF1QyxFQUFBOztBQUd6QztFQUNFLHVDQUFzQyxFQUFBOztBQUd4QztFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLHVDQUFzQztFQUN0Qyw4QkFBNkIsRUFBQTs7QUFJL0I7RUFDRSw2QkFBNEI7RUFDNUIsc0JBQXFCO0VBQ3JCLHFCQUFvQjtFQUNwQixzQkFBcUI7RUFDckIsa0NBQWlDO0VBQ2pDLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDN0IsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsdURBQW1ELEVBQUE7O0FBR3JEO0VBQ0UseUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsaUNBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsZ0JBQ0YsRUFBQTs7QUFFQTtFQUNFLHlCQUF3QixFQUFBOztBQUUxQjs7Q0NYQzs7QURlRDtFQUNFLHVCQUFzQixFQUFBOztBQUd4QjtFQUNFLHdCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usd0JBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSx1QkFBc0I7RUFDdEIsMEJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsV0FDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9kaXZpc2lvbi9kaXZpc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWZlLWJveCB7XHJcbiAgcGFkZGluZzogMTBweFxyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLXJlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWRhc2hlZCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tbWFyZ2luLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1wYW5lbCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB0b3A6IC0xM3B4IWltcG9ydGFudDtcclxuICB3aWR0aDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5OTk5OTtcclxufVxyXG5cclxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5zbWFsbC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgbWluLXdpZHRoOiA3MCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWdyYXkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDEyMHB4XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG8haW1wb3J0YW50O1xyXG59XHJcbi8qXHJcbiAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4qL1xyXG5cclxuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlsdGVyLXRvcCB7XHJcbiAgaGVpZ2h0OiAyMDBweCFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5maWx0ZXItc2lkZSB7XHJcbiAgaGVpZ2h0OiA0MDBweCFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcblxyXG4udzMtdWwgbGkge1xyXG4gIHBhZGRpbmc6IDJweCFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLm51bWJlcl9pbnB1dCB7XHJcbiAgd2lkdGg6IDQ1cHhcclxufVxyXG4iLCIuc2FmZS1ib3gge1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItYm90dG9tLXJlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1kYXNoZWQge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tcGFuZWwtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgdG9wOiAtMTNweCAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5OTk5OyB9XG5cbi5jdXN0b20tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDVweDsgfVxuXG4uc21hbGwtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDsgfVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgbWluLXdpZHRoOiA3MCUgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWdyYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1pbnB1dCB7XG4gIG1pbi13aWR0aDogMTIwcHg7IH1cblxuLm1vZGFsIHtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4vKlxyXG4gIGN1c3RvbSBidXR0b24gc3R5bGVcclxuKi9cbnNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG5cbi5maWx0ZXItdG9wIHtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4uZmlsdGVyLXNpZGUge1xuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi53My11bCBsaSB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDsgfVxuXG4ubnVtYmVyX2lucHV0IHtcbiAgd2lkdGg6IDQ1cHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/settings/components/division/division.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/division/division.component.ts ***!
  \********************************************************************/
/*! exports provided: DivisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionComponent", function() { return DivisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");




var DivisionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DivisionComponent, _super);
    function DivisionComponent(settingService, levelService, departmentService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.levelService = levelService;
        _this.departmentService = departmentService;
        _this.level = null;
        _this.department = null;
        _this.baseUrl = "divisions";
        _this.settingService.baseUrl = "countries";
        _this.requiredFields = ['name'];
        _this.get();
        // init level
        _this.level = new _setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"](_this.levelService);
        _this.level.requiredFields = ['name'];
        _this.level.baseUrl = "levels";
        _this.level.get();
        // init department
        _this.department = new _setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"](_this.departmentService);
        _this.department.baseUrl = "departments";
        _this.department.requiredFields = ['name', 'level_id', 'division_id'];
        _this.department.get();
        return _this;
    }
    DivisionComponent.prototype.ngOnInit = function () {
    };
    DivisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-division',
            template: __webpack_require__(/*! ./division.component.html */ "./src/app/settings/components/division/division.component.html"),
            styles: [__webpack_require__(/*! ./division.component.scss */ "./src/app/settings/components/division/division.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"],
            _services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"],
            _services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], DivisionComponent);
    return DivisionComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/language/language.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/settings/components/language/language.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large text-center\" style=\"padding: 5px!important\">\n      {{ \"languages\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/language/language.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/settings/components/language/language.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/components/language/language.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/language/language.component.ts ***!
  \********************************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");




var LanguageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LanguageComponent, _super);
    function LanguageComponent(settingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.baseUrl = "languages";
        _this.requiredFields = ['name'];
        _this.get();
        return _this;
    }
    LanguageComponent.prototype.ngOnInit = function () {
    };
    LanguageComponent.prototype.action = function () {
        this.get();
    };
    LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/settings/components/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.scss */ "./src/app/settings/components/language/language.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], LanguageComponent);
    return LanguageComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/nationality/nationality.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/settings/components/nationality/nationality.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large text-center\" style=\"padding: 5px!important\">\n      {{ \"nationalities\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/nationality/nationality.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/settings/components/nationality/nationality.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvbmF0aW9uYWxpdHkvbmF0aW9uYWxpdHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/components/nationality/nationality.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/settings/components/nationality/nationality.component.ts ***!
  \**************************************************************************/
/*! exports provided: NationalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalityComponent", function() { return NationalityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");




var NationalityComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NationalityComponent, _super);
    function NationalityComponent(settingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.baseUrl = "nationalities";
        _this.requiredFields = ['name'];
        _this.get();
        return _this;
    }
    NationalityComponent.prototype.ngOnInit = function () {
    };
    NationalityComponent.prototype.action = function () {
        this.get();
    };
    NationalityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nationality',
            template: __webpack_require__(/*! ./nationality.component.html */ "./src/app/settings/components/nationality/nationality.component.html"),
            styles: [__webpack_require__(/*! ./nationality.component.scss */ "./src/app/settings/components/nationality/nationality.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], NationalityComponent);
    return NationalityComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/parent-job/parent-job.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/settings/components/parent-job/parent-job.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large text-center\" style=\"padding: 5px!important\">\n      {{ \"parent_jobs\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/parent-job/parent-job.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/settings/components/parent-job/parent-job.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvcGFyZW50LWpvYi9wYXJlbnQtam9iLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/components/parent-job/parent-job.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/settings/components/parent-job/parent-job.component.ts ***!
  \************************************************************************/
/*! exports provided: ParentJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentJobComponent", function() { return ParentJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");




var ParentJobComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ParentJobComponent, _super);
    function ParentJobComponent(settingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.baseUrl = "parent_jobs";
        _this.requiredFields = ['name'];
        _this.get();
        return _this;
    }
    ParentJobComponent.prototype.ngOnInit = function () {
    };
    ParentJobComponent.prototype.action = function () {
        this.get();
    };
    ParentJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parent-job',
            template: __webpack_require__(/*! ./parent-job.component.html */ "./src/app/settings/components/parent-job/parent-job.component.html"),
            styles: [__webpack_require__(/*! ./parent-job.component.scss */ "./src/app/settings/components/parent-job/parent-job.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], ParentJobComponent);
    return ParentJobComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/qualification/qualification.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/settings/components/qualification/qualification.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block\">\n  <div class=\"w3-white material-shadow safe-box\">\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\n      {{ \"qualifications\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-5  col-md-5 col-sm-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-title\">\n            {{ \"qualifications\" | trans }}\n          </div>\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th>{{ \"grade\" | trans }}</th>\n                <th>{{ \"is_azhar\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                  <td>\n                    <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.grade\" >\n                  </td>\n                  <td>\n                    <input type=\"checkbox\" class=\"\" [(ngModel)]=\"item.is_azhar\" >\n                  </td>\n                  <td>\n                   <div style=\"width: 80px\" >\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                   </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-7  col-md-7 col-sm-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-title\">\n            {{ \"qualification types\" | trans }}\n          </div>\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center  \"\n          style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th>{{ \"qualification\" | trans }}</th>\n                <th>{{ \"academic_year\" | trans }}</th>\n                <th>{{ \"level\" | trans }}</th>\n                <th>{{ \"grade\" | trans }}</th>\n                <th>{{ \"percent\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let item of qualificationType.data index as i\" >\n                  <tr  >\n                    <td>{{ i + 1 }}</td>\n                    <td>\n                      <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                    </td>\n                    <td>\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"item.qualification_id\"  >\n                        <option *ngFor=\"let q of data\" value=\"{{ q.id }}\">{{ q.name }}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"item.academic_year_id\"  >\n                        <option *ngFor=\"let year of academicYears\" value=\"{{ year.id }}\">{{ year.name }}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"item.level_id\"  >\n                        <option *ngFor=\"let level of levels\" value=\"{{ level.id }}\">{{ level.name }}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.grade\" >\n                    </td>\n                    <td>\n                      <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.percent\" >\n                    </td>\n                    <td>\n                    <div style=\"width: 90px\" >\n                      <button class=\"btn btn-success\"\n                      [disabled]=\"qualificationType.isSubmitted\"\n                      (click)=\"qualificationType.send(item, i)\" >\n                      <i *ngIf=\"!qualificationType.isSubmitted\" class=\"fa fa-check\" ></i>\n                      <i *ngIf=\"qualificationType.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                      <button class=\"btn btn-danger\"\n                      [disabled]=\"qualificationType.isSubmitted\"\n                      (click)=\"qualificationType.destroy(item, i)\" >\n                        <i *ngIf=\"!qualificationType.isSubmitted\" class=\"fa fa-trash\" ></i>\n                        <i *ngIf=\"qualificationType.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                      </button>\n                    </div>\n                    </td>\n                  </tr>\n                </ng-container>\n                <tr>\n                  <td></td>\n                  <td colspan=\"2\" >\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"qualificationType.add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/qualification/qualification.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/settings/components/qualification/qualification.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  z-index: 9999999; }\n\n.custom-panel-body {\n  padding: 5px; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto; }\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto; }\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important; }\n\n.number_input {\n  width: 45px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9xdWFsaWZpY2F0aW9uL0U6XFxwcm9qZWN0XFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxzZXR0aW5nc1xcY29tcG9uZW50c1xccXVhbGlmaWNhdGlvblxccXVhbGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9xdWFsaWZpY2F0aW9uL3F1YWxpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUNGLEVBQUE7O0FBRUE7RUFDRSx5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSx3Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1Q0FBc0M7RUFDdEMsOEJBQTZCLEVBQUE7O0FBSS9CO0VBQ0UsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLGtDQUFpQztFQUNqQyw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzdCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHVEQUFtRCxFQUFBOztBQUdyRDtFQUNFLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLGlDQUFnQyxFQUFBOztBQUdsQztFQUNFLGdCQUNGLEVBQUE7O0FBRUE7RUFDRSx5QkFBd0IsRUFBQTs7QUFFMUI7O0NDWEM7O0FEZUQ7RUFDRSx1QkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx3QkFBdUI7RUFDdkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHdCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsdUJBQXNCO0VBQ3RCLDBCQUF5QixFQUFBOztBQUczQjtFQUNFLFdBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvcXVhbGlmaWNhdGlvbi9xdWFsaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhZmUtYm94IHtcclxuICBwYWRkaW5nOiAxMHB4XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tcmVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZGFzaGVkIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk5OTk5O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNtYWxsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTIwcHhcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXHJcblxyXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXItdG9wIHtcclxuICBoZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZpbHRlci1zaWRlIHtcclxuICBoZWlnaHQ6IDQwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi53My11bCBsaSB7XHJcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtYmVyX2lucHV0IHtcclxuICB3aWR0aDogNDVweFxyXG59XHJcbiIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ib3R0b20tcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5OTk7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogNXB4OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4qL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmZpbHRlci10b3Age1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5maWx0ZXItc2lkZSB7XG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLnczLXVsIGxpIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50OyB9XG5cbi5udW1iZXJfaW5wdXQge1xuICB3aWR0aDogNDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/settings/components/qualification/qualification.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/settings/components/qualification/qualification.component.ts ***!
  \******************************************************************************/
/*! exports provided: QualificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualificationComponent", function() { return QualificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_account_services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var src_app_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");







var QualificationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QualificationComponent, _super);
    function QualificationComponent(settingService, qualificationTypeService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.qualificationTypeService = qualificationTypeService;
        _this.qualificationType = null;
        _this.academicYears = [];
        _this.levels = [];
        _this.baseUrl = "qualifications";
        _this.settingService.baseUrl = "qualifications";
        _this.requiredFields = ['name', 'grade'];
        _this.get();
        // init qualification type
        _this.qualificationType = new _setting_template__WEBPACK_IMPORTED_MODULE_6__["SettingTemplate"](_this.qualificationTypeService);
        _this.qualificationType.baseUrl = "qualification_types";
        _this.qualificationType.requiredFields = ['name', 'level_id', 'academic_year_id', 'qualification_id', 'grade'];
        _this.qualificationType.get();
        return _this;
    }
    QualificationComponent.prototype.ngOnInit = function () {
        this.levels = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].get(src_app_account_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"].LEVEL_PREFIX);
        this.academicYears = src_app_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationSettingService"].ACADEMIC_YEARS;
    };
    QualificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qualification',
            template: __webpack_require__(/*! ./qualification.component.html */ "./src/app/settings/components/qualification/qualification.component.html"),
            styles: [__webpack_require__(/*! ./qualification.component.scss */ "./src/app/settings/components/qualification/qualification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"],
            _services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]])
    ], QualificationComponent);
    return QualificationComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_6__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/registration-method/registration-method.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/settings/components/registration-method/registration-method.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large text-center\" style=\"padding: 5px!important\">\n      {{ \"registration_methods\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/registration-method/registration-method.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/settings/components/registration-method/registration-method.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  z-index: 9999999; }\n\n.custom-panel-body {\n  padding: 5px; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto; }\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto; }\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important; }\n\n.number_input {\n  width: 45px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9yZWdpc3RyYXRpb24tbWV0aG9kL0U6XFxwcm9qZWN0XFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxzZXR0aW5nc1xcY29tcG9uZW50c1xccmVnaXN0cmF0aW9uLW1ldGhvZFxccmVnaXN0cmF0aW9uLW1ldGhvZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9yZWdpc3RyYXRpb24tbWV0aG9kL3JlZ2lzdHJhdGlvbi1tZXRob2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUNGLEVBQUE7O0FBRUE7RUFDRSx5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSx3Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1Q0FBc0M7RUFDdEMsOEJBQTZCLEVBQUE7O0FBSS9CO0VBQ0UsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLGtDQUFpQztFQUNqQyw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzdCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHVEQUFtRCxFQUFBOztBQUdyRDtFQUNFLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLGlDQUFnQyxFQUFBOztBQUdsQztFQUNFLGdCQUNGLEVBQUE7O0FBRUE7RUFDRSx5QkFBd0IsRUFBQTs7QUFFMUI7O0NDWEM7O0FEZUQ7RUFDRSx1QkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx3QkFBdUI7RUFDdkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHdCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsdUJBQXNCO0VBQ3RCLDBCQUF5QixFQUFBOztBQUczQjtFQUNFLFdBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uLW1ldGhvZC9yZWdpc3RyYXRpb24tbWV0aG9kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhZmUtYm94IHtcclxuICBwYWRkaW5nOiAxMHB4XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tcmVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZGFzaGVkIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk5OTk5O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNtYWxsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTIwcHhcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXHJcblxyXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXItdG9wIHtcclxuICBoZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZpbHRlci1zaWRlIHtcclxuICBoZWlnaHQ6IDQwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi53My11bCBsaSB7XHJcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtYmVyX2lucHV0IHtcclxuICB3aWR0aDogNDVweFxyXG59XHJcbiIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ib3R0b20tcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5OTk7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogNXB4OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4qL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmZpbHRlci10b3Age1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5maWx0ZXItc2lkZSB7XG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLnczLXVsIGxpIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50OyB9XG5cbi5udW1iZXJfaW5wdXQge1xuICB3aWR0aDogNDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/settings/components/registration-method/registration-method.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/settings/components/registration-method/registration-method.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RegistrationMethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationMethodComponent", function() { return RegistrationMethodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");




var RegistrationMethodComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegistrationMethodComponent, _super);
    function RegistrationMethodComponent(settingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.baseUrl = "registration_methods";
        _this.requiredFields = ['name'];
        _this.get();
        return _this;
    }
    RegistrationMethodComponent.prototype.ngOnInit = function () {
    };
    RegistrationMethodComponent.prototype.action = function () {
        this.get();
    };
    RegistrationMethodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-method',
            template: __webpack_require__(/*! ./registration-method.component.html */ "./src/app/settings/components/registration-method/registration-method.component.html"),
            styles: [__webpack_require__(/*! ./registration-method.component.scss */ "./src/app/settings/components/registration-method/registration-method.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], RegistrationMethodComponent);
    return RegistrationMethodComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/relation/relation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/settings/components/relation/relation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large text-center\" style=\"padding: 5px!important\">\n      {{ \"relations\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/relation/relation.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/settings/components/relation/relation.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvcmVsYXRpb24vcmVsYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/components/relation/relation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/relation/relation.component.ts ***!
  \********************************************************************/
/*! exports provided: RelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationComponent", function() { return RelationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");




var RelationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RelationComponent, _super);
    function RelationComponent(settingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.baseUrl = "relations";
        _this.requiredFields = ['name'];
        _this.get();
        return _this;
    }
    RelationComponent.prototype.ngOnInit = function () {
    };
    RelationComponent.prototype.action = function () {
        this.get();
    };
    RelationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relation',
            template: __webpack_require__(/*! ./relation.component.html */ "./src/app/settings/components/relation/relation.component.html"),
            styles: [__webpack_require__(/*! ./relation.component.scss */ "./src/app/settings/components/relation/relation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], RelationComponent);
    return RelationComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/student-code-series/student-code-series.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/settings/components/student-code-series/student-code-series.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large text-center\" style=\"padding: 5px!important\">\n      {{ \"student code series\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"code\" | trans }}</th>\n                <th>{{ \"academic_year\" | trans }}</th>\n                <th>{{ \"level\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.code\" >\n                  </td>\n                  <td>\n                    <select class=\"form-control input-sm\" [(ngModel)]=\"item.academic_year_id\"  >\n                      <option *ngFor=\"let year of academicYears\" value=\"{{ year.id }}\">{{ year.name }}</option>\n                    </select>\n                  </td>\n                  <td>\n                    <select class=\"form-control input-sm\" [(ngModel)]=\"item.level_id\"  >\n                      <option *ngFor=\"let level of levels\" value=\"{{ level.id }}\">{{ level.name }}</option>\n                    </select>\n                  </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/student-code-series/student-code-series.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/settings/components/student-code-series/student-code-series.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvc3R1ZGVudC1jb2RlLXNlcmllcy9zdHVkZW50LWNvZGUtc2VyaWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/components/student-code-series/student-code-series.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/settings/components/student-code-series/student-code-series.component.ts ***!
  \******************************************************************************************/
/*! exports provided: StudentCodeSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCodeSeriesComponent", function() { return StudentCodeSeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_account_services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var src_app_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");







var StudentCodeSeriesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentCodeSeriesComponent, _super);
    function StudentCodeSeriesComponent(settingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.academicYears = [];
        _this.levels = [];
        _this.baseUrl = "student_code_series";
        _this.requiredFields = ['code', 'academic_year_id', 'level_id'];
        _this.get();
        return _this;
    }
    StudentCodeSeriesComponent.prototype.ngOnInit = function () {
        this.levels = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].get(src_app_account_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"].LEVEL_PREFIX);
        this.academicYears = src_app_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationSettingService"].ACADEMIC_YEARS;
    };
    StudentCodeSeriesComponent.prototype.action = function () {
        this.get();
    };
    StudentCodeSeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-code-series',
            template: __webpack_require__(/*! ./student-code-series.component.html */ "./src/app/settings/components/student-code-series/student-code-series.component.html"),
            styles: [__webpack_require__(/*! ./student-code-series.component.scss */ "./src/app/settings/components/student-code-series/student-code-series.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]])
    ], StudentCodeSeriesComponent);
    return StudentCodeSeriesComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_6__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/registeration-status/Registeration.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/settings/registeration-status/Registeration.service.ts ***!
  \************************************************************************/
/*! exports provided: RegisterationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationService", function() { return RegisterationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var RegisterationService = /** @class */ (function () {
    function RegisterationService(http) {
        this.http = http;
    }
    RegisterationService.prototype.getAll = function () {
        return this.http.get("registration-status?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RegisterationService.prototype.update = function (data) {
        return this.http.put("registration-status/" + data.id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RegisterationService.prototype.create = function (data) {
        return this.http.post("registration-status?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RegisterationService.prototype.delete = function (id) {
        return this.http.delete("registration-status/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RegisterationService.prototype.updateRequierdDocument = function (id, data) {
        return this.http.post("registration-status/document/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RegisterationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterationService);
    return RegisterationService;
}());



/***/ }),

/***/ "./src/app/settings/registeration-status/registeration-status.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/settings/registeration-status/registeration-status.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click)=\"create()\">\r\n      اضافة حالة تقديم\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"requiredDocumentModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">{{ \"assign required document\" }}</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n          <div class=\"box-body\">\r\n             <ul class=\"w3-ul\">\r\n              <li *ngFor=\"let item of requiredDocuments\" >\r\n                <div class=\"media\">\r\n                  <div class=\"media-left\">\r\n                    <mat-slide-toggle\r\n                      [checked]=\"requiredDocumentId.has(item.id)\"\r\n                      (change)=\"toggleRequiredDocument(item.id)\" ></mat-slide-toggle>\r\n                  </div>\r\n                  <div class=\"media-body\">\r\n                    <h4 class=\"media-heading\">{{ item.name }}</h4>\r\n                    <p>\r\n                      {{ item.notes }}\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n             </ul>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"requiredDocumentSubmitted\" (click)=\"updateRequiredDocument()\" type=\"submit\" class=\"btn btn-primary\">\r\n              <i *ngIf=\"!requiredDocumentSubmitted\" >{{ \"add\" | trans }}</i>\r\n              <i *ngIf=\"requiredDocumentSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n            </button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">{{ \"cancel\" | trans }}</button>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"addModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة حالة تقديم</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }} *</label>\r\n              <input  type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" [(ngModel)]=\"addItem.name\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea  type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" [(ngModel)]=\"addItem.notes\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"storeSubmitted\" (click)=\"store()\" class=\"btn btn-primary\">\r\n              <i *ngIf=\"!storeSubmitted\" >{{ \"add\" | trans }}</i>\r\n              <i *ngIf=\"storeSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n            </button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">{{ \"cancel\" | trans }}</button>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"editModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل حالة تقديم</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }} *</label>\r\n              <input  type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" [(ngModel)]=\"editItem.name\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea  type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" [(ngModel)]=\"editItem.notes\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"updateSubmitted\" (click)=\"update()\" type=\"submit\" class=\"btn btn-primary\">\r\n              <i *ngIf=\"!updateSubmitted\" >{{ \"add\" | trans }}</i>\r\n              <i *ngIf=\"updateSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n            </button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">{{ \"cancel\" | trans }}</button>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"\">\r\n  <!--\r\n  <input type=\"text\" class=\"w3-input w3-block\" #input (keyup)=\"search(input.value, table)\" placeholder=\"{{ 'search' | trans }}\" >\r\n  -->\r\n  <table  class=\"table table-bordered w3-card w3-padding w3-white\" #table >\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>الاسم</th>\r\n        <th>الاوراق المطلوبة</th>\r\n        <th>ملاحظات</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let row of rows index as i\">\r\n        <td>{{ i + 1 }}</td>\r\n        <td>{{ row.name }}</td>\r\n        <td>\r\n          <ul>\r\n            <li *ngFor=\"let row of row.required_document_names\">{{ row }}</li>\r\n          </ul>\r\n        </td>\r\n        <td>{{ row.notes }}</td>\r\n        <td>\r\n          <i class=\"fa fa-edit btn w3-text-orange\" (click)=\"edit(row)\"  ></i>\r\n\r\n          <i class=\"fa fa-newspaper-o btn w3-text-green\" title=\"{{'assign required documents' | trans}}\" (click)=\"displayRequiredDocument(row)\" ></i>\r\n\r\n          <i class=\"fa fa-trash btn w2-text-red\" *ngIf=\"row.can_delete\"  (click)=\"destroy(row.id)\"></i>\r\n\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/registeration-status/registeration-status.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/settings/registeration-status/registeration-status.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3JlZ2lzdGVyYXRpb24tc3RhdHVzL3JlZ2lzdGVyYXRpb24tc3RhdHVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/registeration-status/registeration-status.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/settings/registeration-status/registeration-status.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RegisterationStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationStatusComponent", function() { return RegisterationStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Registeration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Registeration.service */ "./src/app/settings/registeration-status/Registeration.service.ts");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_adminision_services_required_document_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/adminision/services/required-document.service */ "./src/app/adminision/services/required-document.service.ts");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");









var RegisterationStatusComponent = /** @class */ (function () {
    function RegisterationStatusComponent(toastr, service, requiredDocumentService) {
        this.toastr = toastr;
        this.service = service;
        this.requiredDocumentService = requiredDocumentService;
        this.doc = src_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"].doc;
        this.addItem = {};
        this.editItem = {};
        this.requiredDocumentItem = {};
        this.storeSubmitted = false;
        this.updateSubmitted = false;
        this.requiredDocumentSubmitted = false;
        this.rows = [];
        this.requiredDocuments = [];
        this.requiredDocumentId = new angular_hashtable__WEBPACK_IMPORTED_MODULE_8__["HashTable"]();
    }
    RegisterationStatusComponent.prototype.ngOnInit = function () {
        this.get();
        this.loadRequiredDocument();
    };
    /**
     * show add modal
     * @param item {}
     */
    RegisterationStatusComponent.prototype.create = function () {
        this.doc.jquery('#addModal').modal('show');
    };
    /**
     * show edit modal
     * @param item {}
     */
    RegisterationStatusComponent.prototype.edit = function (item) {
        this.editItem = item;
        this.doc.jquery('#editModal').modal('show');
    };
    /**
     * get all resources from api
     *
     */
    RegisterationStatusComponent.prototype.get = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res;
        });
    };
    /**
     * validate on name
     */
    RegisterationStatusComponent.prototype.validate = function (data) {
        return (!data.name) ? false : true;
    };
    /**
     * add new resource
     *
     */
    RegisterationStatusComponent.prototype.store = function () {
        var _this = this;
        if (!this.validate(this.addItem))
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('fill all data'));
        this.storeSubmitted = true;
        this.service.create(this.addItem).subscribe(function (r) {
            if (r.status == 1) {
                _this.get();
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(r.message);
                _this.reset();
            }
            else
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(r.message);
            _this.storeSubmitted = false;
        });
    };
    /**
     * update exiting resource
     */
    RegisterationStatusComponent.prototype.update = function () {
        var _this = this;
        if (!this.validate(this.editItem))
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('fill all data'));
        this.updateSubmitted = true;
        this.service.update(this.editItem).subscribe(function (r) {
            if (r.status == 1) {
                _this.get();
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(r.message);
            }
            else
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(r.message);
            _this.updateSubmitted = false;
        });
    };
    /**
     * remove a resource
     *
     */
    RegisterationStatusComponent.prototype.destroy = function (id) {
        var _this = this;
        this.doc.swal.confirm(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('are you sure'), function () {
            _this.service.delete(id).subscribe(function (r) {
                if (r.status == 1) {
                    _this.get();
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(r.message);
                }
                else
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(r.message);
            });
        });
    };
    /**
     * clear all data of create
     *
     */
    RegisterationStatusComponent.prototype.reset = function () {
        this.addItem = {};
    };
    RegisterationStatusComponent.prototype.search = function (value, table) {
        this.doc.search(value, table);
    };
    /**
     * display required document of resource
     *
     */
    RegisterationStatusComponent.prototype.displayRequiredDocument = function (item) {
        var _this = this;
        this.requiredDocumentItem = item;
        this.requiredDocumentId = new angular_hashtable__WEBPACK_IMPORTED_MODULE_8__["HashTable"]();
        item.required_documents.forEach(function (element) {
            _this.requiredDocumentId.put(element.id, element.id);
        });
        //
        this.doc.jquery('#requiredDocumentModal').modal('show');
    };
    /**
     * load all required document data
     */
    RegisterationStatusComponent.prototype.loadRequiredDocument = function () {
        var _this = this;
        this.requiredDocumentService.get().subscribe(function (res) {
            _this.requiredDocuments = res;
        });
    };
    /**
     * add or remove required document id
     */
    RegisterationStatusComponent.prototype.toggleRequiredDocument = function (id) {
        if (this.requiredDocumentId.has(id))
            this.requiredDocumentId.remove(id);
        else
            this.requiredDocumentId.put(id, id);
    };
    /**
     * update required document of item
     */
    RegisterationStatusComponent.prototype.updateRequiredDocument = function () {
        var _this = this;
        this.requiredDocumentSubmitted = true;
        var data = {
            "required_documents": this.requiredDocumentId.getKeys()
        };
        this.service.updateRequierdDocument(this.requiredDocumentItem.id, data).subscribe(function (r) {
            if (r.status == 1) {
                _this.get();
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(r.message);
            }
            else
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(r.message);
            _this.requiredDocumentSubmitted = false;
        });
    };
    RegisterationStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-registeration-status",
            template: __webpack_require__(/*! ./registeration-status.component.html */ "./src/app/settings/registeration-status/registeration-status.component.html"),
            styles: [__webpack_require__(/*! ./registeration-status.component.scss */ "./src/app/settings/registeration-status/registeration-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _Registeration_service__WEBPACK_IMPORTED_MODULE_3__["RegisterationService"],
            src_app_adminision_services_required_document_service__WEBPACK_IMPORTED_MODULE_7__["RequiredDocumentService"]])
    ], RegisterationStatusComponent);
    return RegisterationStatusComponent;
}());



/***/ }),

/***/ "./src/app/settings/services/setting.service.ts":
/*!******************************************************!*\
  !*** ./src/app/settings/services/setting.service.ts ***!
  \******************************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");




var SettingService = /** @class */ (function () {
    function SettingService(http) {
        this.http = http;
        this.baseUrl = "";
        this.get();
    }
    /**
     * get services from api
     *
     */
    SettingService.prototype.get = function () {
        return this.http.get(this.baseUrl + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    SettingService.prototype.store = function (data) {
        return this.http.post(this.baseUrl + '/store' + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    SettingService.prototype.update = function (data) {
        return this.http.post(this.baseUrl + '/update/' + data.id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    SettingService.prototype.destroy = function (id) {
        return this.http.post(this.baseUrl + '/delete/' + id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    SettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "./src/app/settings/setting-template.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/setting-template.ts ***!
  \**********************************************/
/*! exports provided: SettingTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTemplate", function() { return SettingTemplate; });
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/message */ "./src/app/shared/message.ts");


var SettingTemplate = /** @class */ (function () {
    function SettingTemplate(settingService) {
        this.settingService = settingService;
        this.item = {};
        this.isSubmitted = false;
        this.data = [];
        this.requiredFields = [];
        this.baseUrl = null;
        this.settingService.baseUrl = this.baseUrl;
    }
    SettingTemplate.prototype.action = function (res) {
    };
    SettingTemplate.prototype.get = function () {
        var _this = this;
        this.settingService.baseUrl = this.baseUrl;
        this.settingService.get().subscribe(function (res) {
            _this.data = res;
        });
    };
    SettingTemplate.prototype.add = function () {
        var item = {};
        this.data.push(item);
    };
    SettingTemplate.prototype.validate = function (item) {
        if (item === void 0) { item = this.item; }
        var valid = true;
        this.requiredFields.forEach(function (element) {
            if (!item[element])
                valid = false;
        });
        return valid;
    };
    SettingTemplate.prototype.send = function (item, index) {
        if (item === void 0) { item = this.item; }
        if (index === void 0) { index = null; }
        this.settingService.baseUrl = this.baseUrl;
        if (item.id)
            this.update(item, index = null);
        else
            this.store(item, index = null);
    };
    SettingTemplate.prototype.store = function (item, index) {
        var _this = this;
        if (item === void 0) { item = this.item; }
        if (index === void 0) { index = null; }
        if (!this.validate(item))
            return _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('fill all data'));
        this.isSubmitted = true;
        this.settingService.store(item).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(res.message);
                //
                if (index)
                    _this.data[index] = res.data;
                var arr = _this.data;
                _this.data = [];
                _this.data = arr;
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(res.message);
            _this.action(res);
            _this.isSubmitted = false;
        });
    };
    SettingTemplate.prototype.update = function (item, index) {
        var _this = this;
        if (item === void 0) { item = this.item; }
        if (index === void 0) { index = null; }
        if (!this.validate(item))
            return _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('fill all data'));
        this.isSubmitted = true;
        this.settingService.update(item).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(res.message);
                //
                if (index)
                    _this.data[index] = res.data;
                var arr = _this.data;
                _this.data = [];
                _this.data = arr;
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(res.message);
            _this.action(res);
            _this.isSubmitted = false;
        });
    };
    SettingTemplate.prototype.destroy = function (item, index) {
        var _this = this;
        this.settingService.baseUrl = this.baseUrl;
        var self = this;
        _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('are you sure'), function () {
            if (item.id) {
                _this.isSubmitted = true;
                _this.settingService.destroy(item.id).subscribe(function (res) {
                    if (res.status == 1)
                        _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(res.message);
                    else
                        _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(res.message);
                    _this.action(res);
                    _this.isSubmitted = false;
                });
            }
            // remove item from array
            _this.data.splice(index, index + 1);
            var arr = _this.data;
            _this.data = [];
            _this.data = arr;
        });
    };
    return SettingTemplate;
}());



/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _translation_translation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translation/translation.component */ "./src/app/settings/translation/translation.component.ts");
/* harmony import */ var _registeration_status_registeration_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registeration-status/registeration-status.component */ "./src/app/settings/registeration-status/registeration-status.component.ts");
/* harmony import */ var _components_country_country_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/country/country.component */ "./src/app/settings/components/country/country.component.ts");
/* harmony import */ var _components_academic_year_academic_year_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/academic-year/academic-year.component */ "./src/app/settings/components/academic-year/academic-year.component.ts");
/* harmony import */ var _components_division_division_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/division/division.component */ "./src/app/settings/components/division/division.component.ts");
/* harmony import */ var _components_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/qualification/qualification.component */ "./src/app/settings/components/qualification/qualification.component.ts");
/* harmony import */ var _components_registration_method_registration_method_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/registration-method/registration-method.component */ "./src/app/settings/components/registration-method/registration-method.component.ts");
/* harmony import */ var _components_case_constraint_case_constraint_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/case-constraint/case-constraint.component */ "./src/app/settings/components/case-constraint/case-constraint.component.ts");
/* harmony import */ var _components_language_language_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/language/language.component */ "./src/app/settings/components/language/language.component.ts");
/* harmony import */ var _components_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/nationality/nationality.component */ "./src/app/settings/components/nationality/nationality.component.ts");
/* harmony import */ var _components_parent_job_parent_job_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/parent-job/parent-job.component */ "./src/app/settings/components/parent-job/parent-job.component.ts");
/* harmony import */ var _components_relation_relation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/relation/relation.component */ "./src/app/settings/components/relation/relation.component.ts");
/* harmony import */ var _components_student_code_series_student_code_series_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/student-code-series/student-code-series.component */ "./src/app/settings/components/student-code-series/student-code-series.component.ts");

















var routes = [
    {
        // RegisterationMethodsModule
        path: "",
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
        children: [
            {
                path: "country",
                component: _components_country_country_component__WEBPACK_IMPORTED_MODULE_6__["CountryComponent"]
            },
            {
                path: "academic-year",
                component: _components_academic_year_academic_year_component__WEBPACK_IMPORTED_MODULE_7__["AcademicYearComponent"]
            },
            {
                path: "division",
                component: _components_division_division_component__WEBPACK_IMPORTED_MODULE_8__["DivisionComponent"]
            },
            {
                path: "qualification",
                component: _components_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_9__["QualificationComponent"]
            },
            {
                path: "registration-method",
                component: _components_registration_method_registration_method_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationMethodComponent"]
            },
            {
                path: "case-constraint",
                component: _components_case_constraint_case_constraint_component__WEBPACK_IMPORTED_MODULE_11__["CaseConstraintComponent"]
            },
            {
                path: "language",
                component: _components_language_language_component__WEBPACK_IMPORTED_MODULE_12__["LanguageComponent"]
            },
            {
                path: "nationality",
                component: _components_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_13__["NationalityComponent"]
            },
            {
                path: "parent-job",
                component: _components_parent_job_parent_job_component__WEBPACK_IMPORTED_MODULE_14__["ParentJobComponent"]
            },
            {
                path: "relation",
                component: _components_relation_relation_component__WEBPACK_IMPORTED_MODULE_15__["RelationComponent"]
            },
            {
                path: "student-code-series",
                component: _components_student_code_series_student_code_series_component__WEBPACK_IMPORTED_MODULE_16__["StudentCodeSeriesComponent"]
            },
            {
                path: "registration-status",
                component: _registeration_status_registeration_status_component__WEBPACK_IMPORTED_MODULE_5__["RegisterationStatusComponent"]
            },
            {
                path: "translations",
                component: _translation_translation_component__WEBPACK_IMPORTED_MODULE_4__["TranslationComponent"]
            },
        ]
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--    <aside class=\"main-sidebar\">-->\r\n<!--      &lt;!&ndash; sidebar: style can be found in sidebar.less &ndash;&gt;-->\r\n<!--      <section class=\"sidebar\">-->\r\n<!--        &lt;!&ndash; Sidebar user panel &ndash;&gt;-->\r\n<!--        <div class=\"user-panel\">-->\r\n<!--          <div class=\"pull-left image\">-->\r\n<!--            <img src=\"../../dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">-->\r\n<!--          </div>-->\r\n<!--          <div class=\"pull-left info\">-->\r\n<!--            <p>Alexander Pierce</p>-->\r\n<!--            <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>-->\r\n<!--          </div>-->\r\n<!--        </div>-->\r\n\r\n<!--        &lt;!&ndash; sidebar menu: : style can be found in sidebar.less &ndash;&gt;-->\r\n<!--        <ul class=\"sidebar-menu tree\" data-widget=\"tree\">-->\r\n<!--          <li class=\"header\">الاعدادات الرئيسية</li>-->\r\n<!--          <li><a routerLink=\"/settings/country\"><i class=\"fa fa-circle-o\"></i> الدول </a></li>-->\r\n<!--          <li><a routerLink=\"/settings/city\"><i class=\"fa fa-circle-o\"></i> المدن </a></li>-->\r\n<!--        </ul>-->\r\n<!--      </section>-->\r\n<!--      &lt;!&ndash; /.sidebar &ndash;&gt;-->\r\n<!--    </aside>-->\r\n<div class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n\r\n      <!-- Profile Image -->\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-body box-profile\">\r\n          <h3 class=\"profile-username text-center\">الاعدادات الرئيسية</h3>\r\n          <ul class=\"list-group list-group-unbordered\">\r\n\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/country\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"coutries & governments & cities\" | trans  }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/division\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"divisions & departments & levels\" | trans  }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/qualification\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"qualifications\" | trans  }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/academic-year\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"academic_years\" | trans }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/registration-method\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"registration_methods\" | trans }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/case-constraint\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"case_constraints\" | trans }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/language\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"languages\" | trans }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/nationality\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"nationalities\" | trans }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/parent-job\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"parent jobs\" | trans }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/relation\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"relations\" | trans }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/student-code-series\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"student code series\" | trans }}\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/translations\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"translations\" | trans }}\r\n              </a>\r\n            </li>\r\n\r\n            <!--\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/academic-year\"><i class=\"fa fa-circle-o\"></i>\r\n                الاعوام الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/levels\"><i class=\"fa fa-circle-o\"></i>\r\n                 المستويات الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/qualifications\"><i class=\"fa fa-circle-o\"></i>\r\n                المؤهلات الدراسية\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/qualification-types\"><i class=\"fa fa-circle-o\"></i>\r\n                انواع المؤهلات الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/divisions\"><i class=\"fa fa-circle-o\"></i>\r\n                  الشعب الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/departments\"><i class=\"fa fa-circle-o\"></i>\r\n                  الاقسام الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/registration-methods\"><i class=\"fa fa-circle-o\"></i>\r\n                وسائل التعارف\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/required-documents\"><i class=\"fa fa-circle-o\"></i>\r\n                 الاوراق المطلوبة\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/registration-status\"><i class=\"fa fa-circle-o\"></i>\r\n                 حالات التقديم\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/case-constraints\"><i class=\"fa fa-circle-o\"></i>\r\n                حالات القيد\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/constraint-status\"><i class=\"fa fa-circle-o\"></i>\r\n              مواقف القيد\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/languages\"><i class=\"fa fa-circle-o\"></i>\r\n              اللغات\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/translations\"><i class=\"fa fa-circle-o\"></i>\r\n                الترجمة\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/parent-jobs\"><i class=\"fa fa-circle-o\"></i>\r\n                وظائف اولياء الامور\r\n              </a>\r\n            </li>\r\n            -->\r\n          </ul>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n\r\n\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 5px; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto; }\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto; }\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important; }\n\n.number_input {\n  width: 45px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRTpcXHByb2plY3RcXHNhbXNhRnJvbnRFbmQvc3JjXFxhcHBcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUNGLEVBQUE7O0FBRUE7RUFDRSx5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSx3Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1Q0FBc0M7RUFDdEMsOEJBQTZCLEVBQUE7O0FBSS9CO0VBQ0UsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLGtDQUFpQztFQUNqQyw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsdURBQW1ELEVBQUE7O0FBR3JEO0VBQ0UseUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsaUNBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsZ0JBQ0YsRUFBQTs7QUFFQTtFQUNFLHlCQUF3QixFQUFBOztBQUUxQjs7Q0NYQzs7QURlRDtFQUNFLHVCQUFzQixFQUFBOztBQUd4QjtFQUNFLHdCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usd0JBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSx1QkFBc0I7RUFDdEIsMEJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsV0FDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FmZS1ib3gge1xyXG4gIHBhZGRpbmc6IDEwcHhcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbS1yZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1kYXNoZWQge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDZweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFuZWwge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICByaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAtMTNweCFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNtYWxsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTIwcHhcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXHJcblxyXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXItdG9wIHtcclxuICBoZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZpbHRlci1zaWRlIHtcclxuICBoZWlnaHQ6IDQwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi53My11bCBsaSB7XHJcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtYmVyX2lucHV0IHtcclxuICB3aWR0aDogNDVweFxyXG59XHJcbiIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ib3R0b20tcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogNXB4OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4qL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmZpbHRlci10b3Age1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5maWx0ZXItc2lkZSB7XG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLnczLXVsIGxpIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50OyB9XG5cbi5udW1iZXJfaW5wdXQge1xuICB3aWR0aDogNDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _translation_translation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translation/translation.component */ "./src/app/settings/translation/translation.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _registeration_status_registeration_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registeration-status/registeration-status.component */ "./src/app/settings/registeration-status/registeration-status.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_country_country_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/country/country.component */ "./src/app/settings/components/country/country.component.ts");
/* harmony import */ var _components_academic_year_academic_year_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/academic-year/academic-year.component */ "./src/app/settings/components/academic-year/academic-year.component.ts");
/* harmony import */ var _components_division_division_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/division/division.component */ "./src/app/settings/components/division/division.component.ts");
/* harmony import */ var _components_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/qualification/qualification.component */ "./src/app/settings/components/qualification/qualification.component.ts");
/* harmony import */ var _components_registration_method_registration_method_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/registration-method/registration-method.component */ "./src/app/settings/components/registration-method/registration-method.component.ts");
/* harmony import */ var _components_case_constraint_case_constraint_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/case-constraint/case-constraint.component */ "./src/app/settings/components/case-constraint/case-constraint.component.ts");
/* harmony import */ var _components_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/nationality/nationality.component */ "./src/app/settings/components/nationality/nationality.component.ts");
/* harmony import */ var _components_language_language_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/language/language.component */ "./src/app/settings/components/language/language.component.ts");
/* harmony import */ var _components_parent_job_parent_job_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/parent-job/parent-job.component */ "./src/app/settings/components/parent-job/parent-job.component.ts");
/* harmony import */ var _components_relation_relation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/relation/relation.component */ "./src/app/settings/components/relation/relation.component.ts");
/* harmony import */ var _components_student_code_series_student_code_series_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/student-code-series/student-code-series.component */ "./src/app/settings/components/student-code-series/student-code-series.component.ts");





















var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
                _translation_translation_component__WEBPACK_IMPORTED_MODULE_6__["TranslationComponent"],
                _registeration_status_registeration_status_component__WEBPACK_IMPORTED_MODULE_8__["RegisterationStatusComponent"],
                _components_country_country_component__WEBPACK_IMPORTED_MODULE_10__["CountryComponent"],
                _components_academic_year_academic_year_component__WEBPACK_IMPORTED_MODULE_11__["AcademicYearComponent"],
                _components_division_division_component__WEBPACK_IMPORTED_MODULE_12__["DivisionComponent"],
                _components_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_13__["QualificationComponent"],
                _components_registration_method_registration_method_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationMethodComponent"],
                _components_case_constraint_case_constraint_component__WEBPACK_IMPORTED_MODULE_15__["CaseConstraintComponent"],
                _components_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_16__["NationalityComponent"],
                _components_language_language_component__WEBPACK_IMPORTED_MODULE_17__["LanguageComponent"],
                _components_parent_job_parent_job_component__WEBPACK_IMPORTED_MODULE_18__["ParentJobComponent"],
                _components_relation_relation_component__WEBPACK_IMPORTED_MODULE_19__["RelationComponent"],
                _components_student_code_series_student_code_series_component__WEBPACK_IMPORTED_MODULE_20__["StudentCodeSeriesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"]
            ],
            exports: [_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]],
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/settings/translation/translation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/settings/translation/translation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"w3-block\">\r\n  <div class=\"w3-white material-shadow safe-box\">\r\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\r\n      {{ \"translations\" | trans }}\r\n    </div>\r\n    <div class=\"border-bottom-dashed\"></div>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-12  col-md-12 col-sm-12\">\r\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center  \"\r\n          style=\"height: 400px;\" >\r\n          <table class=\"text-center\" id=\"tableTrans\" style=\"width: 100%;\"  >\r\n            <thead>\r\n              <tr class=\"w3-border-bottom\" >\r\n                <th>#</th>\r\n                <th>{{ \"key\" | trans }}</th>\r\n                <th>{{ \"name_en\" | trans }}</th>\r\n                <th>{{ \"name_ar\" | trans }}</th>\r\n              </tr>\r\n            </thead>\r\n\r\n            <tbody>\r\n              <tr *ngFor=\"let item of response.data index as i\" >\r\n                <td>{{ i + 1 }}</td>\r\n                <td>\r\n                  <input type=\"text\" class=\"form-control input-sm\"\r\n                  readonly\r\n                  [(ngModel)]=\"item.key\" >\r\n                  <span class=\"hidden\">{{ item.key }}</span>\r\n                </td>\r\n                <td   >\r\n                  <input\r\n                  type=\"text\"\r\n                  (change)=\"item.changed = 1\"\r\n                  class=\" form-control input-sm\"\r\n                  [(ngModel)]=\"item.name_en\" >\r\n                  <span class=\"hidden\">{{ item.name_en }}</span>\r\n                </td>\r\n                <td >\r\n                  <input\r\n                  type=\"text\"\r\n                  (change)=\"item.changed = 1\"\r\n                  class=\" form-control input-sm\"\r\n                  [(ngModel)]=\"item.name_ar\" >\r\n                  <span class=\"hidden\">{{ item.name_ar }}</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-12  col-md-12 col-sm-12\">\r\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center  \"   >\r\n\r\n            <div class=\"text-center w3-center\">\r\n              <nav aria-label=\"Page navigation\">\r\n                <ul class=\"pagination\">\r\n                  <li>\r\n                    <a class=\"btn\" [ngClass]=\"{'disabled': !response.prev_page}\" (click)=\"loadPage(response.prev_page)\"\r\n                      aria-label=\"Previous\">\r\n                      <span aria-hidden=\"true\">&laquo;</span>\r\n                    </a>\r\n                  </li>\r\n                  <li *ngFor=\"let item of response.pages_arr\">\r\n                    <a class=\"btn\" [ngClass]=\"{'active w3-indigo': response.current_page == item}\"\r\n                      (click)=\"loadPage(item)\">{{ item }}</a>\r\n                  </li>\r\n                  <li>\r\n                    <a class=\"btn\" [ngClass]=\"{'disabled': !response.next_page}\" (click)=\"loadPage(response.next_page)\"\r\n                      aria-label=\"Next\">\r\n                      <span aria-hidden=\"true\">&raquo;</span>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n            <button class=\"btn btn-primary\" [disabled]=\"isUpdate\" (click)=\"updateTranslation()\" >{{ \"save changes\" | trans }}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/translation/translation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/settings/translation/translation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/translation/translation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/settings/translation/translation.component.ts ***!
  \***************************************************************/
/*! exports provided: TranslationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationComponent", function() { return TranslationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _shared_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/translation */ "./src/app/shared/translation.ts");
/* harmony import */ var _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/translation.service */ "./src/app/shared/services/translation.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/message */ "./src/app/shared/message.ts");






var TranslationComponent = /** @class */ (function () {
    function TranslationComponent(translationService) {
        this.translationService = translationService;
        this.$ = $;
        this.datatable = null;
        this.isUpdate = false;
        this.response = {};
        this.currentPage = 1;
    }
    TranslationComponent.prototype.ngOnInit = function () {
        this.submitNotExistTranslation();
        this.loadTranslations();
    };
    /**
     * load translations and update the cache
     */
    TranslationComponent.prototype.loadTranslations = function () {
        var _this = this;
        var data = {
            page: this.currentPage
        };
        this.translationService.getList(data).subscribe(function (r) {
            _this.response = r;
            _this.prePagniation();
        });
    };
    /**
     * load translations and update the cache
     */
    TranslationComponent.prototype.loadِAppTranslations = function (keys) {
        if (keys === void 0) { keys = null; }
        //Translation.TRANSLATION_DATA = null;
        this.translationService.get().subscribe(function (r) {
            // Cache.remove(Translation.TRANSLATION_CACHE_KEY);
            // Cache.set(Translation.TRANSLATION_CACHE_KEY, r);
            _shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].TRANSLATION_DATA = r;
        });
    };
    /**
     * update keys not exists
     */
    TranslationComponent.prototype.submitNotExistTranslation = function () {
        var _this = this;
        if (!_shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].getNewKeys())
            return;
        var data = {
            data: _shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].getNewKeys(),
            not_exist: 1
        };
        this.translationService.update(data).subscribe(function (r) {
            _this.loadTranslations();
            //
            _shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].remove(_shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].TRANSLATION_CACHE_NOT_EXISTS_KEY);
        });
    };
    /**
     * update new words
     */
    TranslationComponent.prototype.updateTranslation = function () {
        var _this = this;
        var changedWord = [];
        this.response.data.forEach(function (element) {
            if (element.changed == 1) {
                element.value = null;
                changedWord.push(element);
            }
        });
        var data = {
            data: changedWord
        };
        this.isUpdate = true;
        this.translationService.update(data).subscribe(function (r) {
            var data = r;
            if (data.status == 1)
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(data.message);
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(data.message);
            _this.isUpdate = false;
            //this.loadTranslations();
            _this.loadِAppTranslations(changedWord);
        });
    };
    TranslationComponent.prototype.loadPage = function (page) {
        this.currentPage = page;
        this.loadTranslations();
    };
    TranslationComponent.prototype.prePagniation = function () {
        if (!this.response.data)
            return;
        this.response.prev_page = this.response.prev_page_url ? this.response.prev_page_url.replace(this.response.path + '?page=', '') : null;
        this.response.next_page = this.response.next_page_url ? this.response.next_page_url.replace(this.response.path + '?page=', '') : null;
        this.response.pages = Math.ceil(this.response.total / this.response.per_page);
        this.response.pages_arr = [];
        for (var i = 0; i < this.response.pages; i++)
            this.response.pages_arr.push(i + 1);
    };
    TranslationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-translation',
            template: __webpack_require__(/*! ./translation.component.html */ "./src/app/settings/translation/translation.component.html"),
            styles: [__webpack_require__(/*! ./translation.component.scss */ "./src/app/settings/translation/translation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]])
    ], TranslationComponent);
    return TranslationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map