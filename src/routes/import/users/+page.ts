import { loggingLevelField, savedJobField, whenField } from '$lib/config/import-form';
import DropdownFieldType from '$lib/types/fields/dropdown-field-type';
import OptionType from '$lib/types/fields/option-type';
import CheckboxFieldType from '$lib/types/fields/checkbox-field-type';
import TextFieldType from '$lib/types/fields/text-field-type';
import type PageConfigType from './page-config-type';
import ServerFilepathFieldType from '$lib/types/fields/server-filepath-field-type';
import { UserActionEnum } from '$lib/types/enums/user-action-enum';

const csvFilePathField = new ServerFilepathFieldType('rootSourcePath', 'CSV FIle');

const actionField = new DropdownFieldType('action', 'Action', [
	new OptionType(UserActionEnum.CreateUser, 'Create User', UserActionEnum.CreateUser),
	new OptionType(UserActionEnum.UpdateUser, 'Update User', UserActionEnum.UpdateUser),
	new OptionType(UserActionEnum.DeleteUser, 'Delete User', UserActionEnum.DeleteUser)
]);

const archiveCsvFilesField = new CheckboxFieldType(
	'archiveCsvFiles',
	'Archive CSV Files After Importing',
	'Move processed metadata csv files to a sub-folder below in _audit folder.'
);

const csvArchivePathField = new TextFieldType(
	'csvArchivePath',
	'Folder name for archived CSV Files'
);
csvArchivePathField.helpText = 'Folder name for archived CSV Files';
csvArchivePathField.fieldClasses = ['field', 'is-horizontal', 'is-size-6-point-five'];
csvArchivePathField.inputClasses = ['input', 'is-size-6-point-five'];

/** @type {import('./$types').PageLoad} */
export function load(): PageConfigType {
	return {
		savedJobField,
		csvFilePathField,
		actionField,
		whenField,
		loggingLevelField,
		archiveCsvFilesField,
		csvArchivePathField,
		title: 'Import Users'
	};
}
