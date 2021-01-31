(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~affairs-affairs-module~student-student-module"],{

/***/ "./src/app/student/components/student/student-create/student-create.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/student/components/student/student-create/student-create.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"{{ col }}\">\r\n      <div class=\"w3-white material-shadow safe-box\">\r\n        <div class=\"safe-box-header w3-xlarge\">\r\n          {{ \"create student\" | trans }}\r\n        </div>\r\n        <br>\r\n        <div class=\"border-bottom-dashed\" ></div>\r\n        <br>\r\n\r\n        <div class=\"safe-box-body row\" >\r\n\r\n          <div class=\"col-lg-3 col-md-3 col-sm-12\" >\r\n            <img [src]=\"application.personal_photo_url?  application.personal_photo_url : defaultImage\" class=\"w3-block w3-round border-gray\" >\r\n            <br>\r\n            <input\r\n                type=\"file\"\r\n                (change)=\"viewPersonalImage($event)\"\r\n                accept=\"image/x-png,image/gif,image/jpeg\"\r\n                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"  >\r\n            <div class=\"custom-panel w3-display-container w3-round\" style=\"padding: 5px\" >\r\n\r\n              <div\r\n                class=\"alert alert-danger w3-block btn-margin-bottom text-center\"\r\n               >\r\n                {{ currentError }}\r\n              </div>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle(null)\"  >{{ \"all info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('student-info-panel')\"  >{{ \"student info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom military-info-button\"  (click)=\"toggle('military-info-panel')\"  >{{ \"military info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('parent-info-panel')\"  >{{ \"parent info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('additional-info-panel')\"  >{{ \"additional info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('document-info-panel')\"  >{{ \"required documents\" | trans }}</button>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-9 col-md-9 col-sm-12\" >\r\n\r\n\r\n\r\n            <!--\r\n\r\n        => student basic info\r\n        name\t                  email\r\n        academic_years_id\t      grade\r\n        registeration_date\t    phone_1\r\n        registration_status_id\tregistration_method_id\r\n        qualification_date\t    qualification_set_number\r\n        qualification_types_id\tqualification_id\r\n        level_id\t              case_constraint_id\r\n        national_id\t            password\r\n        acceptance_code\t        acceptance_date\r\n        status\t                writen_by\r\n\r\n\r\n        => additional info\r\n\r\n        nationality_id\t        gender\r\n        language_1_id\t          language_2_id\r\n        city_id\t                government_id\r\n        country_id\t            religion\r\n        address\t                birth_address\r\n        national_id_date\t      national_id_place\r\n\r\n        => military info\r\n        military_status_id\t    military_area_id\r\n        triple_number\r\n\r\n        => parent info\r\n        parent_name\t            parent_national_id\r\n        parent_job_id\t          parent_address\r\n        parent_phone\t          relative_relation_id\r\n\r\n        => personal image\r\n        personal_photo\r\n\r\n        => required document\r\n\r\n            -->\r\n            <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n              <div class=\"custom-panel-title\" >{{ \"student basic info\" | trans }}</div>\r\n\r\n              <div class=\"custom-panel-body\"  >\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block\" >\r\n                      <tr>\r\n                        <th>{{ \"student name\" | trans }} *</th>\r\n                        <td>\r\n                          <input\r\n                          class=\"custom-input form-control input-sm w3-input  input-sm \"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.name, 'border-bottom-red': !application.name}\"\r\n                          [(ngModel)]=\"application.name\" >\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"academic_years\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.academic_years_id, 'border-bottom-red': !application.academic_years_id}\"\r\n                          [(ngModel)]=\"application.academic_years_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.ACADEMIC_YEARS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"qualification\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          (change)=\"emptyData()\"\r\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.qualification_id, 'border-bottom-red': !application.qualification_id}\"\r\n                          [(ngModel)]=\"application.qualification_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.QUALIFICATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"qualification_types\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.qualification_types_id, 'border-bottom-red': !application.qualification_types_id}\"\r\n                          [(ngModel)]=\"application.qualification_types_id\">\r\n                            <ng-container *ngFor=\"let item of applicationSettings.QUALIFICATION_TYPES\">\r\n                                <option *ngIf=\"item.qualification_id == application.qualification_id && item.academic_year_id == application.academic_years_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                            </ng-container>\r\n\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"grade\" | trans }} *</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"number\"\r\n                            class=\"custom-input form-control input-sm w3-input  input-sm\"\r\n                            [ngClass]=\"{'border-bottom-dashed': application.grade, 'border-bottom-red': !application.grade}\"\r\n                            [(ngModel)]=\"application.grade\" >\r\n                            <p *ngIf=\"gradeError\" class=\"w3-text-red w3-tiny\"  >\r\n                              {{ gradeError }}\r\n                            </p>\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"national_id\" | trans }} *</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"text\"\r\n                            class=\"custom-input form-control input-sm w3-input  input-sm\"\r\n                            [ngClass]=\"{'border-bottom-dashed': application.national_id, 'border-bottom-red': !application.national_id}\"\r\n                            [(ngModel)]=\"application.national_id\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"gender\" | trans }}</th>\r\n                        <td>\r\n                          <select\r\n                          (change)=\"filterDataBaisedOnGender()\"\r\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.gender, 'border-bottom-red': !application.gender}\"\r\n                          [(ngModel)]=\"application.gender\">\r\n                            <option value=\"male\">{{ \"male\" | trans }}</option>\r\n                            <option value=\"female\">{{ \"female\" | trans }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"registration_status\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\r\n                          (change)=\"validateOnRegisterationStatusDocument()\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.registration_status_id, 'border-bottom-red': !application.registration_status_id}\"\r\n                          [(ngModel)]=\"application.registration_status_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"qualification_date\" | trans }} *</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"date\"\r\n                            class=\"custom-input form-control input-sm w3-input  input-sm\"\r\n                            [ngClass]=\"{'border-bottom-dashed': application.qualification_date, 'border-bottom-red': !application.qualification_date}\"\r\n                            [(ngModel)]=\"application.qualification_date\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"case_constraint\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.case_constraint_id, 'border-bottom-red': !application.case_constraint_id}\"\r\n                          [(ngModel)]=\"application.case_constraint_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.CASE_CONSTRAINTS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"level\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.level_id, 'border-bottom-red': !application.level_id}\"\r\n                          [(ngModel)]=\"application.level_id\">\r\n                            <option *ngFor=\"let item of levels\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block w3-block\" >\r\n                      <tr>\r\n                        <th>{{ \"department\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.department_id, 'border-bottom-red': !application.department_id}\"\r\n                          [(ngModel)]=\"application.department_id\">\r\n                          <ng-container *ngFor=\"let item of applicationSettings.DEPARTMENTS\">\r\n                            <option *ngIf=\"application.level_id == item.level_id\" value=\"{{ item.id }}\" >{{ item.name }}</option>\r\n                          </ng-container>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"division\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.division_id, 'border-bottom-red': !application.division_id}\"\r\n                          [(ngModel)]=\"application.division_id\">\r\n                            <ng-container *ngFor=\"let item of applicationSettings.DIVISIONS\">\r\n                              <option  value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                            </ng-container>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"registration_method\" | trans }}</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                          [(ngModel)]=\"application.registration_method_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_METHODS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"qualification_set_number\" | trans }}</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"number\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"application.qualification_set_number\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"registeration_date\" | trans }}</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"date\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"application.registeration_date\" >\r\n                          </td>\r\n                      </tr>\r\n                        <tr>\r\n                            <th>{{ \"coordination_password\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"password\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.password\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"acceptance_code\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.acceptance_code\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"acceptance_date\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"date\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.acceptance_date\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"phone_1\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.phone_1\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"email\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.email\" >\r\n                            </td>\r\n                        </tr>\r\n\r\n\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"custom-panel w3-display-container w3-round  application-panel military-info-panel\">\r\n              <div class=\"custom-panel-title\" >{{ \"old balance\" | trans }}</div>\r\n\r\n              <div class=\"custom-panel-body\"  >\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block\" >\r\n                        <tr>\r\n                          <th>{{ \"old_balance\" | trans }}</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"number\"\r\n                            [readOnly]=\"isUpdate && !application.can_edit_old_balance\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm w3-block\"\r\n                            [(ngModel)]=\"application.old_balance\" >\r\n                          </td>\r\n                        </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block\" >\r\n                        <tr>\r\n                          <th>{{ \"old_balance_notes\" | trans }}</th>\r\n                          <td>\r\n                            <textarea\r\n                            [readOnly]=\"isUpdate && !application.can_edit_old_balance\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm w3-block\"\r\n                            [(ngModel)]=\"application.old_balance_notes\" ></textarea>\r\n                          </td>\r\n                        </tr>\r\n                    </table>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div\r\n            *ngIf=\"application.gender != 'female'\"\r\n            class=\"custom-panel w3-display-container w3-round  application-panel military-info-panel\">\r\n                <div class=\"custom-panel-title\" >{{ \"military info\" | trans }}</div>\r\n\r\n                <div class=\"custom-panel-body\"  >\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"military_status\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.military_status_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"military_area\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.military_area_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_AREAS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"triple_number\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.triple_number\" >\r\n                            </td>\r\n                          </tr>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"custom-panel w3-display-container w3-round application-panel parent-info-panel\">\r\n                  <div class=\"custom-panel-title\" >{{ \"parent info\" | trans }}</div>\r\n\r\n                  <div class=\"custom-panel-body\"  >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <table class=\"table w3-block\" >\r\n                            <tr>\r\n                              <th>{{ \"parent_name\" | trans }}</th>\r\n                              <td>\r\n                                <input\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.parent_name\" >\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"parent_national_id\" | trans }}</th>\r\n                              <td>\r\n                                <input\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.parent_national_id\" >\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"parent_address\" | trans }}</th>\r\n                              <td>\r\n                                <input\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.parent_address\" >\r\n                              </td>\r\n                            </tr>\r\n                        </table>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <table class=\"table w3-block w3-block\" >\r\n                            <tr>\r\n                              <th>{{ \"parent_phone\" | trans }}</th>\r\n                              <td>\r\n                                <input\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.parent_phone\" >\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"parent_job\" | trans }}</th>\r\n                              <td>\r\n                                <select\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.parent_job_id\">\r\n                                  <option *ngFor=\"let item of applicationSettings.PARENT_JOBS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </select>\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"relative_relation\" | trans }}</th>\r\n                              <td>\r\n                                <select\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.relative_relation_id\">\r\n                                  <option *ngFor=\"let item of applicationSettings.RELATIVE_RELATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </select>\r\n                              </td>\r\n                            </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n            <div class=\"custom-panel w3-display-container w3-round application-panel additional-info-panel\">\r\n                <div class=\"custom-panel-title\" >{{ \"additional info\" | trans }}</div>\r\n\r\n                <div class=\"custom-panel-body\"  >\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"nationality\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.nationality_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.NATIONALITIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"language_1\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.language_1_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"language_2\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.language_2_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"country\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.country_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.COUNTRIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"government\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.government_id\">\r\n                              <ng-container  *ngFor=\"let item of applicationSettings.GOVERNMENTS\">\r\n                                  <option *ngIf=\"application.country_id == item.country_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </ng-container>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"city\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.city_id\">\r\n                                <ng-container  *ngFor=\"let item of applicationSettings.CITIES\">\r\n                                    <option *ngIf=\"application.government_id == item.government_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </ng-container>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"religion\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.religion\">\r\n                                <option value=\"muslim\">{{ \"muslim\" | trans }}</option>\r\n                                <option value=\"christian\">{{ \"christian\" | trans }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"address\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.address\" >\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"birth_address\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.birth_address\" >\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"national_id_date\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.national_id_date\" >\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"national_id_place\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.national_id_place\" >\r\n                            </td>\r\n                          </tr>\r\n\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"custom-panel w3-display-container w3-round application-panel document-info-panel\">\r\n                  <div class=\"custom-panel-title\" >{{ \"required documents info\" | trans }}</div>\r\n\r\n                  <div class=\"custom-panel-body\"  >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                        <table class=\"table w3-block\" >\r\n                          <ng-container *ngFor=\"let item of applicationSettings.REQUIRED_DOCUMENTS\"  >\r\n                             <tr\r\n                             *ngIf=\"requiredDocumentList.get(item.id) > 0\"\r\n                             [ngClass]=\"{'w3-text-green': application['required_document_' + item.id]}\"\r\n                             >\r\n                               <th>\r\n                                 <i *ngIf=\"application['required_document_' + item.id]\"\r\n                                 class=\"fa fa-check-circle w3-text-green\"></i>\r\n\r\n                                 <i *ngIf=\"requiredDocumentList.get(item.id) == 1 && !application['required_document_' + item.id]\"\r\n                                 class=\"fa fa-exclamation-circle w3-text-red\"></i>\r\n                                 {{ item.name  }}\r\n                               </th>\r\n                               <th>{{ item.type | trans }}</th>\r\n                               <td>\r\n                                   <input\r\n                                   type=\"file\"\r\n                                   (change)=\"setFile($event, 'required_document_' + item.id, item.id)\"\r\n                                   class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"   >\r\n                                 </td>\r\n                             </tr>\r\n                          </ng-container>\r\n                          </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n              <div class=\"custom-panel w3-display-container w3-round\">\r\n                  <div class=\"custom-panel-body\"  >\r\n                    <button mat-raised-button color=\"primary\" class=\"w3-margin-left\" [disabled]=\"isSubmitted\"  (click)=\"sendApplication()\" >{{ \"save changes\" | trans }}</button>\r\n\r\n                    <a href=\"#\" class=\"btn btn-default small-shadow w3-margin-left\" routerLink=\"/student\" >{{ \"exit\" | trans }}</a>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/student/components/student/student-create/student-create.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/student/components/student/student-create/student-create.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n    custom button style\r\n  */\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1jcmVhdGUvRTpcXHByb2plY3RcXHNhbXNhRnJvbnRFbmQvc3JjXFxhcHBcXHN0dWRlbnRcXGNvbXBvbmVudHNcXHN0dWRlbnRcXHN0dWRlbnQtY3JlYXRlXFxzdHVkZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1jcmVhdGUvc3R1ZGVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUNGLEVBQUE7O0FBRUE7RUFDRSx5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1Q0FBc0M7RUFDdEMsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0Usd0NBQXVDLEVBQUE7O0FBR3pDO0VBQ0UsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLGtDQUFpQztFQUNqQyw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0Usd0JBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsdURBQW1ELEVBQUE7O0FBR3JEO0VBQ0UseUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsaUNBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsZ0JBQ0YsRUFBQTs7QUFFQTtFQUNFLHlCQUF3QixFQUFBOztBQUUxQjs7R0NWQzs7QURjRDtFQUNFLHVCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1jcmVhdGUvc3R1ZGVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FmZS1ib3gge1xyXG4gICAgcGFkZGluZzogMTBweFxyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLWRhc2hlZCB7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5idG4tbWFyZ2luLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1wYW5lbCB7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1ib3R0b20tcmVkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICAgIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1wYW5lbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsLXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWlucHV0IHtcclxuICAgIG1pbi13aWR0aDogNzAlIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ib3JkZXItZ3JheSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5IWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20taW5wdXQge1xyXG4gICAgbWluLXdpZHRoOiAxMjBweFxyXG4gIH1cclxuXHJcbiAgLm1vZGFsIHtcclxuICAgIG92ZXJmbG93OiBhdXRvIWltcG9ydGFudDtcclxuICB9XHJcbiAgLypcclxuICAgIGN1c3RvbSBidXR0b24gc3R5bGVcclxuICAqL1xyXG5cclxuICBzZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxuICB9XHJcbiIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1kYXNoZWQge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItYm90dG9tLXJlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiAgKi9cbnNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/student/components/student/student-create/student-create.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/student/components/student/student-create/student-create.component.ts ***!
  \***************************************************************************************/
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
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_13__);














