import { create } from 'zustand';
import { ISleep, ISleepSchema } from './sleep-models';
import { DB } from '../../../shared/api/appwrite';
import { DATABASE_ID, SLEEPS_COLLECTION_ID } from '../../../shared/api/const';
import { ID } from 'appwrite';

type Actions = {
	fetchSleeps: () => void;
	createSleep: (payload: ISleep) => void;
}

export const useSleepStore = create<ISleepSchema & Actions>((set) => ({
	sleeps: [],
	fetchSleeps: async () => {
		const response = await DB.listDocuments(`${DATABASE_ID}`, `${SLEEPS_COLLECTION_ID}`);
		const data = response.documents as ISleep[];
		set({ sleeps: data });
	},
	createSleep: async (sleep: ISleep) => {
		const response = await DB.createDocument(`${DATABASE_ID}`, `${SLEEPS_COLLECTION_ID}`, ID.unique(), sleep);
		const data = response.document as ISleep;
		if (data) {
			set({ currentSleep: data });
			// set((state) => (
			// 	{
			// 		currentSleep: data,
			// 		sleeps: [...state.sleeps || [], sleep]
			// 	}
			// ));
		}
	}
}));