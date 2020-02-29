// root template apps
import AdminApp from '@/views/templates/AdminApp';
import Auth from '@/views/admin/Auth';
import Dashboard from '@/views/admin/Dashboard';

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
				path: 'dashboard',
				name: "AdminDashboard",
				component: Dashboard,
				meta: {
					auth: true
				},
				children: []
			}
		]
	}
];
