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
import * as Mappers from "../models/backupPoliciesMappers";
import * as Parameters from "../models/parameters";
import { AzureNetAppFilesManagementClientContext } from "../azureNetAppFilesManagementClientContext";

/** Class representing a BackupPolicies. */
export class BackupPolicies {
  private readonly client: AzureNetAppFilesManagementClientContext;

  /**
   * Create a BackupPolicies.
   * @param {AzureNetAppFilesManagementClientContext} client Reference to the service client.
   */
  constructor(client: AzureNetAppFilesManagementClientContext) {
    this.client = client;
  }

  /**
   * List backup policies for Netapp Account
   * @summary List backup policies
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupPoliciesListResponse>
   */
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupPoliciesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.BackupPoliciesList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupPoliciesList>): void;
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupPoliciesList>, callback?: msRest.ServiceCallback<Models.BackupPoliciesList>): Promise<Models.BackupPoliciesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BackupPoliciesListResponse>;
  }

  /**
   * Get a particular backup Policy
   * @summary Get a backup Policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupPoliciesGetResponse>
   */
  get(resourceGroupName: string, accountName: string, backupPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, backupPolicyName: string, callback: msRest.ServiceCallback<Models.BackupPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, backupPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupPolicy>): void;
  get(resourceGroupName: string, accountName: string, backupPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupPolicy>, callback?: msRest.ServiceCallback<Models.BackupPolicy>): Promise<Models.BackupPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        backupPolicyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BackupPoliciesGetResponse>;
  }

  /**
   * Create a backup policy for Netapp Account
   * @summary Create a backup policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param body Backup policy object supplied in the body of the operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupPoliciesCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, backupPolicyName: string, body: Models.BackupPolicy, options?: msRest.RequestOptionsBase): Promise<Models.BackupPoliciesCreateResponse> {
    return this.beginCreate(resourceGroupName,accountName,backupPolicyName,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BackupPoliciesCreateResponse>;
  }

  /**
   * Patch a backup policy for Netapp Account
   * @summary Patch a backup policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param body Backup policy object supplied in the body of the operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupPoliciesUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, backupPolicyName: string, body: Models.BackupPolicyPatch, options?: msRest.RequestOptionsBase): Promise<Models.BackupPoliciesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param body Backup policy object supplied in the body of the operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, backupPolicyName: string, body: Models.BackupPolicyPatch, callback: msRest.ServiceCallback<Models.BackupPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param body Backup policy object supplied in the body of the operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, backupPolicyName: string, body: Models.BackupPolicyPatch, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupPolicy>): void;
  update(resourceGroupName: string, accountName: string, backupPolicyName: string, body: Models.BackupPolicyPatch, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupPolicy>, callback?: msRest.ServiceCallback<Models.BackupPolicy>): Promise<Models.BackupPoliciesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        backupPolicyName,
        body,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.BackupPoliciesUpdateResponse>;
  }

  /**
   * Delete backup policy
   * @summary Delete a backup policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, backupPolicyName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,backupPolicyName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create a backup policy for Netapp Account
   * @summary Create a backup policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param body Backup policy object supplied in the body of the operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, accountName: string, backupPolicyName: string, body: Models.BackupPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        backupPolicyName,
        body,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Delete backup policy
   * @summary Delete a backup policy
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param backupPolicyName Backup policy Name which uniquely identify backup policy.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, backupPolicyName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        backupPolicyName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BackupPoliciesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.backupPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BackupPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.backupPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.BackupPolicyPatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BackupPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.backupPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.BackupPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BackupPolicy
    },
    201: {
      bodyMapper: Mappers.BackupPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.backupPolicyName
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
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};