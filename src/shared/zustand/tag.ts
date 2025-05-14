import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const tagStore = create(
	persist(
		(set: any, get: any) => ({
			tag: {
				apiKey: '',
				contractCp: '',
				file: {},
			},
			tagList: [],

			setTagInfo: (args: any) => {
				set((prev: any) => ({
					...prev,
					tag: { ...prev.tag, ...args },
				}))
			},
			setTagList: (args: any[]) =>
				set((prev: any) => ({
					...prev,
					tagList: args || [],
				})),
		}),
		{
			name: 'tag-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
