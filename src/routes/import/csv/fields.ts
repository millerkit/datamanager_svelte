import ServerFilepathFieldType from '$lib/types/fields/server-filepath-field-type';
import DropdownFieldType from '$lib/types/fields/dropdown-field-type';
import OptionType from '$lib/types/fields/option-type';
import { ActionEnum } from '$lib/types/enums/action-enum';
import { TargetPathMeaningEnum } from '$lib/types/enums/target-path-meaning-enum';
import { RootFileLocEnum } from '$lib/types/enums/root-file-loc-enum';
import CheckboxFieldType from '$lib/types/fields/checkbox-field-type';
import RadioButtonFieldType from '$lib/types/fields/radio-button-field-type';
import TextFieldType from '$lib/types/fields/text-field-type';
import { AttrSourceTypeEnum } from '$lib/types/enums/attr-source-type-enum';

const csvFilePathField = new ServerFilepathFieldType('rootSourcePath', 'CSV FIle');

const actionField = new DropdownFieldType('action', 'Action', [
	new OptionType(ActionEnum.Dynamic, 'Dynamic', ActionEnum.Dynamic),
	new OptionType(ActionEnum.CreateObjects, 'Create Objects', ActionEnum.CreateObjects),
	new OptionType(ActionEnum.AddVersions, 'Add Versions', ActionEnum.AddVersions),
	new OptionType(ActionEnum.UpdateObjects, 'Update Objects', ActionEnum.UpdateObjects),
	new OptionType(ActionEnum.MoveObjects, 'Move Objects', ActionEnum.MoveObjects),
	new OptionType(ActionEnum.CopyObjects, 'Copy Objects', ActionEnum.CopyObjects),
	new OptionType(ActionEnum.PurgeVersions, 'Purge Versions', ActionEnum.PurgeVersions),
	new OptionType(ActionEnum.DeleteObjects, 'Delete Objects', ActionEnum.DeleteObjects),
	new OptionType(ActionEnum.DeleteRenditions, 'Delete Renditions', ActionEnum.DeleteRenditions),
	new OptionType(
		ActionEnum.AssignCrossReference,
		'Assign Cross-Reference',
		ActionEnum.AssignCrossReference
	)
]);

const targetPathMeaningField = new RadioButtonFieldType(
	'targetPathMeaning',
	'targetPathMeaning',
	'$TargetPath Meaning',
	[
		new OptionType(
			TargetPathMeaningEnum.TargetPathIsObject,
			"$TargetPath refers to the object's location.",
			TargetPathMeaningEnum.TargetPathIsObject,
			'A $TargetPath of ":Enterprise:MyFolder:MyDoc.pdf" will create or update the "MyDoc.pdf" object. $ObjectName is ignored.'
		),
		new OptionType(
			TargetPathMeaningEnum.TargetPathIsParent,
			"$TargetPath refers to the parent's location.",
			TargetPathMeaningEnum.TargetPathIsParent,
			'A $TargetPath of ":Enterprise:MyFolder" and $ObjectName of "MyDoc.pdf" will create or update the "MyDoc.pdf" object. $ObjectName is required.'
		)
	]
);
targetPathMeaningField.optionLabelClasses = ['radio', 'x-small-label'];

const rootFileLocField = new RadioButtonFieldType(
	'rootFileLoc',
	'rootFileLoc',
	'Location of Files',
	[
		new OptionType(
			RootFileLocEnum.RelativeToCsvPath,
			'Relative to CSV location',
			RootFileLocEnum.RelativeToCsvPath
		),
		new OptionType(
			RootFileLocEnum.AbsoluteSourcePath,
			'Absolute $SourcePath',
			RootFileLocEnum.AbsoluteSourcePath
		)
	]
);
rootFileLocField.displayForActions = [ActionEnum.CreateObjects, ActionEnum.AddVersions];

const autoCreateFoldersField = new CheckboxFieldType(
	'autoCreateFolders',
	'Auto Create Containers from $TargetPath',
	'Create containers as required when elements in $TargetPath do not exist.'
);
autoCreateFoldersField.displayForActions = [
	ActionEnum.CreateObjects,
	ActionEnum.AddVersions,
	ActionEnum.MoveObjects,
	ActionEnum.CopyObjects
];

const containerTypeField = new DropdownFieldType('containerType', 'Container Type to Create', [
	new OptionType('0', 'Folder', '0'),
	new OptionType('751', 'Email Folder', '751')
]);
containerTypeField.helpText = 'Container type to create with Auto Create setting';
containerTypeField.displayForActions = [
	ActionEnum.CreateObjects,
	ActionEnum.AddVersions,
	ActionEnum.MoveObjects,
	ActionEnum.CopyObjects
];

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

const rmClassInheritField = new CheckboxFieldType(
	'rmClassInherit',
	'Inherit RM  Classification',
	"Inherit the Target Folder's RM Classification for each moved or copied object"
);
rmClassInheritField.displayForActions = [ActionEnum.MoveObjects, ActionEnum.CopyObjects];

const forcePermInheritField = new CheckboxFieldType(
	'forcePermInherit',
	'Force Permission Inheritance',
	"Inherit the Target Folder's Permission for each moved or copied object. Leave unchecked if you don't want permissions to change."
);
forcePermInheritField.displayForActions = [ActionEnum.MoveObjects, ActionEnum.CopyObjects];

const attrSourceTypeField = new DropdownFieldType('attrSourceType', 'Attribute source', [
	new OptionType(AttrSourceTypeEnum.SourceNode, 'Source Node', AttrSourceTypeEnum.SourceNode),
	new OptionType(
		AttrSourceTypeEnum.DestinationNode,
		'Destination Node',
		AttrSourceTypeEnum.DestinationNode
	),
	new OptionType(AttrSourceTypeEnum.Merged, 'Merged', AttrSourceTypeEnum.Merged)
]);
attrSourceTypeField.helpText = 'Attribute source for moved or copied objects';
attrSourceTypeField.displayForActions = [ActionEnum.MoveObjects, ActionEnum.CopyObjects];

export {
	csvFilePathField,
	actionField,
	targetPathMeaningField,
	rootFileLocField,
	autoCreateFoldersField,
	containerTypeField,
	archiveCsvFilesField,
	csvArchivePathField,
	rmClassInheritField,
	forcePermInheritField,
	attrSourceTypeField
};
