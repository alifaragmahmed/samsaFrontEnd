(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/general.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/general.service.ts ***!
  \****************************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GeneralService = /** @class */ (function () {
    function GeneralService(http) {
        this.http = http;
    }
    GeneralService.prototype.getAllCountries = function () {
        return this.http.get('countries?api_token=123456789');
    };
    GeneralService.prototype.getAllCities = function () {
        return this.http.get('cities?api_token=123456789');
    };
    GeneralService.prototype.getAllGovernments = function () {
        return this.http.get('governments?api_token=123456789');
    };
    GeneralService.prototype.getCountryGovernments = function (id) {
        return this.http.get("government/" + id + "?api_token=123456789");
    };
    GeneralService.prototype.getAllLevels = function () {
        return this.http.get('levels?api_token=123456789');
    };
    GeneralService.prototype.getAllAcademicYears = function () {
        return this.http.get('academic-years?api_token=123456789');
    };
    GeneralService.prototype.getAllUsers = function (query) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', query.page)
            .set('size', query.size)
            .set('email', query.email || '')
            .set('userName', query.userName || '');
        return this.http.get('adminUsers/users', { params: params });
    };
    GeneralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map