import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount fn to start the app
const mount = (el) => {
	const app = createApp(Dashboard);
	app.mount(el);
};

// If we are in the development and isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.getElementById('_dashboard-dev-root');

	devRoot && mount(devRoot);
}

// We are running through container
// and we should export the mount fn
export { mount };
