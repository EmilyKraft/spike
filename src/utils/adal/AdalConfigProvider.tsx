import AdalConfig from './AdalConfig';

export default class AdalConfigProvider {
	/**
	 * Get the Azure Active Directory (ADAL) configuration
	 */
	public get getAdalConfig(): AdalConfig {
		return {
			additionalQueryParameter: 'nux=1',
			clientId: '6bc62c3e-f8f4-4231-9c16-b53a7e6364a9',
			postLogoutRedirectUri: window.location.origin + '/',
			redirectUri: window.location.origin + '/',
			tenant: 'cc6acdda-7662-4227-8e1e-2071edb26f4b',
		};
	}
}
