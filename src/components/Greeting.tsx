import React from 'react';
import { Link, useParams } from 'react-router-dom';

import DefaultGreeting from './DefaultGreeting';
import TemplateGreeting from './TemplateGreeting';
import NotFound from './NotFound';

interface Props {}

const Greeting: React.FC<Props> = () => {
	const { type }: { type: string } = useParams();

	// verification
	console.log(type);

	const getComponentByType = () => {
		if (type === 'default') {
			/**
			 * TODO: we need the following query parameters:
			 ** label: string, falling-emojis: boolean, (if falling-emojis === true =>) emojis: string[] (specific words), background-color: string[], font-color
			 * */
			return <DefaultGreeting />;
		} else if (type === 'template') {
			// fetch params from url...
			// TODO: what we need?
			return <TemplateGreeting />;
		}
		// it's something else...
		return <NotFound />;
	};

	return (
		<>
			<Link className="offer-link" to="/">
				Create your own greeting
			</Link>
			{getComponentByType()}
		</>
	);
};

export default Greeting;
