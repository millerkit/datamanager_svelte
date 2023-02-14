import type PageConfigType from './page-config-type';

/** @type {import('./$types').PageLoad} */
export function load(): PageConfigType {
	return {
		title: 'Manage Saved Export Jobs',
		savedJobs: []
	};
}
