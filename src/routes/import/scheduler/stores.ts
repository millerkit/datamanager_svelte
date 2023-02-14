import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const savedJobsModel: Writable<object> = writable({
	name: ''
});