var StudentCreateComponent = /** @class */ (function () {
    function StudentCreateComponent(studentService, route) {
        var _this = this;
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
        this.requiredDocumentList = new angular_hashtable__WEBPACK_IMPORTED_MODULE_11__["HashTable"]();
        this.required_field = [
            'name',
            'qualification_id',
            'national_id',
            'registration_status_id',
            'academic_years_id',
            'grade',
            'qualification_date',
            'qualification_types_id',
            'level_id',
            'department_id',
            'case_constraint_id',
            'division_id',
            'gender'
        ];
        this.col = "col-lg-10 col-md-10 col-sm-12";
        var id = this.route.snapshot.params['id'];
        if (id > 0) {
            !src_app_shared_auth__WEBPACK_IMPORTED_MODULE_12__["Auth"].can('student_edit') ? Object(process__WEBPACK_IMPORTED_MODULE_13__["exit"])() : '';
            this.loadApplication(id);
            this.isUpdate = true;
        }
        else {
            !src_app_shared_auth__WEBPACK_IMPORTED_MODULE_12__["Auth"].can('student_add') ? Object(process__WEBPACK_IMPORTED_MODULE_13__["exit"])() : '';
        }
        this.route.queryParams.subscribe(function (params) {
            var col = params['col'];
            if (col)
                _this.col = col;
        });
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
    StudentCreateComponent.prototype.validateOnRegisterationStatusDocument = function () {
        var _this = this;
        this.requiredDocumentList = new angular_hashtable__WEBPACK_IMPORTED_MODULE_11__["HashTable"]();
        this.applicationSettings.REGSITERATIN_STATUS_DOCUMENTS.forEach(function (element) {
            if (element.registeration_status_id == _this.application.registration_status_id) {
                _this.requiredDocumentList.put(element.required_document_id, 1);
            }
        });
    };
    StudentCreateComponent.prototype.sendApplication = function () {
        if (!this.validate()) {
            this.setCurrentError(_shared_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].trans('fill all requird data'));
            return _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].trans('fill all requird data'));
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
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(this.application); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.application[key])
                data.append(key, this.application[key]);
        }
        this.studentService.store(data).subscribe(function (res) {
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
    StudentCreateComponent.prototype.setFile = function (event, key, required_document_id) {
        if (required_document_id === void 0) { required_document_id = null; }
        this.application[key] = event.target.files[0];
        console.log(this.application[key]);
        if (required_document_id) {
            if (!this.application[key])
                this.requiredDocumentList.put(required_document_id, 1);
            else
                this.requiredDocumentList.put(required_document_id, 2);
        }
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
    StudentCreateComponent.prototype.emptyData = function () {
        this.application.qualification_types_id = null;
        this.application.level_id = null;
        this.application.level_name = null;
        this.application.grade = 0;
    };
    StudentCreateComponent.prototype.filterDataBaisedOnGender = function () {
        /*if (this.application.gender == 'female') {
          this.doc.jquery('.military-info-panel').hide();
          this.doc.jquery('.military-info-button').hide();
        } else {
          this.doc.jquery('.military-info-panel').show();
          this.doc.jquery('.military-info-button').show();
        }*/
    };
    StudentCreateComponent.prototype.ngOnInit = function () {
        this.levels = _shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].get(_account_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"].LEVEL_PREFIX);
        this.divisions = _shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].get(_account_services_division_service__WEBPACK_IMPORTED_MODULE_10__["DivisionService"].DIVISION_PREFIX);
        //
        this.application.old_balance_notes = "باقى رسوم سابقه عن عام ";
    };
    StudentCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-create',
            template: __webpack_require__(/*! ./student-create.component.html */ "./src/app/student/components/student/student-create/student-create.component.html"),
            styles: [__webpack_require__(/*! ./student-create.component.scss */ "./src/app/student/components/student/student-create/student-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_9__["StudentService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], StudentCreateComponent);
    return StudentCreateComponent;
}());



