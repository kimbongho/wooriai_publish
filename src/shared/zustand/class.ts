import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const classStore = create(
	persist(
		(set: any, get: any) => ({
			classList: [],

			setClassList: (classList: any[]) => set({ classList }),
			clearClassList: () => set({ classList: [] }),
		}),
		{
			name: 'class-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
