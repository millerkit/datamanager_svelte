import { DocOptionAddVersionEnum } from '$lib/types/enums/doc-add-newer-enum';
import type { ImportCsvJobModel } from '$lib/models/import/import-csv-job-model';

const convertAddVersionToEnum = (csvJob: ImportCsvJobModel): DocOptionAddVersionEnum => {
	if (csvJob.docOptionAddVersion) {
		return DocOptionAddVersionEnum.AddVersionAlways;
	}
	if (csvJob.docOptionAddVersionIfNewer) {
		return DocOptionAddVersionEnum.AddVersionOnlyIfNewer;
	}
	return DocOptionAddVersionEnum.DoNotAddVersion;
};

export const convertServerJobToImportCsvModel = (
	jobModel: ImportCsvJobModel
): ImportCsvJobModel => {
	const newCsvJobModel: ImportCsvJobModel = {
		...jobModel
	};
	newCsvJobModel.docOptionAddVersionRadioVal = convertAddVersionToEnum(jobModel);

	return newCsvJobModel;
};
