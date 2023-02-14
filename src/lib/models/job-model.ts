import type { TimeType } from '$lib/types/time-type';
import type { TDateISO } from '$lib/types/date-time-type';
import { LogLevelEnum } from '$lib/types/enums/log-level-enum';
import { WhenOptionEnum } from '$lib/types/enums/when-option-enum';

export interface JobModel extends Object {
	day_pattern: number;
	day_recurrence: number;
	enabled: boolean;
	end_time: null;
	jobId: number;
	jobName: string;
	jobSubtype: string;
	jobType: string;
	jobdesc: null;
	logLevel: LogLevelEnum;
	notify_emails?: string | null;
	one_time_date?: TDateISO | null;
	one_time_time: TimeType | null;
	runAsUserName: string | null;
	savedJob?: number | null;
	schedule_type: number;
	specific_at_times?: Array<TimeType> | null;
	specific_at_times_count: number;
	start_time: TimeType | null;
	time_every_integer: null;
	time_every_unit: 1;
	time_pattern: 1;
	whenOption: WhenOptionEnum;
}

export const jobModelDefaults: JobModel = {
	day_pattern: 0,
	day_recurrence: 0,
	enabled: false,
	end_time: null,
	jobId: 0,
	jobName: '',
	jobSubtype: '',
	jobType: '',
	jobdesc: null,
	logLevel: LogLevelEnum.Default,
	notify_emails: null,
	one_time_date: null,
	one_time_time: null,
	runAsUserName: null,
	savedJob: null,
	schedule_type: 0,
	specific_at_times: null,
	specific_at_times_count: 0,
	start_time: null,
	time_every_integer: null,
	time_every_unit: 1,
	time_pattern: 1,
	whenOption: WhenOptionEnum.Now
};
