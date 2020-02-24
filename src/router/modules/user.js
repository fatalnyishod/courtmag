// root template apps
import UserApp from '@/views/templates/UserApp';

// views
import Home from '@/views/Home';
import Kicks from '@/views/Kicks';
import Fashion from '@/views/Fashion';
import Music from '@/views/Music';
import Life from '@/views/Life';

export default [
	{
		path: '/',
		component: UserApp,
		children: [
			{
				path: '/',
				name: 'Home',
				component: Home
			},
			{
				path: '/kicks',
				name: 'Kicks',
				component: Kicks
			},
			{
				path: '/fashion',
				name: 'Fashion',
				component: Fashion
			},
			{
				path: '/music',
				name: 'Music',
				component: Music
			},
			{
				path: '/life',
				name: 'Life',
				component: Life
			}
		]
	}
];
