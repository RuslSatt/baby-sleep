import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export function getViewDate(date?: Date): string | undefined {
	if (date) {
		dayjs.extend(utc);
		dayjs.extend(timezone);
		const userZone = dayjs.tz.guess();
		const utcDate = dayjs.tz(date, userZone);
		return dayjs(utcDate).format('hh:mm');
	}
}

export function getDiff(start: Date, end: Date) {


	const date1 = dayjs(start);
	const date2 = dayjs(end);
	return date2.diff(date1);
}

export function getDuration(ms: number) {
	return dayjs.duration(ms).format('HH:mm:ss');
}