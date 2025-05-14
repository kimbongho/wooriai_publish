import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const returnStore = create(
	persist(
		(set: any, get: any) => ({
			returns: {
				childId: '',
				docId: '',
				regiDate: '',
			},
			setReturnStore: (args: any) => {
				set((prev: any) => ({
					...prev,
					returns: { ...prev.returns, ...args },
				}))
			},
			clearReturnStore: () => {
				set(() => ({
					returns: {
						childId: '',
						docId: '',
						regiDate: '',
					},
				}))
			},
		}),
		{
			name: 'return-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
