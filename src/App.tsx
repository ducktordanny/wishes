import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Greeting from './components/Greeting';
import NotFound from './components/NotFound';

// TODO: name changed -> need refactoring

const App: React.FC = () => {
	return (
		<>
			<Switch>
				<Redirect exact from="/" to="/home" />
				<Route path="/home" component={Home} />
				{/* 
					// TODO: get the following parameters from link: text,emojis, balloons?
					// TODO: opportunity to use templates? (e.g. name day, birthday, etc.)
				*/}
				<Route path="/greeting/:type" component={Greeting} />
				<Route path="*" component={NotFound} />
			</Switch>
		</>
	);
};

export default App;
