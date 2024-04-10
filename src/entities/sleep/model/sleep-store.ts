import { create } from 'zustand';
import { ISleepCardSchema } from './sleep-models';

type State = {
	items: ISleepCardSchema[]
}

type Actions = {
	getList: () => void
}

export const useListStore = create<State & Actions>((set) => ({
	items: [],
	getList: () => set(state => ({}))
}));