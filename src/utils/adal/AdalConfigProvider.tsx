import AdalConfig from './AdalConfig';

export default class AdalConfigProvider {
	/**
	 * Get the Azure Active Directory (ADAL) configuration
	 */
	public get getAdalConfig(): AdalConfig {
		return {
			additionalQueryParameter: 'nux=1',
			clientId: '0b373a7b-2a2c-48a4-9d03-a95cfe76fded',
			postLogoutRedirectUri: window.location.origin + '/',
			redirectUri: window.location.origin + '/',
			tenant: '9ca75128-a244-4596-877b-f24828e476e2',
		};
	}
}
