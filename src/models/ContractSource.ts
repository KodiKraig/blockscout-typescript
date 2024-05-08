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
 * @interface ContractSource
 */
export interface ContractSource {
    /**
     * 
     * @type {string}
     * @memberof ContractSource
     */
    filePath?: string;
    /**
     * 
     * @type {string}
     * @memberof ContractSource
     */
    sourceCode?: string;
}

/**
 * Check if a given object implements the ContractSource interface.
 */
export function instanceOfContractSource(value: object): boolean {
    return true;
}

export function ContractSourceFromJSON(json: any): ContractSource {
    return ContractSourceFromJSONTyped(json, false);
}

export function ContractSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContractSource {
    if (json == null) {
        return json;
    }
    return {
        
        'filePath': json['file_path'] == null ? undefined : json['file_path'],
        'sourceCode': json['source_code'] == null ? undefined : json['source_code'],
    };
}

export function ContractSourceToJSON(value?: ContractSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'file_path': value['filePath'],
        'source_code': value['sourceCode'],
    };
}

