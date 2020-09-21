 
import { Cache } from './cache';
import { AuthService } from './services/auth.service';

export class Auth {

  /**
   * return api token of user
   *
   */
  public static getApiToken() {
    return Cache.get(AuthService.API_TOKEN_PRFIX);
  }
  
  /**
   * return user
   *
   */
  public static user() {
    return Cache.get(AuthService.USER_PRFIX);
  }

  /**
   * remove user object from cache
   */
  public static logout() {
    return Cache.remove(AuthService.API_TOKEN_PRFIX);
    return Cache.remove(AuthService.USER_PRFIX); 
  }
}
