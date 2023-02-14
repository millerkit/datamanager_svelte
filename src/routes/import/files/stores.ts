import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { jobModelDefaults } from '$lib/models/job-model';
import { DocCollisionOptionsEnum } from '$lib/types/enums/doc-collision-options-enum';
import { DocOptionAddVersionEnum } from '$lib/types/enums/doc-add-newer-enum';
import type { ImportFilesJobModel } from '$lib/models/import/import-files-job-model';

export const jobModel: Writable<ImportFilesJobModel> = writable({
	...jobModelDefaults,
	includeRoot: false,
	serverImportDir: '',
	targetContainer: '',
	defaultFileExtension: 'pdf',
	docOption: DocCollisionOptionsEnum.Update,
	docOptionAddVersion: false,
	docOptionAddVersionIfNewer: false,
	docOptionAddVersionRadioVal: DocOptionAddVersionEnum.AddVersionAlways,
	docOptionUpdateMd: false,
	rootTargetPath: 'Enterprise',
	inheritParent: true,
	useFileCreateDate: false,
	useFileModifyDate: false,
	archiveImportedFiles: false,
	fileArchivePath: 'FileArchive',
	checkRootPath: false
});
