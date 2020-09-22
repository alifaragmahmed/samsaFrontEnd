(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-student-module"],{

/***/ "./src/app/student/components/student/application-create/student-create.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/student/components/student/application-create/student-create.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-10 col-md-10 col-sm-12\">\n      <div class=\"w3-white material-shadow safe-box\">\n        <div class=\"safe-box-header w3-xlarge\">\n          {{ \"create student\" | trans }}\n        </div>\n        <br>\n        <div class=\"border-bottom-dashed\" ></div>\n        <br>\n  \n        <div class=\"safe-box-body row\" >\n  \n          <div class=\"col-lg-3 col-md-3 col-sm-12\" >\n            <img [src]=\"application.personal_photo_url?  application.personal_photo_url : defaultImage\" class=\"w3-block w3-round border-gray\" >\n            <br>\n            <input \n                type=\"file\"\n                (change)=\"viewPersonalImage($event)\" \n                accept=\"image/x-png,image/gif,image/jpeg\"\n                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"  >\n            <div class=\"custom-panel w3-display-container w3-round\" style=\"padding: 5px\" >\n  \n              <div   \n                class=\"alert alert-danger w3-block btn-margin-bottom text-center\" \n               >\n                {{ currentError }}\n              </div>\n\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle(null)\"  >{{ \"all info\" | trans }}</button> \n              \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('student-info-panel')\"  >{{ \"student info\" | trans }}</button> \n             \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('military-info-panel')\"  >{{ \"military info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('parent-info-panel')\"  >{{ \"parent info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('additional-info-panel')\"  >{{ \"additional info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('document-info-panel')\"  >{{ \"required documents\" | trans }}</button> \n               \n            </div>\n          </div>\n  \n          <div class=\"col-lg-9 col-md-9 col-sm-12\" >\n  \n             \n  \n            <!--\n\n        => student basic info\n        name\t                  email\t\n        academic_years_id\t      grade\t\n        registeration_date\t    phone_1\n        registration_status_id\tregistration_method_id\n        qualification_date\t    qualification_set_number\t\n        qualification_types_id\tqualification_id\t\n        level_id\t              case_constraint_id\n        national_id\t            password  \n        acceptance_code\t        acceptance_date\t\n        status\t                writen_by\t\n        \n      \n        => additional info\n        \t\t \n        nationality_id\t        gender\t\n        language_1_id\t          language_2_id\t\n        city_id\t                government_id\t \n        country_id\t            religion \n        address\t                birth_address\t\n        national_id_date\t      national_id_place\t \n\n        => military info\n        military_status_id\t    military_area_id \n        triple_number\n        \n        => parent info\n        parent_name\t            parent_national_id\t\n        parent_job_id\t          parent_address\t\n        parent_phone\t          relative_relation_id\n        \n        => personal image\n        personal_photo\t\n\n        => required document\n        \n            -->\n            <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n              <div class=\"custom-panel-title\" >{{ \"student basic info\" | trans }}</div>\n  \n              <div class=\"custom-panel-body\"  >\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block\" >\n                      <tr>\n                        <th>{{ \"student name\" | trans }} *</th>\n                        <td>\n                          <input \n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"application.name\" >\n                        </td>\n                      </tr> \n                      <tr> \n                          <th>{{ \"email\" | trans }}</th>\n                          <td>\n                            <input \n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.email\" >\n                          </td>\n                      </tr> \n                      <tr>\n                        <th>{{ \"academic_years\" | trans }} *</th>\n                        <td>\n                          <select \n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"application.academic_years_id\">\n                            <option *ngFor=\"let item of applicationSettings.ACADEMIC_YEARS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"grade\" | trans }} *</th>\n                          <td>\n                            <input  \n                            type=\"number\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.grade\" >\n                            <p *ngIf=\"gradeError\" class=\"w3-text-red w3-tiny\"  >\n                              {{ gradeError }}\n                            </p>\n                          </td>\n                      </tr> \n                      <tr>\n                          <th>{{ \"national_id\" | trans }} *</th>\n                          <td>\n                            <input \n                            type=\"text\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.national_id\" >\n                          </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"registeration_date\" | trans }}</th>\n                          <td>\n                            <input \n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.registeration_date\" >\n                          </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"registeration_date\" | trans }}</th>\n                          <td>\n                            <input \n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.registeration_date\" >\n                          </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"registration_status\" | trans }} *</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"application.registration_status_id\">\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"registration_method\" | trans }}</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"application.registration_method_id\">\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_METHODS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"qualification_set_number\" | trans }}</th>\n                          <td>\n                            <input \n                            type=\"number\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.qualification_set_number\" >\n                          </td>\n                      </tr>\n                    </table>\n                  </div>  \n\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block w3-block\" >\n                        <tr>\n                            <th>{{ \"qualification_date\" | trans }} *</th>\n                            <td>\n                              <input \n                              type=\"date\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.qualification_date\" >\n                            </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"qualification\" | trans }} *</th>\n                          <td>\n                            <select \n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.qualification_id\">\n                              <option *ngFor=\"let item of applicationSettings.QUALIFICATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </select>  \n                          </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"qualification_types\" | trans }} *</th>\n                          <td>\n                            <select \n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.qualification_types_id\">\n                              <ng-container *ngFor=\"let item of applicationSettings.QUALIFICATION_TYPES\">\n                                  <option *ngIf=\"item.qualification_id == application.qualification_id && item.academic_year_id == application.academic_years_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </ng-container>\n                              \n                            </select>  \n                          </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"level\" | trans }} *</th>\n                          <td>\n                            <select \n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.level_id\">\n                              <option *ngFor=\"let item of levels\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </select>  \n                          </td>\n                        </tr> \n                        <tr>\n                          <th>{{ \"division\" | trans }} *</th>\n                          <td>\n                            <select\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.division_id\">\n                              <option *ngFor=\"let item of divisions\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </select>  \n                          </td>\n                        </tr> \n                        <tr>\n                          <th>{{ \"case_constraint\" | trans }}</th>\n                          <td>\n                            <select\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.case_constraint_id\">\n                              <option *ngFor=\"let item of applicationSettings.CASE_CONSTRAINTS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </select>  \n                          </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"coordination_password\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"password\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.password\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"acceptance_code\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.acceptance_code\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"acceptance_date\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"date\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.acceptance_date\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"phone_1\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.phone_1\" >\n                            </td>\n                        </tr>\n\n                      \n                    </table>\n                  </div>\n                </div>\n              </div>\n  \n            </div>\n \n            <div class=\"custom-panel w3-display-container w3-round  application-panel military-info-panel\">\n                <div class=\"custom-panel-title\" >{{ \"military info\" | trans }}</div>\n    \n                <div class=\"custom-panel-body\"  >\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block\" >\n                          <tr>\n                            <th>{{ \"military_status\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.military_status_id\">\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr>  \n                          <tr>\n                            <th>{{ \"military_area\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.military_area_id\">\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_AREAS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr>  \n                      </table>\n                    </div>  \n  \n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block w3-block\" > \n                          <tr>\n                            <th>{{ \"triple_number\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.triple_number\" >\n                            </td>\n                          </tr> \n                      </table>\n                    </div>\n                  </div>\n                </div>\n    \n              </div>\n \n              <div class=\"custom-panel w3-display-container w3-round application-panel parent-info-panel\">\n                  <div class=\"custom-panel-title\" >{{ \"parent info\" | trans }}</div>\n      \n                  <div class=\"custom-panel-body\"  >\n                    <div class=\"row\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <table class=\"table w3-block\" >\n                            <tr>\n                              <th>{{ \"parent_name\" | trans }}</th>\n                              <td>\n                                <input \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_name\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_national_id\" | trans }}</th>\n                              <td>\n                                <input \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_national_id\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_address\" | trans }}</th>\n                              <td>\n                                <input \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_address\" >\n                              </td>\n                            </tr>  \n                        </table>\n                      </div>  \n    \n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <table class=\"table w3-block w3-block\" > \n                            <tr>\n                              <th>{{ \"parent_phone\" | trans }}</th>\n                              <td>\n                                <input \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_phone\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_job\" | trans }}</th>\n                              <td>\n                                <select\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_job_id\">\n                                  <option *ngFor=\"let item of applicationSettings.PARENT_JOBS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </select>  \n                              </td>\n                            </tr>   \n                            <tr>\n                              <th>{{ \"relative_relation\" | trans }}</th>\n                              <td>\n                                <select\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.relative_relation_id\">\n                                  <option *ngFor=\"let item of applicationSettings.RELATIVE_RELATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </select>  \n                              </td>\n                            </tr>  \n                        </table>\n                      </div>\n                    </div>\n                  </div>\n      \n                </div>\n\n            <div class=\"custom-panel w3-display-container w3-round application-panel additional-info-panel\">\n                <div class=\"custom-panel-title\" >{{ \"additional info\" | trans }}</div>\n    \n                <div class=\"custom-panel-body\"  >\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block\" >\n                          <tr>\n                            <th>{{ \"nationality\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.nationality_id\">\n                                <option *ngFor=\"let item of applicationSettings.NATIONALITIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"gender\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.gender\">\n                                <option value=\"male\">{{ \"male\" | trans }}</option>\n                                <option value=\"female\">{{ \"female\" | trans }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"language_1\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.language_1_id\">\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"language_2\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.language_2_id\">\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"country\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.country_id\">\n                                <option *ngFor=\"let item of applicationSettings.COUNTRIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"government\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.government_id\">\n                              <ng-container  *ngFor=\"let item of applicationSettings.GOVERNMENTS\">\n                                  <option *ngIf=\"application.country_id == item.country_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </ng-container> \n                              </select>  \n                            </td>\n                          </tr>  \n                      </table>\n                    </div>  \n  \n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block w3-block\" >\n                          <tr>\n                            <th>{{ \"city\" | trans }}</th>\n                            <td>\n                              <select\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.city_id\">\n                                <ng-container  *ngFor=\"let item of applicationSettings.CITIES\">\n                                    <option *ngIf=\"application.government_id == item.government_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </ng-container> \n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"religion\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.religion\">\n                                <option value=\"muslim\">{{ \"muslim\" | trans }}</option>\n                                <option value=\"christian\">{{ \"christian\" | trans }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"address\" | trans }}</th>\n                            <td>\n                              <input \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.address\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"birth_address\" | trans }}</th>\n                            <td>\n                              <input \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.birth_address\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"national_id_date\" | trans }}</th>\n                            <td>\n                              <input \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.national_id_date\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"national_id_place\" | trans }}</th>\n                            <td>\n                              <input \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.national_id_place\" >\n                            </td>\n                          </tr> \n                        \n                      </table>\n                    </div>\n                  </div>\n                </div>\n    \n              </div>\n           \n              <div class=\"custom-panel w3-display-container w3-round application-panel document-info-panel\">\n                  <div class=\"custom-panel-title\" >{{ \"required documents info\" | trans }}</div>\n      \n                  <div class=\"custom-panel-body\"  >\n                    <div class=\"row\">\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                        <table class=\"table w3-block\" >\n                            <tr *ngFor=\"let item of applicationSettings.REQUIRED_DOCUMENTS\" [ngClass]=\"{'w3-text-green': application['required_document_' + item.id]}\" >\n                              <th>\n                                <i *ngIf=\"application['required_document_' + item.id]\" class=\"fa fa-check-circle w3-text-green\"></i>\n                                {{ item.name  }}\n                              </th>\n                              <th>{{ item.type | trans }}</th>\n                              <td>\n                                  <input \n                                  type=\"file\"\n                                  (change)=\"setFile($event, 'required_document_' + item.id)\"\n                                  class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"   >\n                                </td>\n                            </tr>  \n                            \n                        </table>\n                      </div>   \n                    </div>\n                  </div>\n      \n                </div>\n   \n              <div class=\"custom-panel w3-display-container w3-round\">\n                  <div class=\"custom-panel-body\"  > \n                    <button class=\"btn btn-default small-shadow w3-margin-left\" [disabled]=\"isSubmitted\"  (click)=\"sendApplication()\" >{{ \"send application\" | trans }}</button>\n                    \n                    <a href=\"#\" class=\"btn btn-default small-shadow w3-margin-left\" routerLink=\"/\" >{{ \"exit\" | trans }}</a>\n                  </div>\n      \n                </div>\n                  \n          </div>\n  \n  \n  \n        </div>\n      </div>\n    </div>\n  </div>\n   \n  \n  \n  "

/***/ }),

