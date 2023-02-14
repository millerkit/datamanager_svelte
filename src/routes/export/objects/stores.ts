import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { jobModelDefaults } from '$lib/models/job-model';
import type { ExportObjectsJobModel } from '$lib/models/export/export-objects-job-model';

export const jobModel: Writable<ExportObjectsJobModel> = writable({
	...jobModelDefaults
});
