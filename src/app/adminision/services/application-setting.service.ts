import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Auth } from '../../shared/auth';

@Injectable({
  providedIn: 'root'
})
export class ApplicationSettingService {

  public static NATIONALITIES: any = [];
  public static CASE_CONSTRAINTS: any = [];
  public static ACADEMIC_YEARS: any = [];
  public static QUALIFICATION_TYPES: any = [];
  public static QUALIFICATIONS: any = [];
  public static REGISTERATION_STATUS: any = [];
  public static REGISTERATION_METHODS: any = [];
  public static LANGUAGES: any = [];
  public static CITIES: any = [];
  public static GOVERNMENTS: any = [];
  public static COUNTRIES: any = [];
  public static MILITARY_STATUS: any = [];
  public static MILITARY_AREAS: any = [];
  public static PARENT_JOBS: any = [];
  public static RELATIVE_RELATIONS: any = [];
  public static REQUIRED_DOCUMENTS: any = [];
  public static DEPARTMENTS: any = [];
  public static REGSITERATIN_STATUS_DOCUMENTS: any = [];
  public static DIVISIONS: any = [];
  public static SETTINGS: any = [];

  public static LOADED: any = false;

  public requestQueue =  [];

  constructor(private http: HttpClient) {
    this.queueRequests();
  }

  queueRequests() {
    this.requestQueue.push({request: this.getCaseConstraints(), object: 'CASE_CONSTRAINTS'});
    this.requestQueue.push({request: this.getNationalities(), object: 'NATIONALITIES'});
    this.requestQueue.push({request: this.getAcademicYears(), object: 'ACADEMIC_YEARS'});
    this.requestQueue.push({request: this.getQualificationTypes(), object: 'QUALIFICATION_TYPES'});
    this.requestQueue.push({request: this.getQualifications(), object: 'QUALIFICATIONS'});
    this.requestQueue.push({request: this.getRegisterationStatus(), object: 'REGISTERATION_STATUS'});
    this.requestQueue.push({request: this.getRegisterationMethods(), object: 'REGISTERATION_METHODS'});
    this.requestQueue.push({request: this.getLanguages(), object: 'LANGUAGES'});
    this.requestQueue.push({request: this.getCities(), object: 'CITIES'});
    this.requestQueue.push({request: this.getGovernments(), object: 'GOVERNMENTS'});
    this.requestQueue.push({request: this.getCountries(), object: 'COUNTRIES'});
    this.requestQueue.push({request: this.getMilitaryStatus(), object: 'MILITARY_STATUS'});
    this.requestQueue.push({request: this.getMilitaryAreas(), object: 'MILITARY_AREAS'});
    this.requestQueue.push({request: this.getParentJobs(), object: 'CITIES'});
    this.requestQueue.push({request: this.getRelativeRelations(), object: 'PARENT_JOBS'});
    this.requestQueue.push({request: this.getRequiredDocuments(), object: 'REQUIRED_DOCUMENTS'});
    this.requestQueue.push({request: this.getDepartments(), object: 'DEPARTMENTS'});
    this.requestQueue.push({request: this.getRegisterationStatusDocuments(), object: 'REGSITERATIN_STATUS_DOCUMENTS'});
    this.requestQueue.push({request: this.getDivisions(), object: 'DIVISIONS'});
    this.requestQueue.push({request: this.getSettings(), object: 'SETTINGS'});
    //
    this.requestQueue.reverse();
  }

  public load() {
    this.requestQueue.forEach(firstElement => {
      if (ApplicationSettingService[firstElement.object].length <= 0) {
        firstElement.request.subscribe((res) => {
          ApplicationSettingService[firstElement.object] = res;
          console.log(firstElement.object);
          //
        });
      }
    });
  }

  public loadSettings() {
  //this.load();
  // return;
    let firstElement = this.requestQueue.pop();

    if (firstElement) {
      if (ApplicationSettingService[firstElement.object].length <= 0) {
        firstElement.request.subscribe((res) => {
          ApplicationSettingService[firstElement.object] = res;
          console.log(firstElement.object);
          //
          this.loadSettings();
        }, (error)=> {
          console.log(error);
        });
      }
    }
  }

  public getDivisions() {
    return this.http.get('account/divisions?api_token=' + Auth.getApiToken());
  }

  public getRegisterationStatusDocuments() {
    return this.http.get('adminision/get_registeration_status_document?api_token=' + Auth.getApiToken());
  }

  public getDepartments() {
    return this.http.get('adminision/get_departments?api_token=' + Auth.getApiToken());
  }

  public getRequiredDocuments() {
    return this.http.get('adminision/required_documents?api_token=' + Auth.getApiToken());
  }

  public getCaseConstraints() {
    return this.http.get('adminision/get_case_constraints?api_token=' + Auth.getApiToken());
  }

  public getRelativeRelations() {
    return this.http.get('adminision/get_relative_relations?api_token=' + Auth.getApiToken());
  }

  public getNationalities() {
    return this.http.get('adminision/get_nationality?api_token=' + Auth.getApiToken());
  }

  public getAcademicYears() {
    return this.http.get('adminision/get_academic_years?api_token=' + Auth.getApiToken());
  }

  public getQualificationTypes() {
    return this.http.get('adminision/get_qualification_types?api_token=' + Auth.getApiToken());
  }

  public getQualifications() {
    return this.http.get('adminision/get_qualifications?api_token=' + Auth.getApiToken());
  }

  public getRegisterationStatus() {
    return this.http.get('adminision/get_registeration_status?api_token=' + Auth.getApiToken());
  }

  public getRegisterationMethods() {
    return this.http.get('adminision/get_registration_methods?api_token=' + Auth.getApiToken());
  }

  public getLanguages() {
    return this.http.get('adminision/get_languages?api_token=' + Auth.getApiToken());
  }

  public getCities() {
    return this.http.get('adminision/get_cities?api_token=' + Auth.getApiToken());
  }

  public getGovernments() {
    return this.http.get('adminision/get_governments?api_token=' + Auth.getApiToken());
  }

  public getCountries() {
    return this.http.get('adminision/get_countries?api_token=' + Auth.getApiToken());
  }

  public getMilitaryStatus() {
    return this.http.get('adminision/get_military_status?api_token=' + Auth.getApiToken());
  }

  public getMilitaryAreas() {
    return this.http.get('adminision/get_military_areas?api_token=' + Auth.getApiToken());
  }

  public getParentJobs() {
    return this.http.get('adminision/get_parent_jobs?api_token=' + Auth.getApiToken());
  }

  public updateSetting(data) {
    return this.http.post('adminision/update_setting?api_token=' + Auth.getApiToken(), data);
  }

  public getSettings() {
    return this.http.get('adminision/get_settings?api_token=' + Auth.getApiToken());
  }


}
