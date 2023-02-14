import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { jobModelDefaults } from '$lib/models/job-model';
import { UpdateMemberOptionEnum } from '$lib/types/enums/update-member-option-enum';
import { GroupActionEnum } from '$lib/types/enums/group-action-enum';
import type { ImportGroupJobModel } from '$lib/models/import/import-group-job-model';

export const jobModel: Writable<ImportGroupJobModel> = writable({
	...jobModelDefaults,
	action: GroupActionEnum.CreateGroup,
	csvPath: '',
	archiveCsvFiles: false,
	csvArchivePath: 'CSVArchive',
	addMembers: false,
	updateMemberOption: UpdateMemberOptionEnum.DoNothing
});
