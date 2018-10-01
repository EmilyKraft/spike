// import 'expose-loader?AuthenticationContext!adal-angular';

import AdalConfig from './AdalConfig';
import AdalConfigProvider from './AdalConfigProvider';
/* tslint:disable */

const AuthContext: adal.AuthenticationContextStatic = AuthenticationContext;

export default class ActiveDirectoryAuthenticator {
	/**
	 * The ADAL configuration
	 */
	private adalConfig: AdalConfig;

	/**
	 * The ADAL authentication context
	 */
	private context: adal.AuthenticationContext;

	/**
	 * Initializes a new instance of the ActiveDirectoryAuthenticator class.
	 * @param adalConfigProvider The ADAL config provider
	 */
	constructor(adalConfigProvider: AdalConfigProvider) {
		const adalConfig: AdalConfig = adalConfigProvider.getAdalConfig;

		this.context = new AuthenticationContext(adalConfig);
		this.adalConfig = adalConfig;
	}

	public login() {
		this.context.login();
	}

	public logout() {
		this.context.logOut();
	}

	public handleCallback() {
		this.context.handleWindowCallback();
	}

	public get getActiveDirectoryApplicationId(): string {
		return this.adalConfig.clientId;
	}

	public get userInfo(): adal.User {
		return this.context.getCachedUser();
	}

	public get accessToken(): string {
		return this.context.getCachedToken(this.adalConfig.clientId);
	}

	public get isAuthenticated() {
		return this.accessToken && this.userInfo;
	}
}
