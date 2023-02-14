import ServerFilepathFieldType from '$lib/types/fields/server-filepath-field-type';
import CheckboxFieldType from '$lib/types/fields/checkbox-field-type';
import { defaultAdvancedFormLabelClasses } from '$lib/config/form-classes';
import {
	archiveImportedFilesField,
	checkRootPathField,
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

const serverImportDirField = new ServerFilepathFieldType(
	'serverImportDir',
	'Server Import Directory'
);

const includeRootField = new CheckboxFieldType('includeRoot', 'Include Root');
includeRootField.helpText = 'Leave unchecked to load only the contents of this folder';

const requireMetadataField = new CheckboxFieldType('requireMetadata', 'Require Metadata CSV Entry');
requireMetadataField.labelClasses = defaultAdvancedFormLabelClasses;
requireMetadataField.helpText = 'Require a CSV metadata entry for each file and folder.';

/** @type {import('./$types').PageLoad} */
export function load(): PageConfigType {
	return {
		savedJobField,
		serverImportDirField,
		includeRootField,
		targetContainerField,
		docNameCollisionField,
		whenField,
		defaultFileExtensionField,
		loggingLevelField,
		requireMetadataField,
		inheritParentField,
		checkRootPathField,
		useFileCreateDateField,
		useFileModifyDateField,
		archiveImportedFilesField,
		fileArchivePathField,
		title: 'Import File Structure'
	};
}