/***/ "./src/app/student/components/student/application-create/student-create.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/student/components/student/application-create/student-create.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n    custom button style\r\n  */\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvYXBwbGljYXRpb24tY3JlYXRlL0U6XFxwcm9qZWN0c1xcc2Ftc2FcXHNhbXNhRnJvbnRFbmQvc3JjXFxhcHBcXHN0dWRlbnRcXGNvbXBvbmVudHNcXHN0dWRlbnRcXGFwcGxpY2F0aW9uLWNyZWF0ZVxcc3R1ZGVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9zdHVkZW50L2FwcGxpY2F0aW9uLWNyZWF0ZS9zdHVkZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQ0YsRUFBQTs7QUFFQTtFQUNFLHlDQUF3QyxFQUFBOztBQUcxQztFQUNFLHVDQUFzQyxFQUFBOztBQUd4QztFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLHVDQUFzQztFQUN0Qyw4QkFBNkIsRUFBQTs7QUFJL0I7RUFDRSw2QkFBNEI7RUFDNUIsc0JBQXFCO0VBQ3JCLHFCQUFvQjtFQUNwQixzQkFBcUI7RUFDckIsa0NBQWlDO0VBQ2pDLDZCQUE0QjtFQUM1Qiw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSx3QkFBdUIsRUFBQTs7QUFHekI7RUFDRSx1REFBbUQsRUFBQTs7QUFHckQ7RUFDRSx5QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxpQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQkFDRixFQUFBOztBQUVBO0VBQ0UseUJBQXdCLEVBQUE7O0FBRTFCOztHQ1ZDOztBRGNEO0VBQ0UsdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvc3R1ZGVudC9hcHBsaWNhdGlvbi1jcmVhdGUvc3R1ZGVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FmZS1ib3gge1xyXG4gICAgcGFkZGluZzogMTBweFxyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlci1kYXNoZWQge1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tbWFyZ2luLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXBhbmVsIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICAgIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbWFsbC1zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWlucHV0IHtcclxuICAgIG1pbi13aWR0aDogNzAlIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlci1ncmF5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWlucHV0IHtcclxuICAgIG1pbi13aWR0aDogMTIwcHhcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsIHtcclxuICAgIG92ZXJmbG93OiBhdXRvIWltcG9ydGFudDtcclxuICB9IFxyXG4gIC8qXHJcbiAgICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiAgKi9cclxuXHJcbiAgc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICAiLCIuc2FmZS1ib3gge1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZGFzaGVkIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50OyB9XG5cbi5idG4tbWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tcGFuZWwge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogLTEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLnNtYWxsLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7IH1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIG1pbi13aWR0aDogNzAlICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ncmF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20taW5wdXQge1xuICBtaW4td2lkdGg6IDEyMHB4OyB9XG5cbi5tb2RhbCB7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLypcclxuICAgIGN1c3RvbSBidXR0b24gc3R5bGVcclxuICAqL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/student/components/student/application-create/student-create.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/student/components/student/application-create/student-create.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StudentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCreateComponent", function() { return StudentCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _account_services_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/student/services/student.service.ts");
/* harmony import */ var _account_services_division_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../account/services/division.service */ "./src/app/account/services/division.service.ts");











