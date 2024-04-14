export interface ISleep {
	id?: string;
	type?: SleepType;
	description?: string;
	start?: Date;
	end?: Date;
	duration?: number;
}

export type SleepType = SleepTypes.day | SleepTypes.night

export enum SleepTypes {
	day = 'day',
	night = 'night'
}

export interface ISleepSchema {
	currentSleep?: ISleep;
	sleeps: ISleep[];
	isActive: boolean;
	isLoading: boolean;
}