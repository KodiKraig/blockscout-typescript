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
import type { DecodedInputLog } from './DecodedInputLog';
import {
    DecodedInputLogFromJSON,
    DecodedInputLogFromJSONTyped,
    DecodedInputLogToJSON,
} from './DecodedInputLog';

/**
 * 
 * @export
 * @interface Log
 */
export interface Log {
    /**
     * 
     * @type {AddressParam}
     * @memberof Log
     */
    address: AddressParam;
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    blockHash?: string;
    /**
     * 
     * @type {number}
     * @memberof Log
     */
    blockNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    data: string;
    /**
     * 
     * @type {DecodedInputLog}
     * @memberof Log
     */
    decoded: DecodedInputLog;
    /**
     * 
     * @type {number}
     * @memberof Log
     */
    index: number;
    /**
     * 
     * @type {AddressParam}
     * @memberof Log
     */
    smartContract: AddressParam;
    /**
     * 
     * @type {Array<string>}
     * @memberof Log
     */
    topics: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    transactionHash: string;
}

/**
 * Check if a given object implements the Log interface.
 */
export function instanceOfLog(value: object): boolean {
    if (!('address' in value)) return false;
    if (!('data' in value)) return false;
    if (!('decoded' in value)) return false;
    if (!('index' in value)) return false;
    if (!('smartContract' in value)) return false;
    if (!('topics' in value)) return false;
    if (!('transactionHash' in value)) return false;
    return true;
}

export function LogFromJSON(json: any): Log {
    return LogFromJSONTyped(json, false);
}

export function LogFromJSONTyped(json: any, ignoreDiscriminator: boolean): Log {
    if (json == null) {
        return json;
    }
    return {
        
        'address': AddressParamFromJSON(json['address']),
        'blockHash': json['block_hash'] == null ? undefined : json['block_hash'],
        'blockNumber': json['block_number'] == null ? undefined : json['block_number'],
        'data': json['data'],
        'decoded': DecodedInputLogFromJSON(json['decoded']),
        'index': json['index'],
        'smartContract': AddressParamFromJSON(json['smart_contract']),
        'topics': json['topics'],
        'transactionHash': json['transaction_hash'],
    };
}

export function LogToJSON(value?: Log | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'address': AddressParamToJSON(value['address']),
        'block_hash': value['blockHash'],
        'block_number': value['blockNumber'],
        'data': value['data'],
        'decoded': DecodedInputLogToJSON(value['decoded']),
        'index': value['index'],
        'smart_contract': AddressParamToJSON(value['smartContract']),
        'topics': value['topics'],
        'transaction_hash': value['transactionHash'],
    };
}

