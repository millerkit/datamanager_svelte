import FieldType from '$lib/types/fields/fieldType';
import { FieldComponentNameEnum } from '$lib/types/fields/field-component-name-enum';

export default class ContainerNameCollisionFieldType extends FieldType {
	constructor(name: string, label: string) {
		super(name, name, label, FieldComponentNameEnum.ContainerNameCollisionField);
	}
}
