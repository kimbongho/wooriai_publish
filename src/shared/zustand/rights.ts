import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const rightsStore = create(
	persist(
		(set: any, get: any) => ({
			rightsCode: '',
			userId: null,
			daycareId: '',
			userName: '',
			teacherId: null,
			childId: null,
			childName: '',
			classId: null,
			className: '',
			profileThumb: '',
			profileImg: '',
			mobile: '',

			setRightsCode: (rightsCode: string) => set({ rightsCode }),
			setUserId: (userId: number | null) => set({ userId }),
			setDaycareId: (daycareId: string) => set({ daycareId }),
			setUserName: (userName: string) => set({ userName }),
			setTeacherId: (teacherId: string) => set({ teacherId }),
			setChildId: (childId: string) => set({ childId }),
			setChildName: (childName: string) => set({ childName }),
			setClassId: (classId: number | null) => set({ classId }),
			setClassName: (className: string) => set({ className }),
			setProfileThumb: (profileThumb: string) => set({ profileThumb }),
			setProfileImg: (profileImg: string) => set({ profileImg }),
			setMobile: (mobile: string) => set({ mobile }),
		}),
		{
			name: 'rights-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
