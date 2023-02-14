import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { UserPrivilegesModel } from '$lib/models/import/user-privileges-model';

export const pathModel: Writable<UserPrivilegesModel> = writable({
	name: ''
});