var StudentCreateComponent = /** @class */ (function () {
    function StudentCreateComponent(studentService, route) {
        this.studentService = studentService;
        this.route = route;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_6__["AppModule"].doc;
        /**
         * application object
         */
        this.application = {};
        this.applicationSettings = _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationSettingService"];
        this.defaultImage = '/assets/img/avatar.png';
        this.isSubmitted = false;
        this.isUpdate = false;
        this.required_field = [
            'name',
            'qualification_id',
            'national_id',
            'registration_status_id',
            'academic_years_id',
            'grade',
            'qualification_date',
            'qualification_types_id',
            'level_id'
        ];
        var id = this.route.snapshot.params['id'];
        if (id) {
            this.loadApplication(id);
            this.isUpdate = true;
        }
    }
    StudentCreateComponent.prototype.loadApplication = function (id) {
        var _this = this;
        this.studentService.load(id).subscribe(function (res) {
            _this.application = res;
        });
    };
    StudentCreateComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        this.required_field.forEach(function (element) {
            if (!_this.application[element])
                valid = false;
        });
        return valid;
    };
    StudentCreateComponent.prototype.sendApplication = function () {
        if (!this.validate()) {
            return _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].trans('fill all requird data'));
            this.setCurrentError(_shared_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].trans('fill all requird data'));
        }
        if (this.isUpdate)
            this.performUpdateApplication();
        else
            this.performSendApplication();
    };
    StudentCreateComponent.prototype.performUpdateApplication = function () {
        var _this = this;
        this.isSubmitted = true;
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(this.application); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.application[key])
                data.append(key, this.application[key]);
        }
        //return console.log(data);
        this.studentService.update(data).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].success(data.message);
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].error(data.message);
                _this.setCurrentError(data.message);
            }
            _this.isSubmitted = false;
        });
    };
    StudentCreateComponent.prototype.performSendApplication = function () {
        var _this = this;
        this.isSubmitted = true;
        this.studentService.store(this.application).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].success(data.message);
                _this.reset();
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].error(data.message);
                _this.setCurrentError(data.message);
            }
            _this.isSubmitted = false;
        });
    };
    StudentCreateComponent.prototype.reset = function () {
        this.application = {};
        this.currentError = '';
    };
    StudentCreateComponent.prototype.setCurrentError = function (error) {
        if (!error)
            return;
        error = error.replace(/<br>/g, '\n');
        this.currentError = error;
    };
    StudentCreateComponent.prototype.toggle = function (selector) {
        if (selector) {
            this.doc.jquery('.application-panel').slideUp(500);
            this.doc.jquery('.' + selector).slideDown(500);
        }
        else {
            this.doc.jquery('.application-panel').slideDown(500);
        }
    };
    StudentCreateComponent.prototype.setFile = function (event, key) {
        this.application[key] = event.target.files[0];
        console.log(this.application[key]);
    };
    StudentCreateComponent.prototype.viewPersonalImage = function (event) {
        var _this = this;
        this.setFile(event, 'personal_photo');
        var reader = new FileReader();
        reader.readAsDataURL(this.application.personal_photo);
        reader.onload = function (_event) {
            _this.application.personal_photo_url = reader.result;
        };
    };
    StudentCreateComponent.prototype.ngOnInit = function () {
        this.levels = _shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].get(_account_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"].LEVEL_PREFIX);
        this.divisions = _shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].get(_account_services_division_service__WEBPACK_IMPORTED_MODULE_10__["DivisionService"].DIVISION_PREFIX);
    };
    StudentCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-create',
            template: __webpack_require__(/*! ./student-create.component.html */ "./src/app/student/components/student/application-create/student-create.component.html"),
            styles: [__webpack_require__(/*! ./student-create.component.scss */ "./src/app/student/components/student/application-create/student-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_9__["StudentService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], StudentCreateComponent);
    return StudentCreateComponent;
}());



