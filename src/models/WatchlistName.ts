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
 * @interface WatchlistName
 */
export interface WatchlistName {
    /**
     * 
     * @type {string}
     * @memberof WatchlistName
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof WatchlistName
     */
    label: string;
}

/**
 * Check if a given object implements the WatchlistName interface.
 */
export function instanceOfWatchlistName(value: object): boolean {
    if (!('displayName' in value)) return false;
    if (!('label' in value)) return false;
    return true;
}

export function WatchlistNameFromJSON(json: any): WatchlistName {
    return WatchlistNameFromJSONTyped(json, false);
}

export function WatchlistNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistName {
    if (json == null) {
        return json;
    }
    return {
        
        'displayName': json['display_name'],
        'label': json['label'],
    };
}

export function WatchlistNameToJSON(value?: WatchlistName | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'display_name': value['displayName'],
        'label': value['label'],
    };
}
