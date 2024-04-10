export interface ISleepCard {
	title?: string;
	description?: string;
	startTime?: Date;
	endTime?: Date;
	duration?: number;
}

export interface ISleepCardSchema {
	sleep?: ISleepCard;
}