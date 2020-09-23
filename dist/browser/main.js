(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./academic-year/academic-year.module": [
		"./src/app/settings/academic-year/academic-year.module.ts",
		"common",
		"academic-year-academic-year-module"
	],
	"./account/account.module": [
		"./src/app/account/account.module.ts",
		"common",
		"account-account-module"
	],
	"./adminision/adminision.module": [
		"./src/app/adminision/adminision.module.ts",
		"common",
		"adminision-adminision-module"
	],
	"./area/area.module": [
		"./src/app/military/area/area.module.ts",
		"common",
		"area-area-module"
	],
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"common",
		"auth-auth-module"
	],
	"./city/city.module": [
		"./src/app/settings/city/city.module.ts",
		"common",
		"city-city-module"
	],
	"./country/country.module": [
		"./src/app/settings/country/country.module.ts",
		"common",
		"country-country-module"
	],
	"./government/government.module": [
		"./src/app/settings/government/government.module.ts",
		"common",
		"government-government-module"
	],
	"./military/military.module": [
		"./src/app/military/military.module.ts",
		"military-military-module"
	],
	"./qualification-types/qualification-types.module": [
		"./src/app/settings/qualification-types/qualification-types.module.ts",
		"common",
		"qualification-types-qualification-types-module"
	],
	"./qualification/qualification.module": [
		"./src/app/settings/qualification/qualification.module.ts",
		"qualification-qualification-module"
	],
	"./registeration-methods/registeration-methods.module": [
		"./src/app/settings/registeration-methods/registeration-methods.module.ts",
		"registeration-methods-registeration-methods-module"
	],
	"./settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"common",
		"settings-settings-module"
	],
	"./student/student.module": [
		"./src/app/student/student.module.ts",
		"common",
		"student-student-module"
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
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var ApplicationSettingService = /** @class */ (function () {
    function ApplicationSettingService(http) {
        this.http = http;
        //
    }
    ApplicationSettingService_1 = ApplicationSettingService;
    ApplicationSettingService.prototype.loadSettings = function () {
        this.getCaseConstraints().subscribe(function (r) { ApplicationSettingService_1.CASE_CONSTRAINTS = r; });
        this.getNationalities().subscribe(function (r) { ApplicationSettingService_1.NATIONALITIES = r; });
        this.getAcademicYears().subscribe(function (r) { ApplicationSettingService_1.ACADEMIC_YEARS = r; });
        this.getQualificationTypes().subscribe(function (r) { ApplicationSettingService_1.QUALIFICATION_TYPES = r; });
        this.getQualifications().subscribe(function (r) { ApplicationSettingService_1.QUALIFICATIONS = r; });
        this.getRegisterationStatus().subscribe(function (r) { ApplicationSettingService_1.REGISTERATION_STATUS = r; });
        this.getRegisterationMethods().subscribe(function (r) { ApplicationSettingService_1.REGISTERATION_METHODS = r; });
        this.getLanguages().subscribe(function (r) { ApplicationSettingService_1.LANGUAGES = r; });
        this.getCities().subscribe(function (r) { ApplicationSettingService_1.CITIES = r; });
        this.getGovernments().subscribe(function (r) { ApplicationSettingService_1.GOVERNMENTS = r; });
        this.getCountries().subscribe(function (r) { ApplicationSettingService_1.COUNTRIES = r; });
        this.getMilitaryStatus().subscribe(function (r) { ApplicationSettingService_1.MILITARY_STATUS = r; });
        this.getMilitaryAreas().subscribe(function (r) { ApplicationSettingService_1.MILITARY_AREAS = r; });
        this.getParentJobs().subscribe(function (r) { ApplicationSettingService_1.PARENT_JOBS = r; });
        this.getRelativeRelations().subscribe(function (r) { ApplicationSettingService_1.RELATIVE_RELATIONS = r; });
        this.getRequiredDocuments().subscribe(function (r) { ApplicationSettingService_1.REQUIRED_DOCUMENTS = r; });
        this.getDepartments().subscribe(function (r) { ApplicationSettingService_1.DEPARTMENTS = r; });
    };
    ApplicationSettingService.prototype.getDepartments = function () {
        return this.http.get('adminision/get_departments?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getRequiredDocuments = function () {
        return this.http.get('adminision/required_documents?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getCaseConstraints = function () {
        return this.http.get('adminision/get_case_constraints?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getRelativeRelations = function () {
        return this.http.get('adminision/get_relative_relations?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getNationalities = function () {
        return this.http.get('adminision/get_nationality?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getAcademicYears = function () {
        return this.http.get('adminision/get_academic_years?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getQualificationTypes = function () {
        return this.http.get('adminision/get_qualification_types?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getQualifications = function () {
        return this.http.get('adminision/get_qualifications?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getRegisterationStatus = function () {
        return this.http.get('adminision/get_registeration_status?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getRegisterationMethods = function () {
        return this.http.get('adminision/get_registration_methods?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getLanguages = function () {
        return this.http.get('adminision/get_languages?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getCities = function () {
        return this.http.get('adminision/get_cities?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getGovernments = function () {
        return this.http.get('adminision/get_governments?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getCountries = function () {
        return this.http.get('adminision/get_countries?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getMilitaryStatus = function () {
        return this.http.get('adminision/get_military_status?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getMilitaryAreas = function () {
        return this.http.get('adminision/get_military_areas?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ApplicationSettingService.prototype.getParentJobs = function () {
        return this.http.get('adminision/get_parent_jobs?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
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
    ApplicationSettingService = ApplicationSettingService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _shared_translation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/translation */ "./src/app/shared/translation.ts");
/* harmony import */ var _account_services_level_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var _account_services_division_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./account/services/division.service */ "./src/app/account/services/division.service.ts");
/* harmony import */ var _account_services_term_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./account/services/term.service */ "./src/app/account/services/term.service.ts");
/* harmony import */ var _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");






















var AppModule = /** @class */ (function () {
    function AppModule(translationService, levelService, termService, divisionService, applicationSettingService) {
        this.translationService = translationService;
        this.levelService = levelService;
        this.termService = termService;
        this.divisionService = divisionService;
        this.applicationSettingService = applicationSettingService;
        this.init();
    }
    AppModule.prototype.init = function () {
        // load the translations words
        this.loadTranslations();
        this.loadLevels();
        this.loadDivisions();
        this.loadTerms();
        this.applicationSettingService.loadSettings();
    };
    /**
     * load translations and update the cache
     */
    AppModule.prototype.loadTranslations = function () {
        this.translationService.get().subscribe(function (r) {
            _shared_cache__WEBPACK_IMPORTED_MODULE_16__["Cache"].set(_shared_translation__WEBPACK_IMPORTED_MODULE_17__["Translation"].TRANSLATION_CACHE_KEY, r);
        });
    };
    /**
     * load levels and update the cache
     */
    AppModule.prototype.loadLevels = function () {
        this.levelService.get().subscribe(function (r) {
            _shared_cache__WEBPACK_IMPORTED_MODULE_16__["Cache"].set(_account_services_level_service__WEBPACK_IMPORTED_MODULE_18__["LevelService"].LEVEL_PREFIX, r);
        });
    };
    /**
     * load divisions and update the cache
     */
    AppModule.prototype.loadDivisions = function () {
        this.divisionService.get().subscribe(function (r) {
            _shared_cache__WEBPACK_IMPORTED_MODULE_16__["Cache"].set(_account_services_division_service__WEBPACK_IMPORTED_MODULE_19__["DivisionService"].DIVISION_PREFIX, r);
        });
    };
    /**
     * load terms and update the cache
     */
    AppModule.prototype.loadTerms = function () {
        this.termService.get().subscribe(function (r) {
            _shared_cache__WEBPACK_IMPORTED_MODULE_16__["Cache"].set(_account_services_term_service__WEBPACK_IMPORTED_MODULE_20__["TermService"].TERPM_PREFIX, r);
        });
    };
    AppModule.doc = document;
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _core_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
                _core_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                _core_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
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
            ],
            providers: [
                _shared_interceptors__WEBPACK_IMPORTED_MODULE_3__["httpInterceptorProviders"],
                _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_21__["ApplicationSettingService"],
                _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_15__["TranslationService"],
                _account_services_level_service__WEBPACK_IMPORTED_MODULE_18__["LevelService"],
                _account_services_division_service__WEBPACK_IMPORTED_MODULE_19__["DivisionService"],
                _account_services_term_service__WEBPACK_IMPORTED_MODULE_20__["TermService"],
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuestService"]
            ],
            bootstrap: [_core_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_translation_service__WEBPACK_IMPORTED_MODULE_15__["TranslationService"],
            _account_services_level_service__WEBPACK_IMPORTED_MODULE_18__["LevelService"],
            _account_services_term_service__WEBPACK_IMPORTED_MODULE_20__["TermService"],
            _account_services_division_service__WEBPACK_IMPORTED_MODULE_19__["DivisionService"],
            _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_21__["ApplicationSettingService"]])
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

/***/ "./src/app/core/components/navbar/nav-bar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/components/navbar/nav-bar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <nav class=\"navbar navbar-static-top\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\"><img src=\"../../../../assets/img/logo.png\" width=\"40px\" ></a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n\r\n          <li class=\"dropdown active\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"applications_section\" | trans }} <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\" role=\"menu\">\r\n              <li><a href=\"#\" routerLink=\"/adminision/application\" >{{ \"applications\" | trans }}</a></li>\r\n              <li class=\"divider\"></li>\r\n              <li><a href=\"#\" routerLink=\"/adminision/settings\" >{{ \"settings\" | trans }}</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"active\">\r\n            <a routerLink=\"/student\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"student\" | trans }}</a>\r\n          </li>\r\n          <li class=\"dropdown active\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"account\" | trans }} <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\" role=\"menu\">\r\n              <li><a href=\"#\" routerLink=\"/account/safe\" >{{ \"stores\" | trans }}</a></li>\r\n              <li class=\"divider\"></li>\r\n              <li><a href=\"#\" routerLink=\"/account/setting\" >{{ \"settings\" | trans }}</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"active\">\r\n            <a routerLink=\"/settings\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"main_settings\" | trans }} <span class=\"caret\"></span></a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <a routerLink=\"/military\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ \"military\" | trans }} <span class=\"caret\"></span></a>\r\n          </li>\r\n\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\" style=\"float: left!important\" >\r\n          <!-- Messages: style can be found in dropdown.less-->\r\n          <li class=\"dropdown messages-menu\">\r\n            <!-- Menu toggle button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-envelope-o\"></i>\r\n              <span class=\"label label-success\">4</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"header\">You have 4 messages</li>\r\n              <li>\r\n                <!-- inner menu: contains the messages -->\r\n                <ul class=\"menu\">\r\n                  <li><!-- start message -->\r\n                    <a href=\"#\">\r\n                      <div class=\"pull-left\">\r\n                        <!-- User Image -->\r\n                        <img src=\"../../../../assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                      </div>\r\n                      <!-- Message title and timestamp -->\r\n                      <h4>\r\n                        Support Team\r\n                        <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\r\n                      </h4>\r\n                      <!-- The message -->\r\n                      <p>Why not buy a new awesome theme?</p>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end message -->\r\n                </ul>\r\n                <!-- /.menu -->\r\n              </li>\r\n              <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\r\n            </ul>\r\n          </li>\r\n          <!-- /.messages-menu -->\r\n\r\n          <!-- Notifications Menu -->\r\n          <li class=\"dropdown notifications-menu\">\r\n            <!-- Menu toggle button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-bell-o\"></i>\r\n              <span class=\"label label-warning\">10</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"header\">You have 10 notifications</li>\r\n              <li>\r\n                <!-- Inner Menu: contains the notifications -->\r\n                <ul class=\"menu\">\r\n                  <li><!-- start notification -->\r\n                    <a href=\"#\">\r\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\r\n                    </a>\r\n                  </li>\r\n                  <!-- end notification -->\r\n                </ul>\r\n              </li>\r\n              <li class=\"footer\"><a href=\"#\">View all</a></li>\r\n            </ul>\r\n          </li>\r\n          <!-- Tasks Menu -->\r\n          <li class=\"dropdown tasks-menu\">\r\n            <!-- Menu Toggle Button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-flag-o\"></i>\r\n              <span class=\"label label-danger\">9</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"header\">You have 9 tasks</li>\r\n              <li>\r\n                <!-- Inner menu: contains the tasks -->\r\n                <ul class=\"menu\">\r\n                  <li><!-- Task item -->\r\n                    <a href=\"#\">\r\n                      <!-- Task title and progress text -->\r\n                      <h3>\r\n                        Design some buttons\r\n                        <small class=\"pull-right\">20%</small>\r\n                      </h3>\r\n                      <!-- The progress bar -->\r\n                      <div class=\"progress xs\">\r\n                        <!-- Change the css width attribute to simulate progress -->\r\n                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                          <span class=\"sr-only\">20% Complete</span>\r\n                        </div>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end task item -->\r\n                </ul>\r\n              </li>\r\n              <li class=\"footer\">\r\n                <a href=\"#\">View all tasks</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- User Account Menu -->\r\n          <li class=\"dropdown user user-menu\">\r\n            <!-- Menu Toggle Button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <!-- The user image in the navbar-->\r\n              <!-- <img [src]=\"user.image_url\" class=\"user-image\" alt=\"User Image\"> -->\r\n              <!-- hidden-xs hides the username on small devices so only the image appears. -->\r\n              <span class=\"hidden-xs\">Alexander Pierce</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <!-- The user image in the menu -->\r\n              <li class=\"user-header\">\r\n                <!-- <img [src]=\"user.image_url\" class=\"img-circle\" alt=\"User Image\"> -->\r\n\r\n                <!-- <p>\r\n                  {{ user.name }}\r\n                  <small>{{ user.phone }}</small>\r\n                </p> -->\r\n              </li>\r\n              \r\n              <!-- Menu Footer-->\r\n              <li class=\"user-footer\">\r\n                <div class=\"pull-left\">\r\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">{{ \"Profile\" | trans }}</a>\r\n                </div>\r\n                <div class=\"pull-right\">\r\n                  <a href=\"#\" class=\"btn btn-default btn-flat\" (click)=\"logout()\" >{{ \"Sign out\" | trans }}</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n\r\n</header>\r\n<!-- Full Width Column -->\r\n"

/***/ }),

/***/ "./src/app/core/components/navbar/nav-bar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/components/navbar/nav-bar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uYXZiYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJ9 */"

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






var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(config, authService, router) {
        this.authService = authService;
        this.router = router;
        this.sidebarOpened = false;
        this.user = _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].user();
        config.placement = 'bottom-right';
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logout = function () {
        _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].logout();
        this.router.navigate(['/login']).then().catch();
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/core/components/navbar/nav-bar.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/core/components/navbar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"]
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

module.exports = "<div class=\"wrapper\">\r\n\r\n  <app-nav-bar></app-nav-bar>\r\n\r\n  <!-- Full Width Column -->\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n      <!-- breadcrumb -->\r\n\r\n\r\n      <!-- Main content -->\r\n      <section class=\"content\">\r\n        <router-outlet></router-outlet>\r\n      </section>\r\n      <!-- /.content -->\r\n    </div>\r\n    <!-- /.container -->\r\n  </div>\r\n  <!-- /.content-wrapper -->\r\n  <footer class=\"footer\">\r\n       <div class=\"w3- font\">\r\n          <a href=\"http://www.sphinxat.com\" target=\"_blank\" class=\"footer\">\r\n                   جميع الحقوق محفوظه لدى شركة سفنكس للتكنولوجيا المتقدمه 01000122247\r\n          </a>\r\n      </div>\r\n  </footer>\r\n  \r\n</div>\r\n<!-- ./wrapper -->\r\n"

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





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(document, router) {
        this.document = document;
        this.router = router;
    }
    LayoutComponent.prototype.ngAfterViewChecked = function () {
        setTimeout(function () {
            // this.document.getElementById('start-loader').remove();
        }, 1500);
    };
    LayoutComponent.prototype.watchUser = function () {
        console.log(_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
        if (!_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken())
            this.router.navigate(['/login'], {}).then().catch();
    };
    LayoutComponent.prototype.ngOnChanges = function (changes) {
        this.watchUser();
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/core/layout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
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
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/shared/services/auth.service.ts");


var Auth = /** @class */ (function () {
    function Auth() {
    }
    /**
     * return api token of user
     *
     */
    Auth.getApiToken = function () {
        return _cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"].API_TOKEN_PRFIX);
    };
    /**
     * return user
     *
     */
    Auth.user = function () {
        return _cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"].USER_PRFIX);
    };
    /**
     * remove user object from cache
     */
    Auth.logout = function () {
        _cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].remove(_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"].API_TOKEN_PRFIX);
        _cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].remove(_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"].USER_PRFIX);
        return false;
    };
    return Auth;
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

module.exports = "<nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n  <ol class=\"breadcrumb breadcrumb-custom bg-inverse-primary mb-0\">\r\n    <li *ngFor=\"let item of breadcrumbList; let last = last;\" class=\"breadcrumb-item\">\r\n      <a *ngIf=\"!last\" routerLink=\"{{item.url}}\">{{item['name']}}</a>\r\n      <span *ngIf=\"last\">{{item['name']}}</span>\r\n    </li>\r\n  </ol>\r\n</nav>\r\n"

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
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation */ "./src/app/shared/translation.ts");


var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.refreshComponent = function (router, url) {
        router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            router.navigate([url]);
        });
        setTimeout(function () {
            _app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"].doc.jquery('.modal-backdrop fade in').remove();
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
        var transWord = _translation__WEBPACK_IMPORTED_MODULE_1__["Translation"].getTranslationsData()[word];
        if (transWord) {
            return transWord['name_' + _translation__WEBPACK_IMPORTED_MODULE_1__["Translation"].getLang()];
        }
        _translation__WEBPACK_IMPORTED_MODULE_1__["Translation"].storeNewKey(word);
        return word;
    };
    return Helper;
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
        /*if (this.auth.isAuth()) {
            this.router.navigate([route.queryParams['return'] || '/admin/dashboard']).then().catch();
            return false;
        }*/
        return true;
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
            name: 'trans'
        })
    ], TransPipe);
    return TransPipe;
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
    }
    /**
     * get services from api
     *
     */
    TranslationService.prototype.getList = function () {
        return this.http.get('translation/get?api_token=' + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
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
                _pipes_trans_pipe__WEBPACK_IMPORTED_MODULE_19__["TransPipe"]
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
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_1__["AngularFontAwesomeModule"]
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
                _pipes_trans_pipe__WEBPACK_IMPORTED_MODULE_19__["TransPipe"]
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
    Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY = 'translations_not_exists';
    Translation.TRANSLATION_CACHE_KEY = 'translations';
    return Translation;
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
    publicUrl: 'http://127.0.0.1:8000',
    apiUrl: 'https://samsav2.sphinxws.com/public/api',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\samsa\samsaFrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map