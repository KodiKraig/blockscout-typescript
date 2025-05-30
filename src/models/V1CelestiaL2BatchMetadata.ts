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
import type { V1CelestiaBlobId } from './V1CelestiaBlobId';
import {
    V1CelestiaBlobIdFromJSON,
    V1CelestiaBlobIdFromJSONTyped,
    V1CelestiaBlobIdToJSON,
} from './V1CelestiaBlobId';

/**
 * 
 * @export
 * @interface V1CelestiaL2BatchMetadata
 */
export interface V1CelestiaL2BatchMetadata {
    /**
     * 
     * @type {number}
     * @memberof V1CelestiaL2BatchMetadata
     */
    l2ChainId?: number;
    /**
     * 
     * @type {string}
     * @memberof V1CelestiaL2BatchMetadata
     */
    l2BatchId?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CelestiaL2BatchMetadata
     */
    l2StartBlock?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CelestiaL2BatchMetadata
     */
    l2EndBlock?: string;
    /**
     * 
     * @type {number}
     * @memberof V1CelestiaL2BatchMetadata
     */
    l2BatchTxCount?: number;
    /**
     * 
     * @type {string}
     * @memberof V1CelestiaL2BatchMetadata
     */
    l2BlockscoutUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CelestiaL2BatchMetadata
     */
    l1TxHash?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CelestiaL2BatchMetadata
     */
    l1TxTimestamp?: string;
    /**
     * 
     * @type {number}
     * @memberof V1CelestiaL2BatchMetadata
     */
    l1ChainId?: number;
    /**
     * 
     * @type {Array<V1CelestiaBlobId>}
     * @memberof V1CelestiaL2BatchMetadata
     */
    relatedBlobs?: Array<V1CelestiaBlobId>;
}

/**
 * Check if a given object implements the V1CelestiaL2BatchMetadata interface.
 */
export function instanceOfV1CelestiaL2BatchMetadata(value: object): boolean {
    return true;
}

export function V1CelestiaL2BatchMetadataFromJSON(json: any): V1CelestiaL2BatchMetadata {
    return V1CelestiaL2BatchMetadataFromJSONTyped(json, false);
}

export function V1CelestiaL2BatchMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CelestiaL2BatchMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'l2ChainId': json['l2ChainId'] == null ? undefined : json['l2ChainId'],
        'l2BatchId': json['l2BatchId'] == null ? undefined : json['l2BatchId'],
        'l2StartBlock': json['l2StartBlock'] == null ? undefined : json['l2StartBlock'],
        'l2EndBlock': json['l2EndBlock'] == null ? undefined : json['l2EndBlock'],
        'l2BatchTxCount': json['l2BatchTxCount'] == null ? undefined : json['l2BatchTxCount'],
        'l2BlockscoutUrl': json['l2BlockscoutUrl'] == null ? undefined : json['l2BlockscoutUrl'],
        'l1TxHash': json['l1TxHash'] == null ? undefined : json['l1TxHash'],
        'l1TxTimestamp': json['l1TxTimestamp'] == null ? undefined : json['l1TxTimestamp'],
        'l1ChainId': json['l1ChainId'] == null ? undefined : json['l1ChainId'],
        'relatedBlobs': json['relatedBlobs'] == null ? undefined : ((json['relatedBlobs'] as Array<any>).map(V1CelestiaBlobIdFromJSON)),
    };
}

export function V1CelestiaL2BatchMetadataToJSON(value?: V1CelestiaL2BatchMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'l2ChainId': value['l2ChainId'],
        'l2BatchId': value['l2BatchId'],
        'l2StartBlock': value['l2StartBlock'],
        'l2EndBlock': value['l2EndBlock'],
        'l2BatchTxCount': value['l2BatchTxCount'],
        'l2BlockscoutUrl': value['l2BlockscoutUrl'],
        'l1TxHash': value['l1TxHash'],
        'l1TxTimestamp': value['l1TxTimestamp'],
        'l1ChainId': value['l1ChainId'],
        'relatedBlobs': value['relatedBlobs'] == null ? undefined : ((value['relatedBlobs'] as Array<any>).map(V1CelestiaBlobIdToJSON)),
    };
}

