import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

const LazyMarketing = lazy(() => import('./components/MarketingApp'));
const LazyAuth = lazy(() => import('./components/AuthApp'));
const LazyDashboard = lazy(() => import('./components/DashboardApp'));
import Header from './components/Header';
import Progress from './components/Progress';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
});

const history = createBrowserHistory();

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if (isSignedIn) history.push('/dashboard');
	}, [isSignedIn]);

	return (
		<Router history={history}>
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
							<Route path="/dashboard">
								{!isSignedIn && <Redirect to="/" />}
								<LazyDashboard />
							</Route>
							<Route path="/" component={LazyMarketing} />
						</Switch>
					</Suspense>
				</div>
			</StylesProvider>
		</Router>
	);
};

export default App;
