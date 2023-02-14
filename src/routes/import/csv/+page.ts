import {
	archiveImportedFilesField,
	checkRootPathField,
	containerNameCollisionField,
	defaultFileExtensionField,
	docNameCollisionField,
	fileArchivePathField,
	inheritParentField,
	loggingLevelField,
	savedJobField,
	targetContainerField,
	useFileCreateDateField,
	useFileModifyDateField,
	whenField
} from '$lib/config/import-form';
import type PageConfigType from './page-config-type';
import {
	actionField,
	archiveCsvFilesField,
	attrSourceTypeField,
	autoCreateFoldersField,
	containerTypeField,
	csvArchivePathField,
	csvFilePathField,
	forcePermInheritField,
	rmClassInheritField,
	rootFileLocField,
	targetPathMeaningField
} from './fields';

/** @type {import('./$types').PageLoad} */
export function load(): PageConfigType {
	return {
		savedJobField,
		csvFilePathField,
		targetContainerField,
		actionField,
		docNameCollisionField,
		containerNameCollisionField,
		whenField,
		targetPathMeaningField,
		defaultFileExtensionField,
		loggingLevelField,
		inheritParentField,
		autoCreateFoldersField,
		containerTypeField,
		checkRootPathField,
		archiveImportedFilesField,
		useFileCreateDateField,
		useFileModifyDateField,
		rootFileLocField,
		archiveCsvFilesField,
		csvArchivePathField,
		fileArchivePathField,
		rmClassInheritField,
		forcePermInheritField,
		attrSourceTypeField,
		title: 'Import from CSV'
	};
}
