/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/monitoringSettingsMappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClientContext } from "../appPlatformManagementClientContext";

/** Class representing a MonitoringSettings. */
export class MonitoringSettings {
  private readonly client: AppPlatformManagementClientContext;

  /**
   * Create a MonitoringSettings.
   * @param {AppPlatformManagementClientContext} client Reference to the service client.
   */
  constructor(client: AppPlatformManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the Monitoring Setting and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.MonitoringSettingsGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.MonitoringSettingsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.MonitoringSettingResource>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MonitoringSettingResource>): void;
  get(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MonitoringSettingResource>, callback?: msRest.ServiceCallback<Models.MonitoringSettingResource>): Promise<Models.MonitoringSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MonitoringSettingsGetResponse>;
  }

  /**
   * Update the Monitoring Setting.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param monitoringSettingResource Parameters for the update operation
   * @param [options] The optional parameters
   * @returns Promise<Models.MonitoringSettingsUpdatePutResponse>
   */
  updatePut(resourceGroupName: string, serviceName: string, monitoringSettingResource: Models.MonitoringSettingResource, options?: msRest.RequestOptionsBase): Promise<Models.MonitoringSettingsUpdatePutResponse> {
    return this.beginUpdatePut(resourceGroupName,serviceName,monitoringSettingResource,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.MonitoringSettingsUpdatePutResponse>;
  }

  /**
   * Update the Monitoring Setting.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param monitoringSettingResource Parameters for the update operation
   * @param [options] The optional parameters
   * @returns Promise<Models.MonitoringSettingsUpdatePatchResponse>
   */
  updatePatch(resourceGroupName: string, serviceName: string, monitoringSettingResource: Models.MonitoringSettingResource, options?: msRest.RequestOptionsBase): Promise<Models.MonitoringSettingsUpdatePatchResponse> {
    return this.beginUpdatePatch(resourceGroupName,serviceName,monitoringSettingResource,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.MonitoringSettingsUpdatePatchResponse>;
  }

  /**
   * Update the Monitoring Setting.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param monitoringSettingResource Parameters for the update operation
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdatePut(resourceGroupName: string, serviceName: string, monitoringSettingResource: Models.MonitoringSettingResource, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        monitoringSettingResource,
        options
      },
      beginUpdatePutOperationSpec,
      options);
  }

  /**
   * Update the Monitoring Setting.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param monitoringSettingResource Parameters for the update operation
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdatePatch(resourceGroupName: string, serviceName: string, monitoringSettingResource: Models.MonitoringSettingResource, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        monitoringSettingResource,
        options
      },
      beginUpdatePatchOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdatePutOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "monitoringSettingResource",
    mapper: {
      ...Mappers.MonitoringSettingResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    202: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdatePatchOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "monitoringSettingResource",
    mapper: {
      ...Mappers.MonitoringSettingResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    202: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};