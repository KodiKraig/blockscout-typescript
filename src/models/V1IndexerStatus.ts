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
import type { V1EntryPointIndexerStatus } from './V1EntryPointIndexerStatus';
import {
    V1EntryPointIndexerStatusFromJSON,
    V1EntryPointIndexerStatusFromJSONTyped,
    V1EntryPointIndexerStatusToJSON,
} from './V1EntryPointIndexerStatus';

/**
 * 
 * @export
 * @interface V1IndexerStatus
 */
export interface V1IndexerStatus {
    /**
     * 
     * @type {boolean}
     * @memberof V1IndexerStatus
     */
    finishedPastIndexing?: boolean;
    /**
     * 
     * @type {V1EntryPointIndexerStatus}
     * @memberof V1IndexerStatus
     */
    v06?: V1EntryPointIndexerStatus;
    /**
     * 
     * @type {V1EntryPointIndexerStatus}
     * @memberof V1IndexerStatus
     */
    v07?: V1EntryPointIndexerStatus;
}

/**
 * Check if a given object implements the V1IndexerStatus interface.
 */
export function instanceOfV1IndexerStatus(value: object): boolean {
    return true;
}

export function V1IndexerStatusFromJSON(json: any): V1IndexerStatus {
    return V1IndexerStatusFromJSONTyped(json, false);
}

export function V1IndexerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IndexerStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'finishedPastIndexing': json['finished_past_indexing'] == null ? undefined : json['finished_past_indexing'],
        'v06': json['v06'] == null ? undefined : V1EntryPointIndexerStatusFromJSON(json['v06']),
        'v07': json['v07'] == null ? undefined : V1EntryPointIndexerStatusFromJSON(json['v07']),
    };
}

export function V1IndexerStatusToJSON(value?: V1IndexerStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'finished_past_indexing': value['finishedPastIndexing'],
        'v06': V1EntryPointIndexerStatusToJSON(value['v06']),
        'v07': V1EntryPointIndexerStatusToJSON(value['v07']),
    };
}

