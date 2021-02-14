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
import * as Mappers from "../models/clustersMappers";
import * as Parameters from "../models/parameters";
import { HDInsightManagementClientContext } from "../hDInsightManagementClientContext";

/** Class representing a Clusters. */
export class Clusters {
  private readonly client: HDInsightManagementClientContext;

  /**
   * Create a Clusters.
   * @param {HDInsightManagementClientContext} client Reference to the service client.
   */
  constructor(client: HDInsightManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a new HDInsight cluster with the specified parameters.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster create request.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersCreateResponse>
   */
  create(resourceGroupName: string, clusterName: string, parameters: Models.ClusterCreateParametersExtended, options?: msRest.RequestOptionsBase): Promise<Models.ClustersCreateResponse> {
    return this.beginCreate(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ClustersCreateResponse>;
  }

  /**
   * Patch HDInsight cluster with the specified parameters.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster patch request.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersUpdateResponse>
   */
  update(resourceGroupName: string, clusterName: string, parameters: Models.ClusterPatchParameters, options?: msRest.RequestOptionsBase): Promise<Models.ClustersUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster patch request.
   * @param callback The callback
   */
  update(resourceGroupName: string, clusterName: string, parameters: Models.ClusterPatchParameters, callback: msRest.ServiceCallback<Models.Cluster>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster patch request.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, clusterName: string, parameters: Models.ClusterPatchParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Cluster>): void;
  update(resourceGroupName: string, clusterName: string, parameters: Models.ClusterPatchParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Cluster>, callback?: msRest.ServiceCallback<Models.Cluster>): Promise<Models.ClustersUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ClustersUpdateResponse>;
  }

  /**
   * Deletes the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.Cluster>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Cluster>): void;
  get(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Cluster>, callback?: msRest.ServiceCallback<Models.Cluster>): Promise<Models.ClustersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ClustersGetResponse>;
  }

  /**
   * Lists the HDInsight clusters in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterListResult>, callback?: msRest.ServiceCallback<Models.ClusterListResult>): Promise<Models.ClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ClustersListByResourceGroupResponse>;
  }

  /**
   * Resizes the specified HDInsight cluster to the specified size.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for the resize operation.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resize(resourceGroupName: string, clusterName: string, parameters: Models.ClusterResizeParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginResize(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates the Autoscale Configuration for HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for the update autoscale configuration operation.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateAutoScaleConfiguration(resourceGroupName: string, clusterName: string, parameters: Models.AutoscaleConfigurationUpdateParameter, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginUpdateAutoScaleConfiguration(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists all the HDInsight clusters under the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ClustersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterListResult>, callback?: msRest.ServiceCallback<Models.ClusterListResult>): Promise<Models.ClustersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ClustersListResponse>;
  }

  /**
   * Rotate disk encryption key of the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for the disk encryption operation.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  rotateDiskEncryptionKey(resourceGroupName: string, clusterName: string, parameters: Models.ClusterDiskEncryptionParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRotateDiskEncryptionKey(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the gateway settings for the specified cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersGetGatewaySettingsResponse>
   */
  getGatewaySettings(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersGetGatewaySettingsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param callback The callback
   */
  getGatewaySettings(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.GatewaySettings>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  getGatewaySettings(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GatewaySettings>): void;
  getGatewaySettings(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GatewaySettings>, callback?: msRest.ServiceCallback<Models.GatewaySettings>): Promise<Models.ClustersGetGatewaySettingsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      getGatewaySettingsOperationSpec,
      callback) as Promise<Models.ClustersGetGatewaySettingsResponse>;
  }

  /**
   * Configures the gateway settings on the specified cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster configurations.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateGatewaySettings(resourceGroupName: string, clusterName: string, parameters: Models.UpdateGatewaySettingsParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginUpdateGatewaySettings(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Executes script actions on the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for executing script actions.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  executeScriptActions(resourceGroupName: string, clusterName: string, parameters: Models.ExecuteScriptActionParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginExecuteScriptActions(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a new HDInsight cluster with the specified parameters.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster create request.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, clusterName: string, parameters: Models.ClusterCreateParametersExtended, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Resizes the specified HDInsight cluster to the specified size.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for the resize operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginResize(resourceGroupName: string, clusterName: string, parameters: Models.ClusterResizeParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginResizeOperationSpec,
      options);
  }

  /**
   * Updates the Autoscale Configuration for HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for the update autoscale configuration operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateAutoScaleConfiguration(resourceGroupName: string, clusterName: string, parameters: Models.AutoscaleConfigurationUpdateParameter, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginUpdateAutoScaleConfigurationOperationSpec,
      options);
  }

  /**
   * Rotate disk encryption key of the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for the disk encryption operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRotateDiskEncryptionKey(resourceGroupName: string, clusterName: string, parameters: Models.ClusterDiskEncryptionParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginRotateDiskEncryptionKeyOperationSpec,
      options);
  }

  /**
   * Configures the gateway settings on the specified cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The cluster configurations.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateGatewaySettings(resourceGroupName: string, clusterName: string, parameters: Models.UpdateGatewaySettingsParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginUpdateGatewaySettingsOperationSpec,
      options);
  }

  /**
   * Executes script actions on the specified HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for executing script actions.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginExecuteScriptActions(resourceGroupName: string, clusterName: string, parameters: Models.ExecuteScriptActionParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginExecuteScriptActionsOperationSpec,
      options);
  }

  /**
   * Lists the HDInsight clusters in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterListResult>, callback?: msRest.ServiceCallback<Models.ClusterListResult>): Promise<Models.ClustersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ClustersListByResourceGroupNextResponse>;
  }

  /**
   * Lists all the HDInsight clusters under the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterListResult>, callback?: msRest.ServiceCallback<Models.ClusterListResult>): Promise<Models.ClustersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ClustersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ClusterPatchParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/clusters",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getGatewaySettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/getGatewaySettings",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GatewaySettings
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ClusterCreateParametersExtended,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginResizeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/roles/{roleName}/resize",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.roleName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ClusterResizeParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateAutoScaleConfigurationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/roles/{roleName}/autoscale",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.roleName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AutoscaleConfigurationUpdateParameter,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginRotateDiskEncryptionKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/rotatediskencryptionkey",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ClusterDiskEncryptionParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateGatewaySettingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/updateGatewaySettings",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.UpdateGatewaySettingsParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginExecuteScriptActionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/executeScriptActions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ExecuteScriptActionParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
