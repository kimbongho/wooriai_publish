import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const scheduleStore = create(
	persist(
		(set: any, get: any) => ({
			scheduleId: '',

			setScheduleStore: (id: string) => {
				set({ scheduleId: id })
			},
			clearScheduleStore: () => {
				set({ scheduleId: '' })
			},
		}),
		{
			name: 'schedule-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
