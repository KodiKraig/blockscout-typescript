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
import type { TransactionSummaryObj } from './TransactionSummaryObj';
import {
    TransactionSummaryObjFromJSON,
    TransactionSummaryObjFromJSONTyped,
    TransactionSummaryObjToJSON,
} from './TransactionSummaryObj';

/**
 * 
 * @export
 * @interface TransactionSummary
 */
export interface TransactionSummary {
    /**
     * 
     * @type {boolean}
     * @memberof TransactionSummary
     */
    success: boolean;
    /**
     * 
     * @type {TransactionSummaryObj}
     * @memberof TransactionSummary
     */
    data: TransactionSummaryObj;
}

/**
 * Check if a given object implements the TransactionSummary interface.
 */
export function instanceOfTransactionSummary(value: object): boolean {
    if (!('success' in value)) return false;
    if (!('data' in value)) return false;
    return true;
}

export function TransactionSummaryFromJSON(json: any): TransactionSummary {
    return TransactionSummaryFromJSONTyped(json, false);
}

export function TransactionSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': TransactionSummaryObjFromJSON(json['data']),
    };
}

export function TransactionSummaryToJSON(value?: TransactionSummary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'success': value['success'],
        'data': TransactionSummaryObjToJSON(value['data']),
    };
}

