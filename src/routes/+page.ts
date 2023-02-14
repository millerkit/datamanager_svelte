import type { AppDataType } from '$lib/types/app-data-type';
import { TargetPathMeaningEnum } from '$lib/types/enums/target-path-meaning-enum';

/** @type {import('./$types').PageLoad} */
export function load(): AppDataType {
	return {
		CAN_DO_EXPORT_RUN_AS: false,
		CAN_DO_IMPORT_RUN_AS: false,
		CAN_SCHED_EXPORT: false,
		CAN_SCHED_IMPORT: false,
		CHECK_ROOT_PATH: false,
		CS_HAS_CRT_MODULE: false,
		CS_HAS_EMAIL_MODULE: false,
		CS_HAS_PO_MODULE: false,
		CS_HAS_RM_MODULE: false,
		EMAIL_LINK: '',
		ENT_WSPACE_ID: 0,
		ENT_WSPACE_NAME: '',
		FILE_REMOVAL_PATH: '',
		FOOTER_STRING: '',
		HEADER_STRING: '',
		IMAGES_PATH: '',
		LOAD_EXPORT_SYNC_LIMIT: 0,
		TARGET_PATH_MEANING: TargetPathMeaningEnum.TargetPathIsObject
	};
}
