(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./academic/academic.module": [
		"./src/app/academic/academic.module.ts",
		"default~academic-academic-module~account-account-module~affairs-affairs-module~card-card-module~stud~fe653cd8",
		"academic-academic-module"
	],
	"./account/account.module": [
		"./src/app/account/account.module.ts",
		"default~academic-academic-module~account-account-module~affairs-affairs-module~card-card-module~stud~fe653cd8",
		"default~account-account-module~affairs-affairs-module~student-student-module"
	],
	"./adminision/adminision.module": [
		"./src/app/adminision/adminision.module.ts",
		"default~adminision-adminision-module~affairs-affairs-module",
		"adminision-adminision-module"
	],
	"./affairs/affairs.module": [
		"./src/app/affairs/affairs.module.ts",
		"default~academic-academic-module~account-account-module~affairs-affairs-module~card-card-module~stud~fe653cd8",
		"default~account-account-module~affairs-affairs-module~student-student-module",
		"default~adminision-adminision-module~affairs-affairs-module",
		"default~affairs-affairs-module~student-student-module",
		"affairs-affairs-module"
	],
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./card/card.module": [
		"./src/app/card/card.module.ts",
		"default~academic-academic-module~account-account-module~affairs-affairs-module~card-card-module~stud~fe653cd8",
		"card-card-module"
	],
	"./military/military.module": [
		"./src/app/military/military.module.ts",
		"military-military-module"
	],
	"./settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"settings-settings-module"
	],
	"./student/student.module": [
		"./src/app/student/student.module.ts",
		"default~academic-academic-module~account-account-module~affairs-affairs-module~card-card-module~stud~fe653cd8",
		"default~account-account-module~affairs-affairs-module~student-student-module",
		"default~affairs-affairs-module~student-student-module",
		"student-student-module"
	],
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/account/services/division.service.ts":
/*!******************************************************!*\
  !*** ./src/app/account/services/division.service.ts ***!
  \******************************************************/
/*! exports provided: DivisionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionService", function() { return DivisionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var DivisionService = /** @class */ (function () {
    function DivisionService(http) {
        this.http = http;
    }
    /**
     * get academic_year_expenses from api
     *
     */
    DivisionService.prototype.get = function () {
        return this.http.get('account/divisions?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    DivisionService.DIVISION_PREFIX = 'divisions';
    DivisionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DivisionService);
    return DivisionService;
}());



/***/ }),

/***/ "./src/app/account/services/level.service.ts":
/*!***************************************************!*\
  !*** ./src/app/account/services/level.service.ts ***!
  \***************************************************/
/*! exports provided: LevelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelService", function() { return LevelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var LevelService = /** @class */ (function () {
    function LevelService(http) {
        this.http = http;
    }
    /**
     * get academic_year_expenses from api
     *
     */
    LevelService.prototype.get = function () {
        return this.http.get('account/levels?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    LevelService.LEVEL_PREFIX = 'levels';
    LevelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LevelService);
    return LevelService;
}());



/***/ }),

/***/ "./src/app/account/services/term.service.ts":
/*!**************************************************!*\
  !*** ./src/app/account/services/term.service.ts ***!
  \**************************************************/
/*! exports provided: TermService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermService", function() { return TermService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var TermService = /** @class */ (function () {
    function TermService(http) {
        this.http = http;
    }
    /**
     * get academic_year_expenses from api
     *
     */
    TermService.prototype.get = function () {
        return this.http.get('account/terms?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    TermService.TERPM_PREFIX = 'terms';
    TermService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TermService);
    return TermService;
}());



/***/ }),

/***/ "./src/app/adminision/services/application-setting.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/adminision/services/application-setting.service.ts ***!
  \********************************************************************/
/*! exports provided: ApplicationSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSettingService", function() { return ApplicationSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/request */ "./src/app/shared/request.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");





