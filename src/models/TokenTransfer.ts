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
import type { AddressParam } from './AddressParam';
import {
    AddressParamFromJSON,
    AddressParamFromJSONTyped,
    AddressParamToJSON,
} from './AddressParam';
import type { TokenInfo } from './TokenInfo';
import {
    TokenInfoFromJSON,
    TokenInfoFromJSONTyped,
    TokenInfoToJSON,
} from './TokenInfo';
import type { TokenTransferTotal } from './TokenTransferTotal';
import {
    TokenTransferTotalFromJSON,
    TokenTransferTotalFromJSONTyped,
    TokenTransferTotalToJSON,
} from './TokenTransferTotal';

/**
 * 
 * @export
 * @interface TokenTransfer
 */
export interface TokenTransfer {
    /**
     * 
     * @type {string}
     * @memberof TokenTransfer
     */
    blockHash: string;
    /**
     * 
     * @type {AddressParam}
     * @memberof TokenTransfer
     */
    from: AddressParam;
    /**
     * 
     * @type {string}
     * @memberof TokenTransfer
     */
    logIndex: string;
    /**
     * 
     * @type {string}
     * @memberof TokenTransfer
     */
    method: string;
    /**
     * 
     * @type {string}
     * @memberof TokenTransfer
     */
    timestamp: string;
    /**
     * 
     * @type {AddressParam}
     * @memberof TokenTransfer
     */
    to: AddressParam;
    /**
     * 
     * @type {TokenInfo}
     * @memberof TokenTransfer
     */
    token: TokenInfo;
    /**
     * 
     * @type {TokenTransferTotal}
     * @memberof TokenTransfer
     */
    total: TokenTransferTotal;
    /**
     * 
     * @type {string}
     * @memberof TokenTransfer
     */
    txHash: string;
    /**
     * 
     * @type {string}
     * @memberof TokenTransfer
     */
    type: string;
}

/**
 * Check if a given object implements the TokenTransfer interface.
 */
export function instanceOfTokenTransfer(value: object): boolean {
    if (!('blockHash' in value)) return false;
    if (!('from' in value)) return false;
    if (!('logIndex' in value)) return false;
    if (!('method' in value)) return false;
    if (!('timestamp' in value)) return false;
    if (!('to' in value)) return false;
    if (!('token' in value)) return false;
    if (!('total' in value)) return false;
    if (!('txHash' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function TokenTransferFromJSON(json: any): TokenTransfer {
    return TokenTransferFromJSONTyped(json, false);
}

export function TokenTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenTransfer {
    if (json == null) {
        return json;
    }
    return {
        
        'blockHash': json['block_hash'],
        'from': AddressParamFromJSON(json['from']),
        'logIndex': json['log_index'],
        'method': json['method'],
        'timestamp': json['timestamp'],
        'to': AddressParamFromJSON(json['to']),
        'token': TokenInfoFromJSON(json['token']),
        'total': TokenTransferTotalFromJSON(json['total']),
        'txHash': json['tx_hash'],
        'type': json['type'],
    };
}

export function TokenTransferToJSON(value?: TokenTransfer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'block_hash': value['blockHash'],
        'from': AddressParamToJSON(value['from']),
        'log_index': value['logIndex'],
        'method': value['method'],
        'timestamp': value['timestamp'],
        'to': AddressParamToJSON(value['to']),
        'token': TokenInfoToJSON(value['token']),
        'total': TokenTransferTotalToJSON(value['total']),
        'tx_hash': value['txHash'],
        'type': value['type'],
    };
}

