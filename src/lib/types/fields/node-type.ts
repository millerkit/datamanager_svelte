export default class NodeType {
	key: string;

	label: string;

	// eslint-disable-next-line no-use-before-define
	children?: Array<NodeType> = [];

	icon = 'pi pi-folder';

	expandedIcon = 'pi pi-folder-open';

	collapsedIcon = 'pi pi-folder';

	constructor(key: string, label: string) {
		this.key = key;
		this.label = label;
	}
}