var ApplicationSettingService = /** @class */ (function () {
    function ApplicationSettingService(http) {
        this.http = http;
        this.requestQueue = [];
        //this.queueRequests();
    }
    ApplicationSettingService_1 = ApplicationSettingService;
    ApplicationSettingService.prototype.queueRequests = function () {
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getCaseConstraints(), action: function (res) { ApplicationSettingService_1.CASE_CONSTRAINTS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getNationalities(), action: function (res) { ApplicationSettingService_1.NATIONALITIES = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getAcademicYears(), action: function (res) { ApplicationSettingService_1.ACADEMIC_YEARS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getQualificationTypes(), action: function (res) { ApplicationSettingService_1.QUALIFICATION_TYPES = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getQualifications(), action: function (res) { ApplicationSettingService_1.QUALIFICATIONS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getRegisterationStatus(), action: function (res) { ApplicationSettingService_1.REGISTERATION_STATUS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getRegisterationMethods(), action: function (res) { ApplicationSettingService_1.REGISTERATION_METHODS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getLanguages(), action: function (res) { ApplicationSettingService_1.LANGUAGES = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getCities(), action: function (res) { ApplicationSettingService_1.CITIES = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getGovernments(), action: function (res) { ApplicationSettingService_1.GOVERNMENTS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getCountries(), action: function (res) { ApplicationSettingService_1.COUNTRIES = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getMilitaryStatus(), action: function (res) { ApplicationSettingService_1.MILITARY_STATUS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getMilitaryAreas(), action: function (res) { ApplicationSettingService_1.MILITARY_AREAS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getParentJobs(), action: function (res) { ApplicationSettingService_1.PARENT_JOBS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getRelativeRelations(), action: function (res) { ApplicationSettingService_1.RELATIVE_RELATIONS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getRequiredDocuments(), action: function (res) { ApplicationSettingService_1.REQUIRED_DOCUMENTS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getDepartments(), action: function (res) { ApplicationSettingService_1.DEPARTMENTS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getRegisterationStatusDocuments(), action: function (res) { ApplicationSettingService_1.REGSITERATIN_STATUS_DOCUMENTS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getDivisions(), action: function (res) { ApplicationSettingService_1.DIVISIONS = res; } });
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].addToQueue({ observer: this.getSettings(), action: function (res) { ApplicationSettingService_1.SETTINGS = res; } });
    };
    ApplicationSettingService.prototype.load = function () {
        var _this = this;
        var firstElement = this.requestQueue.pop();
        if (firstElement) {
            if (ApplicationSettingService_1[firstElement.object].length <= 0) {
                firstElement.request.subscribe(function (res) {
                    ApplicationSettingService_1[firstElement.object] = res;
                    console.log(firstElement.object);
                    //
                    //console.log(this.requestQueue.length);
                    //console.log(ApplicationSettingService[firstElement.object]);
                    _this.loadSettings();
                }, function (error) {
                    _this.loadSettings();
                }, function () {
                    _this.loadSettings();
                });
            }
        }
    };
    ApplicationSettingService.prototype.loadSettings = function () {
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"].fire();
    };
    ApplicationSettingService.prototype.getDivisions = function () {
        return this.http.get('account/divisions?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getRegisterationStatusDocuments = function () {
        return this.http.get('adminision/get_registeration_status_document?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getDepartments = function () {
        return this.http.get('adminision/get_departments?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getRequiredDocuments = function () {
        return this.http.get('adminision/required_documents?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getCaseConstraints = function () {
        return this.http.get('adminision/get_case_constraints?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getRelativeRelations = function () {
        return this.http.get('adminision/get_relative_relations?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getNationalities = function () {
        return this.http.get('adminision/get_nationality?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getAcademicYears = function () {
        return this.http.get('adminision/get_academic_years?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getQualificationTypes = function () {
        return this.http.get('adminision/get_qualification_types?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getQualifications = function () {
        return this.http.get('adminision/get_qualifications?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getRegisterationStatus = function () {
        return this.http.get('adminision/get_registeration_status?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getRegisterationMethods = function () {
        return this.http.get('adminision/get_registration_methods?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getLanguages = function () {
        return this.http.get('adminision/get_languages?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getCities = function () {
        return this.http.get('adminision/get_cities?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getGovernments = function () {
        return this.http.get('adminision/get_governments?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getCountries = function () {
        return this.http.get('adminision/get_countries?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getMilitaryStatus = function () {
        return this.http.get('adminision/get_military_status?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getMilitaryAreas = function () {
        return this.http.get('adminision/get_military_areas?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getParentJobs = function () {
        return this.http.get('adminision/get_parent_jobs?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.updateSetting = function (data) {
        return this.http.post('adminision/update_setting?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken(), data);
    };
    ApplicationSettingService.prototype.getSettings = function () {
        return this.http.get('adminision/get_settings?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken());
    };
    var ApplicationSettingService_1;
    ApplicationSettingService.NATIONALITIES = [];
    ApplicationSettingService.CASE_CONSTRAINTS = [];
    ApplicationSettingService.ACADEMIC_YEARS = [];
    ApplicationSettingService.QUALIFICATION_TYPES = [];
    ApplicationSettingService.QUALIFICATIONS = [];
    ApplicationSettingService.REGISTERATION_STATUS = [];
    ApplicationSettingService.REGISTERATION_METHODS = [];
    ApplicationSettingService.LANGUAGES = [];
    ApplicationSettingService.CITIES = [];
    ApplicationSettingService.GOVERNMENTS = [];
    ApplicationSettingService.COUNTRIES = [];
    ApplicationSettingService.MILITARY_STATUS = [];
    ApplicationSettingService.MILITARY_AREAS = [];
    ApplicationSettingService.PARENT_JOBS = [];
    ApplicationSettingService.RELATIVE_RELATIONS = [];
    ApplicationSettingService.REQUIRED_DOCUMENTS = [];
    ApplicationSettingService.DEPARTMENTS = [];
    ApplicationSettingService.REGSITERATIN_STATUS_DOCUMENTS = [];
    ApplicationSettingService.DIVISIONS = [];
    ApplicationSettingService.SETTINGS = [];
    ApplicationSettingService.LOADED = false;
    ApplicationSettingService = ApplicationSettingService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApplicationSettingService);
    return ApplicationSettingService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/page-not-found/page-not-found.component */ "./src/app/core/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/layout.component */ "./src/app/core/layout.component.ts");
/* harmony import */ var _shared_middlewares_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/middlewares/auth-guard.service */ "./src/app/shared/middlewares/auth-guard.service.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");







var routes = [
    {
        path: '',
        component: _core_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        canActivate: [_shared_middlewares_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        children: [
            {
                path: 'student',
                loadChildren: './student/student.module#StudentModule'
            },
            {
                path: 'academic',
                loadChildren: './academic/academic.module#AcademicModule'
            },
            {
                path: 'account',
                loadChildren: './account/account.module#AccountModule'
            },
            {
                path: 'settings',
                loadChildren: './settings/settings.module#SettingsModule'
            },
            {
                path: 'adminision',
                loadChildren: './adminision/adminision.module#AdminisionModule'
            },
            {
                path: 'military',
                loadChildren: './military/military.module#MilitaryModule'
            },
            {
                path: 'profile',
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]
            },
            {
                path: 'users',
                loadChildren: './user/user.module#UserModule'
            },
            {
                path: 'affairs',
                loadChildren: './affairs/affairs.module#AffairsModule'
            },
            {
                path: 'card',
                loadChildren: './card/card.module#CardModule'
            },
        ]
    },
    {
        path: '',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '**',
        component: _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"],
        // redirectTo: 'admin',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    scrollPositionRestoration: 'enabled'
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/interceptors */ "./src/app/shared/interceptors/index.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/middlewares/auth-guest.service */ "./src/app/shared/middlewares/auth-guest.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _core_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/layout.component */ "./src/app/core/layout.component.ts");
/* harmony import */ var _core_app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/app.component */ "./src/app/core/app.component.ts");
/* harmony import */ var _core_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/auth.component */ "./src/app/core/auth.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/components/page-not-found/page-not-found.component */ "./src/app/core/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/translation.service */ "./src/app/shared/services/translation.service.ts");
/* harmony import */ var _account_services_level_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var _account_services_division_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./account/services/division.service */ "./src/app/account/services/division.service.ts");
/* harmony import */ var _account_services_term_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./account/services/term.service */ "./src/app/account/services/term.service.ts");
/* harmony import */ var _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _node_modules_angular_datatables__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../node_modules/angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _core_components_system_label_system_label_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/components/system-label/system-label.component */ "./src/app/core/components/system-label/system-label.component.ts");
/* harmony import */ var _user_services_user_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user/services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony import */ var _user_services_role_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user/services/role.service */ "./src/app/user/services/role.service.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.doc = document;
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _core_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
                _core_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                _core_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_20__["UserProfileComponent"],
                _core_components_system_label_system_label_component__WEBPACK_IMPORTED_MODULE_27__["SystemLabelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                    timeOut: 4000,
                    positionClass: 'toast-top-center',
                    preventDuplicates: false,
                    progressBar: true,
                    closeButton: true,
                    enableHtml: true,
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _node_modules_angular_datatables__WEBPACK_IMPORTED_MODULE_26__["DataTablesModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
            ],
            providers: [
                _shared_interceptors__WEBPACK_IMPORTED_MODULE_3__["httpInterceptorProviders"],
                _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_19__["ApplicationSettingService"],
                _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_15__["TranslationService"],
                _account_services_level_service__WEBPACK_IMPORTED_MODULE_16__["LevelService"],
                _account_services_division_service__WEBPACK_IMPORTED_MODULE_17__["DivisionService"],
                _account_services_term_service__WEBPACK_IMPORTED_MODULE_18__["TermService"],
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuestService"],
                _user_services_user_service__WEBPACK_IMPORTED_MODULE_28__["UserService"],
                _user_services_role_service__WEBPACK_IMPORTED_MODULE_29__["RoleService"],
                { provide: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MAT_CHECKBOX_CLICK_ACTION"], useValue: 'check' }
            ],
            bootstrap: [_core_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/app.component.html":
/*!*****************************************!*\
  !*** ./src/app/core/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<!--\r\n<ng-template appConfirm>\r\n  <app-confirm-modal [withDetails]=\"false\"></app-confirm-modal>\r\n</ng-template>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/core/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/core/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        //let html = '<app-root></app-root>';
        //var myWindow = window.open(window.location.href, "MsgWindow", "width=200,height=100");
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/core/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/core/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AuthComponent = /** @class */ (function () {
    function AuthComponent(document) {
        this.document = document;
    }
    AuthComponent.prototype.ngAfterViewChecked = function () {
        setTimeout(function () {
            // this.document.getElementById('start-loader').remove();
        }, 1500);
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/core/components/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/components/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.isClosed = false;
        this.applicationSetting = src_app_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationSettingService"];
        console.log(this.applicationSetting.SETTINGS);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/core/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/components/main-page/main-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/main-page/main-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/components/main-page/main-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/components/main-page/main-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/main-page/main-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/main-page/main-page.component.ts ***!
  \******************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/core/components/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/core/components/main-page/main-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/core/components/navbar/nav-bar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/components/navbar/nav-bar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav style=\"height: 40px;\" >\r\n      <div class=\"fixed-nav\" style=\"height: 40px;\" >\r\n          <input type=\"checkbox\" id=\"mobile-nav-check\" class=\"invisible-checkbox\" tab-index=\"-1\" />\r\n          <!-- Fix tabbing on desktop -->\r\n          <label for=\"mobile-nav-check\" class=\"burger\"></label>\r\n          <div class=\"top hidden\"  >\r\n              <div class=\"container \">\r\n\r\n                  <div class=\"w3-left\" style=\"text-align: center;font-size: 13px;\" >\r\n                    <b>وزارة التعليم العالى\r\n                     المعهد العالى للعلوم الادراية\r\n                    ببنى سويف</b>\r\n                </div>\r\n                  <a href=\"#\" class=\"feature-button  logo w3-hide-small\t\">\r\n                    <img src=\"../../../../assets/img/logo.png\" width=\"50px\" >\r\n                  </a>\r\n              </div>\r\n          </div>\r\n          <div class=\"bottom\">\r\n              <div class=\"container\">\r\n                  <ul class=\"navigation\" style=\"float: none;\" >\r\n                      <li class=\"waves-effect waves-white text-right w3-hide-large w3-hide-medium\t\">\r\n                        <img src=\"../../../../assets/img/logo.png\" width=\"50px\" >\r\n                      </li>\r\n                      <li class=\"pointer\"></li>\r\n                      <li class=\"waves-effect waves-white\" *ngIf=\"canAccessStudentAffair()\" >\r\n                        <a routerLink=\"/affairs\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"student affairs\" | trans }}</a>\r\n                      </li>\r\n                      <li class=\"waves-effect waves-white\" *ngIf=\"canAccessSafe() && !canAccessAccountSettings()\" >\r\n                        <a routerLink=\"/account/safe\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"stores\" | trans }}</a>\r\n                      </li>\r\n                      <li class=\"waves-effect waves-white text-right\" *ngIf=\"(canAccessSafe() && canAccessAccountSettings()) || canAccessAccountSettings()\">\r\n                        <div class=\"w3-dropdown-hover\" style=\"background-color: transparent;\"  >\r\n                          <a class=\"dropdown-toggle\">\r\n                           {{ \"account\" | trans }} <span class=\"caret\"></span>\r\n                          </a>\r\n                          <div class=\"w3-dropdown-content w3-bar-block w3-border w3-text-black\" style=\"position: fixed;\" >\r\n                             <a  *ngIf=\"canAccessSafe()\" href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/account/safe\" >{{ \"stores\" | trans }}</a>\r\n                             <a *ngIf=\"canAccessAccountSettings()\" href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/account/setting\" >{{ \"settings\" | trans }}</a>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li class=\"waves-effect waves-white text-right\" *ngIf=\"canAccessCardExport()\">\r\n                        <div class=\"w3-dropdown-hover\" style=\"background-color: transparent;\"  >\r\n                          <a class=\"dropdown-toggle\">\r\n                           {{ \"card export unit\" | trans }} <span class=\"caret\"></span>\r\n                          </a>\r\n                          <div class=\"w3-dropdown-content w3-bar-block w3-border w3-text-black\" style=\"position: fixed;\" >\r\n                             <a permission=\"card_export\" href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/card\" >{{ \"card export unit\" | trans }}</a>\r\n                             <a permission=\"card_export_report\" href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/card/report/card-export\" >{{ \"card export report\" | trans }}</a>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li class=\"waves-effect waves-white text-right\" *ngIf=\"canAccessAcademic()\">\r\n                        <div class=\"w3-dropdown-hover\" style=\"background-color: transparent;\"  >\r\n                          <a class=\"dropdown-toggle\">\r\n                           {{ \"academic\" | trans }} <span class=\"caret\"></span>\r\n                          </a>\r\n                          <div class=\"w3-dropdown-content w3-bar-block w3-border w3-text-black\" style=\"position: fixed;\" >\r\n                             <a permission=\"student_register\" href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/academic/student-register-course\" >{{ \"student_register_course\" | trans }}</a>\r\n                             <a href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/academic/plan\" >{{ \"academic_plan\" | trans }}</a>\r\n                             <a permission=\"academic_setting\" href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/academic/setting\" >{{ \"academic_setting\" | trans }}</a>\r\n                             <a permission=\"open_course\" href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/academic/open-course\" >{{ \"open_courses\" | trans }}</a>\r\n                             <a permission=\"doctor_read\" href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/academic/doctors\" >{{ \"doctors\" | trans }}</a>\r\n                             <a permission=\"control\" href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/academic/student-result\" >{{ \"control\" | trans }}</a>\r\n                             <a permission=\"control_report\" href=\"#\" class=\"w3-bar-item w3-button w3-text-black\" routerLink=\"/academic/control-report\" >{{ \"control report\" | trans }}</a>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n\r\n                      <li class=\"waves-effect waves-white\" *ngIf=\"canAccessMainSettings()\">\r\n                        <a routerLink=\"/settings\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"main_settings\" | trans }}  </a>\r\n                      </li>\r\n                      <li class=\"waves-effect waves-white\" *ngIf=\"canAccessMilitary()\">\r\n                        <a routerLink=\"/military\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"military\" | trans }}  </a>\r\n                      </li>\r\n                      <li class=\"waves-effect waves-white\" *ngIf=\"canAccessUsers()\">\r\n                        <a routerLink=\"/users\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"users\" | trans }}  </a>\r\n                      </li>\r\n                      <!--\r\n                      <li class=\"waves-effect waves-white\">\r\n                        <a routerLink=\"/users\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"users\" | trans }}  </a>\r\n                      </li>\r\n                      -->\r\n                    <li\r\n                    style=\"float: left!important\"\r\n                    (click)=\"logout()\"\r\n                    class=\"waves-effect waves-white w3-dropdown-hover\">\r\n                      <!-- Menu toggle button -->\r\n                      <a   class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-sign-out\"></i>\r\n                      </a>\r\n                    </li>\r\n                    <li\r\n                    style=\"float: left!important\"\r\n                    class=\"dropdown notifications-menu waves-effect waves-white w3-dropdown-hover\">\r\n                      <!-- Menu toggle button -->\r\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-bell-o\"></i>\r\n                        <span class=\"label label-warning\">{{ notifications.length > 0? notifications.length : '' }}</span>\r\n                      </a>\r\n                      <div\r\n                      class=\"w3-ul w3-dropdown-content w3-bar-block w3-border w3-text-black w3-card\"\r\n                      style=\"position: fixed;left: 10%;width: 300px\">\r\n                          <!-- Inner Menu: contains the notifications -->\r\n                          <ul class=\"menu w3-ul w3-block\">\r\n                            <li class=\"w3-bar-item w3-text-black text-center w3-border-bottom w3-border-light-gray\" style=\"text-align: center!important;\" >{{ message }}</li>\r\n                            <li class=\"w3-bar-item w3-text-black text-center w3-border-bottom w3-border-light-gray\" style=\"text-align: center!important;height: 200px;overflow: auto;\" >\r\n                              <ul class=\"w3-ul\">\r\n                                <li\r\n                                style=\"padding: 0px!important\"\r\n                                class=\"w3-bar-item w3-text-black w3-border-bottom w3-border-light-gray\"\r\n                                *ngFor=\"let item of notifications index as i\" ><!-- start notification -->\r\n\r\n                                  <div class=\"media\">\r\n                                      <div class=\"media-left\">\r\n                                        <a href=\"#\">\r\n                                            <i\r\n                                            style=\"padding: 0px!important;\"\r\n                                            class=\"w3-text-black text-right {{ item.icon? item.icon : 'fa fa-bell-o' }}\"></i>\r\n                                        </a>\r\n                                      </div>\r\n                                      <div class=\"media-body\"\r\n                                      style=\"text-align: right!important;line-height: 14px!important;padding-top:10px\" >\r\n                                        {{ item.body }}\r\n                                      </div>\r\n                                    </div>\r\n                                </li>\r\n                              </ul>\r\n                            </li>\r\n                            <li\r\n                            class=\"w3-bar-item w3-button w3-text-black text-center w3-border-bottom w3-border-light-gray\"\r\n                            style=\"text-align: center!important;padding: 0px!important\">{{ \"View all\" | trans }}</li>\r\n                            <!-- end notification -->\r\n                          </ul>\r\n                      </div>\r\n                    </li>\r\n                    <!-- profile item -->\r\n                    <li\r\n                    style=\"float: left!important\"\r\n                    class=\"dropdown notifications-menu waves-effect waves-white w3-dropdown-hover\">\r\n                      <!-- Menu toggle button -->\r\n                      <a routerLink=\"/profile\"  class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-user-circle\"></i>\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/core/components/navbar/nav-bar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/components/navbar/nav-bar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #f3f3f3;\n  color: #333;\n  font-family: \"Raleway\", sans-serif;\n  margin: 0;\n  overflow-x: hidden;\n  width: 100%; }\n\n.navigation li {\n  float: right !important; }\n\n* {\n  box-sizing: border-box; }\n\n.clearfix:before,\n.clearfix:after {\n  clear: both;\n  content: \"\";\n  display: block; }\n\n.container {\n  max-width: 1082px;\n  position: relative;\n  width: calc(100% - 32px);\n  margin: 0 auto;\n  transition: max-width 0.3s; }\n\n.container:before, .container:after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\n@media screen and (max-width: 1050px) {\n  .container {\n    max-width: 768px; } }\n\n.waves-effect.waves-white .waves-ripple {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n.invisible-checkbox {\n  position: fixed;\n  top: 0;\n  left: 200vw; }\n\nnav {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  height: 100px;\n  font-weight: 300; }\n\nnav .fixed-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  background: #5c6bc0;\n  color: #fff;\n  overflow: hidden;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);\n  z-index: 20; }\n\nnav .fixed-nav .top {\n  position: relative;\n  float: left;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); }\n\nnav .fixed-nav .top .logo {\n  margin: 0 0 0 16px;\n  font-size: 20px;\n  color: #fff;\n  text-decoration: none;\n  transition: opacity 0.3s; }\n\nnav .fixed-nav .top .logo:hover, nav .fixed-nav .top .logo:focus {\n  opacity: 0.7; }\n\nnav .fixed-nav .top .feature-button {\n  position: absolute;\n  right: 16px;\n  height: 34px;\n  line-height: calc(34px - 4px);\n  font-size: 14px;\n  top: 50%;\n  transform: translate3d(0, -50%, 0);\n  cursor: pointer;\n  transition: background 0.3s; }\n\nnav .fixed-nav .top .feature-button:hover, nav .fixed-nav .top .feature-button:focus {\n  outline: none;\n  background: rgba(0, 0, 0, 0.2); }\n\nnav .fixed-nav .bottom {\n  position: relative;\n  float: left;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  background: rgba(0, 0, 0, 0.2);\n  overflow: hidden; }\n\nnav .fixed-nav .bottom ul {\n  position: relative;\n  float: right;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\nnav .fixed-nav .bottom ul li:not(.pointer) {\n  position: relative;\n  float: left; }\n\nnav .fixed-nav .bottom ul li:not(.pointer) a {\n  display: block;\n  padding: 0 16px;\n  height: 40px;\n  line-height: 40px;\n  color: #fff;\n  text-decoration: none;\n  transition: background 0.3s; }\n\nnav .fixed-nav .bottom ul li:not(.pointer) a:hover, nav .fixed-nav .bottom ul li:not(.pointer) a:focus {\n  outline: none;\n  background: rgba(0, 0, 0, 0.25); }\n\nnav .fixed-nav .bottom ul li:not(.pointer).active a {\n  background: rgba(0, 0, 0, 0.15); }\n\nnav .fixed-nav .bottom ul li:not(.pointer).active a:hover, nav .fixed-nav .bottom ul li:not(.pointer).active a:focus {\n  background: rgba(0, 0, 0, 0.25); }\n\nnav .fixed-nav .bottom ul .pointer {\n  display: none;\n  height: 10px;\n  width: 10px;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  background: #5c6bc0;\n  transition: transform 0.3s;\n  z-index: 2;\n  transform: translate3d(0, 0, 0) rotate(45deg);\n  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2); }\n\n@media screen and (max-width: 768px) {\n  nav {\n    height: 60px; }\n  nav .fixed-nav {\n    height: 60px;\n    overflow: visible;\n    box-shadow: none; }\n  nav .fixed-nav .burger {\n    position: fixed;\n    top: 0;\n    right: 0;\n    height: 60px;\n    width: 60px;\n    z-index: 9001;\n    cursor: pointer; }\n  nav .fixed-nav .burger {\n    transition: background 0.3s; }\n  nav .fixed-nav .burger:after {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0px);\n    height: 4px;\n    width: 4px;\n    background-color: #fff;\n    box-shadow: -8px -8px 0 0 #fff, 0px -8px 0 0 #fff, 8px -8px 0 0 #fff, -8px 0px 0 0 #fff, 8px 0px 0 0 #fff, -8px 8px 0 0 #fff, 0px 8px 0 0 #fff, 8px 8px 0 0 #fff;\n    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n  nav .fixed-nav .burger:hover {\n    background-color: rgba(0, 0, 0, 0.2); }\n  nav .fixed-nav .burger:hover:after {\n    box-shadow: 0px -12px 0 0 #fff, 0px -6px 0 0 #fff, 12px 0px 0 0 #fff, -6px 0px 0 0 #fff, 6px 0px 0 0 #fff, -12px 0px 0 0 #fff, 0px 6px 0 0 #fff, 0px 12px 0 0 #fff; }\n  nav .fixed-nav .top {\n    z-index: 3;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); }\n  nav .fixed-nav .top .container {\n    height: 60px; }\n  nav .fixed-nav .top .logo {\n    margin-left: 0; }\n  nav .fixed-nav .top .feature-button {\n    right: auto;\n    top: calc(100% + 16px);\n    left: calc(100px - 14px);\n    border-color: #333;\n    color: #333;\n    font-weight: 400;\n    height: 50px;\n    line-height: 46px;\n    padding: 0;\n    font-size: 18px;\n    text-align: center;\n    width: 168px;\n    transform: translate3d(-400px, 0, 0);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n  nav .fixed-nav .bottom {\n    position: fixed;\n    top: 60px;\n    width: 200px;\n    height: calc(100vh - 60px);\n    overflow-y: auto;\n    background: #fff;\n    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);\n    z-index: 2;\n    transform: translate3d(120%, 0, 0);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    will-change: transform; }\n  nav .fixed-nav .bottom .container {\n    margin: 0;\n    width: 100%;\n    max-width: 100%; }\n  nav .fixed-nav .bottom ul {\n    top: 0px;\n    padding-top: 10px;\n    float: left;\n    width: 100%;\n    border-top: 1px solid rgba(0, 0, 0, 0.2); }\n  nav .fixed-nav .bottom ul li:not(.pointer) {\n    width: 100%; }\n  nav .fixed-nav .bottom ul li:not(.pointer) a {\n    color: #333;\n    font-weight: 400; }\n  nav .fixed-nav .bottom ul .pointer {\n    background: rgba(0, 0, 0, 0.6); }\n  nav .fixed-nav #mobile-nav-check:focus + .burger {\n    background-color: rgba(0, 0, 0, 0.2); }\n  nav .fixed-nav #mobile-nav-check:checked + .burger:after {\n    box-shadow: -8px -8px 0 0 #fff, 4px -4px 0 0 #fff, 8px -8px 0 0 #fff, -4px -4px 0 0 #fff, 4px 4px 0 0 #fff, -8px 8px 0 0 #fff, -4px 4px 0 0 #fff, 8px 8px 0 0 #fff; }\n  nav .fixed-nav #mobile-nav-check:checked ~ .top .feature-button {\n    transform: translate3d(-50%, 0, 0); }\n  nav .fixed-nav #mobile-nav-check:checked ~ .bottom {\n    transform: translate3d(0, 0, 0); } }\n\nmain {\n  padding: 32px; }\n\n@media screen and (max-width: 768px) {\n  main {\n    padding: 16px; } }\n\n.projects {\n  position: relative;\n  margin: 0 -8px;\n  display: flex;\n  flex-wrap: wrap; }\n\n.projects:before, .projects:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n.project {\n  background-color: #fff;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);\n  float: left;\n  margin: 0 8px 16px 8px;\n  padding: 28px 32px 32px 32px;\n  position: relative;\n  width: calc(50% - 16px);\n  z-index: 0; }\n\n.project:after {\n  background: #08c;\n  border-radius: 0.3em;\n  color: #fff;\n  content: \"COMPLETE\";\n  font-size: 10px;\n  right: 16px;\n  padding: 5px;\n  position: absolute;\n  top: 16px;\n  z-index: -1; }\n\n.project.ongoing:after {\n  background: #689f38;\n  content: \"ONGOING\"; }\n\n.project.onhold:after {\n  background: #cc5b3f;\n  content: \"ONHOLD\"; }\n\n.project h2 {\n  font-size: 20px;\n  margin: 0 0 16px 0; }\n\n.project p {\n  margin: 0;\n  text-align: justify; }\n\n.project .readmore {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 0.3s;\n  width: 100%; }\n\n.project .readmore:after, .project .readmore:before {\n  border: 2px solid transparent;\n  content: \"\";\n  height: 16px;\n  position: absolute;\n  transition: border-color 0.3s, transform 0.3s;\n  width: 16px; }\n\n.project .readmore:before {\n  border-left-color: #689f38;\n  border-top-color: #689f38;\n  left: 16px;\n  top: 16px; }\n\n.project .readmore:after {\n  border-bottom-color: #689f38;\n  border-right-color: #689f38;\n  bottom: 16px;\n  right: 16px; }\n\n.project .readmore:active, .project .readmore:focus, .project .readmore:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n  outline: none; }\n\n.project .readmore:active:before, .project .readmore:focus:before, .project .readmore:hover:before {\n  border-left-color: #91c761;\n  border-top-color: #91c761;\n  transform: translate3d(-16px, -16px, 0); }\n\n.project .readmore:active:after, .project .readmore:focus:after, .project .readmore:hover:after {\n  border-bottom-color: #91c761;\n  border-right-color: #91c761;\n  transform: translate3d(16px, 16px, 0); }\n\n@media screen and (max-width: 800px) {\n  .projects {\n    margin-left: -16px;\n    margin-right: -16px; }\n  .project {\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0; }\n  .project:after {\n    float: left;\n    margin-top: 16px;\n    right: 0;\n    position: relative;\n    top: 0; }\n  .project p {\n    text-align: left; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL25hdmJhci9FOlxccHJvamVjdFxcc2Ftc2FGcm9udEVuZC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsU0FBUztFQUNULGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2I7RUFDRSx1QkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7O0VBRUUsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdoQjtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakI7O0FBRUg7RUFDRSwwQ0FBMEMsRUFBQTs7QUFHNUM7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHdDQUF3QyxFQUFBOztBQUUxQztFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFFBQVE7RUFDUixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLGFBQWE7RUFDYiwrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSwrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSwrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDViw2Q0FBNkM7RUFDN0MsMENBQTBDLEVBQUE7O0FBRzVDO0VBQ0U7SUFDRSxZQUFZLEVBQUE7RUFFZDtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlLEVBQUE7RUFFakI7SUFDRSwyQkFBMkIsRUFBQTtFQUU3QjtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0tBQWdLO0lBQ2hLLHdEQUF3RCxFQUFBO0VBRTFEO0lBQ0Usb0NBQW9DLEVBQUE7RUFFdEM7SUFDRSxrS0FBa0ssRUFBQTtFQUVwSztJQUNFLFVBQVU7SUFDVix3Q0FBd0MsRUFBQTtFQUUxQztJQUNFLFlBQVksRUFBQTtFQUVkO0lBQ0UsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHVEQUF1RCxFQUFBO0VBRXpEO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsdURBQXVEO0lBQ3ZELHNCQUFzQixFQUFBO0VBRXhCO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlLEVBQUE7RUFFakI7SUFDRSxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0NBQXdDLEVBQUE7RUFFMUM7SUFDRSxXQUFXLEVBQUE7RUFFYjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLDhCQUE4QixFQUFBO0VBRWhDO0lBQ0Usb0NBQW9DLEVBQUE7RUFFdEM7SUFDRSxrS0FBa0ssRUFBQTtFQUVwSztJQUNFLGtDQUFrQyxFQUFBO0VBRXBDO0lBQ0UsK0JBQStCLEVBQUEsRUFDaEM7O0FBRUg7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdiO0VBQ0Usc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFFYjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFNBQVM7RUFDVCxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBR04saUNBQWlDO0VBQ2pDLFdBQVcsRUFBQTs7QUFFYjtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUdsQiw2Q0FBNkM7RUFDN0MsV0FBVyxFQUFBOztBQUViO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUVYO0VBQ0UsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUViO0VBQ0Usc0NBQXNDO0VBQ3RDLGFBQWEsRUFBQTs7QUFFZjtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsdUNBQXVDLEVBQUE7O0FBRXpDO0VBQ0UsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixxQ0FBcUMsRUFBQTs7QUFHdkM7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFQUdyQjtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBRWpCO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLE1BQU0sRUFBQTtFQUVSO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbmF2YmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiBsaSB7XHJcbiAgZmxvYXQ6IHJpZ2h0IWltcG9ydGFudDtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNsZWFyZml4OmJlZm9yZSxcclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEwODJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjNzO1xyXG59XHJcbi5jb250YWluZXI6YmVmb3JlLCAuY29udGFpbmVyOmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNzY4cHg7XHJcbiAgfVxyXG59XHJcbi53YXZlcy1lZmZlY3Qud2F2ZXMtd2hpdGUgLndhdmVzLXJpcHBsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4uaW52aXNpYmxlLWNoZWNrYm94IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDIwMHZ3O1xyXG59XHJcblxyXG5uYXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbm5hdiAuZml4ZWQtbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiAjNWM2YmMwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5uYXYgLmZpeGVkLW5hdiAudG9wIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxubmF2IC5maXhlZC1uYXYgLnRvcCAubG9nbyB7XHJcbiAgbWFyZ2luOiAwIDAgMCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG59XHJcbm5hdiAuZml4ZWQtbmF2IC50b3AgLmxvZ286aG92ZXIsIG5hdiAuZml4ZWQtbmF2IC50b3AgLmxvZ286Zm9jdXMge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5uYXYgLmZpeGVkLW5hdiAudG9wIC5mZWF0dXJlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBsaW5lLWhlaWdodDogY2FsYygzNHB4IC0gNHB4KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xyXG59XHJcbm5hdiAuZml4ZWQtbmF2IC50b3AgLmZlYXR1cmUtYnV0dG9uOmhvdmVyLCBuYXYgLmZpeGVkLW5hdiAudG9wIC5mZWF0dXJlLWJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxubmF2IC5maXhlZC1uYXYgLmJvdHRvbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5uYXYgLmZpeGVkLW5hdiAuYm90dG9tIHVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxubmF2IC5maXhlZC1uYXYgLmJvdHRvbSB1bCBsaTpub3QoLnBvaW50ZXIpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxubmF2IC5maXhlZC1uYXYgLmJvdHRvbSB1bCBsaTpub3QoLnBvaW50ZXIpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcclxufVxyXG5uYXYgLmZpeGVkLW5hdiAuYm90dG9tIHVsIGxpOm5vdCgucG9pbnRlcikgYTpob3ZlciwgbmF2IC5maXhlZC1uYXYgLmJvdHRvbSB1bCBsaTpub3QoLnBvaW50ZXIpIGE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5uYXYgLmZpeGVkLW5hdiAuYm90dG9tIHVsIGxpOm5vdCgucG9pbnRlcikuYWN0aXZlIGEge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxubmF2IC5maXhlZC1uYXYgLmJvdHRvbSB1bCBsaTpub3QoLnBvaW50ZXIpLmFjdGl2ZSBhOmhvdmVyLCBuYXYgLmZpeGVkLW5hdiAuYm90dG9tIHVsIGxpOm5vdCgucG9pbnRlcikuYWN0aXZlIGE6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxubmF2IC5maXhlZC1uYXYgLmJvdHRvbSB1bCAucG9pbnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTVweDtcclxuICBsZWZ0OiAtNXB4O1xyXG4gIGJhY2tncm91bmQ6ICM1YzZiYzA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbiAgei1pbmRleDogMjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIG5hdiB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG4gIG5hdiAuZml4ZWQtbmF2IHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgbmF2IC5maXhlZC1uYXYgLmJ1cmdlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgei1pbmRleDogOTAwMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgbmF2IC5maXhlZC1uYXYgLmJ1cmdlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XHJcbiAgfVxyXG4gIG5hdiAuZml4ZWQtbmF2IC5idXJnZXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwcHgpO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IC04cHggLThweCAwIDAgI2ZmZiwgMHB4IC04cHggMCAwICNmZmYsIDhweCAtOHB4IDAgMCAjZmZmLCAtOHB4IDBweCAwIDAgI2ZmZiwgOHB4IDBweCAwIDAgI2ZmZiwgLThweCA4cHggMCAwICNmZmYsIDBweCA4cHggMCAwICNmZmYsIDhweCA4cHggMCAwICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgbmF2IC5maXhlZC1uYXYgLmJ1cmdlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIG5hdiAuZml4ZWQtbmF2IC5idXJnZXI6aG92ZXI6YWZ0ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0xMnB4IDAgMCAjZmZmLCAwcHggLTZweCAwIDAgI2ZmZiwgMTJweCAwcHggMCAwICNmZmYsIC02cHggMHB4IDAgMCAjZmZmLCA2cHggMHB4IDAgMCAjZmZmLCAtMTJweCAwcHggMCAwICNmZmYsIDBweCA2cHggMCAwICNmZmYsIDBweCAxMnB4IDAgMCAjZmZmO1xyXG4gIH1cclxuICBuYXYgLmZpeGVkLW5hdiAudG9wIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBuYXYgLmZpeGVkLW5hdiAudG9wIC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxuICBuYXYgLmZpeGVkLW5hdiAudG9wIC5sb2dvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICBuYXYgLmZpeGVkLW5hdiAudG9wIC5mZWF0dXJlLWJ1dHRvbiB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIHRvcDogY2FsYygxMDAlICsgMTZweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDEwMHB4IC0gMTRweCk7XHJcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDZweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTY4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00MDBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuICBuYXYgLmZpeGVkLW5hdiAuYm90dG9tIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMjAlLCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gIH1cclxuICBuYXYgLmZpeGVkLW5hdiAuYm90dG9tIC5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIG5hdiAuZml4ZWQtbmF2IC5ib3R0b20gdWwge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBuYXYgLmZpeGVkLW5hdiAuYm90dG9tIHVsIGxpOm5vdCgucG9pbnRlcikge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIG5hdiAuZml4ZWQtbmF2IC5ib3R0b20gdWwgbGk6bm90KC5wb2ludGVyKSBhIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgbmF2IC5maXhlZC1uYXYgLmJvdHRvbSB1bCAucG9pbnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgfVxyXG4gIG5hdiAuZml4ZWQtbmF2ICNtb2JpbGUtbmF2LWNoZWNrOmZvY3VzICsgLmJ1cmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIG5hdiAuZml4ZWQtbmF2ICNtb2JpbGUtbmF2LWNoZWNrOmNoZWNrZWQgKyAuYnVyZ2VyOmFmdGVyIHtcclxuICAgIGJveC1zaGFkb3c6IC04cHggLThweCAwIDAgI2ZmZiwgNHB4IC00cHggMCAwICNmZmYsIDhweCAtOHB4IDAgMCAjZmZmLCAtNHB4IC00cHggMCAwICNmZmYsIDRweCA0cHggMCAwICNmZmYsIC04cHggOHB4IDAgMCAjZmZmLCAtNHB4IDRweCAwIDAgI2ZmZiwgOHB4IDhweCAwIDAgI2ZmZjtcclxuICB9XHJcbiAgbmF2IC5maXhlZC1uYXYgI21vYmlsZS1uYXYtY2hlY2s6Y2hlY2tlZCB+IC50b3AgLmZlYXR1cmUtYnV0dG9uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XHJcbiAgfVxyXG4gIG5hdiAuZml4ZWQtbmF2ICNtb2JpbGUtbmF2LWNoZWNrOmNoZWNrZWQgfiAuYm90dG9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbm1haW4ge1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxufVxyXG4ucHJvamVjdHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgLThweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ucHJvamVjdHM6YmVmb3JlLCAucHJvamVjdHM6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5wcm9qZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIDhweCAxNnB4IDhweDtcclxuICBwYWRkaW5nOiAyOHB4IDMycHggMzJweCAzMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogY2FsYyg1MCUgLSAxNnB4KTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi5wcm9qZWN0OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDhjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGNvbnRlbnQ6IFwiQ09NUExFVEVcIjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE2cHg7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLnByb2plY3Qub25nb2luZzphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogIzY4OWYzODtcclxuICBjb250ZW50OiBcIk9OR09JTkdcIjtcclxufVxyXG4ucHJvamVjdC5vbmhvbGQ6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjYzViM2Y7XHJcbiAgY29udGVudDogXCJPTkhPTERcIjtcclxufVxyXG4ucHJvamVjdCBoMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbjogMCAwIDE2cHggMDtcclxufVxyXG4ucHJvamVjdCBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4ucHJvamVjdCAucmVhZG1vcmUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnByb2plY3QgLnJlYWRtb3JlOmFmdGVyLCAucHJvamVjdCAucmVhZG1vcmU6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3M7XHJcbiAgLW1zLXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzLCB0cmFuc2Zvcm0gMC4zcztcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3M7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbn1cclxuLnByb2plY3QgLnJlYWRtb3JlOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM2ODlmMzg7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzY4OWYzODtcclxuICBsZWZ0OiAxNnB4O1xyXG4gIHRvcDogMTZweDtcclxufVxyXG4ucHJvamVjdCAucmVhZG1vcmU6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM2ODlmMzg7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjNjg5ZjM4O1xyXG4gIGJvdHRvbTogMTZweDtcclxuICByaWdodDogMTZweDtcclxufVxyXG4ucHJvamVjdCAucmVhZG1vcmU6YWN0aXZlLCAucHJvamVjdCAucmVhZG1vcmU6Zm9jdXMsIC5wcm9qZWN0IC5yZWFkbW9yZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ucHJvamVjdCAucmVhZG1vcmU6YWN0aXZlOmJlZm9yZSwgLnByb2plY3QgLnJlYWRtb3JlOmZvY3VzOmJlZm9yZSwgLnByb2plY3QgLnJlYWRtb3JlOmhvdmVyOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM5MWM3NjE7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzkxYzc2MTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNnB4LCAtMTZweCwgMCk7XHJcbn1cclxuLnByb2plY3QgLnJlYWRtb3JlOmFjdGl2ZTphZnRlciwgLnByb2plY3QgLnJlYWRtb3JlOmZvY3VzOmFmdGVyLCAucHJvamVjdCAucmVhZG1vcmU6aG92ZXI6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5MWM3NjE7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjOTFjNzYxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTZweCwgMTZweCwgMCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnByb2plY3RzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAucHJvamVjdDphZnRlciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnByb2plY3QgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/components/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _services_system_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/system-setting.service */ "./src/app/core/services/system-setting.service.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");










var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(config, authService, router, systemSettingService) {
        this.authService = authService;
        this.router = router;
        this.systemSettingService = systemSettingService;
        this.doc = document;
        this.sidebarOpened = false;
        this.user = _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].user();
        this.notifications = [];
        this.notify = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(this.doc.notify);
        config.placement = 'bottom-right';
    }
    NavBarComponent.prototype.initMessage = function (arr) {
        this.message = _shared_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].trans("You have {n} notifications").replace("{n}", arr.length);
    };
    NavBarComponent.prototype.ngOnInit = function () {
        this.user = _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].user();
        this.initMessage(this.notifications);
        this.loadNotifications();
        //
        this.observeNotifications();
    };
    NavBarComponent.prototype.observeNotifications = function () {
        var _this_1 = this;
        setInterval(function () {
            if (_this_1.doc.notify == 1)
                _this_1.loadNotifications();
        }, 5000);
    }; //
    NavBarComponent.prototype.loadNotifications = function () {
        var _this_1 = this;
        this.systemSettingService.getNotifications().subscribe(function (res) {
            res.forEach(function (element) {
                _this_1.notifications.push(element);
            });
            _this_1.notifications.reverse();
            //
            if (res.length > 0) {
                _this_1.initMessage(res);
                _this_1.doc.playSound('ios_notification');
            }
            _this_1.doc.notify = 0;
        });
    };
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_9__["Message"].confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].trans('are you sure'), function () {
            _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].logout();
            _this.router.navigate(['/login']).then().catch();
        });
    };
    NavBarComponent.prototype.canAccessStudentAffair = function () {
        var permissions = ["application_add", "applicattion_edit", "application_remove", "application_read", "student_read", "student_edit", "student_add", "student_remove", "required_document_read", "required_document_edit", "required_document_add", "required_document_remove", "application_required", "application_setting"];
        return _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].canOr(permissions);
    };
    NavBarComponent.prototype.canAccessSafe = function () {
        var permissions = ["safe_student_payment", "safe_student_service", "safe_student_my_installment", "safe_student_installment", "safe_note", "safe_setting", "safe_discount", "safe_balance_reset", "safe_service"];
        return _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].canOr(permissions);
    };
    NavBarComponent.prototype.canAccessAccountSettings = function () {
        var permissions = ["service_read", "service_edit", "service_add", "service_remove", "safe_read", "safe_edit", "safe_remove", "safe_add", "academic_expense_read", "academic_expense_edit", "academic_expense_add", "discount_type_read", "discount_type_add", "discount_type_remove", "installment_report", "report_creator_report", "student_balance_report", "student_discount_report", "student_detail_report", "payment_detail_report", "account_setting", "discount_type_edit", "academic_expense_remove"];
        return _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].canOr(permissions);
    };
    NavBarComponent.prototype.canAccessCardExport = function () {
        var permissions = ["card_export", "card_export_report"];
        return _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].canOr(permissions);
    };
    NavBarComponent.prototype.canAccessMainSettings = function () {
        var permissions = ["translation", "permission", "student_code_series", "relation", "parent_job", "nationality", "language", "case_constraint", "registeration_status", "registeration_method", "academic_year", "qualification_type", "qualification", "department", "division", "level", "city", "government", "country"];
        return _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].canOr(permissions);
    };
    NavBarComponent.prototype.canAccessMilitary = function () {
        var permissions = ["military_status", "military_area"];
        return _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].canOr(permissions);
    };
    NavBarComponent.prototype.canAccessAcademic = function () {
        var permissions = ["result_transfer", "control_report", "control", "open_course", "academic_setting", "doctor_remove", "doctor_add", "doctor_edit", "doctor_read", "degree_map_remove", "degree_map_add", "degree_map_edit", "degree_map_read", "course_category_remove", "course_category_add", "course_category_edit", "course_category_read", "course_remove", "course_add", "course_edit", "course_read", "student_register"];
        return _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].canOr(permissions);
    };
    NavBarComponent.prototype.canAccessUsers = function () {
        var permissions = ["role_remove", "role_add", "role_edit", "role_read", "user_remove", "user_add", "user_edit", "user_read"];
        return _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].canOr(permissions);
    };
    /**
     * observe time to load notifications
     * 2 minuties
     */
    NavBarComponent.OBSERVE_TIME = 2 * 60 * 1000;
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/core/components/navbar/nav-bar.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/core/components/navbar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_system_setting_service__WEBPACK_IMPORTED_MODULE_6__["SystemSettingService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/page-not-found/page-not-found.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/core/components/page-not-found/page-not-found.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/page-not-found/page-not-found.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/page-not-found/page-not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <!-- Page Wrapper -->\r\n  <div id=\"wrapper\">\r\n\r\n    <!-- Sidebar -->\r\n    <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\r\n\r\n      <!-- Sidebar - Brand -->\r\n      <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\r\n        <div class=\"sidebar-brand-icon rotate-n-15\">\r\n          <i class=\"fas fa-laugh-wink\"></i>\r\n        </div>\r\n        <div class=\"sidebar-brand-text mx-3\">SB Admin <sup>2</sup></div>\r\n      </a>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider my-0\">\r\n\r\n      <!-- Nav Item - Dashboard -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"index.html\">\r\n          <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n          <span>Dashboard</span></a>\r\n      </li>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider\">\r\n\r\n      <!-- Heading -->\r\n      <div class=\"sidebar-heading\">\r\n        Interface\r\n      </div>\r\n\r\n      <!-- Nav Item - Pages Collapse Menu -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n          <i class=\"fas fa-fw fa-cog\"></i>\r\n          <span>Components</span>\r\n        </a>\r\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <h6 class=\"collapse-header\">Custom Components:</h6>\r\n            <a class=\"collapse-item\" href=\"buttons.html\">Buttons</a>\r\n            <a class=\"collapse-item\" href=\"cards.html\">Cards</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n\r\n      <!-- Nav Item - Utilities Collapse Menu -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseUtilities\" aria-expanded=\"true\" aria-controls=\"collapseUtilities\">\r\n          <i class=\"fas fa-fw fa-wrench\"></i>\r\n          <span>Utilities</span>\r\n        </a>\r\n        <div id=\"collapseUtilities\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <h6 class=\"collapse-header\">Custom Utilities:</h6>\r\n            <a class=\"collapse-item\" href=\"utilities-color.html\">Colors</a>\r\n            <a class=\"collapse-item\" href=\"utilities-border.html\">Borders</a>\r\n            <a class=\"collapse-item\" href=\"utilities-animation.html\">Animations</a>\r\n            <a class=\"collapse-item\" href=\"utilities-other.html\">Other</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider\">\r\n\r\n      <!-- Heading -->\r\n      <div class=\"sidebar-heading\">\r\n        Addons\r\n      </div>\r\n\r\n      <!-- Nav Item - Pages Collapse Menu -->\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Pages</span>\r\n        </a>\r\n        <div id=\"collapsePages\" class=\"collapse show\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <h6 class=\"collapse-header\">Login Screens:</h6>\r\n            <a class=\"collapse-item\" href=\"login.html\">Login</a>\r\n            <a class=\"collapse-item\" href=\"register.html\">Register</a>\r\n            <a class=\"collapse-item\" href=\"forgot-password.html\">Forgot Password</a>\r\n            <div class=\"collapse-divider\"></div>\r\n            <h6 class=\"collapse-header\">Other Pages:</h6>\r\n            <a class=\"collapse-item active\" href=\"404.html\">404 Page</a>\r\n            <a class=\"collapse-item\" href=\"blank.html\">Blank Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n\r\n      <!-- Nav Item - Charts -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"charts.html\">\r\n          <i class=\"fas fa-fw fa-chart-area\"></i>\r\n          <span>Charts</span></a>\r\n      </li>\r\n\r\n      <!-- Nav Item - Tables -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"tables.html\">\r\n          <i class=\"fas fa-fw fa-table\"></i>\r\n          <span>Tables</span></a>\r\n      </li>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider d-none d-md-block\">\r\n\r\n      <!-- Sidebar Toggler (Sidebar) -->\r\n      <div class=\"text-center d-none d-md-inline\">\r\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n      </div>\r\n\r\n    </ul>\r\n    <!-- End of Sidebar -->\r\n\r\n    <!-- Content Wrapper -->\r\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n\r\n      <!-- Main Content -->\r\n      <div id=\"content\">\r\n\r\n        <!-- Topbar -->\r\n        <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\r\n\r\n          <!-- Sidebar Toggle (Topbar) -->\r\n          <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </button>\r\n\r\n          <!-- Topbar Search -->\r\n          <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-primary\" type=\"button\">\r\n                  <i class=\"fas fa-search fa-sm\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n        </nav>\r\n        <!-- End of Topbar -->\r\n\r\n        <!-- Begin Page Content -->\r\n        <div class=\"container-fluid\">\r\n\r\n          <!-- 404 Error Text -->\r\n          <div class=\"text-center\">\r\n            <div class=\"error mx-auto\" data-text=\"404\">404</div>\r\n            <p class=\"lead text-gray-800 mb-5\">Page Not Found</p>\r\n            <p class=\"text-gray-500 mb-0\">It looks like you found a glitch in the matrix...</p>\r\n            <a href=\"index.html\">&larr; Back to Dashboard</a>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- /.container-fluid -->\r\n\r\n      </div>\r\n      <!-- End of Main Content -->\r\n\r\n      <!-- Footer -->\r\n      <footer class=\"sticky-footer bg-white\">\r\n        <div class=\"container my-auto\">\r\n          <div class=\"copyright text-center my-auto\">\r\n            <span>Copyright &copy; Your Website 2019</span>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n      <!-- End of Footer -->\r\n\r\n    </div>\r\n    <!-- End of Content Wrapper -->\r\n\r\n  </div>\r\n  <!-- End of Page Wrapper -->\r\n\r\n  <!-- Scroll to Top Button-->\r\n  <a class=\"scroll-to-top rounded\" href=\"#page-top\">\r\n    <i class=\"fas fa-angle-up\"></i>\r\n  </a>\r\n\r\n  <!-- Logout Modal-->\r\n  <div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\r\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\r\n          <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/core/components/page-not-found/page-not-found.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/page-not-found/page-not-found.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/core/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/core/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/components/system-label/system-label.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/system-label/system-label.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"w3-display-topleft w3-padding sidebar-settings\"  style=\"position: fixed;\">\r\n\r\n  <div class=\"w3-card-2 w3-round w3-white\" style=\"width: 80px\" >\r\n    <ul class=\"w3-ul\" >\r\n      <li class=\"text-center w3-large w3-hover-light-gray\" style=\"cursor: pointer;\" (click)=\"toggle()\" >\r\n        <b class=\"fa  {{ isClosed? 'fa-angle-up' : 'fa-angle-down' }}\" ></b>\r\n      </li>\r\n      <li class=\"text-center setting-list-item w3-hover-light-gray\" style=\"padding: 3px!important\" *ngIf=\"setting.current_academic_year\" >\r\n         <i class=\"fa fa-calendar w3-larger w3-text-indigo\" ></i>\r\n         <br>\r\n         <span class=\"w3-tiny\" style=\"font-family: 'Roboto';\" >{{ setting.current_academic_year.name }}</span>\r\n      </li>\r\n      <li class=\"text-center setting-list-item w3-hover-light-gray\" style=\"padding: 3px!important\" *ngIf=\"setting.current_term\" >\r\n         <i class=\"fa fa-graduation-cap w3-larger w3-text-indigo\" ></i>\r\n         <br>\r\n         <span class=\"w3-tiny\" >{{ setting.current_term.name }}</span>\r\n      </li>\r\n      <li class=\"text-center setting-list-item w3-hover-light-gray\" style=\"padding: 3px!important;cursor: pointer;\" (click)=\"resize()\" >\r\n        <div *ngIf=\"!resizable\" >\r\n          <i class=\"fa fa-arrows w3-larger w3-text-\" ></i>\r\n          <br>\r\n          <span class=\"w3-tiny\" >{{ \"resize\" | trans }}</span>\r\n        </div>\r\n        <div *ngIf=\"resizable\" >\r\n          <i class=\"fa fa-arrows w3-larger w3-text-indigo\" ></i>\r\n          <br>\r\n          <b class=\"w3-tiny\" >{{ \"resize\" | trans }}</b>\r\n        </div>\r\n      </li>\r\n      <li class=\"text-center setting-list-item w3-hover-light-gray\"\r\n      style=\"padding: 3px!important;cursor: pointer;\" (click)=\"viewThemeDialog()\" >\r\n        <div  >\r\n          <i class=\"fa fa-paint-brush w3-larger w3-text-indigo\" ></i>\r\n          <br>\r\n          <span class=\"w3-tiny\"  >{{ \"theme\" | trans }}</span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\"  id=\"themeModal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">{{ \"change application theme\" | trans }}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"w3-display-container w3-row\">\r\n          <div *ngFor=\"let color of colors index as i\"\r\n          (click)=\"changeColor(color)\"\r\n          class=\"w3-center\" style=\"width: 40px;float: right;cursor: pointer;\" >\r\n            <i class=\"fa fa-circle w3-xxlarge\" [ngStyle]=\"{color: color.color}\"  ></i>\r\n            <br>\r\n            <i class=\"fa fa-check-circle {{ selectedTheme.color == color.color? 'w3-text-green' : 'w3-text-gray' }}\" ></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default w3-block small-shadow\" data-dismiss=\"modal\">{{ \"close\" | trans }}</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/core/components/system-label/system-label.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/system-label/system-label.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".current-academic-year {\n  position: fixed;\n  top: 5px;\n  width: 100px;\n  z-index: 999999999999; }\n\n.sidebar-settings {\n  z-index: 999999;\n  top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3N5c3RlbS1sYWJlbC9FOlxccHJvamVjdFxcc2Ftc2FGcm9udEVuZC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcc3lzdGVtLWxhYmVsXFxzeXN0ZW0tbGFiZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFHekI7RUFDRSxlQUFlO0VBQ2YsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3N5c3RlbS1sYWJlbC9zeXN0ZW0tbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5jdXJyZW50LWFjYWRlbWljLXllYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXNldHRpbmdzIHtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgdG9wOiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/system-label/system-label.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/components/system-label/system-label.component.ts ***!
  \************************************************************************/
/*! exports provided: SystemLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemLabelComponent", function() { return SystemLabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helpers_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/theme */ "./src/app/shared/helpers/theme.ts");
/* harmony import */ var _services_system_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/system-setting.service */ "./src/app/core/services/system-setting.service.ts");




var SystemLabelComponent = /** @class */ (function () {
    function SystemLabelComponent(systemSettingService) {
        this.systemSettingService = systemSettingService;
        this.setting = {};
        this.$ = $;
        this.resizable = false;
        this.isClosed = false;
        this.isThemeOpen = false;
        this.selectedTheme = {};
        this.colors = [];
        src_app_shared_helpers_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].load();
        this.loadTheme();
    }
    SystemLabelComponent.prototype.loadTheme = function () {
        this.selectedTheme = src_app_shared_helpers_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].get();
        console.log(this.selectedTheme);
        this.colors = src_app_shared_helpers_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].COLORS;
        console.log(this.colors);
    };
    SystemLabelComponent.prototype.changeColor = function (color) {
        this.selectedTheme = color;
        src_app_shared_helpers_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].change(color);
    };
    SystemLabelComponent.prototype.viewThemeDialog = function () {
        this.$('#themeModal').modal('show');
    };
    SystemLabelComponent.prototype.loadSettings = function () {
        var _this = this;
        this.systemSettingService.getSystemSetting().subscribe(function (res) {
            _this.setting = res;
        });
    };
    SystemLabelComponent.prototype.ngOnInit = function () {
        this.loadSettings();
    };
    SystemLabelComponent.prototype.toggle = function () {
        if (this.isClosed) {
            this.$('.setting-list-item').slideDown(300);
            this.isClosed = false;
        }
        else {
            this.$('.setting-list-item').slideUp(300);
            this.isClosed = true;
        }
    };
    SystemLabelComponent.prototype.resize = function () {
        if (this.resizable) {
            $('.safe-box').css('overflow', 'auto');
            $('.safe-box').css('resize', 'none');
            this.resizable = false;
        }
        else {
            $('.safe-box').css('overflow', 'auto');
            $('.safe-box').css('resize', 'both');
            this.resizable = true;
        }
    };
    SystemLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system-label',
            template: __webpack_require__(/*! ./system-label.component.html */ "./src/app/core/components/system-label/system-label.component.html"),
            styles: [__webpack_require__(/*! ./system-label.component.scss */ "./src/app/core/components/system-label/system-label.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_system_setting_service__WEBPACK_IMPORTED_MODULE_3__["SystemSettingService"]])
    ], SystemLabelComponent);
    return SystemLabelComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/core/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/core/components/home/home.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/core/components/main-page/main-page.component.ts");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/layout.component.html":
/*!********************************************!*\
  !*** ./src/app/core/layout.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n  <app-nav-bar></app-nav-bar>\r\n\r\n  <app-system-label></app-system-label>\r\n\r\n  <!-- Full Width Column -->\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n      <!-- breadcrumb -->\r\n\r\n\r\n      <!-- Main content -->\r\n      <section class=\"content\">\r\n        <router-outlet></router-outlet>\r\n      </section>\r\n      <!-- /.content -->\r\n    </div>\r\n    <!-- /.container -->\r\n  </div>\r\n  <!-- /.content-wrapper -->\r\n  <footer class=\"footer hidden\">\r\n       <div class=\"w3- font\">\r\n          <a href=\"http://www.sphinxat.com\" target=\"_blank\" class=\"footer\">\r\n                   جميع الحقوق محفوظه لدى شركة سفنكس للتكنولوجيا المتقدمه 01000122247\r\n          </a>\r\n      </div>\r\n  </footer>\r\n\r\n</div>\r\n<!-- ./wrapper -->\r\n"

/***/ }),

/***/ "./src/app/core/layout.component.ts":
/*!******************************************!*\
  !*** ./src/app/core/layout.component.ts ***!
  \******************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/translation.service */ "./src/app/shared/services/translation.service.ts");
/* harmony import */ var _account_services_term_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../account/services/term.service */ "./src/app/account/services/term.service.ts");
/* harmony import */ var _account_services_division_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../account/services/division.service */ "./src/app/account/services/division.service.ts");
/* harmony import */ var _account_services_level_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var _shared_translation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/translation */ "./src/app/shared/translation.ts");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _shared_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/request */ "./src/app/shared/request.ts");













var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(document, router, translationService, levelService, termService, divisionService, applicationSettingService) {
        this.document = document;
        this.router = router;
        this.translationService = translationService;
        this.levelService = levelService;
        this.termService = termService;
        this.divisionService = divisionService;
        this.applicationSettingService = applicationSettingService;
        _shared_translation__WEBPACK_IMPORTED_MODULE_10__["Translation"].TRANSLATION_DATA = _shared_cache__WEBPACK_IMPORTED_MODULE_11__["Cache"].get(_shared_translation__WEBPACK_IMPORTED_MODULE_10__["Translation"].TRANSLATION_CACHE_KEY);
    }
    LayoutComponent.prototype.ngAfterViewChecked = function () {
    };
    LayoutComponent.prototype.watchUser = function () {
        console.log(_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
        if (!_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken())
            this.router.navigate(['/login'], {}).then().catch();
    };
    LayoutComponent.prototype.ngOnInit = function () {
        //Cache.set(Translation.TRANSLATION_CACHE_KEY, r);
        _shared_request__WEBPACK_IMPORTED_MODULE_12__["Request"].addToQueue({ observer: this.translationService.get(), action: function (r) {
                //Cache.remove(Translation.TRANSLATION_CACHE_KEY);
                //Cache.set(Translation.TRANSLATION_CACHE_KEY, r);
                _shared_translation__WEBPACK_IMPORTED_MODULE_10__["Translation"].TRANSLATION_DATA = r;
            } });
        _shared_request__WEBPACK_IMPORTED_MODULE_12__["Request"].addToQueue({ observer: this.divisionService.get(), action: function (r) {
                _shared_cache__WEBPACK_IMPORTED_MODULE_11__["Cache"].remove(_account_services_division_service__WEBPACK_IMPORTED_MODULE_7__["DivisionService"].DIVISION_PREFIX);
                _shared_cache__WEBPACK_IMPORTED_MODULE_11__["Cache"].set(_account_services_division_service__WEBPACK_IMPORTED_MODULE_7__["DivisionService"].DIVISION_PREFIX, r);
            } });
        _shared_request__WEBPACK_IMPORTED_MODULE_12__["Request"].addToQueue({ observer: this.termService.get(), action: function (r) {
                _shared_cache__WEBPACK_IMPORTED_MODULE_11__["Cache"].remove(_account_services_term_service__WEBPACK_IMPORTED_MODULE_6__["TermService"].TERPM_PREFIX);
                _shared_cache__WEBPACK_IMPORTED_MODULE_11__["Cache"].set(_account_services_term_service__WEBPACK_IMPORTED_MODULE_6__["TermService"].TERPM_PREFIX, r);
            } });
        // load all requests in the queueue
        console.log("request count : " + _shared_request__WEBPACK_IMPORTED_MODULE_12__["Request"].queue.length);
        _shared_request__WEBPACK_IMPORTED_MODULE_12__["Request"].fire();
    };
    LayoutComponent.prototype.ngOnChanges = function (changes) {
        this.watchUser();
    };
    LayoutComponent.prototype.init = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/core/layout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslationService"],
            _account_services_level_service__WEBPACK_IMPORTED_MODULE_8__["LevelService"],
            _account_services_term_service__WEBPACK_IMPORTED_MODULE_6__["TermService"],
            _account_services_division_service__WEBPACK_IMPORTED_MODULE_7__["DivisionService"],
            _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationSettingService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/services/system-setting.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/system-setting.service.ts ***!
  \*********************************************************/
/*! exports provided: SystemSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemSettingService", function() { return SystemSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var SystemSettingService = /** @class */ (function () {
    function SystemSettingService(http) {
        this.http = http;
    }
    SystemSettingService.prototype.getSystemSetting = function () {
        return this.http.get('system-setting?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    SystemSettingService.prototype.getNotifications = function () {
        return this.http.get('notifications?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    SystemSettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SystemSettingService);
    return SystemSettingService;
}());



/***/ }),

/***/ "./src/app/shared/auth.ts":
/*!********************************!*\
  !*** ./src/app/shared/auth.ts ***!
  \********************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var Auth = /** @class */ (function () {
    function Auth() {
    }
    /**
     * return api token of user
     *
     */
    Auth.getApiToken = function () {
        return _cache__WEBPACK_IMPORTED_MODULE_1__["Cache"].get(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].API_TOKEN_PRFIX);
    };
    /**
     * return user
     *
     */
    Auth.user = function () {
        return _cache__WEBPACK_IMPORTED_MODULE_1__["Cache"].get(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].USER_PRFIX);
    };
    /**
     * remove user object from cache
     */
    Auth.logout = function () {
        _cache__WEBPACK_IMPORTED_MODULE_1__["Cache"].remove(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].API_TOKEN_PRFIX);
        _cache__WEBPACK_IMPORTED_MODULE_1__["Cache"].remove(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].USER_PRFIX);
        return false;
    };
    Auth.canOr = function (permissions) {
        var valid = false;
        permissions.forEach(function (element) {
            if (Auth.can(element))
                valid = Auth.can(element);
        });
        return valid;
    };
    Auth.canAnd = function (permissions) {
        permissions.forEach(function (element) {
            if (!Auth.can(element))
                return false;
        });
    };
    Auth.can = function (permission) {
        if (!Auth.user())
            return false;
        var permissions = Auth.user().permissions;
        if (permissions[permission])
            return true;
        return false;
    };
    /**
     * create canActivate instance from condition
     * @param condition
     */
    Auth.gaurd = function (condition) {
        return new Gaurd(condition);
    };
    return Auth;
}());

var Gaurd = /** @class */ (function () {
    function Gaurd(condition) {
        this.condition = false;
        this.condition = condition;
    }
    Gaurd.prototype.canActivate = function (route, state) {
        return this.condition;
    };
    Gaurd = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], Gaurd);
    return Gaurd;
}());


/***/ }),

/***/ "./src/app/shared/cache.ts":
/*!*********************************!*\
  !*** ./src/app/shared/cache.ts ***!
  \*********************************/
/*! exports provided: Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
var Cache = /** @class */ (function () {
    function Cache() {
    }
    /**
     * store data in locale storage
     *
     * @param key name
     * @param data
     */
    Cache.set = function (key, data) {
        data = JSON.stringify(data);
        localStorage.setItem(Cache.CACHE_KEY + key, data);
    };
    /**
     * remove key with its data from cache
     *
     * @param key
     */
    Cache.remove = function (key) {
        localStorage.removeItem(Cache.CACHE_KEY + key);
    };
    /**
     * get data from cache
     *
     * @param key
     */
    Cache.get = function (key) {
        var data = localStorage.getItem(Cache.CACHE_KEY + key);
        return JSON.parse(data);
    };
    /**
     * check if the cache has value
     *
     * @param key
     */
    Cache.has = function (key) {
        var data = localStorage.getItem(Cache.CACHE_KEY + key);
        return (data != null) ? true : false;
    };
    Cache.CACHE_KEY = 'samsa_';
    return Cache;
}());



/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n  <ol class=\"breadcrumb breadcrumb-custom bg-inverse-primary mb-0\">\r\n    <li *ngFor=\"let item of breadcrumbList; let last = last;\" class=\"breadcrumb-item\">\r\n      <a *ngIf=\"!last\" routerLink=\"{{item.url}}\">{{item['name'] | trans}}</a>\r\n      <span *ngIf=\"last\">{{item['name'] | trans}}</span>\r\n    </li>\r\n  </ol>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BreadcrumbComponent.prototype, "breadcrumbList", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/components/breadcrumb/breadcrumb.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ options.title}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"no()\"><span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<div class=\"modal-body\" [hidden]=\"!withDetails\">\r\n    <div class=\"form-group\">\r\n        <label for=\"details\">Details</label>\r\n        <textarea\r\n            #details=\"ngModel\"\r\n            class=\"form-control\"\r\n            rows=\"4\"\r\n            cols=\"3\"\r\n            name=\"details\"\r\n            id=\"details\"\r\n            title=\"details\"\r\n            required\r\n            ngModel\r\n            tabindex=\"1\"\r\n            [class.u-has-error-v3]=\"!details.valid && details.touched\">\r\n        </textarea>\r\n        <small *ngIf=\"!details.valid && details.touched\" class=\"g-font-weight-300 g-font-size-12 g-color-lightred-v3  g-pt-5\">\r\n            <span>Details is required</span>\r\n        </small>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <p style=\" display: block; width: 100%; margin: 6px 0; font-weight: bold; \">{{ options.message }}</p>\r\n    <button  [hidden]=\"!withDetails\" [disabled]=\"!details.valid\" type=\"button\" class=\"btn btn-danger\" (click)=\"yes(details.value)\">Yes</button>\r\n    <button  [hidden]=\"withDetails\" type=\"button\" class=\"btn btn-danger\" (click)=\"yes(details.value)\">Yes</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"no()\">No</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/confirm.service */ "./src/app/shared/services/confirm.service.ts");



var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(state) {
        this.state = state;
        this.withDetails = false;
        this.options = state.options;
    }
    ConfirmModalComponent.prototype.yes = function (details) {
        this.state.modal.close(details);
    };
    ConfirmModalComponent.prototype.no = function () {
        this.state.modal.dismiss('not confirmed');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfirmModalComponent.prototype, "withDetails", void 0);
    ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/shared/components/confirm-modal/confirm-modal.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_confirm_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmState"]])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/import-excel/import-excel.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/import-excel/import-excel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"importExcelModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content text-center\"  style=\"background-color: #cdffc0;\"  >\n      <div class=\"modal-header w3-border-0\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">{{ \"import excel file\" | trans }}</h4>\n      </div>\n      <div class=\"modal-body w3-border-0\">\n        <button mat-raised-button style=\"border-radius: 5em;\" (click)=\"$(importFile).click()\" >{{ \"upload file\" | trans }}</button>\n        <br>\n        <b *ngIf=\"resource.file\" >{{ resource.file? resource.file.name : '' }}</b>\n        <input type=\"file\" class=\"import_file hidden\" #importFile (change)=\"loadFile($event)\" accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"  >\n\n        <br>\n        <div style=\"max-height: 300px; overflow: auto;\" >\n          <br>\n          <table class=\"table table-bordered\" >\n            <tr *ngFor=\"let row of excelRows index as i\" class=\"{{ i == 0? 'w3-black' : '' }}\" >\n              <td  *ngFor=\"let col of row\" >\n                {{ col }}\n              </td>\n            </tr>\n          </table>\n          <br>\n        </div>\n      </div>\n      <div class=\"modal-footer w3-border-0 text-center w3-center\">\n        <button type=\"button\" mat-raised-button data-dismiss=\"modal\" style=\"margin: 5px\" >{{ \"close\" | trans }}</button>\n        <button type=\"button\"\n        class=\"w3-indigo\"\n        [disabled]=\"isSubmitted\"\n        mat-raised-button\n        (click)=\"sendFile()\"\n        style=\"margin: 5px\" >\n          <span *ngIf=\"!isSubmitted\" >{{ \"send file\" | trans }}</span>\n          <span *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/shared/components/import-excel/import-excel.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/import-excel/import-excel.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ltcG9ydC1leGNlbC9pbXBvcnQtZXhjZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/import-excel/import-excel.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/import-excel/import-excel.component.ts ***!
  \**************************************************************************/
/*! exports provided: ImportExcelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportExcelComponent", function() { return ImportExcelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/shared/services/global.service.ts");





var ImportExcelComponent = /** @class */ (function () {
    function ImportExcelComponent(globalService) {
        this.globalService = globalService;
        this.$ = $;
        this.doc = document;
        this.resource = {};
        this.isSubmitted = false;
        this.excelRows = [];
    }
    ImportExcelComponent.prototype.ngOnInit = function () {
    };
    ImportExcelComponent.prototype.loadFile = function (ev) {
        _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].loadImage(ev, 'file', this.resource);
        this.readExcelFile(this.resource.file);
        console.log(this.resource);
    };
    /**
     * read excel file
     */
    ImportExcelComponent.prototype.readExcelFile = function (file) {
        var self = this;
        this.doc.readXlsxFile(file).then(function (rows) {
            console.log(rows);
            self.excelRows = rows;
        });
    };
    ImportExcelComponent.prototype.sendFile = function () {
        var _this = this;
        this.isSubmitted = true;
        this.globalService.store(this.apiUrl, _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].toFormData(this.resource)).subscribe(function (res) {
            if (res.status == 1) {
                _message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
                _this.isSubmitted = false;
                if (_this.action)
                    _this.action();
            }
            else {
                _message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
            }
            _this.isSubmitted = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImportExcelComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImportExcelComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImportExcelComponent.prototype, "action", void 0);
    ImportExcelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-excel',
            template: __webpack_require__(/*! ./import-excel.component.html */ "./src/app/shared/components/import-excel/import-excel.component.html"),
            styles: [__webpack_require__(/*! ./import-excel.component.scss */ "./src/app/shared/components/import-excel/import-excel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], ImportExcelComponent);
    return ImportExcelComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/load-more/load-more.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/load-more/load-more.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [hidden]=\"isEnabled\" [disabled]=\"isClicked\"  class=\"btn btn-primary btn-user btn-block load-more-btn\">\r\n  <span>Load More </span>\r\n  <img *ngIf=\"isClicked\" src=\"assets/img/preloader-white.svg\">\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/shared/components/load-more/load-more.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/load-more/load-more.component.ts ***!
  \********************************************************************/
/*! exports provided: LoadMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoreComponent", function() { return LoadMoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadMoreComponent = /** @class */ (function () {
    function LoadMoreComponent() {
    }
    LoadMoreComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoadMoreComponent.prototype, "isClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoadMoreComponent.prototype, "isEnabled", void 0);
    LoadMoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-load-more', template: __webpack_require__(/*! ./load-more.component.html */ "./src/app/shared/components/load-more/load-more.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadMoreComponent);
    return LoadMoreComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/main-loader/main-loader.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/main-loader/main-loader.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-main-parent\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div id=\"loader\" style=\"position: relative;\">\r\n        <div class=\"dot\"></div>\r\n        <div class=\"dot\"></div>\r\n        <div class=\"dot\"></div>\r\n        <div class=\"dot\"></div>\r\n        <div class=\"dot\"></div>\r\n        <div class=\"dot\"></div>\r\n        <div class=\"dot\"></div>\r\n        <div class=\"dot\"></div>\r\n        <div class=\"loading\"></div>\r\n      </div>\r\n      <h4>Please Wait</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/main-loader/main-loader.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/main-loader/main-loader.component.ts ***!
  \************************************************************************/
/*! exports provided: MainLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLoaderComponent", function() { return MainLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainLoaderComponent = /** @class */ (function () {
    function MainLoaderComponent() {
    }
    MainLoaderComponent.prototype.ngOnInit = function () {
    };
    MainLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-loader',
            template: __webpack_require__(/*! ./main-loader.component.html */ "./src/app/shared/components/main-loader/main-loader.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainLoaderComponent);
    return MainLoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/no-matching/app-no-matching.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/no-matching/app-no-matching.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"justify-content-center loader-main-parent\">\r\n  <div class=\"col-sm-12 commontop text-center\">\r\n    <div class=\"divider style-1 center\">\r\n      <span class=\"hr-simple left\"></span>\r\n      <i class=\"icofont icofont-ui-press hr-icon\"></i>\r\n      <span class=\"hr-simple right\"></span>\r\n    </div>\r\n    <div class=\"card card-statistics\">\r\n      <div class=\"card-body\">\r\n        <h2>No Data Found</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/no-matching/app-no-matching.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/no-matching/app-no-matching.component.ts ***!
  \****************************************************************************/
/*! exports provided: NoMatchingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoMatchingComponent", function() { return NoMatchingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoMatchingComponent = /** @class */ (function () {
    function NoMatchingComponent() {
    }
    NoMatchingComponent.prototype.ngOnInit = function () {
    };
    NoMatchingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-matching',
            template: __webpack_require__(/*! ./app-no-matching.component.html */ "./src/app/shared/components/no-matching/app-no-matching.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoMatchingComponent);
    return NoMatchingComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/button-clicked-directive.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/directives/button-clicked-directive.directive.ts ***!
  \*************************************************************************/
/*! exports provided: ButtonClickedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonClickedDirective", function() { return ButtonClickedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonClickedDirective = /** @class */ (function () {
    function ButtonClickedDirective(el) {
        this.el = el;
        this.itemClassList = null;
    }
    ButtonClickedDirective.prototype.ngOnChanges = function () {
        if (this.itemClassList === null) {
            this.itemClassList = this.el.nativeElement.querySelector('.fa').classList;
        }
        if (this.loaderState === true) {
            this.el.nativeElement.setAttribute('disabled', true);
            this.itemClassList.add('fa-spin');
        }
        else {
            this.itemClassList.remove('fa-spin');
            this.el.nativeElement.removeAttribute('disabled');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ButtonClickedDirective.prototype, "loaderState", void 0);
    ButtonClickedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appButtonClickedDirective]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ButtonClickedDirective);
    return ButtonClickedDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/permission.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/permission.directive.ts ***!
  \***********************************************************/
/*! exports provided: PermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDirective", function() { return PermissionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");



var PermissionDirective = /** @class */ (function () {
    function PermissionDirective(el) {
        this.el = el;
        var permission = el.nativeElement.getAttribute('permission');
        console.log(permission);
        //console.log(!Auth.can(this.permission));
        if (!_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can(permission))
            el.nativeElement.remove();
    }
    PermissionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[permission]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], PermissionDirective);
    return PermissionDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/tables-loader.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/tables-loader.directive.ts ***!
  \**************************************************************/
/*! exports provided: TablesLoaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesLoaderDirective", function() { return TablesLoaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesLoaderDirective = /** @class */ (function () {
    function TablesLoaderDirective(elementRef) {
        this.elementRef = elementRef;
    }
    TablesLoaderDirective.prototype.ngOnInit = function () {
    };
    TablesLoaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTablesLoader]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TablesLoaderDirective);
    return TablesLoaderDirective;
}());



/***/ }),

/***/ "./src/app/shared/helper.ts":
/*!**********************************!*\
  !*** ./src/app/shared/helper.ts ***!
  \**********************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
/* harmony import */ var _translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translation */ "./src/app/shared/translation.ts");

var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.refreshComponent = function (router, url) {
        router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            router.navigate([url]);
        });
        setTimeout(function () {
            var doc = document;
            doc.jquery('.modal-backdrop fade in').remove();
        }, 1000);
    };
    /**
     * translate word
     *
     * @param word
     */
    Helper.trans = function (word) {
        word = word.replace(/\s/g, '_');
        word = word.toLocaleLowerCase();
        // load translations from cache
        var transWord = _translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].TRANSLATION_DATA[word]; //getTranslationsData()[word];
        if (transWord) {
            return transWord['name_' + _translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].getLang()];
        }
        _translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].storeNewKey(word);
        return word;
    };
    Helper.print = function () {
        var doc = document;
        doc.printJs();
    };
    Helper.setFile = function (event, key, model) {
        model[key] = event.target.files[0];
    };
    /**
     * convert javascript object to formData object
     * @param resource java script object
     * @returns FormData object
     */
    Helper.toFormData = function (resource) {
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(resource); _i < _a.length; _i++) {
            var key = _a[_i];
            if (resource[key])
                data.append(key, resource[key]);
        }
        return data;
    };
    Helper.loadImage = function (event, key, model) {
        Helper.setFile(event, key, model);
        var reader = new FileReader();
        reader.readAsDataURL(model[key]);
        reader.onload = function (_event) {
            model[key + "_url"] = reader.result;
        };
    };
    /**
     * open new window in the browser
     *
     * @param url: String url of the page
     */
    Helper.openWindow = function (url) {
        var options = "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=905,height=484";
        window.open(url, "_blank", options);
    };
    return Helper;
}());



/***/ }),

/***/ "./src/app/shared/helpers/theme.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/helpers/theme.ts ***!
  \*****************************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache */ "./src/app/shared/cache.ts");

var Theme = /** @class */ (function () {
    function Theme() {
    }
    Theme.load = function () {
        var theme = Theme.get();
        Theme.change(theme);
    };
    Theme.get = function () {
        var theme = _cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(Theme.PREFIX);
        if (!theme)
            theme = Theme.DEFAULT;
        return theme;
    };
    Theme.change = function (object) {
        var element = document.getElementById('theme');
        element.innerHTML = '.w3-indigo, .btn-primary, .fixed-nav,.mat-primary { background-color: ' + object.color + '!important; }';
        element.innerHTML += '.w3-text-indigo { color: ' + object.color + '!important; }';
        _cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].set(Theme.PREFIX, object);
    };
    Theme.PREFIX = "THEME";
    Theme.COLORS = [
        { color: '#5c6bc0' },
        { color: '#333' },
        { color: '#009688' },
        { color: '#ff5722' },
        { color: '#29910d' },
        { color: '#795548' },
        { color: '#5f5f5f' },
        { color: '#e91e63' }
    ];
    Theme.DEFAULT = Theme.COLORS[0];
    return Theme;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/Auth.Interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/Auth.Interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = this.auth.getToken();
        if (token) {
            var cloned = req.clone({
                headers: req.headers.set("AuthenticationAdmin", token)
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/error.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(router) {
        this.router = router;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(
        // retry(1),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // server-side error
                if (error.status === 401) {
                    localStorage.removeItem('AdminToken');
                    localStorage.removeItem('AdminEmail');
                    localStorage.removeItem('AdminRole');
                    localStorage.removeItem('AdminName');
                    _this.router.navigate(['/admin/auth/login']);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/interceptors/index.ts ***!
  \**********************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.interceptor */ "./src/app/shared/interceptors/url.interceptor.ts");
/* harmony import */ var _Auth_Interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth.Interceptor */ "./src/app/shared/interceptors/Auth.Interceptor.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/shared/interceptors/error.interceptor.ts");




var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], multi: true, useClass: _url_interceptor__WEBPACK_IMPORTED_MODULE_1__["UrlInterceptor"] },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], multi: true, useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_3__["HttpErrorInterceptor"] },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], multi: true, useClass: _Auth_Interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"] }
];


/***/ }),

/***/ "./src/app/shared/interceptors/url.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/interceptors/url.interceptor.ts ***!
  \********************************************************/
/*! exports provided: UrlInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlInterceptor", function() { return UrlInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var UrlInterceptor = /** @class */ (function () {
    function UrlInterceptor() {
    }
    UrlInterceptor.prototype.intercept = function (req, next) {
        var apiReq = req.clone({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/" + req.url,
            headers: req.headers.set('content_type', 'application/json')
        });
        return next.handle(apiReq);
    };
    UrlInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UrlInterceptor);
    return UrlInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/message.ts":
/*!***********************************!*\
  !*** ./src/app/shared/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.success = function (message) {
        var doc = document;
        doc.playSound('not2');
        doc.swal.success(message);
        //
        //AppModule.doc.observeNotification();
    };
    Message.error = function (message) {
        var doc = document;
        doc.playSound('not2');
        doc.swal.error(message);
        //
        //AppModule.doc.observeNotification();
    };
    Message.confirm = function (message, action) {
        var doc = document;
        doc.swal.confirm(message, action);
    };
    return Message;
}());



/***/ }),

/***/ "./src/app/shared/middlewares/auth-guard.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/middlewares/auth-guard.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        //console.log(route.pathFromRoot + state.url);
        /*if (state.url != 'login') {
          if (!Auth.getApiToken()) {
            this.router.navigate(['/login'], {
              queryParams: {return: state.url}
            }).then().catch();
          }
          return false;
        }*/
        /*if (!Auth.getApiToken()) {
          this.router.navigate(['/login'], {
            queryParams: {return: state.url}
          }).then().catch();
        } */
        if (!_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken()) {
            this.router.navigate(['/login'], {
                queryParams: { return: state.url }
            }).then().catch();
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/middlewares/auth-guest.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/middlewares/auth-guest.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthGuestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuestService", function() { return AuthGuestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthGuestService = /** @class */ (function () {
    function AuthGuestService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuestService.prototype.canActivate = function (route, state) {
        return route.data.can;
    };
    AuthGuestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuestService);
    return AuthGuestService;
}());



/***/ }),

/***/ "./src/app/shared/pipes/replace-underscore-with-space.pipe.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/pipes/replace-underscore-with-space.pipe.ts ***!
  \********************************************************************/
/*! exports provided: ReplaceUnderscoreWithSpacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceUnderscoreWithSpacePipe", function() { return ReplaceUnderscoreWithSpacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReplaceUnderscoreWithSpacePipe = /** @class */ (function () {
    function ReplaceUnderscoreWithSpacePipe() {
    }
    ReplaceUnderscoreWithSpacePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.replace(/_/g, ' ');
    };
    ReplaceUnderscoreWithSpacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ReplaceUnderscoreWithSpace'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReplaceUnderscoreWithSpacePipe);
    return ReplaceUnderscoreWithSpacePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/trans.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/trans.pipe.ts ***!
  \********************************************/
/*! exports provided: TransPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransPipe", function() { return TransPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TransPipe = /** @class */ (function () {
    function TransPipe() {
    }
    TransPipe.prototype.transform = function (value, args) {
        return _helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].trans(value);
    };
    TransPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'trans',
        })
    ], TransPipe);
    return TransPipe;
}());



