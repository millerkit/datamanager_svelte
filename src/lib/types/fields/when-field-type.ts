import RadioButtonFieldType from '$lib/types/fields/radio-button-field-type';
import OptionType from '$lib/types/fields/option-type';
import { WhenOptionEnum } from '$lib/types/enums/when-option-enum';

export default class WhenFieldType extends RadioButtonFieldType {
	constructor(id: string, name: string, label: string) {
		super(name, name, label);
		this.options = [
			new OptionType(WhenOptionEnum.Now, 'Now', WhenOptionEnum.Now),
			new OptionType(WhenOptionEnum.Scheduled, 'Scheduled', WhenOptionEnum.Scheduled)
		];
	}
}
