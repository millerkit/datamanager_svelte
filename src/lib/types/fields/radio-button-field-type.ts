import FieldType from '$lib/types/fields/fieldType';
import { FieldComponentNameEnum } from '$lib/types/fields/field-component-name-enum';
import type OptionType from '$lib/types/fields/option-type';

export default class RadioButtonFieldType extends FieldType {
	options: Array<OptionType> = [];

	optionLabelClasses: Array<string> = ['radio'];

	constructor(id: string, name: string, label: string, options: Array<OptionType> = []) {
		super(id, name, label, FieldComponentNameEnum.RadioButtonField);
		this.options = options;
	}
}
