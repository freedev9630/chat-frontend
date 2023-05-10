export namespace ApiModel {
  export interface ReqParams {
      params?: any;
      url: string,
      data?: any,
  }

  export interface ResponseParams<T> {
      response: T
  }

}
