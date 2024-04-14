import { create } from 'zustand';
import { ISleep, ISleepSchema } from './sleep-models';
import { DB } from '../../../shared/api/appwrite';
import { DATABASE_ID, SLEEPS_COLLECTION_ID } from '../../../shared/api/const';
import { ID } from 'appwrite';
import { immer } from 'zustand/middleware/immer';

type Actions = {
	fetchSleeps: () => void;
	createSleep: (payload: ISleep) => void;
}

export const useSleepStore = create<ISleepSchema & Actions>()(
	immer((set, get) => ({
		sleeps: [],
		fetchSleeps: async () => {
			const response = await DB.listDocuments(`${DATABASE_ID}`, `${SLEEPS_COLLECTION_ID}`);
			const data = response.documents as ISleep[];
			set({ sleeps: data });
		},
		createSleep: async (sleep: ISleep) => {
			const response = await DB.createDocument(`${DATABASE_ID}`, `${SLEEPS_COLLECTION_ID}`, ID.unique(), sleep);
			const data = response as ISleep;
			if (data) {
				set((state) => {
					state.sleeps.push(data);
				});
			}
		}
	}))
);