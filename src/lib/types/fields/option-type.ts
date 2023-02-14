export default class OptionType {
	id: string;

	label: string;

	value: string;

	helpBelowField: string | null;

	data: object;

	constructor(
		id: string,
		label: string,
		value: string,
		helpBelowField: string | null = null,
		data: object = {}
	) {
		this.id = id;
		this.label = label;
		this.value = value;
		this.helpBelowField = helpBelowField;
		this.data = data;
	}
}
