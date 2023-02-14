import {
	defaultInputClasses,
	defaultLabelClasses,
	fullWidthInputDivClasses,
	horizontalFieldClasses
} from '$lib/config/form-classes';
import type { FieldComponentNameEnum } from '$lib/types/fields/field-component-name-enum';

export default class FieldType {
	componentName: FieldComponentNameEnum;

	displayForActions: Array<string> = [];

	fieldClasses: Array<string> = horizontalFieldClasses;

	helpText: string | null = null;

	id: string;

	inputClasses: Array<string> = defaultInputClasses;

	inputDivClasses: Array<string> = fullWidthInputDivClasses;

	label: string;

	labelClasses: Array<string> = defaultLabelClasses;

	name: string;

	constructor(id: string, name: string, label: string, fieldComponentName: FieldComponentNameEnum) {
		this.id = id;
		this.name = name;
		this.label = label;
		this.componentName = fieldComponentName;
	}
}
