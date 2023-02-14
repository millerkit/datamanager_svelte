import { worker as serverWorker } from './mocks/browser';
import process from 'process';

if (process.env.NODE_ENV === 'development') {
	serverWorker?.start({
		onUnhandledRequest: ({ method, url }) => {
			if (url.pathname.includes('datamanager/')) {
				throw new Error(`Unhandled ${method} request to ${url}`);
			}
		}
	});
}

/** @type {import('@sveltejs/kit').HandleClientError} */
export function handleError() {
	const errorId = crypto.randomUUID();
	return {
		message: 'Whoops!',
		errorId
	};
}