/***/ }),

/***/ "./src/app/student/components/student/application-index/student-index.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/student/components/student/application-index/student-index.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\n\n<div class=\"box box-primary  table-responsive\" >\n  <div class=\"box-header\">\n    <button class=\"btn btn-primary\" routerLink=\"/student/create\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-plus\" ></span> {{ \"add\" | trans }}\n    </button> \n    <button *ngIf=\"showRemoveButton\" (click)=\"removeResources()\" class=\"btn btn-danger\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-trash\" ></span>\n    </button>\n  </div>\n  <br>\n\n</div>\n<div class=\"w3-row\" style=\"padding: 5px;\">\n  <ng-container *ngFor=\"let item of resources.data\" >\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 student-list-col\" >\n          <div class=\"media material-shadow w3-white w3-padding w3-display-container student-list-item\">\n\n              <div class=\"w3-display-topleft w3-padding\" >\n                <input type=\"checkbox\" style=\"margin: 0px!important\" class=\"w3-check w3-margin\" (click)=\"toggleFromTrash(item.id)\"  >\n              </div>\n\n            <div class=\"media-left\">\n                <a href=\"#\">\n                  <img class=\"media-object w3-round\" [src]=\"item.personal_photo_url\"  style=\"width: 70px;height: 70px\" >\n                </a>\n            </div>\n            <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{ item.name.substring(0, 15) }}..</h4>\n            <table class=\"table\" >\n              <tr>\n                <th>{{ \"academic_year\" | trans }}</th>\n                <td>{{ item.academic_year? item.academic_year.name : '' }}</td>\n              </tr>\n              <tr>\n                <th>{{ \"qualification\" | trans }}</th>\n                <td>{{ item.qualification? item.qualification.name : '' }}</td>\n              </tr>\n              <tr>\n                <th>{{ \"level\" | trans }}</th>\n                <td>{{ item.level? item.level.name : '' }}</td>\n              </tr> \n            </table> \n            <div class=\"text-right\" > \n              <a href=\"#\" [routerLink]=\"['/student/', item.id]\" ><i class=\"fa fa-edit btn w3-text-orange\" ></i></a>\n            </div>\n          </div>\n      </div>\n    </div>\n  </ng-container>\n  \n\n\n</div>\n<br>\n<div class=\"text-center w3-center\" >\n    <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination\">\n          <li>\n            <a   class=\"\" [ngClass]=\"{'disabled': !resources.prev_page}\" (click)=\"loadResources(resources.prev_page)\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">&laquo;</span>\n            </a>\n          </li>\n          <li *ngFor=\"let item of resources.pages_arr\"  >\n            <a class=\"\" [ngClass]=\"{'active': resources.current_page == item}\"  (click)=\"loadResources(item)\">{{ item }}</a>\n          </li>  \n          <li>\n            <a   class=\"\" [ngClass]=\"{'disabled': !resources.next_page}\"  (click)=\"loadResources(resources.next_page)\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n</div> \n\n \n<!-- remove modal -->\n<div class=\"w3-modal w3-block\" *ngIf=\"showRemoveModal\"  role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{ \"remove applications\" | trans }}</h4>\n        </div>\n        <div class=\"modal-body text-center\">\n            <i class=\"fa fa-spinner fa-spin w3-jumbo w3-text-indigo w3-center\" ></i>\n            <br>\n            {{ trashList.size() }} - {{ \"removed\" | trans }} {{ trashList.size() + removed.length }}\n        </div>\n        <div class=\"modal-footer\"> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n \n "

