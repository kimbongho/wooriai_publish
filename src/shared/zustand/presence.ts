import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const initPresence: ChildPresence = {
	absentReason: '',
	childId: '',
	childName: '',
	classGb: '',
	className: '',
	continuousDays: '',
	gubun: '',
	gubunText: '',
	presenceDate: '',
	presenceTm: '',
	profileImg: '',
	remedyIds: '',
	returnStatus: '',
	returnTm: '',
	backhomeTm: '',
	date: new Date()
}

export const presenceStore = create(
	persist(
		(set: any, get: any) => ({
			presence: initPresence,

			setPresence: (args: any[]) => set(prev => ({ ...prev, presence: { ...prev.presence, ...args } })),
			clearPresence: () => set({ presence: initPresence }),
		}),
		{
			name: 'presence-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
