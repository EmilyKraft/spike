export default interface AdalConfig {
  /* tslint:disable */

    /**
     * The AAD tenant
     */
    tenant: string;

    /**
     * The AAD application id (client id)
     */
    clientId: string;

    /**
     * The redirect URI
     */
    redirectUri: string;

    /**
     * The URI which will be direct after logout
     */
    postLogoutRedirectUri: string;

    /**
     * Additional AAD query parameters
     */
    additionalQueryParameter: string;
};
