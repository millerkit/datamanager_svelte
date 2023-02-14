import FieldType from '$lib/types/fields/fieldType';
import { FieldComponentNameEnum } from '$lib/types/fields/field-component-name-enum';
import { halfWidthInputDivClasses } from '$lib/config/form-classes';
import type OptionTypeInteger from '$lib/types/fields/option-type-integer';

export default class SavedJobFieldType extends FieldType {
	options?: Array<OptionTypeInteger> = [];

	constructor(name: string, label: string) {
		super(name, name, label, FieldComponentNameEnum.SavedJobField);
		this.inputDivClasses = halfWidthInputDivClasses;
	}
}
