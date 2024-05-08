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
 * @interface CoinBalanceHistoryByDaysEntry
 */
export interface CoinBalanceHistoryByDaysEntry {
    /**
     * 
     * @type {string}
     * @memberof CoinBalanceHistoryByDaysEntry
     */
    date: string;
    /**
     * 
     * @type {number}
     * @memberof CoinBalanceHistoryByDaysEntry
     */
    value: number;
}

/**
 * Check if a given object implements the CoinBalanceHistoryByDaysEntry interface.
 */
export function instanceOfCoinBalanceHistoryByDaysEntry(value: object): boolean {
    if (!('date' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function CoinBalanceHistoryByDaysEntryFromJSON(json: any): CoinBalanceHistoryByDaysEntry {
    return CoinBalanceHistoryByDaysEntryFromJSONTyped(json, false);
}

export function CoinBalanceHistoryByDaysEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinBalanceHistoryByDaysEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'date': json['date'],
        'value': json['value'],
    };
}

export function CoinBalanceHistoryByDaysEntryToJSON(value?: CoinBalanceHistoryByDaysEntry | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date': value['date'],
        'value': value['value'],
    };
}

