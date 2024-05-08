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
 * @interface RawTraceSelfDestructAction
 */
export interface RawTraceSelfDestructAction {
    /**
     * 
     * @type {string}
     * @memberof RawTraceSelfDestructAction
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof RawTraceSelfDestructAction
     */
    balance: string;
    /**
     * 
     * @type {string}
     * @memberof RawTraceSelfDestructAction
     */
    refundAddress: string;
}

/**
 * Check if a given object implements the RawTraceSelfDestructAction interface.
 */
export function instanceOfRawTraceSelfDestructAction(value: object): boolean {
    if (!('address' in value)) return false;
    if (!('balance' in value)) return false;
    if (!('refundAddress' in value)) return false;
    return true;
}

export function RawTraceSelfDestructActionFromJSON(json: any): RawTraceSelfDestructAction {
    return RawTraceSelfDestructActionFromJSONTyped(json, false);
}

export function RawTraceSelfDestructActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawTraceSelfDestructAction {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'balance': json['balance'],
        'refundAddress': json['refundAddress'],
    };
}

export function RawTraceSelfDestructActionToJSON(value?: RawTraceSelfDestructAction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'address': value['address'],
        'balance': value['balance'],
        'refundAddress': value['refundAddress'],
    };
}

