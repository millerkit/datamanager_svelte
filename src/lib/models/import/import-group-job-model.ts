import type { JobModel } from '$lib/models/job-model';
import type { UpdateMemberOptionEnum } from '$lib/types/enums/update-member-option-enum';
import type { GroupActionEnum } from '$lib/types/enums/group-action-enum';

export interface ImportGroupJobModel extends JobModel {
	action: GroupActionEnum;
	addMembers: boolean;
	archiveCsvFiles: boolean;
	csvArchivePath: string;
	csvPath: string;
	updateMemberOption: UpdateMemberOptionEnum;
}
