import React, { lazy, Suspense } from 'react';
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
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header />
					<Suspense fallback={<Progress />}>
						<Switch>
							<Route path="/auth" component={LazyAuth} />
							<Route path="/" component={LazyMarketing} />
						</Switch>
					</Suspense>
				</div>
			</StylesProvider>
		</BrowserRouter>
	);
};

export default App;
