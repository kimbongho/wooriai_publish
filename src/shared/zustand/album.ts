import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const albumStore = create(
	persist(
		(set: any, get: any) => ({
			album: {
				albumId: '',
				albumTitle: '',
				albumDesc: '',
				classId: '',
				addTm: '',
				addYn: '',
				tempSaveYn: '',
				photoIds: [],
				checkItems: [],
				date: '',
			},
			setAlbumStore: (args: any) => {
				set((prev: any) => ({
					...prev,
					album: { ...prev.album, ...args },
				}))
			},
			clearAlbumStore: () => {
				set(() => ({
					album: {
						albumId: '',
						albumTitle: '',
						albumDesc: '',
						classId: '',
						addTm: '',
						addYn: '',
						tempSaveYn: '',
						photoIds: [],
						checkItems: [],
					},
				}))
			},
		}),
		{
			name: 'album-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
