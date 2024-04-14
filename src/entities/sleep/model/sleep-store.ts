import { create } from 'zustand';
import { ISleep, ISleepSchema } from './sleep-models';
import { DB } from '../../../shared/api/appwrite';
import { DATABASE_ID, SLEEPS_COLLECTION_ID } from '../../../shared/api/const';
import { ID } from 'appwrite';
import { immer } from 'zustand/middleware/immer';

type Actions = {
	fetchSleeps: () => void;
	createSleep: (payload: ISleep) => void;
	updateSleep: (payload: ISleep) => void;
}

export const useSleepStore = create<ISleepSchema & Actions>()(
	immer((set, get) => ({
		sleeps: [],
		isLoading: false,
		fetchSleeps: async () => {
			const response = await DB.listDocuments(`${DATABASE_ID}`, `${SLEEPS_COLLECTION_ID}`);
			const data = response.documents as ISleep[];
			set({ sleeps: data });
		},
		createSleep: async (sleep: ISleep) => {
			set({ isLoading: true });
			const response = await DB.createDocument(`${DATABASE_ID}`, `${SLEEPS_COLLECTION_ID}`, ID.unique(), sleep);
			const data = response as ISleep;
			if (data) {
				set((state) => {
					state.currentSleep = data;
					state.sleeps.push(data);
				});
			}
			set({ isLoading: false });
		},
		updateSleep: async (sleep: ISleep) => {
			set({ isLoading: true });
			const response = await DB.updateDocument(`${DATABASE_ID}`, `${SLEEPS_COLLECTION_ID}`, sleep.$id!!, sleep);
			const data = response as ISleep;
			if (data) {
				set((state) => {
					const foundSleepIndex = state.sleeps.findIndex(sleep => sleep.$id === data.$id);
					if (foundSleepIndex !== -1) {
						state.sleeps.splice(foundSleepIndex, 1, data);
					}
				});
			}
			set({ isLoading: false });
		}
	}))
);