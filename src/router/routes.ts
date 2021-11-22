import { RouteRecordRaw } from 'vue-router'

export const pathNames = {
	home: 'home',
}

export type PathName = ValueOf<typeof pathNames>

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: async () => await import('layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: pathNames.home,
				component: async () => await import('pages/Home.vue'),
			},
		],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: async () => await import('pages/Error404.vue'),
	},
]

export default routes
