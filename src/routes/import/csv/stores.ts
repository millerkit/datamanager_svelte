import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { TargetPathMeaningEnum } from '$lib/types/enums/target-path-meaning-enum';
import { jobModelDefaults } from '$lib/models/job-model';
import { ContainerCollisionOptionsEnum } from '$lib/types/enums/container-collision-options-enum';
import { DocOptionAddVersionEnum } from '$lib/types/enums/doc-add-newer-enum';
import { ContainerTypeEnum } from '$lib/types/enums/container-type-enum';
import { RootFileLocEnum } from '$lib/types/enums/root-file-loc-enum';
import { DocCollisionOptionsEnum } from '$lib/types/enums/doc-collision-options-enum';
import { ActionEnum } from '$lib/types/enums/action-enum';
import { AttrSourceTypeEnum } from '$lib/types/enums/attr-source-type-enum';
import type { ImportCsvJobModel } from '$lib/models/import/import-csv-job-model';

export const jobModel: Writable<ImportCsvJobModel> = writable({
	...jobModelDefaults,
	action: ActionEnum.Dynamic,
	actionMetadata: false,
	actionRename: false,
	archiveCsvFiles: false,
	archiveImportedFiles: false,
	attrSourceType: AttrSourceTypeEnum.SourceNode,
	autoCreateFolders: true,
	checkRootPath: false,
	containerOption: ContainerCollisionOptionsEnum.Update,
	containerOptionUpdateMd: false,
	containerType: ContainerTypeEnum.Folder,
	csvArchivePath: 'CSVArchive',
	defaultFileExtension: 'pdf',
	docOption: DocCollisionOptionsEnum.Update,
	docOptionAddVersion: false,
	docOptionAddVersionIfNewer: false,
	docOptionAddVersionRadioVal: DocOptionAddVersionEnum.AddVersionAlways,
	docOptionUpdateMd: false,
	fileArchivePath: 'FileArchive',
	forcePermInherit: false,
	includeRoot: false,
	inheritParent: true,
	mdCats: false,
	mdDapi: false,
	rmClassInherit: false,
	rootFileLoc: RootFileLocEnum.RelativeToCsvPath,
	rootSourcePath: '',
	rootTargetPath: 'Enterprise',
	savedJob: 0,
	targetPathMeaning: TargetPathMeaningEnum.TargetPathIsObject,
	useFileCreateDate: false,
	useFileModifyDate: false
});
