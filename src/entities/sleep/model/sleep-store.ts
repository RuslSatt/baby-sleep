import { create } from 'zustand';
import { ISleep, ISleepSchema } from './sleep-models';
import { immer } from 'zustand/middleware/immer';
import supabase from '../../../shared/api/supabase';
import { getDiff } from '../../../shared/libs/day';

type Actions = {
	fetchSleeps: () => void;
	createSleep: (payload: ISleep) => void;
	updateSleep: (payload?: ISleep) => void;
	setEndDate: () => void;
}

export const useSleepStore = create<ISleepSchema & Actions>()(
	immer((set, get) => ({
		sleeps: [],
		currentSleep: undefined,
		isActive: false,
		isLoading: false,
		setEndDate: () => {
			set((state) => {
				if (state.currentSleep) {
					state.currentSleep.end = new Date();

					const { start, end } = state.currentSleep;

					if (start && end) {
						state.currentSleep.duration = getDiff(start, end);
					}
				}
			});
		},
		fetchSleeps: async () => {
			const response = await supabase.from('sleeps').select();
			const data = response.data as ISleep[];
			set({ sleeps: data });
		},
		createSleep: async (sleep: ISleep) => {
			set({ isLoading: true });
			console.log(sleep);

			const { data, error } = await supabase.from('sleeps').insert(sleep).select();
			const result = data as ISleep[];
			if (result) {
				set((state) => {
					state.currentSleep = result[0];
					state.isActive = true;
					state.sleeps.push(result[0]);
				});
			} else {
				console.error(error);
			}

			set({ isLoading: false });
		},
		updateSleep: async (sleep?: ISleep) => {
			if (!sleep) {
				const { currentSleep } = get();
				sleep = currentSleep;
			}

			if (!sleep) return;

			set({ isLoading: true });
			console.log(sleep);
			const { data, error } = await supabase
				.from('sleeps')
				.update(sleep)
				.eq('id', sleep.id)
				.select();
			if (data) {
				const result = data[0] as ISleep;
				console.log(result);
				if (result) {
					set((state) => {
						const foundSleepIndex = state.sleeps.findIndex(sleep => sleep.id === result.id);
						console.log(foundSleepIndex);
						if (foundSleepIndex !== -1) {
							state.sleeps.splice(foundSleepIndex, 1, result);
						}
					});
				}
			}

			set({ isLoading: false, isActive: false });
		}
	}))
);