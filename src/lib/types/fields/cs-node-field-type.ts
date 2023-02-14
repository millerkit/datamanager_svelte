import { FieldComponentNameEnum } from '$lib/types/fields/field-component-name-enum';
import TextFieldType from '$lib/types/fields/text-field-type';

export default class CsNodeFieldType extends TextFieldType {
	constructor(name: string, label: string) {
		super(name, label);
		this.componentName = FieldComponentNameEnum.CsNodeField;
	}
}
