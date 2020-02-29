// root template apps
import AdminApp from '@/views/templates/AdminApp';
import Auth from '@/views/admin/Auth';

export default [
	{
		path: '/admin',
		component: AdminApp,
		children: [
			{
				path: 'auth',
				component: Auth,
				children: []
			}
		]
	}
];
