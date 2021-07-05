import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const NotFound: React.FC<Props> = () => {
	return (
		<section className="not-found-container">
			{/* <h1 className="App">404 - Page not found.</h1> */}
			<img src="https://http.cat/404" alt="Not Found" />
			<Link className="App-link" to="/">
				Back to home
			</Link>
		</section>
	);
};

export default NotFound;
