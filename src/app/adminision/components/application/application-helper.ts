import { Gender } from '../../../shared/gender';
export class ApplicationHelper {


  /**
   * check if national id is correct based on date
   * @param date yyyy-mm-dd
   */
  public static validateOnNationalId(nationalId: any, date: any=new Date().toISOString().substring(0, 10)) {
    try {
      var dObject = new Date(date);
      var startYear = 1900;
      var birthYear = dObject.getFullYear();
      var diff = birthYear - startYear;
      var century = Math.ceil(diff / 100) + 1;
      var shortDateFormat = dObject.toISOString().substring(0, 10).replace(/-/g, "").substring(2);
      var startOfNationalId = century + shortDateFormat;

      console.log("start of national id : ", startOfNationalId);
      return nationalId.startsWith(startOfNationalId);
    } catch (error) {
      return false;
    }
  }


  /**
   * check if gender male or female from national id
   * digit number 12
   *  even => Female
   *  odd  => male
   * @param nationalId
   * @returns
   */
  public static getGenderFromNationalId(nationalId: any) {
    return ((parseInt(nationalId.substring(12, 12)) % 2) == 0)? Gender.FEMALE : Gender.MALE;
  }

}
