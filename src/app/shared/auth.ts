
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
    Cache.remove(AuthService.API_TOKEN_PRFIX);
    Cache.remove(AuthService.USER_PRFIX);

    return false;
  }

  public static can(permission) {
    if (!Auth.user())
      return false;
    let permissions = Auth.user().permissions;
    if (permissions[permission])
      return true;

    return false;
  }
}
