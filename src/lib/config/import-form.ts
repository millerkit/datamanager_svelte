import SavedJobFieldType from '$lib/types/fields/saved-job-field-type';
import CheckboxFieldType from '$lib/types/fields/checkbox-field-type';
import CsNodeFieldType from '$lib/types/fields/cs-node-field-type';
import DocNameCollisionFieldType from '$lib/types/fields/doc-name-collision-field-type';
import WhenFieldType from '$lib/types/fields/when-field-type';
import TextFieldType from '$lib/types/fields/text-field-type';
import DropdownFieldType from '$lib/types/fields/dropdown-field-type';
import OptionType from '$lib/types/fields/option-type';
import { defaultAdvancedFormLabelClasses } from '$lib/config/form-classes';
import ContainerNameCollisionFieldType from '$lib/types/fields/container-name-collision-field-type';
import { LogLevelEnum } from '$lib/types/enums/log-level-enum';
import { ActionEnum } from '$lib/types/enums/action-enum';

const savedJobField = new SavedJobFieldType('savedJob', 'Saved Job');
savedJobField.helpText = 'To create a new profile, set desired inputs and click save.';
savedJobField.fieldClasses = ['field', 'is-horizontal', 'mb-0'];

const targetContainerField = new CsNodeFieldType('	targetContainer', 'Target Container');
targetContainerField.helpText =
	'Any Target Path in the CSV Files will be ignored. See note at top of page.';
targetContainerField.fieldClasses = ['field', 'is-horizontal', 'mb-0'];

const containerNameCollisionField = new ContainerNameCollisionFieldType(
	'docNameCollisions',
	'Container Name Collisions'
);
containerNameCollisionField.displayForActions = [ActionEnum.Dynamic, ActionEnum.CreateObjects];

const docNameCollisionField = new DocNameCollisionFieldType(
	'docNameCollisions',
	'Doc Name Collisions'
);
docNameCollisionField.displayForActions = [ActionEnum.Dynamic, ActionEnum.CreateObjects];

const whenField = new WhenFieldType('whenOption', 'When', 'When');
const defaultFileExtensionField = new TextFieldType(
	'defaultFileExtension',
	'Default File Extension'
);
defaultFileExtensionField.inputClasses = ['input', 'is-quarter-width'];
defaultFileExtensionField.labelClasses = defaultAdvancedFormLabelClasses;
defaultFileExtensionField.helpText =
	'Default file type extension for files having no file type extension (e.g. doc, pdf, tif).';
defaultFileExtensionField.displayForActions = [ActionEnum.CreateObjects, ActionEnum.AddVersions];

const loggingLevelField = new DropdownFieldType('logLevel', 'Logging Level', [
	new OptionType(LogLevelEnum.Default, 'Default', LogLevelEnum.Default),
	new OptionType(LogLevelEnum.Debug, 'Debug', LogLevelEnum.Debug)
]);
loggingLevelField.labelClasses = defaultAdvancedFormLabelClasses;
loggingLevelField.helpText =
	'Default Logging gives you an import.log and an errors.csv file for any errors encountered. Debug logging is more detailed for help with support tickets.';

const inheritParentField = new CheckboxFieldType(
	'inheritParent',
	'Inherit Parent Category and RM Data'
);
inheritParentField.labelClasses = defaultAdvancedFormLabelClasses;
inheritParentField.helpText =
	"Inherit category and RM data from parent container (default behavior). Use this setting if you have incomplete category and RM data in your CSV and don't want to overwrite inherited data with blank values.";
inheritParentField.displayForActions = [ActionEnum.CreateObjects];

const checkRootPathField = new CheckboxFieldType(
	'checkRootPath',
	'Check Root Element of $TargetPath'
);
checkRootPathField.labelClasses = defaultAdvancedFormLabelClasses;
checkRootPathField.helpText =
	'Check root element of $TargetPath and return an error if it does not exist.';
checkRootPathField.displayForActions = [
	ActionEnum.CreateObjects,
	ActionEnum.AddVersions,
	ActionEnum.MoveObjects,
	ActionEnum.CopyObjects
];

const archiveImportedFilesField = new CheckboxFieldType(
	'archiveImportedFiles',
	'Archive Files After Importing'
);
archiveImportedFilesField.labelClasses = defaultAdvancedFormLabelClasses;
archiveImportedFilesField.helpText = 'Move imported files to a sub-folder below _audit folder.';
archiveImportedFilesField.displayForActions = [ActionEnum.CreateObjects, ActionEnum.AddVersions];

const fileArchivePathField = new TextFieldType(
	'fileArchivePath',
	'Folder name for archived CSV Files'
);
fileArchivePathField.helpText = 'Folder name for archived files';
fileArchivePathField.fieldClasses = ['field', 'is-horizontal', 'is-size-6-point-five'];
fileArchivePathField.inputClasses = ['input', 'is-size-6-point-five'];
fileArchivePathField.displayForActions = [ActionEnum.CreateObjects, ActionEnum.AddVersions];

const useFileCreateDateField = new CheckboxFieldType('useFileCreateDate', "Use file's create date");
useFileCreateDateField.labelClasses = defaultAdvancedFormLabelClasses;
useFileCreateDateField.helpText =
	"Use file's create date as the create and modified date when creating documents";
useFileCreateDateField.displayForActions = [ActionEnum.CreateObjects];

const useFileModifyDateField = new CheckboxFieldType(
	'useFileModifyDate',
	"Use file's modified date"
);
useFileModifyDateField.labelClasses = defaultAdvancedFormLabelClasses;
useFileModifyDateField.helpText =
	"Use file's last modified date as the create and modified date when creating documents";
useFileModifyDateField.displayForActions = [ActionEnum.CreateObjects];

export {
	savedJobField,
	targetContainerField,
	containerNameCollisionField,
	docNameCollisionField,
	whenField,
	defaultFileExtensionField,
	loggingLevelField,
	inheritParentField,
	checkRootPathField,
	archiveImportedFilesField,
	fileArchivePathField,
	useFileCreateDateField,
	useFileModifyDateField
};