/***/ }),

/***/ "./src/app/student/components/student/student-index/student-index.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/student/components/student/student-index/student-index.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\r\n\r\n\r\n<div class=\"w3-display-bottomleft w3-padding\" style=\"position: fixed;z-index: 9999\" >\r\n    <button\r\n    mat-fab color=\"primary\"\r\n    class=\"w3-large\"\r\n    routerLink=\"/student/create\" style=\"margin: 5px\"  >\r\n      <span class=\"fa fa-plus\" ></span>\r\n    </button>\r\n</div>\r\n\r\n    <!--\r\n<div class=\"box box-primary  table-responsive\" >\r\n  <div class=\"box-header\">\r\n\r\n\r\n\r\n    <button *ngIf=\"showRemoveButton\" (click)=\"removeResources()\" class=\"btn btn-danger\" style=\"margin: 5px\"  >\r\n      <span class=\"fa fa-trash\" ></span>\r\n    </button>\r\n  </div>\r\n  <br>\r\n\r\n</div>\r\n    -->\r\n\r\n    <button mat-raised-button class=\"w3-green\" (click)=\"$('#importExcelModal').modal('show')\" >{{ \"import from excel\" | trans }}</button>\r\n\r\n    <br>\r\n\r\n<div class=\"w3-row student-container nicescroll\" style=\"padding: 5px;\"    >\r\n  <div *ngIf=\"isLoad\" class=\"w3-block text-center w3-padding\" >\r\n    <i class=\"fa fa-spin fa-refresh w3-jumbo w3-text-indigo\"></i>\r\n  </div>\r\n  <ng-container *ngFor=\"let item of resources.data\" >\r\n      <div class=\"{{ col }} student-list-col\" >\r\n        <div class=\"media material-shadow w3-white w3-padding w3-display-container student-list-item w3-round\">\r\n          <div class=\"w3-display-topleft w3-padding\">\r\n            <div class=\"text-left\">\r\n                <a href=\"#\" [routerLink]=\"['/student/', item.id]\" style=\"margin: 5px\" ><i class=\"material-shadow fa fa-edit btn btn-warning btn-sm\" ></i></a>\r\n\r\n                <a href=\"#\" [routerLink]=\"['/student/show/', item.id]\" style=\"margin: 5px\" ><i class=\"material-shadow fa fa-desktop btn btn-success btn-sm\" ></i></a>\r\n\r\n                <button (click)=\"showStudentPayments(item)\" style=\"margin: 5px\" class=\"material-shadow fa fa-money btn w3-indigo btn-sm\" > {{ \"student payments\" | trans }} </button>\r\n\r\n                <button class=\"btn btn-info btn-sm\">\r\n                  <b>{{ item.paid_value }}</b><b>جنيه</b>\r\n                </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"media-left\">\r\n            <a>\r\n              <img class=\"media-object w3-round\" [src]=\"item.image\" style=\"width: 100px;max-height: 210;\">\r\n            </a>\r\n          </div>\r\n          <div class=\"media-body\">\r\n            <h5 class=\"media-heading\">{{ item.name }}..</h5>\r\n            <table class=\"w3-tiny\" >\r\n              <tr>\r\n                <th>{{ \"level\" | trans }}</th>\r\n                <td>{{ item.level? item.level.name : '' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>{{ \"academic_year\" | trans }}</th>\r\n                <td>{{ item.academic_year? item.academic_year.name : '' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>{{ \"division\" | trans }}</th>\r\n                <td>{{ item.department? item.department.name : '' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>{{ \"qualification\" | trans }}</th>\r\n                <td>{{ item.qualification? item.qualification.name : '' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>{{ \"registeration_status\" | trans }}</th>\r\n                <td>{{ item.registeration_status? item.registeration_status.name : '' }}</td>\r\n              </tr>\r\n            </table>\r\n\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n\r\n\r\n\r\n</div>\r\n<br>\r\n<div class=\"text-center w3-center\" >\r\n    <nav aria-label=\"Page navigation\">\r\n        <ul class=\"pagination\">\r\n          <li>\r\n            <a   class=\"\" [ngClass]=\"{'disabled': !resources.prev_page}\" (click)=\"loadResources(resources.prev_page)\" aria-label=\"Previous\">\r\n              <span aria-hidden=\"true\">&laquo;</span>\r\n            </a>\r\n          </li>\r\n          <li *ngFor=\"let item of resources.pages_arr\"  >\r\n            <a class=\"\" [ngClass]=\"{'active': resources.current_page == item}\"  (click)=\"loadResources(item)\">{{ item }}</a>\r\n          </li>\r\n          <li>\r\n            <a   class=\"\" [ngClass]=\"{'disabled': !resources.next_page}\"  (click)=\"loadResources(resources.next_page)\" aria-label=\"Next\">\r\n              <span aria-hidden=\"true\">&raquo;</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n</div>\r\n\r\n\r\n<!-- remove modal -->\r\n<div class=\"w3-modal w3-block\" *ngIf=\"showRemoveModal\"  role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">{{ \"remove applications\" | trans }}</h4>\r\n        </div>\r\n        <div class=\"modal-body text-center\">\r\n            <i class=\"fa fa-spinner fa-spin w3-jumbo w3-text-indigo w3-center\" ></i>\r\n            <br>\r\n            {{ trashList.size() }} - {{ \"removed\" | trans }} {{ trashList.size() + removed.length }}\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n\r\n\r\n<!-- student payments modal -->\r\n<app-student-payment [payments]=\"selectedItem.payment_details? selectedItem.payment_details : []\" ></app-student-payment>\r\n\r\n\r\n<app-import-excel [apiUrl]=\"'import-student'\" [action]=\"loadResources\" ></app-import-excel>\r\n"

/***/ }),

