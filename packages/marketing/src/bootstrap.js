import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount fn to start the app
const mount = (el, { onNavigate, defaultHistory }) => {
	const history = defaultHistory || createMemoryHistory();

	onNavigate && history.listen(onNavigate);

	ReactDOM.render(<App history={history} />, el);

	return {
		onParentNavigate({ pathname: nextPathname }) {
			const { pathname } = history.location;

			if (pathname !== nextPathname) {
				history.push(nextPathname);
			}
		}
	};
};

// If we are in the development and isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.getElementById('_marketing-dev-root');

	devRoot && mount(devRoot, { defaultHistory: createBrowserHistory() });
}

// We are running through container
// and we should export the mount fn
export { mount };
