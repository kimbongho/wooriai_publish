import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

const initUser = {
	userId: null,
	loginId: '',
	name: '',
	rights: '',
	userName: '',
	teacherId: '',
	daycareId: '',
	beforeLoginAt: '',
	exp: null,
	iat: null,
	profileImg: '',
}

export const userStore = create(
	devtools(
		persist(
			(set: any, get: any) => ({
				user: initUser,

				setLoginId: (loginId: string) => {
					set((prev: any) => ({
						...prev,
						user: { ...prev.user, loginId },
					}))
				},

				loginUser: (args: User | null) => {
					set((prev: any) => ({
						...prev,
						user: { ...prev.user, ...args },
					}))
				},

				logoutUser: () => {
					set((prev: User) => ({ user: initUser }))
				},
			}),
			{
				name: 'user-storage',
				storage: createJSONStorage(() => sessionStorage),
			}
		)
	)
)
