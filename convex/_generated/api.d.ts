/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as functions_codeExecution from "../functions/codeExecution.js";
import type * as functions_snippets from "../functions/snippets.js";
import type * as functions_users from "../functions/users.js";
import type * as http from "../http.js";
import type * as lemonSqueezy from "../lemonSqueezy.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "functions/codeExecution": typeof functions_codeExecution;
  "functions/snippets": typeof functions_snippets;
  "functions/users": typeof functions_users;
  http: typeof http;
  lemonSqueezy: typeof lemonSqueezy;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
