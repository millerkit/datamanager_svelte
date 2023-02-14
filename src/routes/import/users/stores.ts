import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { jobModelDefaults } from '$lib/models/job-model';
import { UserActionEnum } from '$lib/types/enums/user-action-enum';
import type { ImportUserJobModel } from '$lib/models/import/import-user-job-model';

export const jobModel: Writable<ImportUserJobModel> = writable({
	...jobModelDefaults,
	action: UserActionEnum.CreateUser,
	csvPath: '',
	archiveCsvFiles: false,
	csvArchivePath: 'CSVArchive'
});
