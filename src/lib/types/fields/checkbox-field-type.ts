import FieldType from '$lib/types/fields/fieldType';
import { FieldComponentNameEnum } from '$lib/types/fields/field-component-name-enum';

export default class CheckboxFieldType extends FieldType {
	value: string | null;

	isBoolean: boolean;

	optionLabelClasses: Array<string> = ['checkbox'];

	subFields: Array<FieldType> = [];

	helpBelowField: string | null;

	labelBesideCheck: string | null;

	constructor(
		name: string,
		label: string,
		helpBelowField: string | null = null,
		value = 'true',
		isBoolean = true
	) {
		super(name, name, label, FieldComponentNameEnum.CheckboxField);
		this.value = value;
		this.isBoolean = isBoolean;
		this.helpBelowField = helpBelowField;
		this.labelBesideCheck = label;
	}
}
