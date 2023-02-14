// eslint-disable-next-line import/no-extraneous-dependencies
import { RequestHandler, rest } from 'msw';
import { mockedAppData } from './data/mockedAppData';
import {
	GET_ALL_CSV_DATA_URL,
	GET_APP_DATA_URL,
	GET_CSV_COLS_FROM_FILE_URL,
	GET_FOLDER_CHILDREN_URL,
	GET_IMPORT_CSV_PAGE_CONFIG_URL,
	GET_PATHS_FOR_IMPORT_PAGE_URL
} from '$lib/api/constants';
import { mockedImportCsvPageConfig } from './data/mockedImportCsvPageConfig';
import { mockedCsvColsFromFile } from './data/mockedCsvColsFromFile';
import { mockedCsvData } from './data/mockedCsvData';
import { mockedPathsForImportPage } from './data/mockedPathsForImportPage';

export const handlers: Array<RequestHandler> = [
	rest.get(GET_APP_DATA_URL, (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockedAppData));
	}),
	rest.get(GET_CSV_COLS_FROM_FILE_URL, (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockedCsvColsFromFile));
	}),
	rest.get(GET_ALL_CSV_DATA_URL, (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockedCsvData));
	}),
	// TODO this has params
	rest.get(GET_FOLDER_CHILDREN_URL, (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockedCsvData));
	}),
	rest.get(GET_IMPORT_CSV_PAGE_CONFIG_URL, (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockedImportCsvPageConfig));
	}),
	rest.get(GET_PATHS_FOR_IMPORT_PAGE_URL, (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockedPathsForImportPage));
	})
];
