import FieldType from '$lib/types/fields/fieldType';
import { FieldComponentNameEnum } from '$lib/types/fields/field-component-name-enum';

export default class DocNameCollisionFieldType extends FieldType {
	constructor(name: string, label: string) {
		super(name, name, label, FieldComponentNameEnum.DocNameCollisionField);
	}
}
