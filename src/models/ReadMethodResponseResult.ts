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

import type { CodeAndMessage } from './CodeAndMessage';
import {
    instanceOfCodeAndMessage,
    CodeAndMessageFromJSON,
    CodeAndMessageFromJSONTyped,
    CodeAndMessageToJSON,
} from './CodeAndMessage';
import type { DecodedInput } from './DecodedInput';
import {
    instanceOfDecodedInput,
    DecodedInputFromJSON,
    DecodedInputFromJSONTyped,
    DecodedInputToJSON,
} from './DecodedInput';
import type { ExtendedRevertReasonAsMap } from './ExtendedRevertReasonAsMap';
import {
    instanceOfExtendedRevertReasonAsMap,
    ExtendedRevertReasonAsMapFromJSON,
    ExtendedRevertReasonAsMapFromJSONTyped,
    ExtendedRevertReasonAsMapToJSON,
} from './ExtendedRevertReasonAsMap';
import type { ModelError } from './ModelError';
import {
    instanceOfModelError,
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
} from './ModelError';
import type { OutputAndNames } from './OutputAndNames';
import {
    instanceOfOutputAndNames,
    OutputAndNamesFromJSON,
    OutputAndNamesFromJSONTyped,
    OutputAndNamesToJSON,
} from './OutputAndNames';

/**
 * @type ReadMethodResponseResult
 * 
 * @export
 */
export type ReadMethodResponseResult = CodeAndMessage | DecodedInput | ExtendedRevertReasonAsMap | ModelError | OutputAndNames;

export function ReadMethodResponseResultFromJSON(json: any): ReadMethodResponseResult {
    return ReadMethodResponseResultFromJSONTyped(json, false);
}

export function ReadMethodResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadMethodResponseResult {
    if (json == null) {
        return json;
    }
    return CodeAndMessageFromJSONTyped(json, true) || DecodedInputFromJSONTyped(json, true) || ExtendedRevertReasonAsMapFromJSONTyped(json, true) || ModelErrorFromJSONTyped(json, true) || OutputAndNamesFromJSONTyped(json, true);
}

export function ReadMethodResponseResultToJSON(value?: ReadMethodResponseResult | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfCodeAndMessage(value)) {
        return CodeAndMessageToJSON(value as CodeAndMessage);
    }
    if (instanceOfDecodedInput(value)) {
        return DecodedInputToJSON(value as DecodedInput);
    }
    if (instanceOfExtendedRevertReasonAsMap(value)) {
        return ExtendedRevertReasonAsMapToJSON(value as ExtendedRevertReasonAsMap);
    }
    if (instanceOfModelError(value)) {
        return ModelErrorToJSON(value as ModelError);
    }
    if (instanceOfOutputAndNames(value)) {
        return OutputAndNamesToJSON(value as OutputAndNames);
    }

    return {};
}

