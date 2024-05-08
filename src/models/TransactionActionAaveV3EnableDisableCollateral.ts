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
 * @interface TransactionActionAaveV3EnableDisableCollateral
 */
export interface TransactionActionAaveV3EnableDisableCollateral {
    /**
     * 
     * @type {object}
     * @memberof TransactionActionAaveV3EnableDisableCollateral
     */
    data: object;
    /**
     * 
     * @type {string}
     * @memberof TransactionActionAaveV3EnableDisableCollateral
     */
    protocol: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionActionAaveV3EnableDisableCollateral
     */
    type: string;
}

/**
 * Check if a given object implements the TransactionActionAaveV3EnableDisableCollateral interface.
 */
export function instanceOfTransactionActionAaveV3EnableDisableCollateral(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('protocol' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function TransactionActionAaveV3EnableDisableCollateralFromJSON(json: any): TransactionActionAaveV3EnableDisableCollateral {
    return TransactionActionAaveV3EnableDisableCollateralFromJSONTyped(json, false);
}

export function TransactionActionAaveV3EnableDisableCollateralFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionActionAaveV3EnableDisableCollateral {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'],
        'protocol': json['protocol'],
        'type': json['type'],
    };
}

export function TransactionActionAaveV3EnableDisableCollateralToJSON(value?: TransactionActionAaveV3EnableDisableCollateral | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'],
        'protocol': value['protocol'],
        'type': value['type'],
    };
}

