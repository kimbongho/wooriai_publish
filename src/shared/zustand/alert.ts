import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const initAlert = {
	alertAt: '',
	alertId: 0,
	childId: '',
	daycareId: '',
	eventId: '',
	resourceUrl: '',
	solveYn: '',
	workoutGb: '',
	workoutUserId: 0,
	workoutDate: '',
	workoutTime: '',
	workoutDesc: '',
	profileName: '',
	rightsCode: '',
}

export const alertStore = create(
	persist(
		(set: any, get: any) => ({
			alert: initAlert,

			setAlertStore: (args: any) => {
				set((prev: any) => ({
					alert: { ...prev.alert, ...args },
				}))
			},
			clearAlertStore: () => {
				set(() => ({
					alert: initAlert,
				}))
			},
		}),
		{
			name: 'alert-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
