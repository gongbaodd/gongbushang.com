import { PASSWD } from './login';
import * as md5 from 'md5';
import { NODE_ENVS } from '../environments';
const isDev = process.env.NODE_ENV !== NODE_ENVS.production;

export function isAuth(auth: string) {
  if (!isDev) {
    if (auth !== `Bearer ${md5(PASSWD)}`) {
      throw new Error('unAuthorized');
    }
    return false;
  }
  return true;
}
