(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

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




var routes = [
    {
        path: "",
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
        children: [
            {
                path: 'city',
                loadChildren: './city/city.module#CityModule'
            },
            {
                path: "country",
                loadChildren: './country/country.module#CountryModule'
            },
            {
                path: "government",
                loadChildren: './government/government.module#GovernmentModule'
            },
            {
                path: "academic-year",
                loadChildren: './academic-year/academic-year.module#AcademicYearModule'
            },
            {
                path: "qualifications",
                loadChildren: './qualification/qualification.module#QualificationModule'
            },
            {
                path: "qualification-types",
                loadChildren: './qualification-types/qualification-types.module#QualificationTypesModule'
            }
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

module.exports = "<!--    <aside class=\"main-sidebar\">-->\r\n<!--      &lt;!&ndash; sidebar: style can be found in sidebar.less &ndash;&gt;-->\r\n<!--      <section class=\"sidebar\">-->\r\n<!--        &lt;!&ndash; Sidebar user panel &ndash;&gt;-->\r\n<!--        <div class=\"user-panel\">-->\r\n<!--          <div class=\"pull-left image\">-->\r\n<!--            <img src=\"../../dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">-->\r\n<!--          </div>-->\r\n<!--          <div class=\"pull-left info\">-->\r\n<!--            <p>Alexander Pierce</p>-->\r\n<!--            <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>-->\r\n<!--          </div>-->\r\n<!--        </div>-->\r\n\r\n<!--        &lt;!&ndash; sidebar menu: : style can be found in sidebar.less &ndash;&gt;-->\r\n<!--        <ul class=\"sidebar-menu tree\" data-widget=\"tree\">-->\r\n<!--          <li class=\"header\">الاعدادات الرئيسية</li>-->\r\n<!--          <li><a routerLink=\"/settings/country\"><i class=\"fa fa-circle-o\"></i> الدول </a></li>-->\r\n<!--          <li><a routerLink=\"/settings/city\"><i class=\"fa fa-circle-o\"></i> المدن </a></li>-->\r\n<!--        </ul>-->\r\n<!--      </section>-->\r\n<!--      &lt;!&ndash; /.sidebar &ndash;&gt;-->\r\n<!--    </aside>-->\r\n<div class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n\r\n      <!-- Profile Image -->\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-body box-profile\">\r\n          <h3 class=\"profile-username text-center\">الاعدادات الرئيسية</h3>\r\n          <ul class=\"list-group list-group-unbordered\">\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/country\"><i class=\"fa fa-circle-o\"></i>\r\n                الدول\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/government\"><i class=\"fa fa-circle-o\"></i>\r\n                المحافظات\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/city\"><i class=\"fa fa-circle-o\"></i>\r\n                المدن\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/academic-year\"><i class=\"fa fa-circle-o\"></i>\r\n                الاعوام الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/qualifications\"><i class=\"fa fa-circle-o\"></i>\r\n                المؤهلات الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/qualification-types\"><i class=\"fa fa-circle-o\"></i>\r\n                انواع المؤهلات الدراسية\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n\r\n\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");





var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"]
            ], exports: [
                _settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map