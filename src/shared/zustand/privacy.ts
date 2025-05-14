import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const privacyStore = create(
	persist(
		(set: any, get: any) => ({
			privacy: {
				loginId: '',
				mobile: '',
				password: '',
				uuid: '',
			},

			setPrivacyInfo: (args: any) => {
				set((prev: any) => ({
					...prev,
					privacy: { ...prev.privacy, ...args },
				}))
			},

			clearPrivacyInfo: () => {
				set(() => ({
					privacy: {
						loginId: '',
						mobile: '',
						password: '',
						uuid: '',
					},
				}))
			},
		}),
		{
			name: 'privacy-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
