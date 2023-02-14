import FieldType from '$lib/types/fields/fieldType';
import { FieldComponentNameEnum } from '$lib/types/fields/field-component-name-enum';
import type OptionType from '$lib/types/fields/option-type';

export default class DropdownFieldType extends FieldType {
	options?: Array<OptionType> = [];

	constructor(name: string, label: string, options: Array<OptionType> = []) {
		super(name, name, label, FieldComponentNameEnum.DropdownField);
		this.options = options;
	}
}
