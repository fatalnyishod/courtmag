// root template apps
import AdminApp from '@/views/templates/AdminApp';
import Auth from '@/views/admin/Auth';
import Home from '@/views/admin/Home';

export default [
	{
		path: '/admin',
		component: AdminApp,
		children: [
			{
				path: 'auth',
				component: Auth
			},
			{
				path: 'home',
				name: "AdminHome",
				meta: {
					auth: true
				},
				component: Home,
				children: []
			}
		]
	}
];
