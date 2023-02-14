export type Item = {
  label: string;

  disabled?: boolean;

  class?: string;

  style?: string;

  icon?: string;

  to?: string;

  badge?: string;

  url?: string;

  target?: string;

  separator?: boolean;

  items?: Array<Item>;

  command?: (event: Event, item: Item) => void;

  visible?: () => boolean;
};
