(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["military-military-module"],{

/***/ "./src/app/military/military-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/military/military-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MilitaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryRoutingModule", function() { return MilitaryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _military_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./military.component */ "./src/app/military/military.component.ts");




var routes = [
    {
        path: "",
        component: _military_component__WEBPACK_IMPORTED_MODULE_3__["MilitaryComponent"],
        children: [
            {
                path: 'area',
                loadChildren: './area/area.module#AreaModule'
            }
        ]
    }
];
var MilitaryRoutingModule = /** @class */ (function () {
    function MilitaryRoutingModule() {
    }
    MilitaryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MilitaryRoutingModule);
    return MilitaryRoutingModule;
}());



/***/ }),

/***/ "./src/app/military/military.component.html":
/*!**************************************************!*\
  !*** ./src/app/military/military.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n\r\n      <!-- Profile Image -->\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-body box-profile\">\r\n          <h3 class=\"profile-username text-center\">الاعدادات الرئيسية</h3>\r\n          <ul class=\"list-group list-group-unbordered\">\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/military/area\"><i class=\"fa fa-circle-o\"></i>\r\n                مناطق التجنيد\r\n              </a>\r\n            </li>\r\n            \r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/military/military.component.scss":
/*!**************************************************!*\
  !*** ./src/app/military/military.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbGl0YXJ5L21pbGl0YXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/military/military.component.ts":
/*!************************************************!*\
  !*** ./src/app/military/military.component.ts ***!
  \************************************************/
/*! exports provided: MilitaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryComponent", function() { return MilitaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MilitaryComponent = /** @class */ (function () {
    function MilitaryComponent() {
    }
    MilitaryComponent.prototype.ngOnInit = function () {
    };
    MilitaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-military',
            template: __webpack_require__(/*! ./military.component.html */ "./src/app/military/military.component.html"),
            styles: [__webpack_require__(/*! ./military.component.scss */ "./src/app/military/military.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MilitaryComponent);
    return MilitaryComponent;
}());



/***/ }),

/***/ "./src/app/military/military.module.ts":
/*!*********************************************!*\
  !*** ./src/app/military/military.module.ts ***!
  \*********************************************/
/*! exports provided: MilitaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryModule", function() { return MilitaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _military_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./military-routing.module */ "./src/app/military/military-routing.module.ts");
/* harmony import */ var _military_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./military.component */ "./src/app/military/military.component.ts");







var MilitaryModule = /** @class */ (function () {
    function MilitaryModule() {
    }
    MilitaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_military_component__WEBPACK_IMPORTED_MODULE_6__["MilitaryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _military_routing_module__WEBPACK_IMPORTED_MODULE_5__["MilitaryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"]
            ]
        })
    ], MilitaryModule);
    return MilitaryModule;
}());



/***/ })

}]);
//# sourceMappingURL=military-military-module.js.map