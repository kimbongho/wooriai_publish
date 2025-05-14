import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const initAgreement = {
	checkStore: [],
}

export const agreementStore = create(
	persist(
		(set: any, get: any) => ({
			agreement: initAgreement,

			setAgreementStore: (args: any) => {
				set((prev: any) => ({
					agreement: { ...prev.agreement, ...args },
				}))
			},
			clearAgreementStore: () => {
				set(() => ({
					agreement: initAgreement,
				}))
			},
		}),
		{
			name: 'agreement-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
