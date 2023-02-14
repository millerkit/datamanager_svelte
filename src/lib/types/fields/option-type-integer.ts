export default class OptionTypeInteger {
	id: string;

	label: string;

	value: number;

	helpBelowField: string | null;

	constructor(id: string, label: string, value: number, helpBelowField: string | null = null) {
		this.id = id;
		this.label = label;
		this.value = value;
		this.helpBelowField = helpBelowField;
	}
}
