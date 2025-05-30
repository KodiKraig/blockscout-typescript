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
 * @interface V1EntryPointIndexerStatus
 */
export interface V1EntryPointIndexerStatus {
    /**
     * 
     * @type {boolean}
     * @memberof V1EntryPointIndexerStatus
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1EntryPointIndexerStatus
     */
    live?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1EntryPointIndexerStatus
     */
    pastDbLogsIndexingFinished?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1EntryPointIndexerStatus
     */
    pastRpcLogsIndexingFinished?: boolean;
}

/**
 * Check if a given object implements the V1EntryPointIndexerStatus interface.
 */
export function instanceOfV1EntryPointIndexerStatus(value: object): boolean {
    return true;
}

export function V1EntryPointIndexerStatusFromJSON(json: any): V1EntryPointIndexerStatus {
    return V1EntryPointIndexerStatusFromJSONTyped(json, false);
}

export function V1EntryPointIndexerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EntryPointIndexerStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'live': json['live'] == null ? undefined : json['live'],
        'pastDbLogsIndexingFinished': json['past_db_logs_indexing_finished'] == null ? undefined : json['past_db_logs_indexing_finished'],
        'pastRpcLogsIndexingFinished': json['past_rpc_logs_indexing_finished'] == null ? undefined : json['past_rpc_logs_indexing_finished'],
    };
}

export function V1EntryPointIndexerStatusToJSON(value?: V1EntryPointIndexerStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'enabled': value['enabled'],
        'live': value['live'],
        'past_db_logs_indexing_finished': value['pastDbLogsIndexingFinished'],
        'past_rpc_logs_indexing_finished': value['pastRpcLogsIndexingFinished'],
    };
}

