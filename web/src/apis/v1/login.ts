// @ts-ignore
/* eslint-disable */
///////////////////////////////////////////////////////////////////////
//                                                                   //
// this file is autogenerated by service-generate                    //
// do not edit this file manually                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
/// <reference path = "api-auto.d.ts" />
import request from "@/utils/request";

/**
 * Redirect to login page
 */
export async function AuthControllerGetSigninUrl(
  params: Paths.AuthControllerGetSigninUrl.BodyParameters | any,
): Promise<Paths.AuthControllerGetSigninUrl.Responses> {
  // /v1/login
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/login`, {
    method: "GET",
    params: params,
  });
}
