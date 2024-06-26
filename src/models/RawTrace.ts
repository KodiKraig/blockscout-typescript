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

import { mapValues } from '../runtime';
import type { RawTraceAction } from './RawTraceAction';
import {
    RawTraceActionFromJSON,
    RawTraceActionFromJSONTyped,
    RawTraceActionToJSON,
} from './RawTraceAction';
import type { RawTraceResult } from './RawTraceResult';
import {
    RawTraceResultFromJSON,
    RawTraceResultFromJSONTyped,
    RawTraceResultToJSON,
} from './RawTraceResult';

/**
 * 
 * @export
 * @interface RawTrace
 */
export interface RawTrace {
    /**
     * 
     * @type {RawTraceAction}
     * @memberof RawTrace
     */
    action: RawTraceAction;
    /**
     * 
     * @type {number}
     * @memberof RawTrace
     */
    subtraces: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof RawTrace
     */
    traceAddress: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof RawTrace
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof RawTrace
     */
    error?: string;
    /**
     * 
     * @type {RawTraceResult}
     * @memberof RawTrace
     */
    result?: RawTraceResult;
}

/**
 * Check if a given object implements the RawTrace interface.
 */
export function instanceOfRawTrace(value: object): boolean {
    if (!('action' in value)) return false;
    if (!('subtraces' in value)) return false;
    if (!('traceAddress' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function RawTraceFromJSON(json: any): RawTrace {
    return RawTraceFromJSONTyped(json, false);
}

export function RawTraceFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawTrace {
    if (json == null) {
        return json;
    }
    return {
        
        'action': RawTraceActionFromJSON(json['action']),
        'subtraces': json['subtraces'],
        'traceAddress': json['traceAddress'],
        'type': json['type'],
        'error': json['error'] == null ? undefined : json['error'],
        'result': json['result'] == null ? undefined : RawTraceResultFromJSON(json['result']),
    };
}

export function RawTraceToJSON(value?: RawTrace | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': RawTraceActionToJSON(value['action']),
        'subtraces': value['subtraces'],
        'traceAddress': value['traceAddress'],
        'type': value['type'],
        'error': value['error'],
        'result': RawTraceResultToJSON(value['result']),
    };
}