/***/ "./src/app/student/components/student/student-index/student-index.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/student/components/student/student-index/student-index.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-list-item {\n  margin-bottom: 5px !important; }\n\n.student-list-col {\n  padding: 5px !important; }\n\n.student-container {\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1pbmRleC9FOlxccHJvamVjdFxcc2Ftc2FGcm9udEVuZC9zcmNcXGFwcFxcc3R1ZGVudFxcY29tcG9uZW50c1xcc3R1ZGVudFxcc3R1ZGVudC1pbmRleFxcc3R1ZGVudC1pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE0QixFQUFBOztBQUdoQztFQUNJLHVCQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9zdHVkZW50L3N0dWRlbnQtaW5kZXgvc3R1ZGVudC1pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHVkZW50LWxpc3QtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3R1ZGVudC1saXN0LWNvbCB7XHJcbiAgICBwYWRkaW5nOiA1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3R1ZGVudC1jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/student/components/student/student-index/student-index.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/student/components/student/student-index/student-index.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StudentIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentIndexComponent", function() { return StudentIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/student/services/student.service.ts");







var StudentIndexComponent = /** @class */ (function () {
    function StudentIndexComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.doc = document;
        this.$ = $;
        // Resources list
        this.resources = {};
        // init breadcrum
        this.breadcrumbList = [];
        // remove options
        this.showRemoveButton = false;
        this.showRemoveModal = false;
        this.trashList = new _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_5__["HashTable"]();
        this.removed = [];
        this.isLoad = false;
        this.selectedItem = {};
        this.col = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
        // init breadcrum
        !src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].can('student_read') ? Object(process__WEBPACK_IMPORTED_MODULE_3__["exit"])() : '';
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'students' }
        ];
        this.router.queryParams.subscribe(function (params) {
            var col = params['col'];
            console.log(col);
            //if (col)
            //  this.col = col;
        });
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
        this.isLoad = true;
        this.studentService.get(page).subscribe(function (res) {
            _this.resources = res;
            _this.prePagniation();
            _this.isLoad = false;
        });
    };
    StudentIndexComponent.prototype.setStudentContainerHeight = function () {
        //const height = window.innerHeight - 90;
        //this.doc.jquery('.student-container').css('height', height);
    };
    StudentIndexComponent.prototype.ngOnInit = function () {
        this.setStudentContainerHeight();
        this.loadResources();
    };
    StudentIndexComponent.prototype.showStudentPayments = function (item) {
        this.selectedItem = item;
        this.doc.jquery('#studentPayments').modal('show');
    };
    StudentIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-index',
            template: __webpack_require__(/*! ./student-index.component.html */ "./src/app/student/components/student/student-index/student-index.component.html"),
            styles: [__webpack_require__(/*! ./student-index.component.scss */ "./src/app/student/components/student/student-index/student-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StudentIndexComponent);
    return StudentIndexComponent;
}());



