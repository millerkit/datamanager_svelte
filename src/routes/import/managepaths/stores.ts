import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const pathModel: Writable<object> = writable({
	name: ''
});
