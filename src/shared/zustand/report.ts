import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const initialReport = {
	newsId: null,
	newsDate: '',
	childId: '',
	childIds: [],
	isWrite: false,
	status: '',
	dailyNews: {},
	imgfiles: [],
	preview: [],
	previewPhoto: [],
	previewContent: '',
	previewForm: [],
}

export const reportStore = create(
	persist(
		(set: any, get: any) => ({
			report: initialReport,
			setReportInfo: (args: any) => {
				set((prev: any) => ({
					...prev,
					report: { ...prev.report, ...args },
				}))
			},
			clearReportStore: () => {
				set((prev: any) => ({
					report: initialReport,
				}))
			},
		}),
		{
			name: 'report-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
