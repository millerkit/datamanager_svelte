type ColumnType = {
	title: string;
};

export type GetAllCsvDataType = {
	columns: Array<ColumnType>;
	data: Array<Array<string | null>>;
};
