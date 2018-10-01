import * as React from 'react';
import { Letter } from './Letter';
import ActiveDirectoryAuthenticator from '../utils/adal/ActiveDirectoryAuthenticator';

export class HomePage extends React.Component {

	private activeDirectoryAuthenticator: ActiveDirectoryAuthenticator;

	public render(): JSX.Element {
		return (
			<div>
					<button onClick={() => {this.activeDirectoryAuthenticator.login()}}>Login</button> 
			</div>
		);
	}
}
