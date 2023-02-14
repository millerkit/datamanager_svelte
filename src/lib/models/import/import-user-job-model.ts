import type { JobModel } from '$lib/models/job-model';
import type { UserActionEnum } from '$lib/types/enums/user-action-enum';

export interface ImportUserJobModel extends JobModel {
	action: UserActionEnum;
	archiveCsvFiles: boolean;
	csvArchivePath: string;
	csvPath: string;
}
