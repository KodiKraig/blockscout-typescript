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
import type { AddressNFTInstance } from './AddressNFTInstance';
import {
    AddressNFTInstanceFromJSON,
    AddressNFTInstanceFromJSONTyped,
    AddressNFTInstanceToJSON,
} from './AddressNFTInstance';

/**
 * 
 * @export
 * @interface GetAddressNft200Response
 */
export interface GetAddressNft200Response {
    /**
     * 
     * @type {Array<AddressNFTInstance>}
     * @memberof GetAddressNft200Response
     */
    items: Array<AddressNFTInstance>;
    /**
     * 
     * @type {object}
     * @memberof GetAddressNft200Response
     */
    nextPageParams: object;
}

/**
 * Check if a given object implements the GetAddressNft200Response interface.
 */
export function instanceOfGetAddressNft200Response(value: object): boolean {
    if (!('items' in value)) return false;
    if (!('nextPageParams' in value)) return false;
    return true;
}

export function GetAddressNft200ResponseFromJSON(json: any): GetAddressNft200Response {
    return GetAddressNft200ResponseFromJSONTyped(json, false);
}

export function GetAddressNft200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAddressNft200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(AddressNFTInstanceFromJSON)),
        'nextPageParams': json['next_page_params'],
    };
}

export function GetAddressNft200ResponseToJSON(value?: GetAddressNft200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'items': ((value['items'] as Array<any>).map(AddressNFTInstanceToJSON)),
        'next_page_params': value['nextPageParams'],
    };
}

