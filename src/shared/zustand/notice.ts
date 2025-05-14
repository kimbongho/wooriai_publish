import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const initNotice = {
	noticeId: null,
	noticeTitle: '',
	noticeText: '',
	noticeGb: 'common',
	addTm: '',
	addYn: 'N',
	holdYn: 'N',
	tempSaveYn: 'Y',
	daycareId: '',
	createdId: 0,
	loginId: '',
	createdName: '',
	classId: null,
	editYn: 'N',
	createdAt: '',
	updatedAt: '',
	editorfiles: [],
	files: [],
	health: [],
}

export const noticeStore = create(
	persist(
		(set: any, get: any) => ({
			notice: initNotice,

			setNotice: (args: any) => {
				set((prev: any) => ({ ...prev, notice: { ...prev.notice, ...args } }))
			},

			deleteNotice: () => {
				set({ notice: initNotice })
			},
		}),
		{
			name: 'notice-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
