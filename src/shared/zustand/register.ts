import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const registerStore = create(
	persist(
		(set: any, get: any) => ({
			member: {
				loginId: '',
				mobile: '',
				password: '',
				uuid: '',
			},

			setRegisterInfo: (args: any) => {
				set((prev: any) => ({
					...prev,
					member: { ...prev.member, ...args },
				}))
			},

			clearRegisterInfo: () => {
				set(() => ({
					member: {
						loginId: '',
						mobile: '',
						password: '',
						uuid: '',
					},
				}))
			},
		}),
		{
			name: 'register-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
