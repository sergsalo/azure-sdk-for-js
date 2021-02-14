/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/locationsMappers";
import * as Parameters from "../models/parameters";
import { AvsClientContext } from "../avsClientContext";

/** Class representing a Locations. */
export class Locations {
  private readonly client: AvsClientContext;

  /**
   * Create a Locations.
   * @param {AvsClientContext} client Reference to the service client.
   */
  constructor(client: AvsClientContext) {
    this.client = client;
  }

  /**
   * Return trial status for subscription by region
   * @param location Azure region
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationsCheckTrialAvailabilityResponse>
   */
  checkTrialAvailability(location: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationsCheckTrialAvailabilityResponse>;
  /**
   * @param location Azure region
   * @param callback The callback
   */
  checkTrialAvailability(location: string, callback: msRest.ServiceCallback<Models.Trial>): void;
  /**
   * @param location Azure region
   * @param options The optional parameters
   * @param callback The callback
   */
  checkTrialAvailability(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Trial>): void;
  checkTrialAvailability(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Trial>, callback?: msRest.ServiceCallback<Models.Trial>): Promise<Models.LocationsCheckTrialAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      checkTrialAvailabilityOperationSpec,
      callback) as Promise<Models.LocationsCheckTrialAvailabilityResponse>;
  }

  /**
   * Return quota for subscription by region
   * @param location Azure region
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationsCheckQuotaAvailabilityResponse>
   */
  checkQuotaAvailability(location: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationsCheckQuotaAvailabilityResponse>;
  /**
   * @param location Azure region
   * @param callback The callback
   */
  checkQuotaAvailability(location: string, callback: msRest.ServiceCallback<Models.Quota>): void;
  /**
   * @param location Azure region
   * @param options The optional parameters
   * @param callback The callback
   */
  checkQuotaAvailability(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Quota>): void;
  checkQuotaAvailability(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Quota>, callback?: msRest.ServiceCallback<Models.Quota>): Promise<Models.LocationsCheckQuotaAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      checkQuotaAvailabilityOperationSpec,
      callback) as Promise<Models.LocationsCheckQuotaAvailabilityResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkTrialAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkTrialAvailability",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Trial
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const checkQuotaAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkQuotaAvailability",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Quota
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
