import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount fn to start the app
const mount = (el) => {
	ReactDOM.render(<App />, el);
};

// If we are in the development and isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.getElementById('_marketing-dev-root');

	devRoot && mount(devRoot);
}

// We are running through container
// and we should export the mount fn
export { mount };
