import { Button, Img, TabList, Tabs, useToast } from '@/entities'
import { BarChart } from '@/features'
import { globalStore, Server, userStore } from '@/shared'
import moment from 'moment'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './child.style'

const bireportList: any = {
	BIactivitytotal: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주', value: 12.42 },
			{ week: '3월 2주', value: 66.42 },
			{ week: '3월 3주', value: -4.42 },
			{ week: '3월 4주', value: -140.99 },
			{ week: '3월 5주', value: 33.21 },

			{ week: '4월 1주', value: 55.42 },
			{ week: '4월 2주', value: 17.42 },
			{ week: '4월 3주', value: -10.42 },
			{ week: '4월 4주', value: 11 },
			{ week: '4월 5주', value: 120 },

			{ week: '5월 1주', value: -66.18 },
			{ week: '5월 2주', value: 38.74 },
			{ week: '5월 3주', value: 115.87 },
			{ week: '5월 4주', value: 76.79 },
			{ week: '5월 5주', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 3.82 },
			{ month: '2024 3월', value: -10.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
	BIactivitydistance: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '1주차', value: 12.42 },
			{ week: '2주차', value: 66.42 },
			{ week: '3주차', value: -4.42 },
			{ week: '4주차', value: -140.99 },
			{ week: '5주차', value: 33.21 },

			{ week: '1주차', value: 55.42 },
			{ week: '2주차', value: 17.42 },
			{ week: '3주차', value: -10.42 },
			{ week: '4주차', value: 11 },
			{ week: '5주차', value: 120 },

			{ week: '1주차', value: -66.18 },
			{ week: '2주차', value: 38.74 },
			{ week: '3주차', value: 115.87 },
			{ week: '4주차', value: 76.79 },
			{ week: '5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '1월', value: 10.95 },
			{ month: '2월', value: 33.82 },
			{ month: '3월', value: -144.67 },
			{ month: '4월', value: 48.51 },
			{ month: '5월', value: 10.51 },
			{ month: '6월', value: -23.53 },
			{ month: '7월', value: 22.91 },
			{ month: '8월', value: 1.07 },
			{ month: '9월', value: 110.28 },
			{ month: '10월', value: 93.19 },
			{ month: '11월', value: -44.96 },
			{ month: '12월', value: 22.11 },

			{ month: '1월', value: 110.95 },
			{ month: '2월', value: 2.82 },
			{ month: '3월', value: 78.67 },
			{ month: '4월', value: -48.51 },
			{ month: '5월', value: 22.51 },
			{ month: '6월', value: 85.53 },
			{ month: '7월', value: 0.91 },
			{ month: '8월', value: -3.07 },
			{ month: '9월', value: 66.28 },
			{ month: '10월', value: 109.19 },
			{ month: '11월', value: -3.96 },
			{ month: '12월', value: 19.11 },

			{ month: '1월', value: -103.95 },
			{ month: '2월', value: 3.82 },
			{ month: '3월', value: -10.67 },
			{ month: '4월', value: 23.51 },
			{ month: '5월', value: 79.8 },
		],
	},
	BIactivityplace: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '1주차', value: 12.42 },
			{ week: '2주차', value: 66.42 },
			{ week: '3주차', value: -4.42 },
			{ week: '4주차', value: -140.99 },
			{ week: '5주차', value: 33.21 },

			{ week: '1주차', value: 55.42 },
			{ week: '2주차', value: 17.42 },
			{ week: '3주차', value: -10.42 },
			{ week: '4주차', value: 11 },
			{ week: '5주차', value: 120 },

			{ week: '1주차', value: -66.18 },
			{ week: '2주차', value: 38.74 },
			{ week: '3주차', value: 115.87 },
			{ week: '4주차', value: 76.79 },
			{ week: '5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '1월', value: 10.95 },
			{ month: '2월', value: 33.82 },
			{ month: '3월', value: -144.67 },
			{ month: '4월', value: 48.51 },
			{ month: '5월', value: 10.51 },
			{ month: '6월', value: -23.53 },
			{ month: '7월', value: 22.91 },
			{ month: '8월', value: 1.07 },
			{ month: '9월', value: 110.28 },
			{ month: '10월', value: 93.19 },
			{ month: '11월', value: -44.96 },
			{ month: '12월', value: 22.11 },

			{ month: '1월', value: 110.95 },
			{ month: '2월', value: 2.82 },
			{ month: '3월', value: 78.67 },
			{ month: '4월', value: -48.51 },
			{ month: '5월', value: 22.51 },
			{ month: '6월', value: 85.53 },
			{ month: '7월', value: 0.91 },
			{ month: '8월', value: -3.07 },
			{ month: '9월', value: 66.28 },
			{ month: '10월', value: 109.19 },
			{ month: '11월', value: -3.96 },
			{ month: '12월', value: 19.11 },

			{ month: '1월', value: -103.95 },
			{ month: '2월', value: 3.82 },
			{ month: '3월', value: -10.67 },
			{ month: '4월', value: 23.51 },
			{ month: '5월', value: 79.8 },
		],
	},
	BIsociabilitytotal: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -110.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: 120 },
			{ date: '2024-05-17', value: -60 },

			{ date: '2024-05-20', value: 70.21 },
			{ date: '2024-05-21', value: 110.24 },
			{ date: '2024-05-22', value: -80.23 },
			{ date: '2024-05-23', value: -50.58 },
			{ date: '2024-05-24', value: 10.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주', value: 12.42 },
			{ week: '3월 2주', value: 66.42 },
			{ week: '3월 3주', value: -4.42 },
			{ week: '3월 4주', value: -140.99 },
			{ week: '3월 5주', value: 33.21 },

			{ week: '4월 1주', value: 55.42 },
			{ week: '4월 2주', value: 17.42 },
			{ week: '4월 3주', value: -10.42 },
			{ week: '4월 4주', value: 11 },
			{ week: '4월 5주', value: 120 },

			{ week: '5월 1주', value: -66.18 },
			{ week: '5월 2주', value: 38.74 },
			{ week: '5월 3주', value: 115.87 },
			{ week: '5월 4주', value: 76.79 },
			{ week: '5월 5주', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 50.82 },
			{ month: '2024 3월', value: -80.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
	BIsociabilitycFrequency: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주차', value: 12.42 },
			{ week: '3월 2주차', value: 66.42 },
			{ week: '3월 3주차', value: -4.42 },
			{ week: '3월 4주차', value: -140.99 },
			{ week: '3월 5주차', value: 33.21 },

			{ week: '4월 1주차', value: 55.42 },
			{ week: '4월 2주차', value: 17.42 },
			{ week: '4월 3주차', value: -10.42 },
			{ week: '4월 4주차', value: 11 },
			{ week: '4월 5주차', value: 120 },

			{ week: '5월 1주차', value: -66.18 },
			{ week: '5월 2주차', value: 38.74 },
			{ week: '5월 3주차', value: 115.87 },
			{ week: '5월 4주차', value: 76.79 },
			{ week: '5월 5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 3.82 },
			{ month: '2024 3월', value: -10.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
	BIsociabilitycTime: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주차', value: 12.42 },
			{ week: '3월 2주차', value: 66.42 },
			{ week: '3월 3주차', value: -4.42 },
			{ week: '3월 4주차', value: -140.99 },
			{ week: '3월 5주차', value: 33.21 },

			{ week: '4월 1주차', value: 55.42 },
			{ week: '4월 2주차', value: 17.42 },
			{ week: '4월 3주차', value: -10.42 },
			{ week: '4월 4주차', value: 11 },
			{ week: '4월 5주차', value: 120 },

			{ week: '5월 1주차', value: -66.18 },
			{ week: '5월 2주차', value: 38.74 },
			{ week: '5월 3주차', value: 115.87 },
			{ week: '5월 4주차', value: 76.79 },
			{ week: '5월 5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 3.82 },
			{ month: '2024 3월', value: -10.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
	BIriskybehaviortotal: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주차', value: 12.42 },
			{ week: '3월 2주차', value: 66.42 },
			{ week: '3월 3주차', value: -4.42 },
			{ week: '3월 4주차', value: -140.99 },
			{ week: '3월 5주차', value: 33.21 },

			{ week: '4월 1주차', value: 55.42 },
			{ week: '4월 2주차', value: 17.42 },
			{ week: '4월 3주차', value: -10.42 },
			{ week: '4월 4주차', value: 11 },
			{ week: '4월 5주차', value: 120 },

			{ week: '5월 1주차', value: -66.18 },
			{ week: '5월 2주차', value: 38.74 },
			{ week: '5월 3주차', value: 115.87 },
			{ week: '5월 4주차', value: 76.79 },
			{ week: '5월 5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 3.82 },
			{ month: '2024 3월', value: -10.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
	BIriskybehaviorfastspeed: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주차', value: 12.42 },
			{ week: '3월 2주차', value: 66.42 },
			{ week: '3월 3주차', value: -4.42 },
			{ week: '3월 4주차', value: -140.99 },
			{ week: '3월 5주차', value: 33.21 },

			{ week: '4월 1주차', value: 55.42 },
			{ week: '4월 2주차', value: 17.42 },
			{ week: '4월 3주차', value: -10.42 },
			{ week: '4월 4주차', value: 11 },
			{ week: '4월 5주차', value: 120 },

			{ week: '5월 1주차', value: -66.18 },
			{ week: '5월 2주차', value: 38.74 },
			{ week: '5월 3주차', value: 115.87 },
			{ week: '5월 4주차', value: 76.79 },
			{ week: '5월 5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 3.82 },
			{ month: '2024 3월', value: -10.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
	BIriskybehaviorfalldown: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주차', value: 12.42 },
			{ week: '3월 2주차', value: 66.42 },
			{ week: '3월 3주차', value: -4.42 },
			{ week: '3월 4주차', value: -140.99 },
			{ week: '3월 5주차', value: 33.21 },

			{ week: '4월 1주차', value: 55.42 },
			{ week: '4월 2주차', value: 17.42 },
			{ week: '4월 3주차', value: -10.42 },
			{ week: '4월 4주차', value: 11 },
			{ week: '4월 5주차', value: 120 },

			{ week: '5월 1주차', value: -66.18 },
			{ week: '5월 2주차', value: 38.74 },
			{ week: '5월 3주차', value: 115.87 },
			{ week: '5월 4주차', value: 76.79 },
			{ week: '5월 5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 3.82 },
			{ month: '2024 3월', value: -10.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
	BIaggressivebehaviortotal: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주차', value: 12.42 },
			{ week: '3월 2주차', value: 66.42 },
			{ week: '3월 3주차', value: -4.42 },
			{ week: '3월 4주차', value: -140.99 },
			{ week: '3월 5주차', value: 33.21 },

			{ week: '4월 1주차', value: 55.42 },
			{ week: '4월 2주차', value: 17.42 },
			{ week: '4월 3주차', value: -10.42 },
			{ week: '4월 4주차', value: 11 },
			{ week: '4월 5주차', value: 120 },

			{ week: '5월 1주차', value: -66.18 },
			{ week: '5월 2주차', value: 38.74 },
			{ week: '5월 3주차', value: 115.87 },
			{ week: '5월 4주차', value: 76.79 },
			{ week: '5월 5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 3.82 },
			{ month: '2024 3월', value: -10.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
	BIaggressivebehaviorattack: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주차', value: 12.42 },
			{ week: '3월 2주차', value: 66.42 },
			{ week: '3월 3주차', value: -4.42 },
			{ week: '3월 4주차', value: -140.99 },
			{ week: '3월 5주차', value: 33.21 },

			{ week: '4월 1주차', value: 55.42 },
			{ week: '4월 2주차', value: 17.42 },
			{ week: '4월 3주차', value: -10.42 },
			{ week: '4월 4주차', value: 11 },
			{ week: '4월 5주차', value: 120 },

			{ week: '5월 1주차', value: -66.18 },
			{ week: '5월 2주차', value: 38.74 },
			{ week: '5월 3주차', value: 115.87 },
			{ week: '5월 4주차', value: 76.79 },
			{ week: '5월 5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 3.82 },
			{ month: '2024 3월', value: -10.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
	BIaggressivebehaviorthrow: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주차', value: 12.42 },
			{ week: '3월 2주차', value: 66.42 },
			{ week: '3월 3주차', value: -4.42 },
			{ week: '3월 4주차', value: -140.99 },
			{ week: '3월 5주차', value: 33.21 },

			{ week: '4월 1주차', value: 55.42 },
			{ week: '4월 2주차', value: 17.42 },
			{ week: '4월 3주차', value: -10.42 },
			{ week: '4월 4주차', value: 11 },
			{ week: '4월 5주차', value: 120 },

			{ week: '5월 1주차', value: -66.18 },
			{ week: '5월 2주차', value: 38.74 },
			{ week: '5월 3주차', value: 115.87 },
			{ week: '5월 4주차', value: 76.79 },
			{ week: '5월 5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 3.82 },
			{ month: '2024 3월', value: -10.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
	BIbreakouttotal: {
		BIdaily: [
			{ date: '2024-05-13', value: 44.41 },
			{ date: '2024-05-14', value: -120.41 },
			{ date: '2024-05-15', value: 70.41 },
			{ date: '2024-05-16', value: -23.41 },
			{ date: '2024-05-17', value: 0 },

			{ date: '2024-05-20', value: -10.21 },
			{ date: '2024-05-21', value: 24.24 },
			{ date: '2024-05-22', value: -112.23 },
			{ date: '2024-05-23', value: 94.58 },
			{ date: '2024-05-24', value: 102.74 },

			{ date: '2024-05-27', value: 55.87 },
		],
		BIweekly: [
			{ week: '3월 1주차', value: 12.42 },
			{ week: '3월 2주차', value: 66.42 },
			{ week: '3월 3주차', value: -4.42 },
			{ week: '3월 4주차', value: -140.99 },
			{ week: '3월 5주차', value: 33.21 },

			{ week: '4월 1주차', value: 55.42 },
			{ week: '4월 2주차', value: 17.42 },
			{ week: '4월 3주차', value: -10.42 },
			{ week: '4월 4주차', value: 11 },
			{ week: '4월 5주차', value: 120 },

			{ week: '5월 1주차', value: -66.18 },
			{ week: '5월 2주차', value: 38.74 },
			{ week: '5월 3주차', value: 115.87 },
			{ week: '5월 4주차', value: 76.79 },
			{ week: '5월 5주차', value: 63.9 },
		],
		BImonthly: [
			{ month: '2022 1월', value: 10.95 },
			{ month: '2022 2월', value: 33.82 },
			{ month: '2022 3월', value: -144.67 },
			{ month: '2022 4월', value: 48.51 },
			{ month: '2022 5월', value: 10.51 },
			{ month: '2022 6월', value: -23.53 },
			{ month: '2022 7월', value: 22.91 },
			{ month: '2022 8월', value: 1.07 },
			{ month: '2022 9월', value: 110.28 },
			{ month: '2022 10월', value: 93.19 },
			{ month: '2022 11월', value: -44.96 },
			{ month: '2022 12월', value: 22.11 },

			{ month: '2023 1월', value: 110.95 },
			{ month: '2023 2월', value: 2.82 },
			{ month: '2023 3월', value: 78.67 },
			{ month: '2023 4월', value: -48.51 },
			{ month: '2023 5월', value: 22.51 },
			{ month: '2023 6월', value: 85.53 },
			{ month: '2023 7월', value: 0.91 },
			{ month: '2023 8월', value: -3.07 },
			{ month: '2023 9월', value: 66.28 },
			{ month: '2023 10월', value: 109.19 },
			{ month: '2023 11월', value: -3.96 },
			{ month: '2023 12월', value: 19.11 },

			{ month: '2024 1월', value: -103.95 },
			{ month: '2024 2월', value: 3.82 },
			{ month: '2024 3월', value: -10.67 },
			{ month: '2024 4월', value: 23.51 },
			{ month: '2024 5월', value: 79.8 },
		],
	},
}

const tabInfo = ['BIdaily', 'BIweekly', 'BImonthly']
const dayType = ['일', '월', '화', '수', '목', '금', '토']
const type: any = [
	{ format: 'YYYY.MM.DD', dateType: 'w' },
	{ format: 'YYYY.MM', dateType: 'M' },
	{ format: 'YYYY', dateType: 'y' },
]
const initBIreport = {
	BIdaily: [],
	BIweekly: [],
	BImontly: [],
	// BIstandard: []
}

const _ = () => {
	const toast = useToast()
	const param: any = useParams()
	const { user } = userStore()
	const [childInfo, setChildInfo] = useState({
		childBirth: '',
		childId: '',
		childName: '',
		childResidence: '',
		classId: null,
		className: '',
		daycareId: '',
		delYn: '',
		parentTel: '',
		tagId: '',
		teacherId: '',
	})
	const [tabIndex, setTabIndex] = useState(0)
	const [date, setDate] = useState<any>(moment())
	const [sociabilitytotal, setSociabilitytotal] = useState<any>([])
	const [sociabilitycFrequency, setSociabilitycFrequency] = useState<any>([])
	const [sociabilitycTime, setSociabilitycTime] = useState<any>([])
	const [riskybehaviortotal, setRiskybehaviortotal] = useState<any>([])
	// const [riskybehaviorfastspeed, setRiskybehaviorfastspeed] = useState<any>([])
	// const [riskybehaviorfalldown, setRiskybehaviorfalldown] = useState<any>([])
	const [breakouttotal, setBreakouttotal] = useState<any>([])
	const [aggressivebehaviortotal, setAggressivebehaviortotal] = useState<any>([])
	// const [aggressivebehaviorattack, setAggressivebehaviorattack] = useState<any>([])
	// const [aggressivebehaviorthrow, setAggressivebehaviorthrow] = useState<any>([])
	const [activitytotal, setActivitytotal] = useState<any>([])
	// const [activitydistance, setActivitydistance] = useState<any>([])
	// const [activityplace, setActivityplace] = useState<any>([])

	const id: string = param?.id

	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'BI 리포트',
			back: true,
			menu: true,
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})
	}, [])

	useEffect(() => {
		setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date > moment().add(-1, type[tabIndex].dateType).isoWeekday(7).format('YYYY-MM-DD') && v.date <= moment(date).format('YYYY-MM-DD')))
		setSociabilitycFrequency(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date > moment().add(-1, type[tabIndex].dateType).isoWeekday(7).format('YYYY-MM-DD') && v.date <= moment(date).format('YYYY-MM-DD')))
		setSociabilitycTime(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date > moment().add(-1, type[tabIndex].dateType).isoWeekday(7).format('YYYY-MM-DD') && v.date <= moment(date).format('YYYY-MM-DD')))
		setRiskybehaviortotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date > moment().add(-1, type[tabIndex].dateType).isoWeekday(7).format('YYYY-MM-DD') && v.date <= moment(date).format('YYYY-MM-DD')))
		setBreakouttotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date > moment().add(-1, type[tabIndex].dateType).isoWeekday(7).format('YYYY-MM-DD') && v.date <= moment(date).format('YYYY-MM-DD')))
		setAggressivebehaviortotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date > moment().add(-1, type[tabIndex].dateType).isoWeekday(7).format('YYYY-MM-DD') && v.date <= moment(date).format('YYYY-MM-DD')))
		setActivitytotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date > moment().add(-1, type[tabIndex].dateType).isoWeekday(7).format('YYYY-MM-DD') && v.date <= moment(date).format('YYYY-MM-DD')))

		//TODO: 추후 연동
		/*// 사회성
		Server.get(`/api/bi-report/sociability/data/0000000001/${id}`).then(response => {
			const state = response.data.state
			const message = response.data.message
			const data = response.data.data

			if (state === 'ok') {
				console.log(data['BIdaily'])
				console.log(data)
				setSociability(data)
			} else {
				toast.toast(message)
			}
		})

		// 위험행동
		Server.get(`/api/bi-report/riskybehavior/data/0000000001/${id}`).then(response => {
			const state = response.data.state
			const message = response.data.message
			const data = response.data.data

			if (state === 'ok') {
				// console.log(data)
				setRiskybehavior(data)
			} else {
				toast.toast(message)
			}
		})

		// 장소이탈
		Server.get(`/api/bi-report/breakout/data/0000000001/${id}`).then(response => {
			const state = response.data.state
			const message = response.data.message
			const data = response.data.data

			if (state === 'ok') {
				// console.log(data)
				setBreakout(data)
			} else {
				toast.toast(message)
			}
		})

		// 공격행동
		Server.get(`/api/bi-report/aggressivebehavior/data/0000000001/${id}`).then(response => {
			const state = response.data.state
			const message = response.data.message
			const data = response.data.data

			if (state === 'ok') {
				// console.log(data)
				setAggressivebehavior(data)
			} else {
				toast.toast(message)
			}
		})

		// 활동성
		Server.get(`/api/bi-report/activity/data/0000000001/${id}`).then(response => {
			const state = response.data.state
			const message = response.data.message
			const data = response.data.data

			if (state === 'ok') {
				// console.log(data)
				setActivity(data)
			} else {
				toast.toast(message)
			}
		})*/
	}, [])

	useEffect(() => {
		Server.get(`/api/daycare/child/info/${user.daycareId}/${id}`).then(response => {
			const state = response.data.state
			const data = response.data.data
			const message = response.data.message

			if (state === 'ok') {
				setChildInfo(data)
			} else {
				toast.toast(message)
			}
		})
	}, [])

	const tabIndexChange = (idx: any) => {
		setDate(moment())
		setTabIndex(idx)

		switch (idx) {
			case 0:
				setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[idx]].filter((v: any) => v.date > moment().add(-1, type[idx].dateType).isoWeekday(7).format('YYYY-MM-DD') && v.date <= moment().format('YYYY-MM-DD')))
				break
			case 1:
				setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[idx]].filter((v: any) => v.week.split('월')[0] == moment().month() + 1))
				break
			case 2:
				setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[idx]].filter((v: any) => v.month.split(' ')[0] == moment().year()))
				break
		}
	}

	const moreToggle = (e: any) => {
		const chartMore = e.currentTarget.closest('.chart-box').querySelector('.chart-more')
		if (!chartMore.classList.contains('on')) {
			chartMore.classList.add('on')
		} else {
			chartMore.classList.remove('on')
		}
	}

	const handlePrevDateBtn = () => {
		// bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date > moment(date, "YYYY.MM.DD").add(-1, type[tabIndex].dateType).isoWeekday(7).format('YYYY-MM-DD') && v.date <= moment(date).format('YYYY-MM-DD'))

		if (tabIndex === 0) {
			// 작주 일요일
			const prevWeekLastDay = moment(date, 'YYYY.MM.DD').add(-1, type[tabIndex].dateType).isoWeekday(7)
			setDate(moment(prevWeekLastDay))
			setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date > moment(prevWeekLastDay).add(-1, type[tabIndex].dateType).isoWeekday(7).format('YYYY-MM-DD') && v.date <= moment(prevWeekLastDay).format('YYYY-MM-DD')))
		} else {
			if (tabIndex === 1) {
				setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.week.split('월')[0] == date.month()))
			} else {
				setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.month.split(' ')[0] == date.year() - 1))
			}
			setDate((prev: string) => moment(prev).add(-1, type[tabIndex].dateType))
		}
	}
	const handleNextDateBtn = () => {
		if (tabIndex === 0) {
			// 차주 일요일
			const nextWeekLastDay = moment(date, 'YYYY.MM.DD').add(1, type[tabIndex].dateType).day(0)
			if (moment() < nextWeekLastDay) {
				setDate(moment())
				setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date <= moment().format('YYYY-MM-DD') && v.date > date.format('YYYY-MM-DD')))
			} else {
				setDate(nextWeekLastDay)
				setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.date <= nextWeekLastDay.format('YYYY-MM-DD') && v.date > date.format('YYYY-MM-DD')))
			}
		} else {
			if (tabIndex === 1) {
				setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.week.split('월')[0] == date.month() + 2))
			} else {
				setSociabilitytotal(bireportList.BIsociabilitytotal[tabInfo[tabIndex]].filter((v: any) => v.month.split(' ')[0] == date.year() + 1))
			}
			setDate((prev: string) => moment(prev, type[tabIndex].format).add(1, type[tabIndex].dateType))
		}
	}

	const formatWeekDay = (dateParam: string) => {
		const startOfMonth = moment(dateParam, 'YYYY.MM.DD').startOf('month')
		const startOfWeek = startOfMonth.startOf('isoWeek')
		const currentWeekOfMonth = moment(dateParam, 'YYYY.MM.DD').diff(startOfWeek, 'weeks') + 1

		return `${moment(dateParam, 'YYYY.MM.DD').format('YYYY.MM')} (${currentWeekOfMonth}주차)`
	}

	return (
		<Contents>
			<div className='bireport-wrap'>
				<div className='page-top-area'>
					<Tabs index={tabIndex} className='tab-type1' tabChange={tabIndexChange}>
						<TabList>
							<Button>일</Button>
							<Button>월</Button>
							<Button>년</Button>
						</TabList>
					</Tabs>
				</div>

				<div className='bireport-section'>
					<div className='monthly-indicator'>
						<Button className='btn-prev' onClick={handlePrevDateBtn}></Button>
						<b>{tabIndex === 0 ? formatWeekDay(date).split(' ')[0] : date.format(type[tabIndex].format)}</b>
						{tabIndex === 0 && <span className='sub'>{formatWeekDay(date).split(' ')[1]}</span>}
						<Button disabled={moment().format(type[tabIndex].format) === date.format(type[tabIndex].format)} className={`btn-next ${moment().format(type[tabIndex].format) === date.format(type[tabIndex].format) && 'disabled'}`} onClick={handleNextDateBtn}></Button>
					</div>

					<div className='banner-profile'>
						<div className='on'>
							<div className='img'>
								<Img src={'/images/temp/temp-profile.png'} alt='' />
							</div>
							<div className='desc'>
								<span className='cls-name'>{childInfo?.className}</span>
								<span className='name'>{childInfo?.childName}</span>
								<div className='parent'>학부모 : 소이현</div>
							</div>
						</div>
					</div>

					<div className='legend'>
						<span className='warning'>
							<i></i>
							<span className='txt'>경고</span>
						</span>
						<span className='caution'>
							<i></i>
							<span className='txt'>주의</span>
						</span>
						<span className='normal'>
							<i></i>
							<span className='txt'>정상</span>
						</span>
					</div>

					<div className='bi-chart-wrap'>
						<div className='chart-box'>
							<div className='chart'>
								<div className='tit-wrap'>
									<b className='tit activity'>활동성</b>
									<span className='per'>120%</span>
								</div>
								<BarChart
									data={sociabilitytotal.map((v: any) => v.value)}
									label={sociabilitytotal.map((v: any) => (tabIndex === 0 ? `${moment(v.date).format('MM.DD')}(${dayType[moment(v.date).day()]})` : tabIndex === 1 ? v.week.split(' ')[1] : tabIndex === 2 ? v.month.split(' ')[1] : ''))}
									// data={activity ? activity[tabInfo[tabIndex]]?.map((v: any) => v.value) : []}
									// label={activity ? activity[tabInfo[tabIndex]]?.map((v: any) => tabIndex === 0 ? v.date?.slice(5, 11) : tabIndex === 1 ? v.week :tabIndex === 2 ? v.month : '' ) : []}
								/>
							</div>
							<div className='chart-more'>
								<div className='chart'>
									<div className='tit-wrap'>
										<b className='tit'>이동거리</b>
										<span className='per'>130%</span>
									</div>
									<BarChart
										data={sociabilitytotal.map((v: any) => v.value)}
										label={sociabilitytotal.map((v: any) => (tabIndex === 0 ? `${moment(v.date).format('MM.DD')}(${dayType[moment(v.date).day()]})` : tabIndex === 1 ? v.week.split(' ')[1] : tabIndex === 2 ? v.month.split(' ')[1] : ''))}
										// data={sociability ? sociability[tabInfo[tabIndex]]?.map((v: any) => v.value) : []}
										// label={sociability ? sociability[tabInfo[tabIndex]]?.map((v: any) => tabIndex === 0 ? v.date?.slice(5, 11) : tabIndex === 1 ? v.week :tabIndex === 2 ? v.month : '' ) : []}
									/>
								</div>
								<div className='chart'>
									<div className='tit-wrap'>
										<b className='tit'>장소</b>
										<span className='per'>130%</span>
									</div>
									<BarChart
										data={sociabilitytotal.map((v: any) => v.value)}
										label={sociabilitytotal.map((v: any) => (tabIndex === 0 ? `${moment(v.date).format('MM.DD')}(${dayType[moment(v.date).day()]})` : tabIndex === 1 ? v.week.split(' ')[1] : tabIndex === 2 ? v.month.split(' ')[1] : ''))}
										// data={sociability ? sociability[tabInfo[tabIndex]]?.map((v: any) => v.value) : []}
										// label={sociability ? sociability[tabInfo[tabIndex]]?.map((v: any) => tabIndex === 0 ? v.date?.slice(5, 11) : tabIndex === 1 ? v.week :tabIndex === 2 ? v.month : '' ) : []}
									/>
								</div>
							</div>
							<Button className='btn-more' onClick={moreToggle}>
								<span className='on'>펼쳐보기</span>
								<span className='off'>접어보기</span>
							</Button>
						</div>
						<div className='chart-box'>
							<div className='chart'>
								<div className='tit-wrap'>
									<b className='tit sociability'>사회성</b>
									<span className='per'>110%</span>
								</div>
								<BarChart
									data={sociabilitytotal.map((v: any) => v.value)}
									label={sociabilitytotal.map((v: any) => (tabIndex === 0 ? `${moment(v.date).format('MM.DD')}(${dayType[moment(v.date).day()]})` : tabIndex === 1 ? v.week.split(' ')[1] : tabIndex === 2 ? v.month.split(' ')[1] : ''))}
									// data={sociability ? sociability[tabInfo[tabIndex]]?.map((v: any) => tabIndex === 1 ? v.value : v.value) : []}
									// label={sociability ? sociability[tabInfo[tabIndex]]?.map((v: any) => tabIndex === 0 ? v.date?.slice(5, 11) : tabIndex === 1 ? v.week :tabIndex === 2 ? v.month : '' ) : []}
								/>
							</div>
							<div className='chart-more'>
								<div className='chart'>
									<div className='tit-wrap'>
										<b className='tit'>접촉빈도</b>
										<span className='per'>130%</span>
									</div>
									<BarChart
										data={sociabilitytotal.map((v: any) => v.value)}
										label={sociabilitytotal.map((v: any) => (tabIndex === 0 ? `${moment(v.date).format('MM.DD')}(${dayType[moment(v.date).day()]})` : tabIndex === 1 ? v.week.split(' ')[1] : tabIndex === 2 ? v.month.split(' ')[1] : ''))}
										// data={sociability ? sociability[tabInfo[tabIndex]]?.map((v: any) => v.value) : []}
										// label={sociability ? sociability[tabInfo[tabIndex]]?.map((v: any) => tabIndex === 0 ? v.date?.slice(5, 11) : tabIndex === 1 ? v.week :tabIndex === 2 ? v.month : '' ) : []}
									/>
								</div>
								<div className='chart'>
									<div className='tit-wrap'>
										<b className='tit'>접촉시간</b>
										<span className='per'>130%</span>
									</div>
									<BarChart
										data={sociabilitytotal.map((v: any) => v.value)}
										label={sociabilitytotal.map((v: any) => (tabIndex === 0 ? `${moment(v.date).format('MM.DD')}(${dayType[moment(v.date).day()]})` : tabIndex === 1 ? v.week.split(' ')[1] : tabIndex === 2 ? v.month.split(' ')[1] : ''))}
										// data={sociability ? sociability[tabInfo[tabIndex]]?.map((v: any) => v.value) : []}
										// label={sociability ? sociability[tabInfo[tabIndex]]?.map((v: any) => tabIndex === 0 ? v.date?.slice(5, 11) : tabIndex === 1 ? v.week :tabIndex === 2 ? v.month : '' ) : []}
									/>
								</div>
							</div>
							<Button className='btn-more' onClick={moreToggle}>
								<span className='on'>펼쳐보기</span>
								<span className='off'>접어보기</span>
							</Button>
						</div>
						<div className='chart-box'>
							<div className='chart'>
								<div className='tit-wrap'>
									<b className='tit risky'>위험행동</b>
									<span className='per'>80%</span>
								</div>
								<BarChart
									data={sociabilitytotal.map((v: any) => v.value)}
									label={sociabilitytotal.map((v: any) => (tabIndex === 0 ? `${moment(v.date).format('MM.DD')}(${dayType[moment(v.date).day()]})` : tabIndex === 1 ? v.week.split(' ')[1] : tabIndex === 2 ? v.month.split(' ')[1] : ''))}
									// data={riskybehavior ? riskybehavior[tabInfo[tabIndex]]?.map((v: any) => v.value) : []}
									// label={riskybehavior ? riskybehavior[tabInfo[tabIndex]]?.map((v: any) => tabIndex === 0 ? v.date?.slice(5, 11) : tabIndex === 1 ? v.week :tabIndex === 2 ? v.month : '' ) : []}
								/>
							</div>
						</div>
						<div className='chart-box'>
							<div className='chart'>
								<div className='tit-wrap'>
									<b className='tit leaving'>장소이탈</b>
									<span className='per'>130%</span>
								</div>
								<BarChart
									data={sociabilitytotal.map((v: any) => v.value)}
									label={sociabilitytotal.map((v: any) => (tabIndex === 0 ? `${moment(v.date).format('MM.DD')}(${dayType[moment(v.date).day()]})` : tabIndex === 1 ? v.week.split(' ')[1] : tabIndex === 2 ? v.month.split(' ')[1] : ''))}
									// data={breakout ? breakout[tabInfo[tabIndex]]?.map((v: any) => v.value) : []}
									// label={breakout ? breakout[tabInfo[tabIndex]]?.map((v: any) => tabIndex === 0 ? v.date?.slice(5, 11) : tabIndex === 1 ? v.week :tabIndex === 2 ? v.month : '' ) : []}
								/>
							</div>
						</div>
						{/*TODO: 공격행동 아이콘 없음*/}
						{/*<div className='chart-box'>
							<div className='chart'>
								<div className='tit-wrap'>
									<b className='tit'>공격행동</b>
									<span className='per'>90%</span>
								</div>
								<BarChart
									data={sociabilitytotal.map((v: any) => v.value)}
									label={sociabilitytotal.map((v: any) => (tabIndex === 0 ? v.date?.slice(5, 11) : tabIndex === 1 ? v.week.split(' ')[1] : tabIndex === 2 ? v.month.split(' ')[1] : ''))}
									// data={aggressivebehavior ? aggressivebehavior[tabInfo[tabIndex]]?.map((v: any) => v.value) : []}
									// label={aggressivebehavior ? aggressivebehavior[tabInfo[tabIndex]]?.map((v: any) => tabIndex === 0 ? v.date?.slice(5, 11) : tabIndex === 1 ? v.week :tabIndex === 2 ? v.month : '' ) : []}
								/>
							</div>
						</div>*/}
					</div>
				</div>
			</div>
		</Contents>
	)
}

export default _
