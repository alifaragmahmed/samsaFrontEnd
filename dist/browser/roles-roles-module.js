(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-roles-module"],{

/***/ "./src/app/settings/roles/list/list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/settings/roles/list/list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/settings/roles/list/list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/settings/roles/list/list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3JvbGVzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/roles/list/list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/settings/roles/list/list.component.ts ***!
  \*******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/roles.service */ "./src/app/settings/roles/services/roles.service.ts");



var ListComponent = /** @class */ (function () {
    function ListComponent(service) {
        this.service = service;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.service.getItemById('1').subscribe(function (res) {
            console.log(res);
        });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/settings/roles/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/settings/roles/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/settings/roles/roles-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/settings/roles/roles-routing.module.ts ***!
  \********************************************************/
/*! exports provided: RolesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesRoutingModule", function() { return RolesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/roles/list/list.component.ts");




var routes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
var RolesRoutingModule = /** @class */ (function () {
    function RolesRoutingModule() {
    }
    RolesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RolesRoutingModule);
    return RolesRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/roles/roles.module.ts":
/*!************************************************!*\
  !*** ./src/app/settings/roles/roles.module.ts ***!
  \************************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _roles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles-routing.module */ "./src/app/settings/roles/roles-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/roles/list/list.component.ts");





var RolesModule = /** @class */ (function () {
    function RolesModule() {
    }
    RolesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _roles_routing_module__WEBPACK_IMPORTED_MODULE_3__["RolesRoutingModule"]
            ]
        })
    ], RolesModule);
    return RolesModule;
}());



/***/ }),

/***/ "./src/app/settings/roles/services/roles.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings/roles/services/roles.service.ts ***!
  \**********************************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");




var RolesService = /** @class */ (function () {
    function RolesService(http) {
        this.http = http;
    }
    RolesService.prototype.getAll = function () {
        return this.http.get("roles?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RolesService.prototype.getItemById = function (id) {
        return this.http.get("roles/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RolesService.prototype.update = function (id, data) {
        return this.http.put("roles/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RolesService.prototype.create = function (data) {
        return this.http.post("roles?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RolesService.prototype.delete = function (id) {
        return this.http.delete("roles/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RolesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RolesService);
    return RolesService;
}());



/***/ })

}]);
//# sourceMappingURL=roles-roles-module.js.map