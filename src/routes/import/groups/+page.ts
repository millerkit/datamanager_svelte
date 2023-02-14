import { loggingLevelField, savedJobField, whenField } from '$lib/config/import-form';
import DropdownFieldType from '$lib/types/fields/dropdown-field-type';
import OptionType from '$lib/types/fields/option-type';
import CheckboxFieldType from '$lib/types/fields/checkbox-field-type';
import TextFieldType from '$lib/types/fields/text-field-type';
import type PageConfigType from './page-config-type';
import ServerFilepathFieldType from '$lib/types/fields/server-filepath-field-type';
import RadioButtonFieldType from '$lib/types/fields/radio-button-field-type';
import { GroupActionEnum } from '$lib/types/enums/group-action-enum';
import { UpdateMemberOptionEnum } from '$lib/types/enums/update-member-option-enum';

const csvFilePathField = new ServerFilepathFieldType('rootSourcePath', 'CSV FIle');

const actionField = new DropdownFieldType('action', 'Action', [
	new OptionType(GroupActionEnum.CreateGroup, 'Create Group', GroupActionEnum.CreateGroup),
	new OptionType(GroupActionEnum.UpdateGroup, 'Update Group', GroupActionEnum.UpdateGroup),
	new OptionType(GroupActionEnum.DeleteGroup, 'Delete Group', GroupActionEnum.DeleteGroup)
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

const addMembersField = new CheckboxFieldType(
	'addMembers',
	'Group Membership',
	'Add Group Members from CSV $Members Column'
);
addMembersField.displayForActions = [GroupActionEnum.CreateGroup];
addMembersField.labelBesideCheck = 'Add Members';

const updateMemberOptionField = new RadioButtonFieldType(
	'updateMemberOption',
	'updateMemberOption',
	'Update Group Members',
	[
		new OptionType(
			UpdateMemberOptionEnum.Merge,
			'Merge CSV $Members into group',
			UpdateMemberOptionEnum.Merge
		),
		new OptionType(
			UpdateMemberOptionEnum.ClearAdd,
			'Clear existing group members and add CSV $Members',
			UpdateMemberOptionEnum.ClearAdd
		),
		new OptionType(
			UpdateMemberOptionEnum.DoNothing,
			'Do not add members from CSV',
			UpdateMemberOptionEnum.DoNothing
		)
	]
);
updateMemberOptionField.displayForActions = [GroupActionEnum.UpdateGroup];

/** @type {import('./$types').PageLoad} */
export function load(): PageConfigType {
	return {
		savedJobField,
		csvFilePathField,
		actionField,
		addMembersField,
		updateMemberOptionField,
		whenField,
		loggingLevelField,
		archiveCsvFilesField,
		csvArchivePathField,
		title: 'Import Groups'
	};
}
