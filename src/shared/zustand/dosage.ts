import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const dosageStore = create(
	persist(
		(set: any, get: any) => ({
			dosage: {
				childId: '',
				remedyId: '',
				regiDate: '',
			},
			setDosageStore: (args: any) => {
				set((prev: any) => ({
					...prev,
					dosage: { ...prev.dosage, ...args },
				}))
			},
			clearDosageStore: () => {
				set(() => ({
					dosage: {
						childId: '',
						remedyId: '',
						regiDate: '',
					},
				}))
			},
		}),
		{
			name: 'dosage-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
