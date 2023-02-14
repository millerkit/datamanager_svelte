import { loggingLevelField, savedJobField, whenField } from '$lib/config/import-form';
import type PageConfigType from './page-config-type';

/** @type {import('./$types').PageLoad} */
export function load(): PageConfigType {
	return {
		savedJobField,
		whenField,
		loggingLevelField,
		title: 'Export Files and Metadata'
	};
}