/***/ }),

/***/ "./src/app/student/components/student/student-show/student-show.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/student/components/student/student-show/student-show.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-10 col-md-10 col-sm-12\">\r\n      <div class=\"w3-white material-shadow safe-box\">\r\n        <div class=\"safe-box-header w3-xlarge\">\r\n          {{ \"show student\" | trans }}\r\n        </div>\r\n        <br>\r\n        <div class=\"border-bottom-dashed\" ></div>\r\n        <br>\r\n\r\n        <div class=\"safe-box-body row\" >\r\n\r\n          <div class=\"col-lg-3 col-md-3 col-sm-12\" >\r\n            <img [src]=\"student.image?  student.image : defaultImage\" class=\"w3-block w3-round border-gray\" >\r\n            <br>\r\n            <div class=\"custom-panel w3-display-container w3-round\" style=\"padding: 5px\" >\r\n\r\n              <div\r\n                class=\"alert alert-danger w3-block btn-margin-bottom text-center\"\r\n               >\r\n                {{ currentError }}\r\n              </div>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle(null)\"  >{{ \"all info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('student-info-panel')\"  >{{ \"student info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('military-info-panel')\"  >{{ \"military info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('parent-info-panel')\"  >{{ \"parent info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('additional-info-panel')\"  >{{ \"additional info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('document-info-panel')\"  >{{ \"required documents\" | trans }}</button>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-9 col-md-9 col-sm-12\" >\r\n\r\n\r\n\r\n            <!--\r\n\r\n        => student basic info\r\n        name\t                  email\r\n        academic_years_id\t      grade\r\n        registeration_date\t    phone_1\r\n        registration_status_id\tregistration_method_id\r\n        qualification_date\t    qualification_set_number\r\n        qualification_types_id\tqualification_id\r\n        level_id\t              case_constraint_id\r\n        national_id\t            password\r\n        acceptance_code\t        acceptance_date\r\n        status\t                writen_by\r\n\r\n\r\n        => additional info\r\n\r\n        nationality_id\t        gender\r\n        language_1_id\t          language_2_id\r\n        city_id\t                government_id\r\n        country_id\t            religion\r\n        address\t                birth_address\r\n        national_id_date\t      national_id_place\r\n\r\n        => military info\r\n        military_status_id\t    military_area_id\r\n        triple_number\r\n\r\n        => parent info\r\n        parent_name\t            parent_national_id\r\n        parent_job_id\t          parent_address\r\n        parent_phone\t          relative_relation_id\r\n\r\n        => personal image\r\n        personal_photo\r\n\r\n        => required document\r\n\r\n            -->\r\n            <div class=\"custom-panel w3-display-container w3-round student-panel student-info-panel\">\r\n              <div class=\"custom-panel-title\" >{{ \"student basic info\" | trans }}</div>\r\n\r\n              <div class=\"custom-panel-body\"  >\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block\" >\r\n                      <tr>\r\n                        <th>{{ \"student name\" | trans }} *</th>\r\n                        <td>\r\n                          <input readonly\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                          [(ngModel)]=\"student.name\" >\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"email\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.email\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"academic_years\" | trans }} *</th>\r\n                        <td>\r\n                          <select readonly\r\n                          (change)=\"watchLevel()\"\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                          [(ngModel)]=\"student.academic_years_id\">\r\n                            <option *ngFor=\"let item of studentSettings.ACADEMIC_YEARS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"grade\" | trans }} *</th>\r\n                          <td>\r\n                            <input readonly\r\n                            (change)=\"watchLevel()\"\r\n                            type=\"number\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.grade\" >\r\n                            <p *ngIf=\"gradeError\" class=\"w3-text-red w3-tiny\"  >\r\n                              {{ gradeError }}\r\n                            </p>\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"registeration_date\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly\r\n                            type=\"date\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.registeration_date\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"registeration_date\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly\r\n                            type=\"date\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.registeration_date\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"registration_status\" | trans }} *</th>\r\n                        <td>\r\n                          <select readonly\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                          [(ngModel)]=\"student.registration_status_id\">\r\n                            <option *ngFor=\"let item of studentSettings.REGISTERATION_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"registration_method\" | trans }}</th>\r\n                        <td>\r\n                          <select readonly\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                          [(ngModel)]=\"student.registration_method_id\">\r\n                            <option *ngFor=\"let item of studentSettings.REGISTERATION_METHODS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"national_id\" | trans }} *</th>\r\n                          <td>\r\n                            <input readonly\r\n                            type=\"text\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.national_id\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"qualification_date\" | trans }} *</th>\r\n                          <td>\r\n                            <input readonly\r\n                            type=\"date\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.qualification_date\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"qualification_set_number\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly\r\n                            type=\"number\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.qualification_set_number\" >\r\n                          </td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block w3-block\" >\r\n                        <tr>\r\n                          <th>{{ \"qualification\" | trans }} *</th>\r\n                          <td>\r\n                            <select readonly\r\n                            (change)=\"watchLevel()\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.qualification_id\">\r\n                              <option *ngFor=\"let item of studentSettings.QUALIFICATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                            </select>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>{{ \"qualification_types\" | trans }} *</th>\r\n                          <td>\r\n                            <select readonly\r\n                            (change)=\"watchLevel()\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.qualification_types_id\">\r\n                              <ng-container *ngFor=\"let item of studentSettings.QUALIFICATION_TYPES\">\r\n                                  <option *ngIf=\"item.qualification_id == student.qualification_id && item.academic_year_id == student.academic_years_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </ng-container>\r\n\r\n                            </select>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>{{ \"level\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly\r\n                            type=\"text\"\r\n                            readonly\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.level_name\" >\r\n                            <input readonly\r\n                            type=\"hidden\"\r\n                            [(ngModel)]=\"student.level_id\" >\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>{{ \"division\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly\r\n                            type=\"text\"\r\n                            readonly\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.division? student.division.name : student.division_id\" >\r\n\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>{{ \"department\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly\r\n                            type=\"text\"\r\n                            readonly\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.department? student.department.name : student.department_id\" >\r\n\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>{{ \"case_constraint\" | trans }}</th>\r\n                          <td>\r\n                            <select readonly\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"student.case_constraint_id\">\r\n                              <option *ngFor=\"let item of studentSettings.CASE_CONSTRAINTS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                            </select>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"coordination_password\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly\r\n                              type=\"password\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.password\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"acceptance_code\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly\r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.acceptance_code\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"acceptance_date\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly\r\n                              type=\"date\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.acceptance_date\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"phone_1\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly\r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.phone_1\" >\r\n                            </td>\r\n                        </tr>\r\n\r\n\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"custom-panel w3-display-container w3-round  application-panel military-info-panel\">\r\n              <div class=\"custom-panel-title\" >{{ \"old balance\" | trans }}</div>\r\n\r\n              <div class=\"custom-panel-body\"  >\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block\" >\r\n                        <tr>\r\n                          <th>{{ \"old_balance\" | trans }}</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"number\"\r\n                            readonly\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm w3-block\"\r\n                            [(ngModel)]=\"student.old_balance\" >\r\n                          </td>\r\n                        </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block\" >\r\n                        <tr>\r\n                          <th>{{ \"old_balance_notes\" | trans }}</th>\r\n                          <td>\r\n                            <textarea\r\n                            readonly\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm w3-block\"\r\n                            [(ngModel)]=\"student.old_balance_notes\" ></textarea>\r\n                          </td>\r\n                        </tr>\r\n                    </table>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div\r\n            *ngIf=\"student.gender != 'female'\"\r\n            class=\"custom-panel w3-display-container w3-round  student-panel military-info-panel\">\r\n                <div class=\"custom-panel-title\" >{{ \"military info\" | trans }}</div>\r\n\r\n                <div class=\"custom-panel-body\"  >\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"military_status\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.military_status_id\">\r\n                                <option *ngFor=\"let item of studentSettings.MALITARY_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"military_area\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.military_area_id\">\r\n                                <option *ngFor=\"let item of studentSettings.MALITARY_AREAS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"triple_number\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly\r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.triple_number\" >\r\n                            </td>\r\n                          </tr>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"custom-panel w3-display-container w3-round student-panel parent-info-panel\">\r\n                  <div class=\"custom-panel-title\" >{{ \"parent info\" | trans }}</div>\r\n\r\n                  <div class=\"custom-panel-body\"  >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <table class=\"table w3-block\" >\r\n                            <tr>\r\n                              <th>{{ \"parent_name\" | trans }}</th>\r\n                              <td>\r\n                                <input readonly\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"student.parent_name\" >\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"parent_national_id\" | trans }}</th>\r\n                              <td>\r\n                                <input readonly\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"student.parent_national_id\" >\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"parent_address\" | trans }}</th>\r\n                              <td>\r\n                                <input readonly\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"student.parent_address\" >\r\n                              </td>\r\n                            </tr>\r\n                        </table>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <table class=\"table w3-block w3-block\" >\r\n                            <tr>\r\n                              <th>{{ \"parent_phone\" | trans }}</th>\r\n                              <td>\r\n                                <input readonly\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"student.parent_phone\" >\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"parent_job\" | trans }}</th>\r\n                              <td>\r\n                                <select readonly\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"student.parent_job_id\">\r\n                                  <option *ngFor=\"let item of studentSettings.PARENT_JOBS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </select>\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"relative_relation\" | trans }}</th>\r\n                              <td>\r\n                                <select readonly\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"student.relative_relation_id\">\r\n                                  <option *ngFor=\"let item of studentSettings.RELATIVE_RELATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </select>\r\n                              </td>\r\n                            </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n            <div class=\"custom-panel w3-display-container w3-round student-panel additional-info-panel\">\r\n                <div class=\"custom-panel-title\" >{{ \"additional info\" | trans }}</div>\r\n\r\n                <div class=\"custom-panel-body\"  >\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"nationality\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.nationality_id\">\r\n                                <option *ngFor=\"let item of studentSettings.NATIONALITIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"gender\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.gender\">\r\n                                <option value=\"male\">{{ \"male\" | trans }}</option>\r\n                                <option value=\"female\">{{ \"female\" | trans }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"language_1\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.language_1_id\">\r\n                                <option *ngFor=\"let item of studentSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"language_2\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.language_2_id\">\r\n                                <option *ngFor=\"let item of studentSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"country\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.country_id\">\r\n                                <option *ngFor=\"let item of studentSettings.COUNTRIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"government\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.government_id\">\r\n                              <ng-container  *ngFor=\"let item of studentSettings.GOVERNMENTS\">\r\n                                  <option *ngIf=\"student.country_id == item.country_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </ng-container>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"city\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"student.city_id\">\r\n                                <ng-container  *ngFor=\"let item of studentSettings.CITIES\">\r\n                                    <option *ngIf=\"student.government_id == item.government_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </ng-container>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"religion\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.religion\">\r\n                                <option value=\"muslim\">{{ \"muslim\" | trans }}</option>\r\n                                <option value=\"christian\">{{ \"christian\" | trans }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"address\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.address\" >\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"birth_address\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.birth_address\" >\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"national_id_date\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.national_id_date\" >\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"national_id_place\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"student.national_id_place\" >\r\n                            </td>\r\n                          </tr>\r\n\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"custom-panel w3-display-container w3-round student-panel document-info-panel\">\r\n                  <div class=\"custom-panel-title\" >{{ \"required documents info\" | trans }}</div>\r\n\r\n                  <div class=\"custom-panel-body\"  >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                        <div class=\"row w3-padding\" >\r\n                          <div class=\"w3-padding text-center\" style=\"float: right;min-width: 120px;\" *ngFor=\"let item of student.student_required_document\" >\r\n                              <a [href]=\"item.path_url\" target=\"_blank\"  >\r\n                                  <img [src]=\"item.path_url\"  class=\" w3-round material-shadow w3-center\" style=\"height: 100px;\" >\r\n                                  <br>\r\n                                  {{ item.required_document.name  }}\r\n                              </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n              <div class=\"custom-panel w3-display-container w3-round\">\r\n                  <div class=\"custom-panel-body\"  >\r\n\r\n                    <a href=\"#\" class=\"btn btn-default small-shadow w3-margin-left\"  routerLink=\"/student\" >{{ \"exit\" | trans }}</a>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/student/components/student/student-show/student-show.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/student/components/student/student-show/student-show.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px;\n  background-color: transparent !important; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n    custom button style\r\n  */\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1zaG93L0U6XFxwcm9qZWN0XFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxzdHVkZW50XFxjb21wb25lbnRzXFxzdHVkZW50XFxzdHVkZW50LXNob3dcXHN0dWRlbnQtc2hvdy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1zaG93L3N0dWRlbnQtc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQ0YsRUFBQTs7QUFFQTtFQUNFLHlDQUF3QyxFQUFBOztBQUcxQztFQUNFLHVDQUFzQyxFQUFBOztBQUd4QztFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLHVDQUFzQztFQUN0Qyw4QkFBNkIsRUFBQTs7QUFJL0I7RUFDRSw2QkFBNEI7RUFDNUIsc0JBQXFCO0VBQ3JCLHFCQUFvQjtFQUNwQixzQkFBcUI7RUFDckIsa0NBQWlDO0VBQ2pDLDZCQUE0QjtFQUM1Qiw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSx3QkFBdUIsRUFBQTs7QUFHekI7RUFDRSx1REFBbUQsRUFBQTs7QUFHckQ7RUFDRSx5QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxpQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQkFBZ0I7RUFDaEIsd0NBQXVDLEVBQUE7O0FBR3pDO0VBQ0UseUJBQXdCLEVBQUE7O0FBRTFCOztHQ1ZDOztBRGNEO0VBQ0UsdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvc3R1ZGVudC9zdHVkZW50LXNob3cvc3R1ZGVudC1zaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhZmUtYm94IHtcclxuICAgIHBhZGRpbmc6IDEwcHhcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXItZGFzaGVkIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYnRuLW1hcmdpbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1wYW5lbCB7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY3VzdG9tLXBhbmVsLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IC0xM3B4IWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1wYW5lbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuc21hbGwtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXItZ3JheSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1pbnB1dCB7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubW9kYWwge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8haW1wb3J0YW50O1xyXG4gIH0gXHJcbiAgLypcclxuICAgIGN1c3RvbSBidXR0b24gc3R5bGVcclxuICAqL1xyXG5cclxuICBzZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgICIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1kYXNoZWQge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tcGFuZWwtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgdG9wOiAtMTNweCAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDsgfVxuXG4uc21hbGwtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDsgfVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgbWluLXdpZHRoOiA3MCUgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWdyYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1pbnB1dCB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cblxuLm1vZGFsIHtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4vKlxyXG4gICAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4gICovXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/student/components/student/student-show/student-show.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/student/components/student/student-show/student-show.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StudentShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentShowComponent", function() { return StudentShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _account_services_level_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/student/services/student.service.ts");
/* harmony import */ var _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");








var StudentShowComponent = /** @class */ (function () {
    function StudentShowComponent(studentService, route) {
        var _this = this;
        this.studentService = studentService;
        this.route = route;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"].doc;
        /**
         * student object
         */
        this.student = {};
        this.studentSettings = _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationSettingService"];
        this.defaultImage = '/assets/img/avatar.png';
        this.isSubmitted = false;
        this.studentData = null;
        if (this.studentData) {
            this.loadApplication(this.studentData.id);
        }
        else {
            this.route.params.subscribe(function (params) {
                var id = params['id'];
                if (id > 0) {
                    _this.loadApplication(id);
                }
            });
        }
    }
    StudentShowComponent.prototype.loadApplication = function (id) {
        var _this = this;
        this.studentService.load(id).subscribe(function (res) {
            _this.student = res;
            _this.setLevel();
        });
    };
    StudentShowComponent.prototype.toggle = function (selector) {
        if (selector) {
            this.doc.jquery('.student-panel').slideUp(500);
            this.doc.jquery('.' + selector).slideDown(500);
        }
        else {
            this.doc.jquery('.student-panel').slideDown(500);
        }
    };
    StudentShowComponent.prototype.setLevel = function () {
        var _this = this;
        var levels = _shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].get(_account_services_level_service__WEBPACK_IMPORTED_MODULE_3__["LevelService"].LEVEL_PREFIX);
        levels.forEach(function (element) {
            if (element.id == _this.student.level_id)
                _this.student.level_name = element.name;
        });
    };
    StudentShowComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentShowComponent.prototype, "studentData", void 0);
    StudentShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-show',
            template: __webpack_require__(/*! ./student-show.component.html */ "./src/app/student/components/student/student-show/student-show.component.html"),
            styles: [__webpack_require__(/*! ./student-show.component.scss */ "./src/app/student/components/student/student-show/student-show.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], StudentShowComponent);
    return StudentShowComponent;
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
/* harmony import */ var _components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/student/student-index/student-index.component */ "./src/app/student/components/student/student-index/student-index.component.ts");
/* harmony import */ var _components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/student/student-create/student-create.component */ "./src/app/student/components/student/student-create/student-create.component.ts");
/* harmony import */ var _components_student_student_show_student_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/student/student-show/student-show.component */ "./src/app/student/components/student/student-show/student-show.component.ts");






