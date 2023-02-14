import type ServerFilepathFieldType from '$lib/types/fields/server-filepath-field-type';
import type DocNameCollisionFieldType from '$lib/types/fields/doc-name-collision-field-type';
import type TextFieldType from '$lib/types/fields/text-field-type';
import type CheckboxFieldType from '$lib/types/fields/checkbox-field-type';
import type SavedJobFieldType from '$lib/types/fields/saved-job-field-type';
import type CsNodeFieldType from '$lib/types/fields/cs-node-field-type';
import type RadioButtonFieldType from '$lib/types/fields/radio-button-field-type';
import type DropdownFieldType from '$lib/types/fields/dropdown-field-type';

export default interface PageConfigType {
	archiveImportedFilesField: CheckboxFieldType;
	checkRootPathField: CheckboxFieldType;
	defaultFileExtensionField: TextFieldType;
	docNameCollisionField: DocNameCollisionFieldType;
	fileArchivePathField: TextFieldType;
	includeRootField: CheckboxFieldType;
	inheritParentField: CheckboxFieldType;
	loggingLevelField: DropdownFieldType;
	requireMetadataField: CheckboxFieldType;
	savedJobField: SavedJobFieldType;
	serverImportDirField: ServerFilepathFieldType;
	targetContainerField: CsNodeFieldType;
	title: string;
	useFileCreateDateField: CheckboxFieldType;
	useFileModifyDateField: CheckboxFieldType;
	whenField: RadioButtonFieldType;
}
