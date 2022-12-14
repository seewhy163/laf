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
 * Create a new function
 */
export async function FunctionControllerCreate(
  params: Definitions.CreateFunctionDto | any,
): Promise<Paths.FunctionControllerCreate.Responses> {
  // /v1/apps/{appid}/functions
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions`, {
    method: "POST",
    data: params,
  });
}

/**
 * Query function list of an app
 */
export async function FunctionControllerFindAll(
  params: Paths.FunctionControllerFindAll.BodyParameters | any,
): Promise<Paths.FunctionControllerFindAll.Responses> {
  // /v1/apps/{appid}/functions
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get a function by its name
 */
export async function FunctionControllerFindOne(
  params: Paths.FunctionControllerFindOne.BodyParameters | any,
): Promise<Paths.FunctionControllerFindOne.Responses> {
  // /v1/apps/{appid}/functions/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update a function
 */
export async function FunctionControllerUpdate(
  params: Definitions.UpdateFunctionDto | any,
): Promise<Paths.FunctionControllerUpdate.Responses> {
  // /v1/apps/{appid}/functions/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a function
 */
export async function FunctionControllerRemove(
  params: Paths.FunctionControllerRemove.BodyParameters | any,
): Promise<Paths.FunctionControllerRemove.Responses> {
  // /v1/apps/{appid}/functions/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Compile a function
 */
export async function FunctionControllerCompile(
  params: Paths.FunctionControllerCompile.BodyParameters | any,
): Promise<Paths.FunctionControllerCompile.Responses> {
  // /v1/apps/{appid}/functions/{name}/compile
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/functions/${_params.name}/compile`, {
    method: "POST",
    data: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerCreate(
  params: Definitions.CreateWebsiteDto | any,
): Promise<Paths.WebsitesControllerCreate.Responses> {
  // /v1/apps/{appid}/websites
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites`, {
    method: "POST",
    data: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerFindAll(
  params: Paths.WebsitesControllerFindAll.BodyParameters | any,
): Promise<Paths.WebsitesControllerFindAll.Responses> {
  // /v1/apps/{appid}/websites
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites`, {
    method: "GET",
    params: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerFindOne(
  params: Paths.WebsitesControllerFindOne.BodyParameters | any,
): Promise<Paths.WebsitesControllerFindOne.Responses> {
  // /v1/apps/{appid}/websites/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}`, {
    method: "GET",
    params: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerUpdate(
  params: Definitions.UpdateWebsiteDto | any,
): Promise<Paths.WebsitesControllerUpdate.Responses> {
  // /v1/apps/{appid}/websites/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerRemove(
  params: Paths.WebsitesControllerRemove.BodyParameters | any,
): Promise<Paths.WebsitesControllerRemove.Responses> {
  // /v1/apps/{appid}/websites/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/websites/${_params.id}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * Create a new collection in database
 */
export async function CollectionControllerCreate(
  params: Definitions.CreateCollectionDto | any,
): Promise<Paths.CollectionControllerCreate.Responses> {
  // /v1/apps/{appid}/collections
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get collection list of an application
 */
export async function CollectionControllerFindAll(
  params: Paths.CollectionControllerFindAll.BodyParameters | any,
): Promise<Paths.CollectionControllerFindAll.Responses> {
  // /v1/apps/{appid}/collections
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get collection by name
 */
export async function CollectionControllerFindOne(
  params: Paths.CollectionControllerFindOne.BodyParameters | any,
): Promise<Paths.CollectionControllerFindOne.Responses> {
  // /v1/apps/{appid}/collections/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections/${_params.name}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update a collection
 */
export async function CollectionControllerUpdate(
  params: Definitions.UpdateCollectionDto | any,
): Promise<Paths.CollectionControllerUpdate.Responses> {
  // /v1/apps/{appid}/collections/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a collection by its name
 */
export async function CollectionControllerRemove(
  params: Paths.CollectionControllerRemove.BodyParameters | any,
): Promise<Paths.CollectionControllerRemove.Responses> {
  // /v1/apps/{appid}/collections/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/collections/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function PolicyControllerCreate(
  params: Definitions.CreatePolicyDto | any,
): Promise<Paths.PolicyControllerCreate.Responses> {
  // /v1/apps/{appid}/policies
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies`, {
    method: "POST",
    data: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function PolicyControllerFindAll(
  params: Paths.PolicyControllerFindAll.BodyParameters | any,
): Promise<Paths.PolicyControllerFindAll.Responses> {
  // /v1/apps/{appid}/policies
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies`, {
    method: "GET",
    params: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function PolicyControllerFindOne(
  params: Paths.PolicyControllerFindOne.BodyParameters | any,
): Promise<Paths.PolicyControllerFindOne.Responses> {
  // /v1/apps/{appid}/policies/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.id}`, {
    method: "GET",
    params: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function PolicyControllerUpdate(
  params: Definitions.UpdatePolicyDto | any,
): Promise<Paths.PolicyControllerUpdate.Responses> {
  // /v1/apps/{appid}/policies/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.id}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * TODO - ⌛️
 */
export async function PolicyControllerRemove(
  params: Paths.PolicyControllerRemove.BodyParameters | any,
): Promise<Paths.PolicyControllerRemove.Responses> {
  // /v1/apps/{appid}/policies/{id}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/policies/${_params.id}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * The database proxy for database management
 */
export async function DatabaseControllerProxy(
  params: Paths.DatabaseControllerProxy.BodyParameters | any,
): Promise<Paths.DatabaseControllerProxy.Responses> {
  // /v1/apps/{appid}/databases/proxy
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/databases/proxy`, {
    method: "POST",
    data: params,
  });
}

/**
 * Create a new bucket
 */
export async function BucketControllerCreate(
  params: Definitions.CreateBucketDto | any,
): Promise<Paths.BucketControllerCreate.Responses> {
  // /v1/apps/{appid}/buckets
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get bucket list of an app
 */
export async function BucketControllerFindAll(
  params: Paths.BucketControllerFindAll.BodyParameters | any,
): Promise<Paths.BucketControllerFindAll.Responses> {
  // /v1/apps/{appid}/buckets
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get a bucket by name
 */
export async function BucketControllerFindOne(
  params: Paths.BucketControllerFindOne.BodyParameters | any,
): Promise<Paths.BucketControllerFindOne.Responses> {
  // /v1/apps/{appid}/buckets/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets/${_params.name}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Update a bucket
 */
export async function BucketControllerUpdate(
  params: Definitions.UpdateBucketDto | any,
): Promise<Paths.BucketControllerUpdate.Responses> {
  // /v1/apps/{appid}/buckets/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets/${_params.name}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a bucket
 */
export async function BucketControllerRemove(
  params: Paths.BucketControllerRemove.BodyParameters | any,
): Promise<Paths.BucketControllerRemove.Responses> {
  // /v1/apps/{appid}/buckets/{name}
  let _params: { [key: string]: any } = {
    appid: localStorage.getItem("app"),
    ...params,
  };
  return request(`/v1/apps/${_params.appid}/buckets/${_params.name}`, {
    method: "DELETE",
    data: params,
  });
}