/***/ }),

/***/ "./src/app/student/components/student/application-index/student-index.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/student/components/student/application-index/student-index.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-list-item {\n  height: 200px;\n  margin: 5px !important; }\n\n.student-list-col {\n  padding: 5px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvYXBwbGljYXRpb24taW5kZXgvRTpcXHByb2plY3RzXFxzYW1zYVxcc2Ftc2FGcm9udEVuZC9zcmNcXGFwcFxcc3R1ZGVudFxcY29tcG9uZW50c1xcc3R1ZGVudFxcYXBwbGljYXRpb24taW5kZXhcXHN0dWRlbnQtaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvc3R1ZGVudC9hcHBsaWNhdGlvbi1pbmRleC9zdHVkZW50LWluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWRlbnQtbGlzdC1pdGVtIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdHVkZW50LWxpc3QtY29sIHtcclxuICAgIHBhZGRpbmc6IDVweCFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/student/components/student/application-index/student-index.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/student/components/student/application-index/student-index.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StudentIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentIndexComponent", function() { return StudentIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/student/services/student.service.ts");





var StudentIndexComponent = /** @class */ (function () {
    function StudentIndexComponent(studentService) {
        this.studentService = studentService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"].doc;
        // Resources list
        this.resources = {};
        // init breadcrum
        this.breadcrumbList = [];
        // remove options
        this.showRemoveButton = false;
        this.showRemoveModal = false;
        this.trashList = new _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.removed = [];
        // init breadcrum
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'students' }
        ];
    }
    StudentIndexComponent.prototype.toggleFromTrash = function (id) {
        if (this.trashList.has(id)) {
            this.trashList.remove(id);
        }
        else {
            this.trashList.put(id, id);
        }
        if (this.trashList.size() > 0)
            this.showRemoveButton = true;
        else
            this.showRemoveButton = false;
    };
    StudentIndexComponent.prototype.removeResources = function () {
        var _this = this;
        this.showRemoveModal = true;
        var queue = this.trashList.getKeys();
        if (queue.length > 0) {
            var id_1 = queue.pop();
            this.studentService.destroy(id_1).subscribe(function () {
                _this.removed.push(id_1);
                _this.trashList.remove(id_1);
                //
                _this.removeResources();
            });
        }
        else {
            this.removed = [];
            this.showRemoveButton = false;
            this.showRemoveModal = false;
            this.loadResources();
        }
    };
    StudentIndexComponent.prototype.prePagniation = function () {
        if (!this.resources.data)
            return;
        this.resources.prev_page = this.resources.prev_page_url ? this.resources.prev_page_url.replace(this.resources.path + '?page=', '') : null;
        this.resources.next_page = this.resources.next_page_url ? this.resources.next_page_url.replace(this.resources.path + '?page=', '') : null;
        this.resources.pages = Math.ceil(this.resources.total / this.resources.per_page);
        this.resources.pages_arr = [];
        for (var i = 0; i < this.resources.pages; i++)
            this.resources.pages_arr.push(i + 1);
    };
    StudentIndexComponent.prototype.loadResources = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.studentService.get(page).subscribe(function (res) {
            _this.resources = res;
            _this.prePagniation();
        });
    };
    StudentIndexComponent.prototype.ngOnInit = function () {
        this.loadResources();
    };
    StudentIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-index',
            template: __webpack_require__(/*! ./student-index.component.html */ "./src/app/student/components/student/application-index/student-index.component.html"),
            styles: [__webpack_require__(/*! ./student-index.component.scss */ "./src/app/student/components/student/application-index/student-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]])
    ], StudentIndexComponent);
    return StudentIndexComponent;
}());



