import FieldType from '$lib/types/fields/fieldType';
import { FieldComponentNameEnum } from '$lib/types/fields/field-component-name-enum';

export default class TextFieldType extends FieldType {
	placeholder: string | null = null;

	mask?: string;

	constructor(name: string, label: string) {
		super(name, name, label, FieldComponentNameEnum.TextField);
	}
}
