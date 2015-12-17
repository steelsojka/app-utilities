declare class Reflect {
  static apply(target: Function, thisArg?: any, arguments?: Array<any>):any;
  static defineProperty(target: any, key: any, descriptor: any):boolean;
}