/***/ }),

/***/ "./src/app/student/services/student.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/student/services/student.service.ts ***!
  \*****************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    StudentService.prototype.get = function (page) {
        if (page === void 0) { page = 1; }
        return this.http.get('students?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken() + "&page=" + page);
    };
    /**
     * get services from api
     *
     */
    StudentService.prototype.load = function (id) {
        return this.http.get('students/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    StudentService.prototype.store = function (data) {
        return this.http.post('students/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    StudentService.prototype.update = function (data) {
        return this.http.post('students/update/' + data.get('id') + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    StudentService.prototype.destroy = function (id) {
        return this.http.post('students/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/student/student-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function() { return StudentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_student_application_index_student_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/student/application-index/student-index.component */ "./src/app/student/components/student/application-index/student-index.component.ts");
/* harmony import */ var _components_student_application_create_student_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/student/application-create/student-create.component */ "./src/app/student/components/student/application-create/student-create.component.ts");





var routes = [
    {
        path: '',
        component: _components_student_application_index_student_index_component__WEBPACK_IMPORTED_MODULE_3__["StudentIndexComponent"]
    },
    {
        path: '/:id',
        component: _components_student_application_create_student_create_component__WEBPACK_IMPORTED_MODULE_4__["StudentCreateComponent"]
    },
    {
        path: 'create',
        component: _components_student_application_create_student_create_component__WEBPACK_IMPORTED_MODULE_4__["StudentCreateComponent"]
    },
    /* {
       path: "settings",
       component: AdminisionComponent,
       children: [
         {
           path: 'required_documents',
           component: RequiredDocumentIndexComponent
         },
       ]
     },*/
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var StudentRoutingModule = /** @class */ (function () {
    function StudentRoutingModule() {
    }
    StudentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StudentRoutingModule);
    return StudentRoutingModule;
}());



/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <!-- navbar list -->\n    <div class=\"box box-primary material-shadow\">\n      <div class=\"box-body box-profile\">\n        <img class=\"profile-user-img img-responsive img-circle\" style=\"width: 60%!important\" src=\"/assets/img/account_settings.gif\" alt=\"User profile picture\">\n\n        <h3 class=\"profile-username text-center\">{{ \"adminision_settings\" | trans }}</h3>\n \n\n        <ul class=\"list-group list-group-unbordered\">\n          <li class=\"list-group-item\">\n            <a href=\"#\" routerLink='/adminision/settings/required_documents' >\n                <b>{{ \"required_documents\" | trans }}</b> \n                <a href=\"#\"  class=\"pull-left\">\n                  <i class=\"fa fa-newspaper-o\" ></i> \n                </a>\n            </a>\n          </li> \n        </ul> \n      </div>\n      <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n \n  </div>\n  <!-- /.col -->\n  <div class=\"col-md-9\"> \n      <router-outlet></router-outlet>\n  </div>\n  <!-- /.col -->\n</div>"

/***/ }),

/***/ "./src/app/student/student.component.scss":
/*!************************************************!*\
  !*** ./src/app/student/student.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentComponent = /** @class */ (function () {
    function StudentComponent() {
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.scss */ "./src/app/student/student.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/student/student.module.ts":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-routing.module */ "./src/app/student/student-routing.module.ts");
/* harmony import */ var _student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _components_student_application_create_student_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/student/application-create/student-create.component */ "./src/app/student/components/student/application-create/student-create.component.ts");
/* harmony import */ var _components_student_application_index_student_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/student/application-index/student-index.component */ "./src/app/student/components/student/application-index/student-index.component.ts");








var StudentModule = /** @class */ (function () {
    function StudentModule() {
    }
    StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _student_component__WEBPACK_IMPORTED_MODULE_5__["StudentComponent"],
                _components_student_application_create_student_create_component__WEBPACK_IMPORTED_MODULE_6__["StudentCreateComponent"],
                _components_student_application_index_student_index_component__WEBPACK_IMPORTED_MODULE_7__["StudentIndexComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _student_routing_module__WEBPACK_IMPORTED_MODULE_4__["StudentRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
            ]
        })
    ], StudentModule);
    return StudentModule;
}());



/***/ })

}]);
//# sourceMappingURL=student-student-module.js.map