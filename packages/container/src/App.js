import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName
} from '@material-ui/core/styles';

const LazyMarketing = lazy(() => import('./components/MarketingApp'));
const LazyAuth = lazy(() => import('./components/AuthApp'));
import Header from './components/Header';
import Progress from './components/Progress';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
});

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header
						isSignedIn={isSignedIn}
						onSignOut={() => setIsSignedIn(false)}
					/>
					<Suspense fallback={<Progress />}>
						<Switch>
							<Route path="/auth">
								<LazyAuth
									onSignIn={() => setIsSignedIn(true)}
								/>
							</Route>
							<Route path="/" component={LazyMarketing} />
						</Switch>
					</Suspense>
				</div>
			</StylesProvider>
		</BrowserRouter>
	);
};

export default App;
