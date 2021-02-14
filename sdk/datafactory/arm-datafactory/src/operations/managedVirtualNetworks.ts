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
import * as Mappers from "../models/managedVirtualNetworksMappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClientContext } from "../dataFactoryManagementClientContext";

/** Class representing a ManagedVirtualNetworks. */
export class ManagedVirtualNetworks {
  private readonly client: DataFactoryManagementClientContext;

  /**
   * Create a ManagedVirtualNetworks.
   * @param {DataFactoryManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataFactoryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists managed Virtual Networks.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedVirtualNetworksListByFactoryResponse>
   */
  listByFactory(resourceGroupName: string, factoryName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedVirtualNetworksListByFactoryResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param callback The callback
   */
  listByFactory(resourceGroupName: string, factoryName: string, callback: msRest.ServiceCallback<Models.ManagedVirtualNetworkListResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFactory(resourceGroupName: string, factoryName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedVirtualNetworkListResponse>): void;
  listByFactory(resourceGroupName: string, factoryName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedVirtualNetworkListResponse>, callback?: msRest.ServiceCallback<Models.ManagedVirtualNetworkListResponse>): Promise<Models.ManagedVirtualNetworksListByFactoryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        options
      },
      listByFactoryOperationSpec,
      callback) as Promise<Models.ManagedVirtualNetworksListByFactoryResponse>;
  }

  /**
   * Creates or updates a managed Virtual Network.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedVirtualNetwork Managed Virtual Network resource definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedVirtualNetworksCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, managedVirtualNetworkName: string, managedVirtualNetwork: Models.ManagedVirtualNetworkResource, options?: Models.ManagedVirtualNetworksCreateOrUpdateOptionalParams): Promise<Models.ManagedVirtualNetworksCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedVirtualNetwork Managed Virtual Network resource definition.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, managedVirtualNetworkName: string, managedVirtualNetwork: Models.ManagedVirtualNetworkResource, callback: msRest.ServiceCallback<Models.ManagedVirtualNetworkResource>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedVirtualNetwork Managed Virtual Network resource definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, managedVirtualNetworkName: string, managedVirtualNetwork: Models.ManagedVirtualNetworkResource, options: Models.ManagedVirtualNetworksCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.ManagedVirtualNetworkResource>): void;
  createOrUpdate(resourceGroupName: string, factoryName: string, managedVirtualNetworkName: string, managedVirtualNetwork: Models.ManagedVirtualNetworkResource, options?: Models.ManagedVirtualNetworksCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.ManagedVirtualNetworkResource>, callback?: msRest.ServiceCallback<Models.ManagedVirtualNetworkResource>): Promise<Models.ManagedVirtualNetworksCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        managedVirtualNetworkName,
        managedVirtualNetwork,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ManagedVirtualNetworksCreateOrUpdateResponse>;
  }

  /**
   * Gets a managed Virtual Network.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedVirtualNetworksGetResponse>
   */
  get(resourceGroupName: string, factoryName: string, managedVirtualNetworkName: string, options?: Models.ManagedVirtualNetworksGetOptionalParams): Promise<Models.ManagedVirtualNetworksGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param callback The callback
   */
  get(resourceGroupName: string, factoryName: string, managedVirtualNetworkName: string, callback: msRest.ServiceCallback<Models.ManagedVirtualNetworkResource>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, factoryName: string, managedVirtualNetworkName: string, options: Models.ManagedVirtualNetworksGetOptionalParams, callback: msRest.ServiceCallback<Models.ManagedVirtualNetworkResource>): void;
  get(resourceGroupName: string, factoryName: string, managedVirtualNetworkName: string, options?: Models.ManagedVirtualNetworksGetOptionalParams | msRest.ServiceCallback<Models.ManagedVirtualNetworkResource>, callback?: msRest.ServiceCallback<Models.ManagedVirtualNetworkResource>): Promise<Models.ManagedVirtualNetworksGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        managedVirtualNetworkName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedVirtualNetworksGetResponse>;
  }

  /**
   * Lists managed Virtual Networks.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedVirtualNetworksListByFactoryNextResponse>
   */
  listByFactoryNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedVirtualNetworksListByFactoryNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByFactoryNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedVirtualNetworkListResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFactoryNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedVirtualNetworkListResponse>): void;
  listByFactoryNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedVirtualNetworkListResponse>, callback?: msRest.ServiceCallback<Models.ManagedVirtualNetworkListResponse>): Promise<Models.ManagedVirtualNetworksListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByFactoryNextOperationSpec,
      callback) as Promise<Models.ManagedVirtualNetworksListByFactoryNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByFactoryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "managedVirtualNetwork",
    mapper: {
      ...Mappers.ManagedVirtualNetworkResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByFactoryNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
