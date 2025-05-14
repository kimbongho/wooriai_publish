import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const cloudStore = create(
	persist(
		(set: any, get: any) => ({
			cloud: {
				dirId: '',
				dirName: '',
				flag: '',
			},
			setCloudStore: (args: any) => {
				set((prev: any) => ({
					...prev,
					cloud: { ...prev.cloud, ...args },
				}))
			},
			clearCloudStore: () => {
				set(() => ({
					cloud: {
						dirId: '',
						dirName: '',
						flag: '',
					},
				}))
			},
		}),
		{
			name: 'cloud-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
