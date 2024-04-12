export interface ISleep {
	$id: string;
	title?: string;
	description?: string;
	startTime?: Date;
	endTime?: Date;
	duration?: number;
}

export interface ISleepSchema {
	sleeps?: ISleep[];
}