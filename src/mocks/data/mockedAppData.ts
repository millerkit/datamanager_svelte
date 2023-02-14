import type { AppDataType } from '$lib/types/app-data-type';
import { TargetPathMeaningEnum } from '$lib/types/enums/target-path-meaning-enum';

export const mockedAppData: AppDataType = {
	CAN_DO_EXPORT_RUN_AS: true,
	CAN_DO_IMPORT_RUN_AS: true,
	CAN_SCHED_EXPORT: true,
	CAN_SCHED_IMPORT: true,
	CHECK_ROOT_PATH: false,
	CS_HAS_CRT_MODULE: false,
	CS_HAS_EMAIL_MODULE: true,
	CS_HAS_PO_MODULE: true,
	CS_HAS_RM_MODULE: true,
	EMAIL_LINK:
		'mailto:support@syntergy.com?subject=Support%20issue%20for%20Data%20Manager%2022.4.0&body=System%20Info:%0D%0AContent%20Server%2016%20Update%2019%20(version%2016.2.0.1803)%0D%0APostgreSQL%2014.3,%20compiled%20by%20Visual%20C++%20build%201914,%2064-bit%0D%0A--------------------%0D%0A%0D%0A%0D%0A',
	ENT_WSPACE_ID: 2000,
	ENT_WSPACE_NAME: 'Enterprise',
	FILE_REMOVAL_PATH: 'C:\\\\OPENTEXT\\\\CS221\\\\temp\\\\',
	FOOTER_STRING: 'Data Manager 22.4.0.0 Jan 18, 2021',
	HEADER_STRING: 'Data Manager 22.4.0.0',
	IMAGES_PATH: '/img221/datamanager/images/',
	LOAD_EXPORT_SYNC_LIMIT: 1000000,
	TARGET_PATH_MEANING: TargetPathMeaningEnum.TargetPathIsObject
};