/***/ }),

/***/ "./src/app/shared/request.ts":
/*!***********************************!*\
  !*** ./src/app/shared/request.ts ***!
  \***********************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
var Request = /** @class */ (function () {
    function Request() {
    }
    /**
     * add to queue
     * @param object {observer: any, action: function()}
     */
    Request.addToQueue = function (object) {
        if (!object.key)
            object.key = new Date().getMilliseconds();
        if (!object.times)
            object.times = 1;
        else
            object.times += 1;
        Request.queue.push(object);
        Request.isFired = true;
    };
    /**
     * start the queue
     *
     */
    Request.fire = function () {
        //if (Request.isFired)
        //  return;
        var object = Request.queue.pop();
        if (object) {
            object.observer.subscribe(function (res) {
                object.action(res);
            }, function (error) {
                console.log("errors : " + error.statusText);
                if (object.times <= 10 || error.status == 429)
                    Request.queue.push(object);
            }, function () {
                console.log("queue size : " + (Request.queue.length) + ", key : " + object.key + ", times : " + object.times);
                Request.fire();
            });
        }
        else {
            Request.isFired = false;
            return;
        }
    };
    Request.queue = [];
    Request.isFired = false;
    return Request;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(route, http) {
        this.route = route;
        this.http = http;
        this.userStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AuthService.prototype.notifySubscribers = function (status) {
        this.userStatus$.next(status);
    };
    AuthService.prototype.login = function (userLogin) {
        return this.http.post('auth/login', userLogin);
    };
    AuthService.prototype.confirmEmail = function (confirmEmail) {
        return this.http.post('auth/confirmEmail', confirmEmail);
    };
    AuthService.prototype.isAuth = function () {
        return localStorage.getItem('AdminToken') !== null;
    };
    AuthService.prototype.logOut = function () {
        this.removeAdminLoalStorage();
    };
    AuthService.prototype.setAdminLoalStorage = function (AdminUser) {
        localStorage.setItem('AdminToken', AdminUser.token);
        localStorage.setItem('AdminEmail', AdminUser.email);
        localStorage.setItem('AdminRole', AdminUser.role);
        localStorage.setItem('AdminName', AdminUser.name);
    };
    AuthService.prototype.removeAdminLoalStorage = function () {
        localStorage.removeItem('AdminToken');
        localStorage.removeItem('AdminEmail');
        localStorage.removeItem('AdminRole');
        localStorage.removeItem('AdminName');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('AdminToken');
    };
    AuthService.USER_PRFIX = 'user';
    AuthService.API_TOKEN_PRFIX = 'api_token';
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/confirm.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/confirm.service.ts ***!
  \****************************************************/
/*! exports provided: ConfirmState, ConfirmService, ConfirmTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmState", function() { return ConfirmState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmService", function() { return ConfirmService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmTemplateDirective", function() { return ConfirmTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



/**
 * An internal service allowing to access, from the confirm modal component, the options and the modal reference.
 * It also allows registering the TemplateRef containing the confirm modal component.
 *
 * It must be declared in the providers of the NgModule, but is not supposed to be used in application code
 */
var ConfirmState = /** @class */ (function () {
    function ConfirmState() {
    }
    ConfirmState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ConfirmState);
    return ConfirmState;
}());

/**
 * A confirmation service, allowing to open a confirmation modal from anywhere and get back a promise.
 */
var ConfirmService = /** @class */ (function () {
    function ConfirmService(modalService, state) {
        this.modalService = modalService;
        this.state = state;
    }
    ConfirmService.prototype.confirm = function (options) {
        this.state.options = options;
        this.state.modal = this.modalService.open(this.state.template, { centered: true });
        return this.state.modal.result;
    };
    ConfirmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], ConfirmState])
    ], ConfirmService);
    return ConfirmService;
}());

