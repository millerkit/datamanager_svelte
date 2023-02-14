import {
	GET_APP_DATA_URL,
	GET_FOLDER_CHILDREN_URL,
	GET_IMPORT_CSV_PAGE_CONFIG_URL,
	GET_PATHS_FOR_IMPORT_PAGE_URL
} from '$lib/api/constants';
import type { AppDataType } from '$lib/types/app-data-type';
import type { ImportCsvPageConfigType } from '$lib/types/import/import-csv-page-config-type';
import type { CsvColsFromFileType } from '$lib/types/import/csv-cols-from-file-type';
import type { PathsForImportPageType } from '$lib/types/import/paths-for-import-page-type';
import type { FileFolderItem } from '$lib/types/file-folder-item';

async function handleGet(url: string) {
	const res = await fetch(url);
	return res.json();
}

export async function getAppData(): Promise<AppDataType> {
	return handleGet(`..${GET_APP_DATA_URL}`);
}

export async function getImportCsvPageConfig(): Promise<ImportCsvPageConfigType> {
	return handleGet(`..${GET_IMPORT_CSV_PAGE_CONFIG_URL}`);
}

export async function getCsvColumnsFromFile(): Promise<CsvColsFromFileType> {
	return handleGet(`..${GET_IMPORT_CSV_PAGE_CONFIG_URL}`);
}

export async function getPathsForImportPage(): Promise<Array<PathsForImportPageType>> {
	return handleGet(`..${GET_PATHS_FOR_IMPORT_PAGE_URL}`);
}

export async function getFolderChildren(
	folderPath: string,
	showFiles = true,
	filterExtension?: string
): Promise<Array<FileFolderItem>> {
	let url = `..${GET_FOLDER_CHILDREN_URL}?folderPath=${folderPath}&showFiles=${showFiles}`;

	if (filterExtension) {
		url = `${url}&filterExtension=${filterExtension}`;
	}

	return handleGet(url);
}
