/* tslint:disable */
/* eslint-disable */
/**
 * BlockScout API
 * API for BlockScout web app
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { RawTraceCallResult } from './RawTraceCallResult';
import {
    instanceOfRawTraceCallResult,
    RawTraceCallResultFromJSON,
    RawTraceCallResultFromJSONTyped,
    RawTraceCallResultToJSON,
} from './RawTraceCallResult';
import type { RawTraceCreateResult } from './RawTraceCreateResult';
import {
    instanceOfRawTraceCreateResult,
    RawTraceCreateResultFromJSON,
    RawTraceCreateResultFromJSONTyped,
    RawTraceCreateResultToJSON,
} from './RawTraceCreateResult';

/**
 * @type RawTraceResult
 * 
 * @export
 */
export type RawTraceResult = RawTraceCallResult | RawTraceCreateResult;

export function RawTraceResultFromJSON(json: any): RawTraceResult {
    return RawTraceResultFromJSONTyped(json, false);
}

export function RawTraceResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawTraceResult {
    if (json == null) {
        return json;
    }
    return RawTraceCallResultFromJSONTyped(json, true) || RawTraceCreateResultFromJSONTyped(json, true);
}

export function RawTraceResultToJSON(value?: RawTraceResult | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfRawTraceCallResult(value)) {
        return RawTraceCallResultToJSON(value as RawTraceCallResult);
    }
    if (instanceOfRawTraceCreateResult(value)) {
        return RawTraceCreateResultToJSON(value as RawTraceCreateResult);
    }

    return {};
}