var ConfirmTemplateDirective = /** @class */ (function () {
    function ConfirmTemplateDirective(confirmTemplate, state) {
        state.template = confirmTemplate;
    }
    ConfirmTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appConfirm]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], ConfirmState])
    ], ConfirmTemplateDirective);
    return ConfirmTemplateDirective;
}());



/***/ }),

/***/ "./src/app/shared/services/global.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/global.service.ts ***!
  \***************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");




var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
        this.$ = $;
    }
    /**
     * get services from api
     *
     */
    GlobalService.prototype.get = function (url, data) {
        if (data === void 0) { data = {}; }
        return this.http.get(url + '?api_token=' + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken() + "&" + this.$.param(data));
    };
    /**
     * store new service
     */
    GlobalService.prototype.store = function (url, data) {
        return this.http.post(url + '?api_token=' + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    GlobalService.prototype.update = function (url, data) {
        return this.http.post(url + '?api_token=' + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    GlobalService.prototype.destroy = function (url, id) {
        return this.http.post(url + '/' + id + '?api_token=' + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/shared/services/translation.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/translation.service.ts ***!
  \********************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");




var TranslationService = /** @class */ (function () {
    function TranslationService(http) {
        this.http = http;
        this.$ = $;
    }
    /**
     * get services from api
     *
     */
    TranslationService.prototype.getList = function (data) {
        return this.http.get('translation/get?api_token=' + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken() + "&" + this.$.param(data));
    };
    /**
     * get services from api
     *
     */
    TranslationService.prototype.get = function () {
        return this.http.get('translation?api_token=' + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    TranslationService.prototype.update = function (data) {
        return this.http.post('translation/update' + '?api_token=' + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    TranslationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TranslationService);
    return TranslationService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/esm5/ng2-flatpickr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _components_main_loader_main_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main-loader/main-loader.component */ "./src/app/shared/components/main-loader/main-loader.component.ts");
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/confirm.service */ "./src/app/shared/services/confirm.service.ts");
/* harmony import */ var _directives_tables_loader_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/tables-loader.directive */ "./src/app/shared/directives/tables-loader.directive.ts");
/* harmony import */ var _components_no_matching_app_no_matching_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/no-matching/app-no-matching.component */ "./src/app/shared/components/no-matching/app-no-matching.component.ts");
/* harmony import */ var _directives_button_clicked_directive_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/button-clicked-directive.directive */ "./src/app/shared/directives/button-clicked-directive.directive.ts");
/* harmony import */ var _components_load_more_load_more_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/load-more/load-more.component */ "./src/app/shared/components/load-more/load-more.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _pipes_replace_underscore_with_space_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/replace-underscore-with-space.pipe */ "./src/app/shared/pipes/replace-underscore-with-space.pipe.ts");
/* harmony import */ var _pipes_trans_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/trans.pipe */ "./src/app/shared/pipes/trans.pipe.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _directives_permission_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/permission.directive */ "./src/app/shared/directives/permission.directive.ts");
/* harmony import */ var _components_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/import-excel/import-excel.component */ "./src/app/shared/components/import-excel/import-excel.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"],
                _services_confirm_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmTemplateDirective"],
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalComponent"],
                _directives_tables_loader_directive__WEBPACK_IMPORTED_MODULE_13__["TablesLoaderDirective"],
                _components_load_more_load_more_component__WEBPACK_IMPORTED_MODULE_16__["LoadMoreComponent"],
                _pipes_replace_underscore_with_space_pipe__WEBPACK_IMPORTED_MODULE_18__["ReplaceUnderscoreWithSpacePipe"],
                _components_no_matching_app_no_matching_component__WEBPACK_IMPORTED_MODULE_14__["NoMatchingComponent"],
                _directives_button_clicked_directive_directive__WEBPACK_IMPORTED_MODULE_15__["ButtonClickedDirective"],
                _components_main_loader_main_loader_component__WEBPACK_IMPORTED_MODULE_11__["MainLoaderComponent"],
                _pipes_trans_pipe__WEBPACK_IMPORTED_MODULE_19__["TransPipe"],
                _directives_permission_directive__WEBPACK_IMPORTED_MODULE_21__["PermissionDirective"],
                _components_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_22__["ImportExcelComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_20__["DataTablesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng2_flatpickr__WEBPACK_IMPORTED_MODULE_7__["Ng2FlatpickrModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_1__["AngularFontAwesomeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _components_no_matching_app_no_matching_component__WEBPACK_IMPORTED_MODULE_14__["NoMatchingComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _directives_button_clicked_directive_directive__WEBPACK_IMPORTED_MODULE_15__["ButtonClickedDirective"],
                _components_load_more_load_more_component__WEBPACK_IMPORTED_MODULE_16__["LoadMoreComponent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ng2_flatpickr__WEBPACK_IMPORTED_MODULE_7__["Ng2FlatpickrModule"],
                _directives_tables_loader_directive__WEBPACK_IMPORTED_MODULE_13__["TablesLoaderDirective"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"],
                _services_confirm_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmTemplateDirective"],
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalComponent"],
                _components_main_loader_main_loader_component__WEBPACK_IMPORTED_MODULE_11__["MainLoaderComponent"],
                _pipes_replace_underscore_with_space_pipe__WEBPACK_IMPORTED_MODULE_18__["ReplaceUnderscoreWithSpacePipe"],
                _pipes_trans_pipe__WEBPACK_IMPORTED_MODULE_19__["TransPipe"],
                _directives_permission_directive__WEBPACK_IMPORTED_MODULE_21__["PermissionDirective"],
                _components_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_22__["ImportExcelComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/translation.ts":
/*!***************************************!*\
  !*** ./src/app/shared/translation.ts ***!
  \***************************************/
/*! exports provided: Translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return Translation; });
/* harmony import */ var src_app_shared_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/cache */ "./src/app/shared/cache.ts");

var Translation = /** @class */ (function () {
    function Translation() {
    }
    /**
     * return application current language
     */
    Translation.getLang = function () {
        return 'ar';
    };
    Translation.getTranslationsData = function () {
        var data = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(Translation.TRANSLATION_CACHE_KEY);
        if (data)
            return data;
        else
            return {};
    };
    Translation.storeNewKey = function (key) {
        var data = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY);
        if (data) {
            data.push({
                key: key,
                name_ar: key,
                name_en: key
            });
        }
        else {
            data = [
                { key: key, name_ar: key, name_en: key }
            ];
        }
        // update translation cache
        src_app_shared_cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].set(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY, data);
    };
    Translation.getNewKeys = function () {
        return src_app_shared_cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY);
    };
    Translation.TRANSLATION_DATA = {};
    Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY = 'translations_not_exists';
    Translation.TRANSLATION_CACHE_KEY = 'translations';
    return Translation;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n\r\n          <!-- Profile Image -->\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-body box-profile\">\r\n              <img class=\"profile-user-img img-responsive img-circle\" [src]=\"user.image_url\" alt=\"User profile picture\">\r\n\r\n              <h3 class=\"profile-username text-center\">{{ user.name }}</h3>\r\n\r\n              \r\n              <p class=\"text-muted text-center\">{{ user.role_id }}</p>\r\n \r\n              <ul class=\"list-group list-group-unbordered\">  \r\n                <li class=\"list-group-item w3-display-container\">\r\n                  <b class=\"\">\r\n                      <input \r\n                      type=\"file\"\r\n                      (change)=\"viewPersonalImage($event)\" \r\n                      accept=\"image/x-png,image/gif,image/jpeg\"  >\r\n                    </b> \r\n                    <a class=\"w3-display-topleft\">  \r\n                        <button mat-icon-button color=\"warn\" [disabled]=\"changeSettingLoad\" (click)=\"chanageProfileImage()\" >\r\n                            <i *ngIf=\"!changeSettingLoad\" class=\"fa fa-send-o\" > </i>\r\n                            <i *ngIf=\"changeSettingLoad\" class=\"fa fa-spin fa-spinner\" ></i>\r\n                          </button>   \r\n                    </a>\r\n                </li>  \r\n\r\n              </ul>\r\n\r\n              <a href=\"#\" class=\"btn btn-primary btn-block hidden\"><b>Follow</b></a>\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n \r\n          <!-- About Me Box -->\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">{{ \"personal info\" | trans }}</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n              <strong><i class=\"fa fa-book margin-r-5\"></i> {{ \"name\" | trans }}</strong> \r\n              <p class=\"text-muted\">\r\n                {{ user.name }}\r\n              </p>\r\n\r\n              <hr>\r\n \r\n              <strong><i class=\"fa fa-envelope margin-r-5\"></i> {{ \"email\" | trans  }}</strong> \r\n              <p class=\"text-muted\">\r\n                <a [href]=\"'mailto:' + user.email\">{{ user.email }}</a>  \r\n              </p>\r\n\r\n              <hr>\r\n               \r\n              <strong><i class=\"fa fa-book margin-r-5\"></i> {{ \"username\" | trans }}</strong> \r\n              <p class=\"text-muted\">\r\n                {{ user.username }}\r\n              </p>\r\n\r\n              <hr>\r\n               \r\n              <strong><i class=\"fa fa-book margin-r-5\"></i> {{ \"phone\" | trans }}</strong> \r\n              <p class=\"text-muted\">\r\n                {{ user.phone }}\r\n              </p>\r\n\r\n              <hr>\r\n\r\n\r\n              \r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.col -->\r\n        <div class=\"col-md-9\">\r\n\r\n          <div class=\"nav-tabs-custom\">\r\n            <ul class=\"nav nav-tabs\">\r\n              <li class=\"active\"><a href=\"#activity\" data-toggle=\"tab\">{{ \"Activities\" | trans }}</a></li>\r\n              <li class=\"\" ><a href=\"#loginHistory\" data-toggle=\"tab\">{{ \"login history\" | trans }}</a></li> \r\n              <li><a href=\"#timeline\" data-toggle=\"tab\">{{ \"setting\" | trans }}</a></li> \r\n               \r\n              <li><a href=\"#password\" data-toggle=\"tab\">{{ \"change password\" | trans }}</a></li>   \r\n            </ul>\r\n            <div class=\"tab-content\">\r\n              <div class=\"active tab-pane\" id=\"activity\"> \r\n                <!-- The timeline -->\r\n             <ul class=\"timeline timeline-inverse\">\r\n               <!-- timeline time label -->\r\n               \r\n                \r\n               <ng-container *ngFor=\"let item of profile.notifications\" > \r\n                <li class=\"time-label text-left\">\r\n                      <span class=\"bg-red\">\r\n                        {{ item.created_at | date: 'yyyy/m/d' }}\r\n                      </span>\r\n                </li> \r\n                <!-- timeline item -->\r\n                <li>\r\n                  <i class=\"{{ item.icon }}\"></i>\r\n \r\n                  <div class=\"timeline-item\">\r\n                    <span class=\"time\"><i class=\"fa fa-clock-o\"></i> {{ item.created_at | date: 'yyyy/m/d' }}</span>\r\n \r\n                    <h3 class=\"timeline-header\"><a href=\"#\">{{ item.title }}</a></h3>\r\n \r\n                    <div class=\"timeline-body\">\r\n                     {{ item.body }}\r\n                    </div> \r\n                  </div>\r\n                </li>\r\n                \r\n                   \r\n               </ng-container>\r\n                \r\n              \r\n             </ul>\r\n              </div> \r\n              <!-- /.tab-pane -->\r\n\r\n              \r\n          <div class=\"tab-pane  w3-white\" id=\"loginHistory\"> \r\n              <input class=\"form-control input-sm\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"{{ 'search' | trans }}\"> \r\n                \r\n              <table mat-table [dataSource]=\"dataSource\" matSort  class=\"\">\r\n      \r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"created_at\"  >\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"datetime\" | trans }}</th>\r\n                    <td mat-cell *matCellDef=\"let element\"> \r\n                       <span class=\"w3-margin-right\">\r\n                          {{element.created_at | date:'yyyy/m/d h:i:s'}} \r\n                      </span>\r\n                    </td>\r\n                  </ng-container>\r\n                    \r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"ip\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"ip\" | trans }}</th>\r\n                      <td mat-cell *matCellDef=\"let element\">  \r\n                        {{element.ip}} \r\n                      </td>\r\n                 </ng-container>\r\n                   \r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"phone_details\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"phone_details\" | trans }}</th>\r\n                      <td mat-cell *matCellDef=\"let element\">  \r\n                        <div [innerHTML]=\"element.phone_details\" > </div> \r\n                      </td>\r\n                 </ng-container>\r\n                  \r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  \r\n            </div>\r\n \r\n            <div class=\"tab-pane\" id=\"password\">\r\n                <!-- The timeline -->   \r\n                    <div class=\"form-group has-feedback\">\r\n                        <label>{{ 'old password' | trans }}</label>\r\n                        <input required=\"\" type=\"password\" name=\"old_password\" [(ngModel)]=\"passwords.old_password\" autocomplete=\"off\"  class=\"form-control\" placeholder=\"{{ 'password' | trans }}\">\r\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                        <label>{{ 'new password' | trans }}</label>\r\n                        <input required=\"\" type=\"password\" name=\"new_password\" [(ngModel)]=\"passwords.new_password\"  autocomplete=\"off\" class=\"form-control\" placeholder=\"{{ 'confirm password' | trans }}\">\r\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                        <label>{{ 'confirm password' | trans }}</label>\r\n                        <input required=\"\" type=\"password\" name=\"confirm_password\" [(ngModel)]=\"passwords.confirm_password\"   autocomplete=\"off\" class=\"form-control\" placeholder=\"{{ 'confirm password' | trans }}\">\r\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"\">\r\n                        <!-- /.col -->\r\n                        <div class=\"form-group\">\r\n                            <button mat-raised-button color=\"primary\" [disabled]=\"changePasswordLoad\" (click)=\"changePassword()\" >\r\n                              <i *ngIf=\"!changePasswordLoad\">{{ 'submit' | trans }}</i>\r\n                              <i *ngIf=\"changePasswordLoad\" class=\"fa fa-spin fa-spinner\" ></i>\r\n                            </button> \r\n                        </div>\r\n                        <!-- /.col -->\r\n                    </div> \r\n              </div>\r\n\r\n              <div class=\"tab-pane\" id=\"timeline\">\r\n                  <!-- The timeline --> \r\n                    \r\n                      <div class=\"form-group has-feedback\">\r\n                          <label>{{ 'name' | trans }}</label>\r\n                          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" placeholder=\"{{ 'name' | trans }}\"> \r\n                      </div>   \r\n                    \r\n                      <div class=\"form-group has-feedback\">\r\n                          <label>{{ 'phone' | trans }}</label>\r\n                          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.phone\" placeholder=\"{{ 'name' | trans }}\"> \r\n                      </div>   \r\n                        \r\n                      <br>\r\n                      <div class=\"\">\r\n                          <!-- /.col -->\r\n                        <div class=\"form-group\">\r\n                            <button mat-raised-button color=\"primary\" [disabled]=\"changeSettingLoad\" (click)=\"chanageProfile()\" >\r\n                              <i *ngIf=\"!changeSettingLoad\">{{ 'submit' | trans }}</i>\r\n                              <i *ngIf=\"changeSettingLoad\" class=\"fa fa-spin fa-spinner\" ></i>\r\n                            </button> \r\n                        </div>\r\n                          <!-- /.col -->\r\n                      </div> \r\n                </div>\r\n                <!-- /.tab-pane -->\r\n   \r\n\r\n\r\n            </div>\r\n            <!-- /.tab-content -->\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <!-- /.nav-tabs-custom -->\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\nth {\n  font-size: 14px;\n  font-weight: bold;\n  color: black; }\n\n.mat-elevation-z8 {\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL0U6XFxwcm9qZWN0XFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFx1c2VyLXByb2ZpbGVcXHVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVksRUFBQTs7QUFJZDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG5cclxuICB0aCB7IFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAubWF0LWVsZXZhdGlvbi16OCB7IFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.service */ "./src/app/user-profile/user-profile.service.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");









var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(service) {
        this.service = service;
        this.profile = {};
        this.login_historyies = [];
        this.user = {};
        this.passwords = {};
        this.changePasswordLoad = false;
        this.changeSettingLoad = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.login_historyies);
        this.initDisplayColumns();
    }
    UserProfileComponent.prototype.init = function () {
        this.initMatDatatable();
        this.user = _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].user();
        this.loadProfile();
    };
    UserProfileComponent.prototype.initDisplayColumns = function () {
        this.displayedColumns = [
            "created_at", "ip", "phone_details"
        ];
    };
    UserProfileComponent.prototype.loadProfile = function () {
        var _this = this;
        this.service.getProfile().subscribe(function (res) {
            _this.profile = res;
            _this.user = res.user;
            _this.login_historyies = res.loginHistory;
            _this.dataSource.data = res.loginHistory;
        });
    };
    UserProfileComponent.prototype.changePassword = function () {
        var _this = this;
        if (!this.passwords.old_password || !this.passwords.new_password)
            return _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('fill all data'));
        if (this.passwords.new_password != this.passwords.confirm_password)
            return _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('passwords not match'));
        this.changePasswordLoad = true;
        this.service.updatePassword(this.passwords).subscribe(function (res) {
            if (res.status == 1)
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(res.message);
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(res.message);
            _this.changePasswordLoad = false;
        });
    };
    UserProfileComponent.prototype.chanageProfile = function () {
        var _this = this;
        this.changeSettingLoad = true;
        this.service.updateProfile(this.user).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(res.message);
                _shared_cache__WEBPACK_IMPORTED_MODULE_7__["Cache"].set(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"].USER_PRFIX, res.data);
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(res.message);
            _this.changeSettingLoad = false;
        });
    };
    UserProfileComponent.prototype.chanageProfileImage = function () {
        var _this = this;
        this.changeSettingLoad = true;
        var data = new FormData();
        data.append('image', this.user.image);
        this.service.updateProfileImage(data).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(res.message);
                _shared_cache__WEBPACK_IMPORTED_MODULE_7__["Cache"].set(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"].USER_PRFIX, res.data);
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(res.message);
            _this.changeSettingLoad = false;
        });
    };
    UserProfileComponent.prototype.initMatDatatable = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    UserProfileComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    UserProfileComponent.prototype.setFile = function (event, key) {
        this.user[key] = event.target.files[0];
    };
    UserProfileComponent.prototype.viewPersonalImage = function (event) {
        var _this = this;
        this.setFile(event, 'image');
        var reader = new FileReader();
        reader.readAsDataURL(this.user.image);
        reader.onload = function (_event) {
            _this.user.image_url = reader.result;
        };
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        this.init();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], UserProfileComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], UserProfileComponent.prototype, "sort", void 0);
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/user-profile/user-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.service.ts":
/*!******************************************************!*\
  !*** ./src/app/user-profile/user-profile.service.ts ***!
  \******************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");




var UserProfileService = /** @class */ (function () {
    function UserProfileService(http) {
        this.http = http;
    }
    UserProfileService.prototype.getProfile = function () {
        return this.http.get("profile?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    UserProfileService.prototype.updateProfile = function (data) {
        data.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken();
        return this.http.post("profile/update", data);
    };
    UserProfileService.prototype.updateProfileImage = function (data) {
        data.append('api_token', _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
        return this.http.post("profile/update", data);
    };
    UserProfileService.prototype.updatePassword = function (data) {
        data.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken();
        return this.http.post("profile/update-password", data);
    };
    UserProfileService.prototype.updatePhone = function (data) {
        data.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken();
        return this.http.post("profile/update-phone", data);
    };
    UserProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserProfileService);
    return UserProfileService;
}());



/***/ }),

/***/ "./src/app/user/services/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/services/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    RoleService.prototype.permissions = function () {
        return this.http.get('permissions?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * get services from api
     *
     */
    RoleService.prototype.groups = function () {
        return this.http.get('permission_groups?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * update permission new service
     */
    RoleService.prototype.updatePermission = function (id, data) {
        return this.http.post('roles/permission/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * get services from api
     *
     */
    RoleService.prototype.get = function () {
        return this.http.get('roles?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    RoleService.prototype.store = function (data) {
        return this.http.post('roles/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    RoleService.prototype.update = function (id, data) {
        return this.http.post('roles/update/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    RoleService.prototype.destroy = function (id) {
        return this.http.post('roles/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/user/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    UserService.prototype.get = function () {
        return this.http.get('users?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    UserService.prototype.store = function (data) {
        return this.http.post('users/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    UserService.prototype.update = function (id, data) {
        return this.http.post('users/update/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    UserService.prototype.destroy = function (id) {
        return this.http.post('users/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    // apiUrl      : 'http://41.41.86.210:4000/admin/api',
    // backEndPublicUrl   : 'http://41.41.86.210:4000/',
    publicUrl: 'http://' + window.location.hostname + '/samsa-backend/public',
    // https://samsav2.sphinxws.com/public
    // http://127.0.0.1:8000
    // http://localhost/samsa-backend/public
    // window.location.hostname
    //192.168.43.159
    apiUrl: 'http://' + '192.168.43.159' + '/samsa-backend/public/api',
    backEndPublicUrl: 'http://localhost:4000/',
    googleApiKey: 'AIzaSyAtCTUfmq6JOFrE9Ib_HPEPFhUE9VdwcEs',
    frontEndPublicUrl: 'http://127.0.0.1:4200/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\project\samsaFrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map