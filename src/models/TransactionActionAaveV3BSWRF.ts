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
 * @interface TransactionActionAaveV3BSWRF
 */
export interface TransactionActionAaveV3BSWRF {
    /**
     * 
     * @type {object}
     * @memberof TransactionActionAaveV3BSWRF
     */
    data: object;
    /**
     * 
     * @type {string}
     * @memberof TransactionActionAaveV3BSWRF
     */
    protocol: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionActionAaveV3BSWRF
     */
    type: string;
}

/**
 * Check if a given object implements the TransactionActionAaveV3BSWRF interface.
 */
export function instanceOfTransactionActionAaveV3BSWRF(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('protocol' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function TransactionActionAaveV3BSWRFFromJSON(json: any): TransactionActionAaveV3BSWRF {
    return TransactionActionAaveV3BSWRFFromJSONTyped(json, false);
}

export function TransactionActionAaveV3BSWRFFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionActionAaveV3BSWRF {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'],
        'protocol': json['protocol'],
        'type': json['type'],
    };
}

export function TransactionActionAaveV3BSWRFToJSON(value?: TransactionActionAaveV3BSWRF | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'],
        'protocol': value['protocol'],
        'type': value['type'],
    };
}

