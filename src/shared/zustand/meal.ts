import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const initMeal = {
	mealDate: '',
	item: {},
	monthly: {
		mealId: '',
		classId: 0,
		mealDate: '',
	},
}
export const mealStore = create(
	persist(
		(set: any, get: any) => ({
			meal: initMeal,

			setMealStore: (args: any) => {
				set(prev => ({ ...prev, meal: { ...prev.meal, ...args } }))
			},
			clearMealStore: () => {
				set({ meal: initMeal })
			},
		}),
		{
			name: 'meal-storage',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
)
