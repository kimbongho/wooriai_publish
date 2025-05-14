import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const initHeader: Header = {
	type: 'none',
	title: '',
	back: false,
	menu: false,
	close: false,
	trash: false,
	dotmenu: false,
	menupop: false,
	logo: false,
}

const initFooter: Footer = {
	fixed: false,
	reple: false,
	class: '',
}

const initReple: Reple = {
	fixed: false,
}

const initGnb: Gnb = {
	open: false,
}

const initMenubar: Menubar = {
	fixed: false,
}
const initAuthPhone: AuthPhone = {
	phoneNumber: '',
	prevRouter: 'NONE',
	tabIndex: 0,
}

const initBackLogic: string = ''

export const globalStore = create(
	persist(
		(set: any, get: any) => ({
			header: initHeader,
			footer: initFooter,
			reple: initReple,
			gnb: initGnb,
			menubar: initMenubar,
			authPhone: initAuthPhone,
			backLogic: initBackLogic,
			fnTrash: () => {},

			setHeader: (args: Header) => {
				set((prev: Header) => ({ ...prev, header: { initHeader, ...args } }))
			},
			setFooter: (args: Footer) => {
				set((prev: Footer) => ({ ...prev, footer: { initFooter, ...args } }))
			},
			setReple: (args: Reple) => set((prev: any) => ({ ...prev, reple: { initReple, ...args } })),
			setGnb: (args: Gnb) => set((prev: any) => ({ ...prev, gnb: { initGnb, ...args } })),
			setMenubar: (args: Menubar) => set((prev: any) => ({ ...prev, menubar: { initMenubar, ...args } })),
			setAuthPhone: (args: AuthPhone) => set((prev: any) => ({ ...prev, authPhone: { initAuthPhone, ...args } })),
			clearAuthPhone: () => set((prev: any) => ({ ...prev, authPhone: initAuthPhone })),
			setBackLogic: (args: string) => set((prev: any) => ({ ...prev, backLogic: args })),
			clearBackLogic: () => set((prev: any) => ({ ...prev, backLogic: initBackLogic })),
			setTrashFunc: (args: () => {}) => set((prev: any) => ({ ...prev, fnTrash: args })),
			clearTrashFunc: () => set((prev: any) => ({ ...prev, fnTrash: () => {} })),
		}),
		{
			name: 'global-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
