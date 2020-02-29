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
				component: Auth,
				children: []
			},
			{
				path: 'home',
				component: Home,
				children: []
			}
		]
	}
];