var routes = [
    {
        path: '',
        component: _components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_3__["StudentIndexComponent"]
    },
    {
        path: ':id',
        component: _components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_4__["StudentCreateComponent"]
    },
    {
        path: 'show/:id',
        component: _components_student_student_show_student_show_component__WEBPACK_IMPORTED_MODULE_5__["StudentShowComponent"]
    },
    {
        path: 'create',
        component: _components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_4__["StudentCreateComponent"]
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

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-md-3\">\r\n\r\n    <!-- navbar list -->\r\n    <div class=\"box box-primary material-shadow\">\r\n      <div class=\"box-body box-profile\">\r\n        <img class=\"profile-user-img img-responsive img-circle\" style=\"width: 60%!important\" src=\"/assets/img/account_settings.gif\" alt=\"User profile picture\">\r\n\r\n        <h3 class=\"profile-username text-center\">{{ \"adminision_settings\" | trans }}</h3>\r\n \r\n\r\n        <ul class=\"list-group list-group-unbordered\">\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\" routerLink='/adminision/settings/required_documents' >\r\n                <b>{{ \"required_documents\" | trans }}</b> \r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-newspaper-o\" ></i> \r\n                </a>\r\n            </a>\r\n          </li> \r\n        </ul> \r\n      </div>\r\n      <!-- /.box-body -->\r\n    </div>\r\n    <!-- /.box -->\r\n \r\n  </div>\r\n  <!-- /.col -->\r\n  <div class=\"col-md-9\"> \r\n      <router-outlet></router-outlet>\r\n  </div>\r\n  <!-- /.col -->\r\n</div>"

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
/* harmony import */ var _components_student_student_show_student_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/student/student-show/student-show.component */ "./src/app/student/components/student/student-show/student-show.component.ts");
/* harmony import */ var _components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/student/student-create/student-create.component */ "./src/app/student/components/student/student-create/student-create.component.ts");
/* harmony import */ var _components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/student/student-index/student-index.component */ "./src/app/student/components/student/student-index/student-index.component.ts");
/* harmony import */ var _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../account/account.module */ "./src/app/account/account.module.ts");












var StudentModule = /** @class */ (function () {
    function StudentModule(applicationSettingService) {
        this.applicationSettingService = applicationSettingService;
        this.applicationSettingService.loadSettings();
    }
    StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _student_component__WEBPACK_IMPORTED_MODULE_5__["StudentComponent"],
                _components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_7__["StudentCreateComponent"],
                _components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_8__["StudentIndexComponent"],
                _components_student_student_show_student_show_component__WEBPACK_IMPORTED_MODULE_6__["StudentShowComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _student_routing_module__WEBPACK_IMPORTED_MODULE_4__["StudentRoutingModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_11__["AccountModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
            ],
            exports: [
                _components_student_student_show_student_show_component__WEBPACK_IMPORTED_MODULE_6__["StudentShowComponent"],
                _components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_8__["StudentIndexComponent"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationSettingService"]])
    ], StudentModule);
    return StudentModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~affairs-affairs-module~student-student-module.js.map