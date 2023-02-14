import type DropdownFieldType from '$lib/types/fields/dropdown-field-type';
import type ServerFilepathFieldType from '$lib/types/fields/server-filepath-field-type';
import type RadioButtonFieldType from '$lib/types/fields/radio-button-field-type';
import type TextFieldType from '$lib/types/fields/text-field-type';
import type CheckboxFieldType from '$lib/types/fields/checkbox-field-type';
import type SavedJobFieldType from '$lib/types/fields/saved-job-field-type';

export default interface PageConfigType {
	actionField: DropdownFieldType;
	archiveCsvFilesField: CheckboxFieldType;
	csvArchivePathField: TextFieldType;
	csvFilePathField: ServerFilepathFieldType;
	loggingLevelField: DropdownFieldType;
	savedJobField: SavedJobFieldType;
	title: string;
	whenField: RadioButtonFieldType;
}
