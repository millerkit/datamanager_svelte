import type { TargetPathMeaningEnum } from '$lib/types/enums/target-path-meaning-enum';

export type AppDataType = {
	CAN_DO_EXPORT_RUN_AS: boolean;
	CAN_DO_IMPORT_RUN_AS: boolean;
	CAN_SCHED_EXPORT: boolean;
	CAN_SCHED_IMPORT: boolean;
	CHECK_ROOT_PATH: false;
	CS_HAS_CRT_MODULE: false;
	CS_HAS_EMAIL_MODULE: boolean;
	CS_HAS_PO_MODULE: boolean;
	CS_HAS_RM_MODULE: boolean;
	EMAIL_LINK: string;
	ENT_WSPACE_ID: number;
	ENT_WSPACE_NAME: string;
	FILE_REMOVAL_PATH: string;
	FOOTER_STRING: string;
	HEADER_STRING: string;
	IMAGES_PATH: string;
	LOAD_EXPORT_SYNC_LIMIT: number;
	TARGET_PATH_MEANING: TargetPathMeaningEnum;
};
