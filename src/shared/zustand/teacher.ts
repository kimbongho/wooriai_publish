import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const teacherStore = create(
	persist(
		(set: any, get: any) => ({
			teacherList: [],

			setTeacherList: (teacherList: any[]) => set({ teacherList }),
			clearTeacherList: () => set({ teacherList: [] }),
		}),
		{
			name: 'teacher-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
