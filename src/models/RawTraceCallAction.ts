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
/**
 * 
 * @export
 * @interface RawTraceCallAction
 */
export interface RawTraceCallAction {
    /**
     * 
     * @type {string}
     * @memberof RawTraceCallAction
     */
    callType: string;
    /**
     * 
     * @type {string}
     * @memberof RawTraceCallAction
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof RawTraceCallAction
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof RawTraceCallAction
     */
    input: string;
    /**
     * 
     * @type {string}
     * @memberof RawTraceCallAction
     */
    gas: string;
    /**
     * 
     * @type {string}
     * @memberof RawTraceCallAction
     */
    value: string;
}

/**
 * Check if a given object implements the RawTraceCallAction interface.
 */
export function instanceOfRawTraceCallAction(value: object): boolean {
    if (!('callType' in value)) return false;
    if (!('to' in value)) return false;
    if (!('from' in value)) return false;
    if (!('input' in value)) return false;
    if (!('gas' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function RawTraceCallActionFromJSON(json: any): RawTraceCallAction {
    return RawTraceCallActionFromJSONTyped(json, false);
}

export function RawTraceCallActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawTraceCallAction {
    if (json == null) {
        return json;
    }
    return {
        
        'callType': json['callType'],
        'to': json['to'],
        'from': json['from'],
        'input': json['input'],
        'gas': json['gas'],
        'value': json['value'],
    };
}

export function RawTraceCallActionToJSON(value?: RawTraceCallAction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'callType': value['callType'],
        'to': value['to'],
        'from': value['from'],
        'input': value['input'],
        'gas': value['gas'],
        'value': value['value'],
    };
}

