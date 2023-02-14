import type { FileFolderItem } from '$lib/types/file-folder-item';

export const mockedGetFolderChildren: Array<FileFolderItem> = [
	{
		folder: true,
		isFolder: true,
		isLazy: true,
		itemNo: 1,
		lazy: true,
		path: 'C:\\ImportExport\\fromDataIDs\\',
		title: 'fromDataIDs',
		selectable: true
	},
	{
		folder: true,
		isFolder: true,
		isLazy: true,
		itemNo: 2,
		lazy: true,
		path: 'C:\\ImportExport\\fromDataIDs_2022-12-01@14.04.10\\',
		title: 'fromDataIDs_2022-12-01@14.04.10',
		selectable: true
	}
];
