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
import type { Holder } from './Holder';
import {
    HolderFromJSON,
    HolderFromJSONTyped,
    HolderToJSON,
} from './Holder';

/**
 * 
 * @export
 * @interface GetTokenInstanceHolders200Response
 */
export interface GetTokenInstanceHolders200Response {
    /**
     * 
     * @type {Array<Holder>}
     * @memberof GetTokenInstanceHolders200Response
     */
    items: Array<Holder>;
    /**
     * 
     * @type {object}
     * @memberof GetTokenInstanceHolders200Response
     */
    nextPageParams: object;
}

/**
 * Check if a given object implements the GetTokenInstanceHolders200Response interface.
 */
export function instanceOfGetTokenInstanceHolders200Response(value: object): boolean {
    if (!('items' in value)) return false;
    if (!('nextPageParams' in value)) return false;
    return true;
}

export function GetTokenInstanceHolders200ResponseFromJSON(json: any): GetTokenInstanceHolders200Response {
    return GetTokenInstanceHolders200ResponseFromJSONTyped(json, false);
}

export function GetTokenInstanceHolders200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTokenInstanceHolders200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(HolderFromJSON)),
        'nextPageParams': json['next_page_params'],
    };
}

export function GetTokenInstanceHolders200ResponseToJSON(value?: GetTokenInstanceHolders200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'items': ((value['items'] as Array<any>).map(HolderToJSON)),
        'next_page_params': value['nextPageParams'],
    };
}

