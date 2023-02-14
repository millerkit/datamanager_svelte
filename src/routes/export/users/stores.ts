import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { jobModelDefaults } from '$lib/models/job-model';
import type { ExportUsersJobModel } from '$lib/models/export/export-users-job-model';

export const jobModel: Writable<ExportUsersJobModel> = writable({
	...jobModelDefaults
});
