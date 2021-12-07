import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName
} from '@material-ui/core/styles';

// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';
const LazyMarketing = lazy(() => import('./components/MarketingApp'));
const LazyAuth = lazy(() => import('./components/AuthApp'));
import Header from './components/Header';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
});

const App = () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header />
					<Suspense fallback={<p>Loading...</p>}>
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
