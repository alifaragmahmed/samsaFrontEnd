(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["military-military-module"],{

/***/ "./src/app/military/components/military-area/military-area.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/military/components/military-area/military-area.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\n      {{ \"military_areas\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th>{{ \"government\" | trans }}</th> \n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td> \n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                    <td>\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"item.government_id\"  >\n                        <option *ngFor=\"let gover of govers\" value=\"{{ gover.id }}\">{{ gover.name }}</option>\n                      </select>\n                    </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/military/components/military-area/military-area.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/military/components/military-area/military-area.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbGl0YXJ5L2NvbXBvbmVudHMvbWlsaXRhcnktYXJlYS9taWxpdGFyeS1hcmVhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/military/components/military-area/military-area.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/military/components/military-area/military-area.component.ts ***!
  \******************************************************************************/
/*! exports provided: MilitaryAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryAreaComponent", function() { return MilitaryAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_settings_setting_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/settings/setting-template */ "./src/app/settings/setting-template.ts");
/* harmony import */ var src_app_settings_services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/settings/services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var src_app_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");





var MilitaryAreaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MilitaryAreaComponent, _super);
    function MilitaryAreaComponent(settingService, applicationSettingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.applicationSettingService = applicationSettingService;
        _this.govers = [];
        _this.baseUrl = "military_areas";
        _this.requiredFields = ['name', 'government_id'];
        _this.get();
        return _this;
    }
    MilitaryAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applicationSettingService.getGovernments().subscribe(function (res) {
            _this.govers = res;
        });
    };
    MilitaryAreaComponent.prototype.action = function () {
        this.get();
    };
    MilitaryAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-military-area',
            template: __webpack_require__(/*! ./military-area.component.html */ "./src/app/military/components/military-area/military-area.component.html"),
            styles: [__webpack_require__(/*! ./military-area.component.scss */ "./src/app/military/components/military-area/military-area.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_settings_services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"], src_app_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationSettingService"]])
    ], MilitaryAreaComponent);
    return MilitaryAreaComponent;
}(src_app_settings_setting_template__WEBPACK_IMPORTED_MODULE_2__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/military/components/military-status/military-status.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/military/components/military-status/military-status.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large text-center\" style=\"padding: 5px!important\">\n      {{ \"military_status\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\" table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of data index as i\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\n                  </td>\n                  <td>\n                    <button class=\"btn btn-success\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"send(item, i)\" >\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                  </button>\n                    <button class=\"btn btn-danger\"\n                    [disabled]=\"isSubmitted\"\n                    (click)=\"destroy(item, i)\" >\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/military/components/military-status/military-status.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/military/components/military-status/military-status.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbGl0YXJ5L2NvbXBvbmVudHMvbWlsaXRhcnktc3RhdHVzL21pbGl0YXJ5LXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/military/components/military-status/military-status.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/military/components/military-status/military-status.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MilitaryStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryStatusComponent", function() { return MilitaryStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_settings_services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/settings/services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var src_app_settings_setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/settings/setting-template */ "./src/app/settings/setting-template.ts");




var MilitaryStatusComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MilitaryStatusComponent, _super);
    function MilitaryStatusComponent(settingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.baseUrl = "military_status";
        _this.requiredFields = ['name'];
        _this.get();
        return _this;
    }
    MilitaryStatusComponent.prototype.ngOnInit = function () {
    };
    MilitaryStatusComponent.prototype.action = function () {
        this.get();
    };
    MilitaryStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-military-status',
            template: __webpack_require__(/*! ./military-status.component.html */ "./src/app/military/components/military-status/military-status.component.html"),
            styles: [__webpack_require__(/*! ./military-status.component.scss */ "./src/app/military/components/military-status/military-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_settings_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], MilitaryStatusComponent);
    return MilitaryStatusComponent;
}(src_app_settings_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

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
/* harmony import */ var _components_military_area_military_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/military-area/military-area.component */ "./src/app/military/components/military-area/military-area.component.ts");
/* harmony import */ var _components_military_status_military_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/military-status/military-status.component */ "./src/app/military/components/military-status/military-status.component.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/middlewares/auth-guest.service */ "./src/app/shared/middlewares/auth-guest.service.ts");








var routes = [
    {
        path: "",
        component: _military_component__WEBPACK_IMPORTED_MODULE_3__["MilitaryComponent"],
        children: [
            {
                path: 'area',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('military_area') },
                component: _components_military_area_military_area_component__WEBPACK_IMPORTED_MODULE_4__["MilitaryAreaComponent"]
            },
            {
                path: 'status',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('military_status') },
                component: _components_military_status_military_status_component__WEBPACK_IMPORTED_MODULE_5__["MilitaryStatusComponent"]
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

module.exports = "<div class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n\r\n      <!-- Profile Image -->\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-body box-profile\">\r\n          <h3 class=\"profile-username text-center\">{{ \"military\" | trans }}</h3>\r\n          <ul class=\"list-group list-group-unbordered\">\r\n            <li class=\"list-group-item\"  permission=\"military_area\" >\r\n              <a class=\"active\" routerLink=\"/military/area\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"military_areas\" | trans }}\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\"  permission=\"military_status\">\r\n              <a class=\"active\" routerLink=\"/military/status\"><i class=\"fa fa-circle-o\"></i>\r\n                {{ \"military_status\" | trans }}\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _components_military_area_military_area_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/military-area/military-area.component */ "./src/app/military/components/military-area/military-area.component.ts");
/* harmony import */ var _components_military_status_military_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/military-status/military-status.component */ "./src/app/military/components/military-status/military-status.component.ts");









var MilitaryModule = /** @class */ (function () {
    function MilitaryModule() {
    }
    MilitaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_military_component__WEBPACK_IMPORTED_MODULE_6__["MilitaryComponent"], _components_military_area_military_area_component__WEBPACK_IMPORTED_MODULE_7__["MilitaryAreaComponent"], _components_military_status_military_status_component__WEBPACK_IMPORTED_MODULE_8__["MilitaryStatusComponent"]],
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



/***/ })

}]);
//# sourceMappingURL=military-military-module.js.map