import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
interface Props {}

const Home: React.FC<Props> = () => {
	useEffect(() => {
		const body: HTMLBodyElement | null = document.querySelector('body');
		body!.style.background = 'white';
	}, []);

	return (
		<>
			<h1 className="App">Home</h1>
			<section className="link-generating-container">
				<Link className="App-link" to="/greeting">
					Go to the link
				</Link>
			</section>
		</>
	);
};

export default Home;
