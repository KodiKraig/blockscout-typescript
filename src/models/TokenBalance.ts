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
import type { NFTInstance } from './NFTInstance';
import {
    NFTInstanceFromJSON,
    NFTInstanceFromJSONTyped,
    NFTInstanceToJSON,
} from './NFTInstance';
import type { Token } from './Token';
import {
    TokenFromJSON,
    TokenFromJSONTyped,
    TokenToJSON,
} from './Token';

/**
 * 
 * @export
 * @interface TokenBalance
 */
export interface TokenBalance {
    /**
     * 
     * @type {NFTInstance}
     * @memberof TokenBalance
     */
    tokenInstance?: NFTInstance;
    /**
     * 
     * @type {string}
     * @memberof TokenBalance
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof TokenBalance
     */
    tokenId: string;
    /**
     * 
     * @type {Token}
     * @memberof TokenBalance
     */
    token: Token;
}

/**
 * Check if a given object implements the TokenBalance interface.
 */
export function instanceOfTokenBalance(value: object): boolean {
    if (!('value' in value)) return false;
    if (!('tokenId' in value)) return false;
    if (!('token' in value)) return false;
    return true;
}

export function TokenBalanceFromJSON(json: any): TokenBalance {
    return TokenBalanceFromJSONTyped(json, false);
}

export function TokenBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenBalance {
    if (json == null) {
        return json;
    }
    return {
        
        'tokenInstance': json['token_instance'] == null ? undefined : NFTInstanceFromJSON(json['token_instance']),
        'value': json['value'],
        'tokenId': json['token_id'],
        'token': TokenFromJSON(json['token']),
    };
}

export function TokenBalanceToJSON(value?: TokenBalance | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token_instance': NFTInstanceToJSON(value['tokenInstance']),
        'value': value['value'],
        'token_id': value['tokenId'],
        'token': TokenToJSON(value['token']),
    };
}

