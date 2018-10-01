import * as React from 'react';
import { Button } from 'reactstrap';
import ActiveDirectoryAuthenticator from '../utils/adal/ActiveDirectoryAuthenticator';
import { Letter } from './Letter';

export class HomePage extends React.Component { //tslint:disable-line

	private activeDirectoryAuthenticator: ActiveDirectoryAuthenticator;

	public render(): JSX.Element {
		return (
			<div>
				<Button
					color="danger"
					onClick={this.activeDirectoryAuthenticator.login()}
				>
					Login
				</Button>
			</div>
		);
	}
}
