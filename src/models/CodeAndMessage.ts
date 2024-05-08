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
 * @interface CodeAndMessage
 */
export interface CodeAndMessage {
    /**
     * 
     * @type {number}
     * @memberof CodeAndMessage
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof CodeAndMessage
     */
    message: string;
}

/**
 * Check if a given object implements the CodeAndMessage interface.
 */
export function instanceOfCodeAndMessage(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('message' in value)) return false;
    return true;
}

export function CodeAndMessageFromJSON(json: any): CodeAndMessage {
    return CodeAndMessageFromJSONTyped(json, false);
}

export function CodeAndMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CodeAndMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'message': json['message'],
    };
}

export function CodeAndMessageToJSON(value?: CodeAndMessage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'message': value['message'],
    };
}

