import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const childStore = create(
	persist(
		(set: any, get: any) => ({
			childList: [],

			setChildList: (childList: any[]) => set({ childList }),
			clearChildList: () => set({ childList: [] }),
		}),
		{
			name: 'child-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
