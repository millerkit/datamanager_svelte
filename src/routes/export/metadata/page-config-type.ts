import type DropdownFieldType from '$lib/types/fields/dropdown-field-type';
import type RadioButtonFieldType from '$lib/types/fields/radio-button-field-type';
import type SavedJobFieldType from '$lib/types/fields/saved-job-field-type';

export default interface PageConfigType {
	loggingLevelField: DropdownFieldType;
	savedJobField: SavedJobFieldType;
	title: string;
	whenField: RadioButtonFieldType;
}
