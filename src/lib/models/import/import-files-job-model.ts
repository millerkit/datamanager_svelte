import type { JobModel } from '$lib/models/job-model';
import type { DocOptionAddVersionEnum } from '$lib/types/enums/doc-add-newer-enum';
import type { DocCollisionOptionsEnum } from '$lib/types/enums/doc-collision-options-enum';

export interface ImportFilesJobModel extends JobModel {
	archiveImportedFiles: boolean;
	checkRootPath: boolean;
	defaultFileExtension: string;
	docOption: DocCollisionOptionsEnum;
	docOptionAddVersion: boolean;
	docOptionAddVersionIfNewer: boolean;
	docOptionAddVersionRadioVal: DocOptionAddVersionEnum.AddVersionAlways;
	docOptionUpdateMd: boolean;
	fileArchivePath: string;
	includeRoot: boolean;
	inheritParent: boolean;
	rootTargetPath: string;
	serverImportDir: string;
	targetContainer: string;
	useFileCreateDate: boolean;
	useFileModifyDate: boolean;
}
