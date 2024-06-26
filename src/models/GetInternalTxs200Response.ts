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
import type { InternalTransaction } from './InternalTransaction';
import {
    InternalTransactionFromJSON,
    InternalTransactionFromJSONTyped,
    InternalTransactionToJSON,
} from './InternalTransaction';

/**
 * 
 * @export
 * @interface GetInternalTxs200Response
 */
export interface GetInternalTxs200Response {
    /**
     * 
     * @type {Array<InternalTransaction>}
     * @memberof GetInternalTxs200Response
     */
    items: Array<InternalTransaction>;
    /**
     * 
     * @type {object}
     * @memberof GetInternalTxs200Response
     */
    nextPageParams: object;
}

/**
 * Check if a given object implements the GetInternalTxs200Response interface.
 */
export function instanceOfGetInternalTxs200Response(value: object): boolean {
    if (!('items' in value)) return false;
    if (!('nextPageParams' in value)) return false;
    return true;
}

export function GetInternalTxs200ResponseFromJSON(json: any): GetInternalTxs200Response {
    return GetInternalTxs200ResponseFromJSONTyped(json, false);
}

export function GetInternalTxs200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetInternalTxs200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(InternalTransactionFromJSON)),
        'nextPageParams': json['next_page_params'],
    };
}

export function GetInternalTxs200ResponseToJSON(value?: GetInternalTxs200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'items': ((value['items'] as Array<any>).map(InternalTransactionToJSON)),
        'next_page_params': value['nextPageParams'],
    };
}

