/* @flow */

export default function of(item:any):Array<any> {
  return Array.isArray(item) ? item : [item];
}
