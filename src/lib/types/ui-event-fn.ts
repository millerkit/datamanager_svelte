import type { Item } from '$lib/types/item';

export type UiEventFunction = (event: Event, item: Item, index: number) => void;
