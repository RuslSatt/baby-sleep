import { create } from 'zustand';
import { ISleep, ISleepSchema } from './sleep-models';
import { DB } from '../../../shared/api/appwrite';
import { DATABASE_ID, SLEEPS_COLLECTION_ID } from '../../../shared/api/const';

type Actions = {
	fetchSleeps: () => void
}

export const useSleepStore = create<ISleepSchema & Actions>((set) => ({
	sleeps: [],
	fetchSleeps: async () => {
		const response = await DB.listDocuments(`${DATABASE_ID}`, `${SLEEPS_COLLECTION_ID}`);
		const data = response.documents as ISleep[];
		set({ sleeps: data });
	}
}));