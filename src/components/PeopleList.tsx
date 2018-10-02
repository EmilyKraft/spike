import * as React from 'react';
import ActiveDirectoryAuthenticator from '../utils/adal/ActiveDirectoryAuthenticator';
import { Letter } from './Letter';

export class PeopleList extends React.Component {
	private letters: string[];
	private names: string[];
	private activeDirectoryAuthenticator: ActiveDirectoryAuthenticator;

	constructor(props: object) {
		super(props);

		this.letters = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z',
		];
		this.names = ['Cole', 'Elizabeth', 'Jessica', 'Thomas'];
	}

	// public componentDidMount() {
	//         this.activeDirectoryAuthenticator.handleCallback();
	//
	//         if (this.activeDirectoryAuthenticator.isAuthenticated) {
	//             this.activeDirectoryAuthenticator.login();
	//         }
	//
	// }

	public loggedIn(): boolean {
			return(true)
	}
	public filterNames(names: string[], letter: string): string[] {
		const nonEmptyNames: string[] = names.filter((name: string) => name);
		const capitalizedNames: string[] = nonEmptyNames.map(
			(name: string) => name[0].toUpperCase() + name.slice(1)
		);
		const filteredNames: string[] = capitalizedNames.filter(
			(name: string) => name[0] === letter
		);

		return filteredNames.sort();
	}

	public render(): JSX.Element {
		let text ="";
			if (this.loggedIn) {
					text="yes";
			} else {
				text="no";
			}

	            // this.activeDirectoryAuthenticator.handleCallback();
							//
	            // if (this.activeDirectoryAuthenticator.isAuthenticated) {
	            //     this.activeDirectoryAuthenticator.login();
	            // }
							//
							// if (!this.activeDirectoryAuthenticator.isAuthenticated) {
							// 		}
		return (
			<div>
				{text}
				{/* {this.letters.map((letter: string) => (
					<Letter
						key={letter}
						letter={letter}
						{names}
					/>
				))} */}
			</div>
		);
	}
}
