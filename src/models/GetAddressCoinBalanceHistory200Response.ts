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
import type { CoinBalanceHistoryEntry } from './CoinBalanceHistoryEntry';
import {
    CoinBalanceHistoryEntryFromJSON,
    CoinBalanceHistoryEntryFromJSONTyped,
    CoinBalanceHistoryEntryToJSON,
} from './CoinBalanceHistoryEntry';

/**
 * 
 * @export
 * @interface GetAddressCoinBalanceHistory200Response
 */
export interface GetAddressCoinBalanceHistory200Response {
    /**
     * 
     * @type {Array<CoinBalanceHistoryEntry>}
     * @memberof GetAddressCoinBalanceHistory200Response
     */
    items: Array<CoinBalanceHistoryEntry>;
    /**
     * 
     * @type {object}
     * @memberof GetAddressCoinBalanceHistory200Response
     */
    nextPageParams: object;
}

/**
 * Check if a given object implements the GetAddressCoinBalanceHistory200Response interface.
 */
export function instanceOfGetAddressCoinBalanceHistory200Response(value: object): boolean {
    if (!('items' in value)) return false;
    if (!('nextPageParams' in value)) return false;
    return true;
}

export function GetAddressCoinBalanceHistory200ResponseFromJSON(json: any): GetAddressCoinBalanceHistory200Response {
    return GetAddressCoinBalanceHistory200ResponseFromJSONTyped(json, false);
}

export function GetAddressCoinBalanceHistory200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAddressCoinBalanceHistory200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(CoinBalanceHistoryEntryFromJSON)),
        'nextPageParams': json['next_page_params'],
    };
}

export function GetAddressCoinBalanceHistory200ResponseToJSON(value?: GetAddressCoinBalanceHistory200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'items': ((value['items'] as Array<any>).map(CoinBalanceHistoryEntryToJSON)),
        'next_page_params': value['nextPageParams'],
    };
}

